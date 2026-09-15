import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Zap, Layers, Sparkles, Building2 } from 'lucide-react';
import { useCal } from '../context/CalContext';
import { SEOHead } from '../components/SEOHead';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { FAQAccordion } from '../components/FAQAccordion';

const TIERS = [
  {
    id: 'mvp',
    name: 'Targeted Automation & MVP',
    range: '$1,000 – $3,500',
    timeline: '2–4 Weeks',
    bestFor: 'Validating early SaaS products or eliminating high-friction operational bottlenecks.',
    features: [
      'Itemized Technical Specification Document (TSD)',
      'Bespoke frontend & backend engineering',
      'Autonomous AI workflow or custom web portal',
      'PostgreSQL / SQLite database architecture',
      'Private staging preview for milestone verification',
      '100% IP & source code handover to private repo',
      '14-day post-launch warranty included standard',
    ],
    highlight: false,
    cta: 'Book Discovery Session',
  },
  {
    id: 'production',
    name: 'Production Web App / AI System',
    range: '$3,500 – $8,500',
    timeline: '4–8 Weeks',
    bestFor: 'Growing companies requiring multi-agent AI pipelines, commercial SaaS, or client portals.',
    features: [
      'Everything in MVP tier',
      'Multi-agent workflow orchestration & RAG vector search',
      'Granular role-based access control (RBAC)',
      'Third-party ERP, CRM, & Stripe billing integrations',
      'Automated CI/CD testing & zero-downtime deployment',
      'Executive analytics & real-time operational telemetry',
      'Priority direct Slack/WhatsApp channel with Chief Architect',
      'Extended 30-day post-launch warranty',
    ],
    highlight: true,
    badge: 'Most Popular',
    cta: 'Discuss Your Architecture',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Multi-Node Platform',
    range: '$8,500+',
    timeline: '8–14 Weeks',
    bestFor: 'Enterprise supply-chain telemetry, algorithmic trading engines, or regulated healthcare systems.',
    features: [
      'Everything in Production tier',
      'High-throughput telemetry & IoT gateway architecture',
      'HIPAA, GDPR, or financial compliance hardening',
      'Multi-region high-availability cloud infrastructure (AWS/GCP)',
      'Comprehensive security penetration & load-testing reports',
      'Custom SLA uptime & emergency response guarantees',
      'Full architectural training & engineering team handover',
    ],
    highlight: false,
    cta: 'Request Enterprise Scope',
  },
];

export const PricingPage: React.FC = () => {
  const { openCal } = useCal();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="Predictable Fixed-Price Software Engineering | Pricing | Axorks"
        description="Transparent software engineering pricing starting from $1,000. Every project receives an itemized fixed-price proposal before development begins. Zero hourly surprises."
        canonicalPath="/pricing"
      />

      {/* Hero */}
      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-[#F5C761] border border-amber-500/20 mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>Guaranteed Fixed-Price Milestones</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Transparent software investment. Zero hourly surprises.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
            Projects start from $1,000. Every project receives a fixed-price proposal before development begins. Pay per verified milestone on private staging.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={openCal}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
            >
              <span>Get Your Fixed-Price Spec in 24h</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
                  tier.highlight
                    ? 'border-amber-500/40 bg-gradient-to-b from-[#0F1A3A] via-[#091126] to-[#060B1A] shadow-2xl shadow-amber-500/10 scale-102 lg:-translate-y-2'
                    : 'border-white/10 bg-[#080E20]/80 hover:border-white/20'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F5C761] to-[#D4A843] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1A1000] shadow-md">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="border-b border-white/10 pb-6 mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 min-h-[32px]">
                      {tier.bestFor}
                    </p>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold font-mono text-white">
                        {tier.range}
                      </span>
                    </div>
                    <span className="inline-block mt-2 text-xs font-semibold text-amber-400/90">
                      Typical Delivery: {tier.timeline}
                    </span>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={openCal}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold transition-all cursor-pointer ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] text-[#1A1000] shadow-lg shadow-amber-500/20 hover:brightness-105'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-center text-[11px] text-slate-400">
                    Includes 24h itemized proposal &amp; full IP handover.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Point Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ */}
      <FAQAccordion 
        title="Pricing & Commercial FAQ" 
        subtitle="Understand how fixed-price milestone governance eliminates software engineering budget risk." 
      />
    </div>
  );
};
