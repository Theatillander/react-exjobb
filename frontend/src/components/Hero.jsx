import React from "react";
import "../style/hero.css";

function Hero() {
  return (
    <div className="hero-content">
      <div className="header">
       
          <h2>Welcome to our shop!</h2>
          <p className="Small_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        <div className="buttons">
          <button className="button2" onClick={() => { } }>SHOP NOW</button>
        </div> </div>
        <div className="Most_popular">
          <h1> Most popular this week</h1>
          <p>  Lorem ipsum dolor sit amet.</p>
    </div> 
    </div>
  );
}

export default Hero;