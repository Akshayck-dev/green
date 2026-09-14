import { useState } from 'react';
import { Link } from 'react-router-dom';
import { shopProducts, filterCategories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlist, setWishlist] = useState({});
  const { addToCart, setQuickViewProduct, showToast } = useCart();

  const filteredProducts =
    activeFilter === 'all'
      ? shopProducts
      : shopProducts.filter((p) => p.category === activeFilter);

  const toggleWishlist = (product) => {
    const nextState = !wishlist[product.id];
    setWishlist((prev) => ({ ...prev, [product.id]: nextState }));
    showToast(
      nextState
        ? `Saved ${product.name} to your wishlist!`
        : `Removed ${product.name} from wishlist.`,
      'info'
    );
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
              className={`px-5 py-2.5 rounded-full font-body text-[14px] font-semibold transition-all shadow-sm ${
                activeFilter === cat.value
                  ? 'bg-primary text-on-primary shadow-md scale-105'
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
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] hover:shadow-[0_16px_36px_rgba(27,67,50,0.14)] transition-all duration-300 flex flex-col justify-between border border-outline-variant/20 hover:-translate-y-1"
            >
              {/* Card Header & Image */}
              <div className="relative overflow-hidden aspect-square bg-surface-container">
                {product.onSale && (
                  <div className="absolute top-3 left-3 z-10 bg-sale text-on-error font-body text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Sale
                  </div>
                )}
                {product.stockStatus && (
                  <div className="absolute bottom-3 left-3 z-10 bg-surface/90 backdrop-blur-md text-secondary font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {product.stockStatus}
                  </div>
                )}
                <Link to={`/product/${product.slug}`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>

                {/* Wishlist Button */}
                <button
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface transition-colors shadow-sm"
                  onClick={() => toggleWishlist(product)}
                  title="Wishlist"
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

                {/* Quick View Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setQuickViewProduct(product);
                  }}
                  className="absolute bottom-3 right-3 z-10 bg-surface/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 hover:bg-primary hover:text-white transition-all duration-300 border border-primary/20 cursor-pointer"
                  title="Quick View Product"
                >
                  <span className="material-symbols-outlined text-[15px]">visibility</span>
                  <span>Quick View</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-body text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    {product.rating && (
                      <div className="flex items-center gap-0.5 text-accent text-xs font-semibold">
                        <span
                          className="material-symbols-outlined text-[14px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span>{product.rating}</span>
                      </div>
                    )}
                  </div>

                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-headline text-lg font-bold text-primary hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-text-secondary line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-surface-container flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary font-headline">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-text-secondary line-through ml-1.5">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className="bg-accent text-on-tertiary px-4 py-2 rounded-full font-body text-xs font-semibold hover:opacity-95 transition-opacity flex items-center gap-1.5 shadow-sm hover:scale-105"
                    onClick={() => addToCart(product, 1)}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      shopping_bag
                    </span>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex flex-col items-center justify-center mt-16 gap-4">
          <button className="px-12 py-3.5 rounded-full bg-primary text-on-primary font-body text-[15px] font-semibold hover:bg-primary-container transition-colors shadow-md flex items-center gap-2">
            <span>View More Harvest Trays</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <span className="text-xs font-semibold text-text-secondary">
            Showing {filteredProducts.length} of 24 available microgreen varieties
          </span>
        </div>
      </section>
    </div>
  );
}

