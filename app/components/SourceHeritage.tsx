import { sourceMilestones } from '../data';
import { FadeIn, SplitWords } from './MotionPrimitives';

export function SourceHeritage() {
  return (
    <section id="source" className="overflow-hidden bg-[#f7f4ee] px-6 py-28 text-slate-950 lg:px-8" aria-labelledby="source-title">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-500">The source & heritage</p>
          <h2 id="source-title" className="mt-5 font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[0.84] tracking-[-0.09em]">
            <SplitWords text="Filtered by stone, protected by discipline." />
          </h2>
        </FadeIn>
        <div className="mt-16 flex gap-5 overflow-x-auto pb-8 [scrollbar-width:none]">
          {sourceMilestones.map((milestone, index) => (
            <FadeIn key={milestone.step} delay={index * 0.08} className="min-w-[78vw] rounded-[2.5rem] border border-slate-950/10 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,.07)] sm:min-w-[420px]">
              <p className="font-serif text-7xl tracking-[-0.1em] text-slate-950/15">{milestone.step}</p>
              <h3 className="mt-16 text-3xl font-semibold tracking-[-0.06em]">{milestone.title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-500">{milestone.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
