import { useState } from "react";
import { HeartPulse } from "lucide-react";

// Field definitions kept outside the component so the array isn't re-created on every render
const heartFields = [
  { name: "age", label: "Age" },

  { name: "restingBP", label: "Resting Blood Pressure" },

  { name: "cholesterol", label: "Cholesterol" },

  { name: "maxHeartRate", label: "Max Heart Rate" },
];

function HeartDisease() {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST formData to your Random Forest/XGBoost inference endpoint
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-2 mb-6">
        <HeartPulse size={22} className="text-[#0d5c63]" />
        <h2 className="text-2xl font-semibold text-[#0b1f24]">
          Heart Disease Prediction
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {heartFields.map((field) => (

          <div key={field.name} className="flex flex-col gap-1">
            <label className="text-xs font-medium text-[#5b7a75]">
              {field.label}
            </label>

            <input
              type="number"
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#0d5c63]"
            />
          </div>

        ))}

        <button
          type="submit"
          className="sm:col-span-2 mt-2 rounded-lg bg-[#0d5c63] py-2.5 text-sm font-medium text-white hover:bg-[#0b4a50]"
        >
          Predict
        </button>
      </form>
    </div>
  );
}

export default HeartDisease;