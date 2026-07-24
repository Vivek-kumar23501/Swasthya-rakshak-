import { NavLink } from "react-router-dom";
import {
  MessageSquareText,
  Ribbon,
  HeartPulse,
  Settings,
  UserRound,
  X,
} from "lucide-react";

// Nav items defined outside the component so the array isn't re-created on every render
const navItems = [
  {
    label: "Chatbot",
    path: "/dashboard/chatbot",
    icon: MessageSquareText,
  },

  {
    label: "Breast Cancer Prediction",
    path: "/dashboard/breast-cancer-prediction",
    icon: Ribbon,
  },

  {
    label: "Heart Disease Prediction",
    path: "/dashboard/heart-disease-prediction",
    icon: HeartPulse,
  },

  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },

  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
];

/*
  Sidebar
  - Desktop (md and up): always visible, static, part of the layout flow
  - Mobile: off-canvas drawer that slides in/out using translate-x + isOpen state
  - isOpen / onClose are controlled by the parent DashboardLayout
*/
function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop - only rendered/visible on mobile when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-72 transform bg-[#0b1f24] text-[#e8f3f1]
          transition-transform duration-300 ease-in-out
          md:static md:z-auto md:translate-x-0 md:flex md:flex-shrink-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full w-full flex-col">
          {/* Brand row */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#ff8552] flex items-center justify-center text-[#0b1f24] font-bold">
                SR
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Swasthya Rakshak
              </span>
            </div>

            {/* Close button - mobile only */}
            <button
              onClick={onClose}
              className="md:hidden text-white/70 hover:text-white"
              aria-label="Close sidebar"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-1">
            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#ff8552] text-[#0b1f24]"
                      : "text-[#c7dedb] hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <item.icon size={19} strokeWidth={2} />
                <span>{item.label}</span>
              </NavLink>

            ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10 text-xs text-[#7fa39c]">
            Multi-Disease AI Health Platform
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;