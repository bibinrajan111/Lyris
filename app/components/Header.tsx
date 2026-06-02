'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '#bottle', label: 'Bottle' },
  { href: '#source', label: 'Source' },
  { href: '#benefits', label: 'Benefits' },
];

export function Header({ onCartOpen }: { onCartOpen?: () => void }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-4 text-white shadow-[0_20px_80px_rgba(2,6,23,.26)] backdrop-blur-2xl sm:px-6" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Lyris home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-slate-950">Ly</span>
          <span className="font-serif text-2xl tracking-[-0.08em]">Lyris</span>
        </Link>
        {isHome && (
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-white/70 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        )}
        <button type="button" onClick={onCartOpen} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
          Cart
        </button>
      </nav>
    </header>
  );
}
