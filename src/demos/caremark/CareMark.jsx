import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import '../plotmark/PlotMark.css';

const DEPARTMENTS = [
  { id: 'cardio', name: 'Cardiology & Heart Care', icon: '❤️', doctors: 8, desc: 'Advanced cath lab, non-invasive diagnostics and 24x7 emergency cardiac triage.' },
  { id: 'ortho', name: 'Orthopedics & Joint Replacement', icon: '🦴', doctors: 6, desc: 'Robotic knee replacements, sports injury rehabilitation and spine surgery.' },
  { id: 'neuro', name: 'Neurology & Neurosurgery', icon: '🧠', doctors: 5, desc: 'Comprehensive stroke center, neuro-intensive care, and brain surgery excellence.' },
  { id: 'pedia', name: 'Pediatrics & Neonatal Care', icon: '👶', doctors: 7, desc: 'Level-3 NICU, dedicated pediatric surgical suites, and immunisation clinics.' },
];

const DOCTORS = [
  { id: 'd1', name: 'Dr. Arvind Swaminathan', dept: 'Cardiology', qual: 'MD, DM (Cardiology), FACC', exp: '22 Yrs Exp', timing: 'Mon - Fri (10 AM - 2 PM)', fee: '₹900', img: '👨‍⚕️' },
  { id: 'd2', name: 'Dr. Meera Nambiar', dept: 'Neurology', qual: 'MBBS, DNB (Neurology), AIIMS', exp: '16 Yrs Exp', timing: 'Tue - Sat (11 AM - 3 PM)', fee: '₹850', img: '👩‍⚕️' },
  { id: 'd3', name: 'Dr. Rajeshwar Rao', dept: 'Orthopedics', qual: 'MS (Ortho), MCh Joint Replacement (UK)', exp: '19 Yrs Exp', timing: 'Mon - Sat (2 PM - 6 PM)', fee: '₹800', img: '👨‍⚕️' },
];

