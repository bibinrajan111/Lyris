import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Premium water processing and modern bottle programs by Lyris.'
};

const posters = [
  { title: 'Hydration for Smart Workspaces', body: 'Weekly and daily bottle routes with quality logs, cleaner inventory control, and elegant branded packaging.', btn: 'Plan Office Program' },
  { title: 'Event-Ready Water at Scale', body: 'Reliable, hygienic supply for conferences, weddings, stadiums, and high-footfall gatherings.', btn: 'Book Event Supply' },
  { title: 'Circular Bottle Initiatives', body: 'Collection, cleaning, and refill loops built to cut plastic waste and improve sustainability reporting.', btn: 'Start Circular Model' }
];

export default function Home() {
  return (
    <>
      <section className="brand-grad text-white">
        <div className="section-shell reveal py-20">
          <h1 className="font-syne text-4xl leading-tight sm:text-5xl lg:text-6xl">Fluid Hydration Infrastructure For Modern India.</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/90">Lyris helps organizations provide safe and dependable drinking water through processing excellence, premium bottle design, and adaptable delivery programs.</p>
          <a href="tel:+919000000000" className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-[#53247b]">Get in Touch</a>
        </div>
      </section>

      <section className="section-shell">
        <div className="poster-wrap overflow-hidden rounded-3xl border border-[#53247b]/10 bg-white p-4 reveal">
          <div className="poster-rail">
            {[...posters, ...posters].map((p, i) => (
              <article key={i} className="hover-lift soft-panel w-[320px] sm:w-[380px] p-6">
                <h2 className="font-syne text-2xl text-[#3d1b5b]">{p.title}</h2>
                <p className="mt-3">{p.body}</p>
                <button className="mt-5 rounded-full bg-[#53247b]/10 px-4 py-2 font-semibold text-[#53247b]">{p.btn}</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-6 md:grid-cols-3">
        {['Purification Reliability', 'Elegant Packaging', 'Sustainability-First Operations'].map((t) => (
          <article key={t} className="soft-panel reveal hover-lift p-6"><h3 className="font-syne text-2xl text-[#3d1b5b]">{t}</h3><p className="mt-3">From sourcing to distribution, each stage is monitored for safety, freshness, consistency, and customer trust.</p></article>
        ))}
      </section>
    </>
  );
}
