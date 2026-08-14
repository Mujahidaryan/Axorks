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
import { ArrowUpRight, Smartphone, CheckCircle2, FileText, PhoneCall, Sparkles, UserCheck } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.mobileAppDevelopment;

export const metadata: Metadata = {
  title: 'Cross-Platform Mobile App Development — Starting at $4,000 | Axorks',
  description:
    'Cross-platform iOS and Android mobile application engineering for clients in the UK, US, EU, and worldwide. Tiered pricing: Starter ($4,000), Professional ($10,000), Enterprise ($25,000+). Built for high performance, offline data sync, and cloud backends.',
  keywords: [
    'cross platform mobile app development',
    'iOS and Android app engineering',
    'custom mobile apps US',
    'mobile application development UK',
    'react native flutter engineering',
    'Axorks mobile application',
  ],
  openGraph: {
    title: 'Cross-Platform Mobile App Development — Starting at $4,000 | Axorks',
    description:
      'Cross-platform iOS and Android mobile app development with 3-tier pricing ($4,000, $10,000, $25,000+) engineered by Axorks Software House for global clients.',
    url: `${SITE_URL}/services/mobile-app-development`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross-Platform Mobile App Development — Starting at $4,000 | Axorks',
    description: 'Cross-platform iOS and Android app development starting at $4,000 built for global scale.',
  },
  alternates: {
    canonical: '/services/mobile-app-development',
  },
};

