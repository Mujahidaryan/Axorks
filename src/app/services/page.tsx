import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Code, Layout, Smartphone, Bot, Landmark, Wrench } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Services Hub | Axorks Software Studio',
  description:
    'Explore Axorks software engineering capabilities: Website Development, Web Applications, Mobile App Development, AI Integration, Government & Enterprise Solutions, and Maintenance Retainers.',
  openGraph: {
    title: 'Software Engineering Services Hub | Axorks',
    description:
      'Explore Axorks engineering offerings with transparent investment ranges, technical deliverables, and dedicated service landing pages.',
    url: `${SITE_URL}/services`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Services Hub | Axorks',
    description: 'Explore Axorks software engineering offerings and investment ranges.',
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesHubPage() {
  const services = [
    {
      id: 'website-development',
      href: '/services/website-development',
      icon: Layout,
      title: 'Website Development',
      investment: PRICING.websiteDevelopment.formattedRange,
      paragraph:
        'High-performance marketing and corporate websites built with Next.js App Router, TypeScript, and serverless infrastructure for maximum conversion and search indexing.',
    },
    {
      id: 'web-applications',
      href: '/services/web-applications',
      icon: Code,
      title: 'Web Applications & Custom Systems',
      investment: PRICING.webApplications.formattedRange,
      paragraph:
        'Full-stack dashboards, client portals, CRMs, and operational management systems featuring serverless relational databases and role-based authorization (RBAC).',
    },
    {
      id: 'mobile-app-development',
      href: '/services/mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      investment: PRICING.mobileAppDevelopment.formattedRange,
      paragraph:
        'Cross-platform iOS and Android applications engineered for fast performance, offline data synchronization, push notifications, and clean mobile interfaces.',
    },
    {
      id: 'ai-integration',
      href: '/services/ai-integration',
      icon: Bot,
      title: 'AI Integration & Automation',
      investment: PRICING.aiIntegration.formattedRange,
      paragraph:
        'Practical AI implementations integrating OpenAI APIs, automated document parsing pipelines, vector embeddings, and predictive analytics into existing web software.',
    },
    {
      id: 'government-enterprise-solutions',
      href: '/services/government-enterprise-solutions',
      icon: Landmark,
      title: 'Government & Enterprise Digital Solutions',
      investment: PRICING.governmentEnterprise.formattedRange,
      paragraph:
        'Mission-critical public-sector platforms, FWO grid telemetry dashboards, and large-scale enterprise systems compliant with international FAO/WFP standards.',
    },
    {
      id: 'maintenance-support',
      href: '/services/maintenance-support',
      icon: Wrench,
      title: 'Maintenance & Support Retainer',
      investment: PRICING.maintenanceSupport.formattedRange,
      paragraph:
        'Ongoing technical maintenance, security patch management, PostgreSQL query performance optimization, and reserved monthly development hours.',
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            SYSTEM_CAPABILITIES_HUB
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Software Engineering Services
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Select a service below to explore technical specifications, included deliverables, service-specific FAQs, and transparent investment ranges.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="schematic-bracket group flex flex-col justify-between border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 transition-colors hover:border-gold/40"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-obsidian-border pb-4">
                    <span className="font-mono text-xs text-gold">
                      SERVICE_0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-steel group-hover:text-gold transition-colors" />
                  </div>

                  <h2 className="mt-4 font-serif text-xl font-bold text-paper group-hover:text-gold transition-colors">
                    {svc.title}
                  </h2>

                  <p className="mt-3 text-xs leading-relaxed text-steel">
                    {svc.paragraph}
                  </p>
                </div>

                <div className="mt-6 space-y-4 border-t border-obsidian-border/60 pt-4">
                  <div className="font-mono text-xs text-steel">
                    <span>Typical Investment: </span>
                    <span className="font-bold text-gold">{svc.investment}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-1 font-mono text-xs text-paper hover:text-gold font-semibold transition-colors"
                    >
                      View Service Specs
                      <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(svc.title)}`}
                      className="font-mono text-[11px] text-signal-blue hover:underline"
                    >
                      Inquire →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Note */}
        <div className="mt-16 schematic-bracket border border-gold/40 bg-obsidian-raised p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                TRANSPARENT_PRICING_PHILOSOPHY
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-paper">
                Need a custom enterprise scope or multi-service quote?
              </h3>
              <p className="mt-2 text-xs text-steel">
                We provide upfront fixed-price quotes after initial technical discovery. No surprise billing or scope creep.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
            >
              Request Custom Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
