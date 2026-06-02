import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://aquadev.in/sitemap.xml',
    host: 'https://aquadev.in',
  };
}
