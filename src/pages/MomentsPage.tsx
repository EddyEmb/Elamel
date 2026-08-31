import React, { useState } from 'react';
import { MOMENTS_PRODUCTS } from '../data/mockData';
import { MomentsSubcategory } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PersonalisationStudio } from '../components/PersonalisationStudio';
import { ProductCard } from '../components/ProductCard';
import { HeartHandshake, Sparkles, Heart, Star, ArrowDown } from 'lucide-react';

export const MomentsPage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');

  const thematicSections: { id: MomentsSubcategory | 'All'; title: string; subtitle: string }[] = [
    { id: 'All', title: 'All Personalised Keepsakes', subtitle: 'Explore our complete collection of custom family gifts.' },
    { id: 'Anniversary Moments', title: 'Anniversary & Couple Moments', subtitle: 'Commemorating milestones, wedding dates, and shared journeys.' },
    { id: 'Family Celebrations', title: 'Family Celebrations & Heirlooms', subtitle: 'Generational plates, newborn announcements, and family names.' },
    { id: 'Holiday Souvenirs', title: 'Holiday & Seasonal Souvenirs', subtitle: 'Annual traditions, custom ornaments, and festive memories.' }
  ];

  const filteredItems = selectedTheme === 'All'
    ? MOMENTS_PRODUCTS
    : MOMENTS_PRODUCTS.filter((m) => m.subcategory === selectedTheme);

  const scrollToStudio = () => {
    const el = document.getElementById('personalisation-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="moments-page">
      <Breadcrumbs />

      {/* Hero Header */}
      <section className="category-hero-header moments-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <HeartHandshake size={14} /> moments & souvenirs
            </span>
            <h1 className="cat-page-title">Personalised Keepsakes for Couples & Families</h1>
            <p className="cat-page-lead">
              Every family has a story worthy of remembrance. Our artisan studio hand-letters custom heirloom ceramic plates,
              anniversary mugs, and message cookie crates to celebrate your milestones.
            </p>

            <div className="moments-hero-actions">
              <button onClick={scrollToStudio} className="btn btn-primary btn-lg">
                <Sparkles size={18} /> Open Live Personalisation Studio <ArrowDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Storytelling Sections */}
      <section className="section moments-content-section">
        <div className="container">
          {/* Theme Toolbar */}
          <div className="catalog-toolbar" style={{ justifyContent: 'center' }}>
            <div className="filter-tabs" role="tablist" aria-label="Moments Themes">
              {thematicSections.map((theme) => (
                <button
                  key={theme.id}
                  role="tab"
                  aria-selected={selectedTheme === theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`filter-tab-btn ${selectedTheme === theme.id ? 'active' : ''}`}
                >
                  {theme.id === 'All' ? 'All Keepsakes' : theme.id}
                </button>
              ))}
            </div>
          </div>

          {/* Moments Product Catalog */}
          <div className="product-grid" style={{ marginBottom: '4rem' }}>
            {filteredItems.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

          {/* Interactive Live Studio Section */}
          <PersonalisationStudio />

          {/* Real Family Stories Grid */}
          <div className="family-stories-section">
            <div className="section-title-wrap">
              <span className="section-eyebrow">
                <Heart size={14} /> Shared Memories
              </span>
              <h2 className="section-title">Stories From Our Community</h2>
              <p className="section-subtitle">
                Discover how families and couples have turned simple moments into lasting traditions.
              </p>
            </div>

            <div className="stories-cards-grid">
              <div className="story-quote-card">
                <div className="story-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="#F8971D" color="#F8971D" />
                  ))}
                </div>
                <p className="story-quote-text">
                  "Seeing Grandma’s tears of joy when she unwrapped the family tree plate with all 8 grandchildren’s names hand-painted on the branches made our family reunion unforgettable. It is now the centerpiece of her dining room."
                </p>
                <div className="story-author-meta">
                  <div className="author-avatar-circle">M</div>
                  <div>
                    <strong>The Miller Family</strong>
                    <span>Grandmother’s 80th Birthday Celebration</span>
                  </div>
                </div>
              </div>

              <div className="story-quote-card">
                <div className="story-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="#F8971D" color="#F8971D" />
                  ))}
                </div>
                <p className="story-quote-text">
                  "My partner surprised me with a personalized cookie crate inscribed with the coordinates of the beach where we got engaged. The cookies were delicious and the wooden box now holds our keepsake photos!"
                </p>
                <div className="story-author-meta">
                  <div className="author-avatar-circle">C</div>
                  <div>
                    <strong>Carlos & Helena M.</strong>
                    <span>5th Wedding Anniversary</span>
                  </div>
                </div>
              </div>

              <div className="story-quote-card">
                <div className="story-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="#F8971D" color="#F8971D" />
                  ))}
                </div>
                <p className="story-quote-text">
                  "We have an annual tradition of ordering custom ceramic ornaments for our kids each Christmas. Watching them hang their own names on the tree brings back so many sweet memories from each year."
                </p>
                <div className="story-author-meta">
                  <div className="author-avatar-circle">H</div>
                  <div>
                    <strong>The Henderson Clan</strong>
                    <span>Holiday Family Tradition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keepsake Creation Steps */}
          <div className="how-it-works-banner">
            <h3 className="how-it-works-title">How Your Custom Keepsake is Created:</h3>
            <div className="how-steps-grid">
              <div className="how-step-item">
                <span className="how-step-num">1</span>
                <strong>Live Design Preview</strong>
                <p>Type your names and dates into our studio tool to see the live rendering.</p>
              </div>
              <div className="how-step-item">
                <span className="how-step-num">2</span>
                <strong>Artisan Hand-Lettering</strong>
                <p>Our studio ceramicists and pastry artists hand-inscribe your chosen words with fine glazes.</p>
              </div>
              <div className="how-step-item">
                <span className="how-step-num">3</span>
                <strong>Studio Kiln Curing</strong>
                <p>Ceramics are kiln-fired for durability; cookies are sealed fresh in food-safe parchment.</p>
              </div>
              <div className="how-step-item">
                <span className="how-step-num">4</span>
                <strong>Luxury Gift Delivery</strong>
                <p>Packed with satin ribbon, dried lavender sprigs, and greeting card, shipped safely to your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .moments-hero {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(240, 249, 255, 0.6) 100%);
        }
        .moments-hero-actions {
          margin-top: 1.5rem;
        }
        .moments-theme-tabs-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .family-stories-section {
          margin: 4.5rem 0;
        }
        .stories-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .story-quote-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .story-stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        .story-quote-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }
        .story-author-meta {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
        }
        .author-avatar-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .story-author-meta strong {
          display: block;
          font-size: 0.9375rem;
          color: var(--color-text-main);
        }
        .story-author-meta span {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .how-it-works-banner {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }
        .how-it-works-title {
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .how-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .how-step-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .how-step-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-rainbow);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: var(--shadow-sm);
        }
        .how-step-item strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .how-step-item p {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 992px) {
          .stories-cards-grid { grid-template-columns: 1fr; }
          .how-steps-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 640px) {
          .how-steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
