import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "LOGO DESIGN & BRANDING",
      description:
        "Complete brand identity solutions that make your business stand out",
    },
    {
      title: "WEBSITE DESIGN & DEVELOPMENT",
      description:
        "Modern, responsive websites that deliver exceptional user experiences",
    },
    {
      title: "SEO",
      description:
        "Search engine optimization to boost your online visibility and rankings",
    },
    {
      title: "CONTENT WRITING",
      description:
        "Compelling content that engages your audience and drives conversions",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            WE PROVIDE
            <br />
            <span className="services-highlight">PREMIUM SERVICES!</span>
          </h2>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
