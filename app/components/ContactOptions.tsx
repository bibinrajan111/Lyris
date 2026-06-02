'use client';

import { useState } from 'react';

const phone = '+919000000000';
const whatsapp = '919000000000';

export function ContactOptions({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={compact ? 'btn btn-primary px-4 py-2 text-sm' : 'btn btn-primary'}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Contact Lyris
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-3xl border border-white/50 bg-white/95 p-3 text-slate-700 shadow-2xl" role="menu">
          <a className="contact-option" href={`https://wa.me/${whatsapp}?text=Hello%20Lyris%2C%20I%20would%20like%20to%20know%20more%20about%20your%20water%20solutions.`} target="_blank" rel="noreferrer" role="menuitem">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 text-lg">💬</span>
            <span><b>WhatsApp Chat</b><small>Fast product & order support</small></span>
          </a>
          <a className="contact-option" href={`tel:${phone}`} role="menuitem">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-purple-100 text-lg">☎️</span>
            <span><b>Phone Call</b><small>Speak with the supply team</small></span>
          </a>
        </div>
      )}
    </div>
  );
}

export function FloatingContact() {
  return (
    <>
      <a
        href={`https://wa.me/${whatsapp}?text=Hello%20Lyris%2C%20I%20am%20interested%20in%20your%20water%20products.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 hidden h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-[0_18px_40px_rgba(16,185,129,.35)] transition hover:-translate-y-1 hover:scale-105 md:grid"
        aria-label="Chat with Lyris on WhatsApp"
      >
        ✆
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/30 bg-white/85 p-3 shadow-2xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a className="rounded-full bg-emerald-500 px-4 py-3 text-center text-sm font-bold text-white" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="rounded-full bg-[#53247b] px-4 py-3 text-center text-sm font-bold text-white" href={`tel:${phone}`}>Call Now</a>
        </div>
      </div>
    </>
  );
}
