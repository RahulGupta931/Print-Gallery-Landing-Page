import { servicePages } from './serviceData';

const origin = 'https://www.print-gallery.com';

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
    return {
      title: `${service.title} | Print Gallery`,
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
    '/privacy-policy': {
      title: 'Privacy Policy | Print Gallery',
      description: 'Learn how Print Gallery handles information when you browse our website or prepare a printing and packaging enquiry.',
      path,
    },
    '/terms': {
      title: 'Terms of Use | Print Gallery',
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
