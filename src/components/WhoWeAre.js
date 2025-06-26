import React from 'react';
import './WhoWeAre.css';
import image from '../assets/layout-1.png';
import image3 from '../assets/layout-2.png';

const WhoWeAre = () => {
  return (
    <section id="about" className="whoweare-section">
      <div className="whoweare-container">
        <div className="whoweare-header">
          <span>WHO ARE WE</span>
          <h2>
            HAVE A BRILLIANT IDEA BOOST THE <span className="text-green">GROWTH</span>{' '}
            DEVELOPMENT AGENCY YOUR{' '}
            <span className="text-pill-dark">BRANDING</span>
          </h2>
        </div>
        <div className="whoweare-content-grid">
          <div className="whoweare-team-info">
            <div className="team-avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <p className="team-description">
              Our team of experts uses a methodology to identify the credit cards
              most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>
          </div>
          <div className="whoweare-stats-info">
            <div className="stat-card">
              <img src={image} alt="Team working on a project" />
              <div className="stat-overlay">
                <h3>1.8x</h3>
                <p>FASTER DELIVERY</p>
              </div>
            </div>
            <div className="stat-card">
              <img src={image3} alt="Successful team meeting" />
              <div className="stat-overlay">
                <h3>98%</h3>
                <p>CLIENT SATISFACTION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;