import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  schemaType?: 'Organization' | 'Service' | 'CaseStudy' | 'FAQ';
  customSchema?: Record<string, unknown>;
}

const SITE_URL = 'https://www.axorks.com';
const SITE_NAME = 'AXORKS Technologies';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  customSchema,
}) => {
  const fullCanonical = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // 3. Update canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonical);

    // 4. Inject or update JSON-LD schema
    const schemaId = 'axorks-seo-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Organization', 'ProfessionalService'],
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          legalName: 'Axorks Pvt Limited',
          url: SITE_URL,
          logo: `${SITE_URL}/Logos/axorks_full_logo.png`,
          image: `${SITE_URL}/Logos/axorks_monogram.png`,
          description:
            'AI automation studio and custom software engineering company with physical offices in Karachi and Islamabad. Fixed-price web platforms, multi-agent AI pipelines, and mobile apps from $1,000.',
          telephone: '+923141030223',
          email: 'contact@axorks.com',
          priceRange: '$1,000 - $25,000+',
          address: [
            {
              '@type': 'PostalAddress',
              streetAddress: 'Gulshan-e-Iqbal Block 13-A',
              addressLocality: 'Karachi',
              addressRegion: 'Sindh',
              addressCountry: 'PK',
            },
            {
              '@type': 'PostalAddress',
              streetAddress: 'Blue Area Business District',
              addressLocality: 'Islamabad',
              addressRegion: 'ICT',
              addressCountry: 'PK',
            },
          ],
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.8607,
            longitude: 67.0011,
          },
          founder: {
            '@type': 'Person',
            name: 'Muhammad Mujahid',
            jobTitle: 'Founder & Chief Systems Architect',
          },
          areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'Germany' },
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'Pakistan' },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
        customSchema || {},
      ],
    };

    scriptTag.textContent = JSON.stringify(defaultSchema);
  }, [title, description, fullCanonical, ogType, customSchema]);

  return null;
};
