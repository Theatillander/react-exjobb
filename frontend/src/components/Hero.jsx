import React from "react";
import "../style/hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Welcome to our shop!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <button onClick={() => {}}>Default Button</button>
        </div>
        <div>
          <button onClick={() => {}}>Default Button</button>
        </div>
      </div>

      <div className="hero-image">
        <div>
          <div className="tech-icon">
            <img src="css.png" alt="5" />
          </div>
          <img className="avatar" src="avatar2.jpg" alt="4" height={400} />
          
        </div>
        <div>
          <div className="tech-icon">
            <img src="css.png" alt="3" />
          </div>
          <div className="tech-icon">
            <img src="css.png" alt="-" />
          </div>
          <div className="tech-icon">
            <img src="css.png" alt="+" />
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Hero;