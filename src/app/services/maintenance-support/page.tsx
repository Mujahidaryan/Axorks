import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <div className="space-y-16 sm:space-y-24">
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

      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        {/* Ambient background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[34rem] w-[34rem] opacity-50" />
          <div className="exec-mesh mesh-teal-dark absolute -right-24 bottom-0 h-[26rem] w-[26rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-steel transition-colors hover:text-paper"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Services
          </Link>

          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Maintenance & Support' },
            ]}
          />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <Wrench className="h-4 w-4 text-gold" />
              <span>CORE_SERVICE_06</span>
            </div>

            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Maintenance &{' '}
              <span className="gradient-text-gold">Support Retainer</span>
            </h1>

            <div className="flex flex-wrap items-center gap-2.5 pt-5">
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                Typical Investment: <strong className="text-gold font-bold">{PRICING.maintenanceSupport.formattedRange}</strong>
              </span>
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                Availability: <strong className="text-paper">Monthly Retainer SLA</strong>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
        <div className="mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-card p-6 sm:p-8 shadow-obsidian-md">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
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
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-card p-5 shadow-obsidian-sm">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h3 className="font-serif text-base font-bold text-paper">
                What is included in a monthly support retainer?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Our monthly retainer includes dependency security upgrades, PostgreSQL query optimization, serverless uptime monitoring, emergency bug fixes, and allocated development hours for new features.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-card p-5 shadow-obsidian-sm">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h3 className="font-serif text-base font-bold text-paper">
                Can you maintain software built by another development team?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Yes, provided the application is built on modern web stacks (Next.js, React, Node.js, Python, PostgreSQL). We perform an initial code audit before taking on maintenance.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-card p-5 shadow-obsidian-sm">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
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
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
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
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Inquire for Maintenance Retainer
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
