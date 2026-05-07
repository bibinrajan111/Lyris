export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-[#5d1451] to-[#8b2f7b] text-white">
      <div className="section-shell grid gap-8 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-syne text-3xl">Lyris</h3>
          <p className="mt-3 text-white/90">A premium hydration company by Aquadev, focused on safe water access and circular packaging systems.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/90">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products-services">Products & Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-white/90">Call: +91 90000 00000</p>
          <p className="text-white/90">WhatsApp: +91 90000 00000</p>
          <p className="mt-2 text-white/90">www.aquadev.in</p>
        </div>
      </div>
    </footer>
  );
}
