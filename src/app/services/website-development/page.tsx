import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PaymentTermsNote from '@/components/PaymentTermsNote';
import TestimonialsSection from '@/components/TestimonialsSection';
import InternationalFAQSection from '@/components/InternationalFAQSection';
import { ArrowUpRight, Layout, CheckCircle2, FileText, PhoneCall, Sparkles, UserCheck } from 'lucide-react';
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
            <span>Lead Entry Price: <strong className="text-gold font-bold">Starting at {serviceData.leadPrice}</strong></span>
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

        {/* Risk-Reversal Payment Structure Note Banner */}
        <PaymentTermsNote />

        {/* 3-Tier Pricing Ladder */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-paper">
            Select Your Website Development Tier
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.tiers.map((tier) => {
              const isPremium = tier.name === 'Premium';

              if (isPremium) {
                return (
                  <div
                    key={tier.name}
                    className="schematic-bracket flex flex-col justify-between border border-gold/60 bg-obsidian-raised p-6 space-y-6 shadow-[0_0_25px_rgba(201,162,75,0.12)]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                        <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                          PREMIUM TIER · BESPOKE ARCHITECTURE
                        </span>
                        <span className="font-mono text-[11px] text-steel">{tier.turnaround}</span>
                      </div>

                      <div>
                        <div className="font-serif text-3xl font-bold text-paper">{tier.formattedPrice}</div>
                        <p className="mt-2 text-xs leading-relaxed text-steel italic">"{tier.outcome}"</p>
                      </div>

                      {/* Narrative Highlights */}
                      <div className="space-y-2 pt-2 border-t border-obsidian-border/60">
                        <span className="font-mono text-[10px] uppercase text-gold font-bold block">
                          Narrative Architecture Highlights:
                        </span>
                        <ul className="space-y-2 text-xs text-steel">
                          {serviceData.premiumHighlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <Sparkles className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Case Study Embedding */}
                      <div className="rounded border border-gold/30 bg-gold/10 p-3 text-xs font-mono">
                        <span className="text-gold font-bold block mb-1">Architectural Case Reference:</span>
                        <Link href={serviceData.caseStudyLink.href} className="text-paper hover:underline inline-flex items-center gap-1 font-semibold">
                          {serviceData.caseStudyLink.title}
                          <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                        </Link>
                      </div>

                      {/* Founder Access Line */}
                      <div className="text-[11px] font-mono text-steel flex items-start gap-1.5 pt-1">
                        <UserCheck className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                        <span>You work directly with Founder & Chief Architect Muhammad Mujahid — not handed off to an account manager.</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-obsidian-border">
                      <Link
                        href={`/contact?service=Custom%20Website%20Development&tier=Premium&cta=discovery`}
                        className="flex items-center justify-center gap-2 w-full rounded bg-gold px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-obsidian hover:bg-gold-hover transition-colors text-center"
                      >
                        <PhoneCall className="h-4 w-4" />
                        Let's scope this together
                      </Link>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={tier.name}
                  className={`schematic-bracket flex flex-col justify-between border bg-obsidian-raised p-6 space-y-6 ${
                    tier.name === 'Growth'
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
                      <span className="font-mono text-[10px] uppercase text-gold font-bold block">Deliverables ({tier.deliverables.length} Items):</span>
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
                    <Link
                      href={`/contact?service=Custom%20Website%20Development&tier=${tier.name}&cta=quote`}
                      className="flex items-center justify-center gap-2 w-full rounded bg-signal-blue px-4 py-2.5 font-mono text-xs font-semibold uppercase text-paper hover:bg-signal-blue-hover transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Get a Quick Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials Structure */}
        <div className="mt-16">
          <TestimonialsSection />
        </div>

        {/* International Client Objection Handling FAQ */}
        <div className="mt-16">
          <InternationalFAQSection />
        </div>
      </div>
    </div>
  );
}
