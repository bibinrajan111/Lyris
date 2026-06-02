import type { Metadata } from 'next';
import { BenefitsGrid } from './components/BenefitsGrid';
import { CommerceShell } from './components/CartDrawer';
import { EditorialCTA } from './components/EditorialCTA';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ProductShowcase } from './components/ProductShowcase';
import { SourceHeritage } from './components/SourceHeritage';
import { getProducts } from './data';

export const metadata: Metadata = {
  title: 'Luxury Still & Sparkling Water, Glass Bottles, and Concierge Supply',
  description: 'Lyris is an ultra-premium water house offering still and sparkling reserve bottles, source-led storytelling, ecological metrics, and clean checkout experiences.',
  alternates: { canonical: '/' },
};

export default async function Home() {
  const products = await getProducts();

  return (
    <CommerceShell products={products}>
      <HeroSection />
      <ProductShowcase products={products} />
      <SourceHeritage />
      <BenefitsGrid />
      <EditorialCTA />
      <Footer />
    </CommerceShell>
  );
}
