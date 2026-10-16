import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/catalog';

export default function Shop({ onQuickEnquire, onViewProduct }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('featured');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const byCategory = products.filter((product) => {
      if (activeCategory === 'All') return true;
      return product.category === activeCategory;
    });

    const bySearch = byCategory.filter((product) => {
      if (!normalizedSearch) return true;
      return (
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch)
      );
    });

    const sorted = [...bySearch];
    if (sortOrder === 'low-high') {
      sorted.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === 'high-low') {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [activeCategory, search, sortOrder]);

  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <p className="eyebrow">Our collection</p>
          <h1>Curated antique accessories</h1>
        </div>
      </section>

      <section className="section">
        <div className="container shop-toolbar">
          <div className="search-box">
            <Search size={18} />
            <input
              type="search"
              aria-label="Search products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search antiques, décor, or styles"
            />
            {search && (
              <button type="button" className="clear-search" onClick={() => setSearch('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="filter-row">
            <label className="sort-select">
              <SlidersHorizontal size={16} />
              <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                <option value="featured">Featured first</option>
                <option value="low-high">Price: low to high</option>
                <option value="high-low">Price: high to low</option>
              </select>
            </label>
          </div>
        </div>

        <div className="container">
          <div className="category-filters" aria-label="Category filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={category === activeCategory ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickEnquire={onQuickEnquire}
                onViewDetails={onViewProduct}
              />
            ))
          ) : (
            <div className="empty-state">
              <h3>No pieces are currently available</h3>
              <p>Contact us if you would like help sourcing a particular antique.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
