import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grape: '#967BB6',
        navy: '#111827',
        charcoal: '#1F2937',
        mint: '#A7F3D0',
        silver: '#CBD5E1'
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      backgroundImage: {
        'violet-gradient': 'radial-gradient(circle at top right, rgba(150,123,182,0.38), rgba(17,24,39,1) 55%)'
      }
    }
  },
  plugins: []
};

export default config;
