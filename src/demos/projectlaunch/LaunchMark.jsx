import { useState, useEffect } from 'react';
import DemoBar from '../../components/DemoBar.jsx';
import '../plotmark/PlotMark.css';
import './LaunchMark.css';

export default function LaunchMarkDemo() {
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 14, minutes: 32, seconds: 45 });
  const [unlockedPrice, setUnlockedPrice] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', configuration: '3 BHK Luxury' });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setUnlockedPrice(true);
  };

  return (
    <div className="pm-demo lm-demo">
      <DemoBar templateSlug="projectlaunch" templateName="LaunchMark" label="🚀 LaunchMark — High-Conversion Pre-Launch Demo" />

      {/* Floating Announcement Bar */}
      <div style={{ background: 'linear-gradient(90deg, #991b1b, #dc2626, #b91c1c)', color: '#fff', textAlign: 'center', padding: '10px 16px', fontSize: '0.875rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span>🔥 <strong>PRE-LAUNCH WINDOW OPEN:</strong> Special Launch Benefit of ₹5,00,000* for the first 50 Bookings Only!</span>
        <a href="#enquire" style={{ background: '#fff', color: '#991b1b', padding: '3px 12px', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none' }}>Claim Offer</a>
      </div>

      {/* Header */}
      <header className="lm-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>V</div>
          <div>
            <div className="lm-brand-title">THE VERDANT</div>
            <div className="lm-brand-sub">BY DEVMARK HOMES</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Direct Sales Desk</div>
            <div style={{ fontWeight: 700, color: '#dc2626' }}>+91 98765 00000</div>
          </div>
          <a href="#enquire" className="btn btn-sm" style={{ background: '#dc2626', color: '#fff', fontWeight: 700, borderRadius: 6 }}>Download Brochure</a>
        </div>
      </header>

      {/* Hero with Countdown */}
      <section className="lm-hero">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
          {/* Left Column: Pitch */}
          <div>
            <div className="lm-badge">
              ⚡ Exclusive Pre-Launch Opportunity
            </div>
            <h1 className="lm-hero-title">
              Live Beyond Boundaries.<br />
              <span style={{ color: '#ef4444' }}>Own The Sky.</span>
            </h1>
            <p className="lm-hero-sub">
              Ultra-luxury 3 & 4 BHK sky residences located on prime Financial District corridor. Spread over 14 manicured acres with 80% open landscaped green zones.
            </p>

            {/* Countdown Clock */}
            <div className="lm-countdown">
              <div className="lm-countdown-label">Pre-Launch Price Freeze Closes In:</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { label: 'DAYS', val: timeLeft.days },
                  { label: 'HOURS', val: timeLeft.hours },
                  { label: 'MINUTES', val: timeLeft.minutes },
                  { label: 'SECONDS', val: timeLeft.seconds }
                ].map((t, idx) => (
                  <div key={idx} className="lm-countdown-box">
                    <div className="lm-countdown-val">{String(t.val).padStart(2, '0')}</div>
                    <div className="lm-countdown-unit">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lm-meta-row">
              <div>📍 <strong>Location:</strong> Kokapet, Financial District</div>
              <div>📐 <strong>Sizes:</strong> 2,450 – 4,100 Sq.Ft</div>
              <div>🛡️ <strong>RERA:</strong> P02400007891</div>
            </div>
          </div>

          {/* Right Column: Sticky Lead Capture Card */}
          <div id="enquire" className="lm-form-card">
            <div style={{ position: 'absolute', top: -14, right: 24, background: '#dc2626', color: '#fff', fontSize: '0.75rem', fontWeight: 800, padding: '4px 12px', borderRadius: 'var(--radius-pill)', textTransform: 'uppercase' }}>
              Priority Pass
            </div>

            {leadSubmitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: 'var(--space-4)' }}>🎉</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a', marginBottom: 8 }}>VIP Access Unlocked!</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                  Thank you, <strong>{leadForm.name}</strong>. Your exclusive launch pricing sheet and digital brochure have been unlocked below.
                </p>
                <div style={{ background: 'rgba(220,38,38,0.1)', padding: 'var(--space-4)', borderRadius: 8, fontSize: '0.85rem', color: '#dc2626', marginBottom: 'var(--space-4)', fontWeight: 600 }}>
                  A VIP Sales Advisor has been notified for your priority site visit.
                </div>
                <a href="#pricesheet" className="btn btn-primary" style={{ background: '#dc2626', width: '100%' }}>View Official Price Sheet ↓</a>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 6 }}>Unlock Pre-Launch Price Sheet</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: 'var(--space-6)' }}>Register to receive confidential unit-wise floor plans, cost sheet and ₹5 Lakh savings token.</p>

                <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div>
                    <label className="lm-label">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={leadForm.name}
                      onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="lm-input"
                    />
                  </div>
                  <div>
                    <label className="lm-label">Phone Number (For OTP/Confirmation) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={leadForm.phone}
                      onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="lm-input"
                    />
                  </div>
                  <div>
                    <label className="lm-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={leadForm.email}
                      onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                      className="lm-input"
                    />
                  </div>
                  <div>
                    <label className="lm-label">Preferred Configuration</label>
                    <select
                      value={leadForm.configuration}
                      onChange={e => setLeadForm({ ...leadForm, configuration: e.target.value })}
                      className="lm-input"
                    >
                      <option value="3 BHK Luxury">3 BHK Luxury (2,450 Sq.Ft)</option>
                      <option value="3.5 BHK Sky Residence">3.5 BHK Sky Residence (2,900 Sq.Ft)</option>
                      <option value="4 BHK Signature Penthouse">4 BHK Signature Penthouse (4,100 Sq.Ft)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: '#fff', fontWeight: 800, borderRadius: 8, marginTop: 'var(--space-2)' }}>
                    UNLOCK VIP PRICE SHEET NOW →
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.75rem', opacity: 0.7 }}>
                    🔒 We respect your privacy. Zero spam guarantee.
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="lm-section-darker">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-12)' }}>
            <div style={{ color: '#dc2626', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Project Highlights</div>
            <h2 className="lm-section-title">Engineered For The Top 1%</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { icon: '🏊‍♂️', title: '50,000 Sq.Ft Club Odyssey', desc: 'Olympic-size heated infinity pool, bowling alley, squash courts and cigar lounge.' },
              { icon: '🌳', title: '80% Open Green Canopy', desc: '11 acres of biophilic gardens, reflexology pathways and private forest amphitheater.' },
              { icon: '🚗', title: 'Zero Surface Traffic', desc: 'Vehicles routed directly to subterranean parking. 100% pedestrian-friendly surface.' },
              { icon: '⚡', title: '100% Power & EV Ready', desc: 'Dual power backups, smart home automation, and dedicated EV high-speed charging bays.' }
            ].map((item, idx) => (
              <div key={idx} className="lm-highlight-card">
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-3)' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Sheet Section */}
      <section id="pricesheet" className="lm-pricesheet-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <div style={{ color: '#dc2626', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Configuration & Investment</div>
            <h2 className="lm-section-title">Indicative Price Sheet</h2>
          </div>

          <div className="lm-price-table">
            <div className="lm-price-thead">
              <div>TYPOLOGY</div>
              <div>SUPER BUILT-UP</div>
              <div>LAUNCH PRICE</div>
              <div>STATUS</div>
            </div>

            {[
              { type: '3 BHK Grande', area: '2,450 Sq.Ft', price: unlockedPrice ? '₹1.85 Cr*' : '₹ 1.XX Cr*', status: 'Selling Fast' },
              { type: '3.5 BHK Sky Suite', area: '2,900 Sq.Ft', price: unlockedPrice ? '₹2.25 Cr*' : '₹ 2.XX Cr*', status: 'Limited Units' },
              { type: '4 BHK Presidential Sky Villa', area: '4,100 Sq.Ft', price: unlockedPrice ? '₹3.40 Cr*' : '₹ 3.XX Cr*', status: 'Pre-Launch Only' }
            ].map((row, idx) => (
              <div key={idx} className="lm-price-row">
                <div className="lm-price-title">{row.type}</div>
                <div className="lm-price-area">{row.area}</div>
                <div style={{ fontWeight: 800, color: '#dc2626', fontSize: '1.1rem' }}>{row.price}</div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', background: 'rgba(217,119,6,0.12)', padding: '3px 8px', borderRadius: 4 }}>
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {!unlockedPrice && (
            <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
              <a href="#enquire" className="btn btn-outline" style={{ borderColor: '#dc2626', color: '#dc2626' }}>Fill Form Above To Reveal Complete Cost Breakdown →</a>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="lm-footer">
        <p style={{ marginBottom: 6 }}>Disclaimer: This is a demonstration showcase preview. All project specifications, layouts and prices are simulated placeholder data for template evaluation.</p>
        <p>Marketed by DeccanIDentity Showcase · RERA No. Mock P02400007891</p>
      </footer>
    </div>
  );
}
