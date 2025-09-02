import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="La Goccia Dolce Logo" className="logo-img" />
        <h1>LA GOCCIA DOLCE</h1>
        <nav className="desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Main</NavLink>
          <NavLink to="/drinks">Drinks</NavLink>
          <NavLink to="/desserts">Desserts</NavLink>
          <NavLink to="/opening-hours">Opening Hours</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
};

export default Header;