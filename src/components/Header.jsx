import React, { useState, useEffect, useRef } from 'react';
import { content } from '../data/content';
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from './Icons';

export function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Monitor scroll for subtle header background & border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and outside click to close mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target) &&
        !menuButtonRef.current?.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Monogram link to top */}
        <a
          href="#top"
          className="monogram-link"
          aria-label={content.site.name}
          onClick={handleNavClick}
        >
          {content.site.monogram}
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label={content.navigation.mainNavAriaLabel}>
          {content.navigation.items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions (Socials & Mobile Toggle) */}
        <div className="header-actions">
          <a
            href={content.navigation.socialLinks.github.url}
            className="header-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.navigation.socialLinks.github.ariaLabel}
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={content.navigation.socialLinks.linkedin.url}
            className="header-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.navigation.socialLinks.linkedin.ariaLabel}
          >
            <LinkedinIcon size={19} />
          </a>

          {/* Accessible Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-menu-btn"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={
              mobileMenuOpen
                ? content.navigation.closeMenu
                : content.navigation.openMenu
            }
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        id="mobile-nav"
        ref={mobileNavRef}
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-label={content.navigation.mobileNavAriaLabel}
      >
        <ul className="mobile-nav-list">
          {content.navigation.items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="mobile-nav-link"
                  aria-current={isActive ? 'true' : undefined}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mobile-socials">
          <a
            href={content.navigation.socialLinks.github.url}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            <GithubIcon size={18} />
            <span>{content.navigation.socialLinks.github.label}</span>
          </a>
          <a
            href={content.navigation.socialLinks.linkedin.url}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            <LinkedinIcon size={18} />
            <span>{content.navigation.socialLinks.linkedin.label}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
