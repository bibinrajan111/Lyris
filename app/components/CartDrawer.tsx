'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useContext, useMemo, useState } from 'react';
import type { Product } from '../data';
import { Header } from './Header';

type CartLine = Product & { quantity: number };

export function CommerceShell({ children, products }: { children: React.ReactNode; products: Product[] }) {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([{ ...products[0], quantity: 1 }]);

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  function addToCart(product: Product) {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...items, { ...product, quantity: 1 }];
    });
    setOpen(true);
  }

  function decrement(id: string) {
    setCart((items) => items.flatMap((item) => {
      if (item.id !== id) return [item];
      if (item.quantity === 1) return [];
      return [{ ...item, quantity: item.quantity - 1 }];
    }));
  }

  return (
    <>
      <Header onCartOpen={() => setOpen(true)} />
      <CartContext.Provider value={{ addToCart }}>
        {children}
      </CartContext.Provider>
      <AnimatePresence>
        {open && (
          <motion.aside className="fixed inset-0 z-[80]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-modal="true" role="dialog" aria-label="Shopping cart">
            <button type="button" className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close cart" />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f7f4ee] p-6 text-slate-950 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between border-b border-slate-950/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">Private checkout</p>
                  <h2 className="mt-2 font-serif text-4xl tracking-[-0.08em]">Your selection</h2>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-slate-950/10 px-4 py-2 text-sm font-semibold">Close</button>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <p className="rounded-3xl border border-dashed border-slate-950/20 p-8 text-center text-sm text-slate-500">Your cart is empty. Add a reserve bottle to begin.</p>
                ) : cart.map((item) => (
                  <article key={item.id} className="rounded-[2rem] border border-slate-950/10 bg-white p-5">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-semibold tracking-[-0.03em]">{item.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{item.volume} · {item.finish}</p>
                      </div>
                      <p className="font-semibold">${item.price * item.quantity}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-slate-950/10 px-3 py-2">
                        <button type="button" onClick={() => decrement(item.id)} aria-label={`Decrease ${item.name}`}>−</button>
                        <span className="min-w-6 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => addToCart(item)} aria-label={`Increase ${item.name}`}>+</button>
                      </div>
                      <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Concierge ready</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="border-t border-slate-950/10 pt-5">
                <div className="flex items-center justify-between text-lg font-semibold"><span>Subtotal</span><span>${subtotal}</span></div>
                <button type="button" className="mt-5 w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-slate-800">Request checkout</button>
                <p className="mt-4 text-center text-xs leading-5 text-slate-500">Checkout action is intentionally API-ready for your .NET commerce endpoint.</p>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

const CartContext = createContext<{ addToCart: (product: Product) => void } | null>(null);

export function AddToCartButton({ product, className = '' }: { product: Product; className?: string }) {
  const cart = useContext(CartContext);
  return (
    <button type="button" onClick={() => cart?.addToCart(product)} className={className || 'rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'}>
      Add to cart
    </button>
  );
}
