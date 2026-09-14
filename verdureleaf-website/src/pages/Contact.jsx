import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-primary-container text-on-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary opacity-90" />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 flex flex-col items-start gap-4 z-10">
          <div className="inline-flex items-center gap-1 bg-surface/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-widest text-primary-fixed-dim">
            <span className="material-symbols-outlined text-[14px]">eco</span>
            Get in Touch
          </div>
          <h1 className="font-headline text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight max-w-2xl text-on-primary">
            We'd love to hear from our growing community.
          </h1>
          <p className="font-body text-lg text-primary-fixed-dim max-w-xl">
            Whether you have questions about our sustainable farming methods, retail
            partnerships, or doorstep microgreen subscriptions, our team across India and
            the UAE is here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full py-16 md:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-16 shadow-[0_8px_24px_rgba(27,67,50,0.06)]">
              <div className="mb-8">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary block mb-1">
                  Send a Message
                </span>
                <h2 className="font-headline text-2xl font-semibold text-on-surface">
                  Drop us a line
                </h2>
              </div>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your message has been sent successfully.');
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                      Your Name *
                    </label>
                    <input
                      className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Aarav Sharma"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                      Email Address *
                    </label>
                    <input
                      className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="aarav@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                      Phone Number
                    </label>
                    <input
                      className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="+91 98765 43210"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                      Preferred Region
                    </label>
                    <select className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                      <option value="india">India Operations</option>
                      <option value="uae">UAE Operations</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                    Message *
                  </label>
                  <textarea
                    className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us how we can assist you..."
                    required
                    rows={5}
                  />
                </div>
                <button
                  className="mt-2 bg-accent text-on-tertiary py-4 px-8 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity flex items-center justify-center gap-1 shadow-md"
                  type="submit"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            </div>

            {/* Office Cards & Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* India Office */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_8px_24px_rgba(27,67,50,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-secondary" />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary block">
                      Headquarters
                    </span>
                    <h3 className="font-headline text-2xl font-semibold text-on-surface">
                      India Farm & Office
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">
                      location_on
                    </span>
                    <span>
                      Neduvelil H, Mutholapuram P.O, Elanji, Ernakulam, Kerala, India
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      call
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        className="hover:text-primary transition-colors"
                        href="tel:+918075931749"
                      >
                        +91 8075931749
                      </a>
                      <span>•</span>
                      <a
                        className="hover:text-primary transition-colors"
                        href="tel:+919400759169"
                      >
                        +91 9400759169
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      mail
                    </span>
                    <a
                      className="hover:text-primary transition-colors"
                      href="mailto:jismariajl@gmail.com"
                    >
                      jismariajl@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* UAE Office */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_8px_24px_rgba(27,67,50,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent block">
                      Regional Hub
                    </span>
                    <h3 className="font-headline text-2xl font-semibold text-on-surface">
                      UAE Office
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined">location_city</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] text-accent mt-0.5">
                      location_on
                    </span>
                    <span>Suite 404, Oasis Tower, Sheikh Zayed Road, Dubai, UAE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-accent">
                      call
                    </span>
                    <a
                      className="hover:text-primary transition-colors"
                      href="tel:+97141234567"
                    >
                      +971 4 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-accent">
                      mail
                    </span>
                    <a
                      className="hover:text-primary transition-colors"
                      href="mailto:uae@caerisgreens.com"
                    >
                      uae@caerisgreens.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHbfR5xPi3MpUZaspFjNWQrOVOT5a4Ge49vb40xbUgrqgS8vucO6adr2dI1NLx5aKsafDh9_jVBTu6m5BD02ydr5u0XJMXdMfqbC2XWBjB4SY3bQKn7g5YuQnx7YEZiTfAC5-5gh18E-z5bnf53eNB-qLkGtYEFQsqswY8CWcLAK3onrl8vhbXWghEOucXJdicFsc9VWfyrXmcCrzWpvl_zdloLgpYsFg6Apsy6NvIqmemB354PFNGcg')`,
                  }}
                />
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-1 rounded-lg text-sm font-semibold text-primary shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-accent">
                    map
                  </span>
                  Global Operations Map
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Help Section */}
      <section className="w-full py-16 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary block mb-1">
            Need Immediate Assistance?
          </span>
          <h2 className="font-headline text-2xl font-semibold text-on-surface mb-4">
            Frequently Asked Support Topics
          </h2>
          <p className="font-body text-base text-on-surface-variant max-w-lg mx-auto mb-8">
            Check out our active delivery schedules or subscription pause guidelines to
            manage your microgreen orders instantly.
          </p>
          <div className="inline-flex items-center gap-4">
            <Link
              to="/subscriptions"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity"
            >
              Manage Subscription
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
