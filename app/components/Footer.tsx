import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#170822] text-white">
      <div className="absolute inset-0 brand-aurora opacity-70" />
      <div className="section-shell relative grid gap-10 py-16 lg:grid-cols-[1.3fr_.7fr_.7fr_.8fr]">
        <div>
          <div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Image src="/lyris-logo.svg" alt="" width={30} height={30} /></span><h3 className="font-syne text-4xl font-black">Lyris</h3></div>
          <p className="mt-5 max-w-xl text-white/80">Premium processed drinking water, refillable hydration systems, and custom branded bottle programs created with purity, presentation, and circular responsibility.</p>
          <p className="mt-5 rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-white/75">Sustainability statement: every Lyris experience is designed to encourage responsible use, recovery, recycling, and a second life for packaging.</p>
        </div>
        <div>
          <p className="font-syne text-xl font-bold">Navigate</p>
          <div className="mt-4 grid gap-3 text-white/75"><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/products-services">Products & Services</Link></div>
        </div>
        <div>
          <p className="font-syne text-xl font-bold">Contact</p>
          <div className="mt-4 grid gap-3 text-white/75"><a href="tel:+919000000000">+91 90000 00000</a><a href="https://wa.me/919000000000" target="_blank" rel="noreferrer">WhatsApp Chat</a><span>aquadev.in</span></div>
        </div>
        <div>
          <p className="font-syne text-xl font-bold">Social</p>
          <div className="mt-4 flex gap-3"><a className="social-dot" href="#" aria-label="Instagram">◎</a><a className="social-dot" href="#" aria-label="LinkedIn">in</a><a className="social-dot" href="#" aria-label="Facebook">f</a></div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} Lyris. All rights reserved.</div>
    </footer>
  );
}
