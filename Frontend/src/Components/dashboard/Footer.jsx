import {
  HeartPulse,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-900 text-slate-300 rounded-t-3xl">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & About */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

                <HeartPulse size={24} className="text-white" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Swasthya Rakshak
                </h2>

                <p className="text-sm text-slate-400">
                  AI Powered Healthcare
                </p>

              </div>

            </div>

            <p className="text-sm leading-7 text-slate-400">
              Swasthya Rakshak is an AI-powered healthcare platform that
              helps users predict diseases, monitor health, and receive
              intelligent medical guidance anytime, anywhere.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Dashboard
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Disease Prediction
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Reports
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                AI Health Assistant
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Settings
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400" />
                <span>support@swasthyarakshak.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-400" />
                <span>Bihar, India</span>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-6">

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center">
                <Github size={20} />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center">
                <Linkedin size={20} />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-slate-400">
            © 2026 <span className="text-white font-semibold">Swasthya Rakshak</span>. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <button className="hover:text-cyan-400 transition">
              Privacy Policy
            </button>

            <button className="hover:text-cyan-400 transition">
              Terms & Conditions
            </button>

            <button className="hover:text-cyan-400 transition">
              Support
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;