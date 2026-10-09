import { useState } from 'react';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import '../plotmark/PlotMark.css';
import './PortalMark.css';

const PROPERTIES = [
  {
    id: 'pr1',
    title: 'Emerald Bay Luxury Villa',
    type: 'Villa',
    bhk: '4 BHK',
    price: '₹2.45 Cr',
    priceNum: 24500000,
    area: '3,200 Sq.Ft',
    location: 'Kokapet, Hyderabad',
    badge: 'Verified',
    agent: 'Kavita Reddy',
    agentPhone: '+91 98490 12345',
    furnishing: 'Semi-Furnished',
    parking: '2 Covered Cars',
    possession: 'Immediate',
    icon: '🏡',
    desc: 'Triplex independent villa overlooking natural lake. Premium Italian marble flooring and private terrace gazebo.'
  },
  {
    id: 'pr2',
    title: 'Skyline Pinnacle Penthouse',
    type: 'Apartment',
    bhk: '3 BHK',
    price: '₹1.60 Cr',
    priceNum: 16000000,
    area: '2,200 Sq.Ft',
    location: 'HITEC City, Hyderabad',
    badge: 'Featured',
    agent: 'Vikram Joshi',
    agentPhone: '+91 98490 54321',
    furnishing: 'Fully Furnished',
    parking: '2 Reserved',
    possession: 'Within 3 Months',
    icon: '🏢',
    desc: 'High-rise residence on 28th floor with panoramic city horizon views. Includes designer modular kitchen and false ceiling.'
  },
  {
    id: 'pr3',
    title: 'Green Meadows Gated Plot',
    type: 'Plot',
    bhk: 'N/A',
    price: '₹55 Lakhs',
    priceNum: 5500000,
    area: '200 Sq.Yards',
    location: 'Shankarpally Road',
    badge: 'HMDA Approved',
    agent: 'Kavita Reddy',
    agentPhone: '+91 98490 12345',
    furnishing: 'Clear Title',
    parking: '40 Ft Road',
    possession: 'Ready for Registration',
    icon: '📍',
    desc: 'East-facing corner plot in fully developed 40-acre gated layout with underground cabling, club and 24x7 security.'
  },
  {
    id: 'pr4',
    title: 'Cyber Towers Commercial Suite',
    type: 'Commercial',
    bhk: 'Office Space',
    price: '₹3.10 Cr',
    priceNum: 31000000,
    area: '2,800 Sq.Ft',
    location: 'Madhapur, Hyderabad',
    badge: 'Pre-Leased',
    agent: 'Vikram Joshi',
    agentPhone: '+91 98490 54321',
    furnishing: 'Plug & Play Fitted',
    parking: '3 Basement Bays',
    possession: 'Lease active (7.8% ROI)',
    icon: '🏬',
    desc: 'Grade-A tech park office leased to multinational fintech enterprise with 9-year long lease lock-in.'
  },
  {
    id: 'pr5',
    title: 'Suncrest Lakeview Apartment',
    type: 'Apartment',
    bhk: '2 BHK',
    price: '₹78 Lakhs',
    priceNum: 7800000,
    area: '1,250 Sq.Ft',
    location: 'Kollur, ORR Exit 2',
    badge: 'Under Construction',
    agent: 'Sanjay Nair',
    agentPhone: '+91 98490 98765',
    furnishing: 'Unfurnished',
    parking: '1 Covered',
    possession: 'Dec 2026',
    icon: '🏙️',
    desc: 'Modern 2 BHK flat near Outer Ring Road interchange. Loaded with 40+ clubhouse amenities, squash and pool.'
  },
  {
    id: 'pr6',
    title: 'Royal Palm Courtyard Villa',
    type: 'Villa',
    bhk: '3 BHK',
    price: '₹1.85 Cr',
    priceNum: 18500000,
    area: '2,600 Sq.Ft',
    location: 'Mokila, Hyderabad',
    badge: 'Ready to Move',
    agent: 'Sanjay Nair',
    agentPhone: '+91 98490 98765',
    furnishing: 'Semi-Furnished',
    parking: '2 Covered',
    possession: 'Immediate Handover',
    icon: '🏡',
    desc: 'Spacious contemporary villa with private lawn, solar heating system, EV charging point and servant quarters.'
  }
];

