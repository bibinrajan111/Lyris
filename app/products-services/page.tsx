import type { Metadata } from 'next';
import { CommerceShell } from '../components/CartDrawer';
import { EditorialCTA } from '../components/EditorialCTA';
import { Footer } from '../components/Footer';
import { ProductShowcase } from '../components/ProductShowcase';
import { FadeIn } from '../components/MotionPrimitives';
import { getProducts } from '../data';

export const metadata: Metadata = {
  title: 'Products, Services & Branded Water Programs',
  description: 'Shop Lyris still and sparkling reserve water and discover custom branded glass bottle programs for hospitality, offices, and events.',
  alternates: { canonical: '/products-services' },
};

export default async function ProductsServices() {
  const products = await getProducts();

  return (
    <CommerceShell products={products}>
      <section className="bg-[#f7f4ee] px-6 pb-16 pt-36 text-slate-950 lg:px-8" aria-labelledby="products-title">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-500">Products & services</p>
            <h1 id="products-title" className="mt-6 max-w-5xl font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.8] tracking-[-0.1em]">Reserve water for refined rituals.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-500">Discover glass still bottles, sparkling service, branded event supply, and recurring hospitality programs in one commerce-ready interface.</p>
          </FadeIn>
        </div>
      </section>
      <ProductShowcase products={products} />
      <EditorialCTA />
      <Footer />
    </CommerceShell>
  );
}
