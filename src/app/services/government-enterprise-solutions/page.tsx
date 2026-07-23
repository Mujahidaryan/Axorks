import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Landmark, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Government & Enterprise Software Solutions | Axorks Studio',
  description:
    'Mission-critical public sector systems, FWO grid telemetry platforms, and enterprise digital solutions compliant with international FAO/WFP standards.',
  openGraph: {
    title: 'Government & Enterprise Software Solutions | Axorks',
    description:
      'High-reliability public sector dashboards, FWO grid telemetry platforms, and enterprise digital solutions compliant with international standards.',
    url: `${SITE_URL}/services/government-enterprise-solutions`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government & Enterprise Software Solutions | Axorks',
    description: 'High-reliability public sector dashboards and FWO grid telemetry platforms.',
  },
  alternates: {
    canonical: `${SITE_URL}/services/government-enterprise-solutions`,
  },
};

export default function GovernmentEnterpriseSolutionsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Government & Enterprise Digital Solutions',
    serviceType: 'Enterprise Software Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Axorks',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    description:
      'Mission-critical public sector digital platforms, FWO grid telemetry systems, and enterprise solutions compliant with international FAO/WFP humanitarian standards.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What experience does Axorks have in public sector software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our technical founder and engineering team have architected national-scale systems including AgroTrace (connected to FWO grid telemetry) and the Sindh Food Security Dashboard (monitoring 25.45M population across 8 districts under FAO/WFP standards).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle strict data privacy and NDA compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We adhere to strict cryptographic data security standards, enterprise non-disclosure agreements (NDAs), and permissioned role-based access control (RBAC).',
        },
      },
      {
        '@type': 'Question',
        name: 'How are government and enterprise solutions priced?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Government and enterprise digital solutions are priced via upfront custom quotation following formal technical discovery, SLA definition, and compliance scoping.',
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
            <Landmark className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_05</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Government & Enterprise Digital Solutions
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Typical Investment: <strong className="text-gold font-bold">Custom Quotation (Fixed Scope / SLA)</strong></span>
            <span>·</span>
            <span>Delivery SLA: <strong className="text-paper">Scoped Per Requirements</strong></span>
          </div>
        </div>

        {/* Rich Factual Prose */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks architects mission-critical public sector systems and enterprise digital platforms designed for high-concurrency usage, rigorous auditability, and international compliance. Our technical leadership brings proven experience in building platforms connected to FWO grid telemetry and regional humanitarian monitoring dashboards compliant with FAO/WFP operational standards.
          </p>

          <p>
            Public sector and large-scale enterprise environments demand zero-downtime reliability, role-based authorization hierarchies, and immutable transaction audit trails. We engineer custom web dashboards that consolidate fragmented field reports into unified, executive-level decision matrices.
          </p>

          <p>
            Our enterprise engagement covers technical architecture discovery, compliance auditing, data pipeline setup, high-availability serverless deployment, and long-term SLA support agreements.
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mt-10 schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-paper mb-4">
            What's Included in Government & Enterprise Solutions
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-steel">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>High-Availability Serverless Architecture (Next.js & Postgres)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>FWO Grid & Infrastructure Telemetry Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>FAO/WFP International Humanitarian Protocol Alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Permissioned Role-Based Access Control (RBAC) & Multi-Role Auth</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Cryptographic Audit Logging & Immutable Record Lookup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Dedicated Enterprise SLA & Security Maintenance</span>
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
                What experience does Axorks have in public sector software?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Our technical founder and engineering team have architected national-scale systems including AgroTrace (connected to FWO grid telemetry) and the Sindh Food Security Dashboard (monitoring 25.45M population across 8 districts under FAO/WFP standards).
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                How do you handle strict data privacy and NDA compliance?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                We adhere to strict cryptographic data security standards, enterprise non-disclosure agreements (NDAs), and permissioned role-based access control (RBAC).
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                How are government and enterprise solutions priced?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Government and enterprise digital solutions are priced via upfront custom quotation following formal technical discovery, SLA definition, and compliance scoping.
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
            href="/contact?service=Government%20%26%20Enterprise%20Digital%20Solutions"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Inquire for Enterprise Solutions
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
