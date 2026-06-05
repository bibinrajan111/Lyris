import type { Product } from '../data';
import { FadeIn } from './MotionPrimitives';

export function ProductShowcase({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  return (
    <section id="products" className="bg-[#fbf8ff] px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="products-title">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Products</p>
          <h2 id="products-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-[#321548] sm:text-6xl">Pure water in practical premium formats.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Choose from bottles and refillable cans designed for daily use, events, hospitality, retail, and recurring business supply.</p>
        </FadeIn>

        <div className={`mt-12 grid gap-6 ${compact ? 'lg:grid-cols-4' : 'md:grid-cols-2'}`}>
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.06} as="article" className="group overflow-hidden rounded-[2rem] border border-[#53247b]/10 bg-white shadow-[0_24px_70px_-45px_rgba(83,36,123,.65)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_95px_-42px_rgba(83,36,123,.95)]">
              <div className="relative min-h-72 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(140deg, rgba(83,36,123,.20), rgba(83,36,123,.05)), url(${product.image})` }}>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" aria-hidden="true" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#53247b] backdrop-blur">{product.size}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black tracking-[-0.045em] text-[#321548]">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.tagline}</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#53247b]">Features</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {product.features.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#53247b]">Usage cases</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {product.usageCases.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
