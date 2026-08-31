import React, { useState, useMemo } from 'react';
import { getLocalizedMomentsProducts } from '../data/mockData';
import { useI18n } from '../context/I18nContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PersonalisationStudio } from '../components/PersonalisationStudio';
import { ProductCard } from '../components/ProductCard';
import { HeartHandshake, Sparkles, Heart, Star, ArrowDown } from 'lucide-react';

export const MomentsPage: React.FC = () => {
  const { t, locale } = useI18n();
  const [selectedTheme, setSelectedTheme] = useState<string>('all');

  const momentsProducts = getLocalizedMomentsProducts(locale);

  const thematicSections = useMemo(() => {
    return [
      { id: 'all', label: t('common.all') },
      { id: 'Heirloom Tableware', label: locale === 'pt' ? 'Loiça de Família' : 'Heirloom Tableware' },
      { id: 'Celebration Gifts', label: locale === 'pt' ? 'Lembranças de Celebração' : 'Celebration Gifts' },
      { id: 'Couples & Duos', label: locale === 'pt' ? 'Casais & Duplas' : 'Couples & Duos' },
      { id: 'Holiday & Seasonal', label: locale === 'pt' ? 'Épocas Especiais' : 'Holiday & Seasonal' }
    ];
  }, [t, locale]);

  const filteredItems = useMemo(() => {
    if (selectedTheme === 'all') return momentsProducts;
    return momentsProducts.filter((m) =>
      m.subcategory.toLowerCase().includes(selectedTheme.toLowerCase()) ||
      (selectedTheme === 'Heirloom Tableware' && m.subcategory.includes('Família')) ||
      (selectedTheme === 'Celebration Gifts' && m.subcategory.includes('Celebra')) ||
      (selectedTheme === 'Couples & Duos' && (m.subcategory.includes('Casais') || m.subcategory.includes('Couples'))) ||
      (selectedTheme === 'Holiday & Seasonal' && (m.subcategory.includes('Épocas') || m.subcategory.includes('Holiday')))
    );
  }, [momentsProducts, selectedTheme]);

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
              <HeartHandshake size={14} /> {t('brand.subbrands.moments')}
            </span>
            <h1 className="cat-page-title">{t('moments.title')}</h1>
            <p className="cat-page-lead">
              {t('moments.subtitle')}
            </p>

            <div className="moments-hero-actions">
              <button onClick={scrollToStudio} className="btn btn-primary btn-lg">
                <Sparkles size={18} /> {locale === 'pt' ? 'Abrir Estúdio de Personalização em Directo' : 'Open Live Personalisation Studio'} <ArrowDown size={16} />
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
                  {theme.label}
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
                <Heart size={14} /> {locale === 'pt' ? 'Memórias Partilhadas' : 'Shared Memories'}
              </span>
              <h2 className="section-title">{locale === 'pt' ? 'Testemunhos da Nossa Comunidade' : 'Stories From Our Community'}</h2>
              <p className="section-subtitle">
                {locale === 'pt' ? 'Descubra como famílias e casais transformaram momentos singelos em tradições para toda a vida.' : 'Discover how families and couples have turned simple moments into lasting traditions.'}
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
                  {locale === 'pt'
                    ? '"Ver as lágrimas de emoção da avó quando desembrulhou o prato com a árvore genealógica e os nomes dos 6 netos pintados nos ramos foi o auge da nossa reunião de família. É hoje a peça central da sala de jantar."'
                    : '"Seeing Grandma’s tears of joy when she unwrapped the family tree plate with all 8 grandchildren’s names hand-painted on the branches made our family reunion unforgettable. It is now the centerpiece of her dining room."'}
                </p>
                <div className="story-author-meta">
                  <div className="author-avatar-circle">M</div>
                  <div>
                    <strong>{locale === 'pt' ? 'Família Ferreira Pinto, Porto' : 'The Miller Family'}</strong>
                    <span>{locale === 'pt' ? '80º Aniversário da Avó' : 'Grandmother’s 80th Birthday Celebration'}</span>
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
                  {locale === 'pt'
                    ? '"O meu noivo surpreendeu-me com a caixa em madeira rústica e biscoitos decorados com as coordenadas do local onde nos conhecemos. Os biscoitos eram deliciosos e a caixa guarda as nossas fotografias mais especiais."'
                    : '"My partner surprised me with a personalized cookie crate inscribed with the coordinates of the beach where we got engaged. The cookies were delicious and the wooden box now holds our keepsake photos!"'}
                </p>
                <div className="story-author-meta">
                  <div className="author-avatar-circle">C</div>
                  <div>
                    <strong>{locale === 'pt' ? 'Mariana & Tiago, Lisboa' : 'Carlos & Helena M.'}</strong>
                    <span>{locale === 'pt' ? 'Bodas de Madeira (5 Anos)' : '5th Wedding Anniversary'}</span>
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
                  {locale === 'pt'
                    ? '"Temos a tradição de encomendar estrelas em cerâmica personalizadas para cada filho no Natal. Vê-los a pendurar o próprio nome na árvore ano após ano enche-nos o coração de ternura."'
                    : '"We have an annual tradition of ordering custom ceramic ornaments for our kids each Christmas. Watching them hang their own names on the tree brings back so many sweet memories from each year."'}
                </p>
                <div className="story-author-meta">
                  <div className="author-avatar-circle">H</div>
                  <div>
                    <strong>{locale === 'pt' ? 'Família Mendonça, Guimarães' : 'The Henderson Clan'}</strong>
                    <span>{locale === 'pt' ? 'Tradição Familiar de Natal' : 'Holiday Family Tradition'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keepsake Creation Steps */}
          <div className="how-it-works-banner">
            <h3 className="how-it-works-title">{locale === 'pt' ? 'Como é Criada a Sua Peça Personalizada:' : 'How Your Custom Keepsake is Created:'}</h3>
            <div className="how-steps-grid">
              <div className="how-step-item">
                <span className="how-step-num">1</span>
                <strong>{locale === 'pt' ? 'Pré-visualização em Directo' : 'Live Design Preview'}</strong>
                <p>{locale === 'pt' ? 'Introduza os nomes e datas no estúdio interactivo para ver o resultado imediato.' : 'Type your names and dates into our studio tool to see the live rendering.'}</p>
              </div>
              <div className="how-step-item">
                <span className="how-step-num">2</span>
                <strong>{locale === 'pt' ? 'Caligrafia Manual Nobre' : 'Artisan Hand-Lettering'}</strong>
                <p>{locale === 'pt' ? 'Os nossos ceramistas e pasteleiros gravam à mão as suas dedicatórias com vidrados e glacê finos.' : 'Our studio ceramicists and pastry artists hand-inscribe your chosen words with fine glazes.'}</p>
              </div>
              <div className="how-step-item">
                <span className="how-step-num">3</span>
                <strong>{locale === 'pt' ? 'Cozedura no Forno do Estúdio' : 'Studio Kiln Curing'}</strong>
                <p>{locale === 'pt' ? 'As cerâmicas são vitrificadas no forno; os biscoitos são selados no próprio dia em papel vegetal.' : 'Ceramics are kiln-fired for durability; cookies are sealed fresh in food-safe parchment.'}</p>
              </div>
              <div className="how-step-item">
                <span className="how-step-num">4</span>
                <strong>{locale === 'pt' ? 'Entrega de Presente Requintada' : 'Luxury Gift Delivery'}</strong>
                <p>{locale === 'pt' ? 'Embalado com fita de gorgorão, flores secas aromáticas e cartão de oferta com as suas palavras.' : 'Packed with satin ribbon, dried lavender sprigs, and greeting card, shipped safely to your door.'}</p>
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
