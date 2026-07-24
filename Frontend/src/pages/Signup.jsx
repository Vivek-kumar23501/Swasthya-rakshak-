import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, HeartPulse, ShieldCheck } from "lucide-react";
import axios from "axios";
import LandingNavbar from "../Components/section/LandingNavbar";
import LandingFooter from "../Components/section/LandingFooter";

axios.defaults.baseURL = "http://localhost:8080";

const Signup = () => {

  const navigate = useNavigate();

  // Signup form fields — names match backend req.body keys exactly
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("signup"); // "signup" | "verify"

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1 — submit signup form, backend hashes password & sends OTP
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {

      const res = await axios.post(
        "/signup",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        setMessage(res.data.message);
        setStep("verify");
      } else {
        setError(res.data.message || "Signup failed");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Step 2 — verify OTP sent to email
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {

      const res = await axios.post(
        "/verify-otp",
        { email: formData.email, otp },
        { withCredentials: true }
      );

      if (res.data.success) {
        setMessage("Account verified! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1200);
      } else {
        setError(res.data.message || "OTP verification failed");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <LandingNavbar/>
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-14 relative overflow-hidden">

          <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-white/10 -bottom-28 -right-20"></div>

          <div className="relative z-10">

            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
              <HeartPulse size={42} />
            </div>

            <h1 className="text-4xl font-bold mb-5 leading-tight">
              Join Swasthya Rakshak
            </h1>

            <p className="text-lg text-blue-100 leading-8">
              Create your account and experience AI-powered healthcare
              predictions with secure and personalized medical insights.
            </p>

            <div className="mt-12 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                AI Disease Prediction
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                Secure Health Records
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                Personalized Health Reports
              </div>

            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 sm:p-12">

          <div className="w-full max-w-md">

            {step === "signup" ? (
              <>
                <div className="text-center mb-8">

                  <h2 className="text-3xl font-bold text-slate-800">
                    Create Account
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Register to access your healthcare dashboard
                  </p>

                </div>

                {error && (
                  <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="mb-4 text-sm text-green-600 bg-green-50 border border-green-100 rounded-xl px-4 py-2">
                    {message}
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSignup}>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <div className="relative">

                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />

                    </div>
                  </div>

                  {/* Email */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />

                    </div>

                  </div>

                  {/* Mobile */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>

                    <div className="relative">

                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />

                    </div>

                  </div>

                  {/* Password */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>

                    <div className="relative">

                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                        minLength={6}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />

                    </div>

                  </div>

                  {/* Register Button */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>

                  {/* Divider */}

                  <div className="relative my-2">

                    <div className="border-t border-gray-200"></div>

                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
                      OR
                    </span>

                  </div>

                  {/* Login */}

                  <div className="text-center text-gray-600">

                    Already have an account?{" "}

                    <NavLink
                      to="/login"
                      className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                      Login
                    </NavLink>

                  </div>

                </form>
              </>
            ) : (
              <>
                <div className="text-center mb-8">

                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={30} className="text-blue-600" />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-800">
                    Verify OTP
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Enter the 4-digit code sent to {formData.email}
                  </p>

                </div>

                {error && (
                  <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="mb-4 text-sm text-green-600 bg-green-50 border border-green-100 rounded-xl px-4 py-2">
                    {message}
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleVerifyOtp}>

                  {/* OTP */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      OTP Code
                    </label>

                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 4-digit OTP"
                      required
                      maxLength={4}
                      className="w-full text-center tracking-[0.5em] text-lg px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {loading ? "Verifying..." : "Verify & Continue"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep("signup")}
                    className="w-full text-center text-gray-500 text-sm hover:text-gray-700"
                  >
                    ← Back to signup
                  </button>

                </form>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
    <LandingFooter/>
   </>
  );
};

export default Signup;