import React from "react";
import Menu from "../components/Menu";
import dessertsMenuData from "../data/desserts.json";

const Desserts = () => (
  <section className="page-section">
    <h2 style={{ color: '#d4af37' }}>Desserts</h2>
    <p style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "1.2rem", fontSize: "1.07rem" }}>
      For available toppings, sauces, and flavors, please enquire or ask the staff
    </p>
    <Menu menuData={dessertsMenuData} />
  </section>
);

export default Desserts;