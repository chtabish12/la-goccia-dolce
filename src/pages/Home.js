import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import storyImg from '../assets/banner.jpeg';

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
  <main>
    <div className="home-hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to La Goccia Dolce</h1>
        <div className="slider-container">
          <TypewriterSlider texts={phrases} />
        </div>
        <p className="home-slogan">
          <strong>Italian soul, British heart.</strong> Discover our fusion menu in the heart of Stirchley, Birmingham.<br />
        </p>
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
      </div>
    </div>
    <section className="our-story-section">
      <h2>Our Story</h2>
      <img src={storyImg} alt="La Goccia Dolce Story" />
      <p>
        La Goccia Dolce is a family-run café born from a love of food, togetherness, and a passion for sweet indulgence. What began as a dream has grown into a warm space where mornings are filled with the aroma of fresh coffee and hearty brunch, and evenings sparkle with irresistible desserts.<br /><br />
        From 8am to 4pm, we serve a comforting brunch and café menu freshly prepared in-house, with care and quality at the heart of everything we do. When the day winds down, La Goccia Dolce becomes a haven for dessert lovers, with our homemade creations tempting you until 11:30pm.<br /><br />
        As a family business, every detail matters to us from the ingredients we choose to the way we welcome you at the door. Our goal is simple: to make every visit feel like a little escape, filled with warmth and flavor.
      </p>
      <div className="address-block">
      </div>
      <br/>
      <strong>Visit us:</strong> 1444 Pershore Rd, Stirchley, Birmingham B30 2PH<br />
      <strong>Call:</strong> <a href="tel:01212915614" style={{ color: "#d4af37" }}>0121 291 5614</a>
    </section>
  </main>
);

export default Home;