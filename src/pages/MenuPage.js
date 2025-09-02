import React from "react";
import Menu from "../components/Menu";
import mainMenuData from "../data/menu.json";

const MenuPage = () => (
  <section className="page-section">
    <h2 style={{color:'#d4af37'}}>Our Main</h2>
    <Menu menuData={mainMenuData}/>
  </section>
);

export default MenuPage;