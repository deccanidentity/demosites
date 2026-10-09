import { useNavigate } from 'react-router-dom';
import packages from '../data/packages.js';
import siteConfig from '../data/site.config.js';
import './PricingPage.css';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <main className="page-content">
      <section className="pricing-header section" aria-labelledby="pricing-title">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Transparent Pricing</div>
          <h1 id="pricing-title" className="section-title">Website Packages</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            One pricing system, every industry. Real Estate, Healthcare, Education — same tiers, purpose-built features.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-grid">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`pkg-card ${pkg.highlight ? 'pkg-card--active' : ''}`}
              >
                {pkg.badge && (
                  <div className="pkg-card__badge">{pkg.badge}</div>
                )}
                <div className="pkg-card__name">{pkg.name}</div>
                <div className="pkg-card__price">{pkg.priceLabel}</div>
                {pkg.pages && (
                  <div className="pkg-card__pages">{pkg.pages} Pages included</div>
                )}
                <p className="pkg-card__desc">{pkg.description}</p>
                <ul className="pkg-card__features">
                  {pkg.features.map(f => (
                    <li key={f}>
                      <span className="pkg-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package (${pkg.priceLabel}). Please share more details.`)}`}
                  className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pkg.highlight ? '💬 Get Started' : 'Enquire Now'}
                </a>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="pricing-note">
            <span>💡</span>
            <span>All prices are one-time development costs. Hosting is separate and typically ₹1,500–₹5,000/year. GST as applicable. Need a custom quote? <button className="ind-coming-soon__link" onClick={() => navigate('/contact')}>Contact us</button>.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pricing-faq" aria-labelledby="faq-title">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 id="faq-title" className="section-title" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-8)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'Is this a one-time cost or a subscription?', a: 'All packages are one-time development costs. You own the website. The only recurring cost is domain + hosting, which is typically ₹1,500–₹5,000/year.' },
            { q: 'How long does delivery take?', a: 'Starter and Basic: 3–5 working days. Business and Professional: 7–14 days. Premium and Enterprise: customized timeline based on scope.' },
            { q: 'What do I need to provide?', a: 'Business name, logo (or we help create one), photos, content/text, and your preferred contact number and email. We guide you through all of this.' },
            { q: 'Can I upgrade to a higher package later?', a: 'Yes. You can upgrade at any time and we\'ll apply the price difference.' },
            { q: 'Do the templates work on mobile?', a: 'Yes. All templates are fully mobile-responsive and tested on iOS and Android.' },
            { q: 'What about the live demos on this site?', a: 'Everything on this showcase site uses demo/placeholder data. Your actual website will use your real business information, photos, and content.' },
          ].map(item => (
            <details key={item.q} className="faq-item">
              <summary className="faq-item__q">{item.q}</summary>
              <p className="faq-item__a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
