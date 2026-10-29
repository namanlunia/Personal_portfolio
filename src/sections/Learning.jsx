import React from 'react';
import { content } from '../data/content';
import { ExternalLinkIcon } from '../components/Icons';

export function Learning() {
  const { learning } = content;

  return (
    <section id={learning.sectionId} aria-labelledby="learning-heading">
      <div className="container">
        <header className="section-header" data-reveal data-reveal-index="0">
          <span className="section-label">{learning.sectionLabel}</span>
          <h2 id="learning-heading" className="section-title">
            {learning.title}
          </h2>
          <p className="section-subtitle">{learning.subtitle}</p>
        </header>

        {/* Highlight Block: Currently Learning */}
        <div
          className="panel-card learning-current-card"
          data-reveal
          data-reveal-index="1"
        >
          <span className="learning-current-badge">
            {learning.currentHeading}
          </span>
          <h3 className="learning-current-title">{learning.current.title}</h3>
          <p className="learning-current-text">{learning.current.text}</p>
        </div>

        {/* 5 IBM SkillsBuild Certificate Cards */}
        <div className="certificates-grid">
          {learning.certificates.map((cert, index) => (
            <article
              key={cert.id}
              className="panel-card cert-card"
              data-reveal
              data-reveal-index={index + 2}
            >
              <div className="cert-header">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>

              <footer className="cert-footer">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                  aria-label={`${learning.verifyLabel} ${cert.title} ${learning.verifyAriaSuffix}`}
                >
                  <span>{learning.verifyLabel}</span>
                  <ExternalLinkIcon size={13} />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

