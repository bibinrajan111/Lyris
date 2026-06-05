import type { Service } from '../data';
import { FadeIn } from './MotionPrimitives';

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section id="services" className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Services</p>
          <h2 id="services-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-[#321548] sm:text-6xl">Flexible supply and branding services for modern organizations.</h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05} as="article" className="rounded-[2rem] border border-[#53247b]/10 bg-[#fbf8ff] p-7 shadow-[0_22px_60px_-44px_rgba(83,36,123,.7)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_80px_-42px_rgba(83,36,123,.9)]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#53247b]/10 text-lg font-black text-[#53247b]">{index + 1}</span>
              <h3 className="mt-7 text-2xl font-black tracking-[-0.045em] text-[#321548]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
