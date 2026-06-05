import type { Metadata } from 'next';
import { BenefitsGrid } from './components/BenefitsGrid';
import { BrandingSection } from './components/BrandingSection';
import { ContactCTA } from './components/ContactCTA';
import { HeroCarousel } from './components/HeroCarousel';
import { ProductShowcase } from './components/ProductShowcase';
import { SourceHeritage } from './components/SourceHeritage';
import { getProducts } from './data';

export const metadata: Metadata = {
  title: 'Home | Premium Bottled Water, Refillable Cans & Custom Branding',
  description: 'Discover Lyris premium bottled water, refillable water cans, sustainable hydration, and custom branded water bottle services.',
  alternates: { canonical: '/' },
};

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <HeroCarousel />
      <BenefitsGrid />
      <ProductShowcase products={products} compact />
      <SourceHeritage />
      <BrandingSection />
      <ContactCTA />
    </>
  );
}
