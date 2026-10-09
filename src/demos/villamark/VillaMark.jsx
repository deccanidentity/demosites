import { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoBar from '../../components/DemoBar.jsx';
import '../plotmark/PlotMark.css';
import './VillaMark.css';

const VILLA_TYPES = [
  { id: '2bhk', label: '2 BHK Villa', area: '1800 Sq.Ft', price: '₹85 Lakhs*', beds: 2, baths: 2, units: 12, available: 5 },
  { id: '3bhk', label: '3 BHK Villa', area: '2400 Sq.Ft', price: '₹1.15 Cr*', beds: 3, baths: 3, units: 20, available: 8 },
  { id: '4bhk', label: '4 BHK Villa', area: '3200 Sq.Ft', price: '₹1.65 Cr*', beds: 4, baths: 4, units: 8,  available: 3 },
];

const PAGES = ['Home', 'About', 'Villa Types', 'Floor Plans', 'Amenities', 'Gallery', 'Location', 'Contact'];

export default function VillaMarkDemo() {
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('page');
      if (p) return p;
    }
    return 'Home';
  });
  const [activeType, setActiveType] = useState('3bhk');
  const [activePlan, setActivePlan] = useState('ground');
  const [enquired, setEnquired] = useState(false);

  const villa = VILLA_TYPES.find(v => v.id === activeType);

  return (
    <div className="pm-demo">
      <DemoBar templateSlug="villamark" templateName="VillaMark" label="🏡 VillaMark — Luxury Villa Live Demo" />
      {/* Nav */}
      <nav className="pm-nav" aria-label="VillaMark navigation">
        <div className="pm-nav__logo vm-logo">VillaMark</div>
        <ul className="pm-nav__links">
          {PAGES.map(p => (
            <li key={p}>
              <button className={activePage === p ? 'active' : ''} onClick={() => setActivePage(p)}>{p}</button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="btn btn-primary btn-sm" onClick={() => setActivePage('Contact')}>Schedule Visit</button>
        </div>
      </nav>

      <main className="pm-main">
        {activePage === 'Home' && (
          <div>
            <section className="vm-hero">
              <div className="vm-hero__overlay" />
              <div className="container vm-hero__content">
                <div className="badge badge-gold">🏡 Luxury Villas · Gated Community</div>
                <h1 className="vm-hero__title">Where Every Home<br /><span className="gradient-text">Tells a Story</span></h1>
                <p className="vm-hero__sub">Premium 2, 3 & 4 BHK villas in a lush gated community. Starting ₹85 Lakhs.</p>
                <div className="pm-hero__actions">
                  <button className="btn btn-primary btn-lg" onClick={() => setActivePage('Villa Types')}>Explore Villas</button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActivePage('Floor Plans')}>View Floor Plans</button>
                </div>
              </div>
            </section>
            <section className="pm-section container">
              <h2 className="pm-section__title">Choose Your Villa</h2>
              <div className="vm-type-grid">
                {VILLA_TYPES.map(v => (
                  <div key={v.id} className={`vm-type-card ${activeType === v.id ? 'vm-type-card--active' : ''}`} onClick={() => { setActiveType(v.id); setActivePage('Villa Types'); }}>
                    <div className="vm-type-card__icon">🏡</div>
                    <div className="vm-type-card__label">{v.label}</div>
                    <div className="vm-type-card__area">{v.area}</div>
                    <div className="vm-type-card__price">{v.price}</div>
                    <div className="vm-type-card__avail">{v.available} Available</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activePage === 'Villa Types' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Villa Types</h2>
            <div className="vm-tab-bar">
              {VILLA_TYPES.map(v => (
                <button key={v.id} className={`chip ${activeType === v.id ? 'active' : ''}`} onClick={() => setActiveType(v.id)}>{v.label}</button>
              ))}
            </div>
            <div className="vm-detail">
              <div className="vm-detail__visual" aria-label={`${villa.label} illustration`}>
                <div className="vm-detail__house">🏡</div>
                <div>{villa.label}</div>
              </div>
              <div className="vm-detail__info">
                <h3>{villa.label}</h3>
                <div className="vm-detail__specs">
                  <div className="td-spec"><span>Area</span><strong>{villa.area}</strong></div>
                  <div className="td-spec"><span>Bedrooms</span><strong>{villa.beds}</strong></div>
                  <div className="td-spec"><span>Bathrooms</span><strong>{villa.baths}</strong></div>
                  <div className="td-spec"><span>Total Units</span><strong>{villa.units}</strong></div>
                  <div className="td-spec"><span>Available</span><strong>{villa.available}</strong></div>
                  <div className="td-spec"><span>Price</span><strong style={{ color: 'var(--brand-gold)' }}>{villa.price}</strong></div>
                </div>
                <div className="vm-detail__actions">
                  <button className="btn btn-primary" onClick={() => setActivePage('Floor Plans')}>View Floor Plans</button>
                  <button className="btn btn-outline" onClick={() => setActivePage('Contact')}>Schedule Visit</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activePage === 'Floor Plans' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Floor Plans — {villa.label}</h2>
            <div className="vm-tab-bar" style={{ marginBottom: 'var(--space-5)' }}>
              {VILLA_TYPES.map(v => (
                <button key={v.id} className={`chip ${activeType === v.id ? 'active' : ''}`} onClick={() => setActiveType(v.id)}>{v.label}</button>
              ))}
            </div>
            <div className="vm-plan-tabs">
              {['ground', 'first', 'terrace'].map(fl => (
                <button key={fl} className={`chip ${activePlan === fl ? 'active' : ''}`} onClick={() => setActivePlan(fl)}>
                  {fl === 'ground' ? 'Ground Floor' : fl === 'first' ? 'First Floor' : 'Terrace'}
                </button>
              ))}
            </div>
            <div className="vm-plan-visual">
              <div className="vm-plan-label">{villa.label} — {activePlan === 'ground' ? 'Ground Floor Plan' : activePlan === 'first' ? 'First Floor Plan' : 'Terrace Plan'}</div>
              <div className="vm-plan-rooms">
                {activePlan === 'ground' && ['Living Room', 'Kitchen', 'Dining', 'Guest Bed', 'Garage'].map(r => <span key={r}>{r}</span>)}
                {activePlan === 'first' && ['Master Bed', 'Bed 2', villa.beds >= 3 ? 'Bed 3' : null, 'Family Lounge', 'Balcony'].filter(Boolean).map(r => <span key={r}>{r}</span>)}
                {activePlan === 'terrace' && ['Utility', 'Open Terrace', 'Water Tank', 'Solar Panels'].map(r => <span key={r}>{r}</span>)}
              </div>
            </div>
          </section>
        )}

        {activePage === 'Amenities' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">World-class Amenities</h2>
            <div className="pm-grid-3">
              {['🏊 Swimming Pool','🏋️ Gymnasium','🏸 Badminton Court','🌳 Landscaped Garden','🧒 Kids Play Area','⛪ Temple','🛡️ 24/7 Security','🚗 Covered Parking','🏪 Clubhouse'].map(a => (
                <div key={a} className="pm-amenity">{a}</div>
              ))}
            </div>
          </section>
        )}

        {activePage === 'Gallery' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Gallery</h2>
            <div className="pm-gallery">
              {['Villa Exterior','Living Room','Master Bedroom','Kitchen','Swimming Pool','Garden'].map((l, i) => (
                <div key={l} className="pm-gallery__item" style={{ background: ['#1a1000','#001a0d','#000d1a','#1a000d','#0d001a','#001a1a'][i] }}><span>{l}</span></div>
              ))}
            </div>
          </section>
        )}

        {activePage === 'Location' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Prime Location</h2>
            <div className="pm-grid-2">
              <ul className="pm-location-list">
                {[['City Centre','12 km'],['Airport','20 km'],['HITECH City','15 km'],['Metro Station','3 km'],['School','1 km'],['Mall','4 km']].map(([p,d]) => (
                  <li key={p}><span className="pm-location-place">{p}</span><span className="pm-location-dist">{d}</span></li>
                ))}
              </ul>
              <div className="pm-map-placeholder"><div>📍</div><div>VillaMark Gated Community</div></div>
            </div>
          </section>
        )}

        {activePage === 'About' && (
          <div className="pm-section container">
            <h2 className="pm-section__title">About VillaMark</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 640, lineHeight: 1.8 }}>VillaMark is a premium gated villa community crafted for those who believe luxury is a way of life. With meticulously designed villas, lush greenery, and world-class amenities, VillaMark offers you the perfect blend of comfort and grandeur.</p>
          </div>
        )}

        {activePage === 'Contact' && (
          <div className="pm-section container" style={{ maxWidth: 520 }}>
            <h2 className="pm-section__title">Schedule a Site Visit</h2>
            {enquired ? (
              <div className="contact-success">
                <div className="contact-success__icon">✅</div><h3>Visit Scheduled!</h3>
                <p>We'll confirm your visit time within 2 hours.</p>
                <button className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }} onClick={() => setEnquired(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setEnquired(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <input className="input" placeholder="Your Name" required aria-label="Name" />
                <input className="input" placeholder="Mobile Number" type="tel" required aria-label="Mobile" />
                <select className="input" aria-label="Villa type preference">
                  {VILLA_TYPES.map(v => <option key={v.id}>{v.label}</option>)}
                </select>
                <input className="input" type="date" aria-label="Preferred date" />
                <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>Schedule Visit</button>
              </form>
            )}
          </div>
        )}
      </main>

      <footer className="pm-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div><div className="vm-logo" style={{ marginBottom: 4, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#a78a5a' }}>VillaMark</div><div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Luxury Villas · Gated Community</div></div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>Demo template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link></div>
        </div>
      </footer>
    </div>
  );
}
