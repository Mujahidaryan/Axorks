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
  GOOGLE_SITE_VERIFICATION,
} from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.axorks.com'),
  title: {
    default: 'Axorks | Custom Web Applications & AI Automation for Growing Businesses',
    template: '%s | Axorks',
  },
  description:
    'Axorks helps growing businesses build custom web applications and automate manual work with AI. Projects start from $600. Book a free discovery call.',
  keywords: [
    'Axorks',
    'custom web application development',
    'AI automation for business',
    'custom software development UK',
    'web app development US',
    'business automation software',
    'custom software company',
    'mobile app development',
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
    title: 'Axorks | Custom Web Applications & AI Automation',
    description:
      'We help growing businesses build custom web applications and automate manual work with AI. Projects start from $600.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Axorks — Custom Software & AI Automation',
      },
      {
        url: `${SITE_URL}/logo.png`,
        width: 800,
        height: 800,
        alt: 'Axorks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axorks | Custom Software & AI Automation',
    description:
      'Custom web applications and AI automation for growing businesses. Projects from $600.',
    images: [`${SITE_URL}/og-image.png`, `${SITE_URL}/logo.png`],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
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
        name: SITE_NAME,
        alternateName: ['Axorks', 'Axorks Pvt Limited'],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/logo.png`,
        description:
          'Axorks helps growing businesses build custom web applications and automate manual work with AI.',
        priceRange: '$$',
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
          jobTitle: 'Founder',
          worksFor: { '@id': `${SITE_URL}/#organization` },
          alumniOf: 'Bahria University',
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
        jobTitle: 'Founder',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}/logo.png`,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Bahria University',
        },
        sameAs: [
          LINKEDIN_URL,
          'https://wa.me/923141030223',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: 'Custom web applications and AI automation for growing businesses.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
