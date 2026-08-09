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
    <div className="py-12 sm:py-20 space-y-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Engineering Process & FAQ' }]} />

        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            NO_AGILE_THEATER
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Honest 5-Step Execution Process
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Real engineering steps only. No unnecessary daily standup theater, invented ceremonies, or middle-management bloat.
          </p>
        </div>
      </div>

      {/* Full-Width Light Section: 5-Step Process Execution Cards (40%+ Light Background Ratio) */}
      <section className="w-full bg-sys-light py-16 sm:py-20 border-y border-sys-ink/10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-sys-blue/30 bg-sys-blue/10 px-4 py-1.5 font-mono text-xs font-bold text-sys-blue uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-sys-blue" />
                <span>TRANSPARENT_SOFTWARE_DELIVERY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sys-ink">
                How We Architect &amp; Ship Your Software
              </h2>
              <p className="text-sm text-sys-ink-muted leading-relaxed">
                Direct architect access, milestone billing, and complete code assignment.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={idx * 0.05} direction="up">
                  <div className="rounded-2xl border border-sys-ink/10 bg-sys-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sys-blue/40 group">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-2xl font-bold text-sys-blue bg-sys-blue/10 px-3 py-1 rounded border border-sys-blue/20">
                          {step.number}
                        </span>
                        <div className="rounded-xl border border-sys-ink/10 bg-sys-light p-3 group-hover:bg-sys-blue group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6 text-sys-blue group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-sys-ink group-hover:text-sys-blue transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-sys-ink-muted sm:text-sm md:pl-20">
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
