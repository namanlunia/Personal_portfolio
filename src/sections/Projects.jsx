import React from 'react';
import { content } from '../data/content';
import { ExternalLinkIcon } from '../components/Icons';

export function Projects() {
  const { projectsSection, projects } = content;

  return (
    <section id={projectsSection.sectionId} aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header" data-reveal data-reveal-index="0">
          <span className="section-label">{projectsSection.sectionLabel}</span>
          <h2 id="projects-heading" className="section-title">
            {projectsSection.title}
          </h2>
          <p className="section-subtitle">{projectsSection.subtitle}</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isProgress = project.status.toLowerCase().includes('progress');
            const hasTools = Array.isArray(project.tools) && project.tools.length > 0;
            const validLinks = Array.isArray(project.links)
              ? project.links.filter((l) => l && l.url && l.label)
              : [];
            const hasLinks = validLinks.length > 0;

            return (
              <article
                key={project.id}
                className="panel-card project-card"
                data-reveal
                data-reveal-index={index + 1}
              >
                <div className="project-card-header">
                  {/* Status badge shown once */}
                  <span
                    className={`tag-badge ${
                      isProgress ? 'status-in-progress' : 'status-earlier'
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <div className="project-body">
                  <div>
                    <span className="project-field-label">
                      {projectsSection.labels.problem}
                    </span>
                    <p className="project-field-text">{project.problem}</p>
                  </div>

                  <div>
                    <span className="project-field-label">
                      {projectsSection.labels.whatIDid}
                    </span>
                    <p className="project-field-text">{project.whatIDid}</p>
                  </div>
                </div>

                {/* Tool tags */}
                {hasTools && (
                  <ul className="project-tools-list" aria-label={projectsSection.labels.tools}>
                    {project.tools.map((tool, tIndex) => (
                      <li key={tIndex} className="tag-badge">
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer row of links aligned to the card bottom */}
                {hasLinks && (
                  <footer className="project-footer-links">
                    {validLinks.map((link, lIndex) => (
                      <a
                        key={lIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>{link.label}</span>
                        <ExternalLinkIcon size={13} />
                      </a>
                    ))}
                  </footer>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
