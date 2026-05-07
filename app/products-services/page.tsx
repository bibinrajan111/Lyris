export default function ProductsServicesPage() {
  const sizes = ['300 ml', '500 ml', '750 ml', '1 L'];

  return (
    <div className="section-shell space-y-10">
      <section className="soft-panel p-8">
        <h1 className="font-syne text-4xl text-[#5d1451]">Products & Services</h1>
        <p className="mt-4">Choose from our bottle range and business-friendly service options built for hospitality, offices, events, and municipal programs.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="soft-panel p-8">
          <h2 className="font-syne text-3xl text-[#5d1451]">Bottle Lineup</h2>
          <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-2">
            {sizes.map((size) => (
              <div key={size} className="min-w-[180px] snap-start rounded-2xl border border-[#5d1451]/20 bg-white p-5 text-center">
                <p className="text-sm uppercase text-slate-500">Size</p>
                <h3 className="mt-2 font-syne text-3xl text-[#5d1451]">{size}</h3>
                <button className="mt-4 rounded-full bg-[#5d1451]/10 px-4 py-2 text-sm font-semibold text-[#5d1451]">Select</button>
              </div>
            ))}
          </div>
        </article>

        <article className="soft-panel p-8">
          <h2 className="font-syne text-3xl text-[#5d1451]">Custom Branding</h2>
          <p className="mt-4">We provide white-label bottle and sticker customization for corporate gifts, catering partners, institutions, and campaign activations.</p>
          <div className="mt-6 flex gap-3">
            <button className="brand-btn">Request Mockup</button>
            <button className="ghost-btn">Download Catalog</button>
          </div>
        </article>
      </section>

      <section className="soft-panel overflow-hidden">
        <div className="h-64 bg-[url('https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      </section>
    </div>
  );
}
