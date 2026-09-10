import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-headline text-2xl font-bold text-primary tracking-tight"
        >
          VerdureLeaf
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Utils */}
        <div className="flex items-center gap-4">
          <a
            className="hidden xl:flex items-center gap-1 text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="tel:+918590349845"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            +91 859 034 9845
          </a>

          <Link
            to="/shop"
            className="relative p-1 text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>

          <Link
            to="/subscriptions"
            className="bg-accent text-on-tertiary px-4 py-2 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity"
          >
            Start Subscription
          </Link>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1 text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/30 shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
