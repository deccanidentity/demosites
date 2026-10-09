import { useState } from 'react';
import DemoBar from '../../components/DemoBar.jsx';
import '../plotmark/PlotMark.css';
import './DevMark.css';

const PROJECTS = [
  {
    id: 'p1',
    name: 'The Crown Residences',
    category: 'residential',
    status: 'Ongoing',
    location: 'Financial District, Hyderabad',
    units: '340 Luxury Apartments',
    rera: 'P02400003182',
    delivery: 'Dec 2026',
    price: '₹1.8 Cr onwards',
    image: '🏢',
    desc: 'Twin towers rising 38 floors, featuring sky lounges, infinity pool and sustainable IGBC Gold certified architecture.'
  },
  {
    id: 'p2',
    name: 'DevMark One Tech Park',
    category: 'commercial',
    status: 'Completed',
    location: 'HITEC City Phase 2',
    units: '1.2 Million Sq.Ft Grade-A Office',
    rera: 'P02400001099',
    delivery: 'Handed Over 2023',
    price: 'Leased to Fortune 500s',
    image: '🏬',
    desc: 'Next-generation commercial IT hub hosting multinational tech headquarters with smart building automation.'
  },
  {
    id: 'p3',
    name: 'Serene Hills Villa Enclave',
    category: 'residential',
    status: 'Ongoing',
    location: 'Mokila, Outer Ring Road',
    units: '86 Ultra Luxury Villas',
    rera: 'P02400004921',
    delivery: 'Oct 2025',
    price: '₹2.8 Cr onwards',
    image: '🏡',
    desc: 'Gated 22-acre sanctuary with private pools, clubhouse, and lush tree-lined avenues designed by top landscape architects.'
  },
  {
    id: 'p4',
    name: 'DevMark Boulevard',
    category: 'commercial',
    status: 'Upcoming',
    location: 'Gachibowli Main Road',
    units: 'Premium Retail & F&B Hub',
    rera: 'Registration in progress',
    delivery: 'Q2 2027',
    price: 'Pre-leasing open',
    image: '🛍️',
    desc: 'High-street experiential retail promenade offering dining terraces, drive-through stores and anchor luxury brands.'
  },
  {
    id: 'p5',
    name: 'Signature Heights',
    category: 'residential',
    status: 'Completed',
    location: 'Banjara Hills, Road No. 12',
    units: '48 Limited Edition Sky Villas',
    rera: 'P02400000840',
    delivery: 'Delivered 2022',
    price: '100% Sold Out',
    image: '🌆',
    desc: 'Award-winning private sanctuary perched on Banjara Hills with 360-degree city views and private elevator access.'
  }
];

const LEADERSHIP = [
  {
    name: 'Rajendra Prasad Rao',
    role: 'Founder & Chairman',
    exp: '32+ years in Infrastructure & Real Estate',
    bio: 'Pioneered landmark urban developments across South India. Recipient of Real Estate Visionary Lifetime Award 2022.'
  },
  {
    name: 'Ananya Rao Kamineni',
    role: 'Managing Director & CEO',
    exp: '16+ years | Columbia Univ. MS Real Estate',
    bio: 'Drives strategic expansions, green building innovations, and institutional private equity partnerships.'
  },
  {
    name: 'Suresh Varma',
    role: 'Chief Operating Officer & Head of Projects',
    exp: '24+ years civil engineering & construction',
    bio: 'Oversees engineering excellence, on-time project execution, and safety benchmarks across 10M+ sq.ft delivered.'
  }
];

const MILESTONES = [
  { year: '1998', title: 'Foundation', desc: 'Established in Hyderabad with our first flagship plotted community of 50 acres.' },
  { year: '2006', title: 'Commercial Expansion', desc: 'Delivered first Grade-A commercial office tower in HITEC City corridor.' },
  { year: '2014', title: '5 Million Sq.Ft Milestone', desc: 'Crossed delivery of 5M sq.ft residential & commercial space with zero defaults.' },
  { year: '2020', title: 'Sustainable Building Pledge', desc: 'Mandated 100% IGBC green building certified developments across all new launches.' },
  { year: '2025', title: '25+ Iconic Projects', desc: 'Over 12,000+ satisfied families and 18 corporate commercial tenant partnerships.' }
];

const AWARDS = [
  { year: '2025', title: 'Best Luxury Residential Developer of the Year', org: 'National Real Estate Conclave' },
  { year: '2024', title: 'Excellence in Sustainable Architecture (IGBC Gold)', org: 'Green Building Congress' },
  { year: '2023', title: 'Developer with Highest Customer Trust Index', org: 'Southern India Builders Forum' },
  { year: '2021', title: 'Best Commercial IT Hub Delivery', org: 'CREDAI Property Awards' }
];

