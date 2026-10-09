import { Link, NavLink, useNavigate } from 'react-router-dom';
import siteConfig from '../data/site.config.js';
import { useTheme } from '../context/ThemeContext.jsx';
import './Nav.css';

export default function Nav() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container nav__inner">
        {/* Brand Logo with Official DeccanIDentity emblem & text logo from deccanidentity.com */}
        <Link to="/" className="nav__logo" aria-label="DeccanIDentity Home">
          <img
            src={siteConfig.logoSymbol}
            alt="DeccanIDentity Logo"
            className="nav__logo-img"
            width="34"
            height="34"
          />
          <img
            src={siteConfig.logoName}
            alt="DeccanIDentity"
            className="nav__logo-name-img"
            height="26"
          />
          <span className="nav__showcase-badge">Demo Sites</span>
        </Link>

        {/* Links */}
        <ul className="nav__links" role="list">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/templates">Templates</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/clients">Clients</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* CTA & Theme Switch */}
        <div className="nav__cta">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate('/templates')}
          >
            Browse Templates
          </button>
        </div>
      </div>
    </nav>
  );
}
