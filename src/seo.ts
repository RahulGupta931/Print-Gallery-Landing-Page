import { servicePages } from './serviceData';

const origin = 'https://www.printgallerys.com';

export interface SeoMetadata {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function getSeoMetadata(pathname: string): SeoMetadata {
  const path = pathname === '/' ? '/' : `/${pathname.split('/').filter(Boolean).join('/')}`;
  const service = servicePages.find((item) => path === `/${item.slug}`);

  if (service) {
    const titles: Record<string, string> = {
      'corrugated-boxes': 'Custom Corrugated Boxes in Noida, India | Print Gallery',
      'offset-printing': 'Offset Printing for Packaging and Marketing | Print Gallery',
      'die-cut-packaging': 'Custom Die-Cut Packaging and Mailer Boxes | Print Gallery',
      'product-labels': 'Printed Product and Barcode Labels | Print Gallery',
      'sustainable-packaging': 'Recyclable Kraft and Sustainable Packaging | Print Gallery',
      'pos-displays': 'POS Displays and Promotional Print Services | Print Gallery',
    };
    return {
      title: titles[service.slug],
      description: service.description,
      path,
    };
  }

  const pages: Record<string, SeoMetadata> = {
    '/': {
      title: 'Print Gallery | Printing and Packaging Solutions in Noida',
      description: 'Custom corrugated boxes, packaging, and printing services from Print Gallery in Noida, India. Discuss your specifications with our team.',
      path: '/',
    },
    '/about': {
      title: 'About Print Gallery | Packaging & Printing in Noida',
      description: 'Meet Print Gallery, a Noida packaging and printing partner focused on thoughtful design, dependable manufacturing, and quality.',
      path,
    },
    '/contact': {
      title: 'Contact Print Gallery | Packaging & Printing in Noida',
      description: 'Contact Print Gallery in Noida for corrugated packaging, custom boxes, printing services, and project enquiries.',
      path,
    },
    '/privacy-policy': {
      title: 'Privacy Policy for Print Gallery Website | Print Gallery',
      description: 'Learn how Print Gallery handles information when you browse our website or prepare a printing and packaging enquiry.',
      path,
    },
    '/terms': {
      title: 'Terms of Use for Print Gallery Website | Print Gallery',
      description: 'Read the terms for using the Print Gallery website and requesting printing and packaging quotes.',
      path,
    },
    '/thank-you': {
      title: 'Enquiry Ready | Print Gallery',
      description: 'Continue to WhatsApp or email to send your enquiry to Print Gallery.',
      path,
      noindex: true,
    },
    '/404': {
      title: 'Page Not Found | Print Gallery',
      description: 'The requested page could not be found. Return to the Print Gallery homepage.',
      path,
      noindex: true,
    },
  };

  return pages[path] ?? pages['/404'];
}

export function getStructuredData(metadata: SeoMetadata): object[] {
  const data: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
        ...(metadata.path === '/'
          ? []
          : [{ '@type': 'ListItem', position: 2, name: metadata.title.split(' | ')[0], item: `${origin}${metadata.path}` }]),
      ],
    },
  ];
  if (metadata.path === '/') {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Print Gallery',
      url: `${origin}/`,
      logo: `${origin}/logo.png`,
      email: 'printgallery17@gmail.com',
      telephone: '+91-9810466405',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E-block, Building No. 67, Sector 63',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9810466405',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    });
  }
  return data;
}
