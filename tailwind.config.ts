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
        syne: ['Syne', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
