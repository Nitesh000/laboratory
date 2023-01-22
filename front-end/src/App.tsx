import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Login from "./pages/Login";

function App() {
  return (
    <div className="max-w-7xl scroll-smooth mx-auto snap-y snap-mandatory">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
