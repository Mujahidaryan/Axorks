import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Code, Layout, Smartphone, Bot, Landmark, CheckCircle2, PhoneCall, FileText, Info } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER, CUSTOM_ENTERPRISE_SERVICE, PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Custom Software & Website Development Services — Starting at $600 | Axorks',
  description:
    'Explore Axorks software engineering tiers in Karachi & Islamabad: Custom Website Development (from $600), Web Applications (from $2,200), AI Automations (from $900), Mobile Apps (from $1,200), and Custom Enterprise Engineering.',
  openGraph: {
    title: 'Software Development Services & Tiered Pricing | Axorks',
    description:
      'Tiered pricing ladders for Custom Websites, Web Applications, AI Automations, and Mobile Apps. Custom enterprise discovery for large-scale platforms.',
    url: `${SITE_URL}/services`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Services & Tiered Pricing | Axorks',
    description: 'Tiered pricing ladders for Custom Websites, Web Applications, AI Automations, and Mobile Apps.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesHubPage() {
  const serviceCategories = [
    {
      id: 'website-development',
      icon: Layout,
      data: PRICING_LADDER.websiteDevelopment,
      detailHref: '/services/website-development',
    },
    {
      id: 'web-applications',
      icon: Code,
      data: PRICING_LADDER.webApplications,
      detailHref: '/services/web-applications',
    },
    {
      id: 'ai-integration',
      icon: Bot,
      data: PRICING_LADDER.aiIntegration,
      detailHref: '/services/ai-integration',
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      data: PRICING_LADDER.mobileAppDevelopment,
      detailHref: '/services/mobile-app-development',
    },
  ];

  // Service Schemas with Nested Offers
  const serviceOfferSchemas = serviceCategories.map((cat) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cat.data.title,
    serviceType: cat.data.title,
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: cat.data.description,
    offers: cat.data.tiers.map((t) => ({
      '@type': 'Offer',
      name: `${cat.data.title} — ${t.name} Tier`,
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
  }));

  const customServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: CUSTOM_ENTERPRISE_SERVICE.title,
    serviceType: 'Government & Enterprise Custom Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: CUSTOM_ENTERPRISE_SERVICE.description,
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        {serviceOfferSchemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(customServiceSchema) }}
        />
      </head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services & Tiered Pricing' }]} />

        {/* Section Header */}
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            PRODUCTIZED_SOFTWARE_TIERS_&_ENGAGEMENT
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Software Engineering Services & Tiered Pricing
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Transparent floor pricing for productized software offers, paired with custom discovery calls for large-scale enterprise engineering.
          </p>
        </div>

        {/* Services Mini Pricing Blocks */}
        <div className="mt-12 space-y-16">
          {serviceCategories.map((cat, sIdx) => {
            const Icon = cat.icon;
            const sData = cat.data;
            return (
              <section
                key={cat.id}
                id={cat.id}
                className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-10 space-y-8"
              >
                {/* Service Block Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-obsidian-border pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-gold">
                      <Icon className="h-4 w-4" />
                      <span>SERVICE_0{sIdx + 1} · {sData.title.toUpperCase()}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
                      {sData.title}
                    </h2>
                    <p className="text-xs text-steel max-w-2xl leading-relaxed">
                      {sData.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 shrink-0">
                    <span className="font-mono text-xs text-gold font-bold bg-gold/10 border border-gold/30 px-3 py-1.5 rounded">
                      {sData.floorPrice}
                    </span>
                    <Link
                      href={cat.detailHref}
                      className="font-mono text-xs text-signal-blue hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      View Full Specifications
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Tier Cards Grid */}
                <div
                  className={`grid grid-cols-1 gap-6 ${
                    sData.tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3'
                  }`}
                >
                  {sData.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`schematic-bracket flex flex-col justify-between border bg-obsidian p-6 space-y-6 transition-colors ${
                        tier.name === 'Growth' || tier.name === 'Premium'
                          ? 'border-gold/50 shadow-[0_0_20px_rgba(201,162,75,0.08)]'
                          : 'border-obsidian-border hover:border-steel/40'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                          <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                            {tier.name} TIER
                          </span>
                          <span className="font-mono text-[11px] text-steel">
                            {tier.turnaround}
                          </span>
                        </div>

                        <div>
                          <div className="font-serif text-3xl font-bold text-paper">
                            {tier.formattedPrice}
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-steel italic">
                            "{tier.outcome}"
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-obsidian-border/60">
                          <span className="font-mono text-[10px] uppercase text-gold font-bold block">
                            Key Deliverables:
                          </span>
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

                      {/* Tier CTAs */}
                      <div className="pt-4 border-t border-obsidian-border space-y-2">
                        {tier.ctaType === 'quote_or_discovery' ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <Link
                              href={`/contact?service=${encodeURIComponent(
                                sData.title
                              )}&tier=${tier.name}&cta=quote`}
                              className="flex items-center justify-center gap-1.5 rounded bg-signal-blue px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors text-center"
                            >
                              <FileText className="h-3 w-3" />
                              Quick Quote
                            </Link>
                            <Link
                              href={`/contact?service=${encodeURIComponent(
                                sData.title
                              )}&tier=${tier.name}&cta=discovery`}
                              className="flex items-center justify-center gap-1.5 rounded border border-gold/40 bg-gold/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold hover:bg-gold/20 transition-colors text-center"
                            >
                              <PhoneCall className="h-3 w-3" />
                              Book Call
                            </Link>
                          </div>
                        ) : (
                          <Link
                            href={`/contact?service=${encodeURIComponent(
                              sData.title
                            )}&tier=${tier.name}&cta=quote`}
                            className="flex items-center justify-center gap-2 w-full rounded bg-signal-blue px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            Get a Quick Quote
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Distinct Section: Custom / Government-Scale Engineering */}
        <div className="mt-16 schematic-bracket border border-gold/60 bg-obsidian-raised p-8 sm:p-10 space-y-6 shadow-[0_0_30px_rgba(201,162,75,0.12)]">
          <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-wider">
            <Landmark className="h-5 w-5" />
            <span>CUSTOM_ENGINEERING · NO_PUBLIC_PRICING</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-obsidian-border pb-6">
            <div className="max-w-3xl space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
                {CUSTOM_ENTERPRISE_SERVICE.title}
              </h2>
              <p className="text-xs font-mono text-gold font-semibold">
                {CUSTOM_ENTERPRISE_SERVICE.subtitle}
              </p>
              <p className="text-xs text-steel leading-relaxed">
                {CUSTOM_ENTERPRISE_SERVICE.description}
              </p>
            </div>

            <Link
              href="/contact?service=Government%20%26%20Enterprise%20Digital%20Solutions&cta=discovery"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-gold px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian hover:bg-gold-hover transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Discovery Call
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-steel">
            <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-1">
              <span className="text-gold font-bold block">1. Technical Discovery</span>
              <p className="text-[11px] leading-relaxed">Detailed scope alignment, architecture analysis, and compliance specification.</p>
            </div>
            <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-1">
              <span className="text-gold font-bold block">2. Custom Scoped Proposal</span>
              <p className="text-[11px] leading-relaxed">Formal PDF proposal delivered with milestone deliverables, timeline, and security terms.</p>
            </div>
            <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-1">
              <span className="text-gold font-bold block">3. Phased Execution</span>
              <p className="text-[11px] leading-relaxed">Dedicated engineering sprints, staging environments, and repository handoff.</p>
            </div>
          </div>
        </div>

        {/* Proof & Case Studies Alignment Section */}
        <div className="mt-16 schematic-bracket border border-obsidian-border bg-obsidian-raised p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                PUBLIC_SECTOR_&_PROVEN_SYSTEMS
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-paper">
                Explore Representative Systems Architecture
              </h3>
              <p className="mt-2 text-xs text-steel">
                Review AgroTrace (FWO Grid), Sindh Food Security (FAO/WFP), and IPMI-OS quant platform case studies.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded border border-gold/40 bg-obsidian-raised px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-gold/10 transition-colors"
            >
              View Representative Case Studies
              <ArrowUpRight className="h-4 w-4 text-gold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
