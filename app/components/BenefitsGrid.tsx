import { benefits } from '../data';
import { FadeIn } from './MotionPrimitives';

export function BenefitsGrid() {
  return (
    <section id="benefits" className="bg-[#f7f4ee] px-6 pb-28 text-slate-950 lg:px-8" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-500">Interactive benefits</p>
            <h2 id="benefits-title" className="mt-5 font-serif text-6xl leading-[0.85] tracking-[-0.09em] sm:text-8xl">Measured elegance.</h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="max-w-2xl text-lg leading-8 text-slate-500">The bento metrics are intentionally separated from fetching logic, making them simple to replace with live quality, inventory, and sustainability figures from your .NET API.</p>
          </FadeIn>
        </div>
        <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {benefits.map((benefit, index) => (
            <FadeIn
              key={benefit.label}
              delay={index * 0.04}
              as="article"
              className={`group rounded-[2.25rem] border border-slate-950/10 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-[0_30px_90px_rgba(14,165,233,.16)] ${index === 0 || index === 5 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex h-full flex-col justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{benefit.label}</p>
                <div>
                  <p className="font-serif text-7xl leading-none tracking-[-0.11em]">{benefit.value}<span className="ml-2 text-base font-sans tracking-normal text-slate-400">{benefit.suffix}</span></p>
                  <p className="mt-4 text-sm leading-6 text-slate-500">{benefit.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
