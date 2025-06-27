import React, { useEffect, useRef } from "react";
import "./MobileSection.css";

const MobileSection = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mobile-section">
      <div className="mobile-container">
        <div className="mobile-content">
          <div className="mobile-text-content">
            <h2 className="mobile-title">
              GET YOUR BRAND RECOGNIZED IN
              <br />
              THE <span className="mobile-highlight">BEST POSSIBLE WAY</span>
            </h2>
            <p className="mobile-description">
              Chameleon keeps you moving and improving with digital innovation.
              Let's discuss and build it together.
            </p>
            <div className="mobile-cta">
              <span className="explore-text">EXPLORE</span>
              <span className="more-text">MORE</span>
              <div className="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div ref={phoneRef} className="mobile-phones-container">
            <div className="phone-stack">
              <div className="phone phone-1">
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-number">01</div>
                    <div className="phone-text">Phone Screen Mockup</div>
                  </div>
                </div>
              </div>

              <div className="phone phone-2">
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-number">02</div>
                    <div className="phone-text">Modern Design</div>
                  </div>
                </div>
              </div>

              <div className="phone phone-3">
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-number">03</div>
                    <div className="phone-text">User Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
