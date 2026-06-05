'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ContactButton } from './ContactButton';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#53247b]/10 bg-white/90 shadow-[0_18px_60px_-38px_rgba(83,36,123,.65)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Lyris home" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#53247b] text-base font-black text-white shadow-[0_18px_35px_-20px_rgba(83,36,123,.9)] transition group-hover:-rotate-3">Ly</span>
          <span>
            <span className="block text-2xl font-black leading-none tracking-[-0.05em] text-[#321548]">Lyris</span>
            <span className="hidden text-[10px] font-black uppercase tracking-[0.28em] text-[#53247b]/65 sm:block">Pure water systems</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[#53247b]/10 bg-[#fbf8ff] p-1.5 text-sm font-bold text-slate-700 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2.5 transition ${active ? 'bg-[#53247b] text-white shadow-[0_12px_28px_-18px_rgba(83,36,123,.9)]' : 'hover:bg-white hover:text-[#53247b]'}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block"><ContactButton compact /></div>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" className="rounded-full border border-[#53247b]/15 bg-white px-4 py-2 text-sm font-black text-[#53247b] md:hidden">
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[#53247b]/10 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-2 rounded-3xl border border-[#53247b]/10 bg-[#fbf8ff] p-3 shadow-xl">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-black text-[#321548] hover:bg-white">
                {item.label}
              </Link>
            ))}
            <div className="px-1 py-2"><ContactButton compact /></div>
          </div>
        </div>
      )}
    </header>
  );
}
