import type { Metadata } from 'next';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactOptions } from '../components/ContactOptions';

export const metadata: Metadata = {
  title: 'About Us | Sustainable Hydration Mission & Circular Approach',
  description: 'Learn about Lyris, a sustainable hydration brand focused on pure bottled water, responsible packaging, recycling awareness, refillable solutions, and circular economy practices.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Lyris | Sustainable Bottled Water & Circular Hydration',
    description: 'Explore the Lyris mission, vision, values, sustainability commitment, and circular approach to responsible bottled water.',
    url: '/about',
  },
};

const values = [
  ['Sustainability First', 'Responsible sourcing, recyclable packaging, waste recovery initiatives, and eco-conscious business practices.'],
  ['Responsibility', 'We take ownership of our environmental footprint and continuously work to protect natural resources.'],
  ['Innovation', 'Modern solutions for smarter recycling systems, sustainable packaging alternatives, and efficient resource management.'],
  ['Community Impact', 'Awareness programs, recycling initiatives, and partnerships that encourage environmental responsibility.'],
  ['Quality & Purity', 'Clean, safe, refreshing drinking water with high quality standards at the core of operations.'],
  ['Transparency', 'Honest communication, ethical practices, and long-term trust with customers, partners, and communities.'],
];

const circular = ['Responsible Packaging', 'Consumer Awareness', 'Collection & Recovery', 'Recycling & Reuse', 'Building a Cleaner Future'];
const initiatives = ['Promoting responsible PET bottle disposal', 'Supporting recycling and collection systems', 'Encouraging bottle segregation awareness', 'Collaborating with recyclers and environmental organizations', 'Reducing unnecessary plastic waste', 'Investing in circular economy practices', 'Educating communities about sustainable habits'];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#170822] text-white">
        <div className="absolute inset-0 brand-aurora" />
        <div className="absolute inset-0 water-grid" />
        <div className="section-shell relative grid min-h-[72vh] items-center gap-12 py-24 lg:grid-cols-[1.08fr_.92fr]">
          <AnimatedSection>
            <p className="text-sm font-black uppercase tracking-[.28em] text-cyan-100">About Lyris</p>
            <h1 className="mt-5 font-syne text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-7xl">Hydration should never come at the cost of the planet.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">Founded to redefine bottled water, Lyris combines purity, responsibility, and innovation to support both people and the environment.</p>
          </AnimatedSection>
          <AnimatedSection className="glass-card p-5">
            <div className="min-h-[430px] rounded-[2rem] bg-drift product-image" style={{ backgroundImage: "linear-gradient(135deg, rgba(83,36,123,.12), rgba(83,36,123,.7)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop')" }} />
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="soft-panel p-8 sm:p-12 lg:p-14">
          <p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Company story</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[.75fr_1.25fr]"><h2 className="font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">A movement toward smarter consumption and sustainable living.</h2><div className="space-y-5 text-lg leading-8"><p>We are more than a water bottle company. Every bottle we produce is designed with a larger purpose: reducing waste, encouraging recycling awareness, and contributing to a circular future where plastic is reused, recovered, and responsibly managed.</p><p>Through sustainable packaging initiatives, recycling partnerships, community awareness programs, and environmentally conscious operations, we aim to inspire change one bottle at a time.</p><p>At Lyris, sustainability is not a campaign — it is the foundation of everything we do.</p></div></div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-6 lg:grid-cols-2">
        <article className="soft-panel hover-lift p-8 sm:p-10"><p className="text-sm font-black uppercase tracking-[.24em] text-[#53247b]">Our mission</p><h2 className="mt-4 font-syne text-4xl font-black text-[#321548]">Safe water with long-term positive impact.</h2><p className="mt-5 text-lg leading-8">To provide safe, high-quality drinking water while building a sustainable ecosystem that promotes responsible plastic use, effective recycling, environmental awareness, and long-term positive impact on communities and the planet.</p><p className="mt-4 leading-7">We aim to transform the way people think about bottled water by ensuring every product contributes to a cleaner and more responsible future.</p></article>
        <article className="soft-panel hover-lift p-8 sm:p-10"><p className="text-sm font-black uppercase tracking-[.24em] text-[#53247b]">Our vision</p><h2 className="mt-4 font-syne text-4xl font-black text-[#321548]">A circular future where every bottle is reborn.</h2><p className="mt-5 text-lg leading-8">To become a globally trusted sustainable hydration brand that leads the transition toward a circular economy where every bottle is collected, recycled, and reborn into new possibilities.</p><p className="mt-4 leading-7">We envision a future where waste is minimized, recycling becomes a daily habit, and businesses actively contribute to environmental restoration.</p></article>
      </AnimatedSection>

      <section className="relative overflow-hidden bg-[#f4eeff]">
        <div className="blob -right-24 top-12 h-96 w-96 bg-cyan-200/50" />
        <div className="section-shell relative">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Our values</p><h2 className="mt-3 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">Principles behind every drop.</h2></AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{values.map(([title, body], index) => <AnimatedSection key={title} as="article" delay={index * 80} className="soft-panel hover-lift p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#53247b]/10 text-[#53247b]">✺</span><h3 className="mt-5 font-syne text-2xl font-bold text-[#321548]">{title}</h3><p className="mt-3 leading-7">{body}</p></AnimatedSection>)}</div>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Sustainability commitment</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548] sm:text-5xl">We choose to become part of the solution.</h2><p className="mt-5 text-lg leading-8">Plastic waste is one of the world’s biggest environmental challenges. We believe plastic should never pollute nature when it can be reused, recycled, and transformed into something valuable again.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{initiatives.map((item) => <div key={item} className="soft-panel p-5"><p className="font-semibold text-[#321548]">{item}</p></div>)}</div>
        </div>
      </AnimatedSection>

      <section className="relative overflow-hidden brand-grad text-white">
        <div className="absolute inset-0 water-grid" />
        <div className="section-shell relative">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[.28em] text-cyan-100">The Lyris circular approach</p><h2 className="mt-3 font-syne text-4xl font-black tracking-[-.04em] sm:text-6xl">Reducing waste and maximizing reuse.</h2></AnimatedSection>
          <div className="relative mx-auto max-w-5xl"><div className="absolute left-6 top-0 hidden h-full w-1 rounded-full timeline-line md:block" />{circular.map((step, index) => <AnimatedSection key={step} className="relative mb-5 md:pl-20" delay={index * 100}><div className="glass-card p-6"><span className="mb-3 inline-grid h-12 w-12 place-items-center rounded-full bg-white font-black text-[#53247b]">{index + 1}</span><h3 className="font-syne text-2xl font-bold">{step}</h3><p className="mt-2 text-white/75">{index === 0 ? 'We design bottles using recyclable materials that can re-enter the recycling ecosystem.' : index === 1 ? 'We educate consumers about proper disposal and segregation practices.' : index === 2 ? 'We support initiatives that improve collection systems and recycling accessibility.' : index === 3 ? 'Used PET bottles are processed and transformed into reusable materials for future applications.' : 'By encouraging circular practices, we help reduce landfill waste and environmental pollution.'}</p></div></AnimatedSection>)}</div>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="soft-panel p-8 sm:p-10"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Why Lyris exists</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548]">The world does not need more waste.</h2><p className="mt-5 text-lg leading-8">It needs better systems, better habits, and more responsible brands. Lyris proves that bottled water can deliver convenience while actively supporting environmental responsibility.</p><ul className="mt-6 space-y-3 font-semibold text-[#321548]"><li>• Hydrate responsibly</li><li>• Recycle consciously</li><li>• Protect the environment for future generations</li></ul></div>
          <div className="soft-panel p-8 sm:p-10"><p className="text-sm font-black uppercase tracking-[.28em] text-[#53247b]">Our promise</p><h2 className="mt-4 font-syne text-4xl font-black tracking-[-.04em] text-[#321548]">Every choice can create meaningful change.</h2><p className="mt-5 text-lg leading-8">When you choose Lyris, you choose clean and reliable hydration, responsible packaging, sustainability-driven innovation, environmental awareness, and a brand committed to positive impact.</p><div className="mt-8"><ContactOptions /></div></div>
        </div>
      </AnimatedSection>
    </>
  );
}
