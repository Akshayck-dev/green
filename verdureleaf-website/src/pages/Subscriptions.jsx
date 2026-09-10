import { useState } from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    tier: 'Starter',
    name: 'Weekly Fresh Box',
    desc: 'Perfect for singles or couples starting their microgreens journey.',
    monthlyPrice: '₹749',
    weeklyPrice: '₹899',
    features: [
      { text: '2 live trays per delivery', included: true },
      { text: 'Choice of Arugula & Radish', included: true },
      { text: 'Free insulated cold shipping', included: true },
      { text: 'Chef consultation', included: false },
    ],
    featured: false,
  },
  {
    tier: 'Household',
    name: 'Bi-Weekly Family Box',
    desc: 'Ideal for families looking to incorporate daily superfoods.',
    monthlyPrice: '₹1,399',
    weeklyPrice: '₹1,599',
    features: [
      { text: '4 live trays per delivery', included: true },
      { text: 'Mixed variety rotation', included: true },
      { text: 'Free priority cold shipping', included: true },
      { text: 'Exclusive recipe guide included', included: true },
    ],
    featured: true,
  },
  {
    tier: 'Connoisseur',
    name: 'Chef Custom Box',
    desc: 'Tailored selections for passionate home cooks and culinary pros.',
    monthlyPrice: '₹2,199',
    weeklyPrice: '₹2,499',
    features: [
      { text: '6 custom live trays', included: true },
      { text: 'Rare & exotic varieties', included: true },
      { text: 'Priority VIP delivery slot', included: true },
      { text: 'Direct WhatsApp chef support', included: true },
    ],
    featured: false,
  },
];

