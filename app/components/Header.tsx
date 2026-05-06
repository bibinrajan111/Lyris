'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="sticky top-3 z-50 px-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-4 text-sm">
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: [0.9, 1.05, 1] }} transition={{ duration: 1.2 }} className="font-syne text-xl text-mint">
          Lyris
        </motion.div>
        <div className="hidden gap-10 md:flex tracking-[0.2em] uppercase">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
        </div>
        <button aria-label="menu" className="md:hidden">☰</button>
      </nav>
    </header>
  );
}
