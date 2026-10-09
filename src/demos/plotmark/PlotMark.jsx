import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import './PlotMark.css';

// ─── Plot data ────────────────────────────────────────────────────────────────
const PLOTS = [
  { id: 'P101', label: '101', x: 60,  y: 80,  w: 80, h: 60, area: 150, price: 35, status: 'available', facing: 'East', road: '30 Ft', corner: false },
  { id: 'P102', label: '102', x: 150, y: 80,  w: 80, h: 60, area: 150, price: 35, status: 'booked',    facing: 'East', road: '30 Ft', corner: false },
  { id: 'P103', label: '103', x: 240, y: 80,  w: 80, h: 60, area: 150, price: 37, status: 'available', facing: 'East', road: '30 Ft', corner: false },
  { id: 'P104', label: '104', x: 330, y: 80,  w: 90, h: 60, area: 200, price: 46, status: 'sold',      facing: 'East', road: '30 Ft', corner: true  },
  { id: 'P105', label: '105', x: 430, y: 80,  w: 80, h: 60, area: 200, price: 48, status: 'sold',      facing: 'East', road: '30 Ft', corner: false },
  { id: 'P106', label: '106', x: 60,  y: 180, w: 80, h: 60, area: 150, price: 35, status: 'available', facing: 'West', road: '40 Ft', corner: false },
  { id: 'P107', label: '107', x: 150, y: 180, w: 80, h: 60, area: 175, price: 40, status: 'available', facing: 'West', road: '40 Ft', corner: false },
  { id: 'P108', label: '108', x: 240, y: 180, w: 80, h: 60, area: 150, price: 35, status: 'booked',    facing: 'West', road: '40 Ft', corner: false },
  { id: 'P109', label: '109', x: 330, y: 180, w: 80, h: 60, area: 150, price: 36, status: 'available', facing: 'West', road: '40 Ft', corner: false },
  { id: 'P110', label: '110', x: 430, y: 180, w: 80, h: 60, area: 200, price: 46, status: 'sold',      facing: 'West', road: '40 Ft', corner: true  },
  { id: 'P111', label: '111', x: 60,  y: 280, w: 80, h: 60, area: 175, price: 40, status: 'available', facing: 'North', road: '30 Ft', corner: false },
  { id: 'P112', label: '112', x: 150, y: 280, w: 80, h: 60, area: 150, price: 35, status: 'available', facing: 'North', road: '30 Ft', corner: false },
  { id: 'P113', label: '113', x: 240, y: 280, w: 90, h: 60, area: 200, price: 48, status: 'booked',    facing: 'North', road: '30 Ft', corner: false },
  { id: 'P114', label: '114', x: 340, y: 280, w: 80, h: 60, area: 150, price: 35, status: 'available', facing: 'North', road: '30 Ft', corner: false },
  { id: 'P115', label: '115', x: 430, y: 280, w: 80, h: 60, area: 175, price: 42, status: 'available', facing: 'North', road: '30 Ft', corner: true  },
];

const STATUS_COLORS = { available: '#16a34a', booked: '#ca8a04', sold: '#dc2626' };

const PAGES = [
  { id: 'home',      label: 'Home'      },
  { id: 'about',     label: 'About'     },
  { id: 'layout',    label: 'Layout Map' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'location',  label: 'Location'  },
  { id: 'gallery',   label: 'Gallery'   },
  { id: 'contact',   label: 'Contact'   },
];

