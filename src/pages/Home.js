import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Add this import

const phrases = [
  "Golden Pancake Stacks",
  "Signature Bagels",
  "Artisan Sourdough Toasts",
  "Vibrant Smoothie Bowls",
  "Falafel Halloumi Wraps",
  "Tropical Paradise Bowl",
  "Salmon & Avocado Sourdough",
  "Freshly Brewed Speciality Coffee"
];

function TypewriterSlider({ texts, speed = 80, pause = 1600 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setDisplayed(texts[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, pause]);

  return (
    <span className="typewriter-slider">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

// Update featureCards to include links
const featureCards = [
  {
    icon: "🥯",
    title: "Breakfast & Brunch",
    desc: "All-day classics, Italian-inspired favourites.",
    link: "/menu"
  },
  {
    icon: "☕️",
    title: "Speciality Coffee",
    desc: "Proudly serving 200 Degrees coffee daily.",
    link: "/drinks"
  },
  {
    icon: "🍰",
    title: "Desserts & Smoothies",
    desc: "Famous pancake stacks, bowls, and more.",
    link: "/desserts"
  }
];

const Home = () => (
  <div className="home-hero">
    <div className="hero-overlay">
      <h1 className="hero-title">Welcome to La Goccia Dolce</h1>
      <div className="slider-container">
        <TypewriterSlider texts={phrases} />
      </div>
      <p className="home-slogan">
        <strong>Italian soul, British heart.</strong> Discover our fusion menu in the heart of Stirchley, Birmingham.<br />
        <span className="home-gold">Start your day golden, end it sweet.</span>
      </p>
      <div className="coffee-badge">
        <span>☕️</span>
        <span className="gold-badge">200 Degrees Coffee served here!</span>
      </div>
      <div className="feature-row">
        {featureCards.map((card, i) => (
          <Link
            key={i}
            to={card.link}
            className="feature-card"
            style={{ textDecoration: 'none' }}
          >
            <span className="feature-icon">{card.icon}</span>
            <span className="feature-title">{card.title}</span>
            <span className="feature-desc">{card.desc}</span>
          </Link>
        ))}
      </div>
      <div className="hours-block">
        <h3>Opening Hours</h3>
        <div className="cafe-hours">Cafe: 10am – 11pm (7 days a week)</div>
        <div className="coffee-hours">Coffee Served: 10am – 5pm (7 days a week)</div>
      </div>
      <blockquote className="customer-quote">
        “Best brunch in Birmingham! The coffee and pancakes are next level.”
        <br />
        <span>— Local Customer</span>
      </blockquote>
      <div className="address-block">
        <strong>Visit us:</strong> 1444 Pershore Rd, Stirchley, Birmingham B30 2PH<br />
        <strong>Call:</strong> <a href="tel:01212915614" style={{ color: "#d4af37" }}>0121 291 5614</a>
      </div>
    </div>
  </div>
);

export default Home;