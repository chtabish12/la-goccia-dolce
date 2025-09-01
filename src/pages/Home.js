import React, { useEffect, useState } from "react";
import coffeeLogo from "../assets/200degrees.png"; // add this logo to your assets

const phrases = [
  "Golden Pancake Stacks",
  "Signature Bagels",
  "Artisan Sourdough Toasts",
  "Vibrant Smoothie Bowls",
  "Falafel Halloumi Wraps",
  "Tropical Paradise Bowl",
  "Salmon & Avocado Sourdough",
  "Freshly Brewed 200 Degrees Coffee"
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

const Home = () => (
  <div className="home-intro">
    <h2>Welcome to La Goccia Dolce</h2>
    <div className="slider-container">
      <TypewriterSlider texts={phrases} />
    </div>
    <p>
      <strong>Italian soul, British heart.</strong> Discover our fusion menu in the heart of Stirchley, Birmingham.<br />
      <span style={{color:'#d4af37', fontWeight:'bold'}}>Start your day golden, end it sweet.</span>
    </p>
    <div className="coffee-highlight">
      <img src={coffeeLogo} alt="200 Degrees Coffee" className="coffee-logo" />
      <span>
        Proudly serving <strong>200 Degrees Coffee</strong> in all our hot drinks!
      </span>
    </div>
    <hr style={{border:'1px solid #d4af37',margin:'1rem 0'}} />
    <div>
      <strong>Address:</strong> 1444 Pershore Rd, Stirchley, Birmingham B30 2PH<br />
      <strong>Phone:</strong> <a href="tel:01212915614" style={{color:"#191919"}}>0121 291 5614</a>
    </div>
  </div>
);

export default Home;