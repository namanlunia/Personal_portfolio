import React, { useState, useEffect } from 'react';
import { content } from './data/content';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Learning } from './sections/Learning';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [activeSection, setActiveSection] = useState('');
  useScrollReveal();

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'learning', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // Also update if at the top of the page
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        {content.navigation.skipToContent}
      </a>

      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Main Landmark */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Learning />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
export default App;

