import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const FREE_SHIPPING_THRESHOLD = 500;

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalCartItems,
    clearCart,
  } = useCart();

  if (!cartOpen) return null;

  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 60;
  const grandTotal = subtotal + shippingFee;

  const handleCheckout = () => {
    alert('Thank you for choosing Caeris Greens! Order placement demo simulated.');
    clearCart();
    setCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-surface h-full shadow-2xl flex flex-col z-10 animate-slide-left">
        {/* Header */}
        <div className="p-6 border-b border-surface-container-highest flex items-center justify-between bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">shopping_bag</span>
            <h3 className="font-headline text-xl font-bold text-primary">
              Your Harvest Bag ({totalCartItems})
            </h3>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="px-6 py-3 bg-primary-container/20 border-b border-surface-container-highest">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5 text-on-surface">
            {remainingForFreeShipping > 0 ? (
              <span>Add ₹{remainingForFreeShipping} more for <strong className="text-secondary">FREE Delivery</strong></span>
            ) : (
              <span className="text-secondary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                You unlocked FREE cold-chain shipping!
              </span>
            )}
            <span>{Math.round(freeShippingProgress)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className="h-full bg-secondary transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[32px]">eco</span>
              </div>
              <h4 className="font-headline text-lg font-bold text-on-surface mb-1">
                Your Bag is Empty
              </h4>
              <p className="font-body text-sm text-on-surface-variant mb-6 max-w-xs">
                Explore our nutrient-dense microgreens harvested hours before delivery.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="bg-primary text-on-primary px-6 py-3 rounded-full font-body text-sm font-semibold hover:bg-primary-container transition-colors shadow-md"
              >
                Browse Harvests
              </button>
            </div>
          ) : (
            cartItems.map((item) => {
              const itemPrice = item.product.price + (item.option.includes('Live Growth') ? 80 : 0);
              return (
                <div
                  key={`${item.id}-${item.option}`}
                  className="flex gap-4 p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-surface-container"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-headline text-base font-semibold text-primary">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.option)}
                          className="text-on-surface-variant hover:text-error transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                      <span className="inline-block text-[11px] font-semibold text-secondary uppercase tracking-wider bg-secondary-fixed/30 px-2 py-0.5 rounded-md mt-0.5">
                        {item.option}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 border border-outline-variant/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.option, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-on-surface hover:bg-surface-container transition-colors font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.option, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-on-surface hover:bg-surface-container transition-colors font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-headline font-bold text-sm text-primary">
                        ₹{itemPrice * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-surface-container-highest bg-surface-container-lowest flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Cold Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-secondary">FREE</strong> : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between font-headline font-bold text-lg text-primary pt-2 border-t border-surface-container">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-accent text-on-tertiary h-13 rounded-full font-body text-base font-semibold hover:opacity-95 transition-opacity shadow-[0_8px_24px_rgba(224,122,95,0.3)] flex items-center justify-center gap-2 mt-2"
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-text-secondary mt-1">
              <span className="material-symbols-outlined text-secondary text-[14px]">eco</span>
              <span>100% Organically Grown • Harvested Same Day</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
