// Utility function to initialize scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Add a small delay for staggered animations
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.style.transitionDelay = "0s";
        }, delay);
      }
    });
  }, observerOptions);

  // Observe all scroll reveal elements
  const scrollElements = document.querySelectorAll(
    ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
  );

  scrollElements.forEach((el, index) => {
    // Add staggered animation delays
    if (el.parentElement?.children.length > 1) {
      el.style.transitionDelay = `${index * 0.1}s`;
    }
    observer.observe(el);
  });

  return observer;
};

// Utility function to add scroll reveal classes to elements
export const addScrollReveal = (element, direction = "up", delay = 0) => {
  if (!element) return;

  const classMap = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
  };

  element.classList.add(classMap[direction] || "scroll-reveal");
  if (delay > 0) {
    element.dataset.delay = delay;
  }
};

// Add smooth scroll behavior to anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};
