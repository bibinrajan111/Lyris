import { BottleVisual } from './BottleVisual';
import { FadeIn, SplitWords, WaterAura } from './MotionPrimitives';

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dff7ff_0%,#f7f4ee_34%,#07111f_100%)] px-6 pb-20 pt-32 text-white lg:px-8" aria-labelledby="hero-title">
      <WaterAura />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <FadeIn>
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.36em] text-white/70 backdrop-blur">Alpine reserve water</p>
          <h1 id="hero-title" className="mt-8 max-w-5xl font-serif text-[clamp(4rem,11vw,10.5rem)] leading-[0.78] tracking-[-0.1em]">
            <SplitWords text="Purity in its most collected form." />
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">Lyris is a luxury water house crafting still, sparkling, and custom-branded hydration programs with crystalline taste, quiet design, and concierge-grade supply.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#bottle" className="rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-100">Explore the bottle</a>
            <a href="#source" className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">Trace the source</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} className="relative">
          <BottleVisual />
        </FadeIn>
      </div>
    </section>
  );
}
