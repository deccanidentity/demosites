import { useState } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import DemoBar from '../../components/DemoBar.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import '../plotmark/PlotMark.css';

const PRODUCTS = [
  { id: 'sh1', cat: 'Apparel', name: 'Raw Mulberry Silk Trench Coat', price: '₹14,500', icon: '🧥', stock: 'Only 3 Left', desc: 'Handwoven pure mulberry silk with structured notch lapels and natural horn buttons.' },
  { id: 'sh2', cat: 'Apparel', name: 'Linen Structured Overshirt', price: '₹5,800', icon: '👔', stock: 'In Stock', desc: '100% French organic linen tailored for relaxed everyday refinement.' },
  { id: 'sh3', cat: 'Handbags', name: 'Vachetta Leather Tote', price: '₹18,900', icon: '👜', stock: 'Limited Edition', desc: 'Vegetable-tanned full-grain Tuscan leather that patinas beautifully with time.' },
  { id: 'sh4', cat: 'Jewelry', name: 'Handcrafted Solitaire Cuff', price: '₹8,200', icon: '💍', stock: 'In Stock', desc: 'Recycled sterling silver cuff with 18k yellow gold vermeil finish.' },
  { id: 'sh5', cat: 'Footwear', name: 'Italian Calfskin Loafers', price: '₹12,400', icon: '👞', stock: 'Selling Fast', desc: 'Blake-stitched Italian leather sole with cushioned memory foam footbed.' },
  { id: 'sh6', cat: 'Jewelry', name: 'Pearl & Obsidian Choker', price: '₹6,500', icon: '✨', stock: 'In Stock', desc: 'Natural baroque freshwater pearls paired with raw cut volcanic obsidian.' },
];

