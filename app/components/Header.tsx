'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#5d1451]/10 bg-white/95 backdrop-blur">
      <nav className="section-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/lyris-logo.svg" alt="Lyris logo" width={34} height={34} />
          <span className="font-syne text-2xl text-[#5d1451]">Lyris</span>
        </Link>
        <button className="rounded-full border border-[#5d1451]/25 px-3 py-2 text-[#5d1451] md:hidden" onClick={() => setOpen(!open)} aria-label="menu">Menu</button>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-medium hover:text-[#5d1451]">Home</Link>
          <Link href="/about" className="font-medium hover:text-[#5d1451]">About Us</Link>
          <Link href="/products-services" className="font-medium hover:text-[#5d1451]">Products & Services</Link>
          <a href="tel:+919000000000" className="brand-btn">Get in Touch</a>
        </div>
      </nav>
      {open && <div className="float-in px-4 pb-4 md:hidden"><div className="soft-panel p-4 text-[#5d1451] flex flex-col gap-3"><Link onClick={()=>setOpen(false)} href="/">Home</Link><Link onClick={()=>setOpen(false)} href="/about">About Us</Link><Link onClick={()=>setOpen(false)} href="/products-services">Products & Services</Link><a href="tel:+919000000000" className="brand-btn">Get in Touch</a></div></div>}
    </header>
  );
}
