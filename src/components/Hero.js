import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Stranger Things</h2>
        <div className="hero-buttons">
          <button className="btn btn-play">▶ Play</button>
          <button className="btn btn-info">ℹ More Info</button>
        </div>
        <p className="hero-description">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
          terrifying supernatural forces and one strange little girl.
        </p>
      </div>
      <div className="hero-fade"></div>
    </section>
  );
}

export default Hero;