export default function ShopMarkDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [catFilter, setCatFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartDrawer, setCartDrawer] = useState(false);
  const { theme } = useTheme();

  const filtered = catFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === catFilter);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setCartDrawer(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price.replace(/[^\d]/g, ''), 10), 0);

  return (
    <div className="pm-demo" style={{ background: theme === 'light' ? '#fff5f7' : '#14050d', color: theme === 'light' ? '#0f172a' : '#fdf2f8' }}>
      <DemoBar templateSlug="shopmark" templateName="ShopMark" label="🛍️ ShopMark — Modern Boutique & D2C Store Demo" />

      {/* Nav */}
      <nav className="pm-nav" style={{ background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(20, 5, 13, 0.95)', borderBottom: `1px solid ${theme === 'light' ? 'rgba(236,72,153,0.15)' : 'rgba(236,72,153,0.25)'}` }}>
        <div className="pm-nav__logo" style={{ color: '#ec4899', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '0.08em' }}>
          <span>✨</span> SHOPMARK STUDIO
        </div>
        <ul className="pm-nav__links">
          {['home', 'collections', 'lookbook', 'story', 'contact'].map(p => (
            <li key={p}>
              <button
                className={activeTab === p ? 'active' : ''}
                onClick={() => setActiveTab(p)}
                style={activeTab === p ? { color: '#ec4899', background: 'rgba(236,72,153,0.1)' } : {}}
              >
                {p.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-sm" style={{ background: '#ec4899', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 600 }} onClick={() => setCartDrawer(true)}>
            🛍️ Bag ({cart.length})
          </button>
        </div>
      </nav>

      <main className="pm-main">
        {activeTab === 'home' && (
          <div>
            {/* Hero */}
            <section style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', background: theme === 'light' ? 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #ffffff 100%)' : 'radial-gradient(ellipse at 70% 30%, rgba(236,72,153,0.2), transparent 70%), linear-gradient(180deg, #14050d 0%, #070104 100%)', position: 'relative' }}>
              <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
                <div className="badge" style={{ background: 'rgba(236,72,153,0.15)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.3)', marginBottom: 'var(--space-4)', display: 'inline-flex', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: 700 }}>
                  ✨ AUTUMN / WINTER 2026 CAPSULE COLLECTION
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-4)', color: theme === 'light' ? '#0f172a' : '#fff' }}>
                  Artisanal Luxury.<br />
                  <span style={{ color: '#ec4899' }}>Designed to Endure.</span>
                </h1>
                <p style={{ fontSize: '1.15rem', color: theme === 'light' ? '#475569' : '#fbcfe8', maxWidth: 540, marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                  Thoughtfully tailored silhouettes, ethically sourced organic textiles, and timeless modern heirlooms crafted in limited micro-batches.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <button className="btn btn-lg" style={{ background: '#ec4899', color: '#fff', borderRadius: 'var(--radius-pill)', fontWeight: 700 }} onClick={() => setActiveTab('collections')}>
                    Shop The New Collection
                  </button>
                  <button className="btn btn-outline btn-lg" onClick={() => setActiveTab('lookbook')}>
                    View Editorial Lookbook
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* COLLECTIONS VIEW */}
        {activeTab === 'collections' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">The Curated Collection</h2>
            <div style={{ display: 'flex', gap: 8, marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
              {['All', 'Apparel', 'Handbags', 'Jewelry', 'Footwear'].map(cat => (
                <button
                  key={cat}
                  className={`chip ${catFilter === cat ? 'active' : ''}`}
                  onClick={() => setCatFilter(cat)}
                  style={catFilter === cat ? { background: '#ec4899', borderColor: '#ec4899', color: '#fff' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="pm-grid-3">
              {filtered.map(p => (
                <div key={p.id} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
                  <div style={{ fontSize: '3rem', textAlign: 'center', padding: '24px 0', background: theme === 'light' ? '#fdf2f8' : 'rgba(236,72,153,0.05)', borderRadius: 'var(--radius-md)', marginBottom: 12 }}>
                    {p.icon}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.75rem', color: '#ec4899', fontWeight: 700, textTransform: 'uppercase' }}>{p.cat}</span>
                    <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 600 }}>{p.stock}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ color: theme === 'light' ? '#64748b' : '#fbcfe8', fontSize: '0.85rem', marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ec4899' }}>{p.price}</div>
                    <button className="btn btn-primary btn-sm" style={{ background: '#ec4899', borderColor: '#ec4899' }} onClick={() => addToCart(p)}>
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LOOKBOOK VIEW */}
        {activeTab === 'lookbook' && (
          <section className="pm-section container">
            <h2 className="pm-section__title">Editorial Lookbook: Volume IV</h2>
            <div className="pm-grid-2">
              {[
                { title: 'Golden Hour Silhouettes', desc: 'Flowing natural mulberry silks meeting structured wool coats under Mediterranean twilight.' },
                { title: 'The Minimalist Wardrobe', desc: 'Curated 7-piece everyday capsule essentials crafted for effortless day-to-evening transitions.' },
              ].map(lb => (
                <div key={lb.title} className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>📷</div>
                  <h3 style={{ fontSize: '1.25rem', color: theme === 'light' ? '#0f172a' : '#fff', marginBottom: 8 }}>{lb.title}</h3>
                  <p style={{ color: theme === 'light' ? '#64748b' : '#fbcfe8', marginBottom: 16 }}>{lb.desc}</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setActiveTab('collections')}>
                    Shop The Edit →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* STORY VIEW */}
        {activeTab === 'story' && (
          <div className="pm-section container" style={{ maxWidth: 640 }}>
            <h2 className="pm-section__title">The ShopMark Philosophy</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)', lineHeight: 1.8 }}>
              <p>Founded on the belief that fashion should be enduring, thoughtful, and deeply personal. We collaborate directly with master textile weavers across South India and Italian tanneries to produce small-batch heirlooms designed to be cherished for decades.</p>
            </div>
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pm-section container" style={{ maxWidth: 600 }}>
            <h2 className="pm-section__title">Flagship Boutique & Concierge</h2>
            <div className="pm-highlight-card" style={{ background: theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)' }}>
              <p>📍 <strong>Flagship Studio:</strong> ShopMark Atelier, Banjara Hills Road No. 10, Hyderabad</p>
              <p>📞 <strong>VIP Styling Concierge:</strong> {siteConfig.phone}</p>
              <p>💬 <strong>WhatsApp Order Desk:</strong> Available Mon - Sat</p>
            </div>
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {cartDrawer && (
        <div className="plot-modal-overlay" onClick={() => setCartDrawer(false)}>
          <div className="plot-modal" onClick={e => e.stopPropagation()} style={{ background: theme === 'light' ? '#ffffff' : '#220816', color: theme === 'light' ? '#0f172a' : '#fff', maxWidth: 440 }}>
            <button className="plot-modal__close" onClick={() => setCartDrawer(false)}>×</button>
            <h3>Shopping Bag ({cart.length})</h3>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🛍️</div>
                <p style={{ color: theme === 'light' ? '#64748b' : '#fbcfe8' }}>Your shopping bag is currently empty.</p>
                <button className="btn btn-outline" style={{ marginTop: 12 }} onClick={() => { setCartDrawer(false); setActiveTab('collections'); }}>
                  Explore Collections
                </button>
              </div>
            ) : (
              <div>
                <div style={{ maxHeight: 260, overflowY: 'auto', margin: '16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {cart.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: theme === 'light' ? '#fdf2f8' : 'rgba(255,255,255,0.04)', borderRadius: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.name}</div>
                          <div style={{ fontSize: '0.75rem', color: '#ec4899', fontWeight: 700 }}>{item.price}</div>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(idx)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '1.1rem' }}>×</button>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: `1px solid ${theme === 'light' ? '#f1f5f9' : 'rgba(255,255,255,0.1)'}`, paddingTop: 14, marginBottom: 16, display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                  <span>Subtotal:</span>
                  <span style={{ color: '#ec4899', fontSize: '1.25rem' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ShopMark! I would like to order: ${cart.map(c => c.name).join(', ')} (Total: ₹${totalPrice.toLocaleString('en-IN')}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', background: '#25D366', borderColor: '#25D366', color: '#fff' }}
                >
                  💬 1-Click WhatsApp Checkout
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pm-footer" style={{ background: theme === 'light' ? '#ffffff' : '#14050d', borderTopColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : undefined }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#ec4899' }}>ShopMark Atelier</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Modern Boutique & D2C Store</div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Demo Template by <Link to="/" style={{ color: 'var(--brand-gold)' }}>DeccanIDentity</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
