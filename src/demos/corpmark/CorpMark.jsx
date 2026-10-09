import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import '../plotmark/PlotMark.css';

const PRACTICES = [
  { id: 'tax', name: 'Corporate Tax & Audit', desc: 'Cross-border transfer pricing, GST litigation, and statutory audits led by certified Senior CAs.' },
  { id: 'ma', name: 'M&A and Transaction Advisory', desc: 'Financial due diligence, company valuations, business restructuring, and capital syndication.' },
  { id: 'legal', name: 'Regulatory & Corporate Governance', desc: 'SEBI compliance, contract drafting, trademark disputes, and NCLT dispute resolution.' },
  { id: 'strategy', name: 'Enterprise Strategy & Operations', desc: 'Supply chain transformation, cost rationalization, and digital operating model modernization.' },
];

export default function CorpMarkDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [consultModal, setConsultModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="pm-demo" style={{ background: theme === 'light' ? '#f0fdf4' : '#021810', color: theme === 'light' ? '#0f172a' : '#ecfdf5' }}>
      <DemoBar templateSlug="corpmark" templateName="CorpMark" label="⚖️ CorpMark — Corporate Advisory Live Demo" />

      {/* Nav */}
      <nav className="pm-nav" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(2, 24, 16, 0.95)', borderBottom: `1px solid ${theme === 'light' ? 'rgba(5,150,105,0.15)' : 'rgba(5,150,105,0.3)'}` }}>
        <div className="pm-nav__logo" style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>⚖️</span> CORPMARK ADVISORY
        </div>
        <ul className="pm-nav__links">
          {['home', 'practices', 'case-studies', 'partners', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activeTab === p ? 'active' : ''}
                onClick={() => setActiveTab(p)}
                style={activeTab === p ? { color: '#059669', background: 'rgba(5,150,105,0.1)' } : {}}
              >
                {p.replace('-', ' ').toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-sm" style={{ background: '#059669', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 600 }} onClick={() => setConsultModal(true)}>
            Book Consultation
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {activeTab === 'home' && (
          <div>
            {/* Hero */}
            <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: theme === 'light' ? 'linear-gradient(135deg, #dcfce7 0%, #ecfdf5 50%, #ffffff 100%)' : 'radial-gradient(ellipse at 80% 30%, rgba(5,150,105,0.2), transparent 70%), linear-gradient(180deg, #021810 0%, #010a07 100%)', position: 'relative' }}>
              <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
                <div className="badge" style={{ background: 'rgba(5,150,105,0.15)', color: '#059669', border: '1px solid rgba(5,150,105,0.3)', marginBottom: 'var(--space-4)', display: 'inline-flex', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 700 }}>
                  🏛️ 25+ YEARS OF EXECUTIVE ADVISORY EXCELLENCE
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-4)', color: theme === 'light' ? '#0f172a' : '#f8fafc' }}>
                  Strategic Foresight.<br />
                  <span style={{ color: '#059669' }}>Uncompromising Integrity.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: theme === 'light' ? '#475569' : '#a7f3d0', maxWidth: 540, marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                  Advising Fortune 500 multinationals, promoter-led enterprises, and high-growth scaleups across tax optimization, regulatory structuring, and M&A transactions.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#059669', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 700 }} onClick={() => setConsultModal(true)}>
                    Schedule Executive Consultation
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActiveTab('practices')}>
                    Our Practice Areas
                  </button>
                </div>
              </div>
            </section>

            {/* Metrics */}
            <section className="container" style={{ margin: '-30px auto var(--space-10)', position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { n: '₹12,000 Cr+', l: 'Transactions Advised' },
                  { n: '450+', l: 'Institutional Clients' },
                  { n: '32+', l: 'Senior Partners' },
                  { n: '99.4%', l: 'Litigation Success Benchmark' },
                ].map(m => (
                  <div key={m.l} style={{ background: theme === 'light' ? '#ffffff' : '#063323', border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-display)' }}>{m.n}</div>
                    <div style={{ fontSize: '0.8125rem', color: theme === 'light' ? '#64748b' : '#a7f3d0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PRACTICES VIEW */}
        {activeTab === 'practices' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Core Practice Disciplines</h2>
            <div className="pm-grid-2">
              {PRACTICES.map(p => (
                <div key={p.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <h3 style={{ fontSize: '1.25rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ color: theme === 'light' ? '#475569' : '#a7f3d0', marginBottom: 16 }}>{p.desc}</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setConsultModal(true)}>
                    Inquire About Service →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CASE STUDIES VIEW */}
        {activeTab === 'case-studies' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Client Impact & Transactions</h2>
            <div className="pm-grid-3">
              {[
                { title: '₹850 Cr Cross-Border Inbound M&A', client: 'Global Pharma Leader', impact: 'Executed tax-efficient asset purchase restructuring with zero regulatory bottlenecks.' },
                { title: 'GST Dispute Win of ₹140 Cr', client: 'Top 3 Infrastructure EPC', impact: 'Argued successfully before High Court establishing precedential tax treaty exemption.' },
                { title: 'Pre-IPO Corporate Restructuring', client: 'Fintech Unicorn', impact: 'Streamlined multi-jurisdictional cap table and prepared audit for SEBI DRHP filing.' },
              ].map(c => (
                <div key={c.title} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>{c.client}</span>
                  <h3 style={{ fontSize: '1.15rem', color: theme === 'light' ? '#0f172a' : '#fff', margin: '8px 0' }}>{c.title}</h3>
                  <p style={{ color: theme === 'light' ? '#475569' : '#a7f3d0' }}>{c.impact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PARTNERS VIEW */}
        {activeTab === 'partners' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Senior Managing Partners</h2>
            <div className="pm-grid-3">
              {[
                { name: 'K. S. Narayanan, FCA', role: 'Senior Managing Partner', spec: 'Direct Tax & Supreme Court Appeals (34 Yrs Exp)' },
                { name: 'Pooja Singhania, LL.M', role: 'Partner - Corporate Law', spec: 'Harvard Law Alumni, Cross-Border M&A (18 Yrs Exp)' },
                { name: 'Vikramaditya Bose, CFA', role: 'Partner - Transaction Advisory', spec: 'Former Wall St. Director, Private Equity Valuation (22 Yrs Exp)' },
              ].map(ptr => (
                <div key={ptr.name} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>👔</div>
                  <h3 style={{ fontSize: '1.2rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 4 }}>{ptr.name}</h3>
                  <div style={{ color: '#059669', fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>{ptr.role}</div>
                  <p style={{ color: theme === 'light' ? '#64748b' : '#a7f3d0', fontSize: '0.85rem' }}>{ptr.spec}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 600 }}>
            <h2 className="pm-section__title">Chambers & Consultations</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p>📍 <strong>Principal Chambers:</strong> CorpMark Tower, Financial District, Gachibowli, Hyderabad</p>
              <p>📞 <strong>Managing Partner Desk:</strong> {siteConfig.phone}</p>
              <p>✉ <strong>General Inquiries:</strong> advisory@corpmark.demo</p>
            </div>
          </div>
        )}
      </main>

      {/* Consultation Modal */}
      {consultModal && (
        <div className="plot-modal-overlay" onClick={() => setConsultModal(false)}>
          <div className="plot-modal" onClick={e => e.stopPropagation()} style={{ background: theme === 'light' ? '#ffffff' : '#063323', color: theme === 'light' ? '#0f172a' : '#fff' }}>
            <button className="plot-modal__close" onClick={() => setConsultModal(false)}>×</button>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>🤝</div>
                <h3>Consultation Confirmed</h3>
                <p style={{ color: theme === 'light' ? '#64748b' : '#a7f3d0' }}>A Senior Partner from our executive council will contact your office.</p>
                <button className="btn btn-primary" style={{ marginTop: 16, background: '#059669' }} onClick={() => { setSubmitted(false); setConsultModal(false); }}>Close</button>
              </div>
            ) : (
              <div>
                <h3>Book Executive Consultation</h3>
                <p style={{ fontSize: '0.85rem', color: theme === 'light' ? '#64748b' : '#a7f3d0', marginBottom: 16 }}>Strictly confidential advisory engagement.</p>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input className="input" placeholder="Your Full Name" required />
                  <input className="input" placeholder="Enterprise / Organization" required />
                  <input className="input" placeholder="Contact Mobile / WhatsApp" type="tel" required />
                  <select className="input">
                    <option>Corporate Tax & Transfer Pricing</option>
                    <option>M&A Due Diligence & Valuation</option>
                    <option>Litigation & Regulatory Defense</option>
                    <option>Corporate Restructuring</option>
                  </select>
                  <button type="submit" className="btn btn-primary" style={{ background: '#059669', borderColor: '#059669', justifyContent: 'center' }}>
                    Confirm Private Discovery Slot
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pm-footer" style={{ background: theme === 'light' ? '#ffffff' : '#021810', borderTopColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#059669' }}>CorpMark Advisory</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Corporate Advisory, CA & Legal Chambers</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Demo Template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
