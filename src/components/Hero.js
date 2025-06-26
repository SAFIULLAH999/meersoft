import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">
                WE <span className="outlined-text">ARE</span>
              </span>
              <span className="title-line">
                <span className="green-text">SKILLED</span> IN
              </span>
              <div className="title-bottom">
                <span className="small-text">
                  LOREM
                  <br />
                  IPSUM
                </span>
                <span className="and-text">AND</span>
                <span className="pill-text">LOREM IPSUM</span>
              </div>
              <div></div>
            </h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="hero-cta">
              GET STARTED NOW
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path
                  d="M12 1L19 8L12 15M19 8H1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <div className="team-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9f0b52c0859649e0acc31a2a0ba5605d%2F1741e3063d5f4bd4a9d6c259f93dcbe9?format=webp&width=800"
                  alt="Our Team"
                />
              </div>
              <div className="stat-badge">
                <span className="stat-number">01</span>
              </div>
              <div className="play-button">
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="watch-label">
                <span>WATCH</span>
                <span>VIDEO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-partners">
          <div className="partners-scroll">
            <span className="partner-logo">nagural</span>
            <span className="partner-logo">🏛️ ACADEMY</span>
            <span className="partner-logo">🏛️ ACADEMY</span>
            <span className="partner-logo">nagural</span>
            <span className="partner-logo">🏛️ ACADEMY</span>
            <span className="partner-logo">🏛️ ACADEMY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
