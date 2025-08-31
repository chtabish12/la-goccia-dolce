import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => (
  <header>
    <img src={logo} alt="La Goccia Dolce Logo" className="logo-img" />
    <h1>LA GOCCIA DOLCE</h1>
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/drinks">Drinks</NavLink>
      <NavLink to="/desserts">Desserts</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </nav>
  </header>
);

export default Header;