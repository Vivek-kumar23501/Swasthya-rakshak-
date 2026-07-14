import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPages from "./pages/LandingPages";


const Home = () => (
  <>
   <LandingPages/>
   
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