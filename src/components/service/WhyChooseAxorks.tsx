'use client';

import {
  MessageSquare,
  ShieldCheck,
  Cpu,
  Zap,
  FileCode2,
  LifeBuoy,
  Layers,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function WhyChooseAxorks() {
  const trustCards = [
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description:
        'Direct daily updates via Slack, Zoom, and email with a guaranteed 24-hour response SLA on business days.',
      accent: '#4F46E5', // Deep Indigo
    },
    {
      icon: ShieldCheck,
      title: 'Secure Development Practices',
      description:
        'Enterprise data encryption, OWASP security standards, secure environment variable handling, and RBAC authentication.',
      accent: '#0D9488', // Soft Teal
    },
    {
      icon: Cpu,
      title: 'Modern Technology Stack',
      description:
        'Next.js App Router, TypeScript, Tailwind CSS, Python, and serverless PostgreSQL engineered for speed and stability.',
      accent: '#2563EB', // Slate Blue
    },
    {
      icon: Zap,
      title: 'Agile Delivery & Staging',
      description:
        'Iterative milestone sprints with live staging preview URLs so you test features as they are built.',
      accent: '#D97706', // Warm Amber
    },
    {
      icon: FileCode2,
      title: 'Technical Documentation Included',
      description:
        'Comprehensive architectural specs, API documentation, environment runbooks, and GitHub repository handoff.',
      accent: '#7C3AED', // Muted Violet
    },
    {
      icon: LifeBuoy,
      title: 'Long-Term Maintenance & Support',
      description:
        'Post-launch SLA support, monthly security updates, continuous performance tuning, and retainer availability.',
      accent: '#4F46E5', // Deep Indigo
    },
    {
      icon: Layers,
      title: 'Scalable Cloud Architecture',
      description:
        'Serverless database infrastructure engineered to handle user volume spikes without performance degradation.',
      accent: '#0D9488', // Soft Teal
    },
    {
      icon: UserCheck,
      title: 'Direct Architect Collaboration',
      description:
        'Work directly with Chief Systems Architect M. Mujahid and senior developers — zero account manager bloat.',
      accent: '#2563EB', // Slate Blue
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-100/80 via-sys-light to-slate-50 py-16 sm:py-20 border-y border-slate-200 shadow-sm relative overflow-hidden">
      {/* Background Soft Executive Accent Mesh */}
      <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 font-mono text-xs font-bold text-indigo-700 uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>THE_AXORKS_ENGINEERING_ADVANTAGE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Why Global Enterprise Teams Choose Axorks
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardized engineering practices, transparent milestone accountability, and direct senior architect access.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
                <div className="relative h-full rounded-2xl border border-slate-200/90 bg-white p-6 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300 group overflow-hidden">
                  {/* Left Accent Indicator Bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: card.accent }}
                  />

                  <div className="pl-1 space-y-3">
                    <div
                      className="h-12 w-12 rounded-xl border flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${card.accent}12`,
                        borderColor: `${card.accent}30`,
                        color: card.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
