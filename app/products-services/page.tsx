import type { Metadata } from 'next';
import { BrandPreview } from '../components/BrandPreview';

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Detailed bottle sizes, use-cases, and custom rebranding service with live preview.'
};

const products = [
  { size:'300 ml', use:'Compact serving for events and hospitality kits.', img:'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1000&auto=format&fit=crop' },
  { size:'500 ml', use:'Best-selling daily bottle for offices and retail counters.', img:'https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1000&auto=format&fit=crop' },
  { size:'750 ml', use:'Longer hydration format for meetings and classrooms.', img:'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?q=80&w=1000&auto=format&fit=crop' },
  { size:'1 L', use:'High-capacity option for institutions and family consumption.', img:'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1000&auto=format&fit=crop' }
];

export default function ProductsServices() {
  return (
    <div className="section-shell space-y-8">
      <section className="soft-panel reveal p-8"><h1 className="font-syne text-4xl text-[#3d1b5b]">Products & Services</h1><p className="mt-3">Browse our bottle catalog and service stack built for reliability, brand presentation, and sustainable logistics.</p></section>
      <section className="grid gap-6 sm:grid-cols-2">
        {products.map((p)=><article key={p.size} className="soft-panel reveal hover-lift overflow-hidden"><div className="h-52 bg-drift" style={{backgroundImage:`url(${p.img})`}} /><div className="p-6"><h2 className="font-syne text-3xl text-[#3d1b5b]">{p.size}</h2><p className="mt-2">{p.use}</p><ul className="mt-3 list-disc pl-5 text-sm"><li>Leak-safe seal and hygienic handling.</li><li>Batch traceability and quality checks.</li><li>Optional branded label support.</li></ul></div></article>)}
      </section>
      <BrandPreview />
      <section className="soft-panel reveal p-8"><h3 className="font-syne text-3xl text-[#3d1b5b]">Rebranding Services</h3><p className="mt-3">Beyond stickers, we support brand messaging hierarchy, color matching, label print runs, and event/corporate deployment plans so your hydration presentation stays consistent with your identity.</p></section>
    </div>
  );
}
