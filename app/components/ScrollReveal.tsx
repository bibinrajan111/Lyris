'use client';
import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('in'));
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
