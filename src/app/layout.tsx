import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  SITE_URL,
  SITE_NAME,
  FOUNDER_NAME,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_REGION,
  ADDRESS_POSTAL,
  ADDRESS_COUNTRY,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GA_MEASUREMENT_ID,
} from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.axorks.com'),
  title: {
    default: 'Axorks | International Custom Software & Bespoke Web Engineering Studio',
    template: '%s | Axorks International Software Studio',
  },
  description:
    'Axorks is an international software engineering company serving businesses worldwide. We architect custom web applications, AI automations, cross-platform mobile apps, and enterprise cloud systems for clients in the UK, US, EU, UAE, and global markets.',
  keywords: [
    'Axorks',
    'custom software development company',
    'bespoke web development UK',
    'custom web application development US',
    'AI automation agency',
    'enterprise software engineering',
    'remote software development partner',
    'cross platform mobile app development',
    'Next.js PostgreSQL software architecture',
    'custom cloud software development',
  ],
  authors: [{ name: FOUNDER_NAME, url: SITE_URL }],
  creator: FOUNDER_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
    title: 'Axorks | International Custom Software & Bespoke Web Engineering Studio',
    description:
      'International software engineering company delivering custom web platforms, AI integrations, mobile applications, and enterprise cloud systems for businesses in the US, UK, EU, UAE, and worldwide.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Axorks International Software Engineering Studio',
      },
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
    title: 'Axorks | International Custom Software Engineering',
    description:
      'International software engineering company building enterprise web platforms, AI automations, and custom software systems for businesses worldwide.',
    images: [`${SITE_URL}/og-image.png`, `${SITE_URL}/logo.png`],
  },
  alternates: {
    canonical: '/',
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
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE_URL}/#organization`,
        name: `${SITE_NAME} Software Studio`,
        alternateName: ['Axorks', 'Axorks International Software Engineering'],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/logo.png`,
        description:
          'Axorks is an international software engineering company serving businesses worldwide. We build custom web applications, AI integrations, mobile apps, and enterprise cloud software.',
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
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'United Arab Emirates' },
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
            'Enterprise Cloud Systems',
          ],
          sameAs: [
            LINKEDIN_URL,
            'https://wa.me/923141030223',
          ],
        },
        sameAs: [
          LINKEDIN_URL,
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
          LINKEDIN_URL,
          'https://wa.me/923141030223',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE_NAME} Software Studio`,
        description: 'International software engineering company serving businesses worldwide.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
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
