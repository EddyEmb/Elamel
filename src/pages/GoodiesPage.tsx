import React, { useState, useMemo } from 'react';
import { GOODIES_PRODUCTS } from '../data/mockData';
import { GoodiesSubcategory, DietaryTag } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TreatBoxBuilder } from '../components/TreatBoxBuilder';
import { Cake, ShieldCheck, Heart, Sparkles, Filter, Search, Check } from 'lucide-react';

export const GoodiesPage: React.FC = () => {
  const [selectedSubcat, setSelectedSubcat] = useState<string>('All');
  const [selectedDiet, setSelectedDiet] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const subcategories: (GoodiesSubcategory | 'All')[] = [
    'All',
    'Family Cakes',
    'Cookies & Biscuits',
    'Occasion Treats',
    'Kids-Friendly Options'
  ];

  const dietaryFilters: (DietaryTag | 'All')[] = [
    'All',
    'Nut-Free',
    'Gluten-Free',
    'Vegetarian',
    'Organic'
  ];

  const filteredProducts = useMemo(() => {
    return GOODIES_PRODUCTS.filter((prod) => {
      const matchCat = selectedSubcat === 'All' || prod.subcategory === selectedSubcat;
      const matchDiet = selectedDiet === 'All' || prod.dietaryTags.includes(selectedDiet as DietaryTag);
      const matchText =
        prod.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        prod.flavorProfile.toLowerCase().includes(searchFilter.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchFilter.toLowerCase());
      return matchCat && matchDiet && matchText;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedSubcat, selectedDiet, searchFilter, sortBy]);

  return (
    <div className="goodies-page">
      <Breadcrumbs />

      {/* Page Hero Header */}
      <section className="category-hero-header goodies-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Cake size={14} /> elamel goodies
            </span>
            <h1 className="cat-page-title">Artisanal Family Cakes & Bakery Treats</h1>
            <p className="cat-page-lead">
              Honest, freshly baked celebrations made with pure butter, real Madagascar vanilla, and organic berries.
              Every treat is prepared with gentle sweetness, clear allergen warnings, and generous family portions.
            </p>

            <div className="cat-hero-badges-row">
              <div className="hero-pill-badge">
                <ShieldCheck size={16} color="#10B981" />
                <span>Dedicated Peanut-Free Kitchen</span>
              </div>
              <div className="hero-pill-badge">
                <Sparkles size={16} color="#F8971D" />
                <span>Certified Gluten-Free Options</span>
              </div>
              <div className="hero-pill-badge">
                <Heart size={16} color="#E1285B" />
                <span>Zero Artificial Preservatives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Controls */}
      <section className="section catalog-section">
        <div className="container">
          {/* Main Toolbar */}
          <div className="catalog-toolbar">
            {/* Category Tabs */}
            <div className="filter-tabs" role="tablist" aria-label="Goodies subcategories">
              {subcategories.map((subcat) => (
                <button
                  key={subcat}
                  role="tab"
                  aria-selected={selectedSubcat === subcat}
                  onClick={() => setSelectedSubcat(subcat)}
                  className={`filter-tab-btn ${selectedSubcat === subcat ? 'active' : ''}`}
                >
                  {subcat}
                </button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="toolbar-search-sort">
              <div className="search-input-wrapper">
                <Search size={16} className="search-field-icon" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="Search flavors, cakes..."
                  className="filter-search-input"
                  aria-label="Search bakery treats"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="sort-dropdown"
                aria-label="Sort products by"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Secondary Dietary Filter Bar */}
          <div className="dietary-filter-bar">
            <span className="diet-filter-label">
              <Filter size={14} /> Dietary & Allergen Filter:
            </span>
            <div className="diet-chips-wrap">
              {dietaryFilters.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDiet(diet)}
                  className={`diet-chip-btn ${selectedDiet === diet ? 'active' : ''}`}
                >
                  {selectedDiet === diet && <Check size={13} />}
                  {diet === 'All' ? 'All Diets' : diet}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="results-summary-row">
            <span className="results-count">
              Showing <strong>{filteredProducts.length}</strong> Bakery Treat{filteredProducts.length === 1 ? '' : 's'}
            </span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="no-results-box">
              <p>No bakery treats found matching your dietary filter or search.</p>
              <button
                onClick={() => {
                  setSelectedSubcat('All');
                  setSelectedDiet('All');
                  setSearchFilter('');
                }}
                className="btn btn-secondary btn-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}

          {/* Interactive Treat Box Builder Studio */}
          <TreatBoxBuilder />

          {/* Bakery Promise & Allergen Transparency Card */}
          <div className="bakery-standards-card">
            <div className="standards-header">
              <ShieldCheck size={28} color="#10B981" />
              <div>
                <h3 className="standards-title">Our Kitchen & Allergen Transparency Promise</h3>
                <p className="standards-sub">Every ingredient is clearly accounted for so families can celebrate with peace of mind.</p>
              </div>
            </div>

            <div className="standards-grid">
              <div className="standard-item">
                <strong>Natural Ingredients Only</strong>
                <p>We use real fruit purees (strawberries, raspberries, blueberries) and natural plant pigments (spirulina, turmeric, beetroot) for our vibrant pastel icings.</p>
              </div>
              <div className="standard-item">
                <strong>Peanut-Free Production</strong>
                <p>Our bakery facility is strictly 100% peanut-free. Any specialty items containing tree nuts (like almond flour in our fudge cake) are prepared in dedicated zones.</p>
              </div>
              <div className="standard-item">
                <strong>Gentle Sweetness for Little Ones</strong>
                <p>Our recipes use 30% less refined sugar than commercial bakeries, highlighting natural Madagascar vanilla, real dairy butter, and fresh seasonal fruits.</p>
              </div>
              <div className="standard-item">
                <strong>Fresh Daily Deliveries</strong>
                <p>Every cake and cookie box is baked and decorated within hours of dispatch to ensure optimal tenderness and crispness on your celebration table.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .goodies-hero {
          background: linear-gradient(135deg, rgba(248, 151, 29, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(254, 243, 199, 0.5) 100%);
        }
        .dietary-filter-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 0.75rem 1.25rem;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
          flex-wrap: wrap;
        }
        .diet-filter-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .diet-chips-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .diet-chip-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .diet-chip-btn:hover {
          border-color: var(--color-orange);
          color: var(--color-orange);
        }
        .diet-chip-btn.active {
          background: #FEF3C7;
          border-color: #F59E0B;
          color: #92400E;
          font-weight: 700;
        }
        .bakery-standards-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
          margin-top: 4rem;
        }
        .standards-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .standards-title {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .standards-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin: 0;
        }
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 2rem;
        }
        .standard-item strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .standard-item p {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        @media (max-width: 768px) {
          .cat-page-title { font-size: 2.1rem; }
          .catalog-toolbar { flex-direction: column; align-items: stretch; }
          .toolbar-search-sort { flex-direction: column; width: 100%; }
          .filter-search-input, .sort-dropdown { width: 100%; }
          .dietary-filter-bar { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
};
