import React from "react";
import "../style/hero.css";

function Hero() {
  return (
      <div className="hero-content">
      <h2>Welcome to our shop!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="buttons">
        <button className="button1" onClick={() => { } }>Default Button</button>
        <button className="button2" onClick={() => { } }>Default Button</button>
      </div>
      <h1> Most popular this week</h1>
      </div> 
  );
}

export default Hero;