import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import '../plotmark/PlotMark.css';
import './FlatMark.css';

const TOWERS = [
  { id: 'A', name: 'Tower A', floors: 10, units: ['2BHK','3BHK'] },
  { id: 'B', name: 'Tower B', floors: 12, units: ['2BHK','3BHK','4BHK'] },
  { id: 'C', name: 'Tower C', floors: 8,  units: ['2BHK'] },
];

const STATUS = ['available','available','booked','available','sold','available','booked','available'];

function genFlats(tower, floor) {
  const count = tower.id === 'B' ? 4 : 3;
  return Array.from({ length: count }, (_, i) => ({
    id: `${tower.id}${floor}0${i + 1}`,
    label: `${tower.id}-${floor}0${i + 1}`,
    bhk: tower.units[i % tower.units.length],
    area: tower.units[i % tower.units.length] === '2BHK' ? '1100 Sq.Ft' : tower.units[i % tower.units.length] === '3BHK' ? '1550 Sq.Ft' : '2000 Sq.Ft',
    price: tower.units[i % tower.units.length] === '2BHK' ? '₹65 Lakhs' : tower.units[i % tower.units.length] === '3BHK' ? '₹92 Lakhs' : '₹1.25 Cr',
    status: STATUS[(floor + i) % STATUS.length],
  }));
}

const STATUS_COLOR = { available: '#16a34a', booked: '#ca8a04', sold: '#dc2626' };

