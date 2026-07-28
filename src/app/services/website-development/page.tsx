import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PaymentTermsNote from '@/components/PaymentTermsNote';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseAxorks from '@/components/service/WhyChooseAxorks';
import WhyThisTech, { TechChoice } from '@/components/service/WhyThisTech';
import ServiceProcess from '@/components/service/ServiceProcess';
import ProjectEstimationFramework from '@/components/service/ProjectEstimationFramework';
import AgencyComparisonTable from '@/components/service/AgencyComparisonTable';
import IndustrySolutionsSection from '@/components/service/IndustrySolutionsSection';
import ServiceFAQSection from '@/components/service/ServiceFAQSection';
import ServiceCTA from '@/components/service/ServiceCTA';
import { ArrowUpRight, Layout, CheckCircle2, FileText, PhoneCall, Sparkles, UserCheck } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.websiteDevelopment;

export const metadata: Metadata = {
  title: 'Custom & Bespoke Website Development Services — Starting at $1,000 | Axorks',
  description:
    'Bespoke website development services for businesses in the UK, US, EU, and worldwide. Tiered engagement: Starter ($1,000), Professional ($2,500), Enterprise ($5,000+). Built with Next.js App Router, TypeScript, and serverless technology.',
  keywords: [
    'bespoke website development',
    'custom website development company',
    'Next.js website engineering',
    'corporate website development UK',
    'high conversion landing sites US',
    'Axorks website development',
  ],
  openGraph: {
    title: 'Custom & Bespoke Website Development Services — Starting at $1,000 | Axorks',
    description:
      'Bespoke website development with 3-tier pricing ($1,000, $2,500, $5,000+) built with Next.js App Router and TypeScript by Axorks Software House for global decision-makers.',
    url: `${SITE_URL}/services/website-development`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom & Bespoke Website Development Services — Starting at $1,000 | Axorks',
    description: 'Bespoke website development services starting at $1,000 built with Next.js App Router.',
  },
  alternates: {
    canonical: '/services/website-development',
  },
};

