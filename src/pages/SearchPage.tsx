import React, { useState, useMemo, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { getLocalizedAllProducts } from '../data/mockData';
import { useI18n } from '../context/I18nContext';
import { Search, Sparkles } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const { t, locale, formatCurrency } = useI18n();

  const getQueryFromUrl = () => {
    if (typeof window === 'undefined') return '';
    const searchPart = window.location.hash.split('?')[1] || window.location.search.replace(/^\?/, '');
    const params = new URLSearchParams(searchPart);
    return params.get('q') || '';
  };

  const [searchTerm, setSearchTerm] = useState(getQueryFromUrl);
  const [selectedCat, setSelectedCat] = useState<'all' | 'colors' | 'goodies' | 'moments'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(60);
  const [sortBy, setSortBy] = useState<'match' | 'price-asc' | 'price-desc' | 'rating'>('match');

  const allProducts = getLocalizedAllProducts(locale);

  useEffect(() => {
    setSearchTerm(getQueryFromUrl());
  }, []);

  const results = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();

    return allProducts.filter((prod) => {
      const matchCat = selectedCat === 'all' || prod.category === selectedCat;
      const matchPrice = prod.price <= maxPrice;
      const matchQuery =
        !q ||
        prod.name.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.subcategory.toLowerCase().includes(q) ||
        prod.tags.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchPrice && matchQuery;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [allProducts, searchTerm, selectedCat, maxPrice, sortBy]);

  return (
    <div className="search-page">
      <Breadcrumbs />

      <section className="category-hero-header search-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Search size={14} /> {t('nav.search')}
            </span>
            <h1 className="cat-page-title">{locale === 'pt' ? 'Explorar Todo o Catálogo Elamel' : 'Explore All Elamel Kits, Treats & Keepsakes'}</h1>
            <p className="cat-page-lead">
              {locale === 'pt' ? 'Encontre de imediato conjuntos de cerâmica, bolos artesanais, biscoitos e lembranças personalizadas.' : 'Instantly find ceramic painting sets, bakery cakes, cookies, and personalized gifts.'}
            </p>

            <div className="search-page-input-wrap">
              <Search size={20} className="search-bar-icon" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('common.searchPlaceholder')}
                className="search-bar-input"
                aria-label="Search all products"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="search-clear-btn"
                  aria-label={t('common.clear')}
                >
                  {t('common.clear')}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section search-results-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="catalog-toolbar">
            {/* Category Filter */}
            <div className="filter-tabs" role="tablist" aria-label="Search category filters">
              <button
                role="tab"
                aria-selected={selectedCat === 'all'}
                onClick={() => setSelectedCat('all')}
                className={`filter-tab-btn ${selectedCat === 'all' ? 'active' : ''}`}
              >
                {t('common.all')}
              </button>
              <button
                role="tab"
                aria-selected={selectedCat === 'colors'}
                onClick={() => setSelectedCat('colors')}
                className={`filter-tab-btn ${selectedCat === 'colors' ? 'active' : ''}`}
              >
                {t('brand.subbrands.colors')}
              </button>
              <button
                role="tab"
                aria-selected={selectedCat === 'goodies'}
                onClick={() => setSelectedCat('goodies')}
                className={`filter-tab-btn ${selectedCat === 'goodies' ? 'active' : ''}`}
              >
                {t('brand.subbrands.goodies')}
              </button>
              <button
                role="tab"
                aria-selected={selectedCat === 'moments'}
                onClick={() => setSelectedCat('moments')}
                className={`filter-tab-btn ${selectedCat === 'moments' ? 'active' : ''}`}
              >
                {t('brand.subbrands.moments')}
              </button>
            </div>

            {/* Price & Sort Controls */}
            <div className="search-side-controls">
              <div className="price-slider-wrap">
                <label className="price-slider-label">
                  {locale === 'pt' ? 'Preço Máx:' : 'Max Price:'} <strong>{formatCurrency(maxPrice)}</strong>
                </label>
                <input
                  type="range"
                  min={15}
                  max={60}
                  step={5}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="price-range-slider"
                  aria-label="Filter maximum price"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="sort-dropdown"
                aria-label="Sort search results"
              >
                <option value="match">{locale === 'pt' ? 'Melhor Correspondência' : 'Best Match'}</option>
                <option value="price-asc">{t('common.priceLowHigh')}</option>
                <option value="price-desc">{t('common.priceHighLow')}</option>
                <option value="rating">{locale === 'pt' ? 'Melhor Avaliados' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="search-results-summary">
            <span>
              {locale === 'pt' ? (
                <>Encontrados <strong>{results.length}</strong> artigo(s) correspondente(s){searchTerm && <span> para "<em>{searchTerm}</em>"</span>}</>
              ) : (
                <>Found <strong>{results.length}</strong> matching item{results.length === 1 ? '' : 's'}{searchTerm && <span> for "<em>{searchTerm}</em>"</span>}</>
              )}
            </span>
          </div>

          {/* Grid */}
          {results.length === 0 ? (
            <div className="search-empty-state">
              <Sparkles size={48} color="#CBD5E1" />
              <h3>{locale === 'pt' ? 'Nenhum artigo encontrado com os filtros actuais' : 'No items found matching your criteria'}</h3>
              <p>{locale === 'pt' ? 'Experimente limpar as palavras-chave ou aumentar o filtro de preço máximo.' : 'Try clearing your keywords or expanding your maximum price filter.'}</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCat('all');
                  setMaxPrice(60);
                }}
                className="btn btn-primary"
              >
                {t('common.clearFilters')}
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {results.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .search-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(248, 151, 29, 0.08) 50%, rgba(225, 40, 91, 0.08) 100%);
        }
        .search-page-input-wrap {
          position: relative;
          max-width: 600px;
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
        }
        .search-bar-icon {
          position: absolute;
          left: 1.25rem;
          color: var(--color-primary);
        }
        .search-bar-input {
          width: 100%;
          padding: 1.1rem 3.5rem 1.1rem 3.25rem;
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-text-main);
          background: #FFFFFF;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-md);
        }
        .search-bar-input:focus {
          border-color: var(--color-primary);
          outline: none;
          box-shadow: 0 0 0 4px rgba(225, 40, 91, 0.15);
        }
        .search-clear-btn {
          position: absolute;
          right: 1.25rem;
          background: none;
          border: none;
          color: var(--color-text-light);
          font-weight: 600;
          cursor: pointer;
        }
        .search-filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .search-side-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .price-slider-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFFFF;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }
        .price-slider-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          white-space: nowrap;
        }
        .price-range-slider {
          width: 100px;
          accent-color: var(--color-primary);
          cursor: pointer;
        }
        .search-results-summary {
          margin-bottom: 2rem;
          font-size: 1rem;
          color: var(--color-text-muted);
        }
        .search-empty-state {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 4rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .search-filters-bar { flex-direction: column; align-items: stretch; }
          .search-side-controls { flex-direction: column; }
          .price-slider-wrap { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </div>
  );
};
