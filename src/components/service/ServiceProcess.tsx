'use client';

import { Layers, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServiceProcess() {
  const phases = [
    {
      num: '01',
      title: 'Discovery Workshop',
      desc: 'Direct consultation with Chief Architect M. Mujahid to clarify product vision, business metrics, target user flows, and technical scope.',
    },
    {
      num: '02',
      title: 'Requirements & Planning',
      desc: 'Translating business goals into an explicit technical specification document detailing database schemas, API routes, and milestone deliverables.',
    },
    {
      num: '03',
      title: 'Architecture & UX',
      desc: 'Designing serverless cloud infrastructure, data modeling, role permissions, and conversion-focused wireframes.',
    },
    {
      num: '04',
      title: 'Bespoke UI Design',
      desc: 'Creating high-fidelity dark-mode schematics, component design systems, and responsive interfaces matching your exact brand identity.',
    },
    {
      num: '05',
      title: 'Full-Stack Development',
      desc: 'Clean code execution using Next.js App Router, TypeScript, and serverless Postgres with continuous progress updates.',
    },
    {
      num: '06',
      title: 'Testing & QA',
      desc: 'Rigorous cross-device testing, device viewport audits, security route checks, and performance optimization.',
    },
    {
      num: '07',
      title: 'Production Deployment',
      desc: 'Zero-downtime deployment to Vercel/Neon infrastructure, DNS configuration, SSL setup, and environment variable security.',
    },
    {
      num: '08',
      title: 'Verification & Handoff',
      desc: 'Comprehensive post-launch verification, full GitHub source code handover, and environment documentation.',
    },
    {
      num: '09',
      title: 'Continuous Monitoring',
      desc: 'Real-time uptime tracking, error log inspection, and proactive database query performance tuning.',
    },
    {
      num: '10',
      title: 'Long-Term Support',
      desc: 'Monthly retainer options for continuous feature enhancements, security patches, and architectural evolution.',
    },
  ];

  return (
    <section className="w-full bg-sys-light py-16 sm:py-20 border-y border-sys-ink/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sys-blue/30 bg-sys-blue/10 px-4 py-1.5 font-mono text-xs font-bold text-sys-blue uppercase tracking-widest">
              <Layers className="h-4 w-4 text-sys-blue" />
              <span>END_TO_END_ENGINEERING_PROCESS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sys-ink leading-tight">
              10-Step Software Delivery Lifecycle
            </h2>
            <p className="text-sm text-sys-ink-muted leading-relaxed">
              Standardized engineering lifecycle ensuring predictable timelines, transparent progress tracking, and high-performance delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {phases.map((phase, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.04} direction="up">
              <div className="h-full rounded-2xl border border-sys-ink/10 bg-sys-white p-5 space-y-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sys-blue/40 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-sys-blue">
                    <span className="font-bold text-sm bg-sys-blue/10 px-2.5 py-1 rounded border border-sys-blue/20">
                      {phase.num}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-sys-blue/40 group-hover:text-sys-blue transition-colors" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-bold text-sys-ink group-hover:text-sys-blue transition-colors">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs text-sys-ink-muted leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
