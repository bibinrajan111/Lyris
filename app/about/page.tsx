import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Our mission, values, and strategy for long-term hydration impact.'
};

export default function About() {
  return (
    <div className="section-shell space-y-8">
      <section className="soft-panel reveal p-8">
        <h1 className="font-syne text-4xl text-[#3d1b5b]">A New Standard for Everyday Hydration</h1>
        <p className="mt-4">Lyris was founded with one idea: safe water should be effortless, beautiful to serve, and responsible to produce. We are not just a bottle supplier—we are a hydration systems partner. Our teams design delivery networks, quality processes, and branded experiences that help organizations serve people better while reducing waste.</p>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="soft-panel reveal p-8">
          <h2 className="font-syne text-3xl text-[#3d1b5b]">What We Believe</h2>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li><b>Clarity in Quality:</b> Every batch should be traceable, tested, and transparent.</li>
            <li><b>Design with Purpose:</b> Utility and aesthetics can work together in daily hydration.</li>
            <li><b>Circular Responsibility:</b> The bottle lifecycle must reduce waste and resource pressure.</li>
            <li><b>Human-Centered Service:</b> Fast response, flexible planning, and long-term partnerships.</li>
          </ul>
        </article>
        <article className="soft-panel reveal overflow-hidden"><div className="h-full min-h-[420px] bg-drift" style={{backgroundImage:"linear-gradient(140deg, rgba(83,36,123,.65), rgba(177,139,223,.45)), url('https://images.unsplash.com/photo-1564419320627-8a6e5a5cf3f9?q=80&w=1600&auto=format&fit=crop')"}} /></article>
      </section>
      <section className="soft-panel reveal p-8">
        <h3 className="font-syne text-3xl text-[#3d1b5b]">Impact Direction (2026–2030)</h3>
        <p className="mt-3">We are scaling city-level refill programs, improving return rates through partner incentives, and investing in operational intelligence that predicts demand and minimizes transportation waste. Our goal is to help institutions move from disposable supply habits to measurable circular hydration systems.</p>
      </section>
    </div>
  );
}
