import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Drinks from "./pages/Drinks";
import Desserts from "./pages/Desserts";
import OrderNow from "./pages/Contact";
import OpeningHours from "./pages/OpeningHours";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/opening-hours" element={<OpeningHours />} />
            <Route path="/contact" element={<OrderNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;