import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Wrench, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Maintenance & Support Retainer Services | Axorks Studio',
  description:
    'Dedicated engineering maintenance, security patch management, database performance tuning, and feature updates on a predictable monthly retainer.',
  openGraph: {
    title: 'Maintenance & Support Retainer Services | Axorks',
    description:
      'Dedicated engineering maintenance, security patches, database optimization, and uptime monitoring on a predictable monthly retainer.',
    url: `${SITE_URL}/services/maintenance-support`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maintenance & Support Retainer Services | Axorks',
    description: 'Dedicated engineering maintenance, security patches, and database optimization.',
  },
  alternates: {
    canonical: `${SITE_URL}/services/maintenance-support`,
  },
};

export default function MaintenanceSupportPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Maintenance & Support Retainer',
    serviceType: 'Software Maintenance & SLA Support',
    provider: {
      '@type': 'Organization',
      name: 'Axorks',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    description:
      'Predictable monthly software maintenance retainers including security patch updates, database query performance tuning, uptime monitoring, and small feature rollouts.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in a monthly support retainer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our monthly retainer includes dependency security upgrades, PostgreSQL query optimization, serverless uptime monitoring, emergency bug fixes, and allocated development hours for new features.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you maintain software built by another development team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, provided the application is built on modern web stacks (Next.js, React, Node.js, Python, PostgreSQL). We perform an initial code audit before taking on maintenance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical investment for a maintenance retainer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Typical investment ranges from ${PRICING.maintenanceSupport.formattedRange} depending on allocated developer hours, database size, and SLA response time requirements.`,
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
            <Wrench className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_06</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Maintenance & Support Retainer
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Typical Investment: <strong className="text-gold font-bold">{PRICING.maintenanceSupport.formattedRange}</strong></span>
            <span>·</span>
            <span>Availability: <strong className="text-paper">Monthly Retainer SLA</strong></span>
          </div>
        </div>

        {/* Rich Factual Prose */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks provides ongoing software maintenance, database query tuning, security patching, and incremental feature updates on a predictable monthly retainer basis. Designed for production applications that require dedicated engineering availability without hiring full-time internal developers.
          </p>

          <p>
            As software scales, security vulnerabilities, third-party API deprecations, and database slow-downs can degrade user experience. Our maintenance team proactively monitors serverless logs, optimizes SQL query execution times, applies dependency patches, and resolves critical bugs within guaranteed SLA response windows.
          </p>

          <p>
            Our retainer engagement includes monthly health audit reports, prioritized bug fix tickets, database backups, dependency upgrades, and reserved engineering hours for new feature implementations.
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mt-10 schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-paper mb-4">
            What's Included in Maintenance & Support
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-steel">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Dependencies & Security Patch Management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>PostgreSQL Database EXPLAIN ANALYZE Query Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Serverless Uptime Monitoring & Error Alerting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Prioritized Bug Resolution Within SLA Response Windows</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Reserved Monthly Development Hours for Feature Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Monthly System Health Audit Reports</span>
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
                What is included in a monthly support retainer?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Our monthly retainer includes dependency security upgrades, PostgreSQL query optimization, serverless uptime monitoring, emergency bug fixes, and allocated development hours for new features.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                Can you maintain software built by another development team?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Yes, provided the application is built on modern web stacks (Next.js, React, Node.js, Python, PostgreSQL). We perform an initial code audit before taking on maintenance.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What is the typical investment for a maintenance retainer?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Typical investment ranges from {PRICING.maintenanceSupport.formattedRange} depending on allocated developer hours, database size, and SLA response time requirements.
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
            href="/contact?service=Maintenance%20%26%20Support%20retainer"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Inquire for Maintenance Retainer
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
