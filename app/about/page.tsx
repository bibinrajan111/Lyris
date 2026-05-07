export default function AboutPage() {
  return (
    <div className="section-shell space-y-10">
      <section className="soft-panel p-8">
        <h1 className="font-syne text-4xl text-[#5d1451]">About Lyris</h1>
        <p className="mt-4">Lyris is a subsidiary of Aquadev dedicated to future-ready hydration. We combine high-grade water processing with circular packaging systems to make safe drinking water accessible, elegant, and sustainable.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="soft-panel p-8">
          <h2 className="font-syne text-3xl text-[#5d1451]">Bottles for Change</h2>
          <p className="mt-4">Our initiative focuses on a circular economy model where bottles are collected, cleaned, refilled, and redistributed. This closed-loop strategy supports our zero-waste hydration mission and drives behavior change across communities.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">45+</p><p>Municipalities</p></div>
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">44</p><p>Cities</p></div>
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">10.09M+</p><p>Citizens Engaged</p></div>
            <div className="rounded-2xl bg-[#5d1451]/5 p-4"><p className="text-3xl font-bold text-[#5d1451]">28,645+</p><p>Metric Tons Recycled</p></div>
          </div>
        </article>

        <article className="soft-panel overflow-hidden">
          <div className="h-full min-h-[360px] bg-[url('https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
        </article>
      </section>
    </div>
  );
}
