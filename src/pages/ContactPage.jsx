import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import siteConfig from '../data/site.config.js';
import './ContactPage.css';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const templateRef = searchParams.get('template') || '';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    message: templateRef ? `I'm interested in the ${templateRef} template. Please share more details.` : '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Hi DeccanIDentity Team!\n\nName: ${form.name}\nBusiness/Industry: ${form.industry || 'Not specified'}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nEnquiry Details:\n${form.message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  }

  return (
    <main className="page-content">
      <section className="contact-header section" aria-labelledby="contact-title">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="section-label">Connect With Us</div>
          <h1 id="contact-title" className="section-title">Get in Touch with DeccanIDentity</h1>
          <p className="section-sub">
            Whether you want a turnkey template showcase launch or custom enterprise software, our team at {siteConfig.companyLegalName} is ready to partner with you.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', marginTop: 'var(--space-8)' }}>
            {/* Form Column */}
            <div>
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">🎉</div>
                  <h2>Enquiry Received!</h2>
                  <p>Your message has been initiated via WhatsApp direct desk. We'll connect back with a customized preview and quotation within 24 hours.</p>
                  <button className="btn btn-primary" style={{ marginTop: 'var(--space-6)' }} onClick={() => setSubmitted(false)}>
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form" style={{ marginTop: 0 }}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="contact-name">Your Full Name *</label>
                      <input id="contact-name" name="name" type="text" className="input" required value={form.name} onChange={handleChange} placeholder="e.g. Ramesh Chandra" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="contact-phone">Phone / WhatsApp *</label>
                      <input id="contact-phone" name="phone" type="tel" className="input" required value={form.phone} onChange={handleChange} placeholder="+91 90000 00000" />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" name="email" type="email" className="input" value={form.email} onChange={handleChange} placeholder="name@company.com" />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-industry">Interested Industry / Template</label>
                    <select id="contact-industry" name="industry" className="input" value={form.industry} onChange={handleChange}>
                      <option value="">Select industry or service...</option>
                      <option>Real Estate – PlotMark (Plots Layout)</option>
                      <option>Real Estate – VillaMark (Luxury Villas)</option>
                      <option>Real Estate – FlatMark (Apartments)</option>
                      <option>Real Estate – DevMark (Corporate Builder)</option>
                      <option>Real Estate – LaunchMark (Landing Page)</option>
                      <option>Real Estate – PortalMark (Property Portal)</option>
                      <option>Healthcare & Hospitals</option>
                      <option>Education & Universities</option>
                      <option>Other Sectors / Customized Website</option>
                      <option>Custom Enterprise Web App / Portal</option>
                      <option>Startups & New Ventures</option>
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-message">Requirements & Project Scope</label>
                    <textarea id="contact-message" name="message" className="input contact-form__textarea" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us what you'd like to achieve, custom features, timeline..." />
                  </div>

                  <div className="contact-form__actions">
                    <button type="submit" className="btn btn-whatsapp btn-lg" style={{ flex: 1, justifyContent: 'center' }}>
                      💬 Send to WhatsApp Direct
                    </button>
                    <a
                      href={`mailto:${siteConfig.email}?subject=Website Enquiry${templateRef ? ` – ${templateRef}` : ''}&body=${encodeURIComponent(`Hi DeccanIDentity Team,\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`)}`}
                      className="btn btn-outline btn-lg"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      ✉ Send via Email
                    </a>
                  </div>

                  <p className="contact-form__note">
                    Prefer immediate assistance? Call us directly at <a href={`tel:${siteConfig.phone}`} style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{siteConfig.phone}</a>.
                  </p>
                </form>
              )}
            </div>

            {/* Corporate Location & Contact Details Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {/* Registered Office Card */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-3)' }}>
                  <img src={siteConfig.logoSymbol} alt="Logo" width="28" height="28" style={{ objectFit: 'contain' }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Registered Office</h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{siteConfig.companyLegalName}</div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                  📍 {siteConfig.registeredOffice.fullAddress} 🇮🇳
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.85rem' }}>
                  <div>
                    <strong style={{ color: 'var(--text-muted)' }}>Direct Phone: </strong>
                    <a href={`tel:${siteConfig.phone}`} style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>{siteConfig.phone}</a>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted)' }}>General Enquiries: </strong>
                    <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--text-primary)' }}>{siteConfig.email}</a>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted)' }}>Careers / Talent: </strong>
                    <a href={`mailto:${siteConfig.emailHr}`} style={{ color: 'var(--text-primary)' }}>{siteConfig.emailHr}</a>
                  </div>
                </div>
              </div>

              {/* Branch Offices */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 'var(--space-3)' }}>Branch Locations</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {siteConfig.branches.map(b => (
                    <div key={b.city} style={{ paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--brand-gold)', fontSize: '0.9rem' }}>{b.city} Office 🇮🇳</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: '2px 0 6px' }}>{b.address}</div>
                      <div style={{ fontSize: '0.8125rem' }}>
                        <a href={`tel:${b.phone}`} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>📞 {b.phone}</a> ·{' '}
                        <a href={b.whatsapp} target="_blank" rel="noreferrer" style={{ color: '#22c55e', fontWeight: 600 }}>WhatsApp Chat ↗</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
