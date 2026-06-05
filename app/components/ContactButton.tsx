'use client';

import { useEffect, useRef, useState } from 'react';
import { contact } from '../data';

export function ContactButton({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return (
    <div ref={wrapperRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#53247b] font-bold text-white shadow-[0_18px_40px_-22px_rgba(83,36,123,.9)] transition hover:-translate-y-0.5 hover:bg-[#432064] ${compact ? 'px-4 py-2.5 text-sm' : 'px-6 py-3.5 text-sm'}`}
      >
        Contact Us
        <span aria-hidden="true">↗</span>
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 overflow-hidden rounded-3xl border border-[#53247b]/10 bg-white p-2 text-slate-900 shadow-[0_24px_70px_rgba(15,23,42,.18)]">
          <a href={contact.phoneHref} className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-[#f5effa]" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#53247b]/10 text-[#53247b]">☎</span>
            <span><span className="block text-sm font-bold">Call Lyris</span><span className="text-xs text-slate-500">{contact.phoneDisplay}</span></span>
          </a>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-emerald-50" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700">✆</span>
            <span><span className="block text-sm font-bold">WhatsApp</span><span className="text-xs text-slate-500">Message our supply team</span></span>
          </a>
        </div>
      )}
    </div>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      <ContactButton compact />
    </div>
  );
}
