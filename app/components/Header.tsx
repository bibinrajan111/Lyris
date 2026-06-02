'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ContactOptions } from './ContactOptions';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products-services', label: 'Products & Services' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#53247b]/10 bg-[#fbf8ff] shadow-[0_10px_30px_-24px_rgba(83,36,123,.45)]">
      <div className="header-ribbon overflow-hidden bg-[#53247b] py-1.5 text-center text-[11px] font-black uppercase tracking-[.22em] text-white/85">
        <span className="inline-block animate-ribbon">Premium bottled water • Refillable cans • Custom branded hydration • Catering & hospitality supply</span>
      </div>
      <nav className="mx-auto flex h-[72px] w-full max-w-[92rem] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 2xl:max-w-[108rem] 2xl:px-16">
        <Link href="/" className="group flex items-center gap-3" aria-label="Lyris home">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#53247b] shadow-[0_14px_30px_-18px_rgba(83,36,123,.85)] transition group-hover:-rotate-3 group-hover:scale-105">
            <Image src="/lyris-logo.svg" alt="" width={28} height={28} priority />
          </span>
          <span>
            <span className="block font-syne text-2xl font-black leading-none tracking-[-.05em] text-[#321548]">Lyris</span>
            <span className="hidden text-[10px] font-black uppercase tracking-[.28em] text-[#53247b]/65 sm:block">Pure water systems</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[#53247b]/10 bg-white px-1.5 py-1.5 text-sm font-black text-slate-700 shadow-inner md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href === '/products-services' && pathname === '/products');
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2.5 transition ${active ? 'bg-[#53247b] text-white shadow-[0_10px_24px_-16px_rgba(83,36,123,.85)]' : 'hover:bg-[#f1e8f8] hover:text-[#53247b]'}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block"><ContactOptions compact /></div>
        <button onClick={() => setOpen((value) => !value)} className="rounded-xl border border-[#53247b]/15 bg-white px-4 py-2 text-sm font-black text-[#53247b] shadow-sm md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">{open ? 'Close' : 'Menu'}</button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[#53247b]/10 bg-[#fbf8ff] px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-1 rounded-2xl border border-[#53247b]/10 bg-white p-3 text-[#53247b] shadow-xl">
            {navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-xl px-4 py-3 font-black hover:bg-[#f1e8f8]">{item.label}</Link>)}
            <div className="px-1 py-2"><ContactOptions /></div>
          </div>
        </div>
      )}
    </header>
  );
}
