import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Mail, Lock, HeartPulse } from "lucide-react";
import axios from "axios";
import LandingNavbar from "../Components/section/LandingNavbar";
import LandingFooter from "../Components/section/LandingFooter";

axios.defaults.baseURL = "http://localhost:8080";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {

      const res = await axios.post(
        "/login",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        // Save JWT token for authenticated requests
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        setError(res.data.message || "Login failed");
      }

    } catch (err) {
      // Backend sends { message } on 400/500, no "success" key on errors
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

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-14 relative overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-24 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-white/10 -bottom-32 -right-24"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
              <HeartPulse size={42} />
            </div>

            <h1 className="text-4xl font-bold mb-5 leading-tight">
              Welcome Back
            </h1>

            <p className="text-blue-100 text-lg leading-8">
              Login to continue your healthcare journey with
              <span className="font-semibold text-white">
                {" "}Swasthya Rakshak
              </span>.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                AI Disease Prediction
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                Secure Health Reports
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                Instant Medical Insights
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-800">
                Sign In
              </h2>

              <p className="text-gray-500 mt-2">
                Login to your account
              </p>
            </div>

            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleLogin}>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
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

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
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
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <NavLink
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot Password?
                </NavLink>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300 disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="border-t"></div>

                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-400 text-sm">
                  OR
                </span>
              </div>

              {/* Signup */}
              <div className="text-center text-gray-600">
                Don't have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Create Account
                </NavLink>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
    <LandingFooter/>
   </>
  );
};

export default Login;