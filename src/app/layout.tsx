import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL, SITE_NAME, SITE_TAGLINE, FOUNDER_NAME } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Axorks | Founder-Led Software Studio & Systems Engineering',
    template: '%s | Axorks Software Studio',
  },
  description:
    'Axorks is a founder-led software studio engineered by Muhammad Mujahid. We architect full-stack web platforms, AI integrations, mobile apps, and public sector solutions.',
  keywords: [
    'Axorks',
    'Muhammad Mujahid',
    'Software Studio Pakistan',
    'Full Stack Web Development Karachi',
    'AI Integration Services',
    'Custom Web Applications',
    'Mobile App Development Pakistan',
    'Government Software Solutions',
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
    title: 'Axorks | Founder-Led Software Studio & Systems Engineering',
    description:
      'High-stakes software studio shipping enterprise web platforms, AI integrations, mobile applications, and public sector solutions.',
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
    title: 'Axorks | Founder-Led Software Studio',
    description:
      'High-stakes software studio shipping enterprise web platforms, AI integrations, and public sector solutions.',
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
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      'Axorks is a founder-led software studio engineered by Muhammad Mujahid. We build full-stack web applications, AI integrations, mobile apps, and enterprise systems.',
    founder: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: 'Founder & Chief Systems Architect',
      almaMater: 'Bahria University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'muhammad.mujahid.dev@gmail.com',
      telephone: '+923141030223',
      availableLanguage: ['English', 'Urdu'],
    },
    sameAs: [
      'https://github.com/Mujahidaryan',
      'https://linkedin.com/company/axorks',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
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
