import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';

const navLinks = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/about', label: 'About Us', icon: 'info' },
  { to: '/shop', label: 'Products', icon: 'eco' },
  { to: '#', label: 'Blogs', icon: 'article' },
  { to: '#', label: 'Recipes', icon: 'menu_book' },
  { to: '#', label: 'Careers', icon: 'work' },
  { to: '/contact', label: 'Contact Us', icon: 'support_agent' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { setCartOpen, totalCartItems, showToast } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'top-4 inset-x-0 max-w-[1240px] w-[95%] mx-auto'
            : 'top-0 inset-x-0 w-full'
        }`}
      >
        {/* Header Container */}
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
            className="font-headline text-xl md:text-2xl font-bold tracking-tight flex items-center gap-3 flex-shrink-0 group"
          >
            <img
              src="/images/logo.png"
              alt="Caeris Greens Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
            />
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
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
            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                scrolled
                  ? 'hover:bg-surface-container text-on-surface-variant hover:text-primary'
                  : 'hover:bg-white/10 text-white/90 hover:text-white'
              }`}
              title="Search catalog"
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

            {/* Mobile Menu Hamburger Trigger */}
            <button
              className={`lg:hidden w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                scrolled
                  ? 'text-on-surface hover:bg-surface-container'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open Side Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Instant Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Modern Slide-Over Side Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Dark Glass Backdrop Scrim */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />

          {/* Side Drawer Panel */}
          <div className="relative w-[310px] sm:w-[350px] max-w-[85vw] h-full bg-surface text-on-surface z-10 shadow-2xl flex flex-col justify-between p-6 border-l border-outline-variant/20 animate-slide-left overflow-y-auto">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-5 border-b border-surface-container-high mb-6">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img
                    src="/images/logo.png"
                    alt="Caeris Greens"
                    className="w-9 h-9 object-contain"
                  />
                  <span className="font-serif text-xl font-bold text-primary">
                    Caeris Greens
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  aria-label="Close Side Menu"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Mobile Quick Search Bar Trigger */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface-variant/80 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 mb-4 hover:border-primary transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">search</span>
                <span>Search microgreens, recipes...</span>
              </button>

              {/* Navigation Items with Icons & Active Pills */}
              <nav className="flex flex-col gap-2">
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
                      `px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive && link.to !== '#'
                          ? 'bg-primary/10 text-primary font-bold border border-primary/20 shadow-sm'
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant/40">
                      chevron_right
                    </span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-surface-container-high flex flex-col gap-4 mt-6">
              <Link
                to="/subscriptions"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-accent text-on-tertiary text-center py-3.5 rounded-full font-body text-xs font-bold shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Start Subscription</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>

              <a
                href="tel:+918590349845"
                className="py-2.5 px-4 rounded-full bg-secondary-container/30 text-primary text-xs font-semibold flex items-center justify-center gap-2 border border-secondary-container/50 hover:bg-secondary-container/60 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
                <span>+91 859 034 9845</span>
              </a>

              {/* Social Icons Row */}
              <div className="flex items-center justify-center gap-3 pt-2">
                {[
                  { icon: 'camera_alt', title: 'Instagram' },
                  { icon: 'share', title: 'Facebook' },
                  { icon: 'chat', title: 'WhatsApp' },
                  { icon: 'work', title: 'LinkedIn' },
                ].map((soc) => (
                  <span
                    key={soc.title}
                    title={soc.title}
                    className="w-8.5 h-8.5 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all cursor-pointer text-xs"
                  >
                    <span className="material-symbols-outlined text-[15px]">{soc.icon}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
