import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPages from "./pages/LandingPages";
import AboutPage from "./pages/Aboutpage";
import ServicesPage from "./pages/ServicesPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HealthTips from "./pages/HealthTips";
import UserDashboard from "./pages/UserDashboard";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services"  element={<ServicesPage/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/health-tips" element={<HealthTips/>}/>
        <Route path="/dashboard" element={<UserDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;