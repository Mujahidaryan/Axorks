'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PaymentTermsNote from '@/components/PaymentTermsNote';
import TestimonialsSection from '@/components/TestimonialsSection';
import InternationalFAQSection from '@/components/InternationalFAQSection';
import { ArrowUpRight, Bot, CheckCircle2, FileText, PhoneCall, ChevronDown, ChevronUp, Cpu, Database, Server, Lock, Sparkles, UserCheck } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.aiIntegration;

export default function AiIntegrationPage() {
  const [showTechnicalOverview, setShowTechnicalOverview] = useState(false);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Solutions & Automation',
    serviceType: 'AI Engineering & Dashboard Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description: serviceData.description,
    offers: serviceData.tiers.map((t) => ({
      '@type': 'Offer',
      name: `AI Solutions — ${t.name} Tier`,
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
            { label: 'AI Solutions & Automation' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Bot className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_02</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            AI Solutions & Automation Services
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Lead Entry Price: <strong className="text-gold font-bold">{serviceData.leadPrice}</strong></span>
            <span>·</span>
            <span>SLA: <strong className="text-paper">1 – 5 Weeks</strong></span>
          </div>
        </div>

        {/* Prose Overview (Plain Language — Jargon Free) */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House builds practical AI automations that integrate intelligent assistants, document parsing features, and automated workflows directly into your business software. We focus on high-ROI business tools that save manual hours and streamline daily operations.
          </p>
        </div>

        {/* Risk-Reversal Payment Structure Note Banner */}
        <PaymentTermsNote />

        {/* 3-Tier Pricing Ladder with Full Deliverable Checklists */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-paper">
            Select Your AI Automation Tier
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.tiers.map((tier) => {
              const isPremium = tier.name === 'Premium';

              if (isPremium) {
                return (
                  <div
                    key={tier.name}
                    className="schematic-bracket flex flex-col justify-between border border-gold/60 bg-obsidian-raised p-6 space-y-6 shadow-[0_0_25px_rgba(201,162,75,0.12)]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                        <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                          PREMIUM TIER · BESPOKE ARCHITECTURE
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
                        <span>You work directly with Founder & Chief Architect Muhammad Mujahid — not handed off to an account manager.</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-obsidian-border">
                      <Link
                        href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=Premium&cta=discovery`}
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
                    tier.name === 'Starter'
                      ? 'border-gold/60 shadow-[0_0_20px_rgba(201,162,75,0.12)]'
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
                      <span className="font-mono text-[10px] uppercase text-gold font-bold block">
                        Deliverables ({tier.deliverables.length} Items):
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

                  <div className="pt-4 border-t border-obsidian-border">
                    <Link
                      href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=${tier.name}&cta=quote`}
                      className="flex items-center justify-center gap-2 w-full rounded bg-signal-blue px-4 py-2.5 font-mono text-xs font-semibold uppercase text-paper hover:bg-signal-blue-hover transition-colors"
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

        {/* Expandable "See the Detailed Overview" Section for Technical Visitors */}
        <div className="mt-12 pt-6 border-t border-obsidian-border">
          <button
            onClick={() => setShowTechnicalOverview(!showTechnicalOverview)}
            className="w-full flex items-center justify-between rounded border border-gold/40 bg-obsidian-raised p-5 font-mono text-xs font-semibold text-gold hover:bg-gold/10 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-gold" />
              {showTechnicalOverview
                ? 'Hide Detailed Technical Overview'
                : 'See the Detailed Overview (Technical Architecture Breakdown)'}
            </span>
            {showTechnicalOverview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {showTechnicalOverview && (
            <div className="mt-4 schematic-bracket border border-obsidian-border bg-obsidian p-6 space-y-6 text-xs text-steel leading-relaxed animate-fadeIn">
              <div className="border-b border-obsidian-border pb-3">
                <span className="font-mono text-xs font-bold text-paper uppercase block">
                  TECHNICAL ARCHITECTURE & API INTEGRATION SPECS
                </span>
                <p className="mt-1 text-steel">
                  Detailed technical breakdown for engineering leads and CTOs evaluating AI pipeline architecture.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded border border-obsidian-border bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Server className="h-4 w-4" />
                    Model APIs & LLM Pipeline
                  </div>
                  <p className="text-[11px] text-steel">
                    Integration with OpenAI GPT-4o, Claude 3.5 Sonnet, and custom fine-tuned endpoints. Asynchronous queue management via Redis/NATS for non-blocking UI threads.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Database className="h-4 w-4" />
                    Vector Embeddings & Retrieval (RAG)
                  </div>
                  <p className="text-[11px] text-steel">
                    pgvector embeddings within serverless PostgreSQL (Neon) for semantic document search, context retrieval, and low-latency FAQ matching.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Cpu className="h-4 w-4" />
                    Token Optimization & Cache Layer
                  </div>
                  <p className="text-[11px] text-steel">
                    Response caching, prompt compression, and strict rate-limiting middleware to keep monthly OpenAI API operating costs predictable.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Lock className="h-4 w-4" />
                    Data Isolation & Privacy Security
                  </div>
                  <p className="text-[11px] text-steel">
                    Zero model training on client data options, encrypted API key storage, and SOC2/HIPAA compliant data processing protocols.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Client Testimonials Structure */}
        <div className="mt-16">
          <TestimonialsSection />
        </div>

        {/* International Client Objection Handling FAQ */}
        <div className="mt-16">
          <InternationalFAQSection />
        </div>
      </div>
    </div>
  );
}
