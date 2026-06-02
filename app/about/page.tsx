import type { Metadata } from 'next';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { CommerceShell } from '../components/CartDrawer';
import { EditorialCTA } from '../components/EditorialCTA';
import { Footer } from '../components/Footer';
import { SourceHeritage } from '../components/SourceHeritage';
import { FadeIn, SplitWords } from '../components/MotionPrimitives';
import { getProducts } from '../data';

export const metadata: Metadata = {
  title: 'Source, Heritage & Sustainability',
  description: 'Explore Lyris source discipline, mineral heritage, circular glass programs, and premium water quality principles.',
  alternates: { canonical: '/about' },
};

export default async function About() {
  const products = await getProducts();

  return (
    <CommerceShell products={products}>
      <section className="bg-slate-950 px-6 pb-24 pt-36 text-white lg:px-8" aria-labelledby="about-title">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-sky-200/70">About Lyris</p>
            <h1 id="about-title" className="mt-6 font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.8] tracking-[-0.1em]"><SplitWords text="Water, edited down to reverence." /></h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/58">Lyris exists for spaces where every object matters. We pair source integrity, glass-first design, and elegant fulfillment systems to make hydration feel intentional.</p>
          </FadeIn>
        </div>
      </section>
      <SourceHeritage />
      <BenefitsGrid />
      <EditorialCTA />
      <Footer />
    </CommerceShell>
  );
}
