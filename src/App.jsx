import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import Barnav from "./components/Barnav";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Barnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apropos" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
