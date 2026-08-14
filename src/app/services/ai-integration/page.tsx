'use client';

import { useState } from 'react';
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
import { ArrowUpRight, Bot, CheckCircle2, FileText, PhoneCall, ChevronDown, ChevronUp, Cpu, Database, Server, Lock, Sparkles, UserCheck } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING_LADDER } from '@/lib/pricing';

const serviceData = PRICING_LADDER.aiIntegration;

export default function AiIntegrationPage() {
  const [showTechnicalOverview, setShowTechnicalOverview] = useState(false);

  const aiTechChoices: TechChoice[] = [
    {
      name: 'OpenAI GPT-4o & Claude 3.5 Sonnet',
      category: 'LLM Engines',
      whySelected:
        'Industry-leading reasoning capability, multimodal vision processing, and structured JSON output mode.',
      businessOutcome:
        'Automates manual document processing, data extraction, and customer inquiry response with human-level accuracy.',
    },
    {
      name: 'pgvector & Serverless Postgres',
      category: 'Vector Database (RAG)',
      whySelected:
        'Integrates vector embeddings directly inside your relational database without needing external vector services.',
      businessOutcome:
        'Sub-second semantic search over internal company knowledge bases with zero extra database infrastructure overhead.',
    },
    {
      name: 'Python (LangChain / LlamaIndex)',
      category: 'AI Pipeline Framework',
      whySelected:
        'Robust ecosystem for prompt chaining, agentic workflows, document chunking, and PDF parsing pipelines.',
      businessOutcome:
        'Rapid deployment of enterprise RAG search tools and automated report generation workflows.',
    },
    {
      name: 'Token Optimization Middleware',
      category: 'Cost Control',
      whySelected:
        'Implements semantic caching, prompt truncation, and response pre-filtering before sending requests to API vendors.',
      businessOutcome:
        'Reduces monthly OpenAI/Anthropic API bill costs by up to 60% while maintaining instant response times.',
    },
  ];

  const aiFaqs = [
    {
      question: 'Will our proprietary business data be used to train public AI models?',
      answer:
        'No. We configure enterprise zero-data-retention API endpoints (OpenAI Enterprise / Anthropic API) where client data is strictly excluded from any AI model training.',
    },
    {
      question: 'How do you prevent AI model hallucinations?',
      answer:
        'We utilize strict Retrieval-Augmented Generation (RAG) pipelines that constrain LLM answers exclusively to your verified internal document context, including source citations.',
    },
    {
      question: 'What are the ongoing monthly costs of running an AI integration?',
      answer:
        'Monthly costs consist of raw LLM token API usage (typically $20–$150/month for SMBs depending on volume) plus optional hosting maintenance. We optimize prompts to keep API bills low.',
    },
    {
      question: 'How long does an AI automation project take to complete?',
      answer:
        'Starter integrations take ~1–2 weeks, Professional automated document/support pipelines take ~2–3 weeks, and Enterprise custom agentic platforms take ~3–5 weeks.',
    },
    {
      question: 'Who owns the custom AI workflow code and prompt templates?',
      answer:
        'You own 100% of the custom prompt templates, Python middleware, vector database schemas, and integration source code.',
    },
  ];

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
    areaServed: ['United Kingdom', 'United States', 'European Union', 'United Arab Emirates', 'Worldwide'],
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
              { label: 'AI Solutions & Automation' },
            ]}
          />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <Bot className="h-4 w-4 text-gold" />
              <span>AI_SOLUTIONS_&_WORKFLOW_AUTOMATION</span>
            </div>

            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              AI Solutions & Business{' '}
              <span className="gradient-text-gold">Workflow Automation</span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
              Axorks builds practical AI automations that integrate intelligent assistants, document parsing pipelines, and automated workflows directly into your business software. We focus on high-ROI business tools that eliminate manual data entry hours and streamline daily operations for companies in the UK, US, EU, and worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-5">
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                Lead Entry Price: <strong className="text-gold font-bold">Starting at {serviceData.leadPrice}</strong>
              </span>
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                SLA: <strong className="text-paper">1 – 5 Weeks</strong>
              </span>
              <span className="rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel">
                Data Privacy: <strong className="text-gold">Zero AI Training on Your Data</strong>
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
              Select Your AI Automation Tier
            </h2>
            <p className="text-xs text-steel mt-1">
              Fixed milestone pricing for custom AI assistants, semantic document search (RAG), and intelligent pipeline automations.
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
                        href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=Enterprise&cta=discovery`}
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

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={`/contact?service=AI%20Solutions%20%26%20Automation&tier=${tier.name}&cta=quote`}
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

        {/* Expandable "See the Detailed Overview" Section for Technical Visitors */}
        <div className="pt-2">
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
            <div className="mt-4 relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian p-6 space-y-6 text-xs text-steel leading-relaxed animate-fade-in shadow-obsidian-md">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <div className="border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-paper uppercase block">
                  TECHNICAL ARCHITECTURE & API INTEGRATION SPECS
                </span>
                <p className="mt-1 text-steel">
                  Detailed technical breakdown for engineering leads and CTOs evaluating AI pipeline architecture.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Server className="h-4 w-4" />
                    Model APIs & LLM Pipeline
                  </div>
                  <p className="text-[11px] text-steel">
                    Integration with OpenAI GPT-4o, Claude 3.5 Sonnet, and custom fine-tuned endpoints. Asynchronous queue management via Redis/NATS for non-blocking UI threads.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Database className="h-4 w-4" />
                    Vector Embeddings & Retrieval (RAG)
                  </div>
                  <p className="text-[11px] text-steel">
                    pgvector embeddings within serverless PostgreSQL (Neon) for semantic document search, context retrieval, and low-latency FAQ matching.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-obsidian-raised p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono font-bold">
                    <Cpu className="h-4 w-4" />
                    Token Optimization & Cache Layer
                  </div>
                  <p className="text-[11px] text-steel">
                    Response caching, prompt compression, and strict rate-limiting middleware to keep monthly OpenAI API operating costs predictable.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-obsidian-raised p-4 space-y-2">
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

        {/* SECTION 2: WHY INTERNATIONAL CLIENTS CHOOSE AXORKS */}
        <WhyChooseAxorks />

        {/* SECTION 3: WHY THIS TECHNOLOGY */}
        <WhyThisTech
          heading="Why We Architect AI Pipelines with OpenAI, Claude & pgvector"
          subheading="We select enterprise-grade LLM models, vector embeddings, and token-caching middleware to deliver intelligent automations that keep monthly API bills low."
          techChoices={aiTechChoices}
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
          title="AI Solutions & Automation FAQ"
          subtitle="Direct answers regarding data privacy, LLM token costs, hallucination prevention, and custom prompt IP."
          faqs={aiFaqs}
        />

        {/* SECTION 10: CALL TO ACTION */}
        <ServiceCTA
          serviceName="AI Solutions & Automation"
          heading="Ready to Automate Your Business Workflows with AI?"
          subheading="Schedule an AI discovery session directly with Chief Systems Architect Muhammad Mujahid to identify high-ROI automation opportunities and token optimization strategies."
          primaryCtaText="Talk to an AI Architect"
          secondaryCtaText="Request Scoped AI Proposal"
        />
      </div>
    </div>
  );
}
