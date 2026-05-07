import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Explore Lyris bottle sizes, specifications, and custom branding services with detailed use-cases.'
};

const products = [
  { size: '300 ml', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=900&auto=format&fit=crop', details: 'Compact serving bottle ideal for conferences, events, and premium hospitality welcome kits.' },
  { size: '500 ml', img: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=900&auto=format&fit=crop', details: 'Most popular everyday format for offices, retail shelves, transit hubs, and quick-service counters.' },
  { size: '750 ml', img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d4?q=80&w=900&auto=format&fit=crop', details: 'Balanced family-size option for meetings, classrooms, and sports recovery with fewer replacements.' },
  { size: '1 L', img: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=900&auto=format&fit=crop', details: 'High-capacity hydration bottle for hotels, institutions, and community distribution programs.' }
];

export default function ProductsServicesPage() {
  return (
    <div className="section-shell space-y-10">
      <section className="soft-panel p-8">
        <h1 className="font-syne text-4xl text-[#3e0d36]">Products & Services</h1>
        <p className="mt-4 max-w-4xl">Our product architecture is designed for practical usage, visual quality, and supply efficiency. Every format is produced with strict hygiene standards and traceable batch controls, then supported by optional branding systems that align with your campaign, event, or institutional identity.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {products.map((p) => (
          <article key={p.size} className="soft-panel overflow-hidden transition hover:-translate-y-1">
            <div className="h-64 bg-auto-scroll" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="p-6">
              <h2 className="font-syne text-3xl text-[#4a0f40]">{p.size}</h2>
              <p className="mt-3">{p.details}</p>
              <ul className="mt-4 list-disc pl-5 text-sm"><li>Food-safe bottle-grade material.</li><li>Quality-tested sealing and leakage control.</li><li>Compatible with custom label/sticker systems.</li></ul>
              <button className="mt-5 brand-btn">Enquire This Product</button>
            </div>
          </article>
        ))}
      </section>

      <section className="soft-panel p-8">
        <h3 className="font-syne text-3xl text-[#4a0f40]">Custom Branding Service</h3>
        <p className="mt-4">Lyris provides end-to-end custom branding for labels, wrappers, carton language, and campaign messaging. This is ideal for corporate events, conferences, wedding catering, institutional supply, and regional activations.</p>
        <div className="mt-6 flex gap-3"><button className="brand-btn">Request Sample</button><button className="ghost-btn">Download Specification Sheet</button></div>
      </section>
    </div>
  );
}
