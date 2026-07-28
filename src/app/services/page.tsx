'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PaymentTermsNote from '@/components/PaymentTermsNote';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseAxorks from '@/components/service/WhyChooseAxorks';
import ServiceProcess from '@/components/service/ServiceProcess';
import ProjectEstimationFramework from '@/components/service/ProjectEstimationFramework';
import AgencyComparisonTable from '@/components/service/AgencyComparisonTable';
import IndustrySolutionsSection from '@/components/service/IndustrySolutionsSection';
import InternationalFAQSection from '@/components/InternationalFAQSection';
import ServiceCTA from '@/components/service/ServiceCTA';
import { ArrowUpRight, Code, Layout, Smartphone, Bot, Landmark, CheckCircle2, PhoneCall, FileText, ChevronDown, ChevronUp, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER, CUSTOM_ENTERPRISE_SERVICE } from '@/lib/pricing';

export default function ServicesHubPage() {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({
    'website-development': false,
    'ai-integration': false,
    'mobile-app-development': false,
    'web-applications': false,
  });

  const toggleExpand = (serviceId: string) => {
    setExpandedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const serviceCategories = [
    {
      id: 'website-development',
      icon: Layout,
      data: PRICING_LADDER.websiteDevelopment,
      detailHref: '/services/website-development',
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
    {
      id: 'web-applications',
      icon: Code,
      data: PRICING_LADDER.webApplications,
      detailHref: '/services/web-applications',
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumbs items={[{ label: 'Services & Tiered Pricing' }]} />

        {/* Section Header */}
        <div className="border-b border-obsidian-border pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>PRODUCTIZED_SOFTWARE_SERVICES_&_TIERS</span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            International Software Engineering Services
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
            Every software service leads with transparent entry pricing and milestone deliverables. Explore full deliverable checklists, expand Professional or Enterprise tiers, or schedule a technical discovery call directly with Chief Systems Architect Muhammad Mujahid.
          </p>
        </div>

        {/* Risk-Reversal Payment Structure Note Banner */}
        <PaymentTermsNote />

        {/* Services Mini Pricing Blocks */}
        <div className="space-y-16">
          {serviceCategories.map((cat, sIdx) => {
            const Icon = cat.icon;
            const sData = cat.data;
            const leadTier = sData.tiers[0];
            const isExpanded = expandedServices[cat.id];

            return (
              <section
                key={cat.id}
                id={cat.id}
                className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-10 space-y-8"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-obsidian-border pb-6">
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

                  <div className="flex flex-col sm:items-end gap-2 shrink-0 bg-obsidian border border-obsidian-border p-4 rounded-lg">
                    <span className="font-mono text-[10px] uppercase text-steel">Lead Entry Price:</span>
                    <span className="font-serif text-3xl font-bold text-gold">
                      Starting at {sData.leadPrice}
                    </span>
                    <Link
                      href={cat.detailHref}
                      className="font-mono text-xs text-signal-blue hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      View Full Specifications Page
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Lead Tier Prominent Display */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                      PRIMARY OFFER · {leadTier.name.toUpperCase()} TIER ({leadTier.formattedPrice})
                    </span>
                    <span className="font-mono text-xs text-steel">Turnaround: {leadTier.turnaround}</span>
                  </div>

                  <div className="schematic-bracket border border-gold/40 bg-obsidian p-6 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-obsidian-border pb-4">
                      <div>
                        <div className="font-serif text-2xl font-bold text-paper">{leadTier.formattedPrice}</div>
                        <p className="text-xs text-steel italic mt-1">"{leadTier.outcome}"</p>
                      </div>
                      <Link
                        href={`/contact?service=${encodeURIComponent(sData.title)}&tier=${leadTier.name}&cta=quote`}
                        className="inline-flex items-center justify-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors shrink-0"
                      >
                        <FileText className="h-4 w-4" />
                        Get a Quick Quote
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <span className="font-mono text-xs font-bold text-gold uppercase block">
                        Included Deliverables ({leadTier.deliverables.length} Items):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-steel">
                        {leadTier.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand / Collapse Button */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(cat.id)}
                    className="w-full flex items-center justify-between rounded border border-obsidian-border bg-obsidian px-5 py-3.5 font-mono text-xs font-semibold text-paper hover:border-gold/40 hover:text-gold transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      {isExpanded
                        ? `Hide Professional & Enterprise Tiers for ${sData.title}`
                        : `See More Options (Professional & Enterprise Tiers for ${sData.title})`}
                    </span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>

                {/* Professional & Enterprise Expandable Drawer */}
                {isExpanded && (
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                    {/* Professional Tier */}
                    {sData.tiers.find((t) => t.name === 'Professional') && (
                      <div className="schematic-bracket flex flex-col justify-between border border-obsidian-border bg-obsidian p-6 space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                            <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                              PROFESSIONAL TIER
                            </span>
                            <span className="font-mono text-[11px] text-steel">
                              {sData.tiers.find((t) => t.name === 'Professional')?.turnaround}
                            </span>
                          </div>

                          <div>
                            <div className="font-serif text-3xl font-bold text-paper">
                              {sData.tiers.find((t) => t.name === 'Professional')?.formattedPrice}
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-steel italic">
                              "{sData.tiers.find((t) => t.name === 'Professional')?.outcome}"
                            </p>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-obsidian-border/60">
                            <span className="font-mono text-[10px] uppercase text-gold font-bold block">
                              Deliverables ({sData.tiers.find((t) => t.name === 'Professional')?.deliverables.length} Items):
                            </span>
                            <ul className="space-y-2 text-xs text-steel">
                              {sData.tiers
                                .find((t) => t.name === 'Professional')
                                ?.deliverables.map((item, dIdx) => (
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
                            href={`/contact?service=${encodeURIComponent(sData.title)}&tier=Professional&cta=quote`}
                            className="flex items-center justify-center gap-2 w-full rounded bg-signal-blue px-4 py-2.5 font-mono text-xs font-semibold uppercase text-paper hover:bg-signal-blue-hover transition-colors text-center"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            Get a Quick Quote
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Enterprise Tier Narrative Rework */}
                    {sData.tiers.find((t) => t.name === 'Enterprise') && (
                      <div className="schematic-bracket flex flex-col justify-between border border-gold/60 bg-obsidian p-6 space-y-6 shadow-[0_0_25px_rgba(201,162,75,0.12)]">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                            <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                              ENTERPRISE TIER · BESPOKE ARCHITECTURE
                            </span>
                            <span className="font-mono text-[11px] text-steel">
                              {sData.tiers.find((t) => t.name === 'Enterprise')?.turnaround}
                            </span>
                          </div>

                          <div>
                            <div className="font-serif text-3xl font-bold text-paper">
                              {sData.tiers.find((t) => t.name === 'Enterprise')?.formattedPrice}
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-steel italic">
                              "{sData.tiers.find((t) => t.name === 'Enterprise')?.outcome}"
                            </p>
                          </div>

                          {/* Narrative Outcome Highlights */}
                          <div className="space-y-2.5 pt-2 border-t border-obsidian-border/60">
                            <span className="font-mono text-[10px] uppercase text-gold font-bold block">
                              Narrative Architecture Highlights:
                            </span>
                            <ul className="space-y-2 text-xs text-steel">
                              {sData.premiumHighlights.map((hl, hIdx) => (
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
                            <Link href={sData.caseStudyLink.href} className="text-paper hover:underline inline-flex items-center gap-1 font-semibold">
                              {sData.caseStudyLink.title}
                              <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                            </Link>
                          </div>

                          {/* Direct Collaboration Differentiator Line */}
                          <div className="text-[11px] font-mono text-steel flex items-start gap-1.5 pt-1">
                            <UserCheck className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                            <span>You collaborate directly with Chief Systems Architect Muhammad Mujahid and senior engineers — zero account-manager handoff.</span>
                          </div>
                        </div>

                        {/* Enterprise CTA — Discovery Call Only */}
                        <div className="pt-4 border-t border-obsidian-border">
                          <Link
                            href={`/contact?service=${encodeURIComponent(sData.title)}&tier=Enterprise&cta=discovery`}
                            className="flex items-center justify-center gap-2 w-full rounded bg-gold px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-obsidian hover:bg-gold-hover transition-colors text-center"
                          >
                            <PhoneCall className="h-4 w-4" />
                            Let's scope this together
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Custom / Government-Scale Engineering Section */}
        <div className="schematic-bracket border border-gold/60 bg-obsidian-raised p-8 sm:p-10 space-y-6 shadow-[0_0_30px_rgba(201,162,75,0.12)]">
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
        </div>

        {/* SECTION 2: WHY INTERNATIONAL CLIENTS CHOOSE AXORKS */}
        <WhyChooseAxorks />

        {/* SECTION 4: 10-PHASE PROCESS */}
        <ServiceProcess />

        {/* SECTION 5: PROJECT ESTIMATION & ENGAGEMENT */}
        <ProjectEstimationFramework />

        {/* SECTION 6: COMPARISON TABLE */}
        <AgencyComparisonTable />

        {/* SECTION 7: INDUSTRIES SERVED */}
        <IndustrySolutionsSection />

        {/* Client Testimonials Structure Section */}
        <TestimonialsSection />

        {/* International Client Objection Handling FAQ */}
        <InternationalFAQSection />

        {/* SECTION 10: CALL TO ACTION */}
        <ServiceCTA
          serviceName="General Software Services"
          heading="Ready to Engineer Your Next Software System?"
          subheading="Book a free technical discovery call with Chief Systems Architect Muhammad Mujahid to clarify project scope, business outcomes, and milestone timelines."
          primaryCtaText="Book a Free Discovery Call"
          secondaryCtaText="Get a Quick Quote"
        />
      </div>
    </div>
  );
}
