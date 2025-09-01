import React from "react";
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

const Contact = () => (
  <section className="page-section contact-section">
    <h2 style={{color:'#d4af37'}}>Contact Us</h2>
    <div className="contact-phone-row">
      <a href="tel:01212915614" className="contact-phone-link">
        <FaPhoneAlt className="phone-icon" />
        <span>0121 291 5614</span>
      </a>
    </div>
    <div className="contact-address">
      <strong>Address:</strong> 1444 Pershore Rd, Stirchley, Birmingham B30 2PH
    </div>
    <div className="contact-delivery-row">
      <span className="delivery-label">Order for delivery:</span>
      <div className="delivery-icons">
        {deliveryLinks.map(({ name, url, logo }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="delivery-icon-link">
            <img src={logo} alt={name} className="delivery-logo" onError={e => {e.target.onerror=null;e.target.src="https://via.placeholder.com/48?text=+"+name}} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;