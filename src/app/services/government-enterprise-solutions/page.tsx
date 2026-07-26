import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Landmark, PhoneCall, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { CUSTOM_ENTERPRISE_SERVICE } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Custom Government & Enterprise Engineering | Axorks',
  description:
    'Custom software engineering for government systems, FWO grid telemetry platforms, and FAO/WFP aligned public sector solutions. Fully quote-gated via technical discovery.',
  keywords: [
    'government software solutions',
    'FWO grid telemetry',
    'FAO WFP compliance software',
    'public sector digital systems',
    'enterprise software engineering Karachi',
  ],
  openGraph: {
    title: 'Custom Government & Enterprise Engineering | Axorks',
    description:
      'Custom public sector platforms, FWO grid telemetry dashboards, and large-scale enterprise systems by Axorks Software House.',
    url: `${SITE_URL}/services/government-enterprise-solutions`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Government & Enterprise Engineering | Axorks',
    description: 'Custom public sector platforms and enterprise telemetry dashboards.',
  },
  alternates: {
    canonical: '/services/government-enterprise-solutions',
  },
};

export default function GovernmentEnterprisePage() {
  const serviceSchema = {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Custom Enterprise Engineering' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Landmark className="h-3.5 w-3.5" />
            <span>CUSTOM_ENTERPRISE_DISCOVERY</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {CUSTOM_ENTERPRISE_SERVICE.title}
          </h1>

          <div className="mt-4 inline-block rounded bg-gold/10 border border-gold/30 px-3 py-1.5 font-mono text-xs font-bold text-gold">
            {CUSTOM_ENTERPRISE_SERVICE.pricingNote}
          </div>
        </div>

        {/* Prose Overview */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House engineers custom public sector monitoring platforms, infrastructure telemetry systems connected to FWO grid streams, and international humanitarian software aligned with FAO/WFP operational standards.
          </p>

          <p>
            Due to the confidential scope, compliance requirements, and custom infrastructure needs of government and enterprise systems (such as <strong className="text-gold">AgroTrace</strong> and the <strong className="text-gold">Sindh Food Security Dashboard</strong>), we do not publish fixed numbers or floor prices for this category. All engagements are quote-gated via a technical discovery call.
          </p>
        </div>

        {/* Discovery Call Gate Box */}
        <div className="mt-10 schematic-bracket border border-gold/60 bg-obsidian-raised p-8 space-y-6 shadow-[0_0_30px_rgba(201,162,75,0.12)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-gold uppercase font-bold tracking-wider block">
                INITIATE_TECHNICAL_DISCOVERY
              </span>
              <h2 className="font-serif text-2xl font-bold text-paper">
                Schedule a Discovery Call
              </h2>
              <p className="text-xs text-steel max-w-xl leading-relaxed">
                Connect directly with Founder & Chief Architect Muhammad Mujahid to discuss project scope, security compliance, timeline milestones, and formal proposal generation.
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-steel border-t border-obsidian-border/80 pt-6">
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>Strict Mutual NDA Confidentiality</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>Detailed PDF Proposal & Milestone Terms</span>
            </div>
            <div className="flex items-start gap-2">
              <Lock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>Full Source Code & IP Handoff</span>
            </div>
          </div>
        </div>

        {/* Link to Case Studies */}
        <div className="mt-12 flex items-center justify-between border-t border-obsidian-border pt-8">
          <Link href="/case-studies" className="font-mono text-xs text-gold hover:underline inline-flex items-center gap-1">
            Explore Representative Public Sector Case Studies
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
