import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./pages/About";
import Login from "./pages/Login";
import PricingPagae from "./pages/PricingPage";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="max-w-7xl scroll-smooth mx-auto snap-y snap-mandatory">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="pricing" element={<PricingPagae />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
