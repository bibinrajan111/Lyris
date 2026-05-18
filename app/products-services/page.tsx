import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '../components/AnimatedSection';
import { BrandPreview } from '../components/BrandPreview';
import { ContactOptions } from '../components/ContactOptions';

export const metadata: Metadata = {
  title: 'Products & Services | Bottled Water, Refillable Cans & Branding',
  description: 'Shop Lyris small, medium, and large water bottles, refillable water cans, custom logo printed bottles, personalized labels, event branding, bulk orders, catering, and hospitality water supply.',
  alternates: { canonical: '/products-services' },
  keywords: ['small water bottles', 'medium water bottles', 'large water bottles', 'refillable water cans', 'custom branded water bottles', 'logo printing water bottles', 'catering water supply', 'bulk bottled water orders'],
  openGraph: {
    title: 'Lyris Products & Services | Bottles, Refillable Cans & Custom Branding',
    description: 'Premium bottled water formats, refillable cans, custom branded bottles, catering supply, hospitality water solutions, and bulk orders.',
    url: '/products-services',
  },
};

const products = [
  {
    title: 'Small Water Bottles',
    tag: 'Everyday convenience',
    body: 'Perfect for everyday convenience, travel, meetings, events, and retail distribution. Lightweight, hygienically packaged, and easy to carry for clean hydration on the go.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1200&auto=format&fit=crop',
    ideal: ['Retail stores', 'Offices', 'Schools & colleges', 'Meetings & conferences', 'Travel & tourism', 'Events & functions'],
    features: ['Crystal-clear purified water', 'Leak-proof packaging', 'Easy-to-carry design', 'Hygienically sealed', 'Recyclable bottles'],
  },
  {
    title: 'Medium Water Bottles',
    tag: 'Balanced daily hydration',
    body: 'Designed for customers who need longer-lasting hydration throughout the day across workplaces, hospitality services, educational institutions, and event venues.',
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1200&auto=format&fit=crop',
    ideal: ['Corporate offices', 'Hotels', 'Restaurants', 'Educational institutions', 'Clinics & healthcare centers', 'Sports & fitness activities'],
    features: ['Balanced portability and volume', 'Premium-quality packaging', 'Safe purified drinking water', 'Durable recyclable bottles'],
  },
  {
    title: 'Large Water Bottles',
    tag: 'High-capacity sharing',
    body: 'Built for families, group settings, events, and long-duration usage with greater convenience and fewer replacements.',
    image: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?q=80&w=1200&auto=format&fit=crop',
    ideal: ['Family use', 'Group gatherings', 'Outdoor activities', 'Catering support', 'Large events'],
    features: ['High-capacity hydration', 'Reliable quality standards', 'Sustainable packaging approach', 'Convenient for shared use'],
  },
  {
    title: 'Refillable Water Cans',
    tag: 'Reusable supply system',
    body: 'Economical and environmentally responsible hydration for homes, businesses, institutions, and commercial spaces while reducing single-use plastic waste.',
    image: 'https://images.unsplash.com/photo-1564419320627-8a6e5a5cf3f9?q=80&w=1200&auto=format&fit=crop',
    ideal: ['Homes & apartments', 'Offices', 'Restaurants & cafés', 'Schools & institutions', 'Commercial establishments', 'Industrial workplaces'],
    features: ['Reusable and refillable system', 'Cost-effective long-term solution', 'High hygiene and purification standards', 'Reliable delivery and refill support', 'Environmentally responsible alternative'],
  },
];

const services = [
  ['Custom Logo Printing', 'Add your company logo, organization identity, or event branding to water bottle labels.'],
  ['Personalized Bottle Labels', 'Custom-designed labels tailored to your brand colors, messaging, and visual identity.'],
  ['Event & Corporate Branding', 'Premium water presentation for conferences, trade shows, weddings, campaigns, hotels, resorts, and institutions.'],
  ['Bulk Order Solutions', 'Efficient production and delivery support for large-scale branding and supply requirements.'],
  ['Catering & Hospitality Water Supply', 'Reliable packaged drinking water solutions for guests, clients, banquets, restaurants, and event organizers.'],
];

const reasons = ['Premium Water Quality', 'Sustainable Approach', 'Custom Branding Expertise', 'Reliable Supply & Delivery', 'Professional Packaging'];

