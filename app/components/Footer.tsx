'use client';

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-b from-[#2A2240] to-[#0B1120] px-6 py-20">
      <div className="section-shell flex flex-col gap-8">
        <h2 className="font-syne text-5xl text-white">Hydrate. Regenerate. Repeat.</h2>
        <p className="max-w-xl text-silver/90">Lyris by Aquadev is engineering a circular hydration economy for cities, campuses, and enterprises.</p>
        <div className="flex gap-6 text-mint">
          <a href="https://aquadev.in" target="_blank">Aquadev</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_30%_20%,#a7f3d0_2px,transparent_2px)] [background-size:70px_70px]" />
    </footer>
  );
}
