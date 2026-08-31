import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { ALL_PRODUCTS } from '../data/mockData';
import { Search, X, ChevronRight, Tag, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { navigate, openProductModal } = useRouter();
  const { t, formatCurrency, locale } = useI18n();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'colors' | 'goodies' | 'moments'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return activeCategory === 'all'
        ? ALL_PRODUCTS.slice(0, 6)
        : ALL_PRODUCTS.filter((p) => p.category === activeCategory).slice(0, 6);
    }

    const q = query.toLowerCase();
    return ALL_PRODUCTS.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchText =
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchText;
    });
  }, [query, activeCategory]);

  if (!isOpen) return null;

  const handleSelectProduct = (id: string) => {
    onClose();
    openProductModal(id);
  };

  const handleViewAllInSearchPage = () => {
    onClose();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="modal-backdrop search-modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog search-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.search')}
      >
        {/* Search Input Header */}
        <div className="search-modal-header">
          <Search size={22} className="search-input-icon" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('common.searchPlaceholder')}
            className="search-modal-input"
            autoFocus
            aria-label="Search catalog query input"
          />
          <button onClick={onClose} className="btn-icon" aria-label={t('common.close')}>
            <X size={20} />
          </button>
        </div>

        {/* Category Filters in Search */}
        <div className="search-categories-bar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`search-filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
          >
            {t('common.all')} ({ALL_PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveCategory('colors')}
            className={`search-filter-pill ${activeCategory === 'colors' ? 'active' : ''}`}
          >
            {t('brand.subbrands.colors')}
          </button>
          <button
            onClick={() => setActiveCategory('goodies')}
            className={`search-filter-pill ${activeCategory === 'goodies' ? 'active' : ''}`}
          >
            {t('brand.subbrands.goodies')}
          </button>
          <button
            onClick={() => setActiveCategory('moments')}
            className={`search-filter-pill ${activeCategory === 'moments' ? 'active' : ''}`}
          >
            {t('brand.subbrands.moments')}
          </button>
        </div>

        {/* Results List */}
        <div className="search-results-container">
          <div className="search-results-header">
            <span className="results-count-text">
              {query
                ? (locale === 'pt' ? `Encontrados ${results.length} resultado(s) para "${query}"` : `Found ${results.length} results for "${query}"`)
                : (locale === 'pt' ? 'Sugestões Populares e Kits em Destaque' : 'Popular Suggestions & Featured Kits')}
            </span>
          </div>

          {results.length === 0 ? (
            <div className="search-no-results">
              <Sparkles size={36} color="#CBD5E1" />
              <p>{locale === 'pt' ? 'Não foram encontrados produtos correspondentes à sua pesquisa.' : 'No products found matching your search.'}</p>
              <span className="sub-hint">{locale === 'pt' ? 'Experimente pesquisar por "prato", "bolo", "caneca", ou "lembrança".' : 'Try searching for "plate", "cake", "mug", or "gift".'}</span>
            </div>
          ) : (
            <div className="search-results-list">
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectProduct(item.id)}
                  className="search-result-item"
                >
                  <img src={item.image} alt={item.name} className="search-thumb" />
                  <div className="search-item-info">
                    <div className="search-item-title-row">
                      <strong className="search-item-title">{item.name}</strong>
                      <span className="search-item-cat-badge">{item.subcategory}</span>
                    </div>
                    <p className="search-item-desc">{item.description}</p>
                    <div className="search-item-footer">
                      <span className="search-price">{formatCurrency(item.price)}</span>
                      <span className="search-tag-sample">
                        <Tag size={12} /> {item.tags[0]}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="search-arrow-icon" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Modal Footer */}
        {query && (
          <div className="search-modal-footer">
            <button
              onClick={handleViewAllInSearchPage}
              className="btn btn-secondary btn-full-width"
            >
              {locale === 'pt' ? 'Ver Todos os Resultados com Filtros Avançados' : 'Open Full Search Page with Advanced Filters'}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .search-modal-backdrop {
          align-items: flex-start;
          padding-top: 8vh;
        }
        .search-dialog {
          max-width: 680px;
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        .search-modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
          background: #FFFFFF;
        }
        .search-input-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .search-modal-input {
          flex-grow: 1;
          border: none;
          background: transparent;
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-text-main);
          outline: none;
        }
        .search-categories-bar {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--color-bg-subtle);
          border-bottom: 1px solid var(--color-border-light);
          overflow-x: auto;
        }
        .search-filter-pill {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.35rem 0.85rem;
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          white-space: nowrap;
        }
        .search-filter-pill.active {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .search-results-container {
          padding: 1.25rem 1.5rem;
          max-height: 480px;
          overflow-y: auto;
        }
        .search-results-header {
          margin-bottom: 0.75rem;
        }
        .results-count-text {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          font-weight: 600;
          text-transform: uppercase;
        }
        .search-results-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          background: #FFFFFF;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: all var(--transition-fast);
        }
        .search-result-item:hover {
          background: var(--color-primary-light);
          border-color: rgba(225, 40, 91, 0.2);
        }
        .search-thumb {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .search-item-info {
          flex-grow: 1;
          overflow: hidden;
        }
        .search-item-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }
        .search-item-title {
          font-size: 0.95rem;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .search-item-cat-badge {
          font-size: 0.6875rem;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          flex-shrink: 0;
        }
        .search-item-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .search-item-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .search-price {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
        }
        .search-tag-sample {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .search-arrow-icon {
          color: var(--color-text-light);
          flex-shrink: 0;
        }
        .search-no-results {
          padding: 3rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
        }
        .sub-hint {
          font-size: 0.8125rem;
          color: var(--color-text-light);
        }
        .search-modal-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--color-border-light);
          background: var(--color-bg-subtle);
        }
      `}</style>
    </div>
  );
};
