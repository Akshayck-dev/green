import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import QuickViewModal from './QuickViewModal';
import Toast from './Toast';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CartProvider>
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <QuickViewModal />
      <Toast />
    </CartProvider>
  );
}

