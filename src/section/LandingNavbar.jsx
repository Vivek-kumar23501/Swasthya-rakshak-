import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";

const LandingNavbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `text-sm transition duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="w-full bg-white border-t-4 border-b-2 border-blue-600 shadow-sm">
      <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" fill="white" />
          </div>

          <h1 className="text-base font-bold text-slate-900">
            Swasthya Rakshak
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navLinkStyle}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/health-tips" className={navLinkStyle}>
              Health Tips
            </NavLink>
          </li>

          <li>
            <NavLink to="/faq" className={navLinkStyle}>
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <NavLink to="/login">
            <button className="px-4 py-1.5 text-sm rounded-full border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition">
              Login
            </button>
          </NavLink>

          <NavLink to="/signup">
            <button className="px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;