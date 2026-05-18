'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContactOptions } from './ContactOptions';

const slides = [
  {
    eyebrow: 'Premium Hydration',
    title: 'Purified water crafted for modern lifestyles.',
    body: 'Elegant bottled water programs for retail, workplaces, hospitality, and high-trust everyday hydration.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=2200&auto=format&fit=crop',
    stat: 'Daily supply routes',
  },
  {
    eyebrow: 'Sustainable Water Solutions',
    title: 'Hydration that respects the planet.',
    body: 'Recyclable packaging, refillable cans, responsible disposal awareness, and circular supply practices built into every experience.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2200&auto=format&fit=crop',
    stat: 'Circular packaging focus',
  },
  {
    eyebrow: 'Custom Branded Bottles',
    title: 'Turn every bottle into a premium brand touchpoint.',
    body: 'Custom labels, logo printing, event identity, catering supply, and corporate bottle programs designed to impress.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2200&auto=format&fit=crop',
    stat: 'Corporate-ready branding',
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 7200);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#170822] text-white">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 hero-bg ${index === active ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `linear-gradient(115deg, rgba(24,8,35,.92), rgba(83,36,123,.72) 46%, rgba(14,165,233,.22)), url(${item.image})` }}
        />
      ))}
      <div className="absolute inset-0 water-grid opacity-30" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/16 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="section-shell relative z-10 flex min-h-[92vh] items-center py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_.72fr]">
          <div key={slide.title} className="animate-slide-up">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[.28em] text-cyan-100 backdrop-blur-xl">{slide.eyebrow}</p>
            <h1 className="font-syne text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-7xl 2xl:text-8xl">{slide.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{slide.body}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/products-services" className="btn btn-light">Explore Products</Link>
              <ContactOptions />
            </div>
          </div>

          <aside className="hidden lg:block" aria-label="Lyris service highlights">
            <div className="glass-card p-6 xl:p-8">
              <p className="text-sm font-black uppercase tracking-[.24em] text-cyan-100">Lyris advantage</p>
              <h2 className="mt-4 font-syne text-3xl font-black leading-tight xl:text-4xl">Premium supply, refined presentation, responsible operations.</h2>
              <div className="mt-7 grid gap-4">
                {[slide.stat, 'Refillable can programs', 'WhatsApp & phone ordering'].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <p className="font-bold text-white">{item}</p>
                    <p className="mt-1 text-sm text-white/70">Designed for organizations, hospitality teams, events, and everyday distribution.</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((item, index) => <button key={item.title} aria-label={`Go to ${item.eyebrow}`} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-10 bg-white' : 'w-2.5 bg-white/40'}`} />)}
      </div>
    </section>
  );
}
