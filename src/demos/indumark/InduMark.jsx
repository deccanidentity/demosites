import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import '../plotmark/PlotMark.css';

const PRODUCTS = [
  { id: 'p1', name: 'High-Pressure Cryogenic Valves', grade: 'SS 316L / Monel', pressure: 'Up to 10,000 PSI', cert: 'API 6D / ISO 15848', desc: 'Zero-emission fugitive emissions compliance for LNG and petrochemical processing.' },
  { id: 'p2', name: 'Precision CNC Machined Shafts', grade: 'EN24 / 42CrMo4', pressure: 'Tolerance ± 0.005mm', cert: 'AS9100D Aerospace', desc: 'Turn-milled cylindrical components with dynamic induction hardening for aerospace turbines.' },
  { id: 'p3', name: 'Heavy Duty Industrial Gearboxes', grade: 'SG Iron Casting', pressure: 'Torque 50,000 Nm', cert: 'AGMA / CE Certified', desc: 'Helical & bevel multi-stage industrial power transmission units for cement and steel mills.' },
  { id: 'p4', name: 'Automated Hydraulic Power Packs', grade: 'Modular Manifold', pressure: '350 Bar Continuous', cert: 'ISO 4413 Compliant', desc: 'Custom proportional hydraulic power stations with PLC touch screen interface.' },
];

