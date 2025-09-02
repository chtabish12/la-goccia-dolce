import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const deliveryLinks = [
  {
    name: "Uber Eats",
    url: "https://www.ubereats.com/gb",
    logo: "/assets/ubereats.png"
  },
  {
    name: "Deliveroo",
    url: "https://deliveroo.co.uk",
    logo: "/assets/deliveroo.png"
  },
  {
    name: "Just Eat",
    url: "https://www.just-eat.co.uk",
    logo: "/assets/justeatlogo.png"
  }
];
export default function Delivery() {
  return (
    <section className="page-section contact-section">
      <h2 style={{ color: '#d4af37' }}>Contact Us</h2>
      <div className="contact-address">
        <strong>Address:</strong> 1444 Pershore Rd, Stirchley, Birmingham B30 2PH
      </div>
      <p>We also offer delivery within 4 miles – simply call us to place your order. A £2 delivery charge applies.</p>

      <div className="delivery-label">Order for delivery:</div>
      <div className="delivery-icons">
        <a className="delivery-icon-link" href="https://www.ubereats.com/gb" target="_blank" rel="noopener noreferrer">
          <img className="delivery-logo" src="/assets/ubereats.png" alt="Uber Eats" />
        </a>
        <a className="delivery-icon-link" href="https://deliveroo.co.uk" target="_blank" rel="noopener noreferrer">
          <img className="delivery-logo" src="/assets/deliveroo.png" alt="Deliveroo" />
        </a>
        <a className="delivery-icon-link" href="https://www.just-eat.co.uk" target="_blank" rel="noopener noreferrer">
          <img className="delivery-logo" src="/assets/justeatlogo.png" alt="Just Eat" />
        </a>
      </div>

      <div className="contact-phone-row">
        <a href="tel:01212915614" className="contact-phone-link">
          <FaPhoneAlt className="phone-icon" />
          <span>0121 291 5614</span>
        </a>
      </div>
    </section>
  );
}