import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MOMENTS_PRODUCTS } from '../data/mockData';
import { PersonalisationItem } from '../types';
import { Sparkles, Heart, Gift, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PersonalisationStudio: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<PersonalisationItem>(MOMENTS_PRODUCTS[0]);
  
  // Customization Form State
  const [familyName, setFamilyName] = useState('The Miller Family');
  const [occasion, setOccasion] = useState('Home Est. 2008');
  const [customMessage, setCustomMessage] = useState('Our roots run deep, our love grows strong.');
  const [colorTheme, setColorTheme] = useState('warm_earth');
  const [giftWrap, setGiftWrap] = useState(true);

  const charCount = customMessage.length;
  const maxChars = selectedProduct.charLimit;

  const colorThemes = [
    { id: 'warm_earth', name: 'Warm Terracotta & Gold', primary: '#92400E', secondary: '#F59E0B', bg: '#FEF3C7' },
    { id: 'rose_garden', name: 'Rose Garden Pastels', primary: '#BE185D', secondary: '#F472B6', bg: '#FDF2F8' },
    { id: 'ocean_breeze', name: 'Ocean Cyan & Navy', primary: '#0369A1', secondary: '#38BDF8', bg: '#E0F2FE' },
    { id: 'rainbow_swirl', name: 'Elamel Rainbow Spectrum', primary: '#E1285B', secondary: '#F8971D', bg: '#FFF7ED' }
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
          <Sparkles size={14} /> Live Customization Studio
        </span>
        <h3 className="studio-title">Create Your Personalised Family Keepsake</h3>
        <p className="studio-subtitle">
          Type your family name and heartfelt message below to see a live preview in real time!
        </p>
      </div>

      <div className="studio-layout-grid">
        {/* Left Form Controls */}
        <div className="studio-controls-col">
          {/* Step 1: Base Item Selection */}
          <div className="studio-step-block">
            <label className="step-label">
              <span className="step-number">1</span> Choose Keepsake Item:
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
                  <span className="base-item-price">${item.price.toFixed(2)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Custom Text Fields */}
          <div className="studio-step-block">
            <label className="step-label">
              <span className="step-number">2</span> Personalised Details:
            </label>

            <div className="form-group">
              <label htmlFor="studio-family-name" className="form-label">
                Name or Family Name:
              </label>
              <input
                id="studio-family-name"
                type="text"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                placeholder="e.g. The Miller Family or Sarah & Leo"
                className="form-control"
                maxLength={35}
              />
            </div>

            <div className="form-group">
              <label htmlFor="studio-occasion" className="form-label">
                Occasion or Date:
              </label>
              <input
                id="studio-occasion"
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="e.g. 10th Anniversary or Est. 2026"
                className="form-control"
                maxLength={30}
              />
            </div>

            <div className="form-group">
              <div className="label-with-counter">
                <label htmlFor="studio-message" className="form-label">
                  Heartfelt Message or Inscription:
                </label>
                <span className="char-counter" aria-live="polite">
                  {charCount}/{maxChars}
                </span>
              </div>
              <textarea
                id="studio-message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="e.g. Our roots run deep, our love grows strong."
                className="form-control"
                rows={2}
                maxLength={maxChars}
              />
            </div>
          </div>

          {/* Step 3: Color Theme & Presentation */}
          <div className="studio-step-block">
            <label className="step-label">
              <span className="step-number">3</span> Palette Theme & Gift Packaging:
            </label>
            <div className="theme-chips-row">
              {colorThemes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setColorTheme(theme.id)}
                  className={`theme-chip-btn ${colorTheme === theme.id ? 'active' : ''}`}
                >
                  <span
                    className="theme-color-preview"
                    style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
                  />
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>

            <div className="giftwrap-checkbox-wrap">
              <label className="giftwrap-label">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                />
                <Gift size={17} color="#E1285B" />
                <span>Complimentary Luxury Ribbon & Dried Flower Gift Packaging</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Live Preview Canvas */}
        <div className="studio-preview-col">
          <div className="preview-sticky-wrap">
            <div className="live-preview-badge">
              <Sparkles size={13} /> Live Interactive Render
            </div>

            {/* Simulated Live Product Surface */}
            <div className="live-render-stage" style={{ background: currentThemeObj.bg }}>
              {selectedProduct.baseItemType === 'ceramic_plate' && (
                <div className="plate-canvas-visual">
                  <div className="plate-rim-circle">
                    <div className="plate-inner-art">
                      {/* Botanical SVG Tree */}
                      <svg viewBox="0 0 120 90" className="tree-vector-svg">
                        <path
                          d="M60 80 Q60 55 52 42 Q42 30 30 28 Q42 22 55 35 Q58 20 50 10 Q60 18 64 30 Q75 18 88 22 Q78 30 68 42 Q60 55 60 80 Z"
                          fill={currentThemeObj.primary}
                        />
                        <circle cx="34" cy="24" r="3" fill={currentThemeObj.secondary} />
                        <circle cx="50" cy="12" r="3.5" fill={currentThemeObj.secondary} />
                        <circle cx="70" cy="18" r="3" fill={currentThemeObj.secondary} />
                        <circle cx="86" cy="22" r="3.5" fill={currentThemeObj.secondary} />
                      </svg>

                      <div className="plate-live-text-area">
                        <h4
                          className="preview-family-name"
                          style={{ color: currentThemeObj.primary }}
                        >
                          {familyName || 'Your Family Name'}
                        </h4>
                        <div
                          className="preview-occasion"
                          style={{ color: currentThemeObj.secondary }}
                        >
                          {occasion || 'Special Occasion'}
                        </div>
                        <p
                          className="preview-message-inscription"
                          style={{ color: currentThemeObj.primary }}
                        >
                          "{customMessage || 'Your message will appear here.'}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedProduct.baseItemType === 'cookie_crate' && (
                <div className="cookie-crate-visual">
                  <div className="crate-grid">
                    <div className="mock-cookie" style={{ borderColor: currentThemeObj.primary }}>
                      <span className="cookie-frosting-text" style={{ color: currentThemeObj.primary }}>
                        {familyName.split(' ')[0] || 'Family'}
                      </span>
                    </div>
                    <div className="mock-cookie" style={{ borderColor: currentThemeObj.secondary }}>
                      <span className="cookie-frosting-text" style={{ color: currentThemeObj.secondary }}>
                        {occasion || 'Sweet Joy'}
                      </span>
                    </div>
                    <div className="mock-cookie wide-cookie" style={{ borderColor: currentThemeObj.primary }}>
                      <span className="cookie-frosting-text" style={{ color: currentThemeObj.primary }}>
                        {customMessage || 'Happy Memories'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedProduct.baseItemType === 'ceramic_mug' && (
                <div className="mug-duo-visual">
                  <div className="mock-mug" style={{ borderColor: currentThemeObj.primary }}>
                    <span className="mug-handle" />
                    <span className="mug-text-preview" style={{ color: currentThemeObj.primary }}>
                      {familyName.split(' ')[0] || 'Love'}
                    </span>
                    <span className="mug-sub-text" style={{ color: currentThemeObj.secondary }}>
                      {occasion || '2026'}
                    </span>
                  </div>
                  <div className="mock-mug" style={{ borderColor: currentThemeObj.secondary }}>
                    <span className="mug-handle" />
                    <span className="mug-text-preview" style={{ color: currentThemeObj.secondary }}>
                      {familyName.split(' ')[1] || 'Forever'}
                    </span>
                    <span className="mug-sub-text" style={{ color: currentThemeObj.primary }}>
                      {occasion || '2026'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Summary & Guarantee info */}
            <div className="preview-meta-info">
              <div className="meta-point">
                <Clock size={15} color="#0284C7" />
                <span>Handcrafted & kiln cured in {selectedProduct.leadTimeDays} business days</span>
              </div>
              <div className="meta-point">
                <ShieldCheck size={15} color="#10B981" />
                <span>Food-Safe Glaze & Heirloom Ceramic Guarantee</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-lg btn-full-width"
            >
              <Heart size={18} /> Add Custom Creation to Treat Box (${selectedProduct.price.toFixed(2)})
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .personalisation-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-lg);
          margin: 3rem 0;
        }
        .studio-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
        }
        .studio-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .studio-subtitle {
          color: var(--color-text-muted);
          font-size: 1rem;
        }
        .studio-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .studio-step-block {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
        }
        .step-number {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .base-items-selector {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .base-item-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          transition: all var(--transition-fast);
        }
        .base-item-btn:hover {
          border-color: var(--color-primary);
        }
        .base-item-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-weight: 700;
        }
        .base-item-price {
          color: var(--color-primary);
          font-weight: 700;
        }
        .label-with-counter {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .char-counter {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          font-weight: 600;
        }
        .theme-chips-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .theme-chip-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.8rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .theme-chip-btn:hover {
          border-color: var(--color-primary);
        }
        .theme-chip-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 2px var(--color-primary);
        }
        .theme-color-preview {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .giftwrap-checkbox-wrap {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border);
        }
        .giftwrap-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
        }
        .preview-sticky-wrap {
          position: sticky;
          top: 100px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          padding: 1.75rem;
          box-shadow: var(--shadow-md);
        }
        .live-preview-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .live-render-stage {
          border-radius: var(--radius-lg);
          padding: 2.5rem 1.5rem;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 2px dashed rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease;
        }
        .plate-canvas-visual {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: #FFFDF9;
          border: 8px solid #EFECE6;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.25rem;
        }
        .plate-rim-circle {
          width: 100%;
          height: 100%;
          border: 2px dashed #D6D1C7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }
        .tree-vector-svg {
          width: 50px;
          height: 40px;
          margin: 0 auto 0.25rem auto;
        }
        .preview-family-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .preview-occasion {
          font-size: 0.8125rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }
        .preview-message-inscription {
          font-family: var(--font-handwriting);
          font-size: 1.15rem;
          line-height: 1.2;
          font-weight: 600;
          max-width: 180px;
          margin: 0 auto;
        }
        .cookie-crate-visual {
          width: 100%;
        }
        .crate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .mock-cookie {
          background: #FEF3C7;
          border: 3px solid;
          border-radius: var(--radius-md);
          padding: 1rem 0.5rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .wide-cookie {
          grid-column: span 2;
        }
        .cookie-frosting-text {
          font-family: var(--font-handwriting);
          font-size: 1.2rem;
          font-weight: 700;
        }
        .mug-duo-visual {
          display: flex;
          gap: 1.5rem;
        }
        .mock-mug {
          width: 90px;
          height: 105px;
          background: #FFFFFF;
          border: 4px solid;
          border-radius: 4px 4px 18px 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .mug-handle {
          position: absolute;
          right: -14px;
          top: 25px;
          width: 14px;
          height: 45px;
          border: 3px solid #CBD5E1;
          border-left: none;
          border-radius: 0 12px 12px 0;
        }
        .mug-text-preview {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
        }
        .mug-sub-text {
          font-size: 0.7rem;
        }
        .preview-meta-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .meta-point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .btn-full-width {
          width: 100%;
        }

        @media (max-width: 992px) {
          .studio-layout-grid { grid-template-columns: 1fr; }
          .personalisation-studio-card { padding: 1.75rem; }
          .preview-sticky-wrap { position: static; }
        }
      `}</style>
    </div>
  );
};
