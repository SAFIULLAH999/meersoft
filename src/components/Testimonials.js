import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonial-content">
          <div className="quote-mark">
            <svg width="60" height="48" viewBox="0 0 60 48" fill="none">
              <path
                d="M0 24C0 12 6 0 24 0V12C18 12 12 18 12 24C12 30 18 36 24 36C30 36 36 30 36 24C36 18 30 12 24 12V0C42 0 48 12 48 24C48 36 42 48 24 48C6 48 0 36 0 24ZM12 24C12 12 18 0 36 0V12C30 12 24 18 24 24C24 30 30 36 36 36C42 36 48 30 48 24C48 18 42 12 36 12V0C54 0 60 12 60 24C60 36 54 48 36 48C18 48 12 36 12 24Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <blockquote className="testimonial-text">
            Working with Meersoft has been an incredible experience. Their team
            delivers exceptional results that exceed expectations every time.
            The attention to detail and professional approach sets them apart
            from the competition.
          </blockquote>

          <div className="testimonial-author">
            <div className="author-info">
              <h4 className="author-name">Sarah Johnson</h4>
              <p className="author-position">CEO, TechCorp</p>
            </div>
            <div className="author-avatar">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b287?w=100&h=100&fit=crop&crop=face"
                alt="Sarah Johnson"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
