import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import '../plotmark/PlotMark.css';

const MENU_ITEMS = [
  { id: 'm1', cat: 'Starters', name: 'Truffle Edamame Dimsums', price: '₹625', desc: 'Steamed parcel with wild mushrooms, shaved black winter truffles & chilli drizzle.', veg: true },
  { id: 'm2', cat: 'Starters', name: 'Charred Malai Tiger Prawns', price: '₹895', desc: 'Jumbo bay prawns marinated in saffron clotted cream and crushed Tellicherry pepper.', veg: false },
  { id: 'm3', cat: 'Mains', name: 'Deccan Royal Dum Biryani', price: '₹750', desc: 'Fragrant aged basmati sealed in clay pot with spring lamb and saffron broth.', veg: false },
  { id: 'm4', cat: 'Mains', name: 'Artisanal Burrata Ravioli', price: '₹695', desc: 'Hand-rolled pasta stuffed with artisanal Apulian burrata in heirloom tomato emulsion.', veg: true },
  { id: 'm5', cat: 'Desserts', name: 'Smoked Belgian Dark Fondant', price: '₹495', desc: 'Single-origin 70% Callebaut chocolate lava with Madagascar vanilla bean gelato.', veg: true },
  { id: 'm6', cat: 'Desserts', name: 'Rose Petal Kulfi Falooda', price: '₹425', desc: 'House-churned organic pistachio kulfi with wild rose reduction and chia pearls.', veg: true },
];

