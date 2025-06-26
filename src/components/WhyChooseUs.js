import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section id="about" className="why-choose-us">
      <div className="why-container">
        <div className="why-header">
          <h2 className="why-title">
            <span className="why-label">WHY</span>
            <span className="choose-us">CHOOSE US</span>
          </h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5L25 15H35L27.5 22.5L30 32.5L20 27.5L10 32.5L12.5 22.5L5 15H15L20 5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="benefit-title">PREMIUM QUALITY</h3>
            <p className="benefit-description">
              We deliver exceptional quality work that exceeds expectations and
              industry standards.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M8 12H32L30 28H10L8 12ZM8 12L6 4H2M14 32C14 34.2091 12.2091 36 10 36C7.79086 36 6 34.2091 6 32M30 32C30 34.2091 28.2091 36 26 36C23.7909 36 22 34.2091 22 32"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="benefit-title">FAST DELIVERY</h3>
            <p className="benefit-description">
              Quick turnaround times without compromising on quality or
              attention to detail.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 2L25.95 13.75H38.51L28.78 21.5L32.73 33.25L20 25.5L7.27 33.25L11.22 21.5L1.49 13.75H14.05L20 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="benefit-title">24/7 SUPPORT</h3>
            <p className="benefit-description">
              Round-the-clock customer support to assist you whenever you need
              help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
