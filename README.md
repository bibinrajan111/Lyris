# Lyris — Premium 3D Startup Website

A high-end, responsive startup website concept for **Lyris (Aquadev subsidiary)** built with **Next.js App Router**, **Tailwind CSS**, **React Three Fiber**, **GSAP**, and **Framer Motion**.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Three.js + @react-three/fiber + @react-three/drei
- GSAP
- Framer Motion
- TypeScript

## Features Implemented
- Sticky glassmorphism navbar with animated logo and mobile hamburger.
- Home hero with interactive 3D bottle (mouse-reactive + auto-rotating).
- Dynamic premium typography with Syne + Inter.
- Horizontal “auto-scroll style” gallery cards.
- About section narrative rewritten around circular economy and zero-waste hydration.
- GSAP-powered animated sustainability counters.
- Products section with scroll-to-swap size experience for 4 bottle formats.
- Service block for custom branding sticker morph concept.
- Massive gradient footer with bubble-like background physics aesthetic.
- Responsive layout from mobile to ultra-wide/TV-sized screens.

## Quick Start
- Node.js 20+ recommended

```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Project Structure
```
app/
  components/
    Footer.tsx
    Header.tsx
    ThreeBottle.tsx
  globals.css
  layout.tsx
  page.tsx
public/
```

## Brand Styling
- Primary: `#967BB6` (Grape / Light Violet)
- Secondary: Deep Navy + Charcoal tones
- Accents: Soft Mint + Silver

## Notes
- Replace placeholder social links as needed.
- Replace primitive bottle geometry with imported GLTF assets for production realism.