export default function FlatMarkDemo() {
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('page');
      if (p) return p;
    }
    return 'home';
  });
  const [tower, setTower] = useState(TOWERS[0]);
  const [floor, setFloor] = useState(3);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [done, setDone] = useState(false);

  const flats = useMemo(() => genFlats(tower, floor), [tower, floor]);

  return (
    <div className="pm-demo">
      <DemoBar templateSlug="flatmark" templateName="FlatMark" label="🏢 FlatMark — Premium Apartment Demo" />
      <nav className="pm-nav" aria-label="FlatMark navigation">
        <div className="pm-nav__logo" style={{ color: '#2563EB' }}>FlatMark</div>
        <ul className="pm-nav__links">
          {['home','apartments','amenities','gallery','contact'].map(p => (
            <li key={p}><button className={activePage === p ? 'active' : ''} onClick={() => setActivePage(p)} style={activePage === p ? { color: '#2563EB', background: 'rgba(37,99,235,0.1)' } : {}}>{p.charAt(0).toUpperCase() + p.slice(1)}</button></li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="btn btn-sm" style={{ background: '#2563EB', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '7px 16px', fontWeight: 600 }} onClick={() => setActivePage('contact')}>Book Visit</button>
        </div>
      </nav>

      <main className="pm-main">
        {activePage === 'home' && (
          <div>
            <section className="fm-hero">
              <div className="container fm-hero__content">
                <div className="badge fm-badge">🏢 Premium Apartments · 3 Towers</div>
                <h1 className="fm-hero__title">
                  Elevated Living.<br /><span style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Above the Ordinary.</span>
                </h1>
                <p className="fm-hero__sub">2 & 3 BHK luxury apartments across 3 towers. Starting ₹65 Lakhs. RERA registered.</p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#2563EB', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '14px 28px', fontWeight: 700 }} onClick={() => setActivePage('apartments')}>View Availability</button>
                  <button className="btn btn-outline btn-lg">Download Brochure</button>
                </div>
              </div>
            </section>
            <section className="pm-section container">
              <h2 className="pm-section__title">Choose Your Tower</h2>
              <div className="pm-grid-3">
                {TOWERS.map(t => (
                  <div key={t.id} className="pm-highlight-card" style={{ cursor: 'pointer', borderColor: tower.id === t.id ? '#2563EB' : undefined }} onClick={() => { setTower(t); setActivePage('apartments'); }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>🏢</div>
                    <h3>{t.name}</h3>
                    <p>{t.floors} Floors · {t.units.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activePage === 'apartments' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Apartment Availability</h2>
            {/* Tower selector */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
              {TOWERS.map(t => (
                <button key={t.id} className={`chip ${tower.id === t.id ? 'active' : ''}`} onClick={() => { setTower(t); setFloor(3); }} style={tower.id === t.id ? { background: '#2563EB', borderColor: '#2563EB' } : {}}>{t.name}</button>
              ))}
            </div>
            {/* Floor selector */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: 'var(--space-2)' }}>Floor</div>
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                {Array.from({ length: tower.floors }, (_, i) => i + 1).map(f => (
                  <button key={f} className={`chip chip-sm ${floor === f ? 'active' : ''}`} onClick={() => setFloor(f)} style={floor === f ? { background: '#2563EB', borderColor: '#2563EB' } : {}}>{f}</button>
                ))}
              </div>
            </div>
            {/* Flat cards */}
            <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>{tower.name} · Floor {floor}</h3>
            <div className="pm-grid-3">
              {flats.map(flat => (
                <div key={flat.id} className="pm-highlight-card" style={{ cursor: 'pointer', borderColor: flat.status === 'available' ? STATUS_COLOR.available + '44' : flat.status === 'booked' ? STATUS_COLOR.booked + '44' : STATUS_COLOR.sold + '44' }} onClick={() => setSelectedFlat(flat)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{flat.label}</span>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: STATUS_COLOR[flat.status], background: STATUS_COLOR[flat.status] + '22', padding: '2px 8px', borderRadius: 'var(--radius-pill)' }}>{flat.status}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 4 }}>{flat.bhk} · {flat.area}</div>
                  <div style={{ fontWeight: 700, color: '#2563EB' }}>{flat.price}</div>
                </div>
              ))}
            </div>
            {selectedFlat && (
              <div className="plot-modal-overlay" onClick={() => setSelectedFlat(null)}>
                <div className="plot-modal" onClick={e => e.stopPropagation()}>
                  <button className="plot-modal__close" onClick={() => setSelectedFlat(null)}>×</button>
                  <div className="plot-modal__header">
                    <h3>Flat {selectedFlat.label}</h3>
                    <span className="plot-modal__status" style={{ color: STATUS_COLOR[selectedFlat.status], background: STATUS_COLOR[selectedFlat.status] + '22', border: `1px solid ${STATUS_COLOR[selectedFlat.status]}44` }}>{selectedFlat.status}</span>
                  </div>
                  <div className="plot-modal__details">
                    <div className="plot-modal__detail"><span>Configuration</span><strong>{selectedFlat.bhk}</strong></div>
                    <div className="plot-modal__detail"><span>Area</span><strong>{selectedFlat.area}</strong></div>
                    <div className="plot-modal__detail"><span>Floor</span><strong>{floor}</strong></div>
                    <div className="plot-modal__detail"><span>Price</span><strong>{selectedFlat.price}</strong></div>
                  </div>
                  <div className="plot-modal__actions">
                    {selectedFlat.status === 'available' ? (
                      <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(`Hi! I'm interested in Flat ${selectedFlat.label} (${selectedFlat.bhk}, ${selectedFlat.area}, ${selectedFlat.price}).`)}`} className="btn btn-whatsapp" style={{ flex: 1, justifyContent: 'center' }} target="_blank" rel="noreferrer">💬 Enquire</a>
                    ) : (
                      <button className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', opacity: 0.5 }} disabled>{selectedFlat.status === 'booked' ? 'Booked' : 'Sold'}</button>
                    )}
                    <button className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setSelectedFlat(null)}>Close</button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {activePage === 'amenities' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Amenities</h2>
            <div className="pm-grid-3">
              {['🏊 Rooftop Pool','🏋️ Gym','🧒 Kids Zone','🌳 Garden','🏸 Sport Court','⛪ Prayer Hall','🛡️ 24/7 Security','🚗 3-Level Parking','🏪 Supermarket'].map(a => <div key={a} className="pm-amenity">{a}</div>)}
            </div>
          </section>
        )}

        {activePage === 'gallery' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Gallery</h2>
            <div className="pm-gallery">
              {['Tower View','Lobby','Living Room','Kitchen','Rooftop Pool','Gym'].map((l,i) => <div key={l} className="pm-gallery__item" style={{ background: ['#00051a','#001040','#000d30','#00051a','#001040','#00051a'][i] }}><span>{l}</span></div>)}
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 520 }}>
            <h2 className="pm-section__title">Book a Site Visit</h2>
            {done ? (
              <div className="contact-success">
                <div className="contact-success__icon">✅</div><h3>Visit Confirmed!</h3>
                <p>Our team will contact you within 2 hours.</p>
                <button className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }} onClick={() => setDone(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <input className="input" placeholder="Your Name" required aria-label="Name" />
                <input className="input" placeholder="Mobile / WhatsApp" type="tel" required aria-label="Mobile" />
                <select className="input" aria-label="BHK preference"><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option></select>
                <input className="input" type="date" aria-label="Preferred date" />
                <button type="submit" className="btn btn-lg" style={{ background: '#2563EB', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '14px', fontWeight: 700, justifyContent: 'center' }}>Book Visit</button>
              </form>
            )}
          </div>
        )}
      </main>

      <footer className="pm-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#2563EB', marginBottom: 4 }}>FlatMark</div><div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Premium Apartments · 3 Towers</div></div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Demo by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link></div>
        </div>
      </footer>
    </div>
  );
}
