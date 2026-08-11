'use client';

import { Layers, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServiceProcess() {
  const phases = [
    {
      num: '01',
      title: 'Discovery Workshop',
      desc: 'Direct consultation with Chief Architect M. Mujahid to clarify product vision, business metrics, target user flows, and technical scope.',
      accent: '#4F46E5', // Deep Indigo
    },
    {
      num: '02',
      title: 'Requirements & Planning',
      desc: 'Translating business goals into an explicit technical specification document detailing database schemas, API routes, and milestone deliverables.',
      accent: '#0D9488', // Soft Teal
    },
    {
      num: '03',
      title: 'Architecture & UX',
      desc: 'Designing serverless cloud infrastructure, data modeling, role permissions, and conversion-focused wireframes.',
      accent: '#2563EB', // Slate Blue
    },
    {
      num: '04',
      title: 'Bespoke UI Design',
      desc: 'Creating high-fidelity dark-mode schematics, component design systems, and responsive interfaces matching your exact brand identity.',
      accent: '#7C3AED', // Muted Violet
    },
    {
      num: '05',
      title: 'Full-Stack Development',
      desc: 'Clean code execution using Next.js App Router, TypeScript, and serverless Postgres with continuous progress updates.',
      accent: '#D97706', // Warm Amber
    },
    {
      num: '06',
      title: 'Testing & QA',
      desc: 'Rigorous cross-device testing, device viewport audits, security route checks, and performance optimization.',
      accent: '#4F46E5', // Deep Indigo
    },
    {
      num: '07',
      title: 'Production Deployment',
      desc: 'Zero-downtime deployment to Vercel/Neon infrastructure, DNS configuration, SSL setup, and environment variable security.',
      accent: '#0D9488', // Soft Teal
    },
    {
      num: '08',
      title: 'Verification & Handoff',
      desc: 'Comprehensive post-launch verification, full GitHub source code handover, and environment documentation.',
      accent: '#2563EB', // Slate Blue
    },
    {
      num: '09',
      title: 'Continuous Monitoring',
      desc: 'Real-time uptime tracking, error log inspection, and proactive database query performance tuning.',
      accent: '#7C3AED', // Muted Violet
    },
    {
      num: '10',
      title: 'Long-Term Support',
      desc: 'Monthly retainer options for continuous feature enhancements, security patches, and architectural evolution.',
      accent: '#D97706', // Warm Amber
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-sys-light to-slate-100/90 py-16 sm:py-20 border-y border-slate-200 shadow-sm relative overflow-hidden">
      {/* Background Soft Executive Accent Mesh */}
      <div className="absolute top-1/3 right-12 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-12 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 font-mono text-xs font-bold text-indigo-700 uppercase tracking-widest">
              <Layers className="h-4 w-4 text-indigo-600" />
              <span>END_TO_END_ENGINEERING_PROCESS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              10-Step Software Delivery Lifecycle
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardized engineering lifecycle ensuring predictable timelines, transparent progress tracking, and high-performance delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {phases.map((phase, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.04} direction="up">
              <div className="relative h-full rounded-2xl border border-slate-200/90 bg-white p-5 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 flex flex-col justify-between group overflow-hidden">
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: phase.accent }}
                />

                <div className="pl-1">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span
                      className="font-bold text-xs px-2.5 py-1 rounded border"
                      style={{
                        backgroundColor: `${phase.accent}12`,
                        borderColor: `${phase.accent}30`,
                        color: phase.accent,
                      }}
                    >
                      {phase.num}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
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
