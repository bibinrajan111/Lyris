'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#5d1451]/10 bg-white/90 backdrop-blur">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="font-syne text-2xl text-[#5d1451]">Lyris</Link>
        <button className="md:hidden text-[#5d1451]" onClick={() => setOpen(!open)} aria-label="Open menu">☰</button>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-[#5d1451]">Home</Link>
          <Link href="/about" className="hover:text-[#5d1451]">About Us</Link>
          <Link href="/products-services" className="hover:text-[#5d1451]">Products & Services</Link>
        </div>
      </nav>
      {open && (
        <div className="border-t border-[#5d1451]/10 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3 text-[#5d1451]">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/products-services" onClick={() => setOpen(false)}>Products & Services</Link>
          </div>
        </div>
      )}
    </header>
  );
}
