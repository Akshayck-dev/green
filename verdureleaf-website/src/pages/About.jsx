import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-on-primary py-16 md:py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh6ENqOHrEWbwynq0PjpcIw5MTVSmwNOV_yfE3P1VvxhnK_8UALeTP5Xof-x9CHKp2PIgYucy1AZhLwLHF-rx6vDljOLAeVP7Aw-QVAe0Rg6m3R9KsNxsHVML1R-rt-85lQAFSrjZPX7Vtv2fKsKcX7gIibpFXmquj0eVhKPcWYKH3whfrA0aJyT0sA0nir7AtGWDXhjygdz7ZTuwqDi5vThgTzA22GhfZ9fbJikRh-I4ScYAA0-LXKg')`,
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-start gap-4">
          <span className="font-body text-xs font-semibold uppercase text-primary-fixed-dim tracking-widest bg-primary-container px-2 py-1 rounded-full">
            Our Mission & Philosophy
          </span>
          <h1 className="font-headline text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight max-w-3xl text-on-primary">
            Cultivating the Future of Urban Nutrition, One Leaf at a Time.
          </h1>
          <p className="font-body text-lg text-primary-fixed-dim max-w-2xl mt-2">
            Founded between the bustling tech corridors of Bangalore and the visionary
            skyline of Dubai, VerdureLeaf brings hyper-local, pesticide-free microgreens
            straight to your table within hours of harvest.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs font-semibold uppercase text-secondary tracking-widest">
              Our Journey
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface">
              Roots in Sustainability, Wings in Innovation.
            </h2>
            <p className="font-body text-base text-on-surface-variant">
              VerdureLeaf was born out of a simple observation: modern urbanites are
              starved for authentic living nutrients despite an abundance of food choices.
              By merging controlled-environment agriculture with precision hydroponics, we
              eliminate food miles, reduce water consumption by 95%, and deliver living
              microgreens that pack up to 40x the nutritional punch of mature vegetables.
            </p>
            <p className="font-body text-base text-on-surface-variant">
              From our state-of-the-art climate-controlled indoor farms in India and the
              UAE, we supply top-tier restaurants and health-conscious households who refuse
              to compromise on freshness or flavor.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="bg-surface-container p-8 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)]">
                <span className="font-headline text-[40px] font-bold leading-tight text-primary">
                  95%
                </span>
                <p className="font-body text-sm text-on-surface-variant mt-1">
                  Less Water Used vs Traditional Farming
                </p>
              </div>
              <div className="bg-surface-container p-8 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)]">
                <span className="font-headline text-[40px] font-bold leading-tight text-primary">
                  &lt; 4h
                </span>
                <p className="font-body text-sm text-on-surface-variant mt-1">
                  Harvest to Kitchen Delivery Window
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full h-[500px] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,67,50,0.06)] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhmsp4JePkh9pua6pHibKjYa-D3KNtYPEAx_lBkrc5GYBdFb0ERZxs4onW7TY5QvkH1Yh6bQMsT5z6Z7wrD7QBEoBnfQDtNWq0AK28up7GaPALjZ2U9OfVBpHlPtMRxRIiMHDPNtWypb-i4jU54AtI-IaIB5sQcl6RaZR4W76Z_Rlp4L58J5fPk_Fe0Y3Cyxu9hifbM4yWUcTuZahVrW7kvUh6mu3iLLpLW_9dS0iISbxk24GCpSkcTQ')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 px-6 bg-surface-container-low w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="text-center max-w-xl mb-16">
            <span className="font-body text-xs font-semibold uppercase text-secondary tracking-widest">
              What We Stand For
            </span>
            <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mt-2">
              Our Three Pillars
            </h2>
            <p className="font-body text-base text-on-surface-variant mt-1">
              Every seed we sow and every tray we deliver is guided by an uncompromising
              commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              {
                icon: 'spa',
                title: 'Purity',
                desc: 'Zero synthetic pesticides, zero artificial fertilizers, and zero harmful chemicals. Just pure, living nutrition harvested at peak potency in sterile, filtered environments.',
              },
              {
                icon: 'eco',
                title: 'Sustainability',
                desc: 'Closed-loop hydroponic systems, biodegradable packaging, and hyper-local urban footprint minimize carbon emissions and preserve precious planetary resources.',
              },
              {
                icon: 'bolt',
                title: 'Nutrition',
                desc: 'Packed with up to 40 times higher concentration of vital nutrients and vitamins than their fully grown counterparts to supercharge your daily diet.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface p-16 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-on-surface">
                  {value.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quotes Section */}
      <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-body text-xs font-semibold uppercase text-secondary tracking-widest">
            Leadership & Voices
          </span>
          <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-surface mt-2">
            Words from Our Founders
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container p-16 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col justify-between">
            <p className="font-body text-lg text-on-surface italic mb-16">
              "We didn't just want to build another farming venture. We wanted to
              reconnect urban dwellers with living, breathing food that heals the body and
              respects the Earth."
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx2T_8w9Ai0bEaXIV65IRLfDqC1c2FvptCpK34iHDpP3luhb8oGPcy7YpSRPuj03maLDKLBdRDl6dAPQSyYIj4RmES9rEeJXLCrEyCxXCVxfROw3xCXWgtwZc1GnyecSgTupez_5giYUmADNsntMagoRkJKBDrpmNUmjlsKfkFqbNTOEBahxKV_lINUc2YcFgjA1c6P52mf2MHG447gzmjxRJNTQfXoJKzHJBMm3NeV0R_pJNhAWk8fQ')`,
                }}
              />
              <div>
                <h4 className="font-headline text-lg font-semibold text-on-surface">
                  Rohan Sharma
                </h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Co-Founder & CEO, India
                </p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container p-16 rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.06)] flex flex-col justify-between">
            <p className="font-body text-lg text-on-surface italic mb-16">
              "Operating in Dubai taught us that innovation can turn even arid deserts
              into lush hubs of nourishment. Vertical farming is no longer the future—it's
              the absolute necessity of today."
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKOeUb2De7F_eHzNBQ0hLZnebB3gabaLvenFa21eM7Q8lrBxtw_UD2GXaRLeG-sgwuoHUuY92bTXjbqYqRdLH2v7SuP9qNdGxkQhnnHG43djmiCpqlt1_a7x8QDIq-OlpcPhZcxKu_C2TRf6n6eTTb6VQkCwkfZ5pea35R5wlRu0eOtweLo1FkyxU5ZBJg153YHL2OnkqniiL-2SbvXOBczqzEHvyxaogl7_8Xcg9P_oP1Bokk00bz4A')`,
                }}
              />
              <div>
                <h4 className="font-headline text-lg font-semibold text-on-surface">
                  Fatima Al-Mansoori
                </h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Co-Founder & Head of UAE Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-primary py-16 text-on-primary px-6 text-center relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary opacity-10 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-10 gap-4">
          <h2 className="font-headline text-3xl md:text-[40px] font-bold leading-tight text-on-primary">
            Ready to Transform Your Plate?
          </h2>
          <p className="font-body text-lg text-primary-fixed-dim max-w-xl">
            Join hundreds of health enthusiasts across India and the UAE enjoying weekly
            doorstep deliveries of live microgreens.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              to="/subscriptions"
              className="bg-accent text-on-tertiary px-16 py-4 rounded-full font-body text-[15px] font-semibold hover:opacity-95 transition-opacity shadow-[0_4px_16px_rgba(224,122,95,0.3)]"
            >
              Start Your Subscription
            </Link>
            <Link
              to="/shop"
              className="bg-surface text-primary px-16 py-4 rounded-full font-body text-[15px] font-semibold hover:bg-surface-container transition-colors"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
