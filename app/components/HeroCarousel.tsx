'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContactOptions } from './ContactOptions';

const slides = [
  {
    eyebrow: 'Premium Hydration',
    title: 'Water made to look as pure as it tastes.',
    body: 'Elegant bottled water programs for workplaces, retail, hospitality, and events where presentation matters as much as purity.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=2200&auto=format&fit=crop',
    accent: '#7dd3fc',
    metric: 'Daily routes',
    proof: 'Office, retail & event supply',
  },
  {
    eyebrow: 'Circular Water Systems',
    title: 'A cleaner hydration ritual for modern communities.',
    body: 'Refillable cans, recyclable PET awareness, and recovery-led practices designed to reduce waste without reducing convenience.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2200&auto=format&fit=crop',
    accent: '#a7f3d0',
    metric: 'Refill loops',
    proof: 'Reusable cans & responsible packaging',
  },
  {
    eyebrow: 'Custom Branded Bottles',
    title: 'Make every sip carry your brand beautifully.',
    body: 'Custom labels, logo printing, event identity, catering support, and corporate bottle programs that feel premium at every table.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2200&auto=format&fit=crop',
    accent: '#f0abfc',
    metric: 'Brand-ready',
    proof: 'Corporate, catering & hospitality labels',
  },
];

const miniImages = [
  'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564419320627-8a6e5a5cf3f9?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop',
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 7200);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#100618] text-white">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 hero-bg ${index === active ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `linear-gradient(115deg, rgba(16,6,24,.94), rgba(83,36,123,.73) 40%, rgba(6,30,43,.62)), url(${item.image})` }}
        />
      ))}
      <div className="absolute inset-0 liquid-mesh opacity-80" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#100618]/80 to-transparent" />
      <div className="section-shell relative z-10 flex min-h-[100svh] items-center pb-14 pt-28 sm:pt-32 lg:pb-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.02fr_.86fr] xl:gap-12">
          <div key={slide.title} className="animate-slide-up">
            <p className="premium-eyebrow border-white/20 bg-white/10 text-white/90 backdrop-blur-xl" style={{ boxShadow: `inset 0 0 30px ${slide.accent}22` }}>{slide.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl font-syne text-[clamp(2.45rem,8vw,7.4rem)] font-black leading-[.88] tracking-[-.075em]">{slide.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg lg:text-xl lg:leading-8">{slide.body}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/products-services" className="btn btn-light">Explore Products</Link>
              <ContactOptions />
            </div>
            <div className="mt-7 grid max-w-2xl grid-cols-3 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 text-center backdrop-blur-xl">
              {['Purity', 'Design', 'Delivery'].map((item) => <div key={item} className="border-r border-white/10 px-3 py-3 last:border-r-0"><p className="font-syne text-lg font-black">{item}</p><p className="text-[11px] uppercase tracking-[.2em] text-white/60">Lyris</p></div>)}
            </div>
          </div>

          <aside className="hero-stage" aria-label="Lyris premium hydration visual story">
            <div className="hero-photo hero-photo-main" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#100618]/70 via-transparent to-white/10" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-white/18 bg-white/15 p-4 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <p className="text-xs font-black uppercase tracking-[.22em] text-white/65">{slide.metric}</p>
                <p className="mt-1 font-syne text-2xl font-black sm:text-3xl">{slide.proof}</p>
              </div>
            </div>
            <div className="hero-mini hero-mini-top" style={{ backgroundImage: `url(${miniImages[(active + 1) % miniImages.length]})` }} />
            <div className="hero-mini hero-mini-bottom" style={{ backgroundImage: `url(${miniImages[(active + 2) % miniImages.length]})` }} />
          </aside>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:bottom-8">
        {slides.map((item, index) => <button key={item.title} aria-label={`Go to ${item.eyebrow}`} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-10 bg-white' : 'w-2.5 bg-white/40'}`} />)}
      </div>
    </section>
  );
}
