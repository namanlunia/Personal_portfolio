import React, { useRef, useEffect } from 'react';
import { content } from '../data/content';

export function Hero() {
  const panelRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const panelEl = panelRef.current;
    const glowEl = glowRef.current;
    if (!panelEl || !glowEl) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    const animateGlow = () => {
      // Smooth interpolation towards target
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      glowEl.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      const dist = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      if (dist > 0.05) {
        rafId = requestAnimationFrame(animateGlow);
      } else {
        isMoving = false;
        rafId = null;
      }
    };

    const handlePointerMove = (e) => {
      const rect = panelEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Small bounded movement (max ~14px) using transform only
      const deltaX = (e.clientX - centerX) * 0.08;
      const deltaY = (e.clientY - centerY) * 0.08;

      targetX = Math.max(-16, Math.min(16, deltaX));
      targetY = Math.max(-16, Math.min(16, deltaY));

      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(animateGlow);
      }
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(animateGlow);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    panelEl.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      panelEl.removeEventListener('pointerleave', handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="top" className="hero-section" aria-label={content.hero.sectionAriaLabel}>
      <div className="container hero-grid">
        {/* Left Column: Introduction & Primary CTA */}
        <div className="hero-content">
          <span className="hero-eyebrow">{content.hero.eyebrow}</span>
          <h1 className="hero-name">{content.hero.name}</h1>
          <p className="hero-role">{content.hero.role}</p>
          <p className="hero-tagline">{content.hero.tagline}</p>

          <div className="hero-chip">
            <span className="chip-indicator" aria-hidden="true" />
            <span>{content.hero.learningChip}</span>
          </div>

          <div className="hero-actions">
            <a
              href={`#${content.hero.actions.primary.targetId}`}
              className="btn btn-primary"
            >
              {content.hero.actions.primary.label}
            </a>
            <a
              href={`#${content.hero.actions.secondary.targetId}`}
              className="btn btn-secondary"
            >
              {content.hero.actions.secondary.label}
            </a>
          </div>
        </div>

        {/* Right Column: Game-Editor Status Panel */}
        <div className="status-panel-wrapper" ref={panelRef}>
          <div className="hero-glow" ref={glowRef} aria-hidden="true" />
          <div className="status-panel" aria-label={content.statusPanel.heading}>
            <div className="status-panel-header">
              <span className="status-panel-title">
                {content.statusPanel.heading}
              </span>
              <div className="status-panel-dots" aria-hidden="true">
                <span className="panel-dot" />
                <span className="panel-dot" />
                <span className="panel-dot" />
              </div>
            </div>

            <div className="status-rows">
              {content.statusPanel.rows.map((row, index) => (
                <div key={index} className="status-row">
                  <span className="status-label">{row.label}</span>
                  <span className="status-value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
