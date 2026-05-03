import { useEffect } from "react";

export default function useAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    function observeElements() {
      const elements = document.querySelectorAll(
        ".section-heading, .project-card, .contact-panel, .about-grid .panel"
      );

      elements.forEach((el) => {
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });
    }

    observeElements();

    const timeout = setTimeout(observeElements, 300);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}