// ─── Demo Nav ─────────────────────────────────────────────────────────────────
function DemoNav({ activePage, setActivePage }) {
  return (
    <nav className="pm-nav" aria-label="PlotMark navigation">
      <div className="pm-nav__logo">PlotMark</div>
      <ul className="pm-nav__links">
        {PAGES.map(p => (
          <li key={p.id}>
            <button
              className={activePage === p.id ? 'active' : ''}
              onClick={() => setActivePage(p.id)}
              aria-current={activePage === p.id ? 'page' : undefined}
            >
              {p.label}
            </button>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href="#contact" onClick={() => setActivePage('contact')} className="btn btn-primary btn-sm">Site Visit</a>
      </div>
    </nav>
  );
}

// ─── Plot Modal ───────────────────────────────────────────────────────────────
function PlotModal({ plot, onClose, onEnquire }) {
  if (!plot) return null;
  const statusLabel = { available: 'Available', booked: 'Booked', sold: 'Sold' }[plot.status];

  return (
    <div className="plot-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="plot-modal-title">
      <div className="plot-modal" onClick={e => e.stopPropagation()}>
        <button className="plot-modal__close" onClick={onClose} aria-label="Close">×</button>
        <div className="plot-modal__header">
          <h3 id="plot-modal-title">Plot {plot.label}</h3>
          <span className="plot-modal__status" style={{ background: `${STATUS_COLORS[plot.status]}22`, color: STATUS_COLORS[plot.status], border: `1px solid ${STATUS_COLORS[plot.status]}44` }}>
            {statusLabel}
          </span>
        </div>
        <div className="plot-modal__details">
          <div className="plot-modal__detail"><span>Area</span><strong>{plot.area} Sq.Yds</strong></div>
          <div className="plot-modal__detail"><span>Price</span><strong>₹{plot.price} Lakhs*</strong></div>
          <div className="plot-modal__detail"><span>Facing</span><strong>{plot.facing}</strong></div>
          <div className="plot-modal__detail"><span>Road Width</span><strong>{plot.road}</strong></div>
          {plot.corner && <div className="plot-modal__detail"><span>Type</span><strong>Corner Plot ⭐</strong></div>}
        </div>
        <p className="plot-modal__note">* Price indicative. Final price may vary based on location and negotiation.</p>
        <div className="plot-modal__actions">
          {plot.status === 'available' ? (
            <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={onEnquire}>
              💬 Enquire Now
            </button>
          ) : (
            <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', opacity: 0.6 }} disabled>
              {plot.status === 'booked' ? 'Booked' : 'Sold'}
            </button>
          )}
          <button className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }} onClick={onClose}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Brochure Modal ───────────────────────────────────────────────────────────
function BrochureModal({ onClose }) {
  return (
    <div className="plot-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="brochure-title">
      <div className="plot-modal" onClick={e => e.stopPropagation()}>
        <button className="plot-modal__close" onClick={onClose} aria-label="Close">×</button>
        <h3 id="brochure-title" style={{ marginBottom: 'var(--space-4)' }}>Download Brochure</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
          Enter your details and we'll send the brochure to your WhatsApp instantly.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <input className="input" placeholder="Your Name" aria-label="Name" />
          <input className="input" placeholder="WhatsApp Number" type="tel" aria-label="WhatsApp number" />
          <button className="btn btn-whatsapp" style={{ justifyContent: 'center' }} onClick={onClose}>
            💬 Send to WhatsApp (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────
function HomePage({ setActivePage }) {
  const [showBrochure, setShowBrochure] = useState(false);

  return (
    <div>
      {showBrochure && <BrochureModal onClose={() => setShowBrochure(false)} />}
      {/* Hero */}
      <section className="pm-hero">
        <div className="pm-hero__overlay" />
        <div className="pm-hero__content container">
          <div className="badge badge-gold pm-hero__badge">🏗️ Premium Plotted Development</div>
          <h1 className="pm-hero__title">Find Your Perfect Plot<br /><span className="gradient-text">in PlotMark Township</span></h1>
          <p className="pm-hero__sub">150–250 Sq.Yd plots starting ₹35 Lakhs. HMDA approved. 24/7 security. Close to ORR.</p>
          <div className="pm-hero__actions">
            <button className="btn btn-primary btn-lg" onClick={() => setActivePage('layout')}>View Plot Map</button>
            <button className="btn btn-outline btn-lg" onClick={() => setShowBrochure(true)}>Download Brochure</button>
          </div>
          <div className="pm-hero__stats">
            <div><strong>240</strong><span>Total Plots</span></div>
            <div><strong>82</strong><span>Available</span></div>
            <div><strong>30+</strong><span>Families</span></div>
            <div><strong>HMDA</strong><span>Approved</span></div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pm-section container">
        <h2 className="pm-section__title">Why PlotMark</h2>
        <div className="pm-grid-3">
          {[
            { icon: '📋', title: 'HMDA Approved', desc: 'Clear title and all government approvals in place.' },
            { icon: '🛡️', title: '24/7 Security', desc: 'Gated township with round-the-clock security.' },
            { icon: '🛣️', title: 'Wide Roads', desc: '30 Ft & 40 Ft BT roads throughout the layout.' },
            { icon: '💧', title: 'UGD & Water', desc: 'Underground drainage and water supply.' },
            { icon: '🌳', title: 'Landscaping', desc: 'Dedicated parks and green spaces.' },
            { icon: '🏪', title: 'Commercial Zone', desc: 'Planned commercial area for daily needs.' },
          ].map(h => (
            <div key={h.title} className="pm-highlight-card">
              <div className="pm-highlight-card__icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function LayoutPage() {
  const [selected, setSelected] = useState(null);

  const counts = {
    available: PLOTS.filter(p => p.status === 'available').length,
    booked: PLOTS.filter(p => p.status === 'booked').length,
    sold: PLOTS.filter(p => p.status === 'sold').length,
  };

  function handleEnquire() {
    setSelected(null);
    window.open(`https://wa.me/${siteConfig.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(`Hi! I'm interested in Plot ${selected?.label} (${selected?.area} Sq.Yds, ₹${selected?.price} Lakhs) in PlotMark. Please share more details.`)}`, '_blank');
  }

  return (
    <div>
      {selected && <PlotModal plot={selected} onClose={() => setSelected(null)} onEnquire={handleEnquire} />}

      <section className="pm-section container">
        <h2 className="pm-section__title">Plot Layout Map</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>Click any plot to see details. Availability updated in real-time.</p>

        {/* Legend */}
        <div className="plot-legend">
          <div className="plot-legend__item"><span style={{ background: '#16a34a' }} /><span>Available ({counts.available})</span></div>
          <div className="plot-legend__item"><span style={{ background: '#ca8a04' }} /><span>Booked ({counts.booked})</span></div>
          <div className="plot-legend__item"><span style={{ background: '#dc2626' }} /><span>Sold ({counts.sold})</span></div>
        </div>

        {/* SVG Map */}
        <div className="plot-map-wrap">
          <svg className="plot-map" viewBox="0 0 560 380" aria-label="Interactive plot layout map">
            {/* Roads */}
            <rect x="0" y="150" width="560" height="20" fill="rgba(200,134,10,0.15)" rx="2" />
            <text x="280" y="163" className="plot-map-road-text" fill="rgba(200,134,10,0.7)" fontSize="9" textAnchor="middle" fontFamily="Inter">40 Ft Main Road</text>

            <rect x="20" y="0" width="20" height="380" fill="rgba(200,134,10,0.1)" rx="2" />
            <rect x="520" y="0" width="20" height="380" fill="rgba(200,134,10,0.1)" rx="2" />

            {/* Central Park */}
            <rect x="210" y="14" width="140" height="50" fill="rgba(22,163,74,0.12)" stroke="rgba(22,163,74,0.35)" strokeWidth="1" rx="6" />
            <text x="280" y="44" className="plot-map-park-text" fill="rgba(22,163,74,0.85)" fontSize="11" textAnchor="middle" fontWeight="600" fontFamily="Inter">🌳 Central Community Park</text>

            {/* Plots */}
            {PLOTS.map(p => (
              <g key={p.id} className="plot-cell" onClick={() => setSelected(p)} role="button" aria-label={`Plot ${p.label} – ${p.status}`} tabIndex={0} onKeyDown={e => e.key === 'Enter' && setSelected(p)}>
                <rect
                  x={p.x} y={p.y} width={p.w} height={p.h}
                  fill={`${STATUS_COLORS[p.status]}22`}
                  stroke={STATUS_COLORS[p.status]}
                  strokeWidth={selected?.id === p.id ? 2.5 : 1.5}
                  rx="4"
                  opacity={selected && selected.id !== p.id ? 0.6 : 1}
                />
                <text x={p.x + p.w / 2} y={p.y + p.h / 2 - 6} fill={STATUS_COLORS[p.status]} fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="Inter">
                  {p.label}
                </text>
                <text className="plot-cell-area" x={p.x + p.w / 2} y={p.y + p.h / 2 + 8} fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle" fontFamily="Inter">
                  {p.area} Sq.Yd
                </text>
                {p.corner && (
                  <text x={p.x + p.w - 5} y={p.y + 12} fill="#f59e0b" fontSize="10" textAnchor="end">⭐</text>
                )}
              </g>
            ))}

            {/* North arrow */}
            <g transform="translate(530,30)" className="plot-north-arrow">
              <circle r="14" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text x="0" y="5" fill="rgba(200,134,10,0.9)" fontSize="12" textAnchor="middle" fontWeight="700" fontFamily="Inter">N</text>
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
}

function AmenitiesPage() {
  return (
    <div className="pm-section container">
      <h2 className="pm-section__title">Amenities</h2>
      <div className="pm-grid-3">
        {[
          '🚪 Gated Entry', '🛡️ 24/7 Security', '🛣️ BT Roads', '💧 Water Supply',
          '🔌 Underground EB', '📡 Optical Fibre', '🌳 Parks', '⛪ Temple',
          '🏪 Commercial Area', '🚿 UGD', '💡 Street Lights', '🏊 Club (Planned)',
        ].map(a => (
          <div key={a} className="pm-amenity">{a}</div>
        ))}
      </div>
    </div>
  );
}

function LocationPage() {
  return (
    <div className="pm-section container">
      <h2 className="pm-section__title">Location</h2>
      <div className="pm-grid-2">
        <div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
            Strategically located near the Outer Ring Road with excellent connectivity to Hyderabad city centre, airport, and major IT hubs.
          </p>
          <ul className="pm-location-list">
            {[
              ['ORR Junction', '2 km'],
              ['Hyderabad Airport', '22 km'],
              ['HITEC City', '18 km'],
              ['Gachibowli', '20 km'],
              ['School & Colleges', '1.5 km'],
              ['Hospital', '3 km'],
            ].map(([place, dist]) => (
              <li key={place}><span className="pm-location-place">{place}</span><span className="pm-location-dist">{dist}</span></li>
            ))}
          </ul>
        </div>
        <div className="pm-map-placeholder" aria-label="Location map placeholder">
          <div>📍</div>
          <div>PlotMark Township</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>Interactive map here</div>
        </div>
      </div>
    </div>
  );
}

function GalleryPage() {
  const photos = [
    { label: 'Site Overview', color: '#1a1000' },
    { label: 'Road Layout', color: '#0d1a00' },
    { label: 'Park Area', color: '#001a0d' },
    { label: 'Entry Gate', color: '#1a0d00' },
    { label: 'Aerial View', color: '#000d1a' },
    { label: 'Amenities', color: '#100d1a' },
  ];
  return (
    <div className="pm-section container">
      <h2 className="pm-section__title">Gallery</h2>
      <div className="pm-gallery">
        {photos.map(p => (
          <div key={p.label} className="pm-gallery__item" style={{ background: p.color }}>
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPageDemo() {
  const [done, setDone] = useState(false);

  return (
    <div className="pm-section container" style={{ maxWidth: 560 }}>
      <h2 className="pm-section__title">Book a Site Visit</h2>
      {done ? (
        <div className="contact-success">
          <div className="contact-success__icon">✅</div>
          <h3>Request Sent!</h3>
          <p>We'll call you back within 2 hours to confirm your site visit.</p>
          <button className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }} onClick={() => setDone(false)}>Submit Another</button>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <input className="input" placeholder="Your Name" required aria-label="Name" />
          <input className="input" placeholder="Mobile Number" type="tel" required aria-label="Mobile" />
          <input className="input" placeholder="Preferred Date" type="date" aria-label="Preferred date" />
          <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>Book Site Visit</button>
        </form>
      )}
    </div>
  );
}

// ─── Main PlotMark Demo ────────────────────────────────────────────────────────
export default function PlotMarkDemo() {
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('page');
      if (p) return p;
    }
    return 'home';
  });

  const PAGE_COMPONENTS = {
    home: <HomePage setActivePage={setActivePage} />,
    about: (
      <div className="pm-section container">
        <h2 className="pm-section__title">About PlotMark</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 640, lineHeight: 1.8 }}>PlotMark is a premium plotted development by Deccan Properties — offering clear title HMDA-approved plots with world-class infrastructure and a peaceful living environment. With 15+ years of experience and 5,000+ happy families, we are Hyderabad's most trusted layout developer.</p>
      </div>
    ),
    layout: <LayoutPage />,
    amenities: <AmenitiesPage />,
    location: <LocationPage />,
    gallery: <GalleryPage />,
    contact: <ContactPageDemo />,
  };

  return (
    <div className="pm-demo">
      <DemoBar templateSlug="plotmark" templateName="PlotMark" label="📍 PlotMark — Plotted Development Demo" />
      <DemoNav activePage={activePage} setActivePage={setActivePage} />
      <main className="pm-main">
        {PAGE_COMPONENTS[activePage]}
      </main>
      <footer className="pm-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div>
            <div className="pm-nav__logo" style={{ marginBottom: 4 }}>PlotMark</div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Premium Plotted Development · Hyderabad</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            This is a <strong>demo template</strong> by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>. All data is for illustration only.
          </div>
        </div>
      </footer>
    </div>
  );
}
