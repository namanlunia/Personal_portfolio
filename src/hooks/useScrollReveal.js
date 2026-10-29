import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // If IntersectionObserver is unavailable or reduced motion is preferred, keep elements visible
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    // Apply pending class and stagger index before observing
    elements.forEach((el, index) => {
      // If element is already in viewport on initial load, do not animate
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      const stagger = el.getAttribute('data-reveal-index') || (index % 6);
      el.style.setProperty('--stagger-index', stagger);
      el.classList.add('reveal-item');

      if (!inViewport) {
        el.classList.add('reveal-pending');
      }
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    elements.forEach((el) => {
      if (el.classList.contains('reveal-pending')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

