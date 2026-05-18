export function ThreeBottle({ scale = 1 }: { scale?: number }) {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-sm" style={{ transform: `scale(${scale})` }}>
      <div className="absolute inset-x-12 bottom-8 top-14 animate-float rounded-[5rem] border border-white/70 bg-gradient-to-b from-white/80 via-cyan-100/35 to-purple-200/30 shadow-[0_30px_80px_rgba(83,36,123,.25)] backdrop-blur-xl">
        <div className="absolute -top-12 left-1/2 h-16 w-20 -translate-x-1/2 rounded-t-3xl border border-white/70 bg-white/70" />
        <div className="absolute left-8 right-8 top-36 rounded-3xl bg-[#53247b] p-5 text-center font-syne text-2xl font-black text-white shadow-2xl">LYRIS</div>
        <div className="absolute left-10 top-10 h-24 w-10 rounded-full bg-white/60 blur-sm" />
      </div>
    </div>
  );
}
