'use client';

import { ThreeBottle } from './components/ThreeBottle';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const stats = [
  { label: 'Municipalities', value: 45 },
  { label: 'Cities', value: 44 },
  { label: 'Citizens Engaged', value: 10.09, suffix: 'M+' },
  { label: 'Metric Tons Recycled', value: 28645, suffix: '+' }
];

export default function Home() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ['300 ml', '500 ml', '750 ml', '1 L'];

  useEffect(() => {
    if (!counterRef.current) return;
    const items = counterRef.current.querySelectorAll('[data-value]');
    items.forEach((el) => {
      const endVal = Number(el.getAttribute('data-value'));
      const obj = { val: 0 };
      gsap.to(obj, {
        val: endVal,
        duration: 2,
        onUpdate: () => {
          el.textContent = endVal > 100 ? Math.floor(obj.val).toLocaleString() : obj.val.toFixed(2);
        }
      });
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('products');
      if (!section) return;
      const pct = Math.max(0, Math.min(1, (window.scrollY - section.offsetTop + 350) / section.clientHeight));
      setSizeIndex(Math.min(3, Math.floor(pct * 4)));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section id="home" className="section-shell grid min-h-screen items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-mint tracking-[0.25em] uppercase">Lyris · Aquadev</p>
          <h1 className="font-syne text-5xl text-white md:text-7xl">The Future of Zero-Waste Hydration.</h1>
          <p className="mt-6 max-w-lg text-lg">Sculpted refill solutions designed for conscious cities, workplaces, and high-traffic ecosystems.</p>
        </div>
        <ThreeBottle scale={1 + sizeIndex * 0.06} />
      </section>

      <section className="section-shell">
        <h3 className="font-syne text-3xl text-white">Auto-Scrollable Gallery</h3>
        <div className="mt-8 flex gap-6 overflow-x-auto pb-6 [scrollbar-width:none]">
          {['Urban Refill', 'Corporate Hydration', 'Festival Water Pods', 'Smart IoT Bottle Program'].map((card) => (
            <article key={card} className="glass min-w-72 rounded-3xl p-6 transition hover:-translate-y-1">
              <h4 className="font-syne text-2xl text-mint">{card}</h4>
              <p className="mt-2">Poster concept with premium violet palette and immersive 3D depth.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell">
        <h2 className="font-syne text-4xl text-white">Bottles for Change: Circular Economy in Action</h2>
        <p className="mt-4 max-w-3xl">Lyris powers zero-waste hydration loops where every bottle is tracked, recovered, sanitized, and refilled. Our municipal partnerships create a material circularity engine that eliminates single-use leakage while restoring community trust in public hydration.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" ref={counterRef}>
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <p data-value={s.value} className="font-syne text-4xl text-mint">0</p>
              <p className="mt-2 text-sm uppercase tracking-wide">{s.label} {s.suffix ?? '+'}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="section-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-syne text-4xl text-white">Products & Services</h2>
          <p className="mt-4">Scroll-driven bottle showcase for 300 ml, 500 ml, 750 ml, and 1 L formats.</p>
          <p className="mt-6 text-mint">Current Size: {sizes[sizeIndex]}</p>
          <div className="mt-10 glass rounded-3xl p-6">
            <h3 className="font-syne text-2xl text-white">Custom Branding</h3>
            <p className="mt-3">Animated sticker-morph concept enables catering and enterprise clients to switch labels across campaign themes instantly.</p>
          </div>
        </div>
        <ThreeBottle scale={0.92 + sizeIndex * 0.15} />
      </section>
    </>
  );
}