export default function DevMarkDemo() {
  const [activePage, setActivePage] = useState('home');
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [enquirySent, setEnquirySent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', interest: 'Residential Purchase' });

  const filteredProjects = PROJECTS.filter(p => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'residential' || projectFilter === 'commercial') return p.category === projectFilter;
    if (projectFilter === 'ongoing') return p.status === 'Ongoing';
    if (projectFilter === 'completed') return p.status === 'Completed';
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <div className="pm-demo dm-demo">
      <DemoBar templateSlug="developer" templateName="DevMark" label="🏛️ DevMark — Corporate Developer Live Demo" />

      {/* Navigation */}
      <nav className="pm-nav dm-nav" aria-label="DevMark navigation">
        <div className="pm-nav__logo" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.05em', color: '#0284c7' }}>DEVMARK GROUP</span>
          <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8 }}>Est. 1998 · Builders of Legacy</span>
        </div>
        <ul className="pm-nav__links">
          {['home', 'projects', 'about', 'milestones', 'leadership', 'awards', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activePage === p ? 'active' : ''}
                onClick={() => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className="btn btn-sm"
            style={{ background: '#0284c7', color: '#fff', borderRadius: 'var(--radius-md)', padding: '8px 18px', fontWeight: 600 }}
            onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Investor Relations
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {/* HOME VIEW */}
        {activePage === 'home' && (
          <div>
            {/* Hero */}
            <section className="dm-hero">
              <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'var(--space-16) var(--space-6)' }}>
                <div className="dm-badge">
                  🏛️ 28 Years of Engineering Excellence
                </div>
                <h1 className="dm-hero-title">
                  Crafting Landmarks.<br />
                  <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Shaping City Skylines.
                  </span>
                </h1>
                <p className="dm-hero-sub">
                  DevMark Group is one of the most respected corporate infrastructure & real estate conglomerates, with 10M+ sq.ft delivered across residential, commercial and mixed-use communities.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#0284c7', color: '#fff', borderRadius: 'var(--radius-md)', padding: '14px 28px', fontWeight: 700 }} onClick={() => setActivePage('projects')}>
                    Explore Portfolio
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActivePage('about')}>
                    Corporate Profile
                  </button>
                </div>

                {/* Stats Bar */}
                <div className="dm-stats">
                  <div>
                    <div className="dm-stat-num">10M+</div>
                    <div className="dm-stat-label">Sq.Ft Delivered</div>
                  </div>
                  <div>
                    <div className="dm-stat-num">12,000+</div>
                    <div className="dm-stat-label">Happy Families</div>
                  </div>
                  <div>
                    <div className="dm-stat-num">28+</div>
                    <div className="dm-stat-label">Years of Integrity</div>
                  </div>
                  <div>
                    <div className="dm-stat-num">100%</div>
                    <div className="dm-stat-label">RERA Compliant</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects preview */}
            <section className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <div>
                  <div style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Iconic Developments</div>
                  <h2 className="dm-section-title" style={{ marginTop: 4 }}>Featured Portfolio</h2>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => setActivePage('projects')}>View All Projects →</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
                {PROJECTS.slice(0, 3).map(p => (
                  <div
                    key={p.id}
                    className="dm-card dm-project-card"
                    onClick={() => setSelectedProject(p)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                      <span style={{ fontSize: '2.5rem' }}>{p.image}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: p.status === 'Completed' ? 'rgba(34,197,94,0.15)' : 'rgba(56,189,248,0.15)', color: p.status === 'Completed' ? '#16a34a' : '#0284c7' }}>
                        {p.status}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 6 }}>{p.name}</h3>
                    <p className="dm-card-sub" style={{ fontSize: '0.875rem', marginBottom: 'var(--space-4)' }}>📍 {p.location}</p>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>{p.desc}</p>
                    <div className="dm-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-4)', fontSize: '0.8125rem' }}>
                      <span style={{ color: '#0284c7', fontWeight: 700 }}>{p.price}</span>
                      <span className="dm-card-sub" style={{ fontWeight: 600 }}>Details & RERA →</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PROJECTS VIEW */}
        {activePage === 'projects' && (
          <section className="container" style={{ padding: 'var(--space-12) var(--space-6)' }}>
            <h1 className="dm-section-title">Our Project Portfolio</h1>
            <p className="dm-section-desc" style={{ marginBottom: 'var(--space-8)' }}>Explore our landmark residential complexes, luxury villa estates, and Grade-A commercial tech parks.</p>

            {/* Filter Chips */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'residential', label: 'Residential' },
                { id: 'commercial', label: 'Commercial IT' },
                { id: 'ongoing', label: 'Under Construction' },
                { id: 'completed', label: 'Delivered / Completed' }
              ].map(f => (
                <button
                  key={f.id}
                  className={`dm-filter-chip ${projectFilter === f.id ? 'active' : ''}`}
                  onClick={() => setProjectFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
              {filteredProjects.map(p => (
                <div
                  key={p.id}
                  className="dm-card dm-project-card"
                  onClick={() => setSelectedProject(p)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                    <span style={{ fontSize: '2.5rem' }}>{p.image}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: p.status === 'Completed' ? 'rgba(34,197,94,0.15)' : 'rgba(56,189,248,0.15)', color: p.status === 'Completed' ? '#16a34a' : '#0284c7' }}>
                      {p.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4 }}>{p.name}</h3>
                  <div className="dm-card-sub" style={{ fontSize: '0.85rem', marginBottom: 'var(--space-3)' }}>📍 {p.location}</div>
                  <div style={{ fontSize: '0.85rem', color: '#0284c7', marginBottom: 'var(--space-3)', fontWeight: 700 }}>{p.units}</div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 'var(--space-5)' }}>{p.desc}</p>
                  <div className="dm-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-4)', fontSize: '0.8125rem' }}>
                    <span style={{ fontWeight: 700, color: '#0284c7' }}>{p.price}</span>
                    <span style={{ color: '#0284c7', fontWeight: 600 }}>View Specs & RERA →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABOUT & LEADERSHIP VIEW */}
        {activePage === 'about' && (
          <section className="container" style={{ padding: 'var(--space-12) var(--space-6)' }}>
            <h1 className="dm-section-title">About DevMark Group</h1>
            <p className="dm-section-desc" style={{ maxWidth: 750, fontSize: '1.125rem', marginBottom: 'var(--space-10)' }}>
              Founded in 1998, DevMark Group has grown into an industry-leading real estate and urban infrastructure powerhouse. Built on foundational pillars of transparent governance, uncompromised structural quality, and strict on-time delivery.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
              <div className="dm-card">
                <h3 style={{ color: '#0284c7', marginBottom: 8, fontSize: '1.15rem', fontWeight: 700 }}>Our Vision</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>To define the benchmark for quality living and modern commerce through world-class architectural engineering and enduring value creation.</p>
              </div>
              <div className="dm-card">
                <h3 style={{ color: '#0284c7', marginBottom: 8, fontSize: '1.15rem', fontWeight: 700 }}>Environmental Commitment</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>Zero carbon emission initiatives, 100% rainwater harvesting, sewage water treatment plants and solar-powered common amenities.</p>
              </div>
              <div className="dm-card">
                <h3 style={{ color: '#0284c7', marginBottom: 8, fontSize: '1.15rem', fontWeight: 700 }}>Investor Security</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>Zero debt-burdened land titles, complete RERA compliance, clean escrow account management and clear litigation-free titles.</p>
              </div>
            </div>
          </section>
        )}

        {/* MILESTONES VIEW */}
        {activePage === 'milestones' && (
          <section className="container" style={{ padding: 'var(--space-12) var(--space-6)' }}>
            <h1 className="dm-section-title">28 Years of Milestones</h1>
            <p className="dm-section-desc" style={{ marginBottom: 'var(--space-10)' }}>Tracing our journey from a regional land developer to a multi-billion infrastructure corporate.</p>

            <div style={{ position: 'relative', borderLeft: '2px solid #0284c7', marginLeft: 'var(--space-4)', paddingLeft: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              {MILESTONES.map((m, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div className="dm-milestone-dot" />
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0284c7', marginBottom: 4 }}>{m.year}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 6 }}>{m.title}</h3>
                  <p className="dm-card-sub" style={{ fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: 580 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LEADERSHIP VIEW */}
        {activePage === 'leadership' && (
          <section className="container" style={{ padding: 'var(--space-12) var(--space-6)' }}>
            <h1 className="dm-section-title">Executive Leadership</h1>
            <p className="dm-section-desc" style={{ marginBottom: 'var(--space-10)' }}>Guided by decades of engineering expertise, financial stewardship and visionary leadership.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
              {LEADERSHIP.map((leader, i) => (
                <div key={i} className="dm-card">
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: 'var(--space-4)' }}>
                    {leader.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 2 }}>{leader.name}</h3>
                  <div style={{ color: '#0284c7', fontSize: '0.875rem', fontWeight: 600, marginBottom: 6 }}>{leader.role}</div>
                  <div className="dm-card-sub" style={{ fontSize: '0.8125rem', marginBottom: 'var(--space-4)' }}>{leader.exp}</div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{leader.bio}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AWARDS VIEW */}
        {activePage === 'awards' && (
          <section className="container" style={{ padding: 'var(--space-12) var(--space-6)' }}>
            <h1 className="dm-section-title">Awards & Accreditations</h1>
            <p className="dm-section-desc" style={{ marginBottom: 'var(--space-10)' }}>Industry recognition honoring our architectural brilliance, sustainability standards and ethical building practices.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
              {AWARDS.map((aw, i) => (
                <div key={i} className="dm-card" style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2.5rem' }}>🏆</div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', background: 'rgba(2, 132, 199, 0.1)', padding: '2px 8px', borderRadius: 4 }}>{aw.year}</span>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginTop: 6, marginBottom: 4 }}>{aw.title}</h3>
                    <p className="dm-card-sub" style={{ fontSize: '0.8125rem' }}>{aw.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT VIEW */}
        {activePage === 'contact' && (
          <section className="container" style={{ padding: 'var(--space-12) var(--space-6)', maxWidth: 800 }}>
            <h1 className="dm-section-title">Connect With DevMark</h1>
            <p className="dm-section-desc" style={{ marginBottom: 'var(--space-8)' }}>For corporate enquiries, institutional partnerships, commercial leasing, or direct residential bookings.</p>

            {enquirySent ? (
              <div style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid #22c55e', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>✅</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a', marginBottom: 8 }}>Enquiry Submitted Successfully</h3>
                <p className="dm-card-sub" style={{ marginBottom: 'var(--space-6)' }}>Our corporate relation officer will review your request and reach out within 24 business hours.</p>
                <button className="btn btn-outline" onClick={() => setEnquirySent(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="dm-form-card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
                  <div>
                    <label className="dm-label">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Anand K. Rao"
                      className="dm-input"
                    />
                  </div>
                  <div>
                    <label className="dm-label">Company / Organization</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Apex Global Tech"
                      className="dm-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
                  <div>
                    <label className="dm-label">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="dm-input"
                    />
                  </div>
                  <div>
                    <label className="dm-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="dm-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="dm-label">Nature of Enquiry</label>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="dm-input"
                  >
                    <option value="Residential Purchase">Residential Purchase / Booking</option>
                    <option value="Commercial Office Leasing">Commercial Office Leasing</option>
                    <option value="Land Joint Venture">Land Joint Venture (JV / JDA)</option>
                    <option value="Investor Relations">Investor Relations / Equity</option>
                    <option value="Vendor / Contracting">Vendor / Sub-Contracting Partnership</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-lg" style={{ background: '#0284c7', color: '#fff', borderRadius: 6, marginTop: 'var(--space-2)' }}>
                  Submit Corporate Enquiry
                </button>
              </form>
            )}
          </section>
        )}
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)' }} onClick={() => setSelectedProject(null)}>
          <div className="dm-modal" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'inherit', opacity: 0.7, fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ✕
            </button>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }}>{selectedProject.image}</div>
            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(2,132,199,0.15)', color: '#0284c7', marginBottom: 8 }}>
              {selectedProject.status} · {selectedProject.category.toUpperCase()}
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: 8 }}>{selectedProject.name}</h2>
            <div className="dm-card-sub" style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-4)' }}>📍 {selectedProject.location}</div>
            <p style={{ lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>{selectedProject.desc}</p>

            <div className="dm-modal-specs">
              <div><span>Configuration:</span> <strong>{selectedProject.units}</strong></div>
              <div><span>Price Range:</span> <strong style={{ color: '#0284c7' }}>{selectedProject.price}</strong></div>
              <div><span>RERA Registration:</span> <strong>{selectedProject.rera}</strong></div>
              <div><span>Target Handover:</span> <strong>{selectedProject.delivery}</strong></div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <button
                className="btn btn-sm"
                style={{ flex: 1, background: '#0284c7', color: '#fff' }}
                onClick={() => { setSelectedProject(null); setActivePage('contact'); }}
              >
                Enquire About This Project
              </button>
              <button className="btn btn-outline btn-sm" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
