'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#53247b]/15 bg-white/90 backdrop-blur-lg">
      <nav className="section-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3"><Image src="/lyris-logo.svg" alt="Lyris" width={36} height={36}/><span className="font-syne text-2xl text-[#53247b]">Lyris</span></Link>
        <button onClick={()=>setOpen(!open)} className="md:hidden rounded-full border border-[#53247b]/30 px-4 py-2 text-[#53247b]">Menu</button>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/products-services">Products & Services</Link>
          <a href="tel:+919000000000" className="rounded-full brand-grad px-5 py-2 text-white">Get in Touch</a>
        </div>
      </nav>
      {open && <div className="px-4 pb-4 md:hidden"><div className="soft-panel p-4 flex flex-col gap-3 text-[#53247b]"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/products-services">Products & Services</Link><a href="tel:+919000000000" className="rounded-full brand-grad px-5 py-2 text-center text-white">Get in Touch</a></div></div>}
    </header>
  );
}