const AGENTS = [
  { name: 'Kavita Reddy', title: 'Senior Villa & Land Specialist', phone: '+91 98490 12345', email: 'kavita@portalmark.demo', deals: '48+ Deals Closed', exp: '8 Yrs Exp' },
  { name: 'Vikram Joshi', title: 'Commercial & High-Rise Consultant', phone: '+91 98490 54321', email: 'vikram@portalmark.demo', deals: '35+ Deals Closed', exp: '11 Yrs Exp' },
  { name: 'Sanjay Nair', title: 'Affordable & Mid-Segment Specialist', phone: '+91 98490 98765', email: 'sanjay@portalmark.demo', deals: '62+ Deals Closed', exp: '6 Yrs Exp' }
];

export default function PortalMarkDemo() {
  const [activeTab, setActiveTab] = useState('listings');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [bhkFilter, setBhkFilter] = useState('All');
  const [maxBudget, setMaxBudget] = useState(35000000);
  const [comparedIds, setComparedIds] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [savedIds, setSavedIds] = useState([]);
  const [contactModalProp, setContactModalProp] = useState(null);
  const [contactSuccess, setContactSuccess] = useState(false);

  const toggleCompare = (id, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (comparedIds.includes(id)) {
      setComparedIds(comparedIds.filter(x => x !== id));
    } else {
      if (comparedIds.length >= 3) {
        alert('You can compare maximum 3 properties at a time.');
        return;
      }
      setComparedIds([...comparedIds, id]);
    }
  };

  const toggleSave = (id, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter(x => x !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  };

  const filteredProperties = PROPERTIES.filter(p => {
    if (searchTerm && !p.title.toLowerCase().includes(searchTerm.toLowerCase()) && !p.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (typeFilter !== 'All' && p.type !== typeFilter) return false;
    if (bhkFilter !== 'All' && !p.bhk.includes(bhkFilter)) return false;
    if (p.priceNum > maxBudget) return false;
    return true;
  });

  const comparedProperties = PROPERTIES.filter(p => comparedIds.includes(p.id));

  return (
    <div className="pm-demo portal-demo">
      <DemoBar templateSlug="portal" templateName="PortalMark" label="🌐 PortalMark — Multi-Property Portal Live Demo" />

      {/* Header */}
      <nav className="pm-nav portal-nav" aria-label="Portal navigation">
        <div className="pm-nav__logo" style={{ color: '#7c3aed', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>🏢</span> PortalMark
        </div>
        <ul className="pm-nav__links">
          {['listings', 'compare', 'agents', 'about'].map(tab => (
            <li key={tab}>
              <button
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'compare' && comparedIds.length > 0 && ` (${comparedIds.length})`}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>❤️ Saved ({savedIds.length})</span>
          <button
            className="btn btn-sm"
            style={{ background: '#7c3aed', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '6px 14px' }}
            onClick={() => {
              if (comparedIds.length > 0) setActiveTab('compare');
              else alert('Select at least 1 property with the [Compare] checkbox below to view comparisons!');
            }}
          >
            Compare ({comparedIds.length}/3)
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {/* LISTINGS VIEW */}
        {activeTab === 'listings' && (
          <div className="container" style={{ padding: 'var(--space-8) var(--space-6)' }}>
            {/* Search and Filters Bar */}
            <div className="portal-filter-box">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', alignItems: 'flex-end' }}>
                <div>
                  <label className="portal-label">SEARCH LOCATION OR TITLE</label>
                  <input
                    type="text"
                    placeholder="e.g. Kokapet, Villa, Penthouse..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="portal-input"
                  />
                </div>
                <div>
                  <label className="portal-label">PROPERTY TYPE</label>
                  <select
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                    className="portal-input"
                  >
                    <option value="All">All Property Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Plot">Plotted Development</option>
                    <option value="Commercial">Commercial IT</option>
                  </select>
                </div>
                <div>
                  <label className="portal-label">BEDROOMS (BHK)</label>
                  <select
                    value={bhkFilter}
                    onChange={e => setBhkFilter(e.target.value)}
                    className="portal-input"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                  </select>
                </div>
                <div>
                  <label className="portal-label">
                    MAX BUDGET: ₹{(maxBudget / 10000000).toFixed(2)} Cr
                  </label>
                  <input
                    type="range"
                    min="5000000"
                    max="35000000"
                    step="2500000"
                    value={maxBudget}
                    onChange={e => setMaxBudget(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#7c3aed' }}
                  />
                </div>
              </div>
            </div>

            {/* Listings Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 12 }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {filteredProperties.length} Verified Properties Found
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#7c3aed', fontWeight: 600 }}>
                Tip: Click <strong>"Compare"</strong> on any property to compare side-by-side!
              </div>
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
              {filteredProperties.map(p => {
                const isCompared = comparedIds.includes(p.id);
                const isSaved = savedIds.includes(p.id);

                return (
                  <div
                    key={p.id}
                    className={`portal-card ${isCompared ? 'compared' : ''}`}
                    onClick={() => setSelectedProperty(p)}
                  >
                    {/* Visual header */}
                    <div className="portal-card-header">
                      <span style={{ fontSize: '3rem' }}>{p.icon}</span>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(124,58,237,0.2)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.3)' }}>
                          {p.badge}
                        </span>
                        <button
                          onClick={(e) => toggleSave(p.id, e)}
                          style={{ background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}
                        >
                          {isSaved ? '❤️' : '🤍'}
                        </button>
                      </div>
                    </div>

                    <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#7c3aed' }}>{p.price}</span>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 600 }}>{p.area}</span>
                      </div>
                      <h3 className="portal-card-title">{p.title}</h3>
                      <div className="portal-card-sub">📍 {p.location}</div>
                      <p className="portal-card-desc">{p.desc}</p>

                      <div className="portal-card-footer">
                        <label
                          onClick={e => e.stopPropagation()}
                          className="portal-compare-label"
                        >
                          <input
                            type="checkbox"
                            checked={isCompared}
                            onChange={(e) => toggleCompare(p.id, e)}
                            style={{ accentColor: '#7c3aed' }}
                          />
                          Compare
                        </label>

                        <button
                          className="btn btn-sm"
                          style={{ background: '#7c3aed', color: '#fff', borderRadius: 6 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setContactModalProp(p);
                          }}
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* COMPARE VIEW */}
        {activeTab === 'compare' && (
          <div className="container" style={{ padding: 'var(--space-8) var(--space-6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
              <div>
                <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Compare Properties ({comparedProperties.length}/3)</h1>
                <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Side-by-side comparison to help clients evaluate specs quickly.</p>
              </div>
              {comparedProperties.length > 0 && (
                <button className="btn btn-outline btn-sm" onClick={() => setComparedIds([])}>Clear All</button>
              )}
            </div>

            {comparedProperties.length === 0 ? (
              <div className="portal-empty-card">
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>⚖️</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>No Properties Selected for Comparison</h3>
                <p style={{ opacity: 0.8, marginBottom: 'var(--space-6)' }}>Go to the Listings tab and check the "Compare" box on up to 3 properties.</p>
                <button className="btn btn-primary" style={{ background: '#7c3aed' }} onClick={() => setActiveTab('listings')}>Browse Listings</button>
              </div>
            ) : (
              <div className="portal-table-wrap">
                <table className="portal-table">
                  <thead>
                    <tr className="portal-table-header">
                      <th style={{ width: 200 }}>ATTRIBUTE</th>
                      {comparedProperties.map(p => (
                        <th key={p.id} style={{ minWidth: 240 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{p.title}</span>
                            <button onClick={() => toggleCompare(p.id)} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Price', key: 'price', highlight: true },
                      { label: 'Typology', key: 'bhk' },
                      { label: 'Property Type', key: 'type' },
                      { label: 'Super Built-Up Area', key: 'area' },
                      { label: 'Location', key: 'location' },
                      { label: 'Furnishing Status', key: 'furnishing' },
                      { label: 'Car Parking', key: 'parking' },
                      { label: 'Possession', key: 'possession' },
                      { label: 'Assigned Agent', key: 'agent' }
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="attr-label">{row.label}</td>
                        {comparedProperties.map(p => (
                          <td key={p.id} className={row.highlight ? 'highlight-cell' : ''}>
                            {p[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* AGENTS VIEW */}
        {activeTab === 'agents' && (
          <div className="container" style={{ padding: 'var(--space-8) var(--space-6)' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>Our Certified Property Specialists</h1>
            <p style={{ opacity: 0.8, marginBottom: 'var(--space-8)' }}>Direct communication with experienced agents specializing in distinct micro-markets.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
              {AGENTS.map((ag, i) => (
                <div key={i} className="portal-agent-card">
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: 'var(--space-4)' }}>
                    {ag.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 2 }}>{ag.name}</h3>
                  <div style={{ color: '#7c3aed', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>{ag.title}</div>
                  <div style={{ display: 'flex', gap: 8, fontSize: '0.75rem', opacity: 0.8, marginBottom: 'var(--space-4)' }}>
                    <span>{ag.exp}</span> • <span>{ag.deals}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${ag.name}, I want to consult on properties listed on PortalMark.`)}`}
                      className="btn btn-sm"
                      style={{ background: '#25D366', color: '#fff', borderRadius: 6, textAlign: 'center' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT VIEW */}
        {activeTab === 'about' && (
          <div className="container" style={{ padding: 'var(--space-8) var(--space-6)', maxWidth: 800 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>About PortalMark</h1>
            <p style={{ lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 'var(--space-6)', opacity: 0.9 }}>
              PortalMark is a turnkey multi-listing digital portal designed for property brokers, real estate agencies, and regional aggregators. Featuring integrated filtering, comparison engines, and seamless WhatsApp lead distribution.
            </p>
          </div>
        )}
      </main>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)' }} onClick={() => setSelectedProperty(null)}>
          <div className="portal-modal" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProperty(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'inherit', opacity: 0.7, fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            <div style={{ fontSize: '3rem', marginBottom: 8 }}>{selectedProperty.icon}</div>
            <div style={{ fontSize: '0.8rem', color: '#7c3aed', fontWeight: 700, marginBottom: 6 }}>{selectedProperty.badge} · {selectedProperty.type}</div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: 4 }}>{selectedProperty.title}</h2>
            <div style={{ opacity: 0.8, marginBottom: 'var(--space-4)' }}>📍 {selectedProperty.location}</div>
            <p style={{ lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>{selectedProperty.desc}</p>

            <div className="portal-modal-specs">
              <div><span>Price:</span> <strong style={{ color: '#7c3aed' }}>{selectedProperty.price}</strong></div>
              <div><span>Area:</span> <strong>{selectedProperty.area}</strong></div>
              <div><span>Configuration:</span> <strong>{selectedProperty.bhk}</strong></div>
              <div><span>Possession:</span> <strong>{selectedProperty.possession}</strong></div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <button
                className="btn btn-sm"
                style={{ flex: 1, background: '#7c3aed', color: '#fff' }}
                onClick={() => { setSelectedProperty(null); setContactModalProp(selectedProperty); }}
              >
                Schedule Site Visit
              </button>
              <button className="btn btn-outline btn-sm" onClick={() => setSelectedProperty(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Enquiry Modal */}
      {contactModalProp && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)' }} onClick={() => { setContactModalProp(null); setContactSuccess(false); }}>
          <div className="portal-modal" style={{ maxWidth: 500 }} onClick={e => e.stopPropagation()}>
            <button onClick={() => { setContactModalProp(null); setContactSuccess(false); }} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'inherit', opacity: 0.7, fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>

            {contactSuccess ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 8 }}>✅</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a', marginBottom: 6 }}>Enquiry Received!</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 'var(--space-4)' }}>
                  Assigned agent <strong>{contactModalProp.agent}</strong> has received your interest for {contactModalProp.title} and will connect via WhatsApp shortly.
                </p>
                <button className="btn btn-outline btn-sm" onClick={() => { setContactModalProp(null); setContactSuccess(false); }}>Done</button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 4 }}>Enquire About {contactModalProp.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '0.85rem', marginBottom: 'var(--space-6)' }}>Assigned Agent: {contactModalProp.agent} ({contactModalProp.agentPhone})</p>

                <form onSubmit={e => { e.preventDefault(); setContactSuccess(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div>
                    <label className="portal-label">YOUR NAME *</label>
                    <input type="text" required placeholder="e.g. S. Murthy" className="portal-input" />
                  </div>
                  <div>
                    <label className="portal-label">PHONE NUMBER *</label>
                    <input type="tel" required placeholder="+91 98765 43210" className="portal-input" />
                  </div>
                  <button type="submit" className="btn" style={{ background: '#7c3aed', color: '#fff', borderRadius: 6, marginTop: 4 }}>
                    Connect With Agent
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
