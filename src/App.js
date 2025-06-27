import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import MobileSection from "./components/MobileSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  initScrollAnimations,
  initSmoothScroll,
} from "./utils/scrollAnimations";

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = initScrollAnimations();

    // Initialize smooth scroll for anchor links
    initSmoothScroll();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Skills />
        <Portfolio />
        <Services />
        <Testimonials />
        <FAQ />
        <MobileSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
