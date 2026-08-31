import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { getLocalizedAllProducts } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import {
  Sparkles,
  ArrowRight,
  Palette,
  Cake,
  HeartHandshake,
  ShieldCheck,
  Heart,
  Smile,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  CheckCircle2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const { t, locale, formatCurrency } = useI18n();

  const allProducts = getLocalizedAllProducts(locale);
  const featuredProducts = allProducts.filter((p) => p.isFeatured);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  useEffect(() => {
    if (!isCarouselPlaying) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isCarouselPlaying, featuredProducts.length]);

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Welcome Hero">
        <div className="hero-background-decor" aria-hidden="true">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>

        <div className="container hero-container">
          <div className="hero-text-col">
            <div className="hero-badge">
              <Sparkles size={16} className="text-primary" />
              <span>{t('home.hero.badge')}</span>
            </div>

            <h1 className="hero-main-title">
              {t('home.hero.title')}
            </h1>

            <p className="hero-tagline">
              <strong>elamel</strong> {locale === 'pt' ? 'une famílias, crianças e casais através de conjuntos certificados de pintura em cerâmica aptos para uso alimentar, iguarias artesanais de pastelaria e lembranças personalizadas que perduram no tempo.' : 'brings families and couples together through certified food-safe ceramic painting kits, artisanal bakery treats, and treasured personalized keepsakes.'}
            </p>

            <div className="hero-actions-row">
              <button
                onClick={() => navigate('/colors')}
                className="btn btn-primary btn-lg"
              >
                <Palette size={20} /> {t('home.hero.ctaColors')}
              </button>

              <button
                onClick={() => navigate('/goodies')}
                className="btn btn-secondary btn-lg"
              >
                <Cake size={20} /> {t('home.hero.ctaGoodies')}
              </button>
            </div>

            <div className="hero-secondary-link-wrap">
              <button
                onClick={() => navigate('/moments-souvenirs')}
                className="hero-sub-link"
              >
                <span>{t('home.hero.ctaMoments')}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <ShieldCheck size={18} color="#10B981" />
                <span>{locale === 'pt' ? 'Vidrados 100% Não-Tóxicos' : '100% Non-Toxic Glazes'}</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={18} color="#10B981" />
                <span>{locale === 'pt' ? 'Pastelaria Sem Amendoins' : 'Peanut-Free Bakery'}</span>
              </div>
              <div className="trust-item">
                <Heart size={18} color="#E1285B" />
                <span>{locale === 'pt' ? 'Para Todas as Idades' : 'Made for All Ages'}</span>
              </div>
            </div>
          </div>

          <div className="hero-media-col">
            <div className="hero-image-card">
              <img
                src="./images/hero_family.jpg"
                alt="Família alegre a pintar loiça de cerâmica em conjunto à volta da mesa"
                className="hero-main-img"
              />
              <div className="hero-floating-card">
                <div className="floating-card-icon">
                  <Palette size={22} color="#FFFFFF" />
                </div>
                <div>
                  <strong>{locale === 'pt' ? 'Manhã Criativa em Família' : 'Weekend Craft Morning'}</strong>
                  <p>{locale === 'pt' ? 'Cerâmica não-tóxica e doces entregues à sua porta' : 'Non-toxic ceramics & sweet treats delivered to your door'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE MAIN CATEGORY HIGHLIGHTS */}
      <section className="section categories-highlight-section" aria-label="Our Three Subbrands">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <Sparkles size={14} /> {t('home.categories.eyebrow')}
            </span>
            <h2 className="section-title">{t('home.categories.title')}</h2>
            <p className="section-subtitle">
              {t('home.categories.subtitle')}
            </p>
          </div>

          <div className="categories-grid-3">
            {/* Card 1: Elamel Colors */}
            <div className="category-feature-card category-colors-card">
              <div className="cat-card-media">
                <img
                  src="./images/ceramic_kits.jpg"
                  alt="Elamel Colors - Conjuntos de pintura em cerâmica com vidrados pastel e pincéis"
                  className="cat-card-img"
                />
                <span className="cat-pill pill-rose">{t('brand.subbrands.colors')}</span>
              </div>
              <div className="cat-card-body">
                <h3 className="cat-card-title">{t('home.categories.colors.title')}</h3>
                <p className="cat-card-text">
                  {t('home.categories.colors.desc')}
                </p>
                <ul className="cat-card-features">
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Pratos de jantar, taças e canecas' : 'Dinner plates, bowls & mugs'}</li>
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Vidrados para forno doméstico fácil' : 'Easy home oven-cure glazes'}</li>
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Seguro para crianças e principiantes' : 'Safe for toddlers and beginner artists'}</li>
                </ul>
                <button
                  onClick={() => navigate('/colors')}
                  className="btn btn-primary btn-full-width"
                >
                  <Palette size={18} /> {t('home.categories.colors.action')}
                </button>
              </div>
            </div>

            {/* Card 2: Elamel Goodies */}
            <div className="category-feature-card category-goodies-card">
              <div className="cat-card-media">
                <img
                  src="./images/goodies_assortment.jpg"
                  alt="Elamel Goodies - Bolos artesanais e biscoitos decorados à mão"
                  className="cat-card-img"
                />
                <span className="cat-pill pill-orange">{t('brand.subbrands.goodies')}</span>
              </div>
              <div className="cat-card-body">
                <h3 className="cat-card-title">{t('home.categories.goodies.title')}</h3>
                <p className="cat-card-text">
                  {t('home.categories.goodies.desc')}
                </p>
                <ul className="cat-card-features">
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Fórmulas familiares com teor reduzido de açúcar' : 'Low-sugar family formulations'}</li>
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Opções sem glúten e sem amendoins' : 'Gluten-free & nut-free options'}</li>
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Criador interactivo de Caixas de Iguarias' : 'Custom Treat Box creator available'}</li>
                </ul>
                <button
                  onClick={() => navigate('/goodies')}
                  className="btn btn-primary btn-full-width"
                >
                  <Cake size={18} /> {t('home.categories.goodies.action')}
                </button>
              </div>
            </div>

            {/* Card 3: Moments & Souvenirs */}
            <div className="category-feature-card category-moments-card">
              <div className="cat-card-media">
                <img
                  src="./images/moments_gifts.jpg"
                  alt="Lembranças personalizadas e peças de família Elamel"
                  className="cat-card-img"
                />
                <span className="cat-pill pill-cyan">{t('brand.subbrands.moments')}</span>
              </div>
              <div className="cat-card-body">
                <h3 className="cat-card-title">{t('home.categories.moments.title')}</h3>
                <p className="cat-card-text">
                  {t('home.categories.moments.desc')}
                </p>
                <ul className="cat-card-features">
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Apelidos de família e datas comemorativas' : 'Family names & special dates'}</li>
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Estúdio de pré-visualização em tempo real' : 'Live real-time studio preview tool'}</li>
                  <li><CheckCircle2 size={15} color="#10B981" /> {locale === 'pt' ? 'Embalagem nobre de oferta de cortesia' : 'Complimentary luxury gift wrap'}</li>
                </ul>
                <button
                  onClick={() => navigate('/moments-souvenirs')}
                  className="btn btn-primary btn-full-width"
                >
                  <HeartHandshake size={18} /> {t('home.categories.moments.action')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY FAMILIES LOVE ELAMEL */}
      <section className="section why-love-section">
        <div className="container">
          <div className="why-love-banner">
            <div className="section-title-wrap text-center-wrap">
              <span className="section-eyebrow">
                <Heart size={14} /> {t('home.whyLove.eyebrow')}
              </span>
              <h2 className="section-title">{t('home.whyLove.title')}</h2>
              <p className="section-subtitle">
                {t('home.whyLove.subtitle')}
              </p>
            </div>

            <div className="why-love-grid">
              <div className="why-card">
                <div className="why-icon-circle color-rose">
                  <ShieldCheck size={28} color="#E1285B" />
                </div>
                <h4 className="why-card-title">{t('home.whyLove.reasons.safe.title')}</h4>
                <p className="why-card-desc">
                  {t('home.whyLove.reasons.safe.desc')}
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon-circle color-orange">
                  <Smile size={28} color="#F8971D" />
                </div>
                <h4 className="why-card-title">{t('home.whyLove.reasons.allergens.title')}</h4>
                <p className="why-card-desc">
                  {t('home.whyLove.reasons.allergens.desc')}
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon-circle color-green">
                  <Users size={28} color="#10B981" />
                </div>
                <h4 className="why-card-title">{t('home.whyLove.reasons.bonding.title')}</h4>
                <p className="why-card-desc">
                  {t('home.whyLove.reasons.bonding.desc')}
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon-circle color-cyan">
                  <Sparkles size={28} color="#0284C7" />
                </div>
                <h4 className="why-card-title">{t('home.whyLove.reasons.transparency.title')}</h4>
                <p className="why-card-desc">
                  {t('home.whyLove.reasons.transparency.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CAROUSEL & SHOWCASE */}
      <section className="section featured-showcase-section" aria-label="Featured Products Carousel">
        <div className="container">
          <div className="carousel-section-header">
            <div>
              <span className="section-eyebrow">
                <Sparkles size={14} /> {t('home.featured.eyebrow')}
              </span>
              <h2 className="section-title">{t('home.featured.title')}</h2>
            </div>

            {/* Carousel Controls with Play/Pause (Accessible Spec Requirement) */}
            <div className="carousel-controls-toolbar" role="toolbar" aria-label="Carousel slide controls">
              <button
                onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
                className="btn-icon carousel-ctrl-btn"
                title={isCarouselPlaying ? 'Pause carousel auto-rotation' : 'Play carousel auto-rotation'}
                aria-label={isCarouselPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
              >
                {isCarouselPlaying ? <Pause size={17} /> : <Play size={17} />}
              </button>

              <button
                onClick={handlePrevSlide}
                className="btn-icon carousel-ctrl-btn"
                aria-label="Previous featured item"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNextSlide}
                className="btn-icon carousel-ctrl-btn"
                aria-label="Next featured item"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Active Card Highlight */}
          <div className="featured-carousel-display">
            <div className="carousel-track">
              {featuredProducts.map((product, idx) => {
                const isActive = idx === carouselIndex;
                if (!isActive) return null;

                return (
                  <div key={product.id} className="carousel-slide-active" role="group" aria-roledescription="slide" aria-label={`${idx + 1} of ${featuredProducts.length}`}>
                    <div className="carousel-slide-grid">
                      <div className="carousel-slide-img-wrap">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="carousel-slide-img"
                        />
                        <span className="badge badge-primary carousel-badge">
                          {product.subcategory}
                        </span>
                      </div>

                      <div className="carousel-slide-info">
                        <div className="carousel-meta-row">
                          <span className="product-rating">
                            <Star size={15} fill="#F8971D" color="#F8971D" />
                            <strong>{product.rating.toFixed(1)}</strong> ({product.reviewCount} {locale === 'pt' ? 'avaliações' : 'reviews'})
                          </span>
                          <span className="carousel-category-tag">elamel • {product.category.toUpperCase()}</span>
                        </div>

                        <h3 className="carousel-item-title">{product.name}</h3>
                        <p className="carousel-item-desc">{product.longDescription}</p>

                        <div className="carousel-price-action-row">
                          <span className="carousel-price">{formatCurrency(product.price)}</span>
                          <button
                            onClick={() => {
                              if (product.category === 'moments') {
                                navigate('/moments-souvenirs');
                              } else {
                                navigate(`/${product.category}`);
                              }
                            }}
                            className="btn btn-primary btn-lg"
                          >
                            {locale === 'pt' ? 'Explorar Este Artigo' : 'Explore This Item'} <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Dot Indicators */}
            <div className="carousel-dots-nav">
              {featuredProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`carousel-dot ${i === carouselIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid of Other Highlights */}
          <div className="grid-highlights-wrap">
            <h3 className="sub-grid-heading">{locale === 'pt' ? 'Mais Destaques para a Família' : 'More Family Highlights'}</h3>
            <div className="product-grid">
              {allProducts.slice(0, 3).map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION STRIP */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-content">
              <span className="section-eyebrow">
                <Sparkles size={14} /> {t('home.cta.eyebrow')}
              </span>
              <h2 className="cta-title">{t('home.cta.title')}</h2>
              <p className="cta-subtitle">
                {t('home.cta.subtitle')}
              </p>
              <div className="cta-buttons-row">
                <button
                  onClick={() => navigate('/colors')}
                  className="btn btn-primary btn-lg"
                >
                  <Palette size={18} /> {t('home.cta.buttonColors')}
                </button>
                <button
                  onClick={() => navigate('/moments-souvenirs')}
                  className="btn btn-secondary btn-lg"
                >
                  <HeartHandshake size={18} /> {t('home.cta.buttonMoments')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          padding: 4.5rem 0 3.5rem 0;
          overflow: hidden;
          background: var(--gradient-warm-hero);
        }
        .hero-background-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.25;
        }
        .hero-blob-1 {
          top: -10%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: #E1285B;
        }
        .hero-blob-2 {
          bottom: 10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: #F8971D;
        }
        .hero-blob-3 {
          top: 30%;
          right: 30%;
          width: 300px;
          height: 300px;
          background: #0284C7;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-primary);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.25rem;
        }
        .hero-main-title {
          font-size: 3.25rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .hero-tagline {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .hero-secondary-link-wrap {
          margin-bottom: 2.5rem;
        }
        .hero-sub-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s ease;
        }
        .hero-sub-link:hover {
          gap: 0.75rem;
          text-decoration: underline;
        }
        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-light);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .hero-image-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: visible;
        }
        .hero-main-img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 4px solid #FFFFFF;
          object-fit: cover;
          aspect-ratio: 16 / 10;
        }
        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          max-width: 320px;
          animation: floatSlow 4s ease-in-out infinite;
        }
        .floating-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--gradient-rainbow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-floating-card strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .hero-floating-card p {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Categories 3-Grid */
        .categories-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .category-feature-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .category-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
        }
        .cat-card-media {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .cat-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .category-feature-card:hover .cat-card-img {
          transform: scale(1.06);
        }
        .cat-pill {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }
        .pill-rose { background: #FFFFFF; color: var(--color-primary); }
        .pill-orange { background: #FFFFFF; color: var(--color-orange); }
        .pill-cyan { background: #FFFFFF; color: var(--color-cyan); }
        .cat-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .cat-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-main);
        }
        .cat-card-text {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .cat-card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .cat-card-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Why Families Love Elamel */
        .why-love-banner {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 4rem 3rem;
          box-shadow: var(--shadow-md);
        }
        .text-center-wrap {
          text-align: center;
          margin: 0 auto 3rem auto;
        }
        .why-love-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .why-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .why-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .color-rose { background: var(--color-primary-light); }
        .color-orange { background: var(--color-orange-light); }
        .color-green { background: var(--color-green-light); }
        .color-cyan { background: var(--color-cyan-light); }
        .why-card-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-main);
        }
        .why-card-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Featured Carousel */
        .carousel-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .carousel-controls-toolbar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .carousel-ctrl-btn {
          width: 44px;
          height: 44px;
        }
        .featured-carousel-display {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          margin-bottom: 4rem;
        }
        .carousel-slide-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
        }
        .carousel-slide-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
        }
        .carousel-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .carousel-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
        }
        .carousel-slide-info {
          padding: 3rem;
          display: flex;
          flex-direction: column;
        }
        .carousel-meta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .carousel-category-tag {
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }
        .carousel-item-title {
          font-size: 2.15rem;
          margin-bottom: 1rem;
        }
        .carousel-item-desc {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .carousel-price-action-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .carousel-price {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .carousel-dots-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.25rem;
          border-top: 1px solid var(--color-border-light);
          background: var(--color-bg-subtle);
        }
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #CBD5E1;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .carousel-dot.active {
          width: 32px;
          border-radius: var(--radius-full);
          background: var(--color-primary);
        }
        .sub-grid-heading {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        /* CTA Banner */
        .cta-banner-card {
          background: var(--gradient-rainbow);
          border-radius: var(--radius-xl);
          padding: 4rem 2rem;
          text-align: center;
          color: #FFFFFF;
          box-shadow: var(--shadow-xl);
        }
        .cta-content {
          max-width: 650px;
          margin: 0 auto;
        }
        .cta-banner-card .section-eyebrow {
          background: rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          backdrop-filter: blur(4px);
        }
        .cta-title {
          font-size: 2.5rem;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }
        .cta-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .cta-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cta-buttons-row .btn-primary {
          background: #FFFFFF;
          color: var(--color-primary);
        }
        .cta-buttons-row .btn-primary:hover {
          background: #FFF5F7;
          color: var(--color-primary-hover);
        }
        .cta-buttons-row .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
          backdrop-filter: blur(4px);
        }
        .cta-buttons-row .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.35);
          border-color: #FFFFFF;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 992px) {
          .hero-container { grid-template-columns: 1fr; }
          .hero-main-title { font-size: 2.6rem; }
          .categories-grid-3 { grid-template-columns: 1fr; }
          .why-love-grid { grid-template-columns: 1fr 1fr; }
          .carousel-slide-grid { grid-template-columns: 1fr; }
          .carousel-slide-info { padding: 1.75rem; }
        }
        @media (max-width: 640px) {
          .hero-main-title { font-size: 2.1rem; }
          .why-love-grid { grid-template-columns: 1fr; }
          .cta-title { font-size: 1.85rem; }
        }
      `}</style>
    </div>
  );
};
