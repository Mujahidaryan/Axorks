import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Search, FileCode, Hammer, Rocket, LifeBuoy, HelpCircle, ShieldCheck, Globe, Clock, MessageSquare, CreditCard, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import InternationalFAQSection from '@/components/InternationalFAQSection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Engineering Process & International FAQ | Axorks Software Studio',
  description:
    'Our 5-step honest software build walkthrough and international client FAQ: Discovery, Scope & Quote, Time Zones, NDAs, and Milestone Payments.',
  alternates: {
    canonical: '/process',
  },
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Architecture Audit',
      icon: Search,
      paragraph:
        'We start with a direct technical discussion to understand your product goals, target user flows, database needs, and integration constraints. You collaborate directly with Chief Systems Architect Muhammad Mujahid and senior engineers — zero account-manager handoff.',
    },
    {
      number: '02',
      title: 'Explicit Scope & Fixed Quote',
      icon: FileCode,
      paragraph:
        'We translate your requirements into a clear technical specification document detailing exact deliverables, database schemas, tech stack choices, milestone timeline, and a fixed transparent price quote.',
    },
    {
      number: '03',
      title: 'Full-Stack Build & AI Integration',
      icon: Hammer,
      paragraph:
        'We execute the build using Next.js App Router, TypeScript, Tailwind CSS, and serverless Postgres. Continuous progress updates with real staging preview links so you test features as they are built.',
    },
    {
      number: '04',
      title: 'Production Launch & Verification',
      icon: Rocket,
      paragraph:
        'We deploy your system directly to Vercel/Neon serverless infrastructure, configure DNS pointers, setup SSL, test API security routes, and verify mobile responsiveness down to real device viewports.',
    },
    {
      number: '05',
      title: 'Handoff & Support Retainer',
      icon: LifeBuoy,
      paragraph:
        'We provide complete clean source code handoff on GitHub, environment variable documentation, and optional monthly retainer availability for continuous performance tuning and new feature rollouts.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[28rem] w-[28rem] opacity-50" />
          <div className="exec-mesh mesh-teal-dark absolute -right-24 bottom-0 h-[22rem] w-[22rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs items={[{ label: 'Engineering Process & FAQ' }]} />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <Search className="h-4 w-4 text-gold" />
              <span>NO_AGILE_THEATER</span>
            </div>
            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Honest 5-Step{' '}
              <span className="gradient-text-gold">Execution Process</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
              Real engineering steps only. No unnecessary daily standup theater, invented ceremonies, or middle-management bloat.
            </p>
          </div>
        </div>
      </header>

      {/* Full-Width Light Section: 5-Step Process Execution Cards (40%+ Light Background Ratio) */}
      <section className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-100/80 py-16 sm:py-20 border-y border-slate-200 shadow-sm relative overflow-hidden">
        {/* Background Soft Executive Accent Mesh */}
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 font-mono text-xs font-bold text-indigo-700 uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>TRANSPARENT_SOFTWARE_DELIVERY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                How We Architect &amp; Ship Your Software
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct architect access, milestone billing, and complete code assignment.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const accents = ['#4F46E5', '#0D9488', '#2563EB', '#7C3AED', '#D97706'];
              const accent = accents[idx % accents.length];
              return (
                <ScrollReveal key={step.number} delay={idx * 0.05} direction="up">
                  <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 group overflow-hidden">
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: accent }}
                    />
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between pl-2">
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-2xl font-bold px-3 py-1 rounded border"
                          style={{ backgroundColor: `${accent}12`, borderColor: `${accent}30`, color: accent }}
                        >
                          {step.number}
                        </span>
                        <div
                          className="rounded-xl border p-3 transition-colors"
                          style={{ backgroundColor: `${accent}10`, borderColor: `${accent}25` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: accent }} />
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm md:pl-24 pl-2">
                      {step.paragraph}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Buyer FAQ Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InternationalFAQSection />
      </div>
    </div>
  );
}
