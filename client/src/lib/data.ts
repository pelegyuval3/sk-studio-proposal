// SK Studio - Product & Vehicle Data
// Technical Edge Design System

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  salePrice?: number;
  category: string;
  categorySlug: string;
  image: string;
  hoverImage?: string;
  badge?: string;
  fitment: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  material?: string;
  installDifficulty?: 'easy' | 'medium' | 'pro';
  description?: string;
  includes?: string[];
}

export interface Vehicle {
  brand: string;
  model: string;
  year: string;
  slug: string;
  image: string;
  popular?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    name: 'Interior',
    slug: 'interior',
    description: 'Floor mats, seat covers, trim panels, ambient lighting',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-interior-GRRoSBXeA2SqAM7Dnci6Mz.webp',
    count: 48,
  },
  {
    name: 'Exterior',
    slug: 'exterior',
    description: 'Spoilers, side skirts, mirror caps, body kits',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-exterior-JWnf9pfT2ph7cq6g35REqu.webp',
    count: 36,
  },
  {
    name: 'Lighting',
    slug: 'lighting',
    description: 'LED upgrades, ambient kits, headlight accessories',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    count: 24,
  },
  {
    name: 'Carbon Style',
    slug: 'carbon',
    description: 'Carbon fiber trim, covers, and styling components',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    count: 18,
  },
  {
    name: 'Protection',
    slug: 'protection',
    description: 'Paint protection, door guards, bumper protectors',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    count: 22,
  },
  {
    name: 'Utility',
    slug: 'utility',
    description: 'Organizers, cargo solutions, tech accessories',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    count: 31,
  },
];

