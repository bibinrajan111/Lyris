import { ContactButton } from './ContactButton';
import { FadeIn } from './MotionPrimitives';

export function BrandingSection() {
  return (
    <section className="relative overflow-hidden bg-[#321548] px-4 py-20 text-white sm:px-6 lg:px-8" aria-labelledby="branding-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(125,211,252,.18),transparent_28%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_.85fr]">
        <FadeIn>
          <p className="text-xs font-black uppercase tracking-[0.34em] text-white/65">Custom Branding & Rebranding Services</p>
          <h2 id="branding-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl">Turn every bottle into a polished brand moment.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Add logos, personalized labels, event artwork, and campaign messaging to premium Lyris bottles for corporate hospitality, weddings, launches, conferences, resorts, and catering teams.</p>
          <div className="mt-8"><ContactButton /></div>
        </FadeIn>
        <FadeIn delay={0.12} className="rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
          <div className="rounded-[2rem] bg-white p-7 text-[#321548]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#53247b]">Label preview</p>
            <div className="mt-8 rounded-[1.75rem] border border-[#53247b]/10 bg-[#fbf8ff] p-8 text-center shadow-inner">
              <p className="text-5xl font-black tracking-[-0.08em]">YOUR BRAND</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.34em] text-[#53247b]/70">Powered by Lyris</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold">
              <div className="rounded-2xl bg-[#53247b]/10 p-4">Logo Printing</div>
              <div className="rounded-2xl bg-[#53247b]/10 p-4">Event Labels</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
