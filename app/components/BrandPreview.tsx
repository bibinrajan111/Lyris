'use client';
import { useMemo, useState } from 'react';

const colors = ['#53247b', '#0ea5e9', '#ef4444', '#16a34a', '#f59e0b'];

export function BrandPreview() {
  const [name, setName] = useState('Your Company');
  const [color, setColor] = useState(colors[0]);
  const stickerStyle = useMemo(() => ({ backgroundColor: color }), [color]);

  return (
    <div className="soft-panel reveal p-6">
      <h3 className="font-syne text-2xl text-[#3d1b5b]">Live Rebranding Preview</h3>
      <p className="mt-2">Type your company name and pick a sticker color to preview custom bottle branding.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold">Company Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-[#53247b]/20 px-3 py-2" />
          <p className="mt-3 text-sm font-semibold">Sticker Color</p>
          <div className="mt-2 flex gap-2">{colors.map(c=><button key={c} onClick={()=>setColor(c)} className="h-8 w-8 rounded-full border" style={{background:c}} aria-label={c} />)}</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-56 w-28 rounded-[40px] bg-gradient-to-b from-slate-100 to-slate-200 shadow-inner">
            <div className="absolute left-4 right-4 top-20 rounded-lg px-2 py-3 text-center text-xs font-bold text-white" style={stickerStyle}>{name || 'Your Company'}</div>
            <div className="absolute -top-5 left-1/2 h-8 w-10 -translate-x-1/2 rounded-t-xl bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
