import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lyris mission, values, circular economy impact, and sustainability programs.'
};

export default function AboutPage() {
  return (
    <div className="section-shell space-y-10">
      <section className="soft-panel p-8">
        <h1 className="font-syne text-4xl text-[#3e0d36]">About Lyris: Bottles for Change</h1>
        <p className="mt-4">Lyris, a subsidiary of Aquadev, was created to transform hydration from a one-time transaction into a long-term public good. We focus on purity, access, and responsible material cycles. Our teams work with city administrations, educational institutions, and private enterprises to design hydration systems that reduce waste while improving convenience and reliability.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="soft-panel p-8">
          <h2 className="font-syne text-3xl text-[#3e0d36]">Our Values</h2>
          <ul className="mt-4 space-y-3"><li><strong>Integrity:</strong> transparent quality checks and delivery protocols.</li><li><strong>Innovation:</strong> data-led supply planning and packaging optimization.</li><li><strong>Environmental Stewardship:</strong> circular models to reduce virgin-plastic dependence.</li></ul>
          <h3 className="mt-8 font-syne text-2xl text-[#4a0f40]">Impact Metrics</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">45+</p><p>Municipalities</p></div>
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">44</p><p>Cities</p></div>
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">10.09M+</p><p>Citizens Engaged</p></div>
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">28,645+</p><p>Metric Tons Recycled</p></div>
          </div>
        </article>
        <article className="soft-panel p-0 overflow-hidden"><div className="h-full min-h-[480px] bg-auto-scroll" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop')" }} /></article>
      </section>
    </div>
  );
}
