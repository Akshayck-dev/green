import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'caerisgreens_cart_v1';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'success', visible: false });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  const addToCart = (product, quantity = 1, option = '50g Fresh Cut Punnet') => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.option === option
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { id: product.id, product, quantity, option }];
      }
    });

    showToast(`Added ${quantity}x ${product.name} (${option}) to your harvest bag!`, 'success');
  };

  const removeFromCart = (id, option) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.option === option)));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (id, option, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.option === option) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce((acc, item) => {
    const extraPrice = item.option.includes('Live Growth') ? 80 : 0;
    return acc + (item.product.price + extraPrice) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpen,
        setCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCartItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
