import { NavLink } from "react-router-dom";
import { Heart, Mail } from "lucide-react";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05a4.28 4.28 0 0 0-7.29 3.9 12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.02 2.99A8.58 8.58 0 0 1 2 18.57a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.13-2.22-.77.34-1.6.57-2.47.67z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const LandingFooter = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <h3 className="text-base font-bold text-white">
                Swasthya Rakshak
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-xs">
              AI-Powered Multi-Disease Prediction Platform. Your health,
              protected by intelligence.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <FacebookIcon className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <TwitterIcon className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <LinkedinIcon className="w-4 h-4 text-white" />
              </a>

              <a
                href="mailto:support@swasthyarakshak.in"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/health-tips"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  Health Tips
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/faq"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/terms-of-service"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  Terms of Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cookie-policy"
                  className="text-xs text-slate-400 hover:text-blue-400 transition duration-300"
                >
                  Cookie Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-slate-400">
                support@swasthyarakshak.in
              </li>

              <li className="text-xs text-slate-400">+91 98765 43210</li>

              <li className="text-xs text-slate-400">Bengaluru, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; 2026 Swasthya Rakshak. All rights reserved.
          </p>

          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500" fill="currentColor" />{" "}
            for a healthier India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;