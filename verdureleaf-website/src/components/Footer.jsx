import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full text-white overflow-hidden bg-black border-t border-white/20">
      {/* Full Visibility Sunset Farm Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 opacity-100"
        style={{
          backgroundImage: `url('/images/footer_farm_bg.png')`,
        }}
      />
      {/* Subtle Scrim for High Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-1" />

      {/* Main Footer Container */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
        {/* Final Footer Campaign CTA */}
        <div className="pb-12 border-b border-white/15 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-1">
              Ready to eat greener?
            </h3>
            <p className="font-body text-xs md:text-sm text-gray-300">
              Start your weekly fresh harvest.
            </p>
          </div>
          <Link
            to="/shop"
            className="bg-accent text-on-tertiary px-7 py-3 rounded-full font-body text-xs md:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg flex items-center gap-2"
          >
            <span>Shop Microgreens</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pb-16">
          {/* Column 1: Brand Philosophy & Callback (Left ~ 7 Cols) */}
          <div className="lg:col-span-7 lg:pr-12 lg:border-r border-white/15 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl md:text-[38px] font-medium text-white mb-3 tracking-wide leading-snug">
                Freshness You Can Feel.
              </h3>
              <p className="font-body text-xs md:text-sm text-gray-300 leading-relaxed mb-6 max-w-md">
                Our microgreens are cultivated sustainably to nourish your body and support a greener tomorrow.
              </p>

              {/* Callback / Newsletter Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We will call you back shortly.');
                }}
                className="relative max-w-sm mb-8"
              >
                <input
                  type="tel"
                  placeholder="Enter your number to call back"
                  required
                  className="w-full bg-[#163829] border border-white/20 rounded-full px-5 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary hover:bg-secondary-fixed text-on-secondary flex items-center justify-center transition-colors cursor-pointer shadow-md"
                  title="Submit Call Back"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </form>
            </div>

            {/* Brand Logo */}
            <Link to="/" className="font-headline text-2xl font-bold text-white flex items-center gap-3 mt-4 group">
              <img
                src="/images/logo.png"
                alt="Caeris Greens Logo"
                className="w-11 h-11 object-contain shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-2xl font-bold tracking-normal text-white">Caeris Greens</span>
            </Link>
          </div>

          {/* Column 2: Farm Location & Contact Info (Right ~ 5 Cols) */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col gap-4">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-emerald-400">
              FARM LOCATION & CONTACT
            </h4>

            <p className="font-body text-xs md:text-sm text-gray-200 leading-relaxed font-medium flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-emerald-400 mt-0.5 flex-shrink-0">
                location_on
              </span>
              <span>Neduvelil H, Mutholapuram P.O, Elanji, Ernakulam, Kerala, India</span>
            </p>

            <div className="flex flex-col gap-3 pt-2 text-xs md:text-sm text-gray-300">
              <a
                href="mailto:jismariajl@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-400">mail</span>
                <span>jismariajl@gmail.com</span>
              </a>

              <a
                href="tel:+918075931749"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-400">call</span>
                <span>+91 8075931749</span>
              </a>

              <a
                href="tel:+919400759169"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-400">call</span>
                <span>+91 9400759169</span>
              </a>

              <a
                href="https://wa.me/918075931749"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-400">chat</span>
                <span>WhatsApp Order: +91 8075931749</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Divider Line + Copyright + Social Media + Scroll to Top */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <span className="font-body text-xs text-gray-400 font-medium order-2 md:order-1">
            © 2026 Caeris Greens. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {[
              { icon: 'camera_alt', title: 'Instagram' },
              { icon: 'share', title: 'Facebook' },
              { icon: 'chat', title: 'WhatsApp' },
              { icon: 'movie', title: 'YouTube' },
              { icon: 'work', title: 'LinkedIn' },
            ].map((soc) => (
              <span
                key={soc.title}
                title={soc.title}
                className="w-9 h-9 rounded-full bg-[#163829] border border-white/15 flex items-center justify-center text-gray-200 hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">{soc.icon}</span>
              </span>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-xl hover:scale-110 hover:bg-surface transition-all cursor-pointer order-3"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-[22px] font-bold">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
