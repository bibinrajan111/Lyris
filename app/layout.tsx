import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://aquadev.in';
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lyris',
  url: siteUrl,
  logo: `${siteUrl}/lyris-logo.svg`,
  description: 'Ultra-premium still and sparkling water programs, glass bottles, custom branding, and concierge hydration supply.',
  sameAs: [siteUrl],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Lyris Still Reserve' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Lyris Sparkling Reserve' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Branded Water Programs' } },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07111f',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Lyris | Ultra-Premium Water House', template: '%s | Lyris' },
  description: 'Luxury bottled water, source-led mineral storytelling, custom branded glass programs, and clean commerce-ready hydration experiences.',
  applicationName: 'Lyris',
  authors: [{ name: 'Lyris' }],
  creator: 'Lyris',
  publisher: 'Lyris',
  category: 'Premium Bottled Water',
  keywords: ['luxury water', 'premium bottled water', 'glass water bottle', 'custom branded water', 'hospitality water supply', 'sparkling reserve water'],
  alternates: { canonical: '/', languages: { 'en-US': '/' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/lyris-logo.svg', apple: '/lyris-logo.svg' },
  openGraph: {
    title: 'Lyris | Ultra-Premium Water House',
    description: 'Still and sparkling reserve water with glass-first design, mineral transparency, and concierge supply.',
    url: siteUrl,
    siteName: 'Lyris',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/lyris-logo.svg', width: 512, height: 512, alt: 'Lyris' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyris | Ultra-Premium Water House',
    description: 'Luxury still and sparkling reserve water for hospitality, office, event, and home rituals.',
    images: ['/lyris-logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
