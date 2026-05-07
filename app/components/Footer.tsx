export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-r from-[#4a0f40] via-[#5d1451] to-[#8b2f7b] text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="font-syne text-4xl">Lyris by Aquadev</h3>
          <p className="mt-4 max-w-2xl text-white/90">From source treatment to last-mile bottle delivery, Lyris helps institutions build hydration systems that are safe, elegant, and climate-responsible. Our circular model focuses on recovery, sanitization, reuse, and transparent quality control.</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-white/90"><li><a href="/">Home</a></li><li><a href="/about">About Us</a></li><li><a href="/products-services">Products & Services</a></li></ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-4 text-white/90">+91 90000 00000</p>
          <p className="text-white/90">contact@aquadev.in</p>
          <p className="text-white/90">aquadev.in</p>
        </div>
      </div>
    </footer>
  );
}
