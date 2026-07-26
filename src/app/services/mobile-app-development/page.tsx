import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Smartphone, CheckCircle2, HelpCircle, FileText, PhoneCall } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.mobileAppDevelopment;

export const metadata: Metadata = {
  title: 'Mobile App Development Services in Karachi — Starting at $1,200 | Axorks',
  description:
    'Cross-platform iOS and Android mobile app development in Karachi & Islamabad by Axorks. Tiered pricing: Starter ($1,200), Growth ($2,200), Premium ($3,800). Built for performance, offline sync, and fast cloud backends.',
  keywords: [
    'mobile application',
    'build mobile application',
    'karachi mobile application development',
    'mobile application development Karachi',
    'iOS mobile application development',
    'Android mobile application development',
    'cross platform mobile apps Pakistan',
    'Axorks mobile application',
  ],
  openGraph: {
    title: 'Mobile App Development Services in Karachi — Starting at $1,200 | Axorks',
    description:
      'Cross-platform iOS and Android mobile app development with 3-tier pricing ($1,200, $2,200, $3,800) by Axorks Software House.',
    url: `${SITE_URL}/services/mobile-app-development`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Services in Karachi — Starting at $1,200 | Axorks',
    description: 'Cross-platform iOS and Android app development starting at $1,200.',
  },
  alternates: {
    canonical: '/services/mobile-app-development',
  },
};

export default function MobileAppDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App Development Services in Karachi',
    serviceType: 'Mobile Application Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: serviceData.description,
    offers: serviceData.tiers.map((t) => ({
      '@type': 'Offer',
      name: `Mobile App Development — ${t.name} Tier`,
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
            { label: 'Mobile App Development' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Smartphone className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_04</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Mobile App Development Services
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Floor Pricing: <strong className="text-gold font-bold">{serviceData.floorPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">2 – 8 Weeks</strong></span>
          </div>
        </div>

        {/* Prose Overview */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House engineers cross-platform mobile applications for iOS and Android in Karachi & Islamabad, focusing on UI design, offline data sync, and fast backend connectivity.
          </p>
        </div>

        {/* 3-Tier Pricing Ladder */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-paper">
            Select Your Mobile App Development Tier
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
                        href={`/contact?service=Mobile%20App%20Development&tier=${tier.name}&cta=quote`}
                        className="flex items-center justify-center gap-1 rounded bg-signal-blue px-3 py-2 font-mono text-[11px] font-semibold uppercase text-paper hover:bg-signal-blue-hover text-center"
                      >
                        <FileText className="h-3 w-3" />
                        Quick Quote
                      </Link>
                      <Link
                        href={`/contact?service=Mobile%20App%20Development&tier=${tier.name}&cta=discovery`}
                        className="flex items-center justify-center gap-1 rounded border border-gold/40 bg-gold/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-gold hover:bg-gold/20 text-center"
                      >
                        <PhoneCall className="h-3 w-3" />
                        Book Call
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={`/contact?service=Mobile%20App%20Development&tier=${tier.name}&cta=quote`}
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
