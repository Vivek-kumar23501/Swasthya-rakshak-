import { useState, useRef, useCallback } from "react";
import { Ribbon, Loader2, AlertCircle, RotateCw, ScanLine, UploadCloud, Sparkles } from "lucide-react";

// Flask inference microservice (see app.py) — adjust if deployed elsewhere.
const PREDICTION_API = "http://localhost:5001";

function ConfidenceGauge({ percent, positive }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const color = positive ? "#dc2626" : "#0d5c63";

  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg viewBox="0 0 108 108" className="h-32 w-32 -rotate-90">
        <circle cx="54" cy="54" r={radius} fill="none" stroke="#eef5f4" strokeWidth="9" />
        <circle
          cx="54"
          cy="54"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-[#0b1f24]">{percent}%</span>
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#5b7a75]">
          confidence
        </span>
      </div>
    </div>
  );
}

function BreastCancerPrediction() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const loadFile = (selected) => {
    if (!selected || !selected.type.startsWith("image/")) {
      setError("Please choose a valid image file");
      return;
    }
    setFile(selected);
    setImage(URL.createObjectURL(selected));
    setResult(null);
    setError("");
  };

  const handleUpload = (e) => {
    loadFile(e.target.files?.[0]);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
    loadFile(e.dataTransfer.files?.[0]);
  }, []);

  const handlePredict = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${PREDICTION_API}/predict`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Prediction failed");
        return;
      }

      setResult(data);
    } catch (err) {
      setError("Couldn't reach the prediction server. Is it running on port 5001?");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setImage(null);
    setResult(null);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#08191b]">
      <style>{`
        @keyframes bcp-sweep {
          0% { transform: translateY(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .bcp-scanline { animation: bcp-sweep 1.8s ease-in-out infinite; }

        @keyframes bcp-fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bcp-fade-up { animation: bcp-fade-up 400ms ease-out both; }

        @keyframes bcp-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-3%, 4%) scale(1.06); }
        }
        .bcp-drift { animation: bcp-drift 14s ease-in-out infinite; }
        .bcp-drift-slow { animation: bcp-drift 20s ease-in-out infinite reverse; }
      `}</style>

      {/* Background: quiet gradient + one faint glow, full page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2427] via-[#0d3438] to-[#0b2427]" />
        <div className="bcp-drift absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#14b8a6]/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-16 sm:py-24">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-teal-200 backdrop-blur-sm">
          <Sparkles size={12} />
          AI-Assisted Screening Tool
        </div>

        {/* Hero copy */}
        <h1 className="max-w-xl text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let the cells tell their story.
        </h1>
        <p className="mt-4 max-w-lg text-center text-sm leading-relaxed text-teal-100/70 sm:text-base">
          Upload a histopathology slide and our model analyzes cellular patterns to flag
          signs of invasive ductal carcinoma (IDC) in seconds — built to support pathologists,
          not replace them.
        </p>

        {/* Card */}
        <div className="mt-10 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="h-1 w-full bg-gradient-to-r from-[#0d5c63] via-[#14b8a6] to-[#0d5c63]" />

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d5c63] to-[#0b4a50] text-white">
                <Ribbon size={16} />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[#0b1f24]">Run an analysis</h2>
                <p className="text-xs text-[#5b7a75]">Drop an image or browse your files</p>
              </div>
            </div>

            {/* Upload / slide viewer */}
            <label
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed p-8 text-center transition-all cursor-pointer ${
                dragActive
                  ? "border-[#0d5c63] bg-[#eef5f4] scale-[1.01]"
                  : "border-black/10 hover:border-[#0d5c63]/60 hover:bg-[#eef5f4]/40"
              } ${image ? "border-solid border-black/5 p-3" : ""}`}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />

              {image ? (
                <div className="relative w-full">
                  <div className="relative mx-auto w-fit">
                    <img
                      src={image}
                      alt="Uploaded histopathology"
                      className="mx-auto max-h-64 rounded-xl object-cover"
                    />
                    {loading && (
                      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl bg-[#0b1f24]/10">
                        <div className="bcp-scanline absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#14b8a6]/70 to-transparent shadow-[0_0_20px_4px_rgba(20,184,166,0.5)]" />
                      </div>
                    )}
                    {["-left-1.5 -top-1.5 border-l-2 border-t-2 rounded-tl-md", "-right-1.5 -top-1.5 border-r-2 border-t-2 rounded-tr-md", "-left-1.5 -bottom-1.5 border-l-2 border-b-2 rounded-bl-md", "-right-1.5 -bottom-1.5 border-r-2 border-b-2 rounded-br-md"].map((cls, i) => (
                      <span key={i} className={`pointer-events-none absolute h-4 w-4 border-[#0d5c63]/50 ${cls}`} />
                    ))}
                  </div>
                  <p className="mt-3 truncate text-xs text-[#5b7a75]">{file?.name}</p>
                </div>
              ) : (
                <>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5f4] text-[#0d5c63] transition-transform group-hover:scale-105">
                    <UploadCloud size={22} />
                  </div>
                  <p className="text-sm font-medium text-[#0b1f24]">
                    Drop a histopathology image here
                  </p>
                  <p className="mt-1 text-xs text-[#5b7a75]">
                    or click to browse — PNG, JPG, WEBP
                  </p>
                </>
              )}
            </label>

            {/* Actions */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={handlePredict}
                disabled={!file || loading}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#0b4a50] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
              >
                {loading ? <Loader2 size={15} className="animate-spin" /> : <ScanLine size={15} />}
                {loading ? "Analyzing..." : "Run Prediction"}
              </button>

              {(image || result) && (
                <button
                  onClick={handleReset}
                  disabled={loading}
                  className="flex items-center gap-1.5 rounded-xl border border-black/10 px-3.5 py-2.5 text-xs font-medium text-[#5b7a75] transition hover:bg-black/5 disabled:opacity-60"
                >
                  <RotateCw size={13} />
                  Reset
                </button>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="bcp-fade-up mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700">
                <AlertCircle size={14} className="shrink-0" />
                {error}
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="bcp-fade-up mt-6 flex items-center gap-5 rounded-2xl border border-black/5 bg-[#f8fafa] p-5">
                <ConfidenceGauge percent={result.confidence} positive={!!result.prediction} />

                <div className="min-w-0 flex-1">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                      result.prediction
                        ? "bg-red-100 text-red-700"
                        : "bg-[#eef5f4] text-[#0d5c63]"
                    }`}
                  >
                    {result.label}
                  </span>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-[#5b7a75]">Probability</dt>
                      <dd className="font-medium text-[#0b1f24]">{result.probability}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#5b7a75]">Threshold</dt>
                      <dd className="font-medium text-[#0b1f24]">{result.threshold}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            <p className="mt-5 border-t border-black/5 pt-4 text-[11px] leading-snug text-[#5b7a75]">
              This tool provides a model-generated estimate only and is not a medical
              diagnosis. Always consult a qualified healthcare professional.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-[11px] text-teal-100/40">
          Trained on histopathology imaging data · Runs entirely on your own inference server
        </p>
      </div>
    </div>
  );
}

export default BreastCancerPrediction;