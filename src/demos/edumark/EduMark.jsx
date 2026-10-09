import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import '../plotmark/PlotMark.css';

const PROGRAMS = [
  { id: 'early', title: 'Early Years (Pre-K to KG)', age: 'Age 3 - 5', desc: 'Montessori-inspired experiential learning, sensory play labs, and foundational phonics.' },
  { id: 'primary', title: 'Primary School (Grades 1-5)', age: 'Age 6 - 10', desc: 'Inquiry-led CBSE/IB curriculum emphasizing mathematical aptitude, languages, and discovery.' },
  { id: 'middle', title: 'Middle & High School (Grades 6-10)', age: 'Age 11 - 15', desc: 'Advanced STEM curriculum, robotics, competitive coding, debating, and athletics.' },
  { id: 'senior', title: 'Senior Secondary (Grades 11-12)', age: 'Age 16 - 18', desc: 'Specialized Science (IIT-JEE/NEET) and Commerce/Humanities tracks with career counseling.' },
];

export default function EduMarkDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="pm-demo" style={{ background: theme === 'light' ? '#faf5ff' : '#0e071c', color: theme === 'light' ? '#0f172a' : '#f5f3ff' }}>
      <DemoBar templateSlug="edumark" templateName="EduMark" label="🎓 EduMark — Campus & Academy Live Demo" />

      {/* Admissions Ticker */}
      <div style={{ background: 'linear-gradient(90deg, #6d28d9, #7c3aed)', color: '#fff', padding: '8px 16px', fontSize: '0.8rem', textAlign: 'center' }}>
        📢 <strong>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27:</strong> Limited Seats in Nursery, Grade 1 & Grade 11. <a href="#enquire" onClick={(e) => { e.preventDefault(); setEnquiryModal(true); }} style={{ color: '#fed7aa', fontWeight: 700, marginLeft: 8, textDecoration: 'underline' }}>Apply Online Now →</a>
      </div>

      {/* Nav */}
      <nav className="pm-nav" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(14, 7, 28, 0.95)', borderBottom: `1px solid ${theme === 'light' ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.3)'}` }}>
        <div className="pm-nav__logo" style={{ color: '#7c3aed', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>🎓</span> EDUMARK ACADEMY
        </div>
        <ul className="pm-nav__links">
          {['home', 'academics', 'facilities', 'admissions', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activeTab === p ? 'active' : ''}
                onClick={() => setActiveTab(p)}
                style={activeTab === p ? { color: '#7c3aed', background: 'rgba(124,58,237,0.1)' } : {}}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-sm" style={{ background: '#7c3aed', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 600 }} onClick={() => setEnquiryModal(true)}>
            Enquire Now
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {activeTab === 'home' && (
          <div>
            {/* Hero */}
            <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: theme === 'light' ? 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 50%, #ffffff 100%)' : 'radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.2), transparent 70%), linear-gradient(180deg, #0e071c 0%, #07030e 100%)', position: 'relative' }}>
              <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
                <div className="badge" style={{ background: 'rgba(124,58,237,0.15)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.3)', marginBottom: 'var(--space-4)', display: 'inline-flex', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 700 }}>
                  ⭐ RANKED #1 INNOVATIVE SCHOOL IN SOUTH INDIA
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-4)', color: theme === 'light' ? '#0f172a' : '#f8fafc' }}>
                  Nurturing Minds.<br />
                  <span style={{ color: '#7c3aed' }}>Inspiring Global Leaders.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: theme === 'light' ? '#475569' : '#a78bfa', maxWidth: 540, marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                  World-class 25-acre green campus, Cambridge & CBSE curriculum, 100% university placement track record, and holistic development in arts and sports.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#7c3aed', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 700 }} onClick={() => setEnquiryModal(true)}>
                    Apply for Admission 2026-27
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActiveTab('academics')}>
                    Explore Programs
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Metrics */}
            <section className="container" style={{ margin: '-30px auto var(--space-10)', position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { n: '100%', l: 'Board Exam Pass Rate' },
                  { n: '1:12', l: 'Teacher-Student Ratio' },
                  { n: '25 Acres', l: 'Smart Green Campus' },
                  { n: '35+', l: 'Clubs & Sports Academies' },
                ].map(m => (
                  <div key={m.l} style={{ background: theme === 'light' ? '#ffffff' : '#1c0e36', border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#7c3aed', fontFamily: 'var(--font-display)' }}>{m.n}</div>
                    <div style={{ fontSize: '0.8125rem', color: theme === 'light' ? '#64748b' : '#c4b5fd', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ACADEMICS VIEW */}
        {activeTab === 'academics' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Academic Pathways & Curriculum</h2>
            <div className="pm-grid-2">
              {PROGRAMS.map(prog => (
                <div key={prog.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: '1.2rem', color: theme === 'light' ? '#0f172a' : '#fff' }}>{prog.title}</h3>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(124,58,237,0.1)', color: '#7c3aed', padding: '2px 8px', borderRadius: 12, fontWeight: 700 }}>{prog.age}</span>
                  </div>
                  <p style={{ color: theme === 'light' ? '#475569' : '#c4b5fd', marginBottom: 16 }}>{prog.desc}</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setEnquiryModal(true)}>
                    Download Curriculum Guide →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FACILITIES VIEW */}
        {activeTab === 'facilities' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Campus Facilities & Infrastructure</h2>
            <div className="pm-grid-3">
              {[
                '🔬 Advanced STEM & Robotics Lab',
                '🏊 Olympic Standard Swimming Pool',
                '📚 Multi-Level Digital Library',
                '🎭 800-Seater Performing Arts Auditorium',
                '⚽ FIFA Standard Football Turf',
                '🚌 GPS-Tracked AC Transport Fleet',
              ].map(f => (
                <div key={f} className="pm-amenity" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  {f}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ADMISSIONS VIEW */}
        {activeTab === 'admissions' && (
          <div className="pm-section container" style={{ maxWidth: 640 }}>
            <h2 className="pm-section__title">Admission Process 2026-27</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', marginBottom: 24 }}>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, lineHeight: 1.6 }}>
                <li><strong>Step 1: Online Registration:</strong> Fill out the inquiry form below to receive the digital prospectus.</li>
                <li><strong>Step 2: Campus Walkthrough & Interaction:</strong> Meet our academic council and explore campus life.</li>
                <li><strong>Step 3: Assessment & Seat Allocation:</strong> Age-appropriate developmental readiness check.</li>
                <li><strong>Step 4: Admission Confirmation:</strong> Document verification and fee deposit.</li>
              </ol>
            </div>
            <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', background: '#7c3aed', borderColor: '#7c3aed' }} onClick={() => setEnquiryModal(true)}>
              Fill Admission Application Form
            </button>
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 600 }}>
            <h2 className="pm-section__title">Campus Location & Office</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p>📍 <strong>Campus:</strong> EduMark Academy Knowledge Valley, Outer Ring Road, Hyderabad</p>
              <p>📞 <strong>Admissions Office:</strong> {siteConfig.phone}</p>
              <p>✉ <strong>Admissions Email:</strong> admissions@edumark.demo</p>
            </div>
          </div>
        )}
      </main>

      {/* Enquiry Modal */}
      {enquiryModal && (
        <div className="plot-modal-overlay" onClick={() => setEnquiryModal(false)}>
          <div className="plot-modal" onClick={e => e.stopPropagation()} style={{ background: theme === 'light' ? '#ffffff' : '#1c0e36', color: theme === 'light' ? '#0f172a' : '#fff' }}>
            <button className="plot-modal__close" onClick={() => setEnquiryModal(false)}>×</button>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>🎉</div>
                <h3>Inquiry Registered!</h3>
                <p style={{ color: theme === 'light' ? '#64748b' : '#c4b5fd' }}>Our admissions counselor will reach out within 24 hours with your campus visit pass.</p>
                <button className="btn btn-primary" style={{ marginTop: 16, background: '#7c3aed' }} onClick={() => { setSubmitted(false); setEnquiryModal(false); }}>Close</button>
              </div>
            ) : (
              <div>
                <h3>Admissions Enquiry (2026-27)</h3>
                <p style={{ fontSize: '0.85rem', color: theme === 'light' ? '#64748b' : '#c4b5fd', marginBottom: 16 }}>Please share student and guardian details for the prospectus.</p>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input className="input" placeholder="Parent / Guardian Name" required />
                  <input className="input" placeholder="Student Full Name" required />
                  <input className="input" placeholder="Mobile / WhatsApp Number" type="tel" required />
                  <select className="input">
                    <option>Grade Seeking: Pre-Primary (Nursery - KG)</option>
                    <option>Grade Seeking: Primary (Grades 1 - 5)</option>
                    <option>Grade Seeking: Middle School (Grades 6 - 8)</option>
                    <option>Grade Seeking: High School (Grades 9 - 10)</option>
                    <option>Grade Seeking: Senior Secondary (Grades 11 - 12)</option>
                  </select>
                  <button type="submit" className="btn btn-primary" style={{ background: '#7c3aed', borderColor: '#7c3aed', justifyContent: 'center' }}>
                    Submit Admissions Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pm-footer" style={{ background: theme === 'light' ? '#ffffff' : '#0e071c', borderTopColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#7c3aed' }}>EduMark Academy</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>International School & Pre-University College</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Demo Template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
