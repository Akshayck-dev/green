import { useState } from 'react';
import { Link } from 'react-router-dom';
import { shopProducts, filterCategories } from '../data/products';

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlist, setWishlist] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const filteredProducts =
    activeFilter === 'all'
      ? shopProducts
      : shopProducts.filter((p) => p.category === activeFilter);

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = (id) => {
    setAddedToCart((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Shop Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 text-center">
        <div className="inline-block mb-2 px-4 py-1 rounded-full bg-primary-fixed-dim/30 text-on-primary-fixed-variant font-body text-xs font-semibold uppercase tracking-widest">
          Farm Fresh Vitality
        </div>
        <h1 className="font-headline text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight text-primary mb-4">
          Microgreens Collection
        </h1>
        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
          Harvested at peak nutrient density. Delivered alive or freshly cut to your
          doorstep in pristine eco-packaging across India and the UAE.
        </p>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-full font-body text-[15px] font-semibold transition-all shadow-sm ${
                activeFilter === cat.value
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_32px_rgba(27,67,50,0.12)] transition-all flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-square bg-surface-container">
                {product.onSale && (
                  <div className="absolute top-2 left-2 z-10 bg-sale text-on-error font-body text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider">
                    Sale
                  </div>
                )}
                <Link to={`/product/${product.slug}`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <button
                  className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface transition-colors"
                  onClick={() => toggleWishlist(product.id)}
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{
                      fontVariationSettings: wishlist[product.id]
                        ? "'FILL' 1"
                        : "'FILL' 0",
                      color: wishlist[product.id] ? '#E07A5F' : 'inherit',
                    }}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <span className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-headline text-lg font-semibold text-primary mt-1 mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-surface-container flex items-center justify-between">
                  <div>
                    <span className="text-base font-semibold text-primary">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-text-secondary line-through ml-2">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity flex items-center gap-1 ${
                      addedToCart[product.id]
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-accent text-on-tertiary'
                    }`}
                    onClick={() => addToCart(product.id)}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {addedToCart[product.id] ? 'check' : 'shopping_bag'}
                    </span>
                    {addedToCart[product.id] ? 'Added' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex flex-col items-center justify-center mt-16 gap-4">
          <button className="px-16 py-4 rounded-full bg-primary text-on-primary font-body text-[15px] font-semibold hover:bg-primary-container transition-colors shadow-md flex items-center gap-2">
            <span>View More Harvests</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <span className="text-sm text-text-secondary">
            Showing {filteredProducts.length} of 24 available varieties
          </span>
        </div>
      </section>
    </div>
  );
}
