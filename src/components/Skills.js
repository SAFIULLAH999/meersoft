import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-content">
          <div className="skills-text">
            <h2 className="skills-title">
              EMPOWERING
              <br />
              SKILLS TO HELP YOU!
            </h2>
            <p className="skills-description">
              Our team combines technical expertise with creative vision to
              deliver solutions that drive results and exceed expectations.
            </p>
          </div>

          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2L20.4 11.6H31.2L22.4 18.4L26.8 28L16 21.2L5.2 28L9.6 18.4L0.8 11.6H11.6L16 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="skill-info">
                <h3>WEB DESIGN</h3>
                <p>Creating beautiful and functional websites</p>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 4H24C25.1 4 26 4.9 26 6V26C26 27.1 25.1 28 24 28H8C6.9 28 6 27.1 6 26V6C6 4.9 6.9 4 8 4ZM8 8V12H24V8H8ZM8 16V20H16V16H8ZM20 16V20H24V16H20Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="skill-info">
                <h3>DEVELOPMENT</h3>
                <p>Building robust and scalable applications</p>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 6C18.209 6 20 7.791 20 10C20 12.209 18.209 14 16 14C13.791 14 12 12.209 12 10C12 7.791 13.791 6 16 6ZM16 26C12.134 26 8.781 24.079 6.8 21.2C6.836 17.4 14.4 15.3 16 15.3C17.584 15.3 25.164 17.4 25.2 21.2C23.219 24.079 19.866 26 16 26Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="skill-info">
                <h3>CREATIVE STRATEGY</h3>
                <p>Strategic planning for digital success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-visual">
          <div className="visual-grid">
            <div className="visual-item visual-1">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
                alt="Team collaboration"
              />
            </div>
            <div className="visual-item visual-2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                alt="Business meeting"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
