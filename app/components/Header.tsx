'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ContactOptions } from './ContactOptions';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products-services', label: 'Products' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <nav className="nav-shell mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-2 sm:h-16 sm:px-3">
        <Link href="/" className="group flex min-w-0 items-center gap-2 rounded-full py-1 pl-1 pr-3" aria-label="Lyris home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#53247b] shadow-[0_12px_30px_rgba(83,36,123,.24)] transition group-hover:scale-105 sm:h-11 sm:w-11">
            <Image src="/lyris-logo.svg" alt="" width={27} height={27} priority />
          </span>
          <span className="font-syne text-xl font-black tracking-[-.05em] text-[#321548] sm:text-2xl">Lyris</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[#53247b]/10 bg-white/60 p-1 text-sm font-black text-slate-700 backdrop-blur-xl md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href === '/products-services' && pathname === '/products');
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 transition ${active ? 'bg-[#53247b] text-white shadow-lg shadow-purple-900/15' : 'hover:bg-white hover:text-[#53247b]'}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block"><ContactOptions compact /></div>
        <button onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#53247b]/15 bg-white/80 text-sm font-black text-[#53247b] shadow-sm md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">{open ? '×' : '☰'}</button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-md md:hidden">
          <div className="nav-shell flex flex-col gap-1 p-3 text-[#53247b]">
            {navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-2xl px-4 py-3 font-black hover:bg-white/80">{item.label}</Link>)}
            <div className="px-1 py-2"><ContactOptions /></div>
          </div>
        </div>
      )}
    </header>
  );
}
