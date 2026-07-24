import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `text-sm transition duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  const mobileNavLinkStyle = ({ isActive }) =>
    `block w-full text-sm py-3 px-2 border-b border-gray-100 transition duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="w-full bg-white border-t-4 border-b-2 border-blue-600 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto h-14 px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
            <Heart className="w-4 h-4 text-white" fill="white" />
          </div>

          <h1 className="text-sm sm:text-base font-bold text-slate-900">
            Swasthya Rakshak
          </h1>
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-slate-800" />
          ) : (
            <Menu className="w-5 h-5 text-slate-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-14 bg-black/30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-14 left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pt-2">
          <li>
            <NavLink
              to="/"
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/health-tips"
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Health Tips
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={mobileNavLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 px-4 py-4">
          <NavLink to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-2 text-sm rounded-full border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition">
              Login
            </button>
          </NavLink>

          <NavLink to="/signup" className="flex-1" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;