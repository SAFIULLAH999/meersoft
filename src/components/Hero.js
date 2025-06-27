import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text scroll-reveal-left">
            <h1 className="hero-title">
              <span className="title-line">
                WE ARE <span className="outlined-text">CREATIVE</span>
              </span>
              <span className="title-line">
                <span className="green-text">DESIGN</span> AGENCY
              </span>
              <div className="title-bottom">
                <span className="small-text">
                  LOREM IPSUM DOLOR SIT
                  <br />
                  AMET CONSECTETUR
                </span>
                <span className="and-text">&</span>
                <span className="pill-text">DEVELOPMENT</span>
              </div>
            </h1>
            <p className="hero-description">
              We create digital experiences that combine beautiful design with
              powerful functionality. Our team delivers innovative solutions
              that help your business grow and succeed in the digital world.
            </p>
            <button className="hero-cta">
              GET STARTED
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
            <div className="hero-circle-container">
              <div className="hero-circle-left"></div>
              <div className="hero-circle-right"></div>

              <div className="team-image-container">
                <div className="team-image">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=faces"
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
