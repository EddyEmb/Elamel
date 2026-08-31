import React from 'react';
import { Product, ColorProduct, GoodiesProduct, PersonalisationItem } from '../types';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { Star, Plus, Eye, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { openProductModal, navigate } = useRouter();

  const isColor = product.category === 'colors';
  const isGoodies = product.category === 'goodies';
  const isMoment = product.category === 'moments';

  const colorProd = isColor ? (product as ColorProduct) : null;
  const goodiesProd = isGoodies ? (product as GoodiesProduct) : null;
  const momentProd = isMoment ? (product as PersonalisationItem) : null;

  return (
    <article className="product-card" aria-labelledby={`prod-title-${product.id}`}>
      {/* Media & Badges */}
      <div className="product-card-media">
        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="product-card-img"
          loading="lazy"
        />

        {/* Category & Featured Badge */}
        <div className="product-card-badge-top">
          {product.isFeatured && (
            <span className="badge badge-primary">
              <Sparkles size={11} /> Featured
            </span>
          )}
        </div>

        {/* Overlay Action Button on Hover */}
        <div className="product-card-overlay">
          <button
            onClick={() => openProductModal(product.id)}
            className="btn btn-secondary btn-sm overlay-btn"
            aria-label={`View full details for ${product.name}`}
          >
            <Eye size={15} /> Quick View
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="product-card-body">
        <div className="product-card-meta">
          <span className="product-subcategory">{product.subcategory}</span>
          <div className="product-rating" aria-label={`${product.rating} stars out of 5 from ${product.reviewCount} reviews`}>
            <Star size={13} fill="#F8971D" color="#F8971D" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="review-count">({product.reviewCount})</span>
          </div>
        </div>

        <h3 id={`prod-title-${product.id}`} className="product-card-title">
          <button
            onClick={() => openProductModal(product.id)}
            className="product-title-btn"
          >
            {product.name}
          </button>
        </h3>

        <p className="product-card-desc">{product.description}</p>

        {/* Specific Category Indicators */}
        <div className="product-attribute-row">
          {colorProd && (
            <>
              <span className="attribute-pill">
                <ShieldCheck size={13} color="#10B981" /> {colorProd.recommendedAge}
              </span>
              <span className="attribute-pill">
                {colorProd.glazeCount} Glaze Colors
              </span>
            </>
          )}

          {goodiesProd && (
            <>
              <span className="attribute-pill">
                🍽️ {goodiesProd.portionSize.split('(')[0]}
              </span>
              {goodiesProd.dietaryTags.slice(0, 2).map((tag) => (
                <span key={tag} className="badge badge-diet">
                  {tag}
                </span>
              ))}
            </>
          )}

          {momentProd && (
            <span className="attribute-pill">
              <HeartHandshake size={13} color="#E1285B" /> Personalised Inscription
            </span>
          )}
        </div>

        {/* Card Footer with Price & Actions */}
        <div className="product-card-footer">
          <div className="product-price-wrap">
            <span className="price-prefix">{isMoment ? 'from ' : ''}</span>
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>

          <div className="product-actions-group">
            {isMoment ? (
              <button
                onClick={() => navigate('/moments-souvenirs')}
                className="btn btn-primary btn-sm"
                aria-label={`Personalize ${product.name}`}
              >
                Personalize
              </button>
            ) : (
              <button
                onClick={() => addToCart(product, 1)}
                className="btn btn-primary btn-sm"
                aria-label={`Add ${product.name} to Treat Box`}
              >
                <Plus size={15} /> Add to Box
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .product-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          backdrop-filter: blur(2px);
        }
        .product-card:hover .product-card-overlay {
          opacity: 1;
        }
        .overlay-btn {
          box-shadow: var(--shadow-lg);
        }
        .product-subcategory {
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .review-count {
          color: var(--color-text-light);
          font-weight: 400;
        }
        .product-title-btn {
          background: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          text-align: left;
          cursor: pointer;
          padding: 0;
          line-height: 1.3;
          transition: color var(--transition-fast);
        }
        .product-title-btn:hover {
          color: var(--color-primary);
        }
        .product-attribute-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .attribute-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
        }
        .price-prefix {
          font-size: 0.8125rem;
          color: var(--color-text-light);
        }
        .product-actions-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
      `}</style>
    </article>
  );
};
