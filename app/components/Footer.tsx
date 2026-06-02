export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <p className="font-serif text-5xl tracking-[-0.09em]">Lyris</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/55">Ultra-premium still and sparkling water programs for hospitality, offices, events, and refined home rituals.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/40">Programs</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li>Reserve glass bottles</li>
            <li>Custom branded service</li>
            <li>Recurring business delivery</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/40">Contact</h2>
          <address className="mt-5 not-italic text-sm leading-7 text-white/65">
            concierge@lyris.example<br />Premium supply consultations<br />Mon–Sat · 9:00–18:00
          </address>
        </div>
      </div>
    </footer>
  );
}
