import React, { useState, useRef } from 'react';
import { content } from '../data/content';
import {
  MailIcon,
  CopyIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon
} from '../components/Icons';

export function Contact() {
  const { contact } = content;
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(contact.email);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = contact.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setIsCopied(true);

      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } catch {
      // In case clipboard permissions are blocked
      setIsCopied(false);
    }
  };

  return (
    <section id={contact.sectionId} aria-labelledby="contact-heading">
      <div className="container">
        <header className="section-header" data-reveal data-reveal-index="0">
          <span className="section-label">{contact.sectionLabel}</span>
          <h2 id="contact-heading" className="section-title">
            {contact.title}
          </h2>
          <p className="section-subtitle">{contact.subtitle}</p>
        </header>

        <div className="panel-card contact-card" data-reveal data-reveal-index="1">
          <div className="contact-email-display">
            <span className="contact-email-label">{contact.emailAddressLabel}</span>
            <span className="contact-email-address">{contact.email}</span>
          </div>

          <div className="contact-actions">
            {/* Primary Email button (mailto) */}
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-primary"
            >
              <MailIcon size={18} />
              <span>{contact.emailButton.label}</span>
            </a>

            {/* Copy Email button with accessible confirmation */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCopyEmail}
              aria-label={
                isCopied
                  ? `${contact.copyEmail.copiedLabel} ${contact.email}`
                  : `${contact.copyEmail.idleLabel}: ${contact.email}`
              }
            >
              {isCopied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
              <span>
                {isCopied
                  ? contact.copyEmail.copiedLabel
                  : contact.copyEmail.idleLabel}
              </span>
            </button>

            {/* Polite screen reader live region announcement */}
            <div className="sr-only" aria-live="polite">
              {isCopied ? contact.copyEmail.copiedLabel : ''}
            </div>
          </div>

          {/* Social Channels with Icon AND Visible Text Label */}
          <div className="contact-channels">
            {contact.channels.map((channel) => (
              <a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-link"
                aria-label={channel.ariaLabel}
              >
                {channel.id === 'github' && <GithubIcon size={19} />}
                {channel.id === 'linkedin' && <LinkedinIcon size={19} />}
                <span>{channel.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