export default function Subscriptions() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-primary text-on-primary py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuABAsU4INiL-tRYOum9YtflYR1vGuGd9rg9s5hPE1UOLFnU2XSHFEVEd6iw15tUX1B3ddOjbzyxhI-nzu7n-X1sLR6czI0Jm1v6kMoXmZSfpCpNxCIptAbd5hA2W4c6vzsij64_-H9HgbsepWnJusy-aYWgD3UNKtLA1ncL9mr7EViilPs5xHr0RTLS3JDS3fEnsuJBg_jKw_Q0QXT3fam97nXiRwi4O-ydMewcXYi-gXhWfMivsOq-Lg')`,
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="font-body text-xs font-semibold text-primary-fixed-dim uppercase tracking-widest mb-2">
            Farm-To-Doorstep Vitality
          </span>
          <h1 className="font-headline text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight text-on-primary max-w-3xl mb-4">
            Live Nutrient-Dense, Delivered Weekly.
          </h1>
          <p className="font-body text-lg text-primary-fixed-dim max-w-2xl mb-16">
            Experience the pinnacle of culinary freshness and health. Harvested hours
            before delivery, our microgreens pack up to 40x more nutrients than mature
            greens.
          </p>
          <div className="flex flex-wrap gap-8 justify-center text-left">
            {[
              {
                icon: 'eco',
                title: '100% Organic',
                desc: 'Zero pesticides or synthetic fertilizers',
              },
              {
                icon: 'bolt',
                title: 'Same-Day Harvest',
                desc: 'Cut right before it reaches your door',
              },
              {
                icon: 'local_shipping',
                title: 'Free Delivery',
                desc: 'Scheduled cold-chain shipping',
              },
            ].map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-2 bg-primary-container/80 backdrop-blur-md px-4 py-2 rounded-xl"
              >
                <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                  {badge.icon}
                </span>
                <div>
                  <h4 className="font-headline text-lg font-semibold text-on-primary">
                    {badge.title}
                  </h4>
                  <p className="font-body text-sm text-primary-fixed-dim">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
            Flexible Subscriptions
          </span>
          <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-4">
            Choose Your Harvest Plan
          </h2>
          <p className="font-body text-base text-on-surface-variant">
            Pause, skip, or modify your delivery frequency anytime with just a single
            click.
          </p>
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-surface-container-high p-1 rounded-full mt-8">
            <button
              className={`px-4 py-1 rounded-full font-body text-sm font-semibold transition-all ${
                billing === 'monthly'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant'
              }`}
              onClick={() => setBilling('monthly')}
            >
              Monthly Billing (Save 15%)
            </button>
            <button
              className={`px-4 py-1 rounded-full font-body text-sm font-semibold transition-all ${
                billing === 'weekly'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant'
              }`}
              onClick={() => setBilling('weekly')}
            >
              Weekly Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl p-8 relative transition-all hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-primary text-on-primary shadow-[0_12px_32px_rgba(27,67,50,0.15)] ring-2 ring-accent'
                  : 'bg-surface-container-lowest shadow-[0_8px_24px_rgba(27,67,50,0.06)]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 right-4 bg-accent text-on-tertiary px-4 py-1 rounded-full font-body text-xs font-semibold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <span
                  className={`font-body text-xs font-semibold uppercase tracking-wider ${
                    plan.featured ? 'text-primary-fixed-dim' : 'text-secondary'
                  }`}
                >
                  {plan.tier}
                </span>
                <h3
                  className={`font-headline text-2xl font-semibold mt-1 ${
                    plan.featured ? 'text-on-primary' : 'text-on-surface'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-body text-sm mt-1 ${
                    plan.featured ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                  }`}
                >
                  {plan.desc}
                </p>
              </div>
              <div className="mb-8">
                <span
                  className={`font-headline text-[42px] font-bold ${
                    plan.featured ? 'text-primary-fixed' : 'text-primary'
                  }`}
                >
                  {billing === 'monthly' ? plan.monthlyPrice : plan.weeklyPrice}
                </span>
                <span
                  className={`font-body text-sm ${
                    plan.featured ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                  }`}
                >
                  {' '}
                  / delivery
                </span>
              </div>
              <ul className="flex flex-col gap-2 mb-16 flex-grow">
                {plan.features.map((feat) => (
                  <li
                    key={feat.text}
                    className={`flex items-center gap-2 text-sm ${
                      feat.included
                        ? plan.featured
                          ? 'text-on-primary'
                          : 'text-on-surface'
                        : `line-through ${
                            plan.featured ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                          }`
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        feat.included
                          ? plan.featured
                            ? 'text-secondary-fixed'
                            : 'text-secondary'
                          : 'text-outline'
                      }`}
                    >
                      {feat.included ? 'check' : 'close'}
                    </span>
                    {feat.text}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity text-center ${
                  plan.featured
                    ? 'bg-accent text-on-tertiary'
                    : 'bg-secondary text-on-secondary'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sign-Up Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
              Get Started Today
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mb-4">
              Ready to Transform Your Plate?
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8">
              Join thousands of health enthusiasts across India and the UAE enjoying
              restaurant-quality living microgreens at home.
            </p>
            <div className="flex flex-col gap-4">
              {[
                'Select your preferred subscription tier above.',
                'Enter your delivery address and schedule.',
                'Receive fresh living greens right at your doorstep.',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline text-lg font-semibold">
                    {i + 1}
                  </div>
                  <p className="font-body text-base text-on-surface">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)]">
            <h3 className="font-headline text-2xl font-semibold text-on-surface mb-4">
              Quick Subscribe
            </h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Subscription sign-up simulated successfully!');
              }}
            >
              <div>
                <label className="block font-body text-sm font-medium text-on-surface mb-1">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg bg-surface border border-outline-variant text-on-surface focus:outline-none focus:border-primary"
                  placeholder="Aarav Sharma"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-on-surface mb-1">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg bg-surface border border-outline-variant text-on-surface focus:outline-none focus:border-primary"
                  placeholder="aarav@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-on-surface mb-1">
                  Delivery City
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-surface border border-outline-variant text-on-surface focus:outline-none focus:border-primary">
                  <option>Bangalore, India</option>
                  <option>Mumbai, India</option>
                  <option>Dubai, UAE</option>
                  <option>Abu Dhabi, UAE</option>
                </select>
              </div>
              <button
                className="w-full mt-2 py-4 rounded-full bg-accent text-on-tertiary font-body text-[15px] font-semibold hover:opacity-95 transition-opacity"
                type="submit"
              >
                Complete Subscription
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