export default function MobileAppDevelopmentPage() {
  const mobileTechChoices: TechChoice[] = [
    {
      name: 'React Native & Flutter',
      category: 'Cross-Platform Framework',
      whySelected:
        'Enables native performance on both iOS and Android from a single unified codebase.',
      businessOutcome:
        'Reduces development timeline by 50% while guaranteeing 60fps smooth UI animations across all mobile devices.',
    },
    {
      name: 'SQLite / WatermelonDB',
      category: 'Local Storage Engine',
      whySelected:
        'Provides local relational database storage on mobile devices with background thread synchronization.',
      businessOutcome:
        'Enables seamless offline operation for mobile users with automatic cloud sync when connectivity returns.',
    },
    {
      name: 'Node.js & Serverless REST APIs',
      category: 'Backend Cloud API',
      whySelected:
        'Lightweight, event-driven backend microservices providing fast JSON response payloads.',
      businessOutcome:
        'Sub-100ms API response times, instant push notification triggers, and low cloud hosting overhead.',
    },
    {
      name: 'Firebase & Apple Push Notification (APNs)',
      category: 'Notification Engine',
      whySelected:
        'Enterprise push notification infrastructure with user segment targeting and background payload delivery.',
      businessOutcome:
        'Higher user retention, instant transactional alerts, and automated user re-engagement campaigns.',
    },
  ];

  const mobileFaqs = [
    {
      question: 'Do you build native apps for both iOS and Android?',
      answer:
        'Yes. We utilize cross-platform engineering (React Native / Flutter) to compile native iOS (Swift runtime) and Android (Kotlin runtime) applications from a single secure codebase.',
    },
    {
      question: 'Do you handle Apple App Store and Google Play Store deployment?',
      answer:
        'Yes. Every mobile app project includes full store submission management: developer account setup, screenshot formatting, privacy policy compliance, and review approval.',
    },
    {
      question: 'How does offline data synchronization work?',
      answer:
        'Apps store user actions locally in an encrypted database (SQLite/WatermelonDB) during offline states and automatically sync changes to the cloud backend once connectivity is re-established.',
    },
    {
      question: 'Who owns the mobile application source code?',
      answer:
        'You own 100% of the mobile app source code, assets, and App Store credentials upon project completion and final milestone payment.',
    },
    {
      question: 'What is the typical mobile app development timeline?',
      answer:
        'Starter builds take ~2–3 weeks, Professional applications take ~4–6 weeks, and Enterprise mobile platforms take ~6–8 weeks.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cross-Platform Mobile App Development Services',
    serviceType: 'Mobile Application Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['United Kingdom', 'United States', 'European Union', 'United Arab Emirates', 'Worldwide'],
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
    <div className="space-y-16 sm:space-y-24">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>

      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        {/* Ambient background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[34rem] w-[34rem] opacity-50" />
          <div className="exec-mesh mesh-teal-dark absolute -right-24 bottom-0 h-[26rem] w-[26rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Mobile App Development' },
            ]}
          />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <Smartphone className="h-4 w-4 text-gold" />
              <span>CROSS_PLATFORM_MOBILE_ENGINEERING</span>
            </div>

            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Cross-Platform Mobile{' '}
              <span className="gradient-text-gold">App Engineering</span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
              Axorks engineers high-performance cross-platform mobile applications for iOS and Android, focusing on bespoke UI design, offline data synchronization, role-based security, and cloud backend connectivity for global businesses across the UK, US, EU, and worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-5">
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                Lead Entry Price: <strong className="text-gold font-bold">Starting at {serviceData.leadPrice}</strong>
              </span>
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                SLA: <strong className="text-paper">2 – 8 Weeks</strong>
              </span>
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                App Store Approval: <strong className="text-gold">Guaranteed Handoff</strong>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Risk-Reversal Payment Structure Note Banner */}
        <PaymentTermsNote />

        {/* 3-Tier Pricing Ladder */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
              Select Your Mobile App Development Tier
            </h2>
            <p className="text-xs text-steel mt-1">
              Transparent, fixed milestone pricing for cross-platform iOS & Android mobile software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.tiers.map((tier) => {
              const isPremium = tier.name === 'Enterprise';

              if (isPremium) {
                return (
                  <div
                    key={tier.name}
                    className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/40 bg-obsidian p-6 space-y-6 shadow-[0_0_30px_rgba(201,162,75,0.1)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
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
                      <div className="space-y-2 pt-2 border-t border-white/10">
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
                      <div className="rounded-xl border border-gold/25 bg-gold/10 p-3.5 text-xs font-mono">
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

                    <div className="pt-4 border-t border-white/10">
                      <Link
                        href={`/contact?service=Mobile%20App%20Development&tier=Enterprise&cta=discovery`}
                        className="btn btn-gold flex w-full items-center justify-center gap-2"
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
                  className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-obsidian-card p-6 space-y-6 shadow-obsidian-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                        {tier.name} TIER
                      </span>
                      <span className="font-mono text-[11px] text-steel">{tier.turnaround}</span>
                    </div>

                    <div>
                      <div className="font-serif text-3xl font-bold text-paper">{tier.formattedPrice}</div>
                      <p className="mt-2 text-xs leading-relaxed text-steel italic">"{tier.outcome}"</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
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

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={`/contact?service=Mobile%20App%20Development&tier=${tier.name}&cta=quote`}
                      className="btn btn-primary flex w-full items-center justify-center gap-2"
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
          heading="Why We Build Mobile Apps with React Native & Flutter"
          subheading="We select cross-platform mobile frameworks to ship native iOS and Android apps from a unified codebase without compromising frame rate or hardware API access."
          techChoices={mobileTechChoices}
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
          title="Mobile App Development FAQ"
          subtitle="Direct technical answers regarding App Store approval, offline sync, code ownership, and native performance."
          faqs={mobileFaqs}
        />

        {/* SECTION 10: CALL TO ACTION */}
        <ServiceCTA
          serviceName="Mobile App Development"
          heading="Ready to Build Your Custom Mobile Application?"
          subheading="Schedule a technical discovery call with Chief Systems Architect Muhammad Mujahid to map out mobile user flows, offline storage requirements, and App Store approval milestones."
          primaryCtaText="Talk to a Mobile Architect"
          secondaryCtaText="Request Scoped Quote"
        />
      </div>
    </div>
  );
}
