import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  HeartPulse,
  Droplet,
  Ribbon,
  Eye,
  History,
  FileText,
  Settings,
  Bot,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Heart Disease", icon: HeartPulse, path: "/heart" },
  { name: "Diabetes", icon: Droplet, path: "/diabetes" },
  { name: "Breast Cancer", icon: Ribbon, path: "/breast-cancer" },
  { name: "Eye Disease", icon: Eye, path: "/eye-disease" },
  { name: "Prediction History", icon: History, path: "/history" },
  { name: "Reports", icon: FileText, path: "/reports" },
  { name: "AI Assistant", icon: Bot, path: "/chatbot" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  return (
    // sticky + full viewport height + own overflow context
    <aside className="hidden lg:flex flex-col w-72 bg-slate-900 text-white h-screen sticky top-0 shadow-2xl">

      {/* Logo - stays fixed at top, never scrolls */}
      <div className="flex items-center gap-3 px-6 py-7 border-b border-slate-800 shrink-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
          <HeartPulse size={26} className="text-white" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Swasthya</h2>
          <p className="text-cyan-400 text-sm">Rakshak</p>
        </div>
      </div>

      {/* Menu - this is the part that scrolls internally */}
      <div className="flex-1 px-4 py-6 overflow-y-auto scroll-smooth custom-scrollbar">
        <p className="text-slate-400 uppercase text-xs mb-4 tracking-widest">
          Main Menu
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "hover:bg-slate-800 text-slate-300"
                  }`
                }
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom User Card - stays fixed at bottom, never scrolls */}
      <div className="border-t border-slate-800 p-5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center font-bold">
            V
          </div>
          <div>
            <h3 className="font-semibold">Vivek Kumar</h3>
            <p className="text-xs text-slate-400">Healthcare User</p>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;