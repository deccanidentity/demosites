import { Link } from 'react-router-dom';
import siteConfig from '../data/site.config.js';
import industries from '../data/industries.js';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer__grid">
          {/* Brand & Corporate Bio */}
          <div className="footer__brand">
            <div className="footer__brand-head">
              <img
                src={siteConfig.logoSymbol}
                alt="DeccanIDentity Emblem"
                className="footer__logo-img"
                width="36"
                height="36"
              />
              <img
                src={siteConfig.logoName}
                alt="DeccanIDentity"
                className="footer__logo-name-img"
                height="28"
              />
            </div>
            <div className="footer__legal-name">{siteConfig.companyLegalName}</div>

            <p className="footer__tagline">{siteConfig.tagline}</p>
            <p className="footer__quote">"{siteConfig.corporateQuote}"</p>

            {/* Social Icons from www.deccanidentity.com */}
            <div className="footer__socials">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" title="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp Direct">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Industries Catalogue */}
          <div className="footer__col">
            <h4 className="footer__heading">Industries</h4>
            <ul className="footer__list">
              {industries.map(ind => (
                <li key={ind.id}>
                  <Link to={`/industries/${ind.id}`}>
                    {ind.emoji} {ind.name}
                    {ind.status === 'coming-soon' && <span className="footer__soon">Soon</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick & Corporate Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><Link to="/templates">All Templates Catalogue</Link></li>
              <li><Link to="/pricing">Pricing & Custom Packages</Link></li>
              <li><Link to="/industries/real-estate">Real Estate Showcase (6 Live)</Link></li>
              <li><Link to="/contact">Get This Template</Link></li>
              <li>
                <a href={siteConfig.mainWebsite} target="_blank" rel="noreferrer" style={{ color: 'var(--brand-gold)' }}>
                  DeccanIDentity Corporate ↗
                </a>
              </li>
              <li>
                <a href={`${siteConfig.mainWebsite}/solutions.htm`} target="_blank" rel="noreferrer">
                  Enterprise Solutions ↗
                </a>
              </li>
              <li>
                <a href={`${siteConfig.mainWebsite}/technology.htm`} target="_blank" rel="noreferrer">
                  IdentityTech & Security ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Official Registered & Branch Contact Info */}
          <div className="footer__col">
            <h4 className="footer__heading">Registered Office</h4>
            <div className="footer__office-card">
              <div className="footer__addr-line">
                <span className="footer__addr-icon">🏢</span>
                <span>{siteConfig.registeredOffice.fullAddress} 🇮🇳</span>
              </div>
              <div className="footer__addr-line">
                <span className="footer__addr-icon">📞</span>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </div>
              <div className="footer__addr-line">
                <span className="footer__addr-icon">✉️</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>

            <h4 className="footer__heading" style={{ marginTop: 'var(--space-4)' }}>Branch Offices</h4>
            <ul className="footer__list footer__branches">
              {siteConfig.branches.map(b => (
                <li key={b.city}>
                  <strong>{b.city}:</strong> {b.address.split(',')[0]} · <a href={`tel:${b.phone}`}>{b.phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer__bottom">
          <p>
            Copyright © {CURRENT_YEAR} All Rights Reserved. By{' '}
            <a
              href="https://deccanidentity.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__author-link"
            >
              DeccanIDentity
            </a>
          </p>
          <div className="footer__bottom-links">
            <a href={`${siteConfig.mainWebsite}/termsandcond.htm`}>Terms & Conditions</a>
            <span>•</span>
            <a href={`${siteConfig.mainWebsite}/privacy.htm`}>Privacy Policy</a>
            <span>•</span>
            <a href={siteConfig.mainWebsite}>www.deccanidentity.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