export const vehicles: Vehicle[] = [
  { brand: 'BMW', model: '3 Series G20', year: '2019-2024', slug: 'bmw-3-series-g20', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', popular: true },
  { brand: 'BMW', model: '5 Series G30', year: '2017-2023', slug: 'bmw-5-series-g30', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600&q=80', popular: true },
  { brand: 'Mercedes', model: 'C-Class W206', year: '2022-2024', slug: 'mercedes-c-class-w206', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', popular: true },
  { brand: 'Audi', model: 'A4 B9', year: '2016-2024', slug: 'audi-a4-b9', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80', popular: true },
  { brand: 'BYD', model: 'Atto 3', year: '2022-2024', slug: 'byd-atto-3', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-byd-Ld9fmsZcZuKVgP7zLrFuXW.webp', popular: true },
  { brand: 'BYD', model: 'Seal', year: '2023-2024', slug: 'byd-seal', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80', popular: true },
  { brand: 'Chery', model: 'Tiggo 8 Pro', year: '2022-2024', slug: 'chery-tiggo-8-pro', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80' },
  { brand: 'Jaecoo', model: 'J7', year: '2023-2024', slug: 'jaecoo-j7', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80' },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'bmw-g20-premium-floor-mats',
    name: 'Premium Floor Mat Set',
    subtitle: 'Full-coverage leather with silver stitching',
    price: 890,
    category: 'Interior',
    categorySlug: 'interior',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-interior-GRRoSBXeA2SqAM7Dnci6Mz.webp',
    badge: 'Best Seller',
    fitment: ['BMW 3 Series G20 2019-2024', 'BMW 4 Series G22 2021-2024'],
    inStock: true,
    rating: 4.8,
    reviews: 47,
    material: 'Premium leather + anti-slip base',
    installDifficulty: 'easy',
    description: 'Precision-cut floor mats designed for exact fitment in the BMW G20 3 Series. Full-coverage design protects the original carpet with a premium leather surface and silver stitching detail.',
    includes: ['4x floor mats', 'Anti-slip clips', 'Installation guide'],
  },
  {
    id: '2',
    slug: 'byd-atto3-ambient-lighting-kit',
    name: 'Ambient Lighting Kit',
    subtitle: '64-color RGB interior strip system',
    price: 420,
    salePrice: 350,
    category: 'Lighting',
    categorySlug: 'lighting',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    badge: 'New',
    fitment: ['BYD Atto 3 2022-2024', 'BYD Seal 2023-2024'],
    inStock: true,
    rating: 4.6,
    reviews: 23,
    material: 'LED strip + wireless controller',
    installDifficulty: 'medium',
    description: 'Transform your BYD interior with 64-color ambient lighting. Plug-and-play installation with app control via Bluetooth.',
    includes: ['LED strips x6', 'Controller unit', 'App guide', 'Adhesive tape'],
  },
  {
    id: '3',
    slug: 'mercedes-w206-carbon-mirror-caps',
    name: 'Carbon Mirror Caps',
    subtitle: 'Real carbon fiber, OEM fitment',
    price: 680,
    category: 'Exterior',
    categorySlug: 'exterior',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-exterior-JWnf9pfT2ph7cq6g35REqu.webp',
    badge: 'Best Seller',
    fitment: ['Mercedes C-Class W206 2022-2024', 'Mercedes E-Class W214 2024'],
    inStock: true,
    rating: 4.9,
    reviews: 31,
    material: '2x2 twill weave carbon fiber',
    installDifficulty: 'easy',
    description: 'Real 2x2 twill weave carbon fiber mirror caps with OEM clip fitment. No drilling, no adhesive - snap-on installation.',
    includes: ['2x mirror caps', 'Fitment clips', 'Microfiber cloth'],
  },
  {
    id: '4',
    slug: 'bmw-g20-carbon-interior-trim',
    name: 'Carbon Interior Trim Set',
    subtitle: 'Dashboard and door panel trim',
    price: 1240,
    category: 'Carbon Style',
    categorySlug: 'carbon',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    fitment: ['BMW 3 Series G20 2019-2024'],
    inStock: true,
    rating: 4.7,
    reviews: 18,
    material: 'Dry carbon fiber',
    installDifficulty: 'medium',
    description: 'Complete interior trim set in dry carbon fiber. Replaces the factory plastic trim on dashboard, center console, and door panels.',
    includes: ['Dashboard trim x3', 'Door panel inserts x4', 'Center console trim', 'Adhesive promoter'],
  },
  {
    id: '5',
    slug: 'audi-a4-b9-seat-covers',
    name: 'Sport Seat Cover Set',
    subtitle: 'Perforated leather, full set',
    price: 1450,
    category: 'Interior',
    categorySlug: 'interior',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    fitment: ['Audi A4 B9 2016-2024', 'Audi A5 B9 2017-2024'],
    inStock: true,
    rating: 4.5,
    reviews: 12,
    material: 'Perforated PU leather',
    installDifficulty: 'pro',
    description: 'Full-set seat covers in perforated PU leather with contrast stitching. Designed for exact fitment on Audi B9 platform seats.',
    includes: ['Front seat covers x2', 'Rear seat covers x2', 'Headrest covers x4'],
  },
  {
    id: '6',
    slug: 'byd-atto3-front-lip-spoiler',
    name: 'Front Lip Spoiler',
    subtitle: 'Gloss black ABS, aggressive stance',
    price: 560,
    category: 'Exterior',
    categorySlug: 'exterior',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663495322166/nR2rDEH5BHZhzMnxi5Bpfp/sk-exterior-JWnf9pfT2ph7cq6g35REqu.webp',
    badge: 'New',
    fitment: ['BYD Atto 3 2022-2024'],
    inStock: true,
    rating: 4.4,
    reviews: 8,
    material: 'ABS plastic, gloss black',
    installDifficulty: 'medium',
    description: 'Aggressive front lip spoiler for BYD Atto 3. Adds visual presence and mild aerodynamic effect. Gloss black finish.',
    includes: ['Front lip spoiler', 'Mounting hardware', 'Installation guide'],
  },
  {
    id: '7',
    slug: 'universal-wireless-charger-pad',
    name: 'Wireless Charging Pad',
    subtitle: '15W fast charge, universal fit',
    price: 280,
    category: 'Utility',
    categorySlug: 'utility',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    fitment: ['Universal - most vehicles with center console'],
    inStock: true,
    rating: 4.6,
    reviews: 34,
    material: 'Aluminum + rubber surface',
    installDifficulty: 'easy',
    description: '15W Qi wireless charging pad with non-slip surface. Fits most center consoles. USB-C power input.',
    includes: ['Charging pad', 'USB-C cable 1.5m', 'Anti-slip mat'],
  },
  {
    id: '8',
    slug: 'bmw-g20-door-sill-protectors',
    name: 'Door Sill Protectors',
    subtitle: 'Brushed steel with model logo',
    price: 320,
    category: 'Protection',
    categorySlug: 'protection',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    fitment: ['BMW 3 Series G20 2019-2024', 'BMW 4 Series G22 2021-2024'],
    inStock: true,
    rating: 4.7,
    reviews: 22,
    material: 'Brushed stainless steel',
    installDifficulty: 'easy',
    description: 'Brushed stainless steel door sill protectors with BMW logo. Self-adhesive installation. Protects against scuffs and scratches.',
    includes: ['4x sill protectors', 'Adhesive pre-applied', 'Cleaning wipes'],
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Avi K.',
    vehicle: 'BMW 3 Series G20',
    rating: 5,
    text: 'Floor mats fit perfectly. Quality is noticeably better than OEM. Fast delivery and the WhatsApp support was very helpful.',
    date: 'March 2026',
  },
  {
    id: '2',
    name: 'Noa S.',
    vehicle: 'BYD Atto 3',
    rating: 5,
    text: 'The ambient lighting kit transformed my interior. Easy installation, the app works great. Exactly as described.',
    date: 'February 2026',
  },
  {
    id: '3',
    name: 'Rotem M.',
    vehicle: 'Mercedes C-Class W206',
    rating: 5,
    text: 'Carbon mirror caps look factory-fitted. Snap-on installation took 10 minutes. Premium quality.',
    date: 'February 2026',
  },
  {
    id: '4',
    name: 'Yossi B.',
    vehicle: 'Audi A4 B9',
    rating: 4,
    text: 'Seat covers are excellent quality. Professional installation recommended. Very happy with the result.',
    date: 'January 2026',
  },
];

export const faqs = [
  {
    q: 'How do I know if a product fits my vehicle?',
    a: 'Every product page includes a detailed fitment table with brand, model, year range, and trim notes. You can also use the Vehicle Finder on the homepage to browse only compatible products. If you are unsure, message us on WhatsApp before ordering.',
  },
  {
    q: 'What if I am not sure about compatibility?',
    a: 'Contact us on WhatsApp before placing your order. We will confirm fitment based on your vehicle details. We prefer to verify before you buy rather than deal with returns.',
  },
  {
    q: 'Do you ship internationally or within Israel only?',
    a: 'Currently we ship within Israel only. Delivery to most locations takes 2-4 business days.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard delivery is 2-4 business days. Express options are available at checkout. You will receive a tracking number once your order ships.',
  },
  {
    q: 'Can I return a product?',
    a: 'Yes. We accept returns within 14 days of delivery for unused products in original packaging. Contact us on WhatsApp or email to initiate a return.',
  },
  {
    q: 'What if the item arrives damaged?',
    a: 'Document the damage with photos and contact us within 48 hours of delivery. We will arrange a replacement or full refund.',
  },
  {
    q: 'Do you offer installation help?',
    a: 'Yes. We provide installation guides for every product. For complex installations, we can recommend professional installers in your area. WhatsApp support is available for guidance.',
  },
  {
    q: 'Can I contact support before ordering?',
    a: 'Absolutely. We encourage it. Message us on WhatsApp with your vehicle details and the product you are interested in. We will confirm fitment and answer any questions.',
  },
];
