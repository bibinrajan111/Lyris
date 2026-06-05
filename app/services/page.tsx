import type { Metadata } from 'next';
import { BrandingSection } from '../components/BrandingSection';
import { ContactCTA } from '../components/ContactCTA';
import { ProductShowcase } from '../components/ProductShowcase';
import { ServicesGrid } from '../components/ServicesGrid';
import { FadeIn } from '../components/MotionPrimitives';
import { getProducts, getServices } from '../data';

export const metadata: Metadata = {
  title: 'Services | Products, Custom Branding & Water Supply',
  description: 'Explore Lyris products and services including small, medium, and large bottles, refillable cans, custom branding, logo printing, bulk orders, and catering water supply.',
  alternates: { canonical: '/services' },
};

export default async function Services() {
  const [products, services] = await Promise.all([getProducts(), getServices()]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#fbf8ff] px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="services-page-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(83,36,123,.15),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,.14),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <FadeIn className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Services</p>
            <h1 id="services-page-title" className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.07em] text-[#321548] sm:text-7xl">Premium water products and brand-ready services.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Lyris supports daily hydration, events, hospitality, institutions, and branded experiences with dependable products and polished service lines.</p>
          </FadeIn>
        </div>
      </section>
      <ProductShowcase products={products} />
      <ServicesGrid services={services} />
      <BrandingSection />
      <ContactCTA />
    </>
  );
}
