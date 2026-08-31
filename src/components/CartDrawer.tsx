import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { X, Trash2, Plus, Minus, ShoppingBag, AlertTriangle, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    closeCart,
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItemsCount,
    dietaryWarnings,
    submitInquiryOrder,
  } = useCart();

  const { navigate } = useRouter();
  const { t, formatCurrency, locale } = useI18n();

  // Inquiry Checkout Form State
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    const res = await submitInquiryOrder({
      name,
      email,
      phone,
      eventDate,
      notes,
    });
    setIsSubmitting(false);

    if (res.success) {
      setConfirmedOrderId(res.orderId);
      setShowCheckoutForm(false);
    }
  };

  const handleCloseAndReset = () => {
    setConfirmedOrderId(null);
    setShowCheckoutForm(false);
    closeCart();
  };

  return (
    <div className="drawer-backdrop" onClick={handleCloseAndReset}>
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-header-left">
            <ShoppingBag size={22} color="#E1285B" />
            <h3 id="drawer-title" className="drawer-title">
              {locale === 'pt' ? 'O Seu Cesto de Compras' : 'Your Treat Box'} ({totalItemsCount})
            </h3>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="btn-icon"
            aria-label={t('common.close')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Confirmed Order State */}
        {confirmedOrderId ? (
          <div className="drawer-confirmed-state">
            <div className="confirmed-icon-circle">
              <CheckCircle2 size={48} color="#10B981" />
            </div>
            <h4 className="confirmed-title">{t('cart.form.successTitle')}</h4>
            <p className="confirmed-order-code">
              {locale === 'pt' ? 'Referência da Encomenda:' : 'Inquiry Reference:'} <strong>{confirmedOrderId}</strong>
            </p>
            <p className="confirmed-text">
              {t('cart.form.successMessage')}
            </p>
            <button
              onClick={handleCloseAndReset}
              className="btn btn-primary btn-full-width"
            >
              {locale === 'pt' ? 'Continuar a Navegar na Elamel' : 'Continue Exploring Elamel'}
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="drawer-empty-state">
            <ShoppingBag size={48} color="#CBD5E1" />
            <h4>{t('cart.empty')}</h4>
            <p>{t('cart.emptySubtitle')}</p>
            <button
              onClick={() => {
                closeCart();
                navigate('/colors');
              }}
              className="btn btn-primary"
            >
              {locale === 'pt' ? 'Ver Kits de Cerâmica' : 'Explore Elamel Colors'}
            </button>
          </div>
        ) : (
          <>
            {/* Drawer Body Items */}
            <div className="drawer-body">
              {/* Dietary Warning Banner */}
              {dietaryWarnings.length > 0 && (
                <div className="drawer-allergen-alert" role="alert">
                  <AlertTriangle size={18} color="#D97706" className="alert-icon-top" />
                  <div>
                    <strong>{t('common.allergens')}:</strong>
                    <ul className="allergen-list">
                      {dietaryWarnings.map((warn, i) => (
                        <li key={i}>{warn}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Items List */}
              <div className="drawer-items-list">
                {items.map((item) => (
                  <div key={item.id} className="drawer-item-row">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="drawer-item-thumb"
                    />

                    <div className="drawer-item-details">
                      <h4 className="drawer-item-name">{item.product.name}</h4>
                      <span className="drawer-item-price">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>

                      {/* Personalisation details snippet */}
                      {item.personalisation && (
                        <div className="item-personalisation-snippet">
                          <strong>"{item.personalisation.familyOrName}"</strong> • {item.personalisation.occasion}
                          <div className="snippet-msg">"{item.personalisation.customMessage}"</div>
                        </div>
                      )}

                      {/* Custom glazes snippet */}
                      {item.customGlazes && (
                        <div className="item-glazes-snippet">
                          <span>{locale === 'pt' ? 'Paleta Personalizada: ' : 'Custom Palette: '}</span>
                          {item.customGlazes.map((color, i) => (
                            <span key={i} className="mini-color-dot" style={{ backgroundColor: color }} />
                          ))}
                        </div>
                      )}

                      <div className="item-qty-actions">
                        <div className="drawer-qty-control">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="btn-drawer-qty"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="drawer-qty-val">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="btn-drawer-qty"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn-drawer-delete"
                          aria-label={`${t('treatBox.remove')}: ${item.product.name}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquiry Checkout Form if triggered */}
              {showCheckoutForm && (
                <form onSubmit={handleSubmit} className="drawer-checkout-form">
                  <h4 className="form-heading">{locale === 'pt' ? 'Concluir Pedido de Reserva:' : 'Complete Pre-order Request:'}</h4>
                  <div className="form-group">
                    <label className="form-label">{t('cart.form.fullName')} <span className="required-star">*</span></label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={locale === 'pt' ? 'ex: Maria Silva' : 'e.g. Maria Rossi'}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('cart.form.email')} <span className="required-star">*</span></label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maria@familia.pt"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('cart.form.phone')}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+351 912 345 678"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('cart.form.deliveryDate')}</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('cart.form.notes')}</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={locale === 'pt' ? 'Alguma alergia ou instrução especial de embalagem?' : 'Any dietary requirements or special inscription notes?'}
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-full-width"
                  >
                    <Send size={16} /> {isSubmitting ? t('common.loading') : t('cart.form.submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Drawer Footer Total */}
            <div className="drawer-footer">
              <div className="drawer-subtotal-row">
                <span className="subtotal-label">{t('cart.subtotal')}:</span>
                <span className="subtotal-amount">{formatCurrency(subtotal)}</span>
              </div>
              <p className="drawer-terms-note">
                {t('cart.inquiryNotice')}
              </p>

              {!showCheckoutForm ? (
                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="btn btn-primary btn-lg btn-full-width"
                >
                  <Sparkles size={18} /> {t('cart.checkoutButton')}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="btn btn-secondary btn-sm btn-full-width"
                >
                  {locale === 'pt' ? 'Modificar Artigos no Cesto' : 'Modify Items in Bag'}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .drawer-panel {
          width: 100%;
          max-width: 440px;
          height: 100%;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
          animation: slideInRight 0.25s ease-out;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .drawer-header-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .drawer-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem 1.5rem;
        }
        .drawer-empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          text-align: center;
          gap: 1rem;
          color: var(--color-text-muted);
        }
        .drawer-empty-state h4 {
          font-size: 1.25rem;
          color: var(--color-text-main);
          margin: 0;
        }
        .drawer-confirmed-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1.5rem;
          text-align: center;
          gap: 1rem;
        }
        .confirmed-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .confirmed-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0;
        }
        .confirmed-order-code {
          font-size: 0.9375rem;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          margin: 0;
        }
        .confirmed-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }
        .drawer-allergen-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          margin-bottom: 1.25rem;
          font-size: 0.8125rem;
          color: #92400E;
        }
        .alert-icon-top {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .allergen-list {
          margin: 0.35rem 0 0 1rem;
          padding: 0;
        }
        .drawer-items-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .drawer-item-row {
          display: flex;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .drawer-item-thumb {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          object-fit: cover;
          flex-shrink: 0;
        }
        .drawer-item-details {
          flex: 1;
          min-width: 0;
        }
        .drawer-item-name {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }
        .drawer-item-price {
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 800;
          color: var(--color-primary);
          display: block;
          margin-bottom: 0.35rem;
        }
        .item-personalisation-snippet {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.5rem;
        }
        .snippet-msg {
          font-style: italic;
          color: var(--color-text-light);
        }
        .item-glazes-snippet {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .mini-color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
        .item-qty-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-qty-control {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.15rem;
        }
        .btn-drawer-qty {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .drawer-qty-val {
          font-size: 0.8125rem;
          font-weight: 700;
          min-width: 1.5rem;
          text-align: center;
        }
        .btn-drawer-delete {
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 0.25rem;
          transition: color var(--transition-fast);
        }
        .btn-drawer-delete:hover {
          color: #EF4444;
        }
        .drawer-checkout-form {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 2px dashed var(--color-border);
        }
        .form-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 1rem;
        }
        .required-star {
          color: var(--color-primary);
        }
        .drawer-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--color-border-light);
          background: var(--color-surface);
        }
        .drawer-subtotal-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .subtotal-label {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .subtotal-amount {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .drawer-terms-note {
          font-size: 0.75rem;
          color: var(--color-text-light);
          line-height: 1.4;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};
