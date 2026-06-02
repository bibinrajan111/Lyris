import { FadeIn } from './MotionPrimitives';

export function EditorialCTA() {
  return (
    <section className="bg-slate-950 px-6 py-28 text-white lg:px-8" aria-labelledby="cta-title">
      <FadeIn className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.03))] p-8 shadow-[0_40px_120px_rgba(0,0,0,.35)] backdrop-blur md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-sky-200/70">Concierge programs</p>
        <h2 id="cta-title" className="mt-5 max-w-4xl font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.85] tracking-[-0.09em]">Create a water experience as considered as your space.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/58">From custom labels to recurring glass replenishment, the new Lyris interface is designed for premium commerce now and direct backend integration next.</p>
          <a href="mailto:concierge@lyris.example" className="rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-100">Book consultation</a>
        </div>
      </FadeIn>
    </section>
  );
}
