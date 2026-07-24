import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Smartphone, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Cross-Platform Mobile App Development | Axorks Software Studio',
  description:
    'High-performance cross-platform mobile applications for iOS and Android built with modern UI, offline data synchronization, and scalable cloud backends.',
  openGraph: {
    title: 'Cross-Platform Mobile App Development | Axorks',
    description:
      'Cross-platform iOS and Android applications with modern UI, offline sync, and fast cloud backends.',
    url: `${SITE_URL}/services/mobile-app-development`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross-Platform Mobile App Development | Axorks',
    description: 'Cross-platform iOS and Android applications built with modern architecture.',
  },
  alternates: {
    canonical: `${SITE_URL}/services/mobile-app-development`,
  },
};

export default function MobileAppDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App Development',
    serviceType: 'Mobile Application Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    description:
      'Cross-platform iOS and Android mobile app development with modern user interface design, offline data sync, and scalable API backends.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you build native apps for both iOS and Android?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build high-performance cross-platform mobile apps targeting both iOS and Android from a single codebase, delivering native performance without dual codebase costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can mobile apps connect to our existing web application database?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We engineer mobile backends to seamlessly integrate with your existing PostgreSQL, MongoDB, or REST/GraphQL web APIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical investment for a mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Typical investment ranges from ${PRICING.mobileAppDevelopment.formattedRange} depending on offline sync requirements, push notification triggers, and store deployment assistance.`,
        },
      },
    ],
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-mono text-xs text-steel transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to All Services
        </Link>

        <div className="mt-6 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Smartphone className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_03</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Mobile App Development
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Typical Investment: <strong className="text-gold font-bold">{PRICING.mobileAppDevelopment.formattedRange}</strong></span>
            <span>·</span>
            <span>Delivery SLA: <strong className="text-paper">4 – 8 Weeks</strong></span>
          </div>
        </div>

        {/* Rich Factual Prose */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks engineers cross-platform mobile applications for iOS and Android, focusing on modern UI design, offline data synchronization, and fast backend connectivity. Designed for startups, field operations teams, and growing enterprises, our mobile solutions extend your core business software directly onto mobile devices.
          </p>

          <p>
            By utilizing efficient cross-platform mobile frameworks paired with serverless REST APIs, we eliminate the unnecessary costs of building two separate native codebases while guaranteeing 60fps smooth animations, native device feature access (camera, location, push notifications), and local data caching.
          </p>

          <p>
            Our mobile development service covers UI/UX wireframing, API integration, local caching mechanisms, store publishing compliance guidance (Apple App Store & Google Play), and post-launch maintenance.
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mt-10 schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-paper mb-4">
            What's Included in Mobile App Development
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-steel">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Cross-Platform iOS & Android Native Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Offline Data Caching & Automatic Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Push Notification Setup & In-App Triggers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Secure Authentication & JWT Token Management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>App Store & Google Play Submission Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Full Source Code Ownership & API Docs</span>
            </div>
          </div>
        </div>

        {/* Service FAQ Block */}
        <div className="mt-12 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-paper flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-gold" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                Do you build native apps for both iOS and Android?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                We build high-performance cross-platform mobile apps targeting both iOS and Android from a single codebase, delivering native performance without dual codebase costs.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                Can mobile apps connect to our existing web application database?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Yes. We engineer mobile backends to seamlessly integrate with your existing PostgreSQL, MongoDB, or REST/GraphQL web APIs.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What is the typical investment for a mobile app?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Typical investment ranges from {PRICING.mobileAppDevelopment.formattedRange} depending on offline sync requirements, push notification triggers, and store deployment assistance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA & Internal Navigation Links */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-obsidian-border pt-8 sm:flex-row">
          <div className="flex items-center gap-4 text-xs font-mono text-steel">
            <Link href="/case-studies" className="hover:text-paper transition-colors">
              Explore Case Studies →
            </Link>
            <span>·</span>
            <Link href="/process" className="hover:text-paper transition-colors">
              View Our Process →
            </Link>
          </div>

          <Link
            href="/contact?service=Mobile%20App%20Development"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Inquire for Mobile App Development
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
