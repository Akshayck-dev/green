import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { posts } from '../data/posts';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchQuery = query.trim().toLowerCase();

  const matchingProducts = searchQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.categoryLabel.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery)
      )
    : products.slice(0, 4); // show featured products by default when empty

  const matchingPosts = searchQuery
    ? (posts || []).filter(
        (post) =>
          post.title?.toLowerCase().includes(searchQuery) ||
          post.summary?.toLowerCase().includes(searchQuery) ||
          post.category?.toLowerCase().includes(searchQuery)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-surface w-full max-w-2xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden z-10 animate-scale-up flex flex-col max-h-[80vh]">
        {/* Search Bar Input */}
        <div className="p-4 md:p-5 border-b border-outline-variant/30 flex items-center gap-3 bg-surface-container-low">
          <span className="material-symbols-outlined text-primary text-2xl">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fresh microgreens, superfoods, recipes..."
            className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/60 font-body text-base outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase text-secondary bg-secondary-fixed/30 px-3 py-1.5 rounded-lg hover:bg-secondary-fixed/50 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Search Results / Suggestions Content */}
        <div className="p-4 md:p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
          {/* Products Header */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase text-secondary tracking-widest">
                {searchQuery ? `Products (${matchingProducts.length})` : 'Popular Microgreens'}
              </span>
              {!searchQuery && (
                <span className="text-[11px] text-on-surface-variant">Top picks for you</span>
              )}
            </div>

            {matchingProducts.length === 0 ? (
              <div className="text-center py-8 text-on-surface-variant text-sm">
                No microgreens found matching &quot;{query}&quot;. Try searching for &quot;Radish&quot;, &quot;Broccoli&quot;, or &quot;Superfood&quot;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container-high transition-all group border border-transparent hover:border-outline-variant/30"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-14 h-14 rounded-lg object-cover bg-surface-container flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-semibold text-secondary tracking-wider truncate">
                        {p.categoryLabel}
                      </span>
                      <h5 className="font-headline text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                        {p.name}
                      </h5>
                      <span className="text-xs font-bold text-primary mt-0.5">
                        ₹{p.price}{' '}
                        {p.originalPrice && (
                          <span className="text-[10px] text-on-surface-variant line-through font-normal ml-1">
                            ₹{p.originalPrice}
                          </span>
                        )}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all text-lg flex-shrink-0">
                      chevron_right
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Posts Results if searching */}
          {searchQuery && matchingPosts.length > 0 && (
            <div className="border-t border-outline-variant/30 pt-4">
              <span className="text-xs font-bold uppercase text-secondary tracking-widest block mb-3">
                Articles & Recipes ({matchingPosts.length})
              </span>
              <div className="flex flex-col gap-2">
                {matchingPosts.map((post) => (
                  <Link
                    key={post.id}
                    to="#"
                    onClick={onClose}
                    className="p-3 rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                        {post.title}
                      </span>
                      <span className="text-[11px] text-on-surface-variant line-clamp-1">
                        {post.summary}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-secondary bg-secondary-fixed/20 px-2 py-1 rounded whitespace-nowrap">
                      {post.category || 'Guide'}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
