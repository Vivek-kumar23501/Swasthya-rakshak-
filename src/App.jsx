import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingNavbar from "./section/LandingNavbar";
import LandingHero from "./section/LandingHero";
import LandingServices from "./section/LandingServices";
import Howitwork from "./section/Howitwork";
import TestimonialsSection from "./section/TestimonialsSection";
import LandingFooter from "./section/LandingFooter";


const Home = () => (
  <>
    <LandingNavbar/>
    <LandingHero/>
    <LandingServices/>
    <Howitwork/>
    <TestimonialsSection/>
    <LandingFooter/>
   
  </>
);

const About = () => <h1 className="p-10 text-3xl">About Page</h1>;
const Services = () => <h1 className="p-10 text-3xl">Services Page</h1>;
const Login = () => <h1 className="p-10 text-3xl">Login Page</h1>;
const Signup = () => <h1 className="p-10 text-3xl">Signup Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;