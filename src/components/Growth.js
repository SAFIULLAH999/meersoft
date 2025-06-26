import React from 'react';
import './Growth.css';

const Growth = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        <div className="growth-content">
          <div className="growth-text">
            <h2 className="growth-title">
              HAVE A <span className="highlight-gray">BRILLIANT</span><br/>
              IDEA BOOST THE <span className="highlight-green">GROWTH</span><br/>
              <span className="highlight-gray">DEVELOPMENT AGENCY</span><br/>
              YOUR <span className="pill-text-dark">BRANDING</span>
            </h2>
            <p className="growth-description">
              Transform your innovative ideas into powerful brand experiences. 
              Our development agency specializes in creating digital solutions 
              that drive growth and establish strong brand presence.
            </p>
          </div>
          <div className="growth-visual">
            <div className="growth-stats">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
            <div className="growth-images">
              <img src="/src/assets/team-work.jpg" alt="Team collaboration" className="growth-img" />
              <img src="/src/assets/meeting.jpg" alt="Business meeting" className="growth-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
