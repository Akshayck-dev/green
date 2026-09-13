import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/shop', label: 'Products' },
  { to: '#', label: 'Blogs' },
  { to: '#', label: 'Recipes' },
  { to: '#', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setCartOpen, totalCartItems, showToast } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'top-4 inset-x-0 max-w-[1240px] w-[95%] mx-auto'
          : 'top-0 inset-x-0 w-full'
      }`}
    >
      {/* Header Container (Full Width Transparent at Top -> Floating Pill on Scroll) */}
      <div
        className={`transition-all duration-500 flex items-center justify-between gap-3 md:gap-4 ${
          scrolled
            ? 'bg-surface border border-outline-variant/30 rounded-full px-5 md:px-7 py-2.5 shadow-[0_14px_40px_rgba(0,0,0,0.15)] text-on-surface'
            : 'bg-primary border-b border-primary-container/20 rounded-none px-6 md:px-12 py-4 h-20 w-full text-white shadow-md'
        }`}
      >
        {/* Left: Brand Logo */}
        <Link
          to="/"
          className="font-headline text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2.5 flex-shrink-0 group"
        >
          <img
            src="/images/logo.png"
            alt="Caeris Greens Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform flex-shrink-0"
          />
          <span className={`font-serif tracking-tight whitespace-nowrap ${scrolled ? 'text-primary' : 'text-white'}`}>
            Caeris Greens
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 flex-shrink-0">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={(e) => {
                if (link.to === '#') {
                  e.preventDefault();
                  showToast(`${link.label} section coming soon!`, 'info');
                }
              }}
              className={({ isActive }) =>
                `text-xs font-semibold whitespace-nowrap transition-all relative py-1 ${
                  isActive && link.to !== '#'
                    ? scrolled
                      ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-0.5 after:bg-primary after:rounded-full'
                      : 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-0.5 after:bg-white after:rounded-full'
                    : scrolled
                    ? 'text-on-surface-variant/80 hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Actions & Utils */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          {/* Search Icon */}
          <button
            onClick={() => showToast('Search catalog functionality ready', 'info')}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              scrolled
                ? 'hover:bg-surface-container text-on-surface-variant hover:text-primary'
                : 'hover:bg-white/10 text-white/90 hover:text-white'
            }`}
            title="Search"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Cart Bag Button with Count Badge */}
          <button
            onClick={() => setCartOpen(true)}
            className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              scrolled
                ? 'hover:bg-surface-container text-on-surface-variant hover:text-primary'
                : 'hover:bg-white/10 text-white/90 hover:text-white'
            }`}
            aria-label="View Cart Bag"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {totalCartItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-on-tertiary text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md animate-scale-up border border-surface">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Start Subscription CTA */}
          <Link
            to="/subscriptions"
            className="hidden sm:inline-flex bg-accent text-on-tertiary px-4 py-2 rounded-full font-body text-xs font-semibold hover:opacity-95 transition-opacity shadow-md whitespace-nowrap"
          >
            Start Subscription
          </Link>

          {/* User Account Button */}
          <div
            onClick={() => showToast('User dashboard login', 'info')}
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 ${
              scrolled
                ? 'bg-secondary-fixed/40 text-primary hover:bg-secondary-fixed'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
            }`}
            title="Account"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className={`lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'text-on-surface hover:bg-surface-container' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 bg-surface/95 backdrop-blur-2xl border border-outline-variant/30 rounded-3xl p-6 shadow-2xl animate-scale-up flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={(e) => {
                  if (link.to === '#') {
                    e.preventDefault();
                    showToast(`${link.label} section coming soon!`, 'info');
                  }
                  setMobileOpen(false);
                }}
                className={({ isActive }) =>
                  `text-sm font-semibold py-1.5 transition-colors ${
                    isActive && link.to !== '#'
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-surface-container flex flex-col gap-3">
            <Link
              to="/subscriptions"
              onClick={() => setMobileOpen(false)}
              className="w-full bg-accent text-on-tertiary text-center py-3 rounded-full font-body text-xs font-semibold shadow-md"
            >
              Start Subscription
            </Link>
            <a
              href="tel:+918590349845"
              className="text-xs text-center text-on-surface-variant font-medium flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
              <span>+91 859 034 9845</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
