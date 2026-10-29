import React from 'react';
import { content } from '../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          {content.footer.name} {currentYear}
        </p>
      </div>
    </footer>
  );
}

