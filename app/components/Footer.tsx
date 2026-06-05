import Link from 'next/link';
import { contact } from '../data';

export function Footer() {
  return (
    <footer className="border-t border-[#53247b]/10 bg-[#160b22] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <p className="text-5xl font-black tracking-[-0.08em]">Lyris</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">Premium bottled water, refillable cans, custom branding, and responsible hydration supply for businesses, events, hospitality, and communities.</p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.32em] text-white/42">Pages</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/68">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.32em] text-white/42">Contact</h2>
          <address className="mt-5 not-italic text-sm leading-7 text-white/68">
            <a href={contact.phoneHref} className="hover:text-white">{contact.phoneDisplay}</a><br />
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a><br />
            Premium supply consultations
          </address>
        </div>
      </div>
    </footer>
  );
}
