import { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeProducts } from '../data/products';
import { faqData } from '../data/faq';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6nNQGPjAmPw4qgbL9H0-1HG8uOh_lR1vlwdMmHHrT7AuxTFyIVpWYkvK1IgEsWGxbSeQHeB3FBTcfDSUFrzr2dkXyIHkvBp0bYNRRFxvY4nyrOOwKC2Nn_gEhJ2sx4i2ZfMKBeI0q8zPGUEFnWILxEOwHsoQOFNE0KZyE4Sxgd4ndadwvisculySHDccdAIbVemkg2kkbtvtc8O_utn7SE71b8WEaBkUx6xRuGD6P7TNTlNOei5iDBw')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-20 flex flex-col items-start text-on-primary">
          <span className="font-body text-xs font-semibold text-primary-fixed-dim uppercase tracking-widest mb-2">
            VERDURELEAF LIVING FARM
          </span>
          <h1 className="font-headline text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight max-w-2xl mb-4">
            Fresh Life in <br />
            <span className="text-primary-fixed">Greens · Nutrition · Wellness</span>
          </h1>
          <p className="font-body text-lg text-primary-fixed-dim max-w-xl mb-8">
            Harvested hours before your doorstep. Nutrient-dense, organic microgreens
            grown with precision and care across India and the UAE.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              to="/subscriptions"
              className="bg-accent text-on-tertiary px-8 py-4 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity shadow-[0_8px_24px_rgba(224,122,95,0.3)]"
            >
              Start Subscription
            </Link>
            <Link
              to="/shop"
              className="border border-primary-fixed text-on-primary px-8 py-4 rounded-full font-body text-[15px] font-semibold hover:bg-primary-container/30 transition-colors"
            >
              Shop once
            </Link>
          </div>
          {/* Carousel Dots */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-2 rounded-full bg-accent" />
            <span className="w-2 h-2 rounded-full bg-primary-fixed/40" />
            <span className="w-2 h-2 rounded-full bg-primary-fixed/40" />
          </div>
        </div>
      </section>

      {/* 2. About Us Teaser */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
              ABOUT VERDURELEAF
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-4">
              Pure freshness and purposeful growth.
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-8">
              We believe that the most potent nutrition comes in the smallest packages.
              By combining advanced controlled-environment agriculture with uncompromising
              organic standards, we cultivate microgreens that burst with concentrated
              vitamins, minerals, and intense culinary flavors.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="relative">
            <div
              className="w-full h-[400px] rounded-xl bg-cover bg-center shadow-[0_8px_24px_rgba(27,67,50,0.08)]"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0lRcjEjXBZKBLnWuFYjSpdhijgVTAQ2W8u2dsaX0d8-XfMSKbuXd-Un8KwmKb2EyPAeyMOCUhLTn87gUQlPLqLXG95yLV5Mxug-ZewIlEuztoQlgkNlrS7XXEXAf45pL0pUb7P13Eh9phfAV0nmCnfTjPLe2LoBO7KdPNILEi49L64Bps1J0mlcG_5qrOnDCrVcELFcJUigHGLced1Ptp7n21HV-j6RpgOdA_aPWvzoAQLoS9l_lVg')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="w-full bg-surface-container-low py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="w-full h-[450px] rounded-xl bg-cover bg-center shadow-[0_8px_24px_rgba(27,67,50,0.08)]"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZbC-W1ObCdn3Y8EgCkhrbcBWLIKe6WQfGpaZiWFS4X396NBTF_DwzfYE5uc0xTtraEjgBXGGWOWiRO1VtjObM7UD1OoK1PUExzPfgpncytMrx44tsO5kCbKMe-I0_VNu3x5jo-8EpzCTJKs-s3rgEF3oOXaO339_37WhUiAl10K_J0lAZ_XvCWSmNbVvsZAchUgJJZ3_lEf3hDH1OlNCTBJVAsgk0-LpiJF3wDgf5GOFEz87_TPdyYQ')`,
              }}
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
              OUR HERITAGE
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-4">
              Rooted in nature. Driven by wellness.
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-4">
              Founded with a vision to revolutionize urban nutrition, VerdureLeaf bridges
              the gap between rural agricultural purity and modern city living. Every seed
              we sow is non-GMO, organic, and nurtured in pristine conditions without a
              single drop of synthetic pesticides.
            </p>
            <p className="font-body text-base text-on-surface-variant mb-8">
              From our climate-controlled farms in Bangalore to our high-tech facilities
              in Dubai, we ensure strict cold-chain integrity so that the enzymes and
              antioxidants remain fully intact from root to table.
            </p>
            <div className="grid grid-cols-2 gap-8 w-full pt-4 border-t border-surface-container-highest">
              <div>
                <h3 className="font-headline text-2xl text-primary font-bold">100%</h3>
                <p className="font-body text-sm text-on-surface-variant">
                  Traceable Organic Seeds
                </p>
              </div>
              <div>
                <h3 className="font-headline text-2xl text-primary font-bold">24 Hrs</h3>
                <p className="font-body text-sm text-on-surface-variant">
                  From Harvest to Table
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trusted Freshness */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
              THE VERDURELEAF PROMISE
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-2">
              Trusted Freshness
            </h2>
            <p className="font-body text-base text-on-surface-variant">
              Engineered for supreme nutritional density and absolute safety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'eco',
                title: '100% Freshness',
                desc: 'Living greens delivered with roots intact, maintaining maximum biological activity and flavor vibrancy.',
              },
              {
                icon: 'bolt',
                title: '4x Nutrition',
                desc: 'Up to 40 times higher concentrations of vital nutrients than their fully grown mature vegetable counterparts.',
              },
              {
                icon: 'water_drop',
                title: 'Zero Pesticides',
                desc: 'Grown in sterile, pure organic soil mediums without synthetic chemicals, heavy metals, or artificial enhancers.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-low p-8 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col items-start hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-1">
                  {card.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Curated Collections */}
      <section className="w-full bg-surface-container-low py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
                EXPLORE CATEGORIES
              </span>
              <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface">
                Curated Collections
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0 hover:gap-4 transition-all"
            >
              <span>View All Products</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                path: '#',
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
                className="relative h-[400px] rounded-xl overflow-hidden group shadow-[0_8px_24px_rgba(27,67,50,0.08)] flex flex-col justify-end p-8"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${col.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="relative z-10 text-on-primary">
                  <h3 className="font-headline text-2xl font-semibold mb-1">
                    {col.title}
                  </h3>
                  <p className="font-body text-sm text-primary-fixed-dim mb-4">
                    {col.desc}
                  </p>
                  <Link
                    to={col.path}
                    className="inline-flex items-center gap-1 text-primary-fixed font-body text-[15px] font-semibold group-hover:underline"
                  >
                    <span>Explore</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Products */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
                SHOP BESTSELLERS
              </span>
              <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface">
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0 hover:gap-4 transition-all"
            >
              <span>View All Catalog</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeProducts.map((product) => (
              <Link
                to={`/product/${product.slug}`}
                key={product.id}
                className="bg-surface-container-low rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col group"
              >
                <div className="relative h-60 bg-surface-container overflow-hidden">
                  {product.onSale && (
                    <span className="absolute top-3 left-3 bg-sale text-on-error text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      SALE
                    </span>
                  )}
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-body text-xs font-semibold text-secondary uppercase">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-headline text-lg font-semibold text-on-surface mt-1 mb-2">
                      {product.name}
                    </h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`font-bold text-base ${
                          product.onSale ? 'text-sale' : 'text-primary'
                        }`}
                      >
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-text-secondary line-through text-sm">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-body text-[15px] font-semibold hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">
                        shopping_bag
                      </span>
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className="w-full bg-surface-container-low py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
              GOT QUESTIONS?
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-2">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-base text-on-surface-variant">
              Everything you need to know about our microgreens, subscriptions, and care.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-surface p-8 rounded-xl shadow-[0_4px_16px_rgba(27,67,50,0.04)] transition-all"
              >
                <button
                  className="w-full flex items-center justify-between text-left font-headline text-lg font-semibold text-on-surface focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === faq.id && (
                  <div className="pt-4 text-base text-on-surface-variant font-body">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cultivation Process */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
              HOW WE GROW
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-2">
              Our Cultivation Process
            </h2>
            <p className="font-body text-base text-on-surface-variant">
              From seed selection to doorstep delivery in three meticulous steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 'STEP 01',
                title: 'Seed Selection',
                desc: 'We source only the highest-grade, certified organic, non-GMO heirloom seeds tested for high germination and nutritional potency.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQjlmrJ0sE0OZ8NZ0Aq2vlFsYRRCic0keCHN5rgN_N3FS5VwTAS1-6b79eRkHOYafjB100gSKlsCTdmOGEnNFDuIuN_I5trAJejIX1Xqqn-_oS7FIDsqvWwLycgKns92Lf0QEEHsdJMaq_5AStxNHm6FWHwHlJ6XT6vI7ho-umzwZ2wakwB1khBkM1aJrXM6oawax6QPfyFnrYgnaPair9a2zgd8WAR5TrbNHenY5yWtLlqWxSTTCJ7g',
              },
              {
                step: 'STEP 02',
                title: 'Controlled Growing',
                desc: 'Grown in optimized indoor micro-climates with precise humidity, airflow, and custom LED light spectrums to maximize antioxidant development.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDgnFRniCCDuvFL3niiO1pbO3YuOlyFEm2W_eQPwiez-8_uPTddxheyNVzcVPh08qleCHIwlOFO8ReYd_lQo5tPfDgOV5bCR-N81Ke1jgJZ5bMMa1zUVg_HoaHQBIM6bOeCdyZelajlLmvo_LcEo7fwNdnZfM1hFK1G3pE8gZAxEh9bRQG5SLwvkck_0PPzPkDsCyzbeXBDidIIbGRIEdRkuG3dBp0w50-e3bYI8Yf180sYHJyi2s54bQ',
              },
              {
                step: 'STEP 03',
                title: 'Fresh Harvesting & Delivery',
                desc: 'Harvested at peak nutrient density just hours before dispatch, whisked directly to your kitchen in cold-chain transport.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDcelzf-elxf4eF16HMVXPInKFpIJ3qZEUti5ZrPxpmVF0yPHUb_32frghT7pHvmPRjmXH6McnWY9c_lEOZ-k5fu7ZOUvukRZKGYoCO8TxgcXO247AGpac5oV-mSkyBNkysnpfg1LusUDw_kyL66ajD3c4zgRAX1g9bXhQaQJ9dVcH2gclKRdvCvkqv9rbgX2_njeRzxjpV8nkKEOMF7wGjmx9RCYDOX-c2jL52725fvbBzqZWKviXoNQ',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-surface-container-low p-8 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col"
              >
                <div
                  className="w-full h-48 rounded-lg bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
                <span className="font-body text-xs font-semibold text-secondary uppercase mb-2">
                  {step.step}
                </span>
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-1">
                  {step.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Latest Posts */}
      <section className="w-full bg-surface-container-low py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
                JOURNAL & RECIPES
              </span>
              <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface">
                Latest Posts
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0 hover:gap-4 transition-all"
            >
              <span>View All Articles</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                tag: 'Nutrition',
                read: '4 min read',
                title: 'Why Microgreens Are the Ultimate Cellular Superfood',
                desc: 'Explore the scientific studies behind the concentrated vitamin levels found in young greens.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAOe47FZRWBJUnBuR31e5GGFloAq8kx-PPzJUj46baPCFscJ_3OVH8OKZT_c1yCv8Sw9e2xkXqObw5ugwjyrjJrRxcp8ckH_l6NtTLethd1gv0S03NMCNTzBqmQOKyrB6QeQLYOPqKNnLi7XDfh_2kPMyRPx6GgxOXkloVGWb8wUG2Fk3n9nwmDUapGzJ_PoZ0sy6ag70MIi8Xt3uuScmfH5TJZumBuqiBEhh5Q4BV6X-xFfVXyOjYgKg',
              },
              {
                tag: 'Recipes',
                read: '3 min read',
                title: '3 Quick Breakfast Recipes Featuring Radish Microgreens',
                desc: 'Add a zesty kick to your morning toast and eggs with these simple culinary ideas.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDU4hZSX6GfPUnLuXDJTBs4H46hAkDX2xBecCFLGkIwh8PCxFKzvPT4wtNnRImq9hFx5demslZEVllOgSDMQ8-asxBDsI6J2MiLhx2pyUH-UMA3Q_acJAuT9_0znXFg7D_ukI5UQ7rjeUY8eKr-G7KKPtM2qDcf7Yvs4PJPsvCE6dBuakOv7r-keJ3JjuVpNqN7u-FpaV-lI5QvHUJ-Mf-E-aQoH252YiEbvqcTdUdGqF8zKJK9zAPYxw',
              },
              {
                tag: 'Sustainability',
                read: '5 min read',
                title: 'Sustainable Urban Farming: Feeding Cities Locally',
                desc: 'How indoor vertical farming reduces water usage by 95% and eliminates food miles.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAcdsuOdUWg1a37pjWpkT5sjUvr4FDLcamO2pxv6TtX1Vhxs6zt9wMYzF7WGFIU09K7uXVg2eVamgnUAq44vh9LNKxgIK_pgb8LNcxqtlSctHb3C0nXKaxkRMHTTCUivul3D8M7Dl7fVCNRUjW_nkaa8dIa4iQIoluNJ8dQZyvE2IfBZ5mDk_8yXhO6MkF9iympBtxwUAhpbEbdnpN8KUto_wznRt_BLRxi8cHjXl8wn_ALN6xg859ZQg',
              },
            ].map((post) => (
              <div
                key={post.title}
                className="bg-surface rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col group"
              >
                <div
                  className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-1">
                      <span className="font-body text-xs font-semibold text-secondary uppercase">
                        {post.tag}
                      </span>
                      <span className="text-text-secondary text-sm">• {post.read}</span>
                    </div>
                    <h3 className="font-headline text-2xl font-semibold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant mb-4">
                      {post.desc}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm"
                  >
                    <span>Read article</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Closing Brand Banner */}
      <section className="w-full bg-primary py-16 md:py-24 text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/50 via-transparent to-primary-container/50 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="font-body text-xs font-semibold text-primary-fixed-dim uppercase tracking-widest mb-2">
            TASTE THE VITALITY
          </span>
          <h2 className="font-headline text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight mb-4 max-w-2xl">
            Freshness You Can Feel
          </h2>
          <p className="font-body text-lg text-primary-fixed-dim max-w-xl mb-8">
            Join hundreds of health-conscious households across India and the UAE who
            have transformed their daily nutrition with VerdureLeaf.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/subscriptions"
              className="bg-accent text-on-tertiary px-8 py-4 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity shadow-[0_8px_24px_rgba(224,122,95,0.3)]"
            >
              Start Subscription
            </Link>
            <Link
              to="/contact"
              className="border border-primary-fixed text-on-primary px-8 py-4 rounded-full font-body text-[15px] font-semibold hover:bg-primary-container/30 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
