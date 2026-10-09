import { useNavigate } from 'react-router-dom';
import industries from '../data/industries.js';
import templates from '../data/templates.js';
import packages from '../data/packages.js';
import siteConfig from '../data/site.config.js';
import TemplateCard from '../components/TemplateCard.jsx';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const featuredTemplates = templates.filter(t => t.featured);

  return (
    <main className="page-content">

      {/* ── Vertical Unified Hero & Industry Panorama (Single Viewport Fit) ──────────── */}
      <section className="hero hero--vertical-fit" aria-labelledby="hero-title">
        <div className="hero__bg">
          <div className="hero__grid-lines" aria-hidden="true" />
          <div className="hero__glow" aria-hidden="true" />
        </div>

        <div className="container hero__vertical-layout">
          {/* Top Section: Centered Value Proposition & CTAs */}
          <div className="hero__header-block">
            <div className="hero__eyebrow-slug">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              Your Business. Your Website. Your Way.
            </div>

            <h1 id="hero-title" className="hero__title hero__title--vertical">
              Industry-Ready Websites.{' '}
              <span className="gradient-text">Designed for Your Success.</span>
            </h1>

            <p className="hero__subtitle hero__subtitle--vertical">
              Discover industry-ready website templates, explore live demos and customize your perfect design to bring your brand to life.
            </p>

            <div className="hero__actions hero__actions--vertical">
              <button className="btn btn-primary" onClick={() => navigate('/templates')}>
                Browse All Templates ({templates.length}) →
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>
                Contact Our Team
              </button>

              <div className="hero__stats-inline" role="list">
                <div className="hero__stat-inline-item" role="listitem">
                  <span className="hero__stat-inline-icon" aria-hidden="true">💼</span>
                  <strong>9+</strong>
                  <span>Industries</span>
                </div>
                <span className="hero__stat-inline-dot" aria-hidden="true">•</span>
                <div className="hero__stat-inline-item" role="listitem">
                  <span className="hero__stat-inline-icon" aria-hidden="true">🚀</span>
                  <strong>13</strong>
                  <span>Live Demo Sites</span>
                </div>
                <span className="hero__stat-inline-dot" aria-hidden="true">•</span>
                <div className="hero__stat-inline-item hero__stat-inline-item--price" role="listitem">
                  <span className="hero__stat-inline-icon" aria-hidden="true">👉</span>
                  <strong>₹4,999</strong>
                  <span>Starting ✨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Full-Width Industry Panorama Deck */}
          <div className="hero__industry-deck" aria-labelledby="industry-deck-title">
            <div className="hero__deck-header">
              <div className="hero__deck-header-left">
                <span className="hero__deck-tag">
                  <span className="hero__deck-tag-dot" aria-hidden="true" />
                  FIND YOUR INDUSTRY
                </span>
                <h2 id="industry-deck-title" className="hero__deck-title">
                  What kind of website do you need?
                </h2>
              </div>
              <span className="hero__deck-hint">
                Click any category to preview live websites ↗
              </span>
            </div>

            <div className="hero__deck-grid">
              {industries.map(ind => {
                const count = templates.filter(t => t.industry === ind.id).length;
                return (
                  <div
                    key={ind.id}
                    className="hero__deck-card"
                    style={{ '--ind-color': ind.color }}
                    onClick={() => navigate(`/industries/${ind.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && navigate(`/industries/${ind.id}`)}
                    aria-label={`${ind.name} industry templates (${count > 0 ? `${count} live demos` : 'explore'})`}
                  >
                    <div className="hero__deck-card-glow" aria-hidden="true" />
                    <div className="hero__deck-icon-wrap">
                      <span className="hero__deck-emoji" aria-hidden="true">{ind.emoji}</span>
                    </div>

                    <div className="hero__deck-details">
                      <div className="hero__deck-name">{ind.name}</div>
                      <div className="hero__deck-sub">
                        {ind.subtitle?.split('•').slice(0, 3).join(' • ') || ind.name}
                      </div>
                    </div>

                    <div className="hero__deck-action">
                      <span className={`hero__deck-badge ${count > 0 ? 'is-live' : 'is-explore'}`}>
                        {count > 0 ? (
                          <>
                            <span className="hero__live-dot" aria-hidden="true" />
                            {count} Live
                          </>
                        ) : (
                          'Explore'
                        )}
                      </span>
                      <span className="hero__deck-arrow-btn" aria-hidden="true">
                        <span className="hero__deck-arrow">→</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Templates ────────────────────────────────────────── */}
      <section className="section featured-section" aria-labelledby="featured-title">
        <div className="container">
          <div className="featured-header">
            <div>
              <div className="section-label">Interactive Showcase</div>
              <h2 id="featured-title" className="section-title">Featured Industry Templates</h2>
              <p className="section-sub">Experience real interactive layouts with booking modals, pricing calculators, live menus, and floor plan explorers.</p>
            </div>
            <button className="btn btn-outline" onClick={() => navigate('/templates')}>
              View all Templates ({templates.length}) →
            </button>
          </div>
          <div className="templates-grid">
            {featuredTemplates.map(t => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive Advantage ─────────────────────────────────────── */}
      <section className="section competitive-section" aria-labelledby="comp-title">
        <div className="container">
          <div className="section-label">Why Choose Us</div>
          <h2 id="comp-title" className="section-title">
            The DeccanIDentity Advantage
          </h2>
          <p className="section-sub">
            Purpose-engineered for performance, reliability, and ease of ownership.
          </p>

          <div className="comp-grid">
            {/* DeccanIDentity Card */}
            <div className="comp-card comp-card--featured">
              <div className="comp-card__badge">⭐ Recommended Choice</div>
              <h3 className="comp-card__title">DeccanIDentity Templates</h3>
              <p className="comp-card__desc">Modern frontend architecture built by enterprise engineers at {siteConfig.companyLegalName}.</p>
              <ul className="comp-card__list">
                <li><span>⚡</span> <strong>Sub-Second Loading:</strong> Ultra-clean code with zero bloated plugins or slow scripts.</li>
                <li><span>🎯</span> <strong>100% Live Prototypes:</strong> Try real interactive maps, tabs, and filters before you invest.</li>
                <li><span>🛡️</span> <strong>Enterprise Grade Security:</strong> Clean code standards backed by corporate software expertise.</li>
                <li><span>💼</span> <strong>Clear Code Ownership:</strong> Your domain, your content, and fully customizable design.</li>
                <li><span>📞</span> <strong>Direct Technical Support:</strong> Direct support desks with Hyderabad HQ and branch offices.</li>
              </ul>
            </div>

            {/* Generic WordPress */}
            <div className="comp-card">
              <div className="comp-card__label">Traditional Option</div>
              <h3 className="comp-card__title">Generic WordPress Themes</h3>
              <p className="comp-card__desc">Multi-purpose themes loaded with third-party builder plugins.</p>
              <ul className="comp-card__list comp-card__list--alt">
                <li><span>⚠️</span> 30+ plugins slowing down mobile load times to 4–7 seconds.</li>
                <li><span>⚠️</span> Frequent plugin vulnerabilities and form spam attacks.</li>
                <li><span>⚠️</span> Complex dashboards that require constant maintenance.</li>
                <li><span>⚠️</span> Recurring costs for premium plugins and updates.</li>
                <li><span>⚠️</span> Hard to customize without developer licensing fees.</li>
              </ul>
            </div>

            {/* Freelancers */}
            <div className="comp-card">
              <div className="comp-card__label">Traditional Option</div>
              <h3 className="comp-card__title">Unverified Freelance Projects</h3>
              <p className="comp-card__desc">Ad-hoc website builds without corporate accountability.</p>
              <ul className="comp-card__list comp-card__list--alt">
                <li><span>⚠️</span> Inconsistent code quality and unpredictable delivery timelines.</li>
                <li><span>⚠️</span> Extra charges for small revisions and basic configurations.</li>
                <li><span>⚠️</span> No long-term maintenance or post-delivery guarantees.</li>
                <li><span>⚠️</span> Lack of industry-specific functional requirements.</li>
                <li><span>⚠️</span> Single point of failure if the developer is unavailable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="section how-section" aria-labelledby="how-title">
        <div className="container">
          <div className="section-label">Simple Process</div>
          <h2 id="how-title" className="section-title">How It Works</h2>
          <p className="section-sub">From selection to launch in four straightforward steps.</p>
          <div className="how-grid">
            {[
              { step: '01', icon: '🔍', title: 'Pick Your Template', desc: 'Browse templates by industry. Test every button, form, and layout map live in your browser.' },
              { step: '02', icon: '📝', title: 'Share Your Details', desc: 'Send us your company logo, project details, images, and content via WhatsApp or form.' },
              { step: '03', icon: '⚡', title: 'We Customize & Style', desc: 'We tailor the layout to match your branding, colors, and specific business workflow.' },
              { step: '04', icon: '🚀', title: 'Launch on Your Domain', desc: 'We handle deployment, connect your custom domain, and hand over your ready-to-use site.' },
            ].map(item => (
              <div key={item.step} className="how-card">
                <div className="how-card__step">{item.step}</div>
                <div className="how-card__icon">{item.icon}</div>
                <h3 className="how-card__title">{item.title}</h3>
                <p className="how-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparent Pricing Strip ─────────────────────────────────── */}
      <section className="section pricing-strip-section" aria-labelledby="pricing-strip-title">
        <div className="container">
          <div className="section-label">Transparent Packages</div>
          <h2 id="pricing-strip-title" className="section-title">One Clear Pricing System</h2>
          <p className="section-sub">Same transparent tiers apply across all industries with no hidden setup fees.</p>

          <div className="pricing-strip">
            {packages.map(pkg => (
              <div key={pkg.id} className={`price-chip ${pkg.highlight ? 'price-chip--active' : ''}`}>
                <div className="price-chip__name">{pkg.name}</div>
                <div className="price-chip__price">{pkg.priceLabel}</div>
                {pkg.badge && <span className="price-chip__badge">{pkg.badge}</span>}
              </div>
            ))}
          </div>

          <div className="pricing-strip__cta">
            <button className="btn btn-outline" onClick={() => navigate('/pricing')}>
              View Detailed Packages & Inclusions →
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
