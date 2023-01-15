import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-7xl scroll-smooth mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