export default function ProductsServices() {
  return (
    <>
      <section className="relative overflow-hidden brand-grad text-white">
        <div className="absolute inset-0 water-grid" />
        <div className="blob -left-24 top-16 h-72 w-72 bg-cyan-300/25" />
        <div className="blob -right-28 bottom-0 h-96 w-96 bg-purple-200/25" />
        <div className="section-shell relative grid min-h-[70vh] items-center gap-12 py-24 lg:grid-cols-[1fr_.85fr]">
          <AnimatedSection>
            <p className="text-sm font-black uppercase tracking-[.28em] text-cyan-100">Products & Services — Lyris</p>
            <h1 className="mt-5 font-syne text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-7xl">Refreshment designed for every need.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">High-quality packaged drinking water solutions for individuals, businesses, events, hospitality services, and organizations of every scale.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#products" className="btn btn-light">View Products</a><a href="#branding" className="btn border border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#53247b]">Brand Your Bottles</a></div>
          </AnimatedSection>
          <AnimatedSection className="glass-card p-6 sm:p-8">
            <div className="rounded-[2rem] bg-white p-6 text-[#321548] shadow-2xl">
              <p className="font-syne text-2xl font-black">From everyday hydration to customized branded water solutions.</p>
              <p className="mt-4 leading-7 text-slate-600">Compact personal bottles, refillable water cans, or custom-branded packaging for your business or event—Lyris delivers reliable hydration with premium quality standards.</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 text-center"><div className="rounded-3xl bg-white/10 p-5"><b className="text-3xl">4</b><p className="text-sm text-white/70">product formats</p></div><div className="rounded-3xl bg-white/10 p-5"><b className="text-3xl">5+</b><p className="text-sm text-white/70">service lines</p></div></div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="section-shell" id="products" as="section">
        <div className="mx-auto mb-12 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Our products</p><h2 className="mt-3 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Pure water in formats built around real use.</h2></div>
        <div className="grid gap-7 lg:grid-cols-2">
          {products.map((product, index) => (
            <article key={product.title} className="soft-panel shine hover-lift overflow-hidden">
              <div className="grid h-full md:grid-cols-[.9fr_1.1fr]">
                <div className="min-h-72 product-image bg-drift" style={{ backgroundImage: `linear-gradient(140deg, rgba(83,36,123,.18), rgba(83,36,123,.48)), url(${product.image})` }} />
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[.22em] text-[#53247b]">{product.tag}</p>
                  <h3 className="mt-3 font-syne text-3xl font-black text-[#321548]">{product.title}</h3>
                  <p className="mt-4 leading-7">{product.body}</p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div><p className="font-bold text-[#321548]">Ideal For</p><ul className="mt-2 space-y-1 text-sm text-slate-600">{product.ideal.map((item) => <li key={item}>• {item}</li>)}</ul></div>
                    <div><p className="font-bold text-[#321548]">Features</p><ul className="mt-2 space-y-1 text-sm text-slate-600">{product.features.map((item) => <li key={item}>• {item}</li>)}</ul></div>
                  </div>
                  <div className="mt-7"><ContactOptions compact /></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <section id="branding" className="relative overflow-hidden bg-[#f4eeff]">
        <div className="blob left-0 top-0 h-80 w-80 bg-purple-300/30" />
        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <AnimatedSection>
            <p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Custom branding & rebranding services</p>
            <h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-6xl">Personalized water bottles for businesses and events.</h2>
            <p className="mt-6 text-lg leading-8">Transform ordinary bottles into premium branded experiences by adding custom logos, company names, event designs, and promotional branding directly onto packaging.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{services.map(([title, body]) => <div key={title} className="soft-panel p-5"><h3 className="font-syne text-xl font-bold text-[#321548]">{title}</h3><p className="mt-2 text-sm leading-6">{body}</p></div>)}</div>
          </AnimatedSection>
          <AnimatedSection><BrandPreview /></AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="soft-panel overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="min-h-[440px] product-image bg-drift" style={{ backgroundImage: "linear-gradient(135deg, rgba(83,36,123,.2), rgba(83,36,123,.6)), url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop')" }} />
            <div className="p-8 sm:p-12"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Catering & hospitality water solutions</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Reliable supply for premium guest experiences.</h2><p className="mt-5 text-lg leading-8">We work closely with catering companies, hospitality providers, and event organizers to deliver consistent quality, timely delivery, and customized branding options.</p><div className="mt-7 flex flex-wrap gap-2">{['Wedding catering', 'Corporate catering', 'Outdoor events', 'Banquet services', 'Hotels & resorts', 'Restaurants', 'Event management companies'].map((item) => <span key={item} className="rounded-full bg-[#53247b]/10 px-4 py-2 text-sm font-bold text-[#53247b]">{item}</span>)}</div></div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="mb-10 text-center"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Why choose Lyris?</p><h2 className="mt-3 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Built for quality, visibility, and dependable service.</h2></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{reasons.map((reason, index) => <article key={reason} className="soft-panel hover-lift p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#53247b] font-black text-white">{index + 1}</span><h3 className="mt-5 font-syne text-xl font-bold text-[#321548]">{reason}</h3><p className="mt-3 text-sm leading-6">{reason === 'Premium Water Quality' ? 'Strict purification and hygiene processes ensure safe, refreshing drinking water.' : reason === 'Sustainable Approach' ? 'Recycling awareness, refillable solutions, and responsible packaging practices.' : reason === 'Custom Branding Expertise' ? 'Premium customized water packaging that strengthens brand visibility.' : reason === 'Reliable Supply & Delivery' ? 'Timely service and scalable supply for small and bulk requirements.' : 'Modern, clean, high-quality packaging for convenience and presentation.'}</p></article>)}</div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="rounded-[2.5rem] brand-grad p-8 text-white shadow-2xl sm:p-12 lg:p-16"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-black uppercase tracking-[.28em] text-cyan-100">Partner with Lyris</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] sm:text-6xl">Quality you can trust for every bottle, refill, brand, and event.</h2><p className="mt-5 max-w-3xl text-white/80">Whether you need everyday bottled water, refillable hydration solutions, or custom-branded bottles, Lyris is ready to deliver.</p></div><div className="flex flex-col gap-3"><ContactOptions /><Link href="/about" className="btn btn-light">Learn About Lyris</Link></div></div></div>
      </AnimatedSection>
    </>
  );
}
