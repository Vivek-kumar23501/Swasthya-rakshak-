import { NavLink } from "react-router-dom";
import { Sparkles, Compass, Heart, Eye, Activity, ShieldCheck, Zap, Brain } from "lucide-react";

const LandingHero = () => {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Healthcare Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-5">
              AI-Powered Multi-
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Disease
              </span>{" "}
              Prediction &{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Health Awareness
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-500 text-base mb-7 max-w-md">
              Early detection saves lives. Check your health risk using
              advanced Artificial Intelligence and Machine Learning —
              fast, secure, and free.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-7">
              <NavLink to="/get-started">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium shadow-md shadow-blue-200 hover:bg-blue-700 hover:shadow-lg transition duration-300">
                  <Zap className="w-4 h-4" fill="white" />
                  Get Started
                </button>
              </NavLink>

              <NavLink to="/learn-more">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition duration-300">
                  <Compass className="w-4 h-4" />
                  Learn More
                </button>
              </NavLink>
            </div>

            {/* Trust Row */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-xs text-gray-500">
                Trusted by 10,000+ users across India
              </p>
            </div>
          </div>

          {/* Right Content - Image with floating badges */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                alt="Doctor"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />

              {/* Floating badge - Heart Analysis */}
              <div className="absolute top-6 -right-6 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-lg">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-white" fill="white" />
                </div>
                <span className="text-xs font-medium text-slate-700">
                  Heart Analysis
                </span>
              </div>

              {/* Floating badge - Eye Scan AI */}
              <div className="absolute top-28 -left-8 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Eye className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">
                  Eye Scan AI
                </span>
              </div>

              {/* Floating badge - Diabetes Check */}
              <div className="absolute bottom-24 -right-8 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-lg">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">
                  Diabetes Check
                </span>
              </div>

              {/* Floating badge - Secure & Private */}
              <div className="absolute bottom-4 -left-6 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-lg">
                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">
                  Secure & Private
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <Activity className="w-5 h-5 text-blue-600 mb-2" />
            <h3 className="text-xl font-bold text-slate-900">4</h3>
            <p className="text-xs text-gray-500 mt-1">
              Disease Prediction Modules
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <Brain className="w-5 h-5 text-blue-600 mb-2" />
            <h3 className="text-xl font-bold text-slate-900">AI</h3>
            <p className="text-xs text-gray-500 mt-1">Health Assistant</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
            <h3 className="text-xl font-bold text-slate-900">100%</h3>
            <p className="text-xs text-gray-500 mt-1">Secure Reports</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
            <Zap className="w-5 h-5 text-amber-500 mb-2" />
            <h3 className="text-xl font-bold text-slate-900">&lt;2s</h3>
            <p className="text-xs text-gray-500 mt-1">Fast Analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;