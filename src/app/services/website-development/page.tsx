import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Layout, CheckCircle2, HelpCircle, FileText, PhoneCall } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.websiteDevelopment;

export const metadata: Metadata = {
  title: 'Website Development Services in Karachi — Starting at $600 | Axorks',
  description:
    'Custom website development services in Karachi & Islamabad by Axorks Software House. Tiered pricing: Starter ($600), Growth ($1,200), Premium ($2,000). Built with Next.js App Router, TypeScript, and serverless technology.',
  keywords: [
    'website development Karachi',
    'custom website development',
    'web development company Karachi',
    'website development services Pakistan',
    'Next.js website development',
    'software house website development',
    'Axorks website development',
  ],
  openGraph: {
    title: 'Website Development Services in Karachi — Starting at $600 | Axorks',
    description:
      'Custom website development in Karachi with 3-tier pricing ($600, $1,200, $2,000) built with Next.js App Router and TypeScript by Axorks Software House.',
    url: `${SITE_URL}/services/website-development`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services in Karachi — Starting at $600 | Axorks',
    description: 'Custom website development services in Karachi starting at $600 built with Next.js.',
  },
  alternates: {
    canonical: '/services/website-development',
  },
};

export default function WebsiteDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development Services in Karachi',
    serviceType: 'Custom Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: serviceData.description,
    offers: serviceData.tiers.map((t) => ({
      '@type': 'Offer',
      name: `Website Development — ${t.name} Tier`,
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
        name: 'Why does Axorks use Next.js instead of WordPress for website development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js delivers sub-second page loads, zero plugin security vulnerabilities, superior search engine crawlability, and total design customization without heavy page builder overhead.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the $600 Starter Tier?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The $600 Starter tier delivers a single-page responsive landing site built with Next.js 14 & Tailwind CSS, serverless contact form, 1 round of revisions, and SSL deployment within ~1–2 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a custom website development project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Starter builds take ~1–2 weeks, Growth builds take ~2–3 weeks, and Premium custom builds take ~3–4 weeks from content alignment.',
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
            { label: 'Website Development' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Layout className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_01</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Custom Website Development Services in Karachi
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Floor Pricing: <strong className="text-gold font-bold">{serviceData.floorPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">1 – 4 Weeks</strong></span>
          </div>
        </div>

        {/* Prose Overview */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House engineers high-performance custom website development solutions built with Next.js App Router, TypeScript, and serverless cloud infrastructure in Karachi & Islamabad. Designed for technical founders, growing businesses, and agencies, our websites replace bloated page builders with clean code.
          </p>
        </div>

        {/* 3-Tier Pricing Ladder */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-paper">
            Select Your Website Development Tier
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`schematic-bracket flex flex-col justify-between border bg-obsidian-raised p-6 space-y-6 ${
                  tier.name === 'Growth' || tier.name === 'Premium'
                    ? 'border-gold/50 shadow-[0_0_20px_rgba(201,162,75,0.08)]'
                    : 'border-obsidian-border'
                }`}
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
                        href={`/contact?service=Custom%20Website%20Development&tier=${tier.name}&cta=quote`}
                        className="flex items-center justify-center gap-1 rounded bg-signal-blue px-3 py-2 font-mono text-[11px] font-semibold uppercase text-paper hover:bg-signal-blue-hover text-center"
                      >
                        <FileText className="h-3 w-3" />
                        Quick Quote
                      </Link>
                      <Link
                        href={`/contact?service=Custom%20Website%20Development&tier=${tier.name}&cta=discovery`}
                        className="flex items-center justify-center gap-1 rounded border border-gold/40 bg-gold/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-gold hover:bg-gold/20 text-center"
                      >
                        <PhoneCall className="h-3 w-3" />
                        Book Call
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={`/contact?service=Custom%20Website%20Development&tier=${tier.name}&cta=quote`}
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
                Why does Axorks use Next.js instead of WordPress for website development?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Next.js delivers sub-second page loads, zero plugin security vulnerabilities, superior search engine crawlability, and total design customization without heavy page builder overhead.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What is included in the $600 Starter Tier?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                The $600 Starter tier delivers a single-page responsive landing site built with Next.js 14 & Tailwind CSS, serverless contact form, 1 round of revisions, and SSL deployment within ~1–2 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
