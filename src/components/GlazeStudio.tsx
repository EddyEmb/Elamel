import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { COLOR_PRODUCTS } from '../data/mockData';
import { Palette, Sparkles, Plus, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GlazeStudio: React.FC = () => {
  const { addToCart } = useCart();

  // Pottery piece choice
  const potteryModels = [
    { id: 'plate', name: 'Botanical Dinner Plate', basePrice: 34.50, shape: 'circle', prod: COLOR_PRODUCTS[0] },
    { id: 'mug', name: 'Cozy Morning Mug', basePrice: 29.00, shape: 'mug', prod: COLOR_PRODUCTS[1] },
    { id: 'vase', name: 'Spring Blossom Vase', basePrice: 38.00, shape: 'vase', prod: COLOR_PRODUCTS[2] },
    { id: 'animal', name: 'Little Explorer Bunny', basePrice: 26.50, shape: 'bunny', prod: COLOR_PRODUCTS[3] }
  ];

  const [selectedModel, setSelectedModel] = useState(potteryModels[0]);

  // Color Glaze Swatches
  const glazes = [
    { name: 'Petal Rose', hex: '#F472B6', desc: 'Soft warm floral pink' },
    { name: 'Sunset Peach', hex: '#FB923C', desc: 'Sunny warm apricot' },
    { name: 'Buttercup Yellow', hex: '#FACC15', desc: 'Joyful bright yellow' },
    { name: 'Mint Meadow', hex: '#34D399', desc: 'Gentle leafy green' },
    { name: 'Sky Cyan', hex: '#38BDF8', desc: 'Crisp morning blue' },
    { name: 'Lavender Frost', hex: '#C084FC', desc: 'Serene soft purple' },
    { name: 'Earthy Clay', hex: '#A8A29E', desc: 'Warm natural neutral' }
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
          <Palette size={14} /> Interactive Ceramic Studio
        </span>
        <h3 className="glaze-studio-title">Paint & Test Your Glaze Palette</h3>
        <p className="glaze-studio-sub">
          Select a ceramic piece, pick your favorite non-toxic Elamel glazes, and click on sections to preview your custom color harmony!
        </p>
      </div>

      <div className="glaze-studio-grid">
        {/* Left Side: Pottery & Palette Controls */}
        <div className="glaze-controls">
          {/* Piece Selector */}
          <div className="control-group">
            <label className="control-label">1. Choose Pottery Bisque:</label>
            <div className="pottery-model-chips">
              {potteryModels.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model)}
                  className={`pottery-chip-btn ${selectedModel.id === model.id ? 'active' : ''}`}
                >
                  {model.name} (${model.basePrice.toFixed(2)})
                </button>
              ))}
            </div>
          </div>

          {/* Color Glazes Selector */}
          <div className="control-group">
            <label className="control-label">
              2. Select Active Brush Glaze: <strong style={{ color: activeGlaze.hex }}>{activeGlaze.name}</strong>
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
            <span>Click on the sections of the pottery illustration to apply your selected glaze!</span>
          </div>

          <div className="controls-footer-actions">
            <button
              type="button"
              onClick={handleResetColors}
              className="btn btn-secondary btn-sm"
            >
              <RefreshCw size={14} /> Reset Palette
            </button>
            <button
              type="button"
              onClick={handleAddCustomKit}
              className="btn btn-primary"
            >
              <Plus size={16} /> Add This Custom Kit to Box (${selectedModel.basePrice.toFixed(2)})
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
                  Click Zones
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
                <rect
                  x="70"
                  y="135"
                  width="140"
                  height="45"
                  fill={zoneColors.accent1}
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                <text x="140" y="162" textAnchor="middle" fontSize="13" fill="#FFFFFF" pointerEvents="none" fontWeight="700">
                  Custom Swirl
                </text>
              </svg>
            )}

            {selectedModel.id === 'vase' && (
              <svg viewBox="0 0 300 300" className="interactive-pottery-svg">
                {/* Vase Neck */}
                <path
                  d="M110 50 L190 50 L175 110 L125 110 Z"
                  fill={zoneColors.rim}
                  onClick={() => handleZoneClick('rim')}
                  className="clickable-zone"
                />
                {/* Vase Body */}
                <ellipse
                  cx="150"
                  cy="190"
                  rx="75"
                  ry="75"
                  fill={zoneColors.base}
                  onClick={() => handleZoneClick('base')}
                  className="clickable-zone"
                />
                {/* Vase Gradient Wave */}
                <ellipse
                  cx="150"
                  cy="200"
                  rx="55"
                  ry="45"
                  fill={zoneColors.accent1}
                  onClick={() => handleZoneClick('accent1')}
                  className="clickable-zone"
                />
                <circle
                  cx="150"
                  cy="185"
                  r="20"
                  fill={zoneColors.accent2}
                  onClick={() => handleZoneClick('accent2')}
                  className="clickable-zone"
                />
              </svg>
            )}

            {selectedModel.id === 'animal' && (
              <svg viewBox="0 0 300 300" className="interactive-pottery-svg">
                {/* Bunny Ears */}
                <ellipse cx="115" cy="80" rx="16" ry="45" fill={zoneColors.rim} onClick={() => handleZoneClick('rim')} className="clickable-zone" />
                <ellipse cx="185" cy="80" rx="16" ry="45" fill={zoneColors.rim} onClick={() => handleZoneClick('rim')} className="clickable-zone" />
                {/* Bunny Body */}
                <circle cx="150" cy="200" r="65" fill={zoneColors.base} onClick={() => handleZoneClick('base')} className="clickable-zone" />
                {/* Bunny Head */}
                <circle cx="150" cy="140" r="45" fill={zoneColors.accent1} onClick={() => handleZoneClick('accent1')} className="clickable-zone" />
                {/* Bunny Cheeks */}
                <circle cx="150" cy="150" r="14" fill={zoneColors.accent2} onClick={() => handleZoneClick('accent2')} className="clickable-zone" />
              </svg>
            )}
          </div>
          <span className="visual-stage-caption">Interactive 2D Pottery Simulator</span>
        </div>
      </div>

      <style>{`
        .glaze-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-lg);
          margin: 3.5rem 0;
        }
        .glaze-studio-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
        }
        .glaze-studio-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .glaze-studio-sub {
          color: var(--color-text-muted);
          font-size: 1rem;
        }
        .glaze-studio-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .control-group {
          margin-bottom: 1.5rem;
        }
        .control-label {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .pottery-model-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pottery-chip-btn {
          padding: 0.6rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-full);
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
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-weight: 700;
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
          padding: 0.45rem 0.65rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .glaze-swatch-btn:hover {
          border-color: var(--color-primary);
        }
        .glaze-swatch-btn.active {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px var(--color-primary);
        }
        .swatch-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }
        .swatch-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .studio-tips-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-orange-light);
          border: 1px solid #FDE68A;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          color: #92400E;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .controls-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .glaze-visual-stage {
          background: var(--color-bg-subtle);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px dashed rgba(0, 0, 0, 0.08);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.03);
        }
        .interactive-pottery-wrapper {
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .interactive-pottery-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.08));
        }
        .clickable-zone {
          cursor: pointer;
          transition: opacity var(--transition-fast), transform var(--transition-fast);
        }
        .clickable-zone:hover {
          opacity: 0.85;
          stroke: #E1285B;
          stroke-width: 3px;
        }
        .visual-stage-caption {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-light);
          margin-top: 1rem;
          text-transform: uppercase;
        }

        @media (max-width: 992px) {
          .glaze-studio-grid { grid-template-columns: 1fr; }
          .glaze-studio-card { padding: 1.75rem; }
        }
      `}</style>
    </div>
  );
};
