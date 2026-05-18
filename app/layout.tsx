import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingContact } from './components/ContactOptions';

export const metadata: Metadata = {
  metadataBase: new URL('https://aquadev.in'),
  title: { default: 'Lyris | Premium Sustainable Hydration', template: '%s | Lyris' },
  description: 'Lyris delivers premium bottled water, refillable water cans, distribution programs, and custom branded bottle services for businesses, events, and hospitality.',
  keywords: ['Lyris water', 'bottled water supplier', 'custom branded water bottles', 'refillable water cans', 'catering water supply', 'sustainable hydration'],
  openGraph: { title: 'Lyris', description: 'Premium processed water, refillable cans, and custom branded bottle programs.', url: 'https://aquadev.in', siteName: 'Lyris', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
