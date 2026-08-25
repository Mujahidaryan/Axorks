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
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        {/* Ambient background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[34rem] w-[34rem] opacity-50" />
          <div className="exec-mesh mesh-teal-dark absolute -right-24 bottom-0 h-[26rem] w-[26rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services & Tiered Pricing' }]} />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            {/* Left column */}
            <div className="space-y-6">
              <div className="exec-eyebrow exec-eyebrow-gold">
                <ShieldCheck className="h-4 w-4 text-gold" />
                <span>PRODUCTIZED_SOFTWARE_SERVICES_&_TIERS</span>
              </div>

              <h1 className="font-serif text-hero font-bold leading-tight tracking-tight text-paper sm:text-display">
                Software Engineering{' '}
                <span className="gradient-text-gold">Services</span>
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-steel sm:text-base">
                Every software service leads with transparent entry pricing and milestone deliverables. Explore full
                deliverable checklists, expand Professional or Enterprise tiers, or schedule a technical discovery call
                directly with Chief Systems Architect Muhammad Mujahid.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="/contact?cta=discovery" className="btn btn-gold">
                  <PhoneCall className="h-4 w-4" />
                  Book a Discovery Call
                </a>
                <a href="#website-development" className="btn btn-outline-dark">
                  <FileText className="h-4 w-4" />
                  Explore Pricing Tiers
                </a>
              </div>
            </div>

            {/* Right column — trust metrics panel */}
            <div className="space-y-3">
              <div className="glass-card-dark rounded-2xl p-5">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-gold truncate min-w-0">
                    Transparent Pricing Ladder
                  </span>
                  <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-400 leading-none select-none">
                    <span className="h-1.5 w-1.5 shrink-0 animate-pulse-soft rounded-full bg-emerald-400" />
                    <span className="leading-none tracking-wide">Live</span>
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Entry Landings', value: 'From $1,000' },
                    { label: 'Live Systems', value: '6+' },
                    { label: 'Milestone Billing', value: '40/40/20' },
                    { label: 'Response SLA', value: '<24 h' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/10 bg-obsidian/80 p-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-steel">{m.label}</div>
                      <div className="mt-1 font-serif text-lg font-bold text-paper">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="px-2 font-mono text-[11px] text-steel">
                Configuration beats jargon — fixed milestone plans, live staging, zero hidden scope.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
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
                className="glass-card-dark relative overflow-hidden rounded-3xl p-6 sm:p-10"
              >
                {/* Gold hairline top */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
                  <div className="space-y-2">
                    <div className="exec-eyebrow exec-eyebrow-gold">
                      <Icon className="h-4 w-4 text-gold" />
                      <span>SERVICE_0{sIdx + 1} · {sData.title.toUpperCase()}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
                      {sData.title}
                    </h2>
                    <p className="text-xs text-steel max-w-2xl leading-relaxed">
                      {sData.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 shrink-0 rounded-xl border border-gold/25 bg-obsidian/80 p-4 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]">
                    <span className="font-mono text-[10px] uppercase text-steel">Lead Entry Price:</span>
                    <span className="font-serif text-3xl font-bold gradient-text-gold">
                      Starting at {sData.leadPrice}
                    </span>
                    <Link
                      href={cat.detailHref}
                      className="font-mono text-xs text-gold hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      View Full Specifications Page
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Lead Tier Prominent Display */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                      PRIMARY OFFER · {leadTier.name.toUpperCase()} TIER ({leadTier.formattedPrice})
                    </span>
                    <span className="font-mono text-xs text-steel">Turnaround: {leadTier.turnaround}</span>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-obsidian p-6 shadow-obsidian-md space-y-6">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <div>
                        <div className="font-serif text-2xl font-bold text-paper">{leadTier.formattedPrice}</div>
                        <p className="text-xs text-steel italic mt-1">"{leadTier.outcome}"</p>
                      </div>
                      <Link
                        href={`/contact?service=${encodeURIComponent(sData.title)}&tier=${leadTier.name}&cta=quote`}
                        className="btn btn-primary inline-flex shrink-0 items-center justify-center gap-2"
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
                <div className="pt-6">
                  <button
                    onClick={() => toggleExpand(cat.id)}
                    className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-obsidian/60 px-5 py-3.5 font-mono text-xs font-semibold text-paper hover:border-gold/40 hover:text-gold transition-colors"
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
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Professional Tier */}
                    {sData.tiers.find((t) => t.name === 'Professional') && (
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-card flex flex-col justify-between p-6 space-y-6 shadow-obsidian-md">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
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

                          <div className="space-y-2 pt-2 border-t border-white/10">
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

                        <div className="pt-4 border-t border-white/10">
                          <Link
                            href={`/contact?service=${encodeURIComponent(sData.title)}&tier=Professional&cta=quote`}
                            className="btn btn-primary flex w-full items-center justify-center gap-2"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            Get a Quick Quote
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Enterprise Tier Narrative Rework */}
                    {sData.tiers.find((t) => t.name === 'Enterprise') && (
                      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/40 bg-obsidian p-6 space-y-6 shadow-[0_0_30px_rgba(201,162,75,0.1)]">
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
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
                          <div className="space-y-2.5 pt-2 border-t border-white/10">
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
                          <div className="rounded-xl border border-gold/25 bg-gold/10 p-3.5 text-xs font-mono">
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
                        <div className="pt-4 border-t border-white/10">
                          <Link
                            href={`/contact?service=${encodeURIComponent(sData.title)}&tier=Enterprise&cta=discovery`}
                            className="btn btn-gold flex w-full items-center justify-center gap-2"
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
        <div className="relative overflow-hidden rounded-3xl border border-gold/35 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-8 sm:p-10 shadow-obsidian-lg">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(201,162,75,0.7), transparent 70%)' }}
          />

          <div className="relative z-10 space-y-6">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <Landmark className="h-5 w-5 text-gold" />
              <span>CUSTOM_ENGINEERING · NO_PUBLIC_PRICING</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
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
                className="btn btn-gold shrink-0"
              >
                <PhoneCall className="h-4 w-4" />
                Book a Discovery Call
              </Link>
            </div>
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
