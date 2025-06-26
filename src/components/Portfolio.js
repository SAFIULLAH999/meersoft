import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop",
      color: "#ff6b6b",
      title: "Creative Design",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop",
      color: "#4ecdc4",
      title: "Digital Art",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      color: "#45b7d1",
      title: "Analytics",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      color: "#96ceb4",
      title: "Team Work",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      color: "#feca57",
      title: "Technology",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
      color: "#ff9ff3",
      title: "Innovation",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            <span className="portfolio-text">PORTFOLIO</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item item-${index + 1}`}
              style={{ "--accent-color": item.color }}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-overlay">
                <h3 className="portfolio-item-title">{item.title}</h3>
                <div className="portfolio-arrow">
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
          ))}

          <div className="portfolio-item portfolio-center">
            <div className="center-content">
              <h3 className="center-title">PORTFOLIO</h3>
              <p className="center-subtitle">VIEW MORE</p>
              <div className="center-arrow">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6.66666 16H25.3333M25.3333 16L18.6667 9.33334M25.3333 16L18.6667 22.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
