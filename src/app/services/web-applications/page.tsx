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
import { ArrowUpRight, Code, CheckCircle2, FileText, PhoneCall, Sparkles, UserCheck } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.webApplications;

export const metadata: Metadata = {
  title: 'Custom Web Applications & Enterprise Software — Starting at $3,500 | Axorks',
  description:
    'Full-stack custom web application development for businesses across the UK, US, EU, and worldwide. Tiered engagement: Starter ($3,500), Professional ($8,000), Enterprise ($20,000+). Built with Next.js App Router, TypeScript, and serverless Postgres.',
  keywords: [
    'custom web application development',
    'enterprise software solutions',
    'b2b SaaS development US',
    'custom CRM development UK',
    'Next.js serverless web apps',
    'Axorks custom web software',
  ],
  openGraph: {
    title: 'Custom Web Applications & Enterprise Software — Starting at $3,500 | Axorks',
    description:
      'Full-stack custom web application development, dashboards, client portals, and SaaS platforms built with Next.js App Router and serverless PostgreSQL for global decision-makers.',
    url: `${SITE_URL}/services/web-applications`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Applications & Enterprise Software — Starting at $3,500 | Axorks',
    description: 'Full-stack web applications and internal software platforms built with Next.js and PostgreSQL.',
  },
  alternates: {
    canonical: '/services/web-applications',
  },
};

export default function WebApplicationsPage() {
  const webAppTechChoices: TechChoice[] = [
    {
      name: 'Next.js App Router (Full-Stack)',
      category: 'Architecture',
      whySelected:
        'Enables unified full-stack React server components with zero-bundle API routing and instant serverless rendering.',
      businessOutcome:
        'Fast time-to-market, zero server infrastructure management, and high security for client portals and internal tools.',
    },
    {
      name: 'Serverless PostgreSQL (Neon DB)',
      category: 'Database',
      whySelected:
        'Delivers full ACID relational database compliance, branching workflows, and dynamic auto-scaling serverless capacity.',
      businessOutcome:
        'Strict data integrity, zero downtime under traffic spikes, and dynamic cost optimization based on query usage.',
    },
    {
      name: 'Prisma ORM & TypeScript',
      category: 'Data Layer',
      whySelected:
        'Provides end-to-end type safety from database models down to React UI components, preventing query bugs.',
      businessOutcome:
        'Predictable system stability, fast feature iterations, and error-free multi-tenant data isolation.',
    },
    {
      name: 'NextAuth / Jose Auth Middleware',
      category: 'Security & Access Control',
      whySelected:
        'Role-Based Access Control (RBAC), multi-factor authentication capability, JWT session signing, and encrypted cookie storage.',
      businessOutcome:
        'Enterprise data protection, multi-user role security, and total compliance with international security standards.',
    },
  ];

  const webAppFaqs = [
    {
      question: 'How long does custom web application development take?',
      answer:
        'Starter builds (custom single-purpose tools, dashboards, internal portals) take ~2–3 weeks. Professional builds take ~3–5 weeks. Enterprise platforms (full custom CRM/ERP-lite, multi-role auth) take ~4–8 weeks.',
    },
    {
      question: 'Can you work with our internal development team?',
      answer:
        'Yes. We collaborate closely with in-house technical leads and CTOs, delivering modular codebases, OpenAPI specifications, and clean PR documentation.',
    },
    {
      question: 'How do you ensure data security and isolation?',
      answer:
        'We implement encrypted database connections, JWT token rotation, strict CORS rules, environment variable isolation, and OWASP top 10 protection.',
    },
    {
      question: 'Who owns the intellectual property and code?',
      answer:
        'You retain 100% ownership of all custom source code, database schemas, and IP upon project completion and final payment.',
    },
    {
      question: 'Do you offer monthly maintenance and retainer options?',
      answer:
        'Yes. We provide monthly retainer plans covering infrastructure monitoring, performance optimization, feature additions, and security updates.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Web Applications & Enterprise Software Development',
    serviceType: 'Custom Software & Web Application Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['United Kingdom', 'United States', 'European Union', 'United Arab Emirates', 'Worldwide'],
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
            { label: 'Web Applications' },
          ]}
        />

        {/* SECTION 1: VALUE PROPOSITION */}
        <div className="border-b border-obsidian-border pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
            <Code className="h-3.5 w-3.5" />
            <span>CUSTOM_SOFTWARE_ENGINEERING</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Custom Web Applications & Enterprise Systems
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
            Axorks architects full-stack custom web applications, internal operational dashboards, client portals, and CRMs tailored to complex business demands across global markets. Engineered with Next.js App Router, TypeScript, Node.js, and serverless PostgreSQL to replace legacy manual workflows with automated software systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-steel pt-2">
            <span>Lead Entry Price: <strong className="text-gold font-bold">Starting at {serviceData.leadPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">3 – 8 Weeks</strong></span>
            <span>·</span>
            <span>Code Ownership: <strong className="text-gold">100% Client Owned</strong></span>
          </div>
        </div>

        {/* Risk-Reversal Payment Structure Note Banner */}
        <PaymentTermsNote />

        {/* Tier Pricing Ladder (Starter, Professional & Enterprise) */}
        <div className="space-y-6">
          <div className="border-b border-obsidian-border pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
              Select Your Web Application Engagement Tier
            </h2>
            <p className="text-xs text-steel mt-1">
              Transparent, milestone-based pricing for full-stack custom systems. Three tiers designed to match your project scope and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
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

                      {/* Founder Access Line */}
                      <div className="text-[11px] font-mono text-steel flex items-start gap-1.5 pt-1">
                        <UserCheck className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                        <span>You collaborate directly with Chief Systems Architect Muhammad Mujahid and senior engineers — zero account-manager handoff.</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-obsidian-border">
                      <Link
                        href={`/contact?service=Web%20Applications%20%26%20Custom%20Systems&tier=Enterprise&cta=discovery`}
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
                      href={`/contact?service=Web%20Applications%20%26%20Custom%20Systems&tier=${tier.name}&cta=quote`}
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
          heading="Why We Build Applications with Next.js & Serverless Postgres"
          subheading="We select full-stack Next.js and Neon serverless PostgreSQL to guarantee dynamic auto-scaling, data integrity, and strict security isolation."
          techChoices={webAppTechChoices}
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
          title="Web Applications FAQ"
          subtitle="Direct technical answers regarding multi-tenant security, system timelines, source code ownership, and retainers."
          faqs={webAppFaqs}
        />

        {/* SECTION 10: CALL TO ACTION */}
        <ServiceCTA
          serviceName="Web Applications & Custom Systems"
          heading="Ready to Engineer Your Custom Software Platform?"
          subheading="Discuss your software architecture directly with Chief Systems Architect Muhammad Mujahid. We map out data models, role permissions, and a milestone proposal."
          primaryCtaText="Talk to a Systems Architect"
          secondaryCtaText="Request Technical Scoping"
        />
      </div>
    </div>
  );
}
