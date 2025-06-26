import React from 'react';
import './BrandRecognition.css';

const BrandRecognition = () => {
  return (
    <section className="brand-rec-section">
      <div className="brand-rec-container">
        <div className="brand-rec-text">
          <h2>GET YOUR BRAND RECOGNIZED IN THE BEST POSSIBLE WAY</h2>
          <p>
            Chameleon keeps you moving and improving with digital innovation.
          </p>
          <a href="#explore" className="explore-link">
            EXPLORE MORE →
          </a>
        </div>
        <div className="brand-rec-visual">
          <div className="phone-stack">
            <div className="phone phone-back"></div>
            <div className="phone phone-middle"></div>
            <div className="phone phone-front">
              <span className="phone-number">01</span>
              <h3>Phone Screen Mockup</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandRecognition;