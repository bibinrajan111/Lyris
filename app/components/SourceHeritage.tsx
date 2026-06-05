import { circularApproach } from '../data';
import { FadeIn, SplitWords } from './MotionPrimitives';

export function SourceHeritage() {
  return (
    <section className="overflow-hidden bg-[#f4eff8] px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="circular-title">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">The Lyris Circular Approach</p>
          <h2 id="circular-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-[#321548] sm:text-6xl">
            <SplitWords text="Responsible hydration from bottle to better future." />
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Our approach connects packaging choices, consumer education, recovery habits, and reuse thinking so water can serve people without forgetting the planet.</p>
        </FadeIn>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
          {circularApproach.map((item, index) => (
            <FadeIn key={item} delay={index * 0.06} className="min-w-[260px] rounded-[2rem] border border-[#53247b]/10 bg-white p-7 shadow-[0_24px_70px_-45px_rgba(83,36,123,.8)] sm:min-w-[320px]">
              <p className="text-6xl font-black tracking-[-0.08em] text-[#53247b]/15">0{index + 1}</p>
              <h3 className="mt-12 text-2xl font-black tracking-[-0.045em] text-[#321548]">{item}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
