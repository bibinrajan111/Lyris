export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  volume: string;
  minerals: string;
  ph: string;
  finish: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 'lyris-still-750',
    name: 'Lyris Still Reserve',
    subtitle: 'Mountain-filtered still water',
    price: 42,
    volume: '750 ml',
    minerals: '142 mg/L',
    ph: '7.8 pH',
    finish: 'Silken mineral finish',
    description: 'A table-ready glass bottle with naturally balanced minerality, designed for hospitality, boardrooms, and refined everyday rituals.',
  },
  {
    id: 'lyris-sparkling-750',
    name: 'Lyris Sparkling Reserve',
    subtitle: 'Fine pearl carbonation',
    price: 48,
    volume: '750 ml',
    minerals: '156 mg/L',
    ph: '7.6 pH',
    finish: 'Crisp luminous bubbles',
    description: 'Soft effervescence and a clean mineral profile made for tasting menus, celebrations, and elevated refreshment service.',
  },
  {
    id: 'lyris-still-case',
    name: 'Still Reserve Case',
    subtitle: 'Twelve-bottle hospitality case',
    price: 468,
    volume: '12 × 750 ml',
    minerals: '142 mg/L',
    ph: '7.8 pH',
    finish: 'Reusable premium carton',
    description: 'A discreetly branded case format for offices, suites, events, and recurring premium supply programs.',
  },
];

export const sourceMilestones = [
  {
    step: '01',
    title: 'Snow-fed aquifer',
    body: 'Water begins beneath protected granite strata where slow pressure and time create a naturally calm mineral signature.',
  },
  {
    step: '02',
    title: 'Seven-stage clarity',
    body: 'Micro-filtration, UV protection, and hygienic bottling preserve purity without flattening the taste profile.',
  },
  {
    step: '03',
    title: 'Glass-first ritual',
    body: 'Our flagship format uses endlessly recyclable glass, minimal ink, and a label designed to vanish into the table setting.',
  },
  {
    step: '04',
    title: 'White-glove delivery',
    body: 'Subscription, hospitality, event, and branded programs connect directly to fulfillment APIs as your .NET backend grows.',
  },
];

export const benefits = [
  { label: 'Minerality', value: '142', suffix: 'mg/L', detail: 'Balanced calcium, magnesium, and silica for a rounded finish.' },
  { label: 'Natural pH', value: '7.8', suffix: 'pH', detail: 'A softly alkaline profile that feels clean and composed.' },
  { label: 'Glass return', value: '88', suffix: '%', detail: 'Designed for premium reuse and circular hospitality logistics.' },
  { label: 'Source depth', value: '920', suffix: 'm', detail: 'Protected aquifer draw with geological filtration over decades.' },
  { label: 'Carbon light', value: '31', suffix: '%', detail: 'Optimized routing and packaging reduction against legacy supply.' },
  { label: 'Lead time', value: '24', suffix: 'h', detail: 'Rapid business replenishment for recurring city delivery windows.' },
];

export async function getProducts() {
  // Swap this local data source for your .NET API route, e.g. fetch(`${process.env.API_URL}/products`).
  return products;
}
