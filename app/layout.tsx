import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://aquadev.in'),
  title: { default: 'Lyris | Smart Hydration Systems', template: '%s | Lyris' },
  description: 'Lyris delivers processed drinking water, bottle distribution, and custom rebranding solutions for modern businesses and communities.',
  keywords: ['Lyris water', 'bottle supplier', 'rebranding bottle service', 'Aquadev hydration'],
  openGraph: { title: 'Lyris', description: 'Processed water & sustainable hydration solutions.', url: 'https://aquadev.in', siteName: 'Lyris', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ScrollReveal /><Header /><main>{children}</main><Footer /></body></html>;
}
