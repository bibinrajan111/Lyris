import type { Metadata } from 'next';
import { ContactCTA } from '../components/ContactCTA';
import { SourceHeritage } from '../components/SourceHeritage';
import { FadeIn, SplitWords } from '../components/MotionPrimitives';
import { circularApproach, coreValues } from '../data';

export const metadata: Metadata = {
  title: 'About Us | Sustainability, Mission & Circular Approach',
  description: 'Learn about Lyris, our company story, mission, vision, core values, sustainability commitment, circular economy process, and promise.',
  alternates: { canonical: '/about' },
};

const storyParagraphs = [
  'At Lyris, we believe hydration should never come at the cost of the planet.',
  'Founded with a vision to redefine the bottled water industry, Lyris combines purity, responsibility, and innovation to create products that support both people and the environment. We are more than a water bottle company — we are a movement toward smarter consumption, responsible recycling, and sustainable living.',
  'Every bottle we produce is designed with a larger purpose: reducing waste, encouraging recycling awareness, and contributing to a circular future where plastic is reused, recovered, and responsibly managed.',
  'In a world where convenience often creates environmental challenges, Lyris is committed to building a better balance. Through sustainable packaging initiatives, recycling partnerships, community awareness programs, and environmentally conscious operations, we aim to inspire change one bottle at a time.',
  'Our mission goes beyond delivering clean and refreshing water. We are creating a culture where consumers, communities, businesses, and future generations can all participate in protecting the planet.',
  'At Lyris, sustainability is not a campaign — it is the foundation of everything we do.',
];

const sections = [
  { title: 'Company Story', body: 'Lyris was built to modernize bottled water through purity, responsible packaging, recycling awareness, and reliable supply for real-world customers.' },
  { title: 'Mission', body: 'To deliver clean, refreshing water while helping consumers and businesses participate in smarter consumption and environmental responsibility.' },
  { title: 'Vision', body: 'To become a trusted sustainable hydration brand that encourages a circular future where packaging is reused, recovered, and responsibly managed.' },
  { title: 'Sustainability Commitment', body: 'We support responsible packaging initiatives, recycling partnerships, awareness programs, and environmentally conscious operations.' },
  { title: 'Why Lyris Exists', body: 'Lyris exists to prove that premium hydration can be convenient, beautiful, reliable, and planet-aware at the same time.' },
  { title: 'Our Promise', body: 'We promise quality and purity in every product, transparent communication, dependable service, and a long-term commitment to a cleaner future.' },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fbf8ff] px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="about-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(83,36,123,.14),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,.12),transparent_28%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">About Us</p>
            <h1 id="about-title" className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.07em] text-[#321548] sm:text-7xl"><SplitWords text="Hydration with a cleaner purpose." /></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">At Lyris, sustainability is not a campaign — it is the foundation of everything we do.</p>
          </FadeIn>
          <FadeIn delay={0.12} className="overflow-hidden rounded-[2.5rem] border border-[#53247b]/10 bg-white p-3 shadow-[0_30px_90px_-48px_rgba(83,36,123,.8)]">
            <div className="min-h-[420px] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(145deg, rgba(83,36,123,.18), rgba(83,36,123,.56)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop')" }} />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="story-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Company Story</p>
            <h2 id="story-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-[#321548] sm:text-6xl">A movement toward smarter consumption.</h2>
          </FadeIn>
          <div className="space-y-5 text-lg leading-9 text-slate-600">
            {storyParagraphs.map((paragraph, index) => <FadeIn key={paragraph} delay={index * 0.035}><p>{paragraph}</p></FadeIn>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ff] px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="about-sections-title">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Mission, Vision & Promise</p>
            <h2 id="about-sections-title" className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-[#321548] sm:text-6xl">The principles behind every Lyris bottle.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.05} as="article" className="rounded-[2rem] border border-[#53247b]/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(83,36,123,.8)]">
                <h3 className="text-2xl font-black tracking-[-0.045em] text-[#321548]">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{section.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="values-title">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Core Values</p>
            <h2 id="values-title" className="mt-4 text-4xl font-black tracking-[-0.055em] text-[#321548] sm:text-6xl">What we stand for.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <FadeIn key={value} delay={index * 0.04} className="rounded-full border border-[#53247b]/10 bg-[#fbf8ff] px-6 py-5 text-center font-black text-[#321548] shadow-[0_18px_48px_-42px_rgba(83,36,123,.9)]">
                {value}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SourceHeritage />

      <section className="bg-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8" aria-labelledby="process-title">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#53247b]">Circular Economy Process</p>
            <h2 id="process-title" className="mt-4 text-4xl font-black tracking-[-0.055em] text-[#321548] sm:text-6xl">The Lyris Circular Approach.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {circularApproach.map((item, index) => <FadeIn key={item} delay={index * 0.04} className="rounded-[2rem] bg-[#53247b] p-5 text-white"><span className="text-3xl font-black">{index + 1}</span><p className="mt-4 text-sm font-black">{item}</p></FadeIn>)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
