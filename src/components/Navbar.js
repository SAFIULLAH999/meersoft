import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Meersoft</span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("portfolio")}
            >
              PORTFOLIO
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("services")}
            >
              SERVICES
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </button>
          </li>
        </ul>

        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
