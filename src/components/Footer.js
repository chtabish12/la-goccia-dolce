import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-allergen-notice">
        We take great care to highlight food allergens and handle all orders with precautions,
        but please let us know your allergies when ordering so we can serve you safely.
      </div>
      <span className="footer-copyright">
        © {new Date().getFullYear()} La Goccia Dolce. Italian & British Style Cafe. Birmingham
      </span>
    </div>
  </footer>
);

export default Footer;