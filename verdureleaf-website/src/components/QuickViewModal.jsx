import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import FlavorProfileGauge from './FlavorProfileGauge';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState('50g Fresh Cut Punnet');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const extraPrice = selectedOption.includes('Live Growth') ? 80 : 0;
  const itemPrice = (product.price + extraPrice) * quantity;

  const handleAdd = () => {
    addToCart(product, quantity, selectedOption);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative bg-surface rounded-2xl max-w-3xl w-full p-6 md:p-8 z-10 shadow-2xl border border-surface-container-highest overflow-hidden animate-scale-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors z-20"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Image & Gauges */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-surface-container border border-outline-variant/20">
              {product.onSale && (
                <span className="absolute top-3 left-3 z-10 bg-sale text-on-error font-body text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Sale
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.flavorProfile && (
              <FlavorProfileGauge profile={product.flavorProfile} />
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest">
                  {product.categoryLabel || 'Microgreens'}
                </span>
                <span className="text-[11px] font-semibold text-secondary bg-secondary-fixed/30 px-2 py-0.5 rounded-full">
                  {product.stockStatus || 'In Stock'}
                </span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                {product.name}
              </h2>
              {product.rating && (
                <div className="flex items-center gap-1 mt-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="text-xs font-semibold text-on-surface ml-1">
                    {product.rating} ({product.reviews || 45} reviews)
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-headline text-3xl font-bold text-primary">
                ₹{product.price + extraPrice}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-on-surface-variant line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {product.description}
            </p>

            {/* Tray Option Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-xs font-semibold uppercase text-on-surface tracking-wider">
                Select Option:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '50g Fresh Cut Punnet',
                  '100g Live Growth Tray (+₹80)',
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all text-left ${
                      selectedOption === opt
                        ? 'border-primary bg-primary-container/10 text-primary ring-1 ring-primary'
                        : 'border-outline-variant/40 bg-surface-container-low text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            {product.features && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.features.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary-fixed/20 px-2.5 py-1 rounded-full"
                  >
                    <span className="material-symbols-outlined text-[12px]">eco</span>
                    {feat}
                  </span>
                ))}
              </div>
            )}

            {/* Quantity and Add Button */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center bg-surface-container-low rounded-xl p-1 border border-outline-variant/30">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container font-bold text-on-surface"
                >
                  -
                </button>
                <span className="w-10 text-center font-semibold text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container font-bold text-on-surface"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-accent text-on-tertiary h-12 rounded-full font-body text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-opacity cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Add to Bag — ₹{itemPrice}</span>
              </button>
            </div>

            <Link
              to={`/product/${product.slug}`}
              onClick={() => setQuickViewProduct(null)}
              className="text-center text-xs font-semibold text-primary hover:underline pt-2 block"
            >
              View Full Product Page Details &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
