'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContactOptions } from './ContactOptions';

const slides = [
  {
    eyebrow: 'Premium Hydration',
    title: 'Pure water, presented with boardroom elegance.',
    body: 'Premium bottled water programs for retail, workplaces, hospitality, and everyday guest experiences that need to feel polished from the first sip.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=2200&auto=format&fit=crop',
    stat: 'Daily supply routes',
  },
  {
    eyebrow: 'Sustainable Water Solutions',
    title: 'A refined hydration system with a cleaner lifecycle.',
    body: 'Recyclable packaging, refillable cans, disposal awareness, and circular supply practices designed for modern businesses and responsible communities.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2200&auto=format&fit=crop',
    stat: 'Circular packaging focus',
  },
  {
    eyebrow: 'Custom Branded Bottles',
    title: 'Your identity, served beautifully at every table.',
    body: 'Custom labels, logo printing, event identity, catering supply, and corporate bottle programs that turn hydration into a premium brand moment.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2200&auto=format&fit=crop',
    stat: 'Corporate-ready branding',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1564419320627-8a6e5a5cf3f9?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop',
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 7600);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#12071d] text-white">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 hero-bg ${index === active ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `linear-gradient(115deg, rgba(18,7,29,.94), rgba(83,36,123,.76) 42%, rgba(12,25,47,.56)), url(${item.image})` }}
        />
      ))}
      <div className="absolute inset-0 water-grid opacity-25" />
      <div className="absolute left-1/2 top-0 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="section-shell relative z-10 flex min-h-[92vh] items-center py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.02fr_.78fr]">
          <div key={slide.title} className="animate-slide-up">
            <p className="premium-eyebrow border-white/25 bg-white/10 text-cyan-100 backdrop-blur-xl">{slide.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl font-syne text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-6xl lg:text-7xl 2xl:text-8xl">{slide.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{slide.body}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/products-services" className="btn btn-light">Explore Products</Link>
              <ContactOptions />
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-6 text-sm text-white/75">
              {['Purified Water', 'Custom Labels', 'Bulk Delivery'].map((item) => <span key={item} className="font-bold">{item}</span>)}
            </div>
          </div>

          <aside className="hidden lg:block" aria-label="Lyris premium service highlights">
            <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-[0_40px_120px_rgba(0,0,0,.28)] backdrop-blur-2xl">
              <div className="grid grid-cols-[.82fr_1fr] gap-3">
                <div className="space-y-3">
                  <div className="image-tile h-56" style={{ backgroundImage: `url(${gallery[0]})` }} />
                  <div className="rounded-[1.7rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[.22em] text-cyan-100">Lyris advantage</p>
                    <p className="mt-3 font-syne text-2xl font-black leading-tight">{slide.stat}</p>
                  </div>
                </div>
                <div className="space-y-3 pt-10">
                  <div className="image-tile h-72" style={{ backgroundImage: `url(${gallery[active % gallery.length]})` }} />
                  <div className="image-tile h-40" style={{ backgroundImage: `url(${gallery[2]})` }} />
                </div>
              </div>
              <div className="absolute -bottom-7 left-8 right-8 rounded-[1.75rem] border border-white/25 bg-white/90 p-5 text-[#321548] shadow-2xl">
                <p className="font-syne text-2xl font-black">Premium supply, refined presentation, responsible operations.</p>
                <p className="mt-2 text-sm text-slate-600">Designed for organizations, hospitality teams, events, and everyday distribution.</p>
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
