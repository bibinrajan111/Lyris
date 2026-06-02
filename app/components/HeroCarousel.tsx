'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContactOptions } from './ContactOptions';

const slides = [
  {
    eyebrow: 'Premium Hydration',
    title: 'Bottled water with a refined brand presence.',
    body: 'Purified drinking water for offices, hospitality, events, retail and everyday service — designed to feel clean, confident and premium.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=2200&auto=format&fit=crop',
    metric: '4 formats',
    proof: 'Small, medium, large bottles and refillable cans',
    tone: 'from-[#53247b] to-[#0d5b72]',
  },
  {
    eyebrow: 'Circular Water Systems',
    title: 'Refill, recover, recycle — without losing elegance.',
    body: 'Reusable cans, recyclable packaging awareness and dependable supply practices for communities that want smarter hydration habits.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2200&auto=format&fit=crop',
    metric: '360° lifecycle',
    proof: 'Responsibility built into every delivery model',
    tone: 'from-[#0f766e] to-[#53247b]',
  },
  {
    eyebrow: 'Custom Branded Bottles',
    title: 'Your logo, your event, your water experience.',
    body: 'Custom labels and rebranding services for organizations, catering teams, hotels, conferences, weddings and premium campaigns.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2200&auto=format&fit=crop',
    metric: 'Brand-ready',
    proof: 'Logo printing, labels, events and bulk orders',
    tone: 'from-[#321548] to-[#8b2fb6]',
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
    <section className="relative overflow-hidden bg-[#fbf8ff]">
      <div className="absolute inset-0 hero-classic-bg" />
      <div className="mx-auto grid h-[calc(100svh-102px)] w-full max-w-[92rem] grid-rows-[auto_minmax(0,1fr)] items-center gap-3 px-4 py-4 sm:px-8 lg:grid-cols-[.94fr_1.06fr] lg:grid-rows-1 lg:gap-6 lg:px-12 2xl:max-w-[108rem] 2xl:px-16">
        <div key={slide.title} className="relative z-10 animate-slide-up py-2">
          <p className="premium-eyebrow border-[#53247b]/15 bg-white text-[#53247b] shadow-sm">{slide.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-syne text-[clamp(2.15rem,6.6vw,6.8rem)] font-black leading-[.91] tracking-[-.07em] text-[#241031]">{slide.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:text-xl lg:leading-8">{slide.body}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/products-services" className="btn btn-primary">Explore Products</Link>
            <ContactOptions />
          </div>
          <div className="mt-5 hidden max-w-xl grid-cols-3 gap-3 sm:grid">
            {['Purified', 'Branded', 'Delivered'].map((item) => <div key={item} className="rounded-2xl border border-[#53247b]/10 bg-white p-3 text-center shadow-[0_14px_35px_-28px_rgba(83,36,123,.5)]"><p className="font-syne text-lg font-black text-[#321548]">{item}</p><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#53247b]/60">Lyris</p></div>)}
          </div>
        </div>

        <div className="relative z-10 h-full min-h-0 overflow-hidden rounded-[1.8rem] border border-[#53247b]/10 bg-white p-2 shadow-[0_30px_80px_-40px_rgba(83,36,123,.65)] lg:h-[calc(100svh-160px)] lg:min-h-[460px] lg:rounded-[2.4rem]">
          {slides.map((item, index) => (
            <div
              key={item.title}
              className={`absolute inset-2 rounded-[1.35rem] bg-cover bg-center transition-opacity duration-700 lg:rounded-[2rem] ${index === active ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(20,8,31,.06), rgba(20,8,31,.72)), url(${item.image})` }}
            />
          ))}
          <div className={`absolute bottom-5 left-5 right-5 rounded-[1.4rem] bg-gradient-to-r ${slide.tone} p-4 text-white shadow-2xl sm:left-6 sm:right-auto sm:w-[min(420px,calc(100%-48px))] sm:p-5`}>
            <p className="text-xs font-black uppercase tracking-[.22em] text-white/70">{slide.metric}</p>
            <p className="mt-1 font-syne text-xl font-black sm:text-3xl">{slide.proof}</p>
          </div>
          <div className="absolute right-5 top-5 hidden rounded-full bg-white px-4 py-2 text-sm font-black text-[#53247b] shadow-lg sm:block">Premium Water</div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((item, index) => <button key={item.title} aria-label={`Go to ${item.eyebrow}`} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-10 bg-[#53247b]' : 'w-2.5 bg-[#53247b]/25'}`} />)}
      </div>
    </section>
  );
}
