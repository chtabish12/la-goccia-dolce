import React from "react";

const Home = () => (
  <div className="home-intro">
    <h2>Welcome to La Goccia Dolce</h2>
    <p>
      <strong>Italian soul, British heart.</strong> Discover our fusion menu in the heart of Stirchley, Birmingham.
      From golden pancake stacks and signature bagels to artisan sourdough and vibrant smoothie bowls, each dish is crafted with passion and tradition.
    </p>
    <p>
      <span style={{color:'#d4af37', fontWeight:'bold'}}>Start your day golden, end it sweet.</span>
      <br />
      Enjoy fresh, wholesome, and irresistible flavors—where Italy meets the UK on every plate.
    </p>
    <hr style={{border:'1px solid #d4af37',margin:'1rem 0'}} />
    <div>
      <strong>Address:</strong> 1444 Pershore Rd, Stirchley, Birmingham B30 2PH<br />
      <strong>Phone:</strong> <a href="tel:01212915614" style={{color:"#191919"}}>0121 291 5614</a>
    </div>
  </div>
);

export default Home;