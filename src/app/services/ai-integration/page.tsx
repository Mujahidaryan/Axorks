import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Bot, CheckCircle2, HelpCircle, FileText, PhoneCall } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.aiIntegration;

export const metadata: Metadata = {
  title: 'AI Solutions & Automation Services in Karachi — Starting at $900 | Axorks',
  description:
    'Practical AI solutions and automation services in Karachi & Islamabad by Axorks. Tiered pricing: Starter ($900), Growth ($1,800), Premium ($3,000). Integrating OpenAI APIs, document processing, and vector embeddings.',
  keywords: [
    'AI integrated dashboards',
    'AI automation Karachi',
    'OpenAI API integration',
    'predictive AI dashboards',
    'AI document processing',
    'custom AI solutions Pakistan',
    'Axorks AI integrated dashboards',
  ],
  openGraph: {
    title: 'AI Solutions & Automation Services in Karachi — Starting at $900 | Axorks',
    description:
      'Practical AI automation pipelines connecting OpenAI APIs, document processing, and vector embeddings by Axorks Software House.',
    url: `${SITE_URL}/services/ai-integration`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions & Automation Services — Starting at $900 | Axorks',
    description: 'Practical AI automations and document parsing pipelines starting at $900.',
  },
  alternates: {
    canonical: '/services/ai-integration',
  },
};

export default function AiIntegrationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Solutions & Automation',
    serviceType: 'AI Engineering & Dashboard Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: serviceData.description,
    offers: serviceData.tiers.map((t) => ({
      '@type': 'Offer',
      name: `AI Solutions — ${t.name} Tier`,
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

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'AI Solutions & Automation' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Bot className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_03</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            AI Solutions & Automation Services
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Floor Pricing: <strong className="text-gold font-bold">{serviceData.floorPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">1 – 5 Weeks</strong></span>
          </div>
        </div>

        {/* Prose Overview */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House delivers practical, production-ready AI automations connecting OpenAI APIs, document parsing pipelines, vector search embeddings, and predictive models directly into software applications.
          </p>
        </div>

        {/* 3-Tier Pricing Ladder */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-paper">
            Select Your AI Automation Tier
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
                        href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=${tier.name}&cta=quote`}
                        className="flex items-center justify-center gap-1 rounded bg-signal-blue px-3 py-2 font-mono text-[11px] font-semibold uppercase text-paper hover:bg-signal-blue-hover text-center"
                      >
                        <FileText className="h-3 w-3" />
                        Quick Quote
                      </Link>
                      <Link
                        href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=${tier.name}&cta=discovery`}
                        className="flex items-center justify-center gap-1 rounded border border-gold/40 bg-gold/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-gold hover:bg-gold/20 text-center"
                      >
                        <PhoneCall className="h-3 w-3" />
                        Book Call
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=${tier.name}&cta=quote`}
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
      </div>
    </div>
  );
}
