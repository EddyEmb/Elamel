import React, { useState, useMemo } from 'react';
import { getLocalizedGoodiesProducts } from '../data/mockData';
import { useI18n } from '../context/I18nContext';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TreatBoxBuilder } from '../components/TreatBoxBuilder';
import { Cake, ShieldCheck, Heart, Sparkles, Filter, Search, Check } from 'lucide-react';

export const GoodiesPage: React.FC = () => {
  const { t, locale } = useI18n();
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const goodiesProducts = getLocalizedGoodiesProducts(locale);

  const subcategoryTabs = useMemo(() => {
    return [
      { id: 'all', label: t('common.all') },
      { id: 'Family Cakes', label: locale === 'pt' ? 'Bolos de Família' : 'Family Cakes' },
      { id: 'Cookies & Biscuits', label: locale === 'pt' ? 'Biscoitos & Bolachas' : 'Cookies & Biscuits' },
      { id: 'Celebration Treats', label: locale === 'pt' ? 'Celebrações & Caixas' : 'Celebration Treats' }
    ];
  }, [t, locale]);

  const dietaryFilterOptions: { id: string; label: string }[] = useMemo(() => {
    return [
      { id: 'all', label: t('common.all') },
      { id: 'Nut-Free', label: locale === 'pt' ? 'Sem Amendoins' : 'Nut-Free' },
      { id: 'Gluten-Free', label: locale === 'pt' ? 'Sem Glúten' : 'Gluten-Free' },
      { id: 'Vegetarian', label: locale === 'pt' ? 'Vegetariano' : 'Vegetarian' },
      { id: 'Low Sugar', label: locale === 'pt' ? 'Baixo Açúcar' : 'Low Sugar' }
    ];
  }, [t, locale]);

  const filteredProducts = useMemo(() => {
    return goodiesProducts.filter((prod) => {
      const matchCat =
        selectedSubcat === 'all' ||
        prod.subcategory.toLowerCase().includes(selectedSubcat.toLowerCase()) ||
        (selectedSubcat === 'Family Cakes' && prod.subcategory.includes('Bolos')) ||
        (selectedSubcat === 'Cookies & Biscuits' && (prod.subcategory.includes('Biscoitos') || prod.subcategory.includes('Bolachas'))) ||
        (selectedSubcat === 'Celebration Treats' && prod.subcategory.includes('Celebra'));

      const matchDiet =
        selectedDiet === 'all' ||
        prod.dietaryTags.some((d) => d.toLowerCase().includes(selectedDiet.toLowerCase())) ||
        prod.tags.some((t) => t.toLowerCase().includes(selectedDiet.toLowerCase()));

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
  }, [goodiesProducts, selectedSubcat, selectedDiet, searchFilter, sortBy]);

  return (
    <div className="goodies-page">
      <Breadcrumbs />

      {/* Page Hero Header */}
      <section className="category-hero-header goodies-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Cake size={14} /> {t('brand.subbrands.goodies')}
            </span>
            <h1 className="cat-page-title">{t('goodies.title')}</h1>
            <p className="cat-page-lead">
              {t('goodies.subtitle')}
            </p>

            <div className="cat-hero-badges-row">
              <div className="hero-pill-badge">
                <ShieldCheck size={16} color="#10B981" />
                <span>{t('goodies.highlights.peanutFree')}</span>
              </div>
              <div className="hero-pill-badge">
                <Sparkles size={16} color="#F8971D" />
                <span>{t('goodies.highlights.glutenFree')}</span>
              </div>
              <div className="hero-pill-badge">
                <Heart size={16} color="#E1285B" />
                <span>{t('goodies.highlights.natural')}</span>
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

            {/* Search & Sort */}
            <div className="toolbar-search-sort">
              <div className="search-input-wrapper">
                <Search size={16} className="search-field-icon" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder={locale === 'pt' ? 'Pesquisar sabores, bolos...' : 'Search flavors, cakes...'}
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
                <option value="featured">{locale === 'pt' ? 'Destaques Primeiro' : 'Featured First'}</option>
                <option value="price-asc">{t('common.priceLowHigh')}</option>
                <option value="price-desc">{t('common.priceHighLow')}</option>
                <option value="rating">{locale === 'pt' ? 'Melhor Avaliados' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>

          {/* Secondary Dietary Filter Bar */}
          <div className="dietary-filter-bar">
            <span className="diet-filter-label">
              <Filter size={14} /> {locale === 'pt' ? 'Filtro Dietético & Alergénios:' : 'Dietary & Allergen Filter:'}
            </span>
            <div className="diet-chips-wrap">
              {dietaryFilterOptions.map((diet) => (
                <button
                  key={diet.id}
                  onClick={() => setSelectedDiet(diet.id)}
                  className={`diet-chip-btn ${selectedDiet === diet.id ? 'active' : ''}`}
                >
                  {selectedDiet === diet.id && <Check size={13} />}
                  {diet.label}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="results-summary-row">
            <span className="results-count">
              {locale === 'pt'
                ? <>A apresentar <strong>{filteredProducts.length}</strong> iguaria(s) de pastelaria</>
                : <>Showing <strong>{filteredProducts.length}</strong> Bakery Treat{filteredProducts.length === 1 ? '' : 's'}</>}
            </span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="no-results-box">
              <p>{locale === 'pt' ? 'Não foram encontradas iguarias com o filtro seleccionado.' : 'No bakery treats found matching your dietary filter or search.'}</p>
              <button
                onClick={() => {
                  setSelectedSubcat('all');
                  setSelectedDiet('all');
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

          {/* Interactive Treat Box Builder Studio */}
          <TreatBoxBuilder />

          {/* Bakery Promise & Allergen Transparency Card */}
          <div className="bakery-standards-card">
            <div className="standards-header">
              <ShieldCheck size={28} color="#10B981" />
              <div>
                <h3 className="standards-title">{locale === 'pt' ? 'O Nosso Compromisso de Transparência & Alergénios' : 'Our Kitchen & Allergen Transparency Promise'}</h3>
                <p className="standards-sub">{locale === 'pt' ? 'Cada ingrediente é rigorosamente declarado para que as famílias celebrem com total tranquilidade.' : 'Every ingredient is clearly accounted for so families can celebrate with peace of mind.'}</p>
              </div>
            </div>

            <div className="standards-grid">
              <div className="standard-item">
                <strong>{locale === 'pt' ? 'Apenas Ingredientes Naturais' : 'Natural Ingredients Only'}</strong>
                <p>{locale === 'pt' ? 'Utilizamos purés de fruta fresca (morangos, framboesas, mirtilos) e corantes vegetais de origem botânica (espirulina, curcuma, beterraba) nas nossas decorações em glacê.' : 'We use real fruit purees (strawberries, raspberries, blueberries) and natural plant pigments (spirulina, turmeric, beetroot) for our vibrant pastel icings.'}</p>
              </div>
              <div className="standard-item">
                <strong>{locale === 'pt' ? 'Produção Estritamente Sem Amendoins' : 'Peanut-Free Production'}</strong>
                <p>{locale === 'pt' ? 'A nossa pastelaria opera sob rigoroso protocolo 100% livre de amendoins. Quaisquer artigos com frutos de casca rija (como a farinha de amêndoa no bolo fudge) são confecionados em zonas dedicadas.' : 'Our bakery facility is strictly 100% peanut-free. Any specialty items containing tree nuts (like almond flour in our fudge cake) are prepared in dedicated zones.'}</p>
              </div>
              <div className="standard-item">
                <strong>{locale === 'pt' ? 'Doçura Moderada para os Mais Novos' : 'Gentle Sweetness for Little Ones'}</strong>
                <p>{locale === 'pt' ? 'As nossas receitas contêm 30% menos açúcares refinados que a pastelaria comercial, realçando a baunilha natural em vagem, a manteiga nobre e as frutas da estação.' : 'Our recipes use 30% less refined sugar than commercial bakeries, highlighting natural Madagascar vanilla, real dairy butter, and fresh seasonal fruits.'}</p>
              </div>
              <div className="standard-item">
                <strong>{locale === 'pt' ? 'Fornadas Frescas Diárias' : 'Fresh Daily Deliveries'}</strong>
                <p>{locale === 'pt' ? 'Cada bolo e caixa de biscoitos é cozinhado e decorado poucas horas antes da expedição para garantir a máxima frescura e aroma à sua mesa.' : 'Every cake and cookie box is baked and decorated within hours of dispatch to ensure optimal tenderness and crispness on your celebration table.'}</p>
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
          margin: 0;
        }
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
