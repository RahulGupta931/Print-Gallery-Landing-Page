export interface ServicePageData {
  slug: string;
  name: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'corrugated-boxes',
    name: 'Corrugated Box Manufacturing',
    title: 'Custom Corrugated Boxes in Noida',
    description:
      'Factory-direct corrugated shipping boxes for storage, e-commerce, and industrial transit. Choose board strength, flute profile, dimensions, and printing to suit your product.',
    details: [
      'Single-, double-, and triple-wall 3, 5, and 7-ply options',
      'B, C, E, and BC flute profiles with custom dimensions',
      'Regular slotted cartons, overlap flaps, and export cartons',
      'Recyclable kraft board with optional custom printing',
    ],
    image: '/all-type-of-boxes.jpg',
  },
  {
    slug: 'offset-printing',
    name: 'Offset Printing',
    title: 'Offset Printing for Packaging and Marketing',
    description:
      'High-definition offset printing for packaging, mono cartons, brochures, catalogues, and other business print materials.',
    details: [
      'Multi-colour printing for brand-ready packaging',
      'Printing on duplex and kraft boards',
      'Optional lamination, spot UV, foil stamping, and embossing',
      'Production support from artwork preparation through dispatch',
    ],
    image: '/banner1.jpg',
  },
  {
    slug: 'die-cut-packaging',
    name: 'Die-Cut Packaging',
    title: 'Custom Die-Cut Packaging and Mailer Boxes',
    description:
      'Made-to-fit die-cut packaging for e-commerce shipping, retail presentation, trays, and products that need a distinctive opening experience.',
    details: [
      'Custom mailers and self-locking carton formats',
      'CAD-assisted structural design and prototyping',
      'Partitioned trays, inserts, and display-ready formats',
      'Optional windows, perforations, and printed finishes',
    ],
    image: '/3.webp',
  },
  {
    slug: 'product-labels',
    name: 'Product Labels',
    title: 'Printed Product and Barcode Labels',
    description:
      'Product, retail, and logistics labels designed for clear identification and consistent brand presentation.',
    details: [
      'Label artwork prepared for product and packaging requirements',
      'Barcode and QR-code printing options',
      'Roll and sheet formats',
      'A choice of finishes for different applications',
    ],
    image: '/m4.webp',
  },
  {
    slug: 'sustainable-packaging',
    name: 'Sustainable Packaging',
    title: 'Recyclable Kraft and Sustainable Packaging',
    description:
      'Practical recyclable-paper packaging options for businesses looking to reduce reliance on plastic in their shipping and retail packaging.',
    details: [
      'Recyclable corrugated and kraft-paper packaging',
      'Custom sizes and box strengths for product protection',
      'Paper-based alternatives for common shipping applications',
      'Printing options to keep packaging aligned with your brand',
    ],
    image: '/a.jpg',
  },
  {
    slug: 'pos-displays',
    name: 'POS Displays and Promotional Print',
    title: 'Point-of-Sale Displays and Promotional Packaging',
    description:
      'Corrugated retail displays, standees, inserts, and promotional print to help products stand out at the point of sale.',
    details: [
      'Countertop displays and floor standees',
      'Corrugated inserts and product dispensers',
      'Full-colour printed display surfaces',
      'Flat-pack formats designed for straightforward assembly',
    ],
    image: '/banner.jpg',
  },
];