export default function DineMarkDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuFilter, setMenuFilter] = useState('All');
  const [reserveModal, setReserveModal] = useState(false);
  const [reserveDone, setReserveDone] = useState(false);
  const { theme } = useTheme();

  const filteredMenu = menuFilter === 'All' ? MENU_ITEMS : MENU_ITEMS.filter(m => m.cat === menuFilter);

  return (
    <div className="pm-demo" style={{ background: theme === 'light' ? '#fff7ed' : '#140804', color: theme === 'light' ? '#0f172a' : '#ffedd5' }}>
      <DemoBar templateSlug="dinemark" templateName="DineMark" label="🍽️ DineMark — Fine Dining & Gourmet Demo" />

      {/* Nav */}
      <nav className="pm-nav" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(20, 8, 4, 0.95)', borderBottom: `1px solid ${theme === 'light' ? 'rgba(239,68,68,0.15)' : 'rgba(239,68,68,0.25)'}` }}>
        <div className="pm-nav__logo" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'serif', letterSpacing: '0.05em' }}>
          <span>🍷</span> DINEMARK RESTAURANT
        </div>
        <ul className="pm-nav__links">
          {['home', 'menu', 'experiences', 'reservations', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activeTab === p ? 'active' : ''}
                onClick={() => setActiveTab(p)}
                style={activeTab === p ? { color: '#ef4444', background: 'rgba(239,68,68,0.1)' } : {}}
              >
                {p.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-sm" style={{ background: '#ef4444', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 600 }} onClick={() => setReserveModal(true)}>
            Reserve Table
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {activeTab === 'home' && (
          <div>
            {/* Hero */}
            <section style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', background: theme === 'light' ? 'linear-gradient(135deg, #ffedd5 0%, #fee2e2 50%, #ffffff 100%)' : 'radial-gradient(ellipse at 70% 30%, rgba(239,68,68,0.2), transparent 70%), linear-gradient(180deg, #140804 0%, #080302 100%)', position: 'relative' }}>
              <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
                <div className="badge" style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)', marginBottom: 'var(--space-4)', display: 'inline-flex', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 700 }}>
                  🌟 MICHELIN RECOMMENDED CHEF DE CUISINE
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-4)', color: theme === 'light' ? '#0f172a' : '#fff' }}>
                  Artisanal Gastronomy.<br />
                  <span style={{ color: '#ef4444' }}>Crafted with Passion.</span>
                </h1>
                <p style={{ fontSize: '1.15rem', color: theme === 'light' ? '#475569' : '#fed7aa', maxWidth: 540, marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                  An immersive fine-dining experience celebrating ancestral Indian spices harmonized with contemporary global culinary mastery.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#ef4444', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 700 }} onClick={() => setReserveModal(true)}>
                    Reserve Your Table Online
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActiveTab('menu')}>
                    Explore The Tasting Menu
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* MENU VIEW */}
        {activeTab === 'menu' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Curated A La Carte & Tasting Menu</h2>
            <div style={{ display: 'flex', gap: 8, marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
              {['All', 'Starters', 'Mains', 'Desserts'].map(cat => (
                <button
                  key={cat}
                  className={`chip ${menuFilter === cat ? 'active' : ''}`}
                  onClick={() => setMenuFilter(cat)}
                  style={menuFilter === cat ? { background: '#ef4444', borderColor: '#ef4444', color: '#fff' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="pm-grid-2">
              {filteredMenu.map(m => (
                <div key={m.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <h3 style={{ fontSize: '1.2rem', color: theme === 'light' ? '#0f172a' : '#fff' }}>
                      {m.name} {m.veg ? '🟢' : '🔴'}
                    </h3>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ef4444' }}>{m.price}</div>
                  </div>
                  <p style={{ color: theme === 'light' ? '#64748b' : '#fed7aa', fontSize: '0.9rem' }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXPERIENCES VIEW */}
        {activeTab === 'experiences' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Dining Encounters & Private Banquets</h2>
            <div className="pm-grid-3">
              {[
                { title: "Chef's Table (8 Courses)", icon: '👨‍🍳', desc: 'Intimate ringside seating at the live hearth with personalized wine pairing.' },
                { title: 'The Glasshouse Terrace', icon: '🌿', desc: 'Rooftop al fresco dining overlooking city lights, illuminated by candle embers.' },
                { title: 'Royal Private Dining Room', icon: '👑', desc: 'Exclusive 20-seat imperial chamber for celebratory anniversaries and corporate banquets.' },
              ].map(exp => (
                <div key={exp.title} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>{exp.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 8 }}>{exp.title}</h3>
                  <p style={{ color: theme === 'light' ? '#64748b' : '#fed7aa' }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RESERVATIONS VIEW */}
        {activeTab === 'reservations' && (
          <div className="pm-section container" style={{ maxWidth: 560 }}>
            <h2 className="pm-section__title">Instant Table Booking</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p style={{ marginBottom: 16 }}>Reserve directly to enjoy complimentary artisanal amuse-bouche.</p>
              <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', background: '#ef4444', borderColor: '#ef4444' }} onClick={() => setReserveModal(true)}>
                Open Reservation Form
              </button>
            </div>
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 600 }}>
            <h2 className="pm-section__title">Location & Concierge Desk</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p>📍 <strong>Location:</strong> DineMark Promenade, Road No. 36, Jubilee Hills, Hyderabad</p>
              <p>📞 <strong>Table Concierge:</strong> {siteConfig.phone}</p>
              <p>🕒 <strong>Lunch:</strong> 12:00 PM – 3:30 PM | <strong>Dinner:</strong> 7:00 PM – 11:30 PM</p>
            </div>
          </div>
        )}
      </main>

      {/* Reservation Modal */}
      {reserveModal && (
        <div className="plot-modal-overlay" onClick={() => setReserveModal(false)}>
          <div className="plot-modal" onClick={e => e.stopPropagation()} style={{ background: theme === 'light' ? '#ffffff' : '#220e06', color: theme === 'light' ? '#0f172a' : '#fff' }}>
            <button className="plot-modal__close" onClick={() => setReserveModal(false)}>×</button>
            {reserveDone ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>🥂</div>
                <h3>Table Reserved!</h3>
                <p style={{ color: theme === 'light' ? '#64748b' : '#fed7aa' }}>Your reservation details have been confirmed. We look forward to hosting you.</p>
                <button className="btn btn-primary" style={{ marginTop: 16, background: '#ef4444' }} onClick={() => { setReserveDone(false); setReserveModal(false); }}>Done</button>
              </div>
            ) : (
              <div>
                <h3>Reserve A Table</h3>
                <p style={{ fontSize: '0.85rem', color: theme === 'light' ? '#64748b' : '#fed7aa', marginBottom: 16 }}>Select your preferred evening and guest party size.</p>
                <form onSubmit={e => { e.preventDefault(); setReserveDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input className="input" placeholder="Guest Name" required />
                  <input className="input" placeholder="Mobile / WhatsApp" type="tel" required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <input className="input" type="date" required />
                    <select className="input">
                      <option>2 Guests (Couple)</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests (Banquet)</option>
                    </select>
                  </div>
                  <select className="input">
                    <option>Dinner Slot (7:30 PM)</option>
                    <option>Dinner Slot (8:30 PM)</option>
                    <option>Dinner Slot (9:30 PM)</option>
                    <option>Lunch Slot (1:00 PM)</option>
                  </select>
                  <button type="submit" className="btn btn-primary" style={{ background: '#ef4444', borderColor: '#ef4444', justifyContent: 'center' }}>
                    Confirm Reservation
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pm-footer" style={{ background: theme === 'light' ? '#ffffff' : '#140804', borderTopColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#ef4444' }}>DineMark Restaurant</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fine Dining & Luxury Hospitality</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Demo Template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
