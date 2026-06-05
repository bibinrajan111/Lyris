import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FloatingContact } from './components/ContactButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const siteUrl = 'https://aquadev.in';
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lyris',
  url: siteUrl,
  logo: `${siteUrl}/lyris-logo.svg`,
  description: 'Premium bottled water, refillable water cans, custom branded bottles, bulk orders, and catering water supply with a sustainability-first approach.',
  telephone: '+91 90000 00000',
  areaServed: 'India',
  sameAs: [siteUrl],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Small Water Bottles' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Medium Water Bottles' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Large Water Bottles' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Refillable Water Cans' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Branding & Rebranding Services' } },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#53247b',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Lyris | Premium Bottled Water & Sustainable Hydration', template: '%s | Lyris' },
  description: 'Lyris provides premium bottled water, refillable cans, custom branded bottles, bulk orders, and catering water supply with sustainability at the foundation.',
  applicationName: 'Lyris',
  authors: [{ name: 'Lyris' }],
  creator: 'Lyris',
  publisher: 'Lyris',
  category: 'Bottled Water Supplier',
  keywords: ['Lyris water', 'premium bottled water', 'custom branded water bottles', 'refillable water cans', 'bulk water delivery', 'catering water supply', 'sustainable hydration'],
  alternates: { canonical: '/', languages: { 'en-IN': '/' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/lyris-logo.svg', apple: '/lyris-logo.svg' },
  openGraph: {
    title: 'Lyris | Premium Bottled Water & Sustainable Hydration',
    description: 'Premium bottled water, refillable cans, custom branding, bulk orders, and hospitality water supply.',
    url: siteUrl,
    siteName: 'Lyris',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/lyris-logo.svg', width: 512, height: 512, alt: 'Lyris' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyris | Premium Bottled Water & Sustainable Hydration',
    description: 'Premium bottled water, custom branded bottles, refillable cans, and reliable supply services.',
    images: ['/lyris-logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
