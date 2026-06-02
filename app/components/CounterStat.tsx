'use client';

import { useEffect, useRef, useState } from 'react';

export function CounterStat({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const progress = Math.min((now - started) / duration, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass-card p-6 text-center">
      <p className="font-syne text-4xl font-black text-white sm:text-5xl">{count}{suffix}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[.2em] text-white/70">{label}</p>
    </div>
  );
}
