import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  FOUNDER_NAME,
  CONTACT_EMAIL,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_REGION,
  ADDRESS_POSTAL,
  ADDRESS_COUNTRY,
  GEO_LATITUDE,
  GEO_LONGITUDE,
} from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Axorks | Software House & Systems Engineering Studio in Karachi',
    template: '%s | Axorks Software Studio',
  },
  description:
    'Axorks is an elite software studio in Karachi & Islamabad engineered by Founder & Chief Architect Muhammad Mujahid. We architect full-stack web platforms, AI integrations, mobile apps, and government-grade public sector solutions.',
  keywords: [
    'Axorks',
    'Muhammad Mujahid',
    'Software House Karachi',
    'Software House in Karachi',
    'Software Agency Karachi',
    'Custom Software Company Karachi',
    'Full Stack Web Development Karachi',
    'AI Integration Services Pakistan',
    'Mobile App Development Karachi',
    'Government Software Solutions Pakistan',
    'FWO Grid Systems',
    'Next.js PostgreSQL Developers',
  ],
  authors: [{ name: FOUNDER_NAME, url: SITE_URL }],
  creator: FOUNDER_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Axorks | Software House & Systems Engineering Studio in Karachi',
    description:
      'High-stakes software studio in Karachi & Islamabad shipping enterprise web platforms, AI integrations, mobile applications, and public sector solutions.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 800,
        height: 800,
        alt: 'Axorks Software Studio Mark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axorks | Software House in Karachi',
    description:
      'High-stakes software studio in Karachi shipping enterprise web platforms, AI integrations, and public sector solutions.',
    images: [`${SITE_URL}/logo.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: `${SITE_NAME} Software Studio`,
        alternateName: ['Axorks', 'Axorks Software House'],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/logo.png`,
        description:
          'Axorks is a founder-led software studio in Karachi & Islamabad engineered by Muhammad Mujahid. We build full-stack web applications, AI integrations, mobile apps, and government-grade public sector software.',
        priceRange: '$$$',
        telephone: '+923141030223',
        email: CONTACT_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS_STREET,
          addressLocality: ADDRESS_CITY,
          addressRegion: ADDRESS_REGION,
          postalCode: ADDRESS_POSTAL,
          addressCountry: ADDRESS_COUNTRY,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO_LATITUDE,
          longitude: GEO_LONGITUDE,
        },
        areaServed: [
          { '@type': 'City', name: 'Karachi' },
          { '@type': 'City', name: 'Islamabad' },
          { '@type': 'Country', name: 'Pakistan' },
          { '@type': 'AdministrativeArea', name: 'Worldwide' },
        ],
        founder: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#founder`,
          name: FOUNDER_NAME,
          jobTitle: 'Founder & Chief Systems Architect',
          worksFor: { '@id': `${SITE_URL}/#organization` },
          alumniOf: 'Bahria University',
          knowsAbout: [
            'Software Engineering',
            'Full-Stack Web Systems',
            'Next.js & PostgreSQL Architecture',
            'AI API Integration',
            'FWO Grid Telemetry Systems',
          ],
          sameAs: [
            'https://github.com/Mujahidaryan',
            'https://wa.me/923141030223',
          ],
        },
        sameAs: [
          'https://github.com/Mujahidaryan',
          'https://wa.me/923141030223',
        ],
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#founder`,
        name: FOUNDER_NAME,
        jobTitle: 'Founder & Chief Systems Architect',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}/logo.png`,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Bahria University',
        },
        knowsAbout: [
          'Software Engineering',
          'Full-Stack Web Systems',
          'Next.js App Router',
          'AI API Integration',
          'Government Systems',
        ],
        sameAs: [
          'https://github.com/Mujahidaryan',
          'https://wa.me/923141030223',
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-obsidian text-paper antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
