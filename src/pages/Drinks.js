import React from "react";
import drinkMenuData from "../data/drinks.json";
import Menu from "../components/Menu";

const Drinks = () => (
  <section className="page-section">
    <h2 style={{ color: '#d4af37' }}>Drinks</h2>
    <p style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "1.2rem", fontSize: "1.07rem" }}>
      All our coffee is freshly brewed using beans from 200 Degrees Coffee Roasters, known for their rich flavor and artisan quality.
    </p>
    <Menu menuData={drinkMenuData} />
  </section>
);

export default Drinks;