export default function WebsiteDevelopmentPage() {
  const websiteTechChoices: TechChoice[] = [
    {
      name: 'Next.js 14 App Router',
      category: 'Full-Stack Framework',
      whySelected:
        'Enables hybrid server-side rendering (SSR), static generation (SSG), sub-second First Contentful Paint, and superior search engine crawlability.',
      businessOutcome:
        'Sub-second page load speeds and green Core Web Vitals scores that improve Google search rankings and lead conversion.',
    },
    {
      name: 'TypeScript',
      category: 'Language',
      whySelected:
        'Provides strict type safety across all components and server actions, eliminating runtime JavaScript errors in production.',
      businessOutcome:
        'Zero runtime code crashes, reduced maintenance overhead, and rapid bug-free feature deployment.',
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling Engine',
      whySelected:
        'Utility-first CSS compiler generating minimal production CSS bundles with zero unused style bloat.',
      businessOutcome:
        'Ultra-lightweight page weight, mobile-responsive layout consistency, and seamless dark-mode design.',
    },
    {
      name: 'Vercel Serverless Edge',
      category: 'Deployment Infrastructure',
      whySelected:
        'Global Content Delivery Network (CDN) with automatic SSL, instant edge caching, and zero server management.',
      businessOutcome:
        '99.99% uptime guarantee, enterprise DDOS protection, and instant global page loading.',
    },
  ];

  const websiteFaqs = [
    {
      question: 'How long does a custom website development project take?',
      answer:
        'Starter builds take ~1–2 weeks, Professional multi-page sites take ~2–3 weeks, and Enterprise bespoke marketing platforms take ~3–4 weeks from initial content alignment.',
    },
    {
      question: 'How is project pricing determined?',
      answer:
        'Pricing is fixed and milestone-based ($1,000 Starter, $2,500 Professional, $5,000+ Enterprise). Complex custom web platforms requiring custom backend API integrations receive a tailored discovery quote.',
    },
    {
      question: 'Who owns the source code and intellectual property after completion?',
      answer:
        'You own 100% of the source code, custom design assets, and intellectual property upon project completion and final payment. Source code is delivered directly via GitHub.',
    },
    {
      question: 'Can you sign a Non-Disclosure Agreement (NDA)?',
      answer:
        'Yes. Standing mutual NDA confidentiality is standard policy for all client engagements, protecting your trade secrets, content, and credentials.',
    },
    {
      question: 'Why does Axorks use Next.js instead of WordPress?',
      answer:
        'Next.js delivers sub-second page loads, zero plugin security vulnerabilities, superior search crawlability, and custom design flexibility without heavy page-builder bloat.',
    },
    {
      question: 'Do you provide post-launch maintenance and support?',
      answer:
        'Yes. Every project includes post-launch support (7 to 30 days depending on tier). Optional monthly retainer plans are available for continuous performance tuning and updates.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bespoke & Custom Website Development Services',
    serviceType: 'Custom Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['United Kingdom', 'United States', 'European Union', 'United Arab Emirates', 'Worldwide'],
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
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Website Development' },
          ]}
        />

        {/* SECTION 1: VALUE PROPOSITION */}
        <div className="border-b border-obsidian-border pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
            <Layout className="h-3.5 w-3.5" />
            <span>ENTERPRISE_WEB_ENGINEERING</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Custom & Bespoke Website Engineering
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
            Axorks engineers high-performance custom and bespoke website solutions built with Next.js App Router, TypeScript, and serverless cloud infrastructure. Designed specifically for founders, CEOs, and marketing leaders across the UK, US, EU, and worldwide who require sub-second load times, superior search visibility, and maximum lead conversion.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-steel pt-2">
            <span>Lead Entry Price: <strong className="text-gold font-bold">Starting at {serviceData.leadPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">1 – 4 Weeks</strong></span>
            <span>·</span>
            <span>Code Ownership: <strong className="text-gold">100% Client Owned</strong></span>
          </div>
        </div>

        {/* Risk-Reversal Payment Structure Note Banner */}
        <PaymentTermsNote />

        {/* 3-Tier Pricing Ladder */}
        <div className="space-y-6">
          <div className="border-b border-obsidian-border pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
              Select Your Website Development Tier
            </h2>
            <p className="text-xs text-steel mt-1">
              Transparent, fixed milestone pricing. Starter & Professional tiers include line-item deliverable checklists; Enterprise tier delivers bespoke custom architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.tiers.map((tier) => {
              const isPremium = tier.name === 'Enterprise';

              if (isPremium) {
                return (
                  <div
                    key={tier.name}
                    className="schematic-bracket flex flex-col justify-between border border-gold/60 bg-obsidian-raised p-6 space-y-6 shadow-[0_0_25px_rgba(201,162,75,0.12)]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                        <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                          ENTERPRISE TIER · BESPOKE ARCHITECTURE
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

                      {/* Direct Access Line */}
                      <div className="text-[11px] font-mono text-steel flex items-start gap-1.5 pt-1">
                        <UserCheck className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                        <span>You collaborate directly with Chief Systems Architect Muhammad Mujahid and senior engineers — zero account-manager handoff.</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-obsidian-border">
                      <Link
                        href={`/contact?service=Custom%20Website%20Development&tier=Enterprise&cta=discovery`}
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
                    tier.name === 'Professional'
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
                      className="flex items-center justify-center gap-2 w-full rounded bg-signal-blue px-4 py-2.5 font-mono text-xs font-semibold uppercase text-paper hover:bg-signal-blue-hover transition-colors text-center"
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

        {/* SECTION 2: WHY INTERNATIONAL CLIENTS CHOOSE AXORKS */}
        <WhyChooseAxorks />

        {/* SECTION 3: WHY THIS TECHNOLOGY */}
        <WhyThisTech
          heading="Why We Architect Websites with Next.js & TypeScript"
          subheading="We replace heavy page builders and legacy CMS monoliths with clean, serverless Next.js architecture engineered for sub-second speeds and search engine dominancy."
          techChoices={websiteTechChoices}
        />

        {/* SECTION 4: 10-PHASE PROCESS */}
        <ServiceProcess />

        {/* SECTION 5: PROJECT ESTIMATION & ENGAGEMENT */}
        <ProjectEstimationFramework />

        {/* SECTION 6: COMPARISON TABLE */}
        <AgencyComparisonTable />

        {/* SECTION 7: INDUSTRIES SERVED */}
        <IndustrySolutionsSection />

        {/* CLIENT TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
        <ServiceFAQSection
          title="Website Development FAQ"
          subtitle="Direct technical answers regarding website build SLA, code ownership, Next.js tech stack, and post-launch maintenance."
          faqs={websiteFaqs}
        />

        {/* SECTION 10: CALL TO ACTION */}
        <ServiceCTA
          serviceName="Custom Website Development"
          heading="Ready to Engineer Your Bespoke Web Platform?"
          subheading="Schedule a technical discovery call with Chief Systems Architect Muhammad Mujahid to map out your site architecture, performance SLA, and milestone plan."
          primaryCtaText="Talk to a Web Architect"
          secondaryCtaText="Request Scoped Quote"
        />
      </div>
    </div>
  );
}
