import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useI18n } from '../context/I18nContext';
import { MOMENTS_PRODUCTS } from '../data/mockData';
import { PersonalisationItem } from '../types';
import { Sparkles, Heart, Gift, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PersonalisationStudio: React.FC = () => {
  const { addToCart } = useCart();
  const { t, formatCurrency, locale } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<PersonalisationItem>(MOMENTS_PRODUCTS[0]);
  
  // Customization Form State
  const [familyName, setFamilyName] = useState(locale === 'pt' ? 'Família Silva Ramos' : 'The Miller Family');
  const [occasion, setOccasion] = useState(locale === 'pt' ? 'Fundada em 2018' : 'Home Est. 2008');
  const [customMessage, setCustomMessage] = useState(
    locale === 'pt'
      ? 'Onde a vida começa e o amor nunca tem fim.'
      : 'Our roots run deep, our love grows strong.'
  );
  const [colorTheme, setColorTheme] = useState('warm_earth');
  const [giftWrap, setGiftWrap] = useState(true);

  const charCount = customMessage.length;
  const maxChars = selectedProduct.charLimit;

  const colorThemes = [
    { id: 'warm_earth', name: locale === 'pt' ? 'Terracota e Ouro Nobre' : 'Warm Terracotta & Gold', primary: '#92400E', secondary: '#F59E0B', bg: '#FEF3C7' },
    { id: 'rose_garden', name: locale === 'pt' ? 'Jardim de Rosas Pastel' : 'Rose Garden Pastels', primary: '#BE185D', secondary: '#F472B6', bg: '#FDF2F8' },
    { id: 'ocean_breeze', name: locale === 'pt' ? 'Azul Celeste e Marinho' : 'Ocean Cyan & Navy', primary: '#0369A1', secondary: '#38BDF8', bg: '#E0F2FE' },
    { id: 'rainbow_swirl', name: locale === 'pt' ? 'Espectro Arco-Íris Elamel' : 'Elamel Rainbow Spectrum', primary: '#E1285B', secondary: '#F8971D', bg: '#FFF7ED' }
  ];

  const currentThemeObj = colorThemes.find(t => t.id === colorTheme) || colorThemes[0];

  const handleAddToCart = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E1285B', '#F8971D', '#10B981', '#0284C7', '#8B5CF6']
      });
    } catch {
      // ignore
    }

    addToCart(
      selectedProduct,
      1,
      {
        familyOrName: familyName,
        occasion: occasion,
        customMessage: customMessage,
        colorTheme: currentThemeObj.name,
        giftWrap: giftWrap
      }
    );
  };

  return (
    <div className="personalisation-studio-card" id="personalisation-studio">
      <div className="studio-header">
        <span className="section-eyebrow">
          <Sparkles size={14} /> {t('personalisation.title')}
        </span>
        <h3 className="studio-title">{locale === 'pt' ? 'Crie a Sua Recordação Familiar Gravada' : 'Create Your Personalised Family Keepsake'}</h3>
        <p className="studio-subtitle">
          {locale === 'pt'
            ? 'Escreva os nomes da sua família e a dedicatória especial abaixo para ver a antevisão em tempo real!'
            : 'Type your family name and heartfelt message below to see a live preview in real time!'}
        </p>
      </div>

      <div className="studio-layout-grid">
        {/* Left Form Controls */}
        <div className="studio-controls-col">
          {/* Step 1: Base Item Selection */}
          <div className="studio-step-block">
            <label className="step-label">
              <span className="step-number">1</span> {locale === 'pt' ? 'Escolha a Peça Cerâmica:' : 'Choose Keepsake Item:'}
            </label>
            <div className="base-items-selector">
              {MOMENTS_PRODUCTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedProduct(item);
                    if (customMessage.length > item.charLimit) {
                      setCustomMessage(customMessage.slice(0, item.charLimit));
                    }
                  }}
                  className={`base-item-btn ${selectedProduct.id === item.id ? 'active' : ''}`}
                >
                  <span className="base-item-name">{item.name}</span>
                  <span className="base-item-price">{formatCurrency(item.price)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Custom Text Fields */}
          <div className="studio-step-block">
            <label className="step-label">
              <span className="step-number">2</span> {locale === 'pt' ? 'Detalhes da Personalização:' : 'Personalised Details:'}
            </label>

            <div className="form-group">
              <label htmlFor="studio-family-name" className="form-label">
                {t('personalisation.familyName')}
              </label>
              <input
                id="studio-family-name"
                type="text"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                placeholder={t('personalisation.familyPlaceholder')}
                className="form-control"
                maxLength={35}
              />
            </div>

            <div className="form-group">
              <label htmlFor="studio-occasion" className="form-label">
                {t('personalisation.estYear')}
              </label>
              <input
                id="studio-occasion"
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder={t('personalisation.yearPlaceholder')}
                className="form-control"
                maxLength={30}
              />
            </div>

            <div className="form-group">
              <div className="label-with-counter">
                <label htmlFor="studio-message" className="form-label">
                  {t('personalisation.dedication')}
                </label>
                <span className="char-counter" aria-live="polite">
                  {charCount}/{maxChars}
                </span>
              </div>
              <textarea
                id="studio-message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder={t('personalisation.dedicationPlaceholder')}
                className="form-control textarea-custom"
                rows={3}
                maxLength={maxChars}
              />
            </div>
          </div>

          {/* Step 3: Glaze Palette Theme */}
          <div className="studio-step-block">
            <label className="step-label">
              <span className="step-number">3</span> {t('personalisation.themeColor')}
            </label>
            <div className="theme-options-grid">
              {colorThemes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setColorTheme(theme.id)}
                  className={`theme-option-btn ${colorTheme === theme.id ? 'active' : ''}`}
                >
                  <div className="theme-swatch-circles">
                    <span style={{ backgroundColor: theme.primary }} />
                    <span style={{ backgroundColor: theme.secondary }} />
                  </div>
                  <span className="theme-name">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Luxury Gift Packaging Option */}
          <div className="gift-wrap-option">
            <label className="checkbox-custom-label">
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                <Gift size={16} color="#E1285B" />
                <strong>{t('personalisation.giftWrap')}</strong>
              </span>
            </label>
          </div>

          {/* Turnaround Assurance Badge */}
          <div className="production-time-notice">
            <Clock size={16} color="#0284C7" />
            <span>{locale === 'pt' ? `Prazo de Confecção: ${selectedProduct.turnaroundDays} dias úteis no atelier` : `Production Time: ${selectedProduct.turnaroundDays} studio days`}</span>
          </div>

          {/* Submit Action */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn btn-primary btn-lg btn-full-width"
          >
            <Heart size={18} /> {locale === 'pt' ? `Adicionar Peça Personalizada ao Cesto (${formatCurrency(selectedProduct.price + (giftWrap ? 6.00 : 0))})` : `Add Personalised Piece to Bag (${formatCurrency(selectedProduct.price + (giftWrap ? 6.00 : 0))})`}
          </button>
        </div>

        {/* Right Live SVG Canvas Preview */}
        <div className="studio-preview-col">
          <div className="preview-sticky-wrap">
            <div className="preview-header-tag">
              <Sparkles size={14} /> {locale === 'pt' ? 'Antevisão em Directo da Peça' : 'Live Artwork Preview'}
            </div>

            {/* SVG Visual Stage */}
            <div className="preview-svg-stage" style={{ backgroundColor: currentThemeObj.bg }}>
              {selectedProduct.id === 'moment-1' && (
                <svg viewBox="0 0 400 400" className="preview-svg-canvas">
                  <circle cx="200" cy="200" r="180" fill="#FFFFFF" stroke="#E2DDD5" strokeWidth="6" />
                  <circle cx="200" cy="200" r="160" fill="none" stroke={currentThemeObj.secondary} strokeWidth="2" strokeDasharray="6 4" />
                  <g transform="translate(200, 160)" stroke={currentThemeObj.primary} strokeWidth="3" fill="none">
                    <path d="M0 60 L0 -10 M0 20 Q-40 0 -50 -40 M0 20 Q40 0 50 -40 M0 -10 Q-25 -30 -30 -60 M0 -10 Q25 -30 30 -60" />
                    <circle cx="-50" cy="-40" r="10" fill={currentThemeObj.secondary} />
                    <circle cx="50" cy="-40" r="10" fill={currentThemeObj.secondary} />
                    <circle cx="-30" cy="-60" r="8" fill={currentThemeObj.secondary} />
                    <circle cx="30" cy="-60" r="8" fill={currentThemeObj.secondary} />
                    <circle cx="0" cy="-75" r="12" fill={currentThemeObj.primary} />
                  </g>
                  <text x="200" y="270" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="28" fontWeight="700" fill={currentThemeObj.primary}>
                    {familyName || (locale === 'pt' ? 'Nome da Família' : 'The Family Name')}
                  </text>
                  <text x="200" y="295" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="600" letterSpacing="2" fill={currentThemeObj.secondary}>
                    {occasion || 'EST. 2026'}
                  </text>
                  <text x="200" y="325" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontSize="11" fill="#4B5563" fontStyle="italic">
                    "{customMessage.slice(0, 42)}"
                  </text>
                  {customMessage.length > 42 && (
                    <text x="200" y="340" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontSize="11" fill="#4B5563" fontStyle="italic">
                      "{customMessage.slice(42, 85)}"
                    </text>
                  )}
                </svg>
              )}

              {selectedProduct.id === 'moment-2' && (
                <svg viewBox="0 0 400 400" className="preview-svg-canvas">
                  <rect x="50" y="50" width="300" height="300" rx="16" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="4" />
                  <rect x="70" y="70" width="260" height="260" rx="8" fill="#FFFFFF" stroke={currentThemeObj.secondary} strokeWidth="1" strokeDasharray="4 4" />
                  <rect x="90" y="90" width="100" height="100" rx="8" fill="#FEE2E2" stroke="#FCA5A5" />
                  <rect x="210" y="90" width="100" height="100" rx="8" fill="#E0F2FE" stroke="#BAE6FD" />
                  <rect x="90" y="205" width="100" height="100" rx="8" fill="#FEF3C7" stroke="#FDE68A" />
                  <rect x="210" y="205" width="100" height="100" rx="8" fill="#DCFCE7" stroke="#BBF7D0" />
                  <text x="140" y="145" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="14" fill="#991B1B">
                    {familyName.split(' ')[0] || (locale === 'pt' ? 'Amor' : 'Love')}
                  </text>
                  <text x="260" y="145" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="14" fill="#075985">
                    {familyName.split(' ')[1] || (locale === 'pt' ? 'Família' : 'Joy')}
                  </text>
                  <text x="140" y="260" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="14" fill="#92400E">
                    {occasion.split(' ')[0] || (locale === 'pt' ? 'Sempre' : 'Always')}
                  </text>
                  <text x="260" y="260" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="14" fill="#166534">
                    {occasion.split(' ')[1] || (locale === 'pt' ? 'Juntos' : 'Together')}
                  </text>
                  <rect x="80" y="340" width="240" height="26" rx="13" fill={currentThemeObj.primary} />
                  <text x="200" y="357" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">
                    {familyName} • {occasion}
                  </text>
                </svg>
              )}

              {selectedProduct.id === 'moment-3' && (
                <svg viewBox="0 0 400 400" className="preview-svg-canvas">
                  <g transform="translate(60, 100)">
                    <path d="M120 40 C155 40 155 120 120 120" fill="none" stroke={currentThemeObj.secondary} strokeWidth="14" strokeLinecap="round" />
                    <rect x="20" y="20" width="100" height="140" rx="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
                    <text x="70" y="85" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="22" fill={currentThemeObj.primary}>
                      {familyName.split('&')[0] || (locale === 'pt' ? 'Ele' : 'One')}
                    </text>
                  </g>
                  <g transform="translate(190, 100)">
                    <path d="M120 40 C155 40 155 120 120 120" fill="none" stroke={currentThemeObj.secondary} strokeWidth="14" strokeLinecap="round" />
                    <rect x="20" y="20" width="100" height="140" rx="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
                    <text x="70" y="85" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="22" fill={currentThemeObj.primary}>
                      {familyName.split('&')[1] || (locale === 'pt' ? 'Ela' : 'Two')}
                    </text>
                  </g>
                  <text x="200" y="310" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="700" fill={currentThemeObj.primary}>
                    {occasion}
                  </text>
                  <text x="200" y="335" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontSize="12" fill="#4B5563" fontStyle="italic">
                    "{customMessage.slice(0, 36)}"
                  </text>
                </svg>
              )}

              {selectedProduct.id === 'moment-4' && (
                <svg viewBox="0 0 400 400" className="preview-svg-canvas">
                  <rect x="195" y="20" width="10" height="80" fill="#E1285B" />
                  <circle cx="200" cy="220" r="140" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="4" />
                  <circle cx="200" cy="220" r="120" fill="none" stroke={currentThemeObj.secondary} strokeWidth="2" strokeDasharray="4 4" />
                  <text x="200" y="195" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="32" fontWeight="700" fill={currentThemeObj.primary}>
                    {familyName}
                  </text>
                  <text x="200" y="235" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="15" fontWeight="700" letterSpacing="3" fill={currentThemeObj.secondary}>
                    {occasion}
                  </text>
                  <text x="200" y="270" textAnchor="middle" fontFamily="'Outfit', sans-serif" fontSize="12" fill="#64748B" fontStyle="italic">
                    "{customMessage.slice(0, 32)}"
                  </text>
                </svg>
              )}
            </div>

            {/* Quality & Food Safe Badge */}
            <div className="preview-footer-note">
              <ShieldCheck size={16} color="#10B981" />
              <span>{locale === 'pt' ? 'Gravado à mão com vidrados alimentares seguros e permanentes.' : 'Hand-engraved with food-safe, permanent glazed pigments.'}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .personalisation-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-lg);
          margin: 2.5rem 0;
        }
        .studio-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2.5rem auto;
        }
        .studio-title {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0.4rem 0 0.5rem 0;
        }
        .studio-subtitle {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .studio-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .studio-step-block {
          margin-bottom: 1.75rem;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.85rem;
        }
        .step-number {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .base-items-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .base-item-btn {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .base-item-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
        }
        .base-item-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(225, 40, 91, 0.2);
        }
        .base-item-name {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .base-item-price {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
        }
        .label-with-counter {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .char-counter {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .form-control {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.85rem;
          font-family: inherit;
          font-size: 0.9375rem;
          outline: none;
          transition: border-color var(--transition-fast);
          box-sizing: border-box;
        }
        .form-control:focus {
          border-color: var(--color-primary);
        }
        .textarea-custom {
          resize: vertical;
        }
        .theme-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .theme-option-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.75rem;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }
        .theme-option-btn:hover {
          border-color: var(--color-primary);
        }
        .theme-option-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(225, 40, 91, 0.2);
        }
        .theme-swatch-circles {
          display: flex;
          gap: 2px;
        }
        .theme-swatch-circles span {
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
        .theme-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .gift-wrap-option {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }
        .checkbox-custom-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .checkbox-input {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: var(--color-primary);
        }
        .checkbox-text {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .production-time-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .preview-sticky-wrap {
          position: sticky;
          top: 90px;
        }
        .preview-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .preview-svg-stage {
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .preview-svg-canvas {
          width: 100%;
          max-width: 320px;
          height: auto;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08));
        }
        .preview-footer-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }

        @media (max-width: 900px) {
          .studio-layout-grid {
            grid-template-columns: 1fr;
          }
          .preview-sticky-wrap {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};
