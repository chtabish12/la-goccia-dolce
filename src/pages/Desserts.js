import React from "react";
import Menu from "../components/Menu";
import dessertsMenuData from "../data/desserts.json";

const Desserts = () => (
  <section className="page-section">
    <h2 style={{color:'#d4af37'}}>Desserts</h2>
    <Menu menuData={dessertsMenuData}/>
  </section>
);

export default Desserts;