import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const waMessage = encodeURIComponent(
      `Hello Caeris Greens!\nInquiry from Website:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918075931749?text=${waMessage}`, '_blank');
  };

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
            We&apos;d love to hear from our growing community.
          </h1>
          <p className="font-body text-lg text-primary-fixed-dim max-w-xl">
            Whether you have questions about our microgreens, subscriptions, or fresh harvests, our farm team is here to assist you instantly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full py-16 md:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-16 shadow-[0_8px_24px_rgba(27,67,50,0.06)]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary block mb-1">
                    Send a Message
                  </span>
                  <h2 className="font-headline text-2xl font-semibold text-on-surface">
                    Drop us a line
                  </h2>
                </div>
                <a
                  href="https://wa.me/918075931749"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp +91 8075931749</span>
                </a>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleSendMessage}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Enter your name"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="jismariajl@gmail.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+91 80759 31749"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[15px] font-semibold text-on-surface-variant">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us how we can assist you..."
                    required
                    rows={5}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <button
                    className="bg-accent text-on-tertiary py-4 px-6 rounded-full font-body text-sm font-semibold hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Send via WhatsApp</span>
                  </button>
                  <a
                    href="https://wa.me/918075931749"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 text-white py-4 px-6 rounded-full font-body text-sm font-bold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Direct Chat +91 8075931749</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Office Cards & Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* India Office */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_8px_24px_rgba(27,67,50,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-secondary" />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary block">
                      Headquarters & Farm
                    </span>
                    <h3 className="font-headline text-2xl font-semibold text-on-surface">
                      Caeris Greens
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
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
                        className="hover:text-primary transition-colors font-semibold"
                        href="tel:+918075931749"
                      >
                        +91 8075931749
                      </a>
                      <span>•</span>
                      <a
                        className="hover:text-primary transition-colors font-semibold"
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
                      className="hover:text-primary transition-colors font-semibold"
                      href="mailto:jismariajl@gmail.com"
                    >
                      jismariajl@gmail.com
                    </a>
                  </div>
                  <div className="pt-2 border-t border-outline-variant/30 mt-1">
                    <a
                      href="https://wa.me/918075931749"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat on WhatsApp (+91 8075931749)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