export default function InduMarkDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [rfqModal, setRfqModal] = useState(false);
  const [rfqDone, setRfqDone] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="pm-demo" style={{ background: theme === 'light' ? '#f8fafc' : '#0a0d14', color: theme === 'light' ? '#0f172a' : '#f1f5f9' }}>
      <DemoBar templateSlug="indumark" templateName="InduMark" label="🏭 InduMark — Heavy Engineering & B2B Demo" />

      {/* Nav */}
      <nav className="pm-nav" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(10, 13, 20, 0.95)', borderBottom: `1px solid ${theme === 'light' ? 'rgba(100,116,139,0.2)' : 'rgba(100,116,139,0.3)'}` }}>
        <div className="pm-nav__logo" style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800 }}>
          <span>⚙️</span> INDUMARK HEAVY ENGINEERING
        </div>
        <ul className="pm-nav__links">
          {['home', 'products', 'capabilities', 'certifications', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activeTab === p ? 'active' : ''}
                onClick={() => setActiveTab(p)}
                style={activeTab === p ? { color: '#38bdf8', background: 'rgba(56,189,248,0.1)' } : {}}
              >
                {p.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-sm" style={{ background: '#0284c7', color: '#fff', borderRadius: 4, fontWeight: 600 }} onClick={() => setRfqModal(true)}>
            Request RFQ
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {activeTab === 'home' && (
          <div>
            {/* Hero */}
            <section style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', background: theme === 'light' ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #ffffff 100%)' : 'radial-gradient(ellipse at 70% 30%, rgba(100,116,139,0.2), transparent 70%), linear-gradient(180deg, #0a0d14 0%, #030408 100%)', position: 'relative' }}>
              <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
                <div className="badge" style={{ background: 'rgba(100,116,139,0.2)', color: '#38bdf8', border: '1px solid rgba(100,116,139,0.4)', marginBottom: 'var(--space-4)', display: 'inline-flex', padding: '4px 12px', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700 }}>
                  🏭 ISO 9001:2015 & IATF 16949 CERTIFIED MANUFACTURING PLANT
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-4)', color: theme === 'light' ? '#0f172a' : '#fff' }}>
                  Precision Engineering.<br />
                  <span style={{ color: '#0284c7' }}>Global B2B Supply Chain.</span>
                </h1>
                <p style={{ fontSize: '1.15rem', color: theme === 'light' ? '#475569' : '#94a3b8', maxWidth: 560, marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                  State-of-the-art 150,000 sq.ft CNC machining and heavy fabrication facility supplying mission-critical engineered components to 32 countries.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#0284c7', color: '#fff', borderRadius: 4, fontWeight: 700 }} onClick={() => setRfqModal(true)}>
                    Request Instant RFQ Quote
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActiveTab('products')}>
                    View Technical Catalog
                  </button>
                </div>
              </div>
            </section>

            {/* Plant Capacity Metrics */}
            <section className="container" style={{ margin: '-30px auto var(--space-10)', position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { n: '150,000 Sq.Ft', l: 'Plant Infrastructure' },
                  { n: '85+ Units', l: 'CNC & 5-Axis VMC Machines' },
                  { n: '32 Countries', l: 'Direct Export Network' },
                  { n: '± 0.005mm', l: 'Metrology Precision Tolerance' },
                ].map(m => (
                  <div key={m.l} style={{ background: theme === 'light' ? '#ffffff' : '#111827', border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-display)' }}>{m.n}</div>
                    <div style={{ fontSize: '0.8125rem', color: theme === 'light' ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PRODUCTS VIEW */}
        {activeTab === 'products' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Manufactured Components & Technical Catalog</h2>
            <div className="pm-grid-2">
              {PRODUCTS.map(p => (
                <div key={p.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: '1.25rem', color: theme === 'light' ? '#0f172a' : '#fff' }}>{p.name}</h3>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(2,132,199,0.1)', color: '#0284c7', padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>{p.cert}</span>
                  </div>
                  <p style={{ color: theme === 'light' ? '#475569' : '#94a3b8', marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: '0.8rem', color: theme === 'light' ? '#64748b' : '#94a3b8', marginBottom: 16 }}>
                    <div>Grade: <strong>{p.grade}</strong></div>
                    <div>Rating: <strong>{p.pressure}</strong></div>
                  </div>
                  <button className="btn btn-outline btn-sm" onClick={() => setRfqModal(true)}>
                    Request CAD / Spec Sheet →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CAPABILITIES VIEW */}
        {activeTab === 'capabilities' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Factory Plant & Engineering Capabilities</h2>
            <div className="pm-grid-3">
              {[
                { title: '5-Axis CNC Milling', desc: 'Simultaneous 5-axis machining centers with Haas and DMG MORI spindle technologies.' },
                { title: 'Coordinate Metrology (CMM)', desc: 'Zeiss 3D CMM inspection ensuring micron-level dimensional verification with batch reports.' },
                { title: 'Automated Robotic Welding', desc: 'Submerged arc and robotic TIG welding with radiographic non-destructive testing (NDT).' },
              ].map(c => (
                <div key={c.title} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>🏗️</div>
                  <h3 style={{ fontSize: '1.15rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ color: theme === 'light' ? '#64748b' : '#94a3b8' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS VIEW */}
        {activeTab === 'certifications' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Quality Benchmarks & Export Certifications</h2>
            <div className="pm-grid-3">
              {['ISO 9001:2015 Quality System', 'IATF 16949 Automotive Standard', 'AS9100D Aerospace Manufacturing', 'CE European Safety Conformity', 'PED 2014/68/EU Pressure Equipment', 'IBR Indian Boiler Regulations'].map(cert => (
                <div key={cert} className="pm-amenity" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  🛡️ {cert}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 600 }}>
            <h2 className="pm-section__title">Manufacturing Plant & Export Desk</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p>📍 <strong>Plant & Works:</strong> InduMark Heavy Industrial Park, Sector 4, Hyderabad</p>
              <p>📞 <strong>B2B Exports:</strong> {siteConfig.phone}</p>
              <p>✉ <strong>RFQ Desk:</strong> rfq@indumark.demo</p>
            </div>
          </div>
        )}
      </main>

      {/* RFQ Modal */}
      {rfqModal && (
        <div className="plot-modal-overlay" onClick={() => setRfqModal(false)}>
          <div className="plot-modal" onClick={e => e.stopPropagation()} style={{ background: theme === 'light' ? '#ffffff' : '#111827', color: theme === 'light' ? '#0f172a' : '#fff' }}>
            <button className="plot-modal__close" onClick={() => setRfqModal(false)}>×</button>
            {rfqDone ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>📦</div>
                <h3>RFQ Submitted!</h3>
                <p style={{ color: theme === 'light' ? '#64748b' : '#94a3b8' }}>Our technical estimation engineer will provide a commercial quote within 24 hours.</p>
                <button className="btn btn-primary" style={{ marginTop: 16, background: '#0284c7' }} onClick={() => { setRfqDone(false); setRfqModal(false); }}>Close</button>
              </div>
            ) : (
              <div>
                <h3>Request Technical Quotation (RFQ)</h3>
                <p style={{ fontSize: '0.85rem', color: theme === 'light' ? '#64748b' : '#94a3b8', marginBottom: 16 }}>Provide component specifications and estimated batch quantity.</p>
                <form onSubmit={e => { e.preventDefault(); setRfqDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input className="input" placeholder="Company / Enterprise Name" required />
                  <input className="input" placeholder="Procurement Email" type="email" required />
                  <input className="input" placeholder="Mobile / WhatsApp" type="tel" required />
                  <select className="input">
                    <option>High-Pressure Cryogenic Valves</option>
                    <option>Precision CNC Machined Shafts</option>
                    <option>Heavy Duty Industrial Gearboxes</option>
                    <option>Automated Hydraulic Power Packs</option>
                    <option>Custom Forging & Casting (Drawing to follow)</option>
                  </select>
                  <input className="input" placeholder="Estimated Annual Quantity (e.g. 5,000 units)" required />
                  <button type="submit" className="btn btn-primary" style={{ background: '#0284c7', borderColor: '#0284c7', justifyContent: 'center' }}>
                    Generate RFQ Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pm-footer" style={{ background: theme === 'light' ? '#ffffff' : '#0a0d14', borderTopColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#0284c7' }}>InduMark Heavy Engineering</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Precision Components & Global Export Plant</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Demo Template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
