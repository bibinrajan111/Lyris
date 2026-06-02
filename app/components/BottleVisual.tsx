'use client';

import { motion } from 'framer-motion';

export function BottleVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative mx-auto ${compact ? 'h-[440px] max-w-[280px]' : 'h-[620px] max-w-[360px]'} w-full`} aria-label="Lyris premium water bottle illustration" role="img">
      <motion.div
        className="absolute inset-x-8 bottom-4 top-20 rounded-[5rem] border border-white/70 bg-gradient-to-b from-white/85 via-sky-100/35 to-white/25 shadow-[0_45px_120px_rgba(4,23,47,.28)] backdrop-blur"
        initial={{ opacity: 0, y: 34, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute -top-16 left-1/2 h-20 w-24 -translate-x-1/2 rounded-t-[2rem] border border-white/80 bg-gradient-to-b from-white to-slate-200/80 shadow-inner" />
        <div className="absolute -top-24 left-1/2 h-10 w-28 -translate-x-1/2 rounded-full bg-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,.2)]" />
        <motion.div
          className="absolute inset-x-8 top-40 rounded-[2rem] border border-white/50 bg-slate-950/95 p-7 text-center text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-sky-200">Reserve</p>
          <p className="mt-3 font-serif text-5xl tracking-[-0.08em]">Lyris</p>
          <p className="mt-3 text-xs uppercase tracking-[0.32em] text-white/60">Still · 750 ml</p>
        </motion.div>
        <div className="absolute left-10 top-16 h-44 w-8 rounded-full bg-white/70 blur-sm" />
        <div className="absolute bottom-20 left-1/2 h-28 w-40 -translate-x-1/2 rounded-full bg-sky-200/25 blur-2xl" />
      </motion.div>
      <motion.div
        className="absolute right-0 top-28 rounded-3xl border border-white/50 bg-white/75 px-5 py-4 text-slate-950 shadow-[0_24px_70px_rgba(15,23,42,.18)] backdrop-blur-xl"
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <p className="text-3xl font-semibold tracking-[-0.06em]">7.8</p>
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">natural pH</p>
      </motion.div>
      <motion.div
        className="absolute left-0 bottom-28 rounded-3xl border border-white/50 bg-slate-950 px-5 py-4 text-white shadow-[0_24px_70px_rgba(15,23,42,.22)]"
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <p className="text-3xl font-semibold tracking-[-0.06em]">142</p>
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">mg/L minerals</p>
      </motion.div>
    </div>
  );
}
