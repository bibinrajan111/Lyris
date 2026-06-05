import { homeMetrics } from '../data';
import { FadeIn } from './MotionPrimitives';

export function BenefitsGrid() {
  return (
    <section className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Why choose Lyris</p>
            <h2 id="why-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-[#321548] sm:text-6xl">Premium quality with a circular mindset.</h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">Lyris combines clean water, refined packaging, branding support, dependable distribution, and sustainability awareness into one modern hydration partner.</p>
          </FadeIn>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {homeMetrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.06} as="article" className="group rounded-[2rem] border border-[#53247b]/10 bg-[#fbf8ff] p-7 shadow-[0_22px_65px_-45px_rgba(83,36,123,.8)] transition hover:-translate-y-1 hover:bg-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#53247b]/65">{metric.label}</p>
              <p className="mt-8 text-6xl font-black leading-none tracking-[-0.08em] text-[#321548]">{metric.value}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{metric.detail}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
