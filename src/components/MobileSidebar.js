import React from "react";
import { NavLink } from "react-router-dom";

const MobileSidebar = ({ open, onClose }) => {
  return (
    <div className={`sidebar-overlay ${open ? "show" : ""}`} onClick={onClose}>
      <nav
        className={`mobile-sidebar ${open ? "show" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <NavLink to="/" end onClick={onClose}>Home</NavLink>
        <NavLink to="/menu" onClick={onClose}>Main</NavLink>
        <NavLink to="/drinks" onClick={onClose}>Drinks</NavLink>
        <NavLink to="/desserts" onClick={onClose}>Desserts</NavLink>
        <NavLink to="/contact" onClick={onClose}>Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default MobileSidebar;