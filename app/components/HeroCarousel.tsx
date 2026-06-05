'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroSlides } from '../data';
import { ContactButton } from './ContactButton';

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % heroSlides.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative overflow-hidden bg-[#13071f] text-white" aria-label="Lyris featured banners">
      <div className="relative min-h-[calc(100svh-80px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(20,8,31,.90) 0%, rgba(20,8,31,.62) 44%, rgba(20,8,31,.28) 100%), url(${slide.image})` }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.16),transparent_28%),linear-gradient(180deg,transparent,rgba(19,7,31,.72))]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.34em] text-white/80 backdrop-blur">{slide.eyebrow}</p>
              <h1 className="mt-6 text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[0.88] tracking-[-0.075em]">{slide.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">{slide.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ContactButton />
                <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#53247b]">View Services</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-3" aria-label="Banner controls">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show banner ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${index === active ? 'w-12 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/75'}`}
            />
          ))}
        </div>
        <div className="absolute bottom-7 right-7 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-white/75 backdrop-blur md:block">{slide.metric}</div>
      </div>
    </section>
  );
}
