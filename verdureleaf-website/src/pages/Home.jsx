import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeProducts } from '../data/products';
import { faqData } from '../data/faq';
import { posts } from '../data/posts';
import { useCart } from '../context/CartContext';

const heroSlides = [
  {
    title: 'Weekly Doorstep Harvest',
    tagline: 'FRESH • ORGANIC • SUSTAINABLE',
    subtitle:
      'Freshly harvested microgreens delivered to your doorstep with flexible weekly subscriptions.',
    bgDesktop: '/images/hero_greenhouse_desktop.png',
    bgMobile: '/images/hero_greenhouse_mobile.png',
    ctaPrimary: 'Start Your Plan',
    ctaPrimaryLink: '/subscriptions',
    ctaSecondary: 'View Collections',
    ctaSecondaryLink: '/shop',
  },
  {
    title: 'Live Tray Superfoods',
    tagline: 'PEAK BIOLOGICAL ENERGY',
    subtitle:
      'Up to 40x higher nutrient concentration than mature vegetables. Delivered living with roots intact for maximum freshness.',
    bgDesktop: '/images/hero_harvest_desktop.png',
    bgMobile: '/images/hero_harvest_mobile.png',
    ctaPrimary: 'Start Your Plan',
    ctaPrimaryLink: '/subscriptions',
    ctaSecondary: 'View Collections',
    ctaSecondaryLink: '/shop',
  },
  {
    title: 'Pure Farm-to-Table Wellness',
    tagline: 'HYDROPONIC & PESTICIDE FREE',
    subtitle:
      'Cultivated with organic seeds and pristine water. Zero chemical fertilizers or synthetic additives.',
    bgDesktop: '/images/hero_subscription_desktop.png',
    bgMobile: '/images/hero_subscription_mobile.png',
    ctaPrimary: 'Start Your Plan',
    ctaPrimaryLink: '/subscriptions',
    ctaSecondary: 'View Collections',
    ctaSecondaryLink: '/shop',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const { addToCart, setQuickViewProduct } = useCart();

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="flex flex-col w-full bg-surface overflow-x-hidden">
      {/* ================================================== */}
      {/* 1. HERO SECTION */}
      {/* ================================================== */}
      <section
        className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop Slide Background Image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center transition-all duration-700 z-0"
          style={{
            backgroundImage: `url('${heroSlides[currentSlide].bgDesktop}')`,
          }}
        />
        {/* Mobile Slide Background Image */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center transition-all duration-700 z-0"
          style={{
            backgroundImage: `url('${heroSlides[currentSlide].bgMobile}')`,
          }}
        />

        {/* Subtle Dark Gradient Overlay for Maximum Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10 z-10" />

        {/* Hero Content Box */}
        <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-20 flex flex-col items-start text-white">
          <span className="font-body text-[11px] md:text-xs font-bold text-emerald-300 uppercase tracking-[0.2em] mb-3 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/20">
            {heroSlides[currentSlide].tagline}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.06] tracking-tight max-w-3xl text-white mb-5 drop-shadow-md">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="font-body text-base md:text-xl text-emerald-50/95 max-w-xl mb-8 md:mb-10 leading-relaxed drop-shadow-sm font-normal">
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-12 md:mb-16">
            <Link
              to={heroSlides[currentSlide].ctaPrimaryLink}
              className="bg-accent text-on-tertiary px-8 py-4 rounded-full font-body text-sm md:text-[15px] font-bold hover:opacity-95 hover:scale-[1.03] transition-all shadow-xl shadow-accent/30 flex items-center gap-2"
            >
              <span>{heroSlides[currentSlide].ctaPrimary}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              to={heroSlides[currentSlide].ctaSecondaryLink}
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-body text-sm md:text-[15px] font-semibold hover:bg-white/10 hover:border-white transition-all flex items-center gap-2"
            >
              <span>{heroSlides[currentSlide].ctaSecondary}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Slide Indicator Numbers */}
          <div className="flex items-center gap-4 text-xs font-bold text-white/70">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all cursor-pointer ${
                  idx === currentSlide
                    ? 'text-accent border-b-2 border-accent pb-0.5 scale-110 font-black'
                    : 'text-white/60 hover:text-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 text-white border border-white/20 shadow-md flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 text-white border border-white/20 shadow-md flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">chevron_right</span>
        </button>
      </section>

      {/* ================================================== */}
      {/* 2. ABOUT US SECTION */}
      {/* ================================================== */}
      <section className="w-full bg-surface py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Collage Container */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] w-full order-1">
            {/* Photo 1 */}
            <div
              className="absolute top-0 left-0 w-[62%] h-[260px] sm:h-[300px] rounded-2xl bg-cover bg-center shadow-xl border-4 border-surface z-10 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmZM-azbZj2s3lVfJFe4sbBKgfEBgjyFA7_c_HdgTPeH-gP4q4kcC0ei8nrESBuwn05M12NaJo8b1JtnMZygbnYcHzNjj7n2pv0-vYgYreFhzfFgeDjbxq5Ctv-IEdNuqvwYPoU73nGeO8EAa5kbmCzYwrQuXic36ByZzURxiHheXJDljkP-S8QmiTZ-aEpt8CwoXGN45ulIxudh6N8HJ2GbDP5FBl58kUDsrIXU3bzNlxPLf2Xh4Nvg')`,
              }}
            />
            {/* Photo 2 */}
            <div
              className="absolute top-10 right-0 w-[54%] h-[240px] sm:h-[280px] rounded-2xl bg-cover bg-center shadow-xl border-4 border-surface z-20 hover:z-30 transition-transform duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7OI3oHZZbYOIIMn6hOiSX5ngFZiaF2xFRYGl6pDe2hOgoLXyMlppuDWHQ1vdqMwG2KMuQ7xTBnt3eIF-T7pdCazvuYpJ4MTq2j8E2c_RXixF8we0HE6r3E9RuCDtFAVzkaUD1gcSSdKR0Lhg35VLd_tKK0WNBeKZKHnbInyi4_qKyDhNNJGxVB0jC-iEinzsf0d1lyzLVplnL32P7lXohQLzJVReDnhro5SEAwl_UUt3-MqQQHxb6Q')`,
              }}
            />
            {/* Photo 3 */}
            <div
              className="absolute bottom-0 left-12 w-[68%] h-[200px] sm:h-[230px] rounded-2xl bg-cover bg-center shadow-2xl border-4 border-surface z-30 hover:scale-[1.02] transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbsO9PmP4uea4VPVRfaWrU6BJeT6nmOqONBKHEkbGY22UhCWYRUdOGm0Wpl4xjxdEgfIULbXuYiUw4mBGxOPjmnSlWbo7xtDyXZiG0hZsERkGPC-qwkU4mcojfKBpnPDTsMj8fI1jpbRNtIA54NUOFORnf8bwRQQTgvTvYPb78BFonsizpkd7ktNhJ2-i4-Q1RlnDPCM8VbQqGZiWQRZrm_iXl7lZwTTkMyt1qzia8cS_F8BN9BWQO_A')`,
              }}
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col items-start order-2">
            <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 bg-secondary-container/40 px-3.5 py-1 rounded-full">
              ABOUT US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.12] text-primary mb-5">
              Pure freshness and purposeful growth.
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-4 leading-relaxed max-w-xl">
              We believe that the most potent nutrition comes in the smallest packages.
              By combining advanced controlled-environment indoor farming with uncompromising
              organic standards, we cultivate microgreens that burst with concentrated
              vitamins, minerals, and intense culinary flavors.
            </p>
            <p className="font-body text-sm text-on-surface-variant/90 mb-7 leading-relaxed max-w-xl">
              Every tray is nurtured in sterile compost mediums under natural sunlight LED spectrums,
              delivering hyper-local freshness directly to your kitchen.
            </p>
            <Link
              to="/about"
              className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:bg-primary-container transition-all shadow-md inline-flex items-center gap-2 group"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. HERITAGE / STORY SECTION */}
      {/* ================================================== */}
      <section className="w-full bg-surface-container-low py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 bg-secondary-container/40 px-3.5 py-1 rounded-full">
              OUR HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.12] text-primary mb-5">
              Rooted in nature. Driven by wellness.
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-4 leading-relaxed max-w-xl">
              Founded with a vision to revolutionize urban nutrition, Caeris Greens bridges
              the gap between rural agricultural purity and modern city living. Every seed
              we sow is non-GMO, organic, and nurtured in pristine conditions without a
              single drop of synthetic pesticides.
            </p>
            <p className="font-body text-sm text-on-surface-variant/90 mb-7 leading-relaxed max-w-xl">
              From our climate-controlled farms in Bangalore to our high-tech facilities
              in Dubai, we ensure strict cold-chain integrity so that the enzymes and
              antioxidants remain fully intact from root to table.
            </p>
            <Link
              to="/about"
              className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:bg-primary/5 transition-all inline-flex items-center gap-2 group"
            >
              <span>Explore Our Story</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="group overflow-hidden rounded-2xl shadow-xl border-4 border-surface">
              <div
                className="w-full h-[360px] sm:h-[420px] bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZbC-W1ObCdn3Y8EgCkhrbcBWLIKe6WQfGpaZiWFS4X396NBTF_DwzfYE5uc0xTtraEjgBXGGWOWiRO1VtjObM7UD1OoK1PUExzPfgpncytMrx44tsO5kCbKMe-I0_VNu3x5jo-8EpzCTJKs-s3rgEF3oOXaO339_37WhUiAl10K_J0lAZ_XvCWSmNbVvsZAchUgJJZ3_lEf3hDH1OlNCTBJVAsgk0-LpiJF3wDgf5GOFEz87_TPdyYQ')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. TRUST / FRESHNESS SECTION */}
      {/* ================================================== */}
      <section className="w-full bg-surface py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 bg-secondary-container/40 px-3.5 py-1 rounded-full">
              THE CAERIS GREENS PROMISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.12] text-primary mb-4">
              Trusted Freshness
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Engineered for supreme nutritional density and absolute safety. Harvested live
              or freshly cut within 24 hours of your table.
            </p>
          </div>

          {/* Clean Progress Metrics Card */}
          <div className="lg:col-span-7 flex flex-col gap-7 bg-surface-container-low p-7 sm:p-9 rounded-2xl shadow-sm border border-outline-variant/20">
            {/* Metric 1 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-base font-bold text-primary">100% Freshness</span>
                <span className="font-headline font-black text-sm text-secondary">100%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[100%] transition-all duration-1000" />
              </div>
              <span className="text-xs text-on-surface-variant mt-1.5 block">
                Living roots intact for peak biological energy
              </span>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-base font-bold text-primary">4x Nutrition Boost</span>
                <span className="font-headline font-black text-sm text-secondary">85%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[85%] transition-all duration-1000" />
              </div>
              <span className="text-xs text-on-surface-variant mt-1.5 block">
                Up to 40x phytonutrient concentration vs mature plants
              </span>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-base font-bold text-primary">Zero Pesticides & Chemicals</span>
                <span className="font-headline font-black text-sm text-secondary">100%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[100%] transition-all duration-1000" />
              </div>
              <span className="text-xs text-on-surface-variant mt-1.5 block">
                Pure organic seeds and sterile filtered water
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. GREEN NUTRITION MADE EASY */}
      {/* ================================================== */}
      <section className="w-full bg-surface-container-low py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 inline-block">
              EXPLORE CATEGORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-tight text-primary">
              Green Nutrition Made Easy
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {[
              {
                title: 'Microgreen Collections',
                desc: 'Pure, single-origin and custom-blended live trays for daily culinary artistry.',
                path: '/shop',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBNc50Q3nvHepiW_Op6LfmIXpXT8enJnmlpS6faEUfCiA1e7Uj7ur_XwTdV8aHwcF4ccNSBRPc1pDivkByIcxAmRui4cCMxsqikiIthAbTktvkiINBPXuxSPXbmtCXL9dntVWGZT5u9hHfKeccWRsex2kgf8lErqmjCogAnnzAJrTiUscfde9g55l8dRLSGexkbWWAPxyZoENKn4PVjkNT6VLn84sK1UG8T1cbBV6tgjoQW78GgU-9LFw',
              },
              {
                title: 'Salads & Recipes',
                desc: 'Chef-crafted pairing ideas and nutritional bowls to elevate your everyday meals.',
                path: '/shop',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBNHzFm7L-TyXEGpnus6o2DEemp1qUCv69svgqzZP0yQP_IXF_ZHYM23CT3UTzxVaVSOoOCaUwMwnF5Ijz9ojuw2uapXHbjctnIfjOgICSzuZIclfWhY-ZXrSPUBWf2o_-Vuy7c148ggmxlszvwx1jpPjvDM5Yb0WQFf3HLl8vuBkM3R-T0EsK-p0ChtIn0bgDr4B7-RZloNPve371tvHme5cnsFkhYnKEBDIGPS8aKF56Ph1DlEkXV9A',
              },
              {
                title: 'The Subscription Box',
                desc: 'Automated weekly deliveries tailored to your household nutrition requirements.',
                path: '/subscriptions',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ_F7rkRfuqXjMGdmNhzoWwoZGMORQcH0baEMpfWicpurY5t5FJjl0OaFRFZpGnXvQULJPJItwCqdnk75PVyNjTwDRj0UHOCZKRsFD9zseoAwnMKsXB0PE724vmEfjx2wzOs4AZ6n09OVs0HgFrcb5IONh3ptOUM5h-7GvlAcP-vUEf_1fdLhtbUAjk-8o692j0V9iw3DDfbhKrcAztRevBqw_0QbqoeVJWajVLLjzqYfyYMHkH0XSA',
              },
            ].map((col) => (
              <div
                key={col.title}
                className="relative h-[380px] sm:h-[420px] w-[82%] sm:w-[320px] md:w-full flex-shrink-0 snap-center rounded-2xl overflow-hidden group shadow-lg flex flex-col justify-end p-7 sm:p-8 border border-outline-variant/20"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ backgroundImage: `url('${col.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent transition-opacity group-hover:opacity-90" />
                <div className="relative z-10 text-on-primary flex flex-col items-start">
                  <h3 className="font-serif text-2xl font-medium mb-2">
                    {col.title}
                  </h3>
                  <p className="font-body text-xs text-primary-fixed-dim mb-6 leading-relaxed">
                    {col.desc}
                  </p>
                  <Link
                    to={col.path}
                    className="w-11 h-11 rounded-full bg-surface text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-on-tertiary transition-all duration-300 shadow-md"
                    aria-label={`Explore ${col.title}`}
                  >
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-center gap-1.5 text-xs font-semibold text-secondary mt-2">
            <span className="material-symbols-outlined text-[16px]">swipe</span>
            <span>Swipe horizontally to view categories</span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. FEATURED PRODUCTS */}
      {/* ================================================== */}
      <section className="w-full bg-surface py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 block">
                FRESH HARVESTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-tight text-primary">
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all mt-4 md:mt-0 group"
            >
              <span>Discover our full collection</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
            {homeProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-outline-variant/20 hover:-translate-y-1 w-[78%] sm:w-full flex-shrink-0 snap-center"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square bg-surface-container">
                  {product.stockStatus && (
                    <div className="absolute top-3 left-3 z-10 bg-surface/90 backdrop-blur-md text-secondary font-body text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      {product.stockStatus}
                    </div>
                  )}
                  <Link to={`/product/${product.slug}`}>
                    <img
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </Link>

                  {/* Quick View Hover Button */}
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute bottom-3 right-3 z-10 bg-primary text-on-primary text-xs font-semibold px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md flex items-center gap-1 hover:bg-primary-container"
                  >
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col flex-grow justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-body text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                        {product.categoryLabel}
                      </span>
                      {product.weight && (
                        <span className="font-body text-[11px] font-semibold text-secondary">
                          {product.weight}
                        </span>
                      )}
                    </div>
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="font-headline text-base sm:text-lg font-bold text-primary hover:text-secondary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-surface-container flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary font-headline">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-text-secondary line-through ml-1.5">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="bg-accent text-on-tertiary px-3.5 py-2 rounded-full font-body text-xs font-bold hover:opacity-95 hover:scale-105 transition-all flex items-center gap-1 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[15px]">shopping_bag</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex items-center justify-center gap-1.5 text-xs font-semibold text-secondary mt-2">
            <span className="material-symbols-outlined text-[16px]">swipe</span>
            <span>Swipe horizontally to view all products</span>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/shop"
              className="bg-primary text-on-primary px-10 py-3.5 rounded-full font-body text-sm font-semibold hover:bg-primary-container transition-all shadow-md flex items-center gap-2 group"
            >
              <span>View More Products</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. WEEKLY SUBSCRIPTION CTA (CAMPAIGN SECTION) */}
      {/* ================================================== */}
      <section className="w-full bg-surface-container-low py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-primary min-h-[380px] flex items-center">
            {/* Background Lifestyle Asset */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 z-0 scale-105"
              style={{
                backgroundImage: `url('/images/hero_subscription_desktop.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-1" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl text-on-primary flex flex-col items-start">
              <span className="font-body text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3 bg-black/30 px-3.5 py-1 rounded-full border border-white/20">
                FLEXIBLE DOORSTEP HARVEST
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4 text-white">
                Fresh Greens. Every Week.
              </h2>
              <p className="font-body text-base text-primary-fixed-dim mb-8 leading-relaxed">
                Get freshly harvested microgreens delivered to your doorstep on a schedule that works for you. Pause, skip, or adjust your varieties anytime with zero commitment.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/subscriptions"
                  className="bg-accent text-on-tertiary px-8 py-3.5 rounded-full font-body text-sm font-bold hover:opacity-95 hover:scale-[1.03] transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Start Weekly Subscription</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  to="/shop"
                  className="border border-white/60 text-white px-7 py-3.5 rounded-full font-body text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <span>Explore Microgreens</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 8. FAQ SECTION */}
      {/* ================================================== */}
      <section className="w-full bg-surface-container-low py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Container */}
            <div className="lg:col-span-5 relative">
              <div
                className="w-full h-[480px] rounded-2xl bg-cover bg-center shadow-xl border-4 border-surface"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbsO9PmP4uea4VPVRfaWrU6BJeT6nmOqONBKHEkbGY22UhCWYRUdOGm0Wpl4xjxdEgfIULbXuYiUw4mBGxOPjmnSlWbo7xtDyXZiG0hZsERkGPC-qwkU4mcojfKBpnPDTsMj8fI1jpbRNtIA54NUOFORnf8bwRQQTgvTvYPb78BFonsizpkd7ktNhJ2-i4-Q1RlnDPCM8VbQqGZiWQRZrm_iXl7lZwTTkMyt1qzia8cS_F8BN9BWQO_A')`,
                }}
              />
            </div>

            {/* Right FAQ Accordion Card */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-7 sm:p-10 rounded-2xl shadow-lg border border-outline-variant/30 lg:-ml-12 relative z-10">
              <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight text-primary mb-6">
                Everything you need to know about fresh microgreens
              </h2>

              <div className="flex flex-col divide-y divide-surface-container">
                {faqData.map((item, idx) => (
                  <div key={item.id} className="py-3.5">
                    <button
                      id={`faq-btn-${idx}`}
                      aria-expanded={openFaq === idx}
                      aria-controls={`faq-answer-${idx}`}
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-headline font-semibold text-base text-primary hover:text-secondary transition-colors cursor-pointer py-1"
                    >
                      <span className="pr-4">{item.question}</span>
                      <span className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                        <span className="material-symbols-outlined text-[18px]">
                          {openFaq === idx ? 'remove' : 'add'}
                        </span>
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed animate-scale-up"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 9. PROCESS SECTION (01 / 02 / 03) */}
      {/* ================================================== */}
      <section className="w-full bg-surface py-12 md:py-16 border-b border-surface-container-high">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 block">
              OUR HARVEST METHOD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-tight text-primary">
              From Seed to Doorstep
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 relative">
            {[
              {
                num: '01',
                title: 'Seed Selection & Planting',
                desc: 'Traceable organic non-GMO seeds cultivated in pristine growing mediums without synthetic chemicals or artificial enhancers.',
              },
              {
                num: '02',
                title: 'Controlled Growing & Care',
                desc: 'Climate-controlled hydroponic indoor farming consuming 95% less water while retaining maximum enzymatic and antioxidant activity.',
              },
              {
                num: '03',
                title: 'Fresh Harvesting & Delivery',
                desc: 'Harvested or shipped live within 24 hours of doorstep delivery across India and the UAE.',
              },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-start gap-3 relative z-10 w-[82%] sm:w-[300px] md:w-full flex-shrink-0 snap-center bg-surface-container-low p-6 rounded-2xl md:bg-transparent md:p-0 border border-outline-variant/20 md:border-0">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-outline-number">
                  {step.num}
                </span>
                <h3 className="font-headline text-xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-center gap-1.5 text-xs font-semibold text-secondary mt-2">
            <span className="material-symbols-outlined text-[16px]">swipe</span>
            <span>Swipe horizontally to view process steps</span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10. LATEST POSTS / JOURNAL */}
      {/* ================================================== */}
      <section className="w-full bg-surface-container-low py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 block">
              JOURNAL & RECIPES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium leading-tight text-primary">
              Latest Posts
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-outline-variant/20 group w-[82%] sm:w-[320px] md:w-full flex-shrink-0 snap-center"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md text-[10px] font-bold text-secondary uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold text-on-surface-variant block mb-1">
                      {post.date} • {post.readTime}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-primary group-hover:text-secondary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant line-clamp-2 mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    to="/about"
                    className="text-xs font-bold text-primary group-hover:text-secondary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Read Article</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-center gap-1.5 text-xs font-semibold text-secondary mt-2">
            <span className="material-symbols-outlined text-[16px]">swipe</span>
            <span>Swipe horizontally to view articles</span>
          </div>
        </div>
      </section>
    </div>
  );
}
