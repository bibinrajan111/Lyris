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
    <header className="sticky top-0 z-50 border-b border-white/35 bg-white/80 shadow-[0_12px_40px_rgba(83,36,123,.08)] backdrop-blur-2xl">
      <nav className="section-shell flex items-center justify-between py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="Lyris home">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#53247b] shadow-lg shadow-purple-900/20 transition group-hover:rotate-6">
            <Image src="/lyris-logo.svg" alt="" width={30} height={30} priority />
          </span>
          <span className="font-syne text-2xl font-black tracking-[-.04em] text-[#53247b]">Lyris</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-[#53247b]/10 bg-white/75 p-1 text-sm font-bold text-slate-700 shadow-inner md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-5 py-2.5 transition ${active ? 'bg-[#53247b] text-white shadow-lg' : 'hover:bg-[#53247b]/10 hover:text-[#53247b]'}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block"><ContactOptions compact /></div>
        <button onClick={() => setOpen((value) => !value)} className="rounded-full border border-[#53247b]/20 bg-white px-4 py-2 text-sm font-black text-[#53247b] md:hidden" aria-expanded={open} aria-controls="mobile-menu">{open ? 'Close' : 'Menu'}</button>
      </nav>

      {open && (
        <div id="mobile-menu" className="px-4 pb-4 md:hidden">
          <div className="soft-panel flex flex-col gap-2 p-3 text-[#53247b]">
            {navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-2xl px-4 py-3 font-bold hover:bg-[#53247b]/10">{item.label}</Link>)}
            <div className="px-2 py-2"><ContactOptions /></div>
          </div>
        </div>
      )}
    </header>
  );
}
