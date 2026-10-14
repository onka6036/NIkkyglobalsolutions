import { ArrowUpRight, BadgeCheck } from 'lucide-react';

export default function ProductCard({ product, onQuickEnquire, onViewDetails }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="pill">{product.availability}</span>
      </div>
      <div className="product-details">
        <div className="product-meta-row">
          <p>{product.category}</p>
          <span className="price-tag">{product.priceLabel}</span>
        </div>
        <h3>{product.name}</h3>
        <p className="muted-text product-description">{product.description}</p>
        <div className="product-footer">
          <strong>£{product.price.toLocaleString()}</strong>
          <div className="product-buttons">
            <button type="button" className="text-button" onClick={() => onViewDetails(product)}>
              View details <ArrowUpRight size={16} />
            </button>
            <button type="button" className="primary-button small" onClick={() => onQuickEnquire(product.name)}>
              Request This Item
            </button>
          </div>
        </div>
        <div className="product-note">
          <BadgeCheck size={14} />
          <span>{product.priceLabel}</span>
        </div>
      </div>
    </article>
  );
}
