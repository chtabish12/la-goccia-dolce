import React from "react";
import drinkMenuData from "../data/drinks.json";
import Menu from "../components/Menu";

const Drinks = () => (
  <section className="page-section">
    <h2 style={{ color: '#d4af37' }}>Drinks</h2>
    <Menu menuData={drinkMenuData}/>
  </section>
);

export default Drinks;