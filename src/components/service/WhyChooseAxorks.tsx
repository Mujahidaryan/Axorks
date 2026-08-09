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
  TrendingUp,
  Code2,
  Gauge,
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
    },
    {
      icon: ShieldCheck,
      title: 'Secure Development Practices',
      description:
        'Enterprise data encryption, OWASP security standards, secure environment variable handling, and RBAC authentication.',
    },
    {
      icon: Cpu,
      title: 'Modern Technology Stack',
      description:
        'Next.js App Router, TypeScript, Tailwind CSS, Python, and serverless PostgreSQL engineered for speed and stability.',
    },
    {
      icon: Zap,
      title: 'Agile Delivery & Staging',
      description:
        'Iterative milestone sprints with live staging preview URLs so you test features as they are built.',
    },
    {
      icon: FileCode2,
      title: 'Technical Documentation Included',
      description:
        'Comprehensive architectural specs, API documentation, environment runbooks, and GitHub repository handoff.',
    },
    {
      icon: LifeBuoy,
      title: 'Long-Term Maintenance & Support',
      description:
        'Post-launch SLA support, monthly security updates, continuous performance tuning, and retainer availability.',
    },
    {
      icon: Layers,
      title: 'Scalable Cloud Architecture',
      description:
        'Serverless database infrastructure engineered to handle user volume spikes without performance degradation.',
    },
    {
      icon: UserCheck,
      title: 'Direct Architect Collaboration',
      description:
        'Work directly with Chief Systems Architect M. Mujahid and senior developers — zero account manager bloat.',
    },
  ];

  return (
    <section className="w-full bg-sys-light py-16 sm:py-20 border-y border-sys-ink/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sys-blue/30 bg-sys-blue/10 px-4 py-1.5 font-mono text-xs font-bold text-sys-blue uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-sys-blue" />
              <span>THE_AXORKS_ENGINEERING_ADVANTAGE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sys-ink leading-tight">
              Why Global Enterprise Teams Choose Axorks
            </h2>
            <p className="text-sm text-sys-ink-muted leading-relaxed">
              Standardized engineering practices, transparent milestone accountability, and direct senior architect access.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.06} direction="up">
                <div className="h-full rounded-2xl border border-sys-ink/10 bg-sys-white p-6 space-y-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-sys-blue/40 group">
                  <div className="h-12 w-12 rounded-xl bg-sys-light border border-sys-blue/20 flex items-center justify-center transition-colors group-hover:bg-sys-blue group-hover:text-white">
                    <Icon className="h-6 w-6 text-sys-blue transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-sys-ink group-hover:text-sys-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-sys-ink-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
