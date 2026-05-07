import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aquadev.in'),
  title: { default: 'Lyris | Premium Hydration by Aquadev', template: '%s | Lyris' },
  description: 'Lyris delivers sustainable water processing, premium bottle supply, and custom branding solutions across India.',
  keywords: ['Lyris', 'Aquadev', 'water processing', 'bottle supply', 'custom branding', 'hydration'],
  openGraph: {
    title: 'Lyris - Sustainable Hydration',
    description: 'Modern water processing and bottle programs for homes, corporates, and municipalities.',
    url: 'https://aquadev.in',
    siteName: 'Lyris',
    locale: 'en_IN',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
