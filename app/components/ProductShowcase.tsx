import type { Product } from '../data';
import { AddToCartButton } from './CartDrawer';
import { BottleVisual } from './BottleVisual';
import { FadeIn } from './MotionPrimitives';

export function ProductShowcase({ products }: { products: Product[] }) {
  const heroProduct = products[0];

  return (
    <section id="bottle" className="bg-slate-950 px-6 py-28 text-white lg:px-8" aria-labelledby="bottle-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <FadeIn className="lg:sticky lg:top-28">
          <BottleVisual compact />
        </FadeIn>
        <div>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-sky-200/70">The bottle</p>
            <h2 id="bottle-title" className="mt-5 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.86] tracking-[-0.09em]">A sculptural object for the table.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Every detail is tuned for restraint: glass clarity, quiet labeling, natural pH, balanced minerality, and a shape that belongs in suites, spas, galleries, and fine dining rooms.</p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {['142 mg/L minerals', '7.8 natural pH', '100% glass format'].map((item, index) => (
              <FadeIn key={item} delay={index * 0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="mt-2 text-xs leading-5 text-white/45">Verified production-ready stat block for API hydration.</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">{product.volume}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-white/55">{product.subtitle}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <AddToCartButton product={product} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition group-hover:bg-sky-100" />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-white/45">{heroProduct.description}</p>
        </div>
      </div>
    </section>
  );
}
