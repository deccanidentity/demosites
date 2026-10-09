import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import testimonials, { clientStats, clientLogos } from '../data/testimonials.js';
import siteConfig from '../data/site.config.js';
import './ClientsPage.css';

export default function ClientsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Reviews', icon: '⭐' },
    { id: 'real-estate', label: 'Real Estate', icon: '🏗️' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'hospitality', label: 'Hospitality', icon: '🍽️' },
    { id: 'industrial', label: 'Industrial', icon: '🏭' },
    { id: 'retail', label: 'Retail & D2C', icon: '🛍️' },
  ];

  const filteredTestimonials =
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter(t => t.industryId === selectedCategory);

  return (
    <main className="page-content clients-page">
      {/* ── Page Header ────────────────────────────────────────────────── */}
      <section className="clients-hero section" aria-labelledby="clients-title">
        <div className="container">
          <div className="clients-hero__inner">
            <div className="clients-hero__eyebrow">
              <span className="clients-hero__eyebrow-dot" aria-hidden="true" />
              Verified Client Stories
            </div>

            <h1 id="clients-title" className="clients-hero__title">
              <span className="clients-hero__phrase">Real Businesses.</span>{' '}
              <span className="clients-hero__phrase">Real Websites.</span>{' '}
              <span className="clients-hero__phrase gradient-text">Real Results.</span>
            </h1>

            <p className="clients-hero__sub">
              Explore authentic feedback, verified metrics, and project outcomes from business owners, healthcare directors, educators, and founders who launched with {siteConfig.companyLegalName.replace(/\.+$/, '')}.
            </p>

            <div className="clients-hero__rating-badge" role="region" aria-label="Client rating summary">
              <div className="clients-hero__rating-stars" aria-hidden="true">★★★★★</div>
              <div className="clients-hero__rating-val">4.9 / 5 Overall Client Rating</div>
              <span className="clients-hero__rating-dot" aria-hidden="true">•</span>
              <div className="clients-hero__rating-sub">50+ Websites Delivered Across Telangana, AP & Pan-India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Metrics ──────────────────────────────────────────────── */}
      <section className="clients-stats-section">
        <div className="container">
          <div className="clients-stats-grid">
            {clientStats.map(stat => (
              <div key={stat.label} className="clients-stat-card">
                <span className="clients-stat-card__icon" aria-hidden="true">{stat.icon}</span>
                <div className="clients-stat-card__content">
                  <div className="clients-stat-card__val">{stat.value}</div>
                  <div className="clients-stat-card__lbl">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted Brands Strip ───────────────────────────────────────── */}
      <section className="clients-brands-section">
        <div className="container">
          <div className="clients-brands-header">
            <span>TRUSTED BY GROWING BUSINESSES & ORGANIZATIONS</span>
          </div>
          <div className="clients-brands-list">
            {clientLogos.map(logo => (
              <div key={logo.name} className="clients-brand-chip">
                <span className="clients-brand-chip__dot" aria-hidden="true" />
                <strong className="clients-brand-chip__name">{logo.name}</strong>
                <span className="clients-brand-chip__meta">{logo.location} • {logo.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews Catalogue ─────────────────────────────────────────── */}
      <section className="section clients-reviews-section">
        <div className="container">
          {/* Category Filters */}
          <div className="clients-filter-bar" role="tablist" aria-label="Filter reviews by industry">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`clients-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span aria-hidden="true">{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.id === 'All' ? (
                  <span className="clients-filter-count">({testimonials.length})</span>
                ) : (
                  <span className="clients-filter-count">
                    ({testimonials.filter(t => t.industryId === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="clients-grid">
            {filteredTestimonials.map(t => (
              <article key={t.id} className="c-card" style={{ '--card-color': t.color }}>
                <div className="c-card__header">
                  <div className="c-card__tags">
                    <span
                      className="c-card__ind-tag"
                      style={{
                        color: t.color,
                        borderColor: `${t.color}40`,
                        background: `${t.color}15`,
                      }}
                    >
                      {t.industry}
                    </span>
                    <span className="c-card__metric">
                      ✨ {t.metric}
                    </span>
                  </div>
                  <div className="c-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                    {'★'.repeat(t.rating)}
                  </div>
                </div>

                <blockquote className="c-card__quote">
                  "{t.feedback}"
                </blockquote>

                <div className="c-card__footer">
                  <div
                    className="c-card__avatar"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, color-mix(in srgb, ${t.color} 50%, black))`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="c-card__author-info">
                    <div className="c-card__author-line">
                      <strong className="c-card__author-name">{t.name}</strong>
                      <span className="c-card__verified" title="Verified Website Client">✓ Verified Client</span>
                    </div>
                    <div className="c-card__role">{t.role}, {t.company}</div>
                    <div className="c-card__meta">
                      <span>📍 {t.location}</span>
                      <span className="c-card__sep">•</span>
                      <span className="c-card__tpl">📐 {t.templateUsed}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="clients-cta-card">
            <div className="clients-cta-card__left">
              <span className="clients-cta-card__tag">Ready to Launch?</span>
              <h2 className="clients-cta-card__title">Ready to launch your business website?</h2>
              <p className="clients-cta-card__sub">
                Explore our live interactive templates across 9+ industries, or get in touch for custom requirements. Packages start at ₹4,999 with 100% code ownership.
              </p>
            </div>
            <div className="clients-cta-card__right">
              <button className="btn btn-outline" onClick={() => navigate('/templates')}>
                Browse Live Demos →
              </button>
              <button className="btn btn-primary" onClick={() => navigate('/pricing')}>
                Starting at ₹4,999 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logo Scrolling Marquee (Bottom of Client Screen) ─────── */}
      <section className="clients-bottom-scroll-section" aria-label="Client logos scrolling">
        <div className="container">
          <div className="clients-bottom-scroll-header">
            <span className="clients-bottom-scroll-tag">
              <span className="clients-bottom-scroll-dot" aria-hidden="true" />
              Trusted Partnerships
            </span>
            <h3 className="clients-bottom-scroll-title">
              Growing Brands & Businesses Powered by DeccanIDentity
            </h3>
          </div>
        </div>

        <div className="clients-marquee-wrap">
          <div className="clients-marquee-track">
            {clientLogos.concat(clientLogos).map((item, index) => (
              <div key={`${item.name}-${index}`} className="clients-marquee-card">
                <span className="clients-marquee-card__icon" aria-hidden="true">{item.icon}</span>
                <div className="clients-marquee-card__details">
                  <strong className="clients-marquee-card__name">{item.name}</strong>
                  <span className="clients-marquee-card__meta">{item.location} • {item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
