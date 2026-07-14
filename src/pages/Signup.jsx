import { NavLink } from "react-router-dom";
import { User, Mail, Phone, Lock, HeartPulse } from "lucide-react";
import LandingNavbar from "../section/LandingNavbar";
import LandingFooter from "../section/Landingfooter";

const Signup = () => {
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

            <div className="text-center mb-8">

              <h2 className="text-3xl font-bold text-slate-800">
                Create Account
              </h2>

              <p className="text-gray-500 mt-2">
                Register to access your healthcare dashboard
              </p>

            </div>

            <form className="space-y-5">

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
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your mobile number"
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
                    placeholder="Create a password"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />

                </div>

              </div>

              {/* Register Button */}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
              >
                Create Account
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

          </div>

        </div>

      </div>
    </section>
    <LandingFooter/>
   </>
  );
};

export default Signup;