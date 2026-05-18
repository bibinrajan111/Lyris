import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from './components/AnimatedSection';
import { CounterStat } from './components/CounterStat';
import { ContactOptions } from './components/ContactOptions';
import { HeroCarousel } from './components/HeroCarousel';
import { ThreeBottle } from './components/ThreeBottle';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Premium sustainable bottled water, refillable cans, and custom branded hydration services by Lyris.'
};

const why = [
  ['Purity You Can Trust', 'Strict purification, hygienic handling, and reliable quality standards for every bottle and refill.'],
  ['Premium Brand Presence', 'Elegant packaging and customizable labels designed for corporate, hospitality, and event environments.'],
  ['Sustainable by Design', 'Recyclable bottles, refillable cans, recovery awareness, and circular practices that reduce waste.'],
  ['Reliable Distribution', 'Scalable supply support for daily routes, bulk orders, catering partners, and high-footfall events.'],
];

const products = [
  ['Small Bottles', 'Compact, lightweight hydration for travel, meetings, events, and retail shelves.'],
  ['Medium Bottles', 'Balanced portability and volume for offices, hospitality, schools, and fitness spaces.'],
  ['Large Bottles', 'High-capacity convenience for families, gatherings, catering, and shared settings.'],
  ['Refillable Cans', 'Economical reusable water supply for homes, institutions, restaurants, and workplaces.'],
];

const timeline = ['Source & Purify', 'Bottle Responsibly', 'Deliver Reliably', 'Collect Awareness', 'Recycle & Reuse'];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="soft-panel p-8 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Why choose Lyris</p>
            <h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Premium hydration with a circular mindset.</h2>
            <p className="mt-5 text-lg leading-8">Lyris combines water processing, polished packaging, custom branding, and responsible distribution to support people, businesses, and the environment.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/about" className="btn btn-primary">Our Story</Link><Link href="/products-services" className="btn btn-ghost">View Services</Link></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {why.map(([title, body], index) => <AnimatedSection key={title} as="article" delay={index * 90} className="soft-panel hover-lift p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#53247b]/10 text-xl">✦</span><h3 className="mt-5 font-syne text-2xl font-bold text-[#321548]">{title}</h3><p className="mt-3 leading-7">{body}</p></AnimatedSection>)}
          </div>
        </div>
      </AnimatedSection>

      <section className="relative overflow-hidden brand-grad text-white">
        <div className="absolute inset-0 water-grid" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1fr_.8fr]">
          <AnimatedSection>
            <p className="text-sm font-black uppercase tracking-[.28em] text-cyan-100">Sustainability focus</p>
            <h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] sm:text-6xl">Every bottle should have a second life.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">We promote responsible PET disposal, refillable systems, collection awareness, and partnerships that help packaging return to useful cycles instead of polluting nature.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3"><CounterStat value={4} suffix="+" label="product formats" /><CounterStat value={6} suffix="" label="value pillars" /><CounterStat value={360} suffix="°" label="circular approach" /></div>
          </AnimatedSection>
          <ThreeBottle />
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Product showcase</p><h2 className="mt-3 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Hydration formats for every need.</h2></div><Link href="/products-services" className="btn btn-primary">Explore Full Catalog</Link></div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map(([title, body], index) => <article key={title} className="soft-panel shine hover-lift p-6"><div className="mb-6 h-44 rounded-[1.6rem] bg-drift product-image" style={{ backgroundImage: `linear-gradient(145deg, rgba(83,36,123,.5), rgba(92,200,255,.18)), url(https://images.unsplash.com/photo-${['1558642452-9d2a7deb7f62','1616118132534-381148898bb4','1593001872095-7d5b3868fb1d','1548839140-29a749e1cf4d'][index]}?q=80&w=900&auto=format&fit=crop)` }} /><h3 className="font-syne text-2xl font-bold text-[#321548]">{title}</h3><p className="mt-3 leading-7">{body}</p></article>)}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="soft-panel overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Rebranding services</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Custom bottles that carry your identity.</h2><p className="mt-5 text-lg leading-8">Add company names, logos, event artwork, and hospitality branding to premium water bottles for conferences, weddings, catering services, resorts, institutions, and campaigns.</p><div className="mt-8"><ContactOptions /></div></div>
            <div className="min-h-[420px] bg-drift product-image" style={{ backgroundImage: "linear-gradient(135deg, rgba(83,36,123,.2), rgba(83,36,123,.62)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop')" }} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="mb-10 text-center"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Process timeline</p><h2 className="mt-3 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">From purification to positive impact.</h2></div>
        <div className="grid gap-4 md:grid-cols-5">{timeline.map((item, index) => <div key={item} className="soft-panel p-5 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#53247b] font-black text-white">{index + 1}</span><h3 className="mt-4 font-syne text-xl font-bold text-[#321548]">{item}</h3></div>)}</div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] brand-grad p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 water-grid" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-black uppercase tracking-[.28em] text-cyan-100">Partner with Lyris</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] sm:text-6xl">Ready to serve water with elegance and responsibility?</h2><p className="mt-5 max-w-3xl text-white/80">Talk to us about products, refillable supply, custom branded bottles, bulk orders, and hospitality hydration programs.</p></div><ContactOptions /></div>
        </div>
      </AnimatedSection>
    </>
  );
}
