import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import ChatbotButton from "../components/dashboard/ChatbotButton";

const UserDashboard = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar - always visible, fixed */}
      <Sidebar />

      {/* Main Content - changes with route */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Header - always visible */}
        <Header />

        {/* Route-based content, scrolls independently */}
        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>

      {/* Floating AI Chatbot - always visible */}
      <ChatbotButton />

    </div>
  );
};

export default UserDashboard;