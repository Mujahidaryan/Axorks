import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhyChooseAxorks from '@/components/service/WhyChooseAxorks';
import WhyThisTech, { TechChoice } from '@/components/service/WhyThisTech';
import ServiceProcess from '@/components/service/ServiceProcess';
import ProjectEstimationFramework from '@/components/service/ProjectEstimationFramework';
import AgencyComparisonTable from '@/components/service/AgencyComparisonTable';
import IndustrySolutionsSection from '@/components/service/IndustrySolutionsSection';
import ServiceFAQSection from '@/components/service/ServiceFAQSection';
import ServiceCTA from '@/components/service/ServiceCTA';
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
    'enterprise software engineering',
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
  const enterpriseTechChoices: TechChoice[] = [
    {
      name: 'Next.js & TypeScript',
      category: 'Application Core',
      whySelected:
        'Delivers server-rendered security isolation, strict static typing, and robust RBAC middleware.',
      businessOutcome:
        'Zero unauthorized data access, sub-second dashboard load times, and high system reliability.',
    },
    {
      name: 'FWO Grid Telemetry & REST APIs',
      category: 'IoT & Telemetry Integration',
      whySelected:
        'Ingests real-time sensor streams and thermal log data over low-bandwidth intermittent cellular links.',
      businessOutcome:
        'Instant anomaly detection, thermal breach alerts, and real-time cold-chain compliance tracking.',
    },
    {
      name: 'PostgreSQL & pgvector (Neon)',
      category: 'Database Infrastructure',
      whySelected:
        'ACID-compliant relational database storage with integrated spatial indexing and vector similarity search.',
      businessOutcome:
        'Enterprise-grade data integrity, rapid district geographical spatial queries, and long-term audit trail persistence.',
    },
    {
      name: 'FAO / WFP Standard Reporting Engines',
      category: 'Public Sector Compliance',
      whySelected:
        'Implements international IPC Phase Classification reporting algorithms and CSV export streams.',
      businessOutcome:
        'Instant compliance with international humanitarian standards and rapid executive decision dispatch.',
    },
  ];

  const enterpriseFaqs = [
    {
      question: 'Why are government and enterprise projects quote-gated?',
      answer:
        'Public sector platforms, telemetry grid systems, and multi-agency software require customized security compliance, custom data pipelines, and multi-stakeholder approval workflows that cannot be represented by fixed floor prices.',
    },
    {
      question: 'Can Axorks execute projects under strict non-disclosure agreements (NDAs)?',
      answer:
        'Yes. We sign binding mutual NDAs prior to initial technical scoping, ensuring full confidentiality for public sector and enterprise infrastructure projects.',
    },
    {
      question: 'How do you handle compliance and audit trails?',
      answer:
        'We architect immutable database audit logs, role-based access control (RBAC), and detailed CSV/PDF export capabilities compliant with FAO/WFP and international audit standards.',
    },
    {
      question: 'Who retains the intellectual property and source code?',
      answer:
        'The client or contracting public sector entity retains 100% ownership of all custom source code, schemas, and system documentation upon project completion.',
    },
  ];

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
    areaServed: ['United Kingdom', 'United States', 'European Union', 'United Arab Emirates', 'Worldwide'],
    description: CUSTOM_ENTERPRISE_SERVICE.description,
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
            { label: 'Custom Enterprise Engineering' },
          ]}
        />

        {/* SECTION 1: VALUE PROPOSITION */}
        <div className="border-b border-obsidian-border pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
            <Landmark className="h-3.5 w-3.5" />
            <span>ENTERPRISE_&_PUBLIC_SECTOR_ENGINEERING</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {CUSTOM_ENTERPRISE_SERVICE.title}
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
            Axorks Software House engineers custom public sector monitoring platforms, infrastructure telemetry systems connected to FWO grid streams, and international humanitarian software aligned with FAO/WFP operational standards.
          </p>

          <div className="inline-block rounded bg-gold/10 border border-gold/30 px-3 py-1.5 font-mono text-xs font-bold text-gold">
            {CUSTOM_ENTERPRISE_SERVICE.pricingNote}
          </div>
        </div>

        {/* Discovery Call Gate Box */}
        <div className="schematic-bracket border border-gold/60 bg-obsidian-raised p-8 space-y-6 shadow-[0_0_30px_rgba(201,162,75,0.12)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-gold uppercase font-bold tracking-wider block">
                INITIATE_TECHNICAL_DISCOVERY
              </span>
              <h2 className="font-serif text-2xl font-bold text-paper">
                Schedule a Discovery Call
              </h2>
              <p className="text-xs text-steel max-w-xl leading-relaxed">
                Connect directly with Chief Systems Architect Muhammad Mujahid to discuss project scope, security compliance, timeline milestones, and formal proposal generation.
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

        {/* SECTION 2: WHY INTERNATIONAL CLIENTS CHOOSE AXORKS */}
        <WhyChooseAxorks />

        {/* SECTION 3: WHY THIS TECHNOLOGY */}
        <WhyThisTech
          heading="Why We Select High-Stakes Public Sector Architecture"
          subheading="Telemetry streams and public sector decision dashboards require zero latency lag, immutable audit logging, and international compliance standardization."
          techChoices={enterpriseTechChoices}
        />

        {/* SECTION 4: 10-PHASE PROCESS */}
        <ServiceProcess />

        {/* SECTION 5: PROJECT ESTIMATION & ENGAGEMENT */}
        <ProjectEstimationFramework />

        {/* SECTION 6: COMPARISON TABLE */}
        <AgencyComparisonTable />

        {/* SECTION 7: INDUSTRIES SERVED */}
        <IndustrySolutionsSection />

        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
        <ServiceFAQSection
          title="Government & Enterprise FAQ"
          subtitle="Direct answers regarding project NDA compliance, quote gating, audit trails, and IP ownership."
          faqs={enterpriseFaqs}
        />

        {/* SECTION 10: CALL TO ACTION */}
        <ServiceCTA
          serviceName="Government & Enterprise Digital Solutions"
          heading="Ready to Engineer Custom Public Sector Infrastructure?"
          subheading="Schedule a technical consultation directly with Chief Systems Architect Muhammad Mujahid to map out compliance frameworks, telemetry integrations, and milestone terms."
          primaryCtaText="Talk to Chief Architect"
          secondaryCtaText="Request Scoped Proposal"
        />
      </div>
    </div>
  );
}
