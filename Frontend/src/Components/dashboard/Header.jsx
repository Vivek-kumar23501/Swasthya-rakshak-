import { Search, Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">

      <div className="flex items-center justify-between px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition">
            <Menu size={22} className="text-slate-700" />
          </button>

          <div>

            <h1 className="text-2xl font-bold text-slate-800">
              Welcome Back 👋
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Monitor your health and manage predictions from one place.
            </p>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="hidden md:flex items-center w-72 bg-slate-100 rounded-xl px-4 py-2">

            <Search size={18} className="text-slate-500" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none px-3 text-sm text-slate-700 placeholder:text-slate-400"
            />

          </div>

          {/* Notification */}
          <button className="relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

            <Bell size={20} className="text-slate-700" />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"></span>

          </button>

          {/* User */}
          <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              V
            </div>

            <div className="hidden sm:block">

              <h2 className="font-semibold text-slate-800">
                Vivek Kumar
              </h2>

              <p className="text-xs text-slate-500">
                User
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;