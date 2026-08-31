import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { useI18n } from '../context/I18nContext';
import { ALL_PRODUCTS } from '../data/mockData';
import { ColorProduct, GoodiesProduct, PersonalisationItem } from '../types';
import { X, Star, Plus, Minus, ShieldCheck, AlertTriangle, Sparkles, Check, Info, Heart } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const { selectedProductId, closeProductModal, navigate } = useRouter();
  const { addToCart } = useCart();
  const { t, formatCurrency, locale } = useI18n();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'safety' | 'care' | 'family'>('overview');

  const product = ALL_PRODUCTS.find((p) => p.id === selectedProductId);

  if (!product) return null;

  const isColor = product.category === 'colors';
  const isGoodies = product.category === 'goodies';
  const isMoment = product.category === 'moments';

  const colorProd = isColor ? (product as ColorProduct) : null;
  const goodiesProd = isGoodies ? (product as GoodiesProduct) : null;
  const momentProd = isMoment ? (product as PersonalisationItem) : null;

  const handleAdd = () => {
    if (isMoment) {
      closeProductModal();
      navigate('/moments-souvenirs');
      return;
    }
    addToCart(product, quantity);
    closeProductModal();
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="modal-dialog product-modal-dialog">
        <button
          onClick={closeProductModal}
          className="btn-icon modal-close-btn"
          aria-label={t('common.close')}
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          {/* Media Column */}
          <div className="product-modal-media-col">
            <div className="product-modal-image-wrap">
              <img
                src={product.image}
                alt={`${product.name} - ${product.description}`}
                className="product-modal-image"
              />
              <div className="product-modal-tag-overlay">
                <span className="badge badge-primary">{product.subcategory}</span>
              </div>
            </div>

            {/* Quick Badges below image */}
            <div className="product-modal-badges">
              {colorProd && (
                <>
                  <div className="modal-badge-item">
                    <ShieldCheck size={16} color="#10B981" />
                    <span>{locale === 'pt' ? 'Vidrados Não-Tóxicos e Sem Chumbo' : 'Non-Toxic Lead-Free Glazes'}</span>
                  </div>
                  <div className="modal-badge-item">
                    <Sparkles size={16} color="#F8971D" />
                    <span>{locale === 'pt' ? `Nível ${colorProd.difficulty}` : `${colorProd.difficulty} Level`}</span>
                  </div>
                </>
              )}
              {goodiesProd && (
                <>
                  <div className="modal-badge-item">
                    <ShieldCheck size={16} color="#10B981" />
                    <span>{locale === 'pt' ? 'Pastelaria Sem Amendoins' : 'Peanut-Free Dedicated Bakery'}</span>
                  </div>
                  <div className="modal-badge-item">
                    <Heart size={16} color="#E1285B" />
                    <span>{locale === 'pt' ? `${goodiesProd.servings} Porções` : `${goodiesProd.servings} Servings`}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="product-modal-details-col">
            <div className="modal-header-meta">
              <span className="modal-category-label">elamel • {product.category.toUpperCase()}</span>
              <div className="modal-rating">
                <Star size={14} fill="#F8971D" color="#F8971D" />
                <strong>{product.rating.toFixed(1)}</strong>
                <span>({product.reviewCount} {t('common.reviews')})</span>
              </div>
            </div>

            <h2 id="modal-product-title" className="product-modal-title">
              {product.name}
            </h2>

            <div className="product-modal-price-row">
              <span className="product-modal-price">{formatCurrency(product.price)}</span>
              {goodiesProd && <span className="modal-portion-tag">{goodiesProd.portionSize}</span>}
              {colorProd && <span className="modal-portion-tag">{colorProd.dimensions}</span>}
            </div>

            <p className="product-modal-summary">{product.longDescription}</p>

            {/* Tab Navigation */}
            <div className="modal-tabs" role="tablist" aria-label="Product Information Tabs">
              <button
                role="tab"
                aria-selected={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
                className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              >
                {isColor ? (locale === 'pt' ? 'Materiais & Kit' : 'Materials & Kit') : isGoodies ? (locale === 'pt' ? 'Ingredientes & Sabor' : 'Flavor & Ingredients') : (locale === 'pt' ? 'Especificações' : 'Specifications')}
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'safety'}
                onClick={() => setActiveTab('safety')}
                className={`modal-tab-btn ${activeTab === 'safety' ? 'active' : ''}`}
              >
                {isGoodies ? (locale === 'pt' ? 'Alergénios & Dieta' : 'Allergen Information') : (locale === 'pt' ? 'Segurança Infantil' : 'Safety Guidelines')}
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'care'}
                onClick={() => setActiveTab('care')}
                className={`modal-tab-btn ${activeTab === 'care' ? 'active' : ''}`}
              >
                {isGoodies ? (locale === 'pt' ? 'Conservação' : 'Storage & Serving') : (locale === 'pt' ? 'Cuidado & Cura' : 'Care & Curing')}
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'family'}
                onClick={() => setActiveTab('family')}
                className={`modal-tab-btn ${activeTab === 'family' ? 'active' : ''}`}
              >
                {locale === 'pt' ? 'Momento em Família' : 'Family Moments Tip'}
              </button>
            </div>

            {/* Tab Panels */}
            <div className="modal-tab-content" role="tabpanel">
              {activeTab === 'overview' && (
                <div className="tab-pane">
                  {colorProd && (
                    <>
                      <h4 className="tab-section-heading">{locale === 'pt' ? 'Conteúdo da Caixa de Pintura:' : "What's Inside Your Craft Box:"}</h4>
                      <ul className="modal-bullets">
                        {colorProd.materials.map((mat, i) => (
                          <li key={i}>
                            <Check size={14} color="#10B981" /> {mat}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {goodiesProd && (
                    <>
                      <h4 className="tab-section-heading">{locale === 'pt' ? 'Sabor e Ingredientes Naturais:' : 'Flavor & Natural Ingredients:'}</h4>
                      <p className="tab-highlight"><strong>{locale === 'pt' ? 'Perfil de Sabor:' : 'Flavor Profile:'}</strong> {goodiesProd.flavorProfile}</p>
                      <ul className="modal-bullets">
                        {goodiesProd.ingredients.map((ing, i) => (
                          <li key={i}>
                            <Check size={14} color="#10B981" /> {ing}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {momentProd && (
                    <>
                      <h4 className="tab-section-heading">{locale === 'pt' ? 'Processo de Confecção e Gravação:' : 'Personalization Process:'}</h4>
                      <ul className="modal-bullets">
                        {momentProd.customizationSteps.map((step, i) => (
                          <li key={i}>
                            <Check size={14} color="#10B981" /> {step}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'safety' && (
                <div className="tab-pane">
                  {colorProd && (
                    <div className="safety-alert-box">
                      <ShieldCheck size={20} color="#10B981" />
                      <div>
                        <strong>{locale === 'pt' ? 'Segurança Infantil e Certificação Não-Tóxica:' : 'Child Safety & Non-Toxic Certification:'}</strong>
                        <p>{colorProd.safetyInfo}</p>
                        <p className="sub-note"><strong>{locale === 'pt' ? 'Idade Recomendada:' : 'Recommended Age:'}</strong> {colorProd.recommendedAge}</p>
                      </div>
                    </div>
                  )}
                  {goodiesProd && (
                    <div className="allergen-alert-box">
                      <AlertTriangle size={20} color="#D97706" />
                      <div>
                        <strong>{locale === 'pt' ? 'Avisos Alergénicos e Dieta:' : 'Allergen & Diet Advice:'}</strong>
                        <p>{goodiesProd.allergenWarning}</p>
                        <div className="diet-tags-wrap">
                          {goodiesProd.dietaryTags.map((tag) => (
                            <span key={tag} className="badge badge-diet">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {momentProd && (
                    <p>{locale === 'pt' ? 'Inspecionado manualmente para garantir a mais elevada qualidade de loiça de família. Vidrados e embalagens seguros.' : 'Hand-inspected for highest heirloom quality. Non-toxic glazes and packaging.'}</p>
                  )}
                </div>
              )}

              {activeTab === 'care' && (
                <div className="tab-pane">
                  {colorProd && (
                    <>
                      <h4 className="tab-section-heading">{locale === 'pt' ? 'Instruções de Lavagem e Cura:' : 'Washing & Curing Instructions:'}</h4>
                      <ul className="modal-bullets">
                        {colorProd.careInstructions.map((c, i) => (
                          <li key={i}><Info size={14} color="#0284C7" /> {c}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {goodiesProd && (
                    <>
                      <h4 className="tab-section-heading">{locale === 'pt' ? 'Conservação e Temperatura de Serviço:' : 'Freshness & Serving Temperature:'}</h4>
                      <p><strong>{locale === 'pt' ? 'Conservação:' : 'Storage:'}</strong> {goodiesProd.storageInstructions}</p>
                      <p><strong>{locale === 'pt' ? 'Sugestão de Degustação:' : 'Serving Suggestion:'}</strong> {goodiesProd.servingTemperature}</p>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'family' && (
                <div className="tab-pane">
                  {colorProd && (
                    <div className="family-tip-box">
                      <Sparkles size={20} color="#E1285B" />
                      <div>
                        <strong>{locale === 'pt' ? 'Sugestão para a Família:' : 'Shared Memory Tip:'}</strong>
                        <p>{colorProd.familyMomentTip}</p>
                      </div>
                    </div>
                  )}
                  {goodiesProd && (
                    <div className="family-tip-box">
                      <Heart size={20} color="#E1285B" />
                      <div>
                        <strong>{locale === 'pt' ? 'Sugestão para Celebração:' : 'Celebration Suggestion:'}</strong>
                        <p>{locale === 'pt' ? 'Combina na perfeição com lanches de domingo, aniversários e histórias à mesa.' : 'Pairs wonderfully with weekend storytime or family milestone afternoon teas.'}</p>
                      </div>
                    </div>
                  )}
                  {momentProd && (
                    <div className="family-stories-list">
                      {momentProd.sampleStories.map((story, i) => (
                        <div key={i} className="sample-story-card">
                          <strong>"{story.title}"</strong> — <em>{story.family}</em>
                          <p>"{story.quote}"</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="modal-action-bar">
              {!isMoment && (
                <div className="quantity-counter" aria-label="Quantity selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="btn-qty"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-value" aria-live="polite">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="btn-qty"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              )}

              <button
                onClick={handleAdd}
                className="btn btn-primary btn-lg flex-grow-btn"
              >
                {isMoment ? (
                  <>{locale === 'pt' ? 'Personalizar no Estúdio ao Vivo' : 'Customize in Studio & Live Preview'}</>
                ) : (
                  <>
                    <Plus size={18} /> {t('common.addToCart')} ({formatCurrency(product.price * quantity)})
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-modal-dialog {
          max-width: 880px;
          padding: 2.25rem;
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          z-index: 10;
        }
        .product-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2.5rem;
        }
        .product-modal-image-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-bg-subtle);
          box-shadow: var(--shadow-md);
        }
        .product-modal-image {
          width: 100%;
          height: 340px;
          object-fit: cover;
        }
        .product-modal-tag-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }
        .product-modal-badges {
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .modal-badge-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-surface);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
        }
        .modal-header-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .modal-category-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }
        .modal-rating {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .product-modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .product-modal-price-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .product-modal-price {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .modal-portion-tag {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-light);
        }
        .product-modal-summary {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .modal-tabs {
          display: flex;
          gap: 0.35rem;
          border-bottom: 1px solid var(--color-border-light);
          margin-bottom: 1rem;
          overflow-x: auto;
          padding-bottom: 2px;
        }
        .modal-tab-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-light);
          padding: 0.5rem 0.85rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .modal-tab-btn:hover {
          color: var(--color-primary);
        }
        .modal-tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
          font-weight: 700;
        }
        .modal-tab-content {
          min-height: 160px;
          margin-bottom: 1.5rem;
        }
        .tab-section-heading {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.6rem;
        }
        .modal-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .modal-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        .safety-alert-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .allergen-alert-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .diet-tags-wrap {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .family-tip-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--color-primary-light);
          border: 1px solid rgba(225, 40, 91, 0.2);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .family-stories-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .sample-story-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-sm);
          padding: 0.6rem 0.75rem;
          font-size: 0.8125rem;
        }
        .modal-action-bar {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border-light);
        }
        .quantity-counter {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.25rem;
          background: var(--color-surface);
        }
        .btn-qty {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .btn-qty:hover {
          background: var(--color-bg-subtle);
        }
        .qty-value {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9375rem;
          min-width: 2rem;
          text-align: center;
        }
        .flex-grow-btn {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .product-modal-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .product-modal-image {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
};
