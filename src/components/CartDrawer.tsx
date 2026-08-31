import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
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
              Your Treat Box ({totalItemsCount})
            </h3>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="btn-icon"
            aria-label="Close Treat Box Drawer"
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
            <h4 className="confirmed-title">Request Received!</h4>
            <p className="confirmed-order-code">
              Inquiry Reference: <strong>{confirmedOrderId}</strong>
            </p>
            <p className="confirmed-text">
              Thank you, <strong>{name}</strong>! We've sent a detailed confirmation to <strong>{email}</strong>.
              Our craft studio and bakery team will prepare your family order with love and contact you within 24 hours.
            </p>
            <button
              onClick={handleCloseAndReset}
              className="btn btn-primary btn-full-width"
            >
              Continue Exploring Elamel
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="drawer-empty-state">
            <ShoppingBag size={48} color="#CBD5E1" />
            <h4>Your Treat Box is Empty</h4>
            <p>Explore our ceramic craft kits, artisanal bakery treats, and personalized family keepsakes!</p>
            <button
              onClick={() => {
                closeCart();
                navigate('/colors');
              }}
              className="btn btn-primary"
            >
              Explore Elamel Colors
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
                    <strong>Allergen Notice:</strong>
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
                        ${(item.product.price * item.quantity).toFixed(2)}
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
                          <span>Custom Palette: </span>
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
                          aria-label={`Remove ${item.product.name}`}
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
                  <h4 className="form-heading">Complete Pre-order Request:</h4>
                  <div className="form-group">
                    <label className="form-label">Full Name <span className="required-star">*</span></label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maria Rossi"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address <span className="required-star">*</span></label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. maria@family.com"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Celebration / Delivery Date</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Special Requests & Dietary Notes</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any allergen instructions or gift card notes..."
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-full-width"
                  >
                    <Send size={16} /> {isSubmitting ? 'Submitting Request...' : 'Send Pre-Order Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Drawer Footer Summary */}
            <div className="drawer-footer">
              <div className="drawer-subtotal-row">
                <span>Estimated Subtotal:</span>
                <strong className="subtotal-val">${subtotal.toFixed(2)}</strong>
              </div>

              {!showCheckoutForm ? (
                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="btn btn-primary btn-lg btn-full-width"
                >
                  <Sparkles size={18} /> Request Pre-order (${subtotal.toFixed(2)})
                </button>
              ) : (
                <button
                  onClick={() => setShowCheckoutForm(false)}
                  className="btn btn-secondary btn-full-width"
                >
                  Back to Item List
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .drawer-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .drawer-title {
          font-size: 1.35rem;
          color: var(--color-text-main);
        }
        .drawer-body {
          padding: 1.5rem;
          overflow-y: auto;
          flex-grow: 1;
        }
        .drawer-empty-state,
        .drawer-confirmed-state {
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: auto;
        }
        .confirmed-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .confirmed-title {
          font-size: 1.6rem;
          color: #065F46;
        }
        .confirmed-order-code {
          background: var(--color-bg-subtle);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
        }
        .confirmed-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .drawer-allergen-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          font-size: 0.8125rem;
          color: #92400E;
          margin-bottom: 1.25rem;
        }
        .alert-icon-top {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .allergen-list {
          margin-top: 0.25rem;
          padding-left: 1.2rem;
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
          width: 70px;
          height: 70px;
          border-radius: var(--radius-md);
          object-fit: cover;
          flex-shrink: 0;
        }
        .drawer-item-details {
          flex-grow: 1;
        }
        .drawer-item-name {
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
          color: var(--color-text-main);
        }
        .drawer-item-price {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-primary);
          font-size: 1rem;
          display: block;
          margin-bottom: 0.35rem;
        }
        .item-personalisation-snippet {
          background: var(--color-bg-subtle);
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .snippet-msg {
          font-family: var(--font-handwriting);
          font-size: 0.9rem;
          color: var(--color-primary);
        }
        .item-glazes-snippet {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--color-text-light);
          margin-bottom: 0.5rem;
        }
        .mini-color-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          border: 1px solid #CBD5E1;
        }
        .item-qty-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
        }
        .drawer-qty-control {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.15rem;
          background: #FFFFFF;
        }
        .btn-drawer-qty {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: var(--color-bg-subtle);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .drawer-qty-val {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8125rem;
          width: 28px;
          text-align: center;
        }
        .btn-drawer-delete {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: var(--radius-sm);
        }
        .btn-drawer-delete:hover {
          color: #DC2626;
        }
        .drawer-checkout-form {
          background: var(--color-bg-subtle);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          margin-top: 1.5rem;
          border: 1px solid var(--color-border-light);
        }
        .form-heading {
          font-size: 1.05rem;
          margin-bottom: 1rem;
        }
        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--color-border-light);
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .drawer-subtotal-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.1rem;
          color: var(--color-text-main);
        }
        .subtotal-val {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: var(--color-primary);
        }
        .btn-full-width {
          width: 100%;
        }
      `}</style>
    </div>
  );
};
