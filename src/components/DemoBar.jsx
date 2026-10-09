import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import siteConfig from '../data/site.config.js';

export default function DemoBar({ templateSlug, templateName, label }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="demo-bar">
      <Link to={`/templates/${templateSlug}`} className="demo-bar__back">
        ← Back to Template
      </Link>

      <div className="demo-bar__label">
        {label || `${templateName} — Live Demo (Demo Data Only)`}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          type="button"
          className="demo-theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch template to light mode' : 'Switch template to dark mode'}
          title={theme === 'dark' ? 'Switch template to light mode' : 'Switch template to dark mode'}
        >
          {theme === 'dark' ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <a
          href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi DeccanIDentity! I'm interested in the ${templateName} template.`)}`}
          className="btn btn-primary btn-sm demo-bar__cta"
          target="_blank"
          rel="noreferrer"
        >
          Get This Template
        </a>
      </div>
    </div>
  );
}
