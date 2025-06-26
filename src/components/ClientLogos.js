import React from 'react';
import './ClientLogos.css';

const ClientLogos = () => {
  const logos = ['natural', 'the next', 'smart fintech', 'next venture', 'explore design'];
  return (
    <div className="client-logos-section">
      <div className="client-logos-container">
        {logos.map((logo, index) => (
          <span key={index} className="client-logo">{logo}</span>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;