import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useI18n } from '../context/I18nContext';
import { COLOR_PRODUCTS } from '../data/mockData';
import { Palette, Sparkles, Plus, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GlazeStudio: React.FC = () => {
  const { addToCart } = useCart();
  const { t, formatCurrency, locale } = useI18n();

  // Pottery piece choice
  const potteryModels = [
    { id: 'plate', name: locale === 'pt' ? 'Prato de Jantar Botânico' : 'Botanical Dinner Plate', basePrice: 34.50, shape: 'circle', prod: COLOR_PRODUCTS[0] },
    { id: 'mug', name: locale === 'pt' ? 'Caneca Aconchegante' : 'Cozy Morning Mug', basePrice: 29.00, shape: 'mug', prod: COLOR_PRODUCTS[1] },
    { id: 'vase', name: locale === 'pt' ? 'Vaso Flor de Primavera' : 'Spring Blossom Vase', basePrice: 38.00, shape: 'vase', prod: COLOR_PRODUCTS[2] },
    { id: 'animal', name: locale === 'pt' ? 'Coelhinho Explorador' : 'Little Explorer Bunny', basePrice: 26.50, shape: 'bunny', prod: COLOR_PRODUCTS[3] }
  ];

  const [selectedModel, setSelectedModel] = useState(potteryModels[0]);

  // Color Glaze Swatches
  const glazes = [
    { name: locale === 'pt' ? 'Rosa Pétala' : 'Petal Rose', hex: '#F472B6', desc: locale === 'pt' ? 'Rosa suave e floral' : 'Soft warm floral pink' },
    { name: locale === 'pt' ? 'Pêssego Pôr-do-Sol' : 'Sunset Peach', hex: '#FB923C', desc: locale === 'pt' ? 'Alperce luminoso e acolhedor' : 'Sunny warm apricot' },
    { name: locale === 'pt' ? 'Amarelo Raio-de-Sol' : 'Buttercup Yellow', hex: '#FACC15', desc: locale === 'pt' ? 'Amarelo vivo e alegre' : 'Joyful bright yellow' },
    { name: locale === 'pt' ? 'Verde Salva' : 'Mint Meadow', hex: '#34D399', desc: locale === 'pt' ? 'Verde folha refrescante' : 'Gentle leafy green' },
    { name: locale === 'pt' ? 'Azul Celeste' : 'Sky Cyan', hex: '#38BDF8', desc: locale === 'pt' ? 'Azul límpido da manhã' : 'Crisp morning blue' },
    { name: locale === 'pt' ? 'Lavanda Silvestre' : 'Lavender Frost', hex: '#C084FC', desc: locale === 'pt' ? 'Púrpura suave e sereno' : 'Serene soft purple' },
    { name: locale === 'pt' ? 'Barro Terracota' : 'Earthy Clay', hex: '#A8A29E', desc: locale === 'pt' ? 'Neutro orgânico quente' : 'Warm natural neutral' }
  ];

  // Glaze selections for zones
  const [activeGlaze, setActiveGlaze] = useState(glazes[0]);
  const [zoneColors, setZoneColors] = useState<{ [key: string]: string }>({
    base: '#FFFFFF',
    accent1: '#F472B6',
    accent2: '#38BDF8',
    rim: '#FB923C'
  });

  const handleZoneClick = (zoneKey: string) => {
    setZoneColors((prev) => ({ ...prev, [zoneKey]: activeGlaze.hex }));
  };

  const handleResetColors = () => {
    setZoneColors({
      base: '#FFFFFF',
      accent1: '#F472B6',
      accent2: '#38BDF8',
      rim: '#FB923C'
    });
  };

  const handleAddCustomKit = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.65 }
      });
    } catch {
      // ignore
    }

    addToCart(
      selectedModel.prod,
      1,
      undefined,
      Object.values(zoneColors)
    );
  };

  return (
    <div className="glaze-studio-card" id="glaze-studio">
      <div className="glaze-studio-header">
        <span className="section-eyebrow">
          <Palette size={14} /> {t('glazeStudio.title')}
        </span>
        <h3 className="glaze-studio-title">{t('glazeStudio.subtitle')}</h3>
        <p className="glaze-studio-sub">
          {locale === 'pt'
            ? 'Seleccione a peça em faiança, escolha os vidrados não-tóxicos e clique nas diferentes secções para compor a sua harmonia de cores!'
            : 'Select a ceramic piece, pick your favorite non-toxic Elamel glazes, and click on sections to preview your custom color harmony!'}
        </p>
      </div>

      <div className="glaze-studio-grid">
        {/* Left Side: Pottery & Palette Controls */}
        <div className="glaze-controls">
          {/* Piece Selector */}
          <div className="control-group">
            <label className="control-label">{t('glazeStudio.selectModel')}</label>
            <div className="pottery-model-chips">
              {potteryModels.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model)}
                  className={`pottery-chip-btn ${selectedModel.id === model.id ? 'active' : ''}`}
                >
                  {model.name} ({formatCurrency(model.basePrice)})
                </button>
              ))}
            </div>
          </div>

          {/* Color Glazes Selector */}
          <div className="control-group">
            <label className="control-label">
              {t('glazeStudio.selectColor')} <strong style={{ color: activeGlaze.hex }}>{activeGlaze.name}</strong>
            </label>
            <div className="glaze-swatches-grid">
              {glazes.map((glaze) => (
                <button
                  key={glaze.name}
                  type="button"
                  onClick={() => setActiveGlaze(glaze)}
                  className={`glaze-swatch-btn ${activeGlaze.name === glaze.name ? 'active' : ''}`}
                  title={`${glaze.name} - ${glaze.desc}`}
                >
                  <span className="swatch-circle" style={{ backgroundColor: glaze.hex }}>
                    {activeGlaze.name === glaze.name && <Check size={14} color="#FFFFFF" />}
                  </span>
                  <span className="swatch-name">{glaze.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Helper */}
          <div className="studio-tips-box">
            <Sparkles size={16} color="#F8971D" />
            <span>{locale === 'pt' ? 'Clique nas zonas da ilustração para aplicar o vidrado mineral seleccionado!' : 'Click on the sections of the pottery illustration to apply your selected glaze!'}</span>
          </div>

          <div className="controls-footer-actions">
            <button
              type="button"
              onClick={handleResetColors}
              className="btn btn-secondary btn-sm"
            >
              <RefreshCw size={14} /> {locale === 'pt' ? 'Repor Cores' : 'Reset Palette'}
            </button>
            <button
              type="button"
              onClick={handleAddCustomKit}
              className="btn btn-primary"
            >
              <Plus size={16} /> {locale === 'pt' ? `Adicionar Kit com Estas Cores (${formatCurrency(selectedModel.basePrice)})` : `Add This Custom Kit to Bag (${formatCurrency(selectedModel.basePrice)})`}
            </button>
          </div>
        </div>

        {/* Right Side: Interactive SVG Canvas Visual */}
        <div className="glaze-visual-stage">
          <div className="interactive-pottery-wrapper">
            {selectedModel.id === 'plate' && (
              <svg viewBox="0 0 300 300" className="interactive-pottery-svg">
                {/* Outer Rim */}
                <circle
                  cx="150"
                  cy="150"
                  r="135"
                  fill={zoneColors.rim}
                  stroke="#E2DDD5"
                  strokeWidth="4"
                  onClick={() => handleZoneClick('rim')}
                  className="clickable-zone"
                />
                {/* Middle Botanical Ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="105"
                  fill={zoneColors.accent1}
                  stroke="#E2DDD5"
                  strokeWidth="2"
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                {/* Center Core */}
                <circle
                  cx="150"
                  cy="150"
                  r="70"
                  fill={zoneColors.base}
                  stroke="#E2DDD5"
                  strokeWidth="2"
                  onClick={() => handleZoneClick('base')}
                  className="clickable-zone"
                />
                {/* Center Floral Accent */}
                <circle
                  cx="150"
                  cy="150"
                  r="25"
                  fill={zoneColors.accent2}
                  onClick={() => handleZoneClick('accent2')}
                  className="clickable-zone"
                />
                <text x="150" y="155" textAnchor="middle" fontSize="12" fill="#0F172A" pointerEvents="none" fontWeight="600">
                  {locale === 'pt' ? 'Clique nas Secções' : 'Click Zones'}
                </text>
              </svg>
            )}

            {selectedModel.id === 'mug' && (
              <svg viewBox="0 0 300 300" className="interactive-pottery-svg">
                {/* Handle */}
                <path
                  d="M210 90 C265 90 265 200 210 200"
                  fill="none"
                  stroke={zoneColors.accent2}
                  strokeWidth="22"
                  strokeLinecap="round"
                  onClick={() => handleZoneClick('accent2')}
                  className="clickable-zone"
                />
                {/* Mug Body */}
                <rect
                  x="70"
                  y="70"
                  width="140"
                  height="170"
                  rx="24"
                  fill={zoneColors.base}
                  stroke="#CBD5E1"
                  strokeWidth="3"
                  onClick={() => handleZoneClick('base')}
                  className="clickable-zone"
                />
                {/* Top Rim Band */}
                <rect
                  x="70"
                  y="70"
                  width="140"
                  height="35"
                  rx="10"
                  fill={zoneColors.rim}
                  onClick={() => handleZoneClick('rim')}
                  className="clickable-zone"
                />
                {/* Belly Swirl Stripe */}
                <path
                  d="M70 160 Q140 185 210 160"
                  fill="none"
                  stroke={zoneColors.accent1}
                  strokeWidth="16"
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                <text x="140" y="130" textAnchor="middle" fontSize="12" fill="#0F172A" pointerEvents="none" fontWeight="600">
                  {locale === 'pt' ? 'Caneca Aconchegante' : 'Cozy Mug'}
                </text>
              </svg>
            )}

            {selectedModel.id === 'vase' && (
              <svg viewBox="0 0 300 300" className="interactive-pottery-svg">
                {/* Fluted Base */}
                <ellipse
                  cx="150"
                  cy="250"
                  rx="60"
                  ry="20"
                  fill={zoneColors.rim}
                  onClick={() => handleZoneClick('rim')}
                  className="clickable-zone"
                />
                {/* Vase Main Bulb Body */}
                <path
                  d="M100 90 Q60 170 100 240 L200 240 Q240 170 200 90 Z"
                  fill={zoneColors.base}
                  stroke="#CBD5E1"
                  strokeWidth="3"
                  onClick={() => handleZoneClick('base')}
                  className="clickable-zone"
                />
                {/* Middle Decorative Band */}
                <ellipse
                  cx="150"
                  cy="170"
                  rx="75"
                  ry="18"
                  fill={zoneColors.accent1}
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                {/* Fluted Neck & Lip */}
                <path
                  d="M115 50 L185 50 L170 90 L130 90 Z"
                  fill={zoneColors.accent2}
                  onClick={() => handleZoneClick('accent2')}
                  className="clickable-zone"
                />
                <text x="150" y="215" textAnchor="middle" fontSize="12" fill="#0F172A" pointerEvents="none" fontWeight="600">
                  {locale === 'pt' ? 'Vaso Flor de Primavera' : 'Bloom Vase'}
                </text>
              </svg>
            )}

            {selectedModel.id === 'animal' && (
              <svg viewBox="0 0 300 300" className="interactive-pottery-svg">
                {/* Left Ear */}
                <ellipse
                  cx="105"
                  cy="70"
                  rx="18"
                  ry="50"
                  fill={zoneColors.accent1}
                  transform="rotate(-15 105 70)"
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                {/* Right Ear */}
                <ellipse
                  cx="195"
                  cy="70"
                  rx="18"
                  ry="50"
                  fill={zoneColors.accent1}
                  transform="rotate(15 195 70)"
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                {/* Bunny Body */}
                <ellipse
                  cx="150"
                  cy="205"
                  rx="80"
                  ry="65"
                  fill={zoneColors.base}
                  stroke="#CBD5E1"
                  strokeWidth="3"
                  onClick={() => handleZoneClick('base')}
                  className="clickable-zone"
                />
                {/* Bunny Head */}
                <circle
                  cx="150"
                  cy="140"
                  r="55"
                  fill={zoneColors.base}
                  stroke="#CBD5E1"
                  strokeWidth="3"
                  onClick={() => handleZoneClick('base')}
                  className="clickable-zone"
                />
                {/* Chest Bowtie / Collar */}
                <polygon
                  points="130,185 170,185 160,195 170,205 130,205 140,195"
                  fill={zoneColors.rim}
                  onClick={() => handleZoneClick('rim')}
                  className="clickable-zone"
                />
                {/* Belly Spot */}
                <circle
                  cx="150"
                  cy="225"
                  r="30"
                  fill={zoneColors.accent2}
                  onClick={() => handleZoneClick('accent2')}
                  className="clickable-zone"
                />
                <text x="150" y="145" textAnchor="middle" fontSize="12" fill="#0F172A" pointerEvents="none" fontWeight="600">
                  {locale === 'pt' ? 'Coelhinho' : 'Bunny'}
                </text>
              </svg>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .glaze-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-lg);
          margin: 2.5rem 0;
        }
        .glaze-studio-header {
          margin-bottom: 2rem;
          text-align: center;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .glaze-studio-title {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0.4rem 0 0.5rem 0;
        }
        .glaze-studio-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .glaze-studio-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .control-group {
          margin-bottom: 1.5rem;
        }
        .control-label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9375rem;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .pottery-model-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pottery-chip-btn {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.55rem 1rem;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pottery-chip-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .pottery-chip-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(225, 40, 91, 0.25);
        }
        .glaze-swatches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 0.5rem;
        }
        .glaze-swatch-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.45rem 0.65rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .glaze-swatch-btn:hover {
          border-color: var(--color-primary);
        }
        .glaze-swatch-btn.active {
          background: #FFFFFF;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(225, 40, 91, 0.2);
        }
        .swatch-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        .swatch-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .studio-tips-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-primary-light);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
        }
        .controls-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .glaze-visual-stage {
          background: radial-gradient(circle, #F8FAFC 0%, #EDE9FE 100%);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border-light);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .interactive-pottery-wrapper {
          width: 100%;
          max-width: 320px;
        }
        .interactive-pottery-svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08));
        }
        .clickable-zone {
          cursor: pointer;
          transition: filter 0.15s ease, transform 0.15s ease;
        }
        .clickable-zone:hover {
          filter: brightness(1.1) drop-shadow(0 0 6px rgba(225, 40, 91, 0.4));
        }

        @media (max-width: 850px) {
          .glaze-studio-grid {
            grid-template-columns: 1fr;
          }
          .glaze-visual-stage {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};
