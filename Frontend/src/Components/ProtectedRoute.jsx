import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking"); // "checking" | "authed" | "unauthed"

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.get("/verify-token");
        setStatus("authed");
      } catch (err) {
        console.error("Token verification failed:", err.response?.data || err.message);
        setStatus("unauthed");
      }
    };

    verify();
  }, []);

  if (status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-[#5b7a75]">Checking session...</p>
      </div>
    );
  }

  if (status === "unauthed") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;