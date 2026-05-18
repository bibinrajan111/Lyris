import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingContact } from './components/ContactOptions';

const siteUrl = 'https://aquadev.in';
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lyris',
  url: siteUrl,
  logo: `${siteUrl}/lyris-logo.svg`,
  image: `${siteUrl}/lyris-logo.svg`,
  telephone: '+91 90000 00000',
  description: 'Premium bottled water, refillable water cans, distribution programs, and custom branded bottle services for businesses, events, hospitality, and communities.',
  sameAs: [siteUrl],
  areaServed: 'India',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Small Water Bottles' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Medium Water Bottles' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Large Water Bottles' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Refillable Water Cans' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Branded Water Bottles' } },
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
  description: 'Lyris delivers premium bottled water, refillable water cans, distribution programs, and custom branded bottle services for businesses, events, catering, hospitality, and communities.',
  applicationName: 'Lyris',
  authors: [{ name: 'Lyris' }],
  creator: 'Lyris',
  publisher: 'Lyris',
  category: 'Bottled Water Supplier',
  keywords: [
    'Lyris water',
    'bottled water supplier',
    'packaged drinking water',
    'custom branded water bottles',
    'logo printed water bottles',
    'refillable water cans',
    'bulk water delivery',
    'catering water supply',
    'hospitality bottled water',
    'sustainable hydration',
    'recyclable PET bottles',
  ],
  alternates: { canonical: '/', languages: { 'en-IN': '/' } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: { icon: '/lyris-logo.svg', apple: '/lyris-logo.svg' },
  openGraph: {
    title: 'Lyris | Premium Bottled Water & Sustainable Hydration',
    description: 'Premium bottled water, refillable cans, custom branded bottles, and reliable water supply for businesses, events, catering, and hospitality.',
    url: siteUrl,
    siteName: 'Lyris',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/lyris-logo.svg', width: 512, height: 512, alt: 'Lyris' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyris | Premium Bottled Water & Sustainable Hydration',
    description: 'Custom branded water bottles, refillable water cans, and reliable packaged drinking water supply.',
    images: ['/lyris-logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
