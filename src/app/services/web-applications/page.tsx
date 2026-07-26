import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Code, CheckCircle2, HelpCircle, FileText, PhoneCall } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.webApplications;

export const metadata: Metadata = {
  title: 'Web Applications & Custom Systems Karachi — Starting at $2,200 | Axorks',
  description:
    'Custom web application development in Karachi & Islamabad by Axorks Software House. Tiered pricing: Growth ($2,200), Premium ($4,000). Built with Next.js, TypeScript, and serverless Postgres.',
  keywords: [
    'web and custom application',
    'custom web application development',
    'web application development Karachi',
    'custom web app company Pakistan',
    'enterprise software solutions',
    'Next.js web applications',
    'Axorks web and custom application',
  ],
  openGraph: {
    title: 'Web Applications & Custom Systems Karachi — Starting at $2,200 | Axorks',
    description:
      'Full-stack web application development, dashboards, client portals, and CRMs built with Next.js, TypeScript, and serverless Postgres by Axorks Software House.',
    url: `${SITE_URL}/services/web-applications`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Applications & Custom Systems Karachi — Starting at $2,200 | Axorks',
    description: 'Full-stack web applications and internal tools built with Next.js and PostgreSQL.',
  },
  alternates: {
    canonical: '/services/web-applications',
  },
};

export default function WebApplicationsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Applications & Custom Systems Development in Karachi',
    serviceType: 'Custom Software & Web Application Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: serviceData.description,
    offers: serviceData.tiers.map((t) => ({
      '@type': 'Offer',
      name: `Web Applications — ${t.name} Tier`,
      price: t.priceUsd,
      priceCurrency: 'USD',
      description: t.outcome,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: t.priceUsd,
        priceCurrency: 'USD',
        unitText: 'project',
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is there no Starter tier for Web Applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Full custom systems require multi-role authorization, serverless database architecture, and strict security logic that cannot be delivered properly at a cut-rate price without sacrificing quality or system stability.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tech stack does Axorks use for web applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build custom web applications with Next.js App Router, TypeScript, Node.js REST APIs, serverless PostgreSQL (Neon), Prisma ORM, and Tailwind CSS.',
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
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Web Applications' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Code className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_02</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Web Applications & Custom Systems Services
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Floor Pricing: <strong className="text-gold font-bold">{serviceData.floorPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">3 – 8 Weeks</strong></span>
          </div>
        </div>

        {/* Prose Overview */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House architects full-stack web applications, internal operational dashboards, client portals, and CRMs tailored to complex business demands in Karachi & Islamabad. Engineered with Next.js App Router, TypeScript, Node.js, and serverless PostgreSQL.
          </p>
        </div>

        {/* Tier Pricing Ladder (Growth & Premium) */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-paper">
            Select Your Web Application Engagement Tier
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {serviceData.tiers.map((tier) => (
              <div
                key={tier.name}
                className="schematic-bracket flex flex-col justify-between border border-gold/50 bg-obsidian-raised p-6 space-y-6 shadow-[0_0_20px_rgba(201,162,75,0.08)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                    <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                      {tier.name} TIER
                    </span>
                    <span className="font-mono text-[11px] text-steel">{tier.turnaround}</span>
                  </div>

                  <div>
                    <div className="font-serif text-3xl font-bold text-paper">{tier.formattedPrice}</div>
                    <p className="mt-2 text-xs leading-relaxed text-steel italic">"{tier.outcome}"</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-obsidian-border/60">
                    <span className="font-mono text-[10px] uppercase text-gold font-bold block">Deliverables:</span>
                    <ul className="space-y-2 text-xs text-steel">
                      {tier.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-obsidian-border">
                  {tier.ctaType === 'quote_or_discovery' ? (
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/contact?service=Web%20Applications%20%26%20Custom%20Systems&tier=${tier.name}&cta=quote`}
                        className="flex items-center justify-center gap-1 rounded bg-signal-blue px-3 py-2 font-mono text-[11px] font-semibold uppercase text-paper hover:bg-signal-blue-hover text-center"
                      >
                        <FileText className="h-3 w-3" />
                        Quick Quote
                      </Link>
                      <Link
                        href={`/contact?service=Web%20Applications%20%26%20Custom%20Systems&tier=${tier.name}&cta=discovery`}
                        className="flex items-center justify-center gap-1 rounded border border-gold/40 bg-gold/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-gold hover:bg-gold/20 text-center"
                      >
                        <PhoneCall className="h-3 w-3" />
                        Book Call
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={`/contact?service=Web%20Applications%20%26%20Custom%20Systems&tier=${tier.name}&cta=quote`}
                      className="flex items-center justify-center gap-2 w-full rounded bg-signal-blue px-4 py-2.5 font-mono text-xs font-semibold uppercase text-paper hover:bg-signal-blue-hover transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Get a Quick Quote
                    </Link>
                  )}
                </div>
              </div>
            ))}
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
                Why is there no Starter tier for Web Applications?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Full custom systems require multi-role authorization, serverless database architecture, and strict security logic that cannot be delivered properly at a cut-rate price without sacrificing quality or system stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
