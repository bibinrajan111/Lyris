export type Product = {
  id: string;
  name: string;
  tagline: string;
  size: string;
  image: string;
  features: string[];
  usageCases: string[];
};

export type Service = {
  title: string;
  body: string;
};

export const contact = {
  phoneDisplay: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  whatsappHref: 'https://wa.me/919000000000?text=Hello%20Lyris%2C%20I%20would%20like%20to%20know%20more%20about%20your%20water%20products%20and%20services.',
  email: 'hello@lyris.example',
};

export const heroSlides = [
  {
    eyebrow: 'Premium packaged drinking water',
    title: 'Pure hydration for modern businesses.',
    body: 'Clean, refreshing Lyris water for offices, hotels, catering teams, institutions, retail shelves, and high-footfall events.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2200&auto=format&fit=crop',
    metric: 'Quality-first',
  },
  {
    eyebrow: 'Sustainable by design',
    title: 'Every bottle should have a second life.',
    body: 'We combine responsible packaging, recycling awareness, and circular thinking to make convenient hydration more conscious.',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=2200&auto=format&fit=crop',
    metric: 'Circular mindset',
  },
  {
    eyebrow: 'Brand-ready supply',
    title: 'Custom bottles that carry your identity.',
    body: 'Logo printing, personalized labels, event branding, bulk orders, and reliable catering water supply from one partner.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2200&auto=format&fit=crop',
    metric: 'Custom branding',
  },
];

export const products: Product[] = [
  {
    id: 'small-water-bottles',
    name: 'Small Water Bottles',
    tagline: 'Compact premium hydration for quick service and everyday movement.',
    size: 'Personal format',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1400&auto=format&fit=crop',
    features: ['Lightweight and convenient', 'Clear label space', 'Hygienic sealed packaging'],
    usageCases: ['Meetings', 'Retail counters', 'Travel and events'],
  },
  {
    id: 'medium-water-bottles',
    name: 'Medium Water Bottles',
    tagline: 'Balanced capacity for offices, hospitality rooms, and daily hydration.',
    size: 'Daily format',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1400&auto=format&fit=crop',
    features: ['Premium hand feel', 'Reliable volume', 'Branding friendly surface'],
    usageCases: ['Offices', 'Schools', 'Fitness spaces'],
  },
  {
    id: 'large-water-bottles',
    name: 'Large Water Bottles',
    tagline: 'High-capacity bottles for shared spaces, catering, and gatherings.',
    size: 'Shared format',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1400&auto=format&fit=crop',
    features: ['Family-friendly capacity', 'Event-ready supply', 'Strong shelf presence'],
    usageCases: ['Catering', 'Hospitality', 'Family gatherings'],
  },
  {
    id: 'refillable-water-cans',
    name: 'Refillable Water Cans',
    tagline: 'Reusable water supply for homes, institutions, restaurants, and workplaces.',
    size: 'Refillable format',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1400&auto=format&fit=crop',
    features: ['Reusable system', 'Economical supply', 'Reduced single-use reliance'],
    usageCases: ['Homes', 'Restaurants', 'Institutions'],
  },
];

export const services: Service[] = [
  { title: 'Custom Branding', body: 'Premium water bottle branding for companies, campaigns, hotels, conferences, weddings, and private events.' },
  { title: 'Logo Printing', body: 'Clean logo placement that keeps your brand visible while preserving a refined bottle presentation.' },
  { title: 'Personalized Labels', body: 'Event names, company messaging, QR codes, and custom artwork prepared for professional production.' },
  { title: 'Event Branding', body: 'Coordinated bottle supply for product launches, corporate events, banquets, and hospitality experiences.' },
  { title: 'Bulk Orders', body: 'Reliable volume planning and distribution support for recurring or one-time large water requirements.' },
  { title: 'Catering & Hospitality Water Supply', body: 'Guest-ready packaged drinking water for caterers, restaurants, banquet halls, resorts, and service teams.' },
];

export const coreValues = [
  'Sustainability First',
  'Responsibility',
  'Innovation',
  'Community Impact',
  'Quality & Purity',
  'Transparency',
];

export const circularApproach = [
  'Responsible Packaging',
  'Consumer Awareness',
  'Collection & Recovery',
  'Recycling & Reuse',
  'Building a Cleaner Future',
];

export const homeMetrics = [
  { label: 'Product formats', value: '4', detail: 'Small, medium, large bottles and refillable cans.' },
  { label: 'Service lines', value: '6', detail: 'Branding, bulk orders, labels, events, and hospitality supply.' },
  { label: 'Circular approach', value: '360°', detail: 'A responsible packaging and recycling awareness mindset.' },
];

export async function getProducts() {
  return products;
}

export async function getServices() {
  return services;
}
