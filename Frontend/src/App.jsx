import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import LandingPages from "./pages/LandingPages";
import AboutPage from "./pages/Aboutpage";
import ServicesPage from "./pages/ServicesPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HealthTips from "./pages/HealthTips";

import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Chatbot from "./pages/dashboard/Chatbot";
import BreastCancerPrediction from "./pages/dashboard/BreastCancerPrediction";
import HeartDisease from "./pages/dashboard/HeartDisease";
import Settings from "./pages/dashboard/Settings";
import Profile from "./pages/dashboard/Profile";

// Token restore on app load/refresh — axios default header set kar do agar token localStorage me pada hai
const savedToken = localStorage.getItem("token");
if (savedToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/health-tips" element={<HealthTips />} />

        {/* Protected dashboard routes - sidebar/header hamesha visible rahega */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="chatbot" replace />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="breast-cancer-prediction" element={<BreastCancerPrediction />} />
          <Route path="heart-disease-prediction" element={<HeartDisease />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;