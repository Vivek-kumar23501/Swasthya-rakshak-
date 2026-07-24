import { useState, useEffect } from "react";
import {
  UserRound,
  Mail,
  Phone,
  ShieldCheck,
  Camera,
  Pencil,
  FileText,
  Activity,
  Calendar,
  LogOut,
  ChevronRight,
  KeyRound,
  MapPin,
  Droplet,
  HeartPulse,
  Cake,
  Save,
} from "lucide-react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const TABS = [
  { id: "personal", label: "Personal Info" },
  { id: "health", label: "Health Info" },

];

function initials(name) {
  if (!name) return "U";
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef5f4] text-[#0d5c63]">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-lg font-semibold text-[#0b1f24] leading-tight">{value}</p>
        <p className="truncate text-xs text-[#5b7a75]">{label}</p>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, editable = true }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-black/5 last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef5f4] text-[#0d5c63]">
          <Icon size={16} />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-[#5b7a75]">{label}</p>
          <p className="truncate text-sm font-medium text-[#0b1f24]">{value || "—"}</p>
        </div>
      </div>
      {editable && (
        <button className="shrink-0 text-xs font-medium text-[#0d5c63] hover:underline">
          Edit
        </button>
      )}
    </div>
  );
}

function FormField({ icon: Icon, label, type = "text", value, onChange, placeholder, options }) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-[#5b7a75]">
        <Icon size={13} />
        {label}
      </label>
      {type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border border-black/10 bg-[#f8fafa] px-3.5 py-2.5 text-sm text-[#0b1f24] outline-none focus:border-[#0d5c63] transition"
        >
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-black/10 bg-[#f8fafa] px-3.5 py-2.5 text-sm text-[#0b1f24] outline-none placeholder:text-[#5b7a75]/60 focus:border-[#0d5c63] transition"
        />
      )}
    </div>
  );
}

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("personal");

  // Health info form state
  const [healthInfo, setHealthInfo] = useState({
    address: "",
    dob: "",
    bloodPressure: "",
    sugar: "",
    thyroid: "",
  });
  const [savingHealth, setSavingHealth] = useState(false);
  const [healthSaved, setHealthSaved] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/profile");
        setUser(res.data.user);
        // If backend already returns saved health info, prefill it here
        if (res.data.user?.healthInfo) {
          setHealthInfo((prev) => ({ ...prev, ...res.data.user.healthInfo }));
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleHealthChange = (field) => (e) => {
    setHealthInfo((prev) => ({ ...prev, [field]: e.target.value }));
    setHealthSaved(false);
  };

  const handleHealthSave = async () => {
    setSavingHealth(true);
    try {
      // TODO: hook this up to your backend, e.g.
      // await axios.put("/profile/health", healthInfo);
      await new Promise((r) => setTimeout(r, 700));
      setHealthSaved(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save health info");
    } finally {
      setSavingHealth(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl">
        <p className="text-[#5b7a75]">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-4xl">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl pb-10">

      

      {/* Name + email */}
      <div className="mb-8 px-1">
        <h2 className="text-2xl font-semibold text-[#0b1f24]">{user?.fullname}</h2>
        <p className="text-sm text-[#5b7a75]">{user?.email}</p>
      </div>

      

      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-1 rounded-full bg-[#eef5f4] p-1 w-fit">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-white text-[#0d5c63] shadow-sm"
                : "text-[#5b7a75] hover:text-[#0b1f24]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">

        {activeTab === "personal" && (
          <div>
            <h3 className="mb-2 text-sm font-semibold text-[#0b1f24]">Personal Information</h3>
            <InfoRow icon={UserRound} label="Full Name" value={user?.fullname} />
            <InfoRow icon={Mail} label="Email Address" value={user?.email} editable={false} />
            <InfoRow icon={Phone} label="Mobile Number" value={user?.mobile} />
          </div>
        )}

        {activeTab === "health" && (
          <div>
            <h3 className="mb-1 text-sm font-semibold text-[#0b1f24]">Health Information</h3>
            <p className="mb-5 text-xs text-[#5b7a75]">
              This helps us give you more accurate predictions and insights.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormField
                  icon={MapPin}
                  label="Address"
                  value={healthInfo.address}
                  onChange={handleHealthChange("address")}
                  placeholder="Enter your address"
                />
              </div>

              <FormField
                icon={Cake}
                label="Date of Birth"
                type="date"
                value={healthInfo.dob}
                onChange={handleHealthChange("dob")}
              />

              <FormField
                icon={HeartPulse}
                label="Blood Pressure"
                value={healthInfo.bloodPressure}
                onChange={handleHealthChange("bloodPressure")}
                placeholder="e.g. 120/80"
              />

              <FormField
                icon={Droplet}
                label="Blood Sugar"
                value={healthInfo.sugar}
                onChange={handleHealthChange("sugar")}
                placeholder="e.g. 90 mg/dL"
              />

              <FormField
                icon={Activity}
                label="Thyroid Status"
                type="select"
                value={healthInfo.thyroid}
                onChange={handleHealthChange("thyroid")}
                options={["Normal", "Hypothyroidism", "Hyperthyroidism", "Not sure"]}
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleHealthSave}
                disabled={savingHealth}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#0b4a50] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
              >
                <Save size={15} />
                {savingHealth ? "Saving..." : "Save Health Info"}
              </button>
              {healthSaved && (
                <span className="text-xs font-medium text-green-600">Saved successfully</span>
              )}
            </div>
          </div>
        )}

     

      </div>
    </div>
  );
}

export default Profile;