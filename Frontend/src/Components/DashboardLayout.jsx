import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

/*
  DashboardLayout
  - The outer wrapper is locked to the viewport height with overflow hidden,
    so nothing at the page level ever scrolls.
  - Sidebar sits on the left and just fills that fixed height — it never
    moves, slides, or scrolls.
  - The <main> on the right owns its own scroll (overflow-y-auto). All page
    content (Chatbot, Breast Cancer Prediction, Profile, etc.) renders here
    via <Outlet />, and only this area scrolls when content is taller than
    the viewport.
*/
function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f8f7]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-6 sm:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;