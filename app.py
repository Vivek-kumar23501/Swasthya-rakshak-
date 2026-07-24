from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)

# Only allow requests from the React dev server. Update this (or add your
# production domain) when you deploy.
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Reject uploads larger than 5 MB before they even reach the handler.
app.config["MAX_CONTENT_LENGTH"] = 5 * 1024 * 1024

# Load model once when server starts
model = tf.keras.models.load_model("breast_cancer_model.keras")

THRESHOLD = 0.4
IMG_SIZE = (50, 50)
ALLOWED_CONTENT_TYPES = {"image/png", "image/jpeg", "image/jpg", "image/webp"}


def preprocess_image(img):
    img = img.convert("RGB")
    img = img.resize(IMG_SIZE)
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array


@app.route("/", methods=["GET"])
def home():
    # This service is now a pure JSON API — the UI lives in the React app
    # at the /breast-cancer-prediction route. This just confirms the API is up.
    return jsonify({
        "status": "ok",
        "service": "Breast Cancer Prediction API",
        "endpoints": ["/health", "/predict"]
    })


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "message": "Breast Cancer Prediction API Running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({
            "error": "No image uploaded"
        }), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({
            "error": "No file selected"
        }), 400

    if file.content_type not in ALLOWED_CONTENT_TYPES:
        return jsonify({
            "error": "Unsupported file type. Please upload a PNG, JPEG, or WEBP image."
        }), 400

    try:
        image = Image.open(io.BytesIO(file.read()))
        image.verify()  # catches truncated/corrupt files that PIL would otherwise open lazily
        file.seek(0)
        image = Image.open(io.BytesIO(file.read()))
    except Exception:
        return jsonify({
            "error": "Invalid image"
        }), 400

    try:
        processed = preprocess_image(image)
        probability = float(model.predict(processed)[0][0])
    except Exception:
        return jsonify({
            "error": "Failed to process the image. Please try a different file."
        }), 500

    prediction = 1 if probability >= THRESHOLD else 0

    label = "IDC Positive" if prediction else "IDC Negative"

    confidence = (
        probability * 100
        if prediction
        else (1 - probability) * 100
    )

    return jsonify({
        "prediction": prediction,
        "label": label,
        "probability": round(probability, 4),
        "confidence": round(confidence, 2),
        "threshold": THRESHOLD
    })


@app.errorhandler(413)
def file_too_large(e):
    return jsonify({"error": "File too large. Max upload size is 5 MB."}), 413


if __name__ == "__main__":
    app.run(debug=True, port=5001)