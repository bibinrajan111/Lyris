import { ContactButton } from './ContactButton';
import { FadeIn } from './MotionPrimitives';

export function ContactCTA() {
  return (
    <section className="bg-[#53247b] px-4 py-20 text-white sm:px-6 lg:px-8" aria-labelledby="contact-title">
      <FadeIn className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2.5rem] border border-white/15 bg-white/10 p-8 shadow-[0_30px_100px_rgba(20,8,31,.26)] backdrop-blur md:grid-cols-[1fr_auto] md:p-12">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.34em] text-white/65">Talk to Lyris</p>
          <h2 id="contact-title" className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">Ready to serve pure water with style and responsibility?</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Contact us for bottled water supply, refillable cans, custom branded bottles, bulk orders, or catering and hospitality support.</p>
        </div>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
