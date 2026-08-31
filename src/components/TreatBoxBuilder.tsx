import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useI18n } from '../context/I18nContext';
import { GOODIES_PRODUCTS } from '../data/mockData';
import { GoodiesProduct } from '../types';
import { Gift, Plus, Trash2, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TreatBoxBuilder: React.FC = () => {
  const { addToCart } = useCart();
  const { t, formatCurrency, locale } = useI18n();
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
      name: locale === 'pt' ? `Caixa de Iguarias Familiar (${boxSize} Doces Sortidos)` : `Custom Family Treat Box (${boxSize} Assorted Treats)`,
      category: 'goodies',
      subcategory: 'Occasion Treats',
      price: boxPrice,
      description: locale === 'pt' ? `Sortido artesanal seleccionado com ${boxSize} doces gourmet: ${selectedTreats.map(t => t.name).join(', ')}.` : `Hand-selected assortment of ${boxSize} gourmet treats: ${selectedTreats.map(t => t.name).join(', ')}.`,
      longDescription: locale === 'pt' ? `A sua caixa de pastelaria personalizada, embalada fresca com papel vegetal e fita decorativa. Contém: ${selectedTreats.map(t => t.name).join(' • ')}.` : `Your personalized family treat box packed fresh in a presentation gift box with parchment lining. Contains: ${selectedTreats.map(t => t.name).join(' • ')}.`,
      image: './images/goodies_assortment.jpg',
      rating: 5.0,
      reviewCount: 1,
      tags: ['Custom Assortment', 'Gift Box', 'Family Sharing'],
      flavorProfile: locale === 'pt' ? 'Sortido personalizado de pastelaria artesanal' : 'Assorted custom gourmet bakery selection',
      portionSize: locale === 'pt' ? `Caixa de ${boxSize} peças (Serve ${boxSize} a ${boxSize * 2} pessoas)` : `Box of ${boxSize} treats (Serves ${boxSize}–${boxSize * 2})`,
      servings: boxSize * 2,
      dietaryTags: ['Vegetarian'],
      ingredients: [locale === 'pt' ? 'Ingredientes nobres de pastelaria de acordo com os doces seleccionados' : 'Mixed artisanal pastry ingredients according to chosen treats'],
      allergenWarning: locale === 'pt' ? 'Contém itens com glúten, lacticínios e ovos. Consulte os rótulos individuais.' : 'Contains items with Gluten, Dairy, and Eggs. Check individual treat labels.',
      storageInstructions: locale === 'pt' ? 'Conservar na caixa à temperatura ambiente ou no frio de acordo com cada doce.' : 'Keep in box at room temperature or chilled according to treat guidelines.',
      servingTemperature: locale === 'pt' ? 'Consumir de preferência fresco no prazo de 3 dias.' : 'Best enjoyed fresh within 3 days.'
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
          <Gift size={14} /> {t('treatBox.title')}
        </span>
        <h3 className="builder-title">{t('treatBox.subtitle')}</h3>
        <p className="builder-sub">
          {locale === 'pt'
            ? 'Escolha a dimensão da caixa e seleccione os bolos, biscoitos e bolachas preferidos da sua família!'
            : 'Choose your box size and pick your family’s favorite cakes, biscuits, and pastries!'}
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
            <strong>{t('treatBox.box4')}</strong>
            {boxSize === 4 && <Check size={16} className="size-check-icon" />}
          </div>
          <span className="size-btn-price">{formatCurrency(22.00)}</span>
          <span className="size-btn-desc">{t('treatBox.box4Desc')}</span>
        </button>

        <button
          type="button"
          onClick={() => setBoxSize(6)}
          className={`size-btn ${boxSize === 6 ? 'active' : ''}`}
          aria-pressed={boxSize === 6}
        >
          <div className="size-btn-head">
            <strong>{t('treatBox.box6')}</strong>
            {boxSize === 6 && <Check size={16} className="size-check-icon" />}
          </div>
          <span className="size-btn-price">{formatCurrency(32.00)}</span>
          <span className="size-btn-desc">{t('treatBox.box6Desc')}</span>
        </button>
      </div>

      <div className="builder-grid">
        {/* Available Treats Selection */}
        <div className="available-treats-col">
          <div className="col-header-row">
            <h4 className="column-title">{t('treatBox.step2')}</h4>
            <span className="col-counter-hint">
              {boxSize - selectedTreats.length === 0
                ? (locale === 'pt' ? 'Caixa completa!' : 'Box is full!')
                : (locale === 'pt' ? `Faltam ${boxSize - selectedTreats.length} doce(s)` : `Need ${boxSize - selectedTreats.length} more`)}
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
                  aria-label={`${t('common.addToCart')}: ${treat.name}`}
                >
                  <Plus size={14} /> {locale === 'pt' ? 'Adicionar' : 'Add'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Box Fill Slots */}
        <div className="box-slots-col">
          <div className="box-slots-header">
            <h4 className="column-title">
              {locale === 'pt' ? `Lugares na Caixa (${selectedTreats.length}/${boxSize})` : `Your Box Slots (${selectedTreats.length}/${boxSize})`}
            </h4>
            {selectedTreats.length > 0 && (
              <button
                type="button"
                onClick={handleClearBox}
                className="btn-clear-box"
                aria-label={t('common.clear')}
              >
                {t('common.clear')}
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
                        aria-label={`${t('treatBox.remove')}: ${treat.name}`}
                        title={t('treatBox.remove')}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ) : (
                    <div className="slot-empty-content">
                      <div className="empty-plus-icon">
                        <Plus size={18} />
                      </div>
                      <span>{locale === 'pt' ? `Espaço ${idx + 1} Livre` : `Slot ${idx + 1} Available`}</span>
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
                <strong>{t('treatBox.dietarySummary')}</strong>{' '}
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
                <Gift size={18} /> {locale === 'pt' ? `Embalar e Adicionar ao Cesto (${formatCurrency(boxPrice)})` : `Pack & Add Custom Box (${formatCurrency(boxPrice)})`}
              </>
            ) : (
              <>
                {t('treatBox.boxIncomplete', { remaining: boxSize - selectedTreats.length })}
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .treat-box-builder-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-lg);
          margin: 2.5rem 0;
        }
        .builder-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2rem auto;
        }
        .builder-title {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0.4rem 0 0.5rem 0;
        }
        .builder-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .size-selector-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .size-btn {
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .size-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
        }
        .size-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 4px 15px rgba(225, 40, 91, 0.12);
        }
        .size-btn-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
          color: var(--color-text-main);
        }
        .size-check-icon {
          color: var(--color-primary);
        }
        .size-btn-price {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .size-btn-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .builder-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.25fr;
          gap: 2rem;
          align-items: start;
        }
        .col-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .column-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }
        .col-counter-hint {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .treats-picker-grid {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-height: 480px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .treat-picker-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.85rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }
        .treat-picker-item:hover {
          border-color: var(--color-border);
          transform: translateX(3px);
        }
        .treat-picker-thumb {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .treat-picker-info {
          flex: 1;
          min-width: 0;
        }
        .treat-picker-name {
          display: block;
          font-size: 0.875rem;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .treat-picker-diet {
          display: flex;
          gap: 0.3rem;
          margin-top: 0.25rem;
        }
        .treat-mini-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-light);
          background: var(--color-bg-subtle);
          padding: 0.1rem 0.35rem;
          border-radius: var(--radius-sm);
        }
        .picker-add-btn {
          flex-shrink: 0;
        }
        .box-slots-col {
          background: #FAFAF9;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          border: 1px dashed var(--color-border);
        }
        .box-slots-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .btn-clear-box {
          background: none;
          border: none;
          color: var(--color-text-light);
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }
        .btn-clear-box:hover {
          color: var(--color-primary);
        }
        .slots-container {
          display: grid;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .slots-container.grid-4 {
          grid-template-columns: 1fr 1fr;
        }
        .slots-container.grid-6 {
          grid-template-columns: 1fr 1fr;
        }
        .box-slot {
          min-height: 84px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          transition: all var(--transition-fast);
        }
        .box-slot.empty {
          border: 2px dashed #D6D3D1;
          background: rgba(255, 255, 255, 0.6);
          justify-content: center;
        }
        .slot-empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          color: #A8A29E;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .empty-plus-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #E7E5E4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #78716C;
        }
        .box-slot.filled {
          border: 1px solid var(--color-border);
          background: #FFFFFF;
          box-shadow: var(--shadow-sm);
          padding: 0.5rem 0.65rem;
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
          flex: 1;
          min-width: 0;
        }
        .slot-title {
          display: block;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 0.35rem;
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast), background var(--transition-fast);
        }
        .btn-remove-slot:hover {
          color: #EF4444;
          background: #FEE2E2;
        }
        .box-dietary-summary {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
        }
        .summary-shield-icon {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .builder-grid {
            grid-template-columns: 1fr;
          }
          .size-selector-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
