import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { GOODIES_PRODUCTS } from '../data/mockData';
import { GoodiesProduct } from '../types';
import { Gift, Plus, Trash2, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TreatBoxBuilder: React.FC = () => {
  const { addToCart } = useCart();
  const [boxSize, setBoxSize] = useState<4 | 6>(4);
  const [selectedTreats, setSelectedTreats] = useState<GoodiesProduct[]>([]);

  const boxPrice = boxSize === 4 ? 22.00 : 32.00;
  const isFull = selectedTreats.length >= boxSize;

  const handleAddTreat = (treat: GoodiesProduct) => {
    if (selectedTreats.length < boxSize) {
      setSelectedTreats((prev) => [...prev, treat]);
    }
  };

  const handleRemoveSlot = (index: number) => {
    setSelectedTreats((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearBox = () => {
    setSelectedTreats([]);
  };

  const handleAddBoxToCart = () => {
    if (!isFull) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    const customBoxProduct: GoodiesProduct = {
      id: `custom-box-${Date.now()}`,
      name: `Custom Family Treat Box (${boxSize} Assorted Treats)`,
      category: 'goodies',
      subcategory: 'Occasion Treats',
      price: boxPrice,
      description: `Hand-selected assortment of ${boxSize} gourmet treats: ${selectedTreats.map(t => t.name).join(', ')}.`,
      longDescription: `Your personalized family treat box packed fresh in a presentation gift box with parchment lining. Contains: ${selectedTreats.map(t => t.name).join(' • ')}.`,
      image: '/images/goodies_assortment.jpg',
      rating: 5.0,
      reviewCount: 1,
      tags: ['Custom Assortment', 'Gift Box', 'Family Sharing'],
      flavorProfile: 'Assorted custom gourmet bakery selection',
      portionSize: `Box of ${boxSize} treats (Serves ${boxSize}–${boxSize * 2})`,
      servings: boxSize * 2,
      dietaryTags: ['Vegetarian'],
      ingredients: ['Mixed artisanal pastry ingredients according to chosen treats'],
      allergenWarning: 'Contains items with Gluten, Dairy, and Eggs. Check individual treat labels.',
      storageInstructions: 'Keep in box at room temperature or chilled according to treat guidelines.',
      servingTemperature: 'Best enjoyed fresh within 3 days.'
    };

    addToCart(customBoxProduct, 1, undefined, undefined, selectedTreats);
    setSelectedTreats([]);
  };

  // Compute aggregated allergens for the custom box
  const allergensInBox = Array.from(
    new Set(selectedTreats.flatMap((t) => t.dietaryTags))
  );

  return (
    <div className="treat-box-builder-card" id="treat-box-builder">
      <div className="builder-header">
        <span className="section-eyebrow">
          <Gift size={14} /> Mix & Match Studio
        </span>
        <h3 className="builder-title">Build a Custom Family Treat Box</h3>
        <p className="builder-sub">
          Choose your box size and pick your family’s favorite cakes, biscuits, and pastries!
        </p>
      </div>

      {/* Size Selector */}
      <div className="size-selector-row">
        <button
          type="button"
          onClick={() => {
            setBoxSize(4);
            if (selectedTreats.length > 4) setSelectedTreats(selectedTreats.slice(0, 4));
          }}
          className={`size-btn ${boxSize === 4 ? 'active' : ''}`}
          aria-pressed={boxSize === 4}
        >
          <div className="size-btn-head">
            <strong>4-Piece Family Sampler</strong>
            {boxSize === 4 && <Check size={16} className="size-check-icon" />}
          </div>
          <span className="size-btn-price">$22.00</span>
          <span className="size-btn-desc">Ideal for small family afternoon tea</span>
        </button>

        <button
          type="button"
          onClick={() => setBoxSize(6)}
          className={`size-btn ${boxSize === 6 ? 'active' : ''}`}
          aria-pressed={boxSize === 6}
        >
          <div className="size-btn-head">
            <strong>6-Piece Celebration Crate</strong>
            {boxSize === 6 && <Check size={16} className="size-check-icon" />}
          </div>
          <span className="size-btn-price">$32.00</span>
          <span className="size-btn-desc">Perfect for weekend birthday gatherings</span>
        </button>
      </div>

      <div className="builder-grid">
        {/* Available Treats Selection */}
        <div className="available-treats-col">
          <div className="col-header-row">
            <h4 className="column-title">1. Select Treats to Add:</h4>
            <span className="col-counter-hint">
              {boxSize - selectedTreats.length === 0
                ? 'Box is full!'
                : `Need ${boxSize - selectedTreats.length} more`}
            </span>
          </div>

          <div className="treats-picker-grid">
            {GOODIES_PRODUCTS.map((treat) => (
              <div key={treat.id} className="treat-picker-item">
                <img src={treat.image} alt={treat.name} className="treat-picker-thumb" />
                <div className="treat-picker-info">
                  <strong className="treat-picker-name">{treat.name}</strong>
                  <div className="treat-picker-diet">
                    {treat.dietaryTags.map((tag, tIdx) => (
                      <span key={tIdx} className="treat-mini-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddTreat(treat)}
                  disabled={isFull}
                  className="btn btn-secondary btn-sm picker-add-btn"
                  aria-label={`Add ${treat.name} to box`}
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Box Fill Slots */}
        <div className="box-slots-col">
          <div className="box-slots-header">
            <h4 className="column-title">
              2. Your Box Slots ({selectedTreats.length}/{boxSize})
            </h4>
            {selectedTreats.length > 0 && (
              <button
                type="button"
                onClick={handleClearBox}
                className="btn-clear-box"
                aria-label="Clear all chosen treats from box"
              >
                Clear All
              </button>
            )}
          </div>

          <div className={`slots-container grid-${boxSize}`}>
            {Array.from({ length: boxSize }).map((_, idx) => {
              const treat = selectedTreats[idx];
              return (
                <div key={idx} className={`box-slot ${treat ? 'filled' : 'empty'}`}>
                  {treat ? (
                    <div className="slot-filled-content">
                      <img src={treat.image} alt={treat.name} className="slot-img" />
                      <div className="slot-info">
                        <span className="slot-title" title={treat.name}>{treat.name}</span>
                        <span className="slot-flavor">{treat.flavorProfile}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveSlot(idx)}
                        className="btn-remove-slot"
                        aria-label={`Remove ${treat.name} from slot ${idx + 1}`}
                        title="Remove treat"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ) : (
                    <div className="slot-empty-content">
                      <div className="empty-plus-icon">
                        <Plus size={18} />
                      </div>
                      <span>Slot {idx + 1} Available</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time Dietary Monitor */}
          {selectedTreats.length > 0 && (
            <div className="box-dietary-summary" role="status" aria-live="polite">
              <ShieldCheck size={18} color="#10B981" className="summary-shield-icon" />
              <div>
                <strong>Box Dietary Profile:</strong>{' '}
                <span>{allergensInBox.join(', ')}</span>
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            type="button"
            onClick={handleAddBoxToCart}
            disabled={!isFull}
            className={`btn btn-lg btn-full-width ${isFull ? 'btn-primary' : 'btn-secondary btn-disabled'}`}
          >
            {isFull ? (
              <>
                <Gift size={18} /> Pack & Add Custom Box (${boxPrice.toFixed(2)})
              </>
            ) : (
              <>Add {boxSize - selectedTreats.length} More Treat{boxSize - selectedTreats.length > 1 ? 's' : ''} to Complete Box</>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .treat-box-builder-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-lg);
          margin: 3.5rem 0;
        }
        .builder-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
        }
        .builder-title {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        .builder-sub {
          color: var(--color-text-muted);
          font-size: 1.05rem;
        }
        .size-selector-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .size-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          padding: 1.25rem 1.75rem;
          background: var(--color-bg-subtle);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          font-family: var(--font-heading);
          transition: all var(--transition-fast);
          min-width: 260px;
          text-align: left;
        }
        .size-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: var(--shadow-md);
        }
        .size-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-text-main);
          box-shadow: 0 4px 14px rgba(225, 40, 91, 0.12);
        }
        .size-btn-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .size-btn-head strong {
          font-size: 1.05rem;
        }
        .size-check-icon {
          color: var(--color-primary);
        }
        .size-btn-price {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .size-btn-desc {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-family: var(--font-body);
        }
        .builder-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .col-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .column-title {
          font-size: 1.2rem;
          color: var(--color-text-main);
          margin: 0;
        }
        .col-counter-hint {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .treats-picker-grid {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .treat-picker-item {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          padding: 0.9rem 1.15rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .treat-picker-item:hover {
          border-color: rgba(225, 40, 91, 0.4);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .treat-picker-thumb {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }
        .treat-picker-info {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .treat-picker-name {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.35;
          word-break: normal;
          overflow-wrap: break-word;
        }
        .treat-picker-diet {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .treat-mini-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.1rem 0.45rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
        }
        .picker-add-btn {
          flex-shrink: 0;
          padding: 0.45rem 1rem;
          font-size: 0.8125rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          white-space: nowrap;
          margin-left: 0.5rem;
        }
        .box-slots-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .btn-clear-box {
          background: none;
          border: none;
          color: var(--color-primary);
          font-size: 0.8125rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }
        .btn-clear-box:hover {
          background: var(--color-primary-light);
        }
        .slots-container {
          display: grid;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        .grid-4 { grid-template-columns: 1fr 1fr; }
        .grid-6 { grid-template-columns: 1fr 1fr; }
        .box-slot {
          min-height: 88px;
          border-radius: var(--radius-lg);
          border: 2px dashed var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          background: var(--color-bg-subtle);
          position: relative;
          transition: all var(--transition-fast);
        }
        .box-slot.filled {
          background: #FFFFFF;
          border-style: solid;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(225, 40, 91, 0.08);
        }
        .slot-filled-content {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          width: 100%;
        }
        .slot-img {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .slot-info {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .slot-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.25;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .slot-flavor {
          display: block;
          font-size: 0.7rem;
          color: var(--color-text-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .btn-remove-slot {
          background: #FEE2E2;
          color: #DC2626;
          border: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .btn-remove-slot:hover {
          background: #DC2626;
          color: #FFFFFF;
          transform: scale(1.1);
        }
        .slot-empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-light);
        }
        .empty-plus-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
        }
        .box-dietary-summary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #ECFDF5;
          border: 1.5px solid #A7F3D0;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          color: #065F46;
          margin-bottom: 1.5rem;
        }
        .summary-shield-icon {
          flex-shrink: 0;
        }
        .btn-disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 992px) {
          .builder-grid { grid-template-columns: 1fr; }
          .treat-box-builder-card { padding: 2rem 1.5rem; }
          .size-btn { min-width: 100%; }
        }
      `}</style>
    </div>
  );
};
