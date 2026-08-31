import React, { useState, useMemo } from 'react';
import { getLocalizedColorProducts } from '../data/mockData';
import { useI18n } from '../context/I18nContext';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlazeStudio } from '../components/GlazeStudio';
import { Palette, ShieldCheck, Sparkles, Search, Info } from 'lucide-react';

export const ColorsPage: React.FC = () => {
  const { t, locale } = useI18n();
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const colorProducts = getLocalizedColorProducts(locale);

  const subcategoryTabs = useMemo(() => {
    return [
      { id: 'all', label: t('common.all') },
      { id: 'Tableware Colors', label: locale === 'pt' ? 'Loiça em Cerâmica' : 'Tableware Colors' },
      { id: 'Kids & Family Kits', label: locale === 'pt' ? 'Infantil & Figuras' : 'Kids & Animals' },
      { id: 'Gift Sets', label: locale === 'pt' ? 'Conjuntos Presente' : 'Gift Sets' },
      { id: 'Decorative Pieces', label: locale === 'pt' ? 'Peças Decorativas' : 'Decorative Pieces' }
    ];
  }, [t, locale]);

  const filteredProducts = useMemo(() => {
    return colorProducts.filter((prod) => {
      const matchCat =
        selectedSubcat === 'all' ||
        prod.subcategory.toLowerCase().includes(selectedSubcat.toLowerCase()) ||
        (selectedSubcat === 'Kids & Family Kits' && (prod.subcategory.includes('Infantil') || prod.subcategory.includes('Kids')));
      const matchText =
        prod.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchFilter.toLowerCase());
      return matchCat && matchText;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [colorProducts, selectedSubcat, searchFilter, sortBy]);

  return (
    <div className="colors-page">
      <Breadcrumbs />

      {/* Page Hero Header */}
      <section className="category-hero-header">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Palette size={14} /> {t('brand.subbrands.colors')}
            </span>
            <h1 className="cat-page-title">{t('colors.title')}</h1>
            <p className="cat-page-lead">
              {t('colors.subtitle')}
            </p>

            <div className="cat-hero-badges-row">
              <div className="hero-pill-badge">
                <ShieldCheck size={16} color="#10B981" />
                <span>{t('colors.highlights.nonToxic')}</span>
              </div>
              <div className="hero-pill-badge">
                <Sparkles size={16} color="#F8971D" />
                <span>{t('colors.highlights.foodSafe')}</span>
              </div>
              <div className="hero-pill-badge">
                <Info size={16} color="#0284C7" />
                <span>{t('colors.highlights.easyCure')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog & Filter Bar */}
      <section className="section catalog-section">
        <div className="container">
          {/* Controls Bar */}
          <div className="catalog-toolbar">
            {/* Subcategory Tabs */}
            <div className="filter-tabs" role="tablist" aria-label="Ceramic subcategories">
              {subcategoryTabs.map((subcat) => (
                <button
                  key={subcat.id}
                  role="tab"
                  aria-selected={selectedSubcat === subcat.id}
                  onClick={() => setSelectedSubcat(subcat.id)}
                  className={`filter-tab-btn ${selectedSubcat === subcat.id ? 'active' : ''}`}
                >
                  {subcat.label}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="toolbar-search-sort">
              <div className="search-input-wrapper">
                <Search size={16} className="search-field-icon" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder={t('common.searchPlaceholder')}
                  className="filter-search-input"
                  aria-label="Filter ceramic kits"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="sort-dropdown"
                aria-label="Sort products by"
              >
                <option value="featured">{locale === 'pt' ? 'Destaques Primeiro' : 'Featured First'}</option>
                <option value="price-asc">{t('common.priceLowHigh')}</option>
                <option value="price-desc">{t('common.priceHighLow')}</option>
                <option value="rating">{locale === 'pt' ? 'Melhor Avaliados' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="results-summary-row">
            <span className="results-count">
              {locale === 'pt'
                ? <>A apresentar <strong>{filteredProducts.length}</strong> kit(s) de cerâmica</>
                : <>Showing <strong>{filteredProducts.length}</strong> Ceramic Kit{filteredProducts.length === 1 ? '' : 's'}</>}
            </span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="no-results-box">
              <p>{locale === 'pt' ? 'Não foram encontrados conjuntos de cerâmica com o filtro actual.' : 'No ceramic kits found matching your current filter.'}</p>
              <button
                onClick={() => {
                  setSelectedSubcat('all');
                  setSearchFilter('');
                }}
                className="btn btn-secondary btn-sm"
              >
                {t('common.clearFilters')}
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}

          {/* Interactive Ceramic Glaze Studio */}
          <GlazeStudio />

          {/* Ceramic Safety & Fragility Guidelines */}
          <div className="ceramic-safety-guide-card">
            <div className="safety-guide-header">
              <ShieldCheck size={26} color="#10B981" />
              <div>
                <h3 className="safety-guide-title">{locale === 'pt' ? 'Normas de Segurança & Cuidados com a Cerâmica' : 'Ceramic Craft Safety & Care Guidelines'}</h3>
                <p className="safety-guide-sub">{locale === 'pt' ? 'Damos prioridade à segurança infantil, higiene alimentar e memórias duradouras.' : 'We prioritize child safety, hygiene, and lasting family memories.'}</p>
              </div>
            </div>

            <div className="safety-guide-grid">
              <div className="guide-point">
                <strong>{locale === 'pt' ? 'Certificação Não-Tóxica' : 'Non-Toxic Certification'}</strong>
                <p>{locale === 'pt' ? 'Todos os vidrados minerais cumprem as directivas europeias de segurança para brinquedos (EN71-3, ASTM D-4236). Isentos de chumbo, cádmio e compostos orgânicos voláteis.' : 'All mineral glazes comply with international toy and craft safety standards (EN71-3, ASTM D-4236). Free of lead, cadmium, and volatile organic compounds.'}</p>
              </div>
              <div className="guide-point">
                <strong>{locale === 'pt' ? 'Cura Simples no Forno Doméstico' : 'Simple Home Oven Curing'}</strong>
                <p>{locale === 'pt' ? 'Basta levar as suas peças pintadas ao forno convencional a 150°C durante 35 minutos para fixar definitivamente os vidrados vitrificados.' : 'Bake your painted pottery in your regular home oven at 150°C (300°F) for 35 minutes to permanently bond the vibrant colors.'}</p>
              </div>
              <div className="guide-point">
                <strong>{locale === 'pt' ? 'Utilização Quotidiana à Mesa' : 'Everyday Dining & Care'}</strong>
                <p>{locale === 'pt' ? 'Após a cozedura, a loiça é resistente à água e segura para contacto com alimentos. A lavagem manual com esponja macia preserva o brilho durante décadas.' : 'Once cured, dinnerware items are water-resistant and food-safe. Hand-washing with a soft sponge preserves the luster for generations.'}</p>
              </div>
              <div className="guide-point">
                <strong>{locale === 'pt' ? 'Idades Recomendadas' : 'Recommended Age Guidance'}</strong>
                <p>{locale === 'pt' ? 'Crianças com menos de 6 anos devem ser acompanhadas por um adulto. Para bebés e crianças pequeninas, recomendamos os kits de figuras robustas de animais.' : 'Kids under 6 should be supervised around ceramicware. For toddlers, we recommend our sturdy thick-walled animal figurine kits.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .category-hero-header {
          background: var(--gradient-rainbow-subtle);
          padding: 3rem 0 2.5rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .cat-hero-inner {
          max-width: 780px;
        }
        .cat-page-title {
          font-size: 2.75rem;
          margin-bottom: 0.75rem;
        }
        .cat-page-lead {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .cat-hero-badges-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          box-shadow: var(--shadow-sm);
        }
        .catalog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .toolbar-search-sort {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .ceramic-safety-guide-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
          margin-top: 4rem;
        }
        .safety-guide-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .safety-guide-title {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .safety-guide-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin: 0;
        }
        .safety-guide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 2rem;
        }
        .guide-point strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .guide-point p {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .cat-page-title { font-size: 2.1rem; }
          .catalog-toolbar { flex-direction: column; align-items: stretch; }
          .toolbar-search-sort { flex-direction: column; }
          .filter-search-input, .sort-dropdown { width: 100%; }
        }
      `}</style>
    </div>
  );
};
