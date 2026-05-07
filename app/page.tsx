import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="section-shell relative grid min-h-[72vh] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-[#5d1451]/10 px-4 py-1 text-sm font-semibold text-[#5d1451]">Lyris · Aquadev</p>
            <h1 className="font-syne text-4xl leading-tight text-[#5d1451] sm:text-5xl lg:text-6xl">Clean Water. Smart Bottles. Better Planet.</h1>
            <p className="mt-6 max-w-xl text-lg">Lyris delivers modern hydration solutions for homes, corporates, and public ecosystems through safe water processing, reusable bottles, and sustainable distribution.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="brand-btn" href="tel:+919000000000">Get in Touch (Call)</a>
              <a className="ghost-btn" href="https://wa.me/919000000000" target="_blank">Get in Touch (WhatsApp)</a>
              <Link className="ghost-btn" href="/products-services">Explore Products</Link>
            </div>
          </div>
          <div className="soft-panel p-6">
            <h2 className="font-syne text-2xl text-[#5d1451]">Why Lyris</h2>
            <ul className="mt-4 space-y-3">
              <li>• Advanced water purification with quality compliance.</li>
              <li>• Multi-size bottle lineup for every consumer segment.</li>
              <li>• Custom rebranding options for catering and corporate events.</li>
              <li>• Circular economy approach to reduce single-use plastic waste.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-3">
          {['Purity First', 'Reliable Delivery', 'Sustainable Packaging'].map((item) => (
            <article key={item} className="soft-panel p-6">
              <h3 className="font-syne text-2xl text-[#5d1451]">{item}</h3>
              <p className="mt-3">Designed for modern organizations looking for trusted hydration with premium presentation and measurable environmental impact.</p>
              <button className="mt-5 rounded-lg border border-[#5d1451]/20 px-4 py-2 text-[#5d1451]">Learn More</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
