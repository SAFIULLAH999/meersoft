import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide comprehensive digital solutions including web design, development, branding, SEO, and content creation services tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while branding projects usually take 2-4 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive ongoing support and maintenance services to ensure your digital assets continue to perform optimally.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on specific requirements. We provide detailed quotes after understanding your project scope and objectives.",
    },
    {
      question: "Can you work with existing brands?",
      answer:
        "Absolutely! We can work with your existing brand guidelines or help evolve your brand identity to better serve your business goals.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header scroll-reveal-left">
          <h2 className="faq-title">
            FREQUENTLY
            <br />
            ASKED
            <br />
            <span className="faq-highlight">QUESTIONS!</span>
          </h2>
        </div>

        <div className="faq-list scroll-reveal-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <div className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
