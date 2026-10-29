import React from 'react';
import { content } from '../data/content';

export function About() {
  const { about } = content;

  return (
    <section id={about.sectionId} aria-labelledby="about-heading">
      <div className="container">
        <header className="section-header" data-reveal data-reveal-index="0">
          <span className="section-label">{about.sectionLabel}</span>
          <h2 id="about-heading" className="section-title">
            {about.title}
          </h2>
        </header>

        <div className="about-grid">
          {/* Bio Lines */}
          <div className="panel-card about-bio-card" data-reveal data-reveal-index="1">
            {about.bio.map((paragraph, index) => (
              <p key={index} className="about-bio-text">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interests & Tools tag lists */}
          <div className="panel-card about-tags-card" data-reveal data-reveal-index="2">
            <div>
              <h3 className="tags-group-title">{about.interestsHeading}</h3>
              <ul className="tags-list" aria-label={about.interestsHeading}>
                {about.interests.map((item, index) => (
                  <li key={index} className="tag-badge">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="tags-group-title">{about.toolsHeading}</h3>
              <ul className="tags-list" aria-label={about.toolsHeading}>
                {about.tools.map((tool, index) => (
                  <li key={index} className="tag-badge">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