export default function CareMarkDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDone, setAppointmentDone] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="pm-demo" style={{ background: theme === 'light' ? '#f0fdf4' : '#041712', color: theme === 'light' ? '#0f172a' : '#f0fdf4' }}>
      <DemoBar templateSlug="caremark" templateName="CareMark" label="🏥 CareMark — Multi-Specialty Hospital Demo" />

      {/* Emergency Header Band */}
      <div style={{ background: 'linear-gradient(90deg, #dc2626, #b91c1c)', color: '#fff', padding: '8px 16px', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>🚨</span> <strong>24/7 EMERGENCY & AMBULANCE DISPATCH:</strong> <span>Call 1066 / +91 90000 35869</span>
        </div>
        <div>
          <span>OPD Timings: 8:00 AM – 8:00 PM</span>
        </div>
      </div>

      {/* Hospital Nav */}
      <nav className="pm-nav" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(4, 23, 18, 0.95)', borderBottom: `1px solid ${theme === 'light' ? 'rgba(14,165,233,0.2)' : 'rgba(14,165,233,0.3)'}` }}>
        <div className="pm-nav__logo" style={{ color: '#0ea5e9', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>🏥</span> CAREMARK HOSPITAL
        </div>
        <ul className="pm-nav__links">
          {['home', 'departments', 'doctors', 'diagnostics', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activeTab === p ? 'active' : ''}
                onClick={() => setActiveTab(p)}
                style={activeTab === p ? { color: '#0ea5e9', background: 'rgba(14,165,233,0.1)' } : {}}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-sm" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 600 }} onClick={() => setActiveTab('doctors')}>
            Book Doctor
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {activeTab === 'home' && (
          <div>
            {/* Hero */}
            <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: theme === 'light' ? 'linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)' : 'radial-gradient(ellipse at 80% 30%, rgba(14,165,233,0.15), transparent 70%), linear-gradient(180deg, #041712 0%, #020c0a 100%)', position: 'relative' }}>
              <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
                <div className="badge" style={{ background: 'rgba(14,165,233,0.15)', color: '#0284c7', border: '1px solid rgba(14,165,233,0.3)', marginBottom: 'var(--space-4)', display: 'inline-flex', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 700 }}>
                  ✓ NABH & JCI ACCREDITED MULTI-SPECIALTY
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-4)', color: theme === 'light' ? '#0f172a' : '#f8fafc' }}>
                  Compassionate Care.<br />
                  <span style={{ color: '#0ea5e9' }}>World-Class Healthcare.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: theme === 'light' ? '#475569' : '#94a3b8', maxWidth: 540, marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                  Over 40+ clinical specialties, 500 bed capacity, robotic surgery centers, and 24x7 emergency triage led by India's top medical specialists.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 700 }} onClick={() => setActiveTab('doctors')}>
                    Book Doctor Consultation
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActiveTab('departments')}>
                    Explore Departments
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Metrics */}
            <section className="container" style={{ margin: '-30px auto var(--space-10)', position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { n: '500+', l: 'Hospital Beds' },
                  { n: '120+', l: 'Super Specialists' },
                  { n: '25,000+', l: 'Surgeries Performed' },
                  { n: '24/7', l: 'Trauma & Cath Lab' },
                ].map(m => (
                  <div key={m.l} style={{ background: theme === 'light' ? '#ffffff' : '#08251e', border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0ea5e9', fontFamily: 'var(--font-display)' }}>{m.n}</div>
                    <div style={{ fontSize: '0.8125rem', color: theme === 'light' ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* DEPARTMENTS VIEW */}
        {activeTab === 'departments' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Center of Excellence & Departments</h2>
            <div className="pm-grid-2">
              {DEPARTMENTS.map(d => (
                <div key={d.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{d.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8, color: theme === 'light' ? '#0f172a' : '#fff' }}>{d.name}</h3>
                  <p style={{ color: theme === 'light' ? '#475569' : '#94a3b8', marginBottom: 16 }}>{d.desc}</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setActiveTab('doctors')}>
                    View Doctors ({d.doctors}) →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DOCTORS VIEW */}
        {activeTab === 'doctors' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Our Specialist Doctors & OPD Schedule</h2>
            <div className="pm-grid-3">
              {DOCTORS.map(doc => (
                <div key={doc.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '3rem', marginBottom: 8 }}>{doc.img}</div>
                  <h3 style={{ fontSize: '1.15rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 4 }}>{doc.name}</h3>
                  <div style={{ color: '#0ea5e9', fontWeight: 600, fontSize: '0.875rem', marginBottom: 4 }}>{doc.dept}</div>
                  <div style={{ fontSize: '0.8125rem', color: theme === 'light' ? '#64748b' : '#94a3b8', marginBottom: 12 }}>{doc.qual} · {doc.exp}</div>
                  <div style={{ background: theme === 'light' ? '#f0fdf4' : 'rgba(14,165,233,0.08)', padding: '6px 10px', borderRadius: 6, fontSize: '0.78rem', marginBottom: 14 }}>
                    🕒 {doc.timing} · Consultation Fee: <strong>{doc.fee}</strong>
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSelectedDoctor(doc)}>
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DIAGNOSTICS VIEW */}
        {activeTab === 'diagnostics' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Health Checkup & Diagnostic Packages</h2>
            <div className="pm-grid-3">
              {[
                { title: 'Executive Full Body Health Check', tests: '64 Parameters (Lipid, Liver, Kidney, ECG, X-Ray)', price: '₹2,499' },
                { title: 'Comprehensive Cardiac Wellness', tests: 'TMT, 2D Echo, Lipid Profile, Troponin, Cardiologist Review', price: '₹3,999' },
                { title: 'Senior Citizen Total Care (M/F)', tests: '78 Parameters including PSA/Pap smear, Bone Density, Vit D', price: '₹4,499' },
              ].map(pkg => (
                <div key={pkg.title} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>🔬</div>
                  <h3 style={{ fontSize: '1.1rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 6 }}>{pkg.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: theme === 'light' ? '#64748b' : '#94a3b8', marginBottom: 14 }}>{pkg.tests}</p>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0ea5e9', marginBottom: 14 }}>{pkg.price}</div>
                  <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi CareMark Hospital, I would like to book the ${pkg.title}.`)}`} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    Book via WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 600 }}>
            <h2 className="pm-section__title">Hospital Location & Help Desk</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p>📍 <strong>Main Hospital Campus:</strong> CareMark Healthcare Boulevard, Adibatla Corridor, Hyderabad</p>
              <p>📞 <strong>Reception & OPD Appointments:</strong> {siteConfig.phone}</p>
              <p>🚨 <strong>24/7 Trauma Hotline:</strong> 1066 / {siteConfig.phoneAlt}</p>
              <p>💬 <strong>WhatsApp Quick Desk:</strong> Available 24x7</p>
            </div>
          </div>
        )}
      </main>

      {/* Appointment Modal */}
      {selectedDoctor && (
        <div className="plot-modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="plot-modal" onClick={e => e.stopPropagation()} style={{ background: theme === 'light' ? '#ffffff' : '#08251e', color: theme === 'light' ? '#0f172a' : '#fff' }}>
            <button className="plot-modal__close" onClick={() => setSelectedDoctor(null)}>×</button>
            {appointmentDone ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>✅</div>
                <h3>Appointment Request Sent!</h3>
                <p style={{ color: theme === 'light' ? '#64748b' : '#94a3b8' }}>Our hospital care coordinator will call you to confirm your slot with {selectedDoctor.name}.</p>
                <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setAppointmentDone(false); setSelectedDoctor(null); }}>Done</button>
              </div>
            ) : (
              <div>
                <h3>Book Appointment with {selectedDoctor.name}</h3>
                <p style={{ fontSize: '0.875rem', color: theme === 'light' ? '#64748b' : '#94a3b8', marginBottom: 16 }}>{selectedDoctor.dept} · {selectedDoctor.qual}</p>
                <form onSubmit={e => { e.preventDefault(); setAppointmentDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input className="input" placeholder="Patient Full Name" required />
                  <input className="input" placeholder="Mobile / WhatsApp Number" type="tel" required />
                  <input className="input" type="date" required />
                  <select className="input">
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Evening (2:00 PM - 5:00 PM)</option>
                  </select>
                  <button type="submit" className="btn btn-primary" style={{ background: '#0ea5e9', borderColor: '#0ea5e9', justifyContent: 'center' }}>
                    Confirm Appointment Slot
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pm-footer" style={{ background: theme === 'light' ? '#ffffff' : '#041712', borderTopColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#0ea5e9' }}>CareMark Healthcare</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Multi-Specialty Hospital & Diagnostic Centers</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Demo Template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
