import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MessageSquareText,
  Ribbon,
  HeartPulse,
  Settings,
  UserRound,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  Activity,
} from "lucide-react";

// Nav items grouped into sections - defined outside the component so the
// arrays aren't re-created on every render
const navGroups = [
  {
    label: "AI Tools",
    items: [
      { label: "Chatbot", path: "/dashboard/chatbot", icon: MessageSquareText },

      { label: "Breast Cancer Prediction", path: "/dashboard/breast-cancer-prediction", icon: Ribbon },

      { label: "Heart Disease Prediction", path: "/dashboard/heart-disease-prediction", icon: HeartPulse },
    ],
  },

  {
    label: "Account",
    items: [
      { label: "Settings", path: "/dashboard/settings", icon: Settings },

      { label: "Profile", path: "/dashboard/profile", icon: UserRound },
    ],
  },
];

/*
  Sidebar
  - Always static/visible, part of the normal page layout (no off-canvas
    slide-in on any screen size).
  - Sticky to the viewport height; the nav list itself scrolls internally
    (overflow-y-auto) if the items don't fit, instead of the whole sidebar
    moving or growing past the viewport.
  - Can still collapse to an icon-only rail via the chevron toggle at the
    bottom, on all screen sizes.
*/
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
        flex h-full flex-shrink-0 flex-col
        bg-gradient-to-b from-[#0b1f24] to-[#0e2a2e] text-[#e8f3f1]
        transition-[width] duration-300 ease-in-out
        ${isCollapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Brand row */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-white/10">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff8552] to-[#ff6b3d] shadow-lg shadow-black/20">
          <Activity size={18} className="text-[#0b1f24]" strokeWidth={2.5} />
        </div>

        {!isCollapsed && (
          <span className="truncate text-lg font-semibold tracking-tight">
            Swasthya Rakshak
          </span>
        )}
      </div>

      {/* Nav groups - scrolls internally if content overflows the viewport */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-6 space-y-7">
        {navGroups.map((group) => (

          <div key={group.label}>
            {!isCollapsed && (
              <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#5f8580]">
                {group.label}
              </p>
            )}

            <div className="space-y-1">
              {group.items.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  title={isCollapsed ? item.label : undefined}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-[#a9c9c4] hover:bg-white/5 hover:text-white"
                    } ${isCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active indicator bar */}
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-[#ff8552]" />
                      )}

                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isActive ? "bg-[#ff8552] text-[#0b1f24]" : "text-[#a9c9c4] group-hover:text-white"
                        }`}
                      >
                        <item.icon size={17} strokeWidth={2} />
                      </span>

                      {!isCollapsed && <span className="truncate">{item.label}</span>}

                      {/* Tooltip when collapsed */}
                      {isCollapsed && (
                        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-[#0b1f24] px-2.5 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                          {item.label}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>

              ))}
            </div>
          </div>

        ))}
      </nav>

      {/* User profile card */}
      <div className="border-t border-white/10 px-3 py-4">
        <div className={`flex items-center gap-3 rounded-xl px-2 py-2 ${isCollapsed ? "justify-center" : ""}`}>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#eef5f4] text-[#0d5c63] font-semibold text-sm">
            VK
          </div>

          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">Vivek Kumar</p>
              <p className="truncate text-xs text-[#5f8580]">Student</p>
            </div>
          )}

          {!isCollapsed && (
            <button className="flex-shrink-0 text-[#5f8580] hover:text-[#ff8552]" aria-label="Log out">
              <LogOut size={17} />
            </button>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium text-[#5f8580] hover:bg-white/5 hover:text-white"
        >
          {isCollapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
          {!isCollapsed && "Collapse"}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;