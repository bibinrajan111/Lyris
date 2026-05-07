import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Lyris delivers premium and sustainable hydration services with modern bottle programs and responsible packaging.'
};

const posters = [
  { title: 'Smart Hydration for Offices', text: 'Set up branded bottle programs with scheduled delivery, usage analytics, and quality assurance reports.', cta: 'Plan for Enterprise' },
  { title: 'Reliable Water for Events', text: 'Catering-grade water supply with hygienic bottle handling and rapid replenishment for high-footfall venues.', cta: 'Book Event Support' },
  { title: 'Community Refill Programs', text: 'Municipality and campus-ready circular hydration systems that reduce single-use plastic leakage.', cta: 'Launch a Program' },
  { title: 'Custom Branded Packaging', text: 'Private-label bottles and sticker systems for hospitality, institutions, and campaigns.', cta: 'Request Brand Kit' }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#5d1451]/10 bg-gradient-to-br from-white via-[#fdf7fc] to-[#f4ebf3]">
        <div className="section-shell relative py-20">
          <h1 className="font-syne text-4xl leading-tight text-[#3e0d36] sm:text-5xl lg:text-6xl">The Modern Water Processing Partner for a Healthier, Lower-Waste Future.</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">Lyris combines compliant water treatment, dependable logistics, and beautiful bottle presentation to serve homes, campuses, corporations, and public systems with confidence and care.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="tel:+919000000000" className="brand-btn">Get in Touch</a><a href="/products-services" className="ghost-btn">See Product Portfolio</a></div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-[#5d1451]/10 bg-white p-4">
            <div className="poster-track">
              {[...posters, ...posters].map((poster, i) => (
                <article key={`${poster.title}-${i}`} className="soft-panel min-h-[240px] w-[300px] sm:w-[360px] p-6">
                  <h2 className="font-syne text-2xl text-[#4a0f40]">{poster.title}</h2>
                  <p className="mt-3">{poster.text}</p>
                  <button className="mt-6 rounded-full bg-[#5d1451]/10 px-4 py-2 font-semibold text-[#5d1451]">{poster.cta}</button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-6 md:grid-cols-3">
        {['Purity & Compliance', 'Flexible Supply Models', 'Circular Packaging'].map((v) => (
          <article key={v} className="soft-panel float-in p-6">
            <h3 className="font-syne text-2xl text-[#4a0f40]">{v}</h3>
            <p className="mt-3">Our teams monitor each phase from sourcing and filtration to bottling and dispatch, ensuring consistent taste, safety, and sustainability performance.</p>
          </article>
        ))}
      </section>
    </>
  );
}
