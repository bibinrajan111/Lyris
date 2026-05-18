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
  },
  {
    eyebrow: 'Sustainable Water Solutions',
    title: 'Hydration that respects the planet.',
    body: 'Recyclable packaging, refillable cans, responsible disposal awareness, and circular supply practices built into every experience.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2200&auto=format&fit=crop',
  },
  {
    eyebrow: 'Custom Branded Bottles',
    title: 'Turn every bottle into a premium brand touchpoint.',
    body: 'Custom labels, logo printing, event identity, catering supply, and corporate bottle programs designed to impress.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2200&auto=format&fit=crop',
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6200);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#170822] text-white">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 hero-bg ${index === active ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `linear-gradient(115deg, rgba(24,8,35,.9), rgba(83,36,123,.72) 42%, rgba(14,165,233,.24)), url(${item.image})` }}
        />
      ))}
      <div className="absolute inset-0 water-grid opacity-40" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl animate-float" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl animate-float-slow" />
      <div className="section-shell relative z-10 flex min-h-[92vh] items-center py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div key={slide.title} className="animate-slide-up">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[.28em] text-cyan-100 backdrop-blur-xl">{slide.eyebrow}</p>
            <h1 className="font-syne text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-7xl 2xl:text-8xl">{slide.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">{slide.body}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/products-services" className="btn btn-light">Explore Products</Link>
              <ContactOptions />
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute left-10 top-12 h-80 w-40 animate-float rounded-[4rem] border border-white/40 bg-white/15 shadow-2xl backdrop-blur-xl">
              <div className="absolute left-6 right-6 top-24 rounded-2xl bg-white p-4 text-center font-syne text-[#53247b] shadow-xl">LYRIS</div>
              <div className="absolute -top-8 left-1/2 h-12 w-16 -translate-x-1/2 rounded-t-3xl bg-white/70" />
            </div>
            <div className="absolute right-8 top-28 h-96 w-48 animate-float-slow rounded-[5rem] border border-white/30 bg-gradient-to-b from-white/35 to-white/5 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur-2xl">
              <div className="absolute left-7 right-7 top-32 rounded-3xl bg-[#53247b] p-5 text-center font-syne text-xl font-black text-white shadow-2xl">Custom Brand</div>
              <div className="absolute -top-10 left-1/2 h-14 w-20 -translate-x-1/2 rounded-t-3xl bg-white/65" />
            </div>
            <div className="absolute bottom-16 left-24 rounded-3xl border border-white/25 bg-white/15 p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-4xl font-black">99.9%</p><p className="text-sm text-white/80">quality-first process</p>
            </div>
          </div>
        </div>
      </div>
      <button aria-label="Previous slide" onClick={() => setActive((active + slides.length - 1) % slides.length)} className="hero-arrow left-4 sm:left-8">‹</button>
      <button aria-label="Next slide" onClick={() => setActive((active + 1) % slides.length)} className="hero-arrow right-4 sm:right-8">›</button>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((item, index) => <button key={item.title} aria-label={`Go to ${item.eyebrow}`} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-10 bg-white' : 'w-2.5 bg-white/40'}`} />)}
      </div>
    </section>
  );
}
