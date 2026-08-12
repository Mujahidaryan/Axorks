'use client';

import { CheckCircle2, XCircle, Scale } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function AgencyComparisonTable() {
  const comparisonRows = [
    {
      feature: 'Solution Architecture',
      agency: 'Template-driven or bloated page-builders',
      axorks: 'Custom engineered Next.js & TypeScript codebases',
    },
    {
      feature: 'Strategic Focus',
      agency: 'Feature checklist focused',
      axorks: 'Business outcome & ROI focused',
    },
    {
      feature: 'System Scalability',
      agency: 'Limited scalability & fragile plugins',
      axorks: 'Serverless architecture built for high growth',
    },
    {
      feature: 'Documentation & Handoff',
      agency: 'Minimal or missing documentation',
      axorks: 'Comprehensive API specs & complete GitHub handover',
    },
    {
      feature: 'Team Collaboration',
      agency: 'Handed off to junior account reps',
      axorks: 'Direct access to Chief Architect M. Mujahid',
    },
    {
      feature: 'Engineering Stack',
      agency: 'Legacy PHP or heavy monolith frameworks',
      axorks: 'Next.js App Router, React, Tailwind & PostgreSQL',
    },
    {
      feature: 'Payment & Risk Model',
      agency: 'Demands large upfront payment before work',
      axorks: 'Transparent 40/40/20 milestone-based billing',
    },
    {
      feature: 'Long-Term Support',
      agency: 'Transactional delivery and quick handoff',
      axorks: 'Long-term technical partner with SLA retainers',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-slate-100/90 py-16 sm:py-24 border-y border-slate-200 shadow-sm relative overflow-hidden">
      {/* Background Soft Executive Accent Mesh & Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 executive-grid-pattern-light opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <ScrollReveal direction="up">
          <div className="space-y-3.5 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-indigo-50 px-4 py-1.5 font-mono text-xs font-bold text-indigo-700 uppercase tracking-widest shadow-2xs">
              <Scale className="h-4 w-4 text-indigo-600" />
              <span>FACTUAL_COMPARISON_MATRIX</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Traditional Agency vs Axorks Engineering
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Factual architectural comparison highlighting how our direct-access engineering approach differs from traditional software vendors.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.08}>
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_12px_40px_-15px_rgba(15,23,42,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/90 font-mono text-xs text-slate-900">
                    <th className="p-5 sm:p-6 font-bold uppercase tracking-wider text-slate-900">Engineering Dimension</th>
                    <th className="p-5 sm:p-6 font-bold uppercase tracking-wider text-rose-700">Traditional Agency</th>
                    <th className="p-5 sm:p-6 font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50/70 border-l border-indigo-100">Axorks Software Studio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-slate-50/80">
                      <td className="p-5 sm:p-6 font-semibold text-slate-900">{row.feature}</td>
                      <td className="p-5 sm:p-6 text-slate-600 flex items-center gap-2.5">
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                        <span>{row.agency}</span>
                      </td>
                      <td className="p-5 sm:p-6 font-semibold text-slate-900 bg-indigo-50/30 border-l border-indigo-100/60 flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                        <span className="text-indigo-950 font-medium">{row.axorks}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
