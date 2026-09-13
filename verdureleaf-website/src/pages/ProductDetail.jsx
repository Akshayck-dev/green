import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, relatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[3]; // default to broccoli
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('50g Fresh Cut Punnet');
  const { addToCart } = useCart();

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
  }, [slug]);

  const images = product.detailImages || [product.image];
  const extraPrice = selectedOption.includes('Live Growth') ? 80 : 0;
  const price = product.price + extraPrice;
  const originalPrice = product.originalPrice;
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOption);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 w-full flex items-center justify-between text-sm text-on-surface-variant">
        <div className="flex items-center gap-1">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">{product.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
          <span className="text-xs uppercase font-body font-semibold tracking-wider text-secondary">
            In Stock • Harvested Today
          </span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16 pt-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:sticky lg:top-28">
            {/* Main Image */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] bg-surface-container-high relative group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${images[selectedImage]}')` }}
              />
              <div className="absolute top-4 left-4 bg-accent text-on-tertiary px-4 py-1 rounded-full font-body text-[10px] font-semibold uppercase tracking-widest shadow-sm">
                Best Seller
              </div>
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer bg-surface-container-high transition-opacity ${
                      idx === selectedImage
                        ? 'ring-2 ring-primary ring-offset-2 opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Header Info */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-body font-semibold text-secondary tracking-widest">
                  {product.sku || `SKU: VL-${product.slug?.slice(0, 6).toUpperCase()}`}
                </span>
                {product.rating && (
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-sm font-semibold text-on-surface ml-1">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                )}
              </div>
              <h1 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface tracking-tight mt-1">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-3xl font-headline font-bold text-primary">
                  ₹{price}
                </span>
                {originalPrice && (
                  <>
                    <span className="text-sm text-on-surface-variant line-through">
                      ₹{originalPrice}
                    </span>
                    <span className="bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-2 py-0.5 rounded">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-4">
              <p className="text-base text-on-surface leading-relaxed">
                {product.description}
              </p>
              {product.features && (
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-outline-variant/30">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        {feat.includes('Sulforaphane') ? 'bolt' : 'eco'}
                      </span>
                      <span className="text-sm font-semibold text-on-surface">{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col gap-5">
              {/* Option Selector */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-on-surface tracking-wider">
                  Select Harvest Format:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '50g Fresh Cut Punnet',
                    '100g Live Growth Tray (+₹80)',
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedOption(opt)}
                      className={`p-3 rounded-xl border text-sm font-semibold transition-all text-left flex items-center justify-between ${
                        selectedOption === opt
                          ? 'border-primary bg-primary-container/10 text-primary ring-2 ring-primary/40'
                          : 'border-outline-variant/40 bg-surface-container-low text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      <span>{opt}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        {selectedOption === opt ? 'radio_button_checked' : 'radio_button_unchecked'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-on-surface">Quantity:</span>
                <div className="flex items-center bg-surface-container-low rounded-xl p-1 border border-outline-variant/20">
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors text-on-surface font-bold text-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-on-surface text-base">
                    {quantity}
                  </span>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors text-on-surface font-bold text-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-accent text-on-tertiary h-14 rounded-full font-body text-base font-semibold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(224,122,95,0.3)] hover:opacity-95 hover:scale-[1.01] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span>Add to Bag — ₹{price * quantity}</span>
              </button>
            </div>

            {/* Delivery Estimates */}
            <div className="bg-surface-container-highest/50 p-4 rounded-xl flex flex-col gap-4 mt-2">
              <h4 className="font-headline text-sm font-semibold text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  local_shipping
                </span>
                Estimated Harvest & Delivery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-surface p-2 rounded-lg flex flex-col gap-1">
                  <span className="font-semibold text-primary flex items-center gap-1">
                    🇮🇳 India
                  </span>
                  <span className="text-on-surface-variant text-xs">
                    Delivered within 24-48 hours from harvest in Bangalore, Mumbai & Delhi
                    NCR.
                  </span>
                </div>
                <div className="bg-surface p-2 rounded-lg flex flex-col gap-1">
                  <span className="font-semibold text-primary flex items-center gap-1">
                    🇦🇪 UAE
                  </span>
                  <span className="text-on-surface-variant text-xs">
                    Fresh cold-chain air freight delivery across Dubai, Abu Dhabi & Sharjah
                    in 48h.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full bg-surface-container-low py-16 mt-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-body text-xs font-semibold uppercase text-secondary tracking-widest block mb-2">
                Complete Your Harvest
              </span>
              <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface">
                You Might Also Like
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
            >
              View all microgreens
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.slice(0, 3).map((item) => (
              <Link
                to={`/product/${item.slug}`}
                key={item.id}
                className="bg-surface rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.04)] flex flex-col group"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-high">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-primary">
                    ₹{item.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-body font-semibold text-secondary tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-headline text-lg font-semibold text-on-surface mt-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <button className="w-full border border-primary text-primary py-2 rounded-lg font-body text-[15px] font-semibold hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Quick Add
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
