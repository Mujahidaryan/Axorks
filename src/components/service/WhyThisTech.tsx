'use client';

import { Cpu, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export interface TechChoice {
  name: string;
  category: string;
  whySelected: string;
  businessOutcome: string;
}

interface WhyThisTechProps {
  heading?: string;
  subheading?: string;
  techChoices: TechChoice[];
}

const ACCENTS = ['#4F46E5', '#0D9488', '#2563EB', '#7C3AED'];

export default function WhyThisTech({
  heading = 'Why We Select This Technology Stack',
  subheading = 'We never list technologies as marketing jargon. Every framework, database, and API pipeline is selected to deliver speed, security, and quantifiable business ROI.',
  techChoices,
}: WhyThisTechProps) {
  return (
    <section className="relative w-full overflow-hidden border-y border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 py-16 shadow-sm sm:py-24">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="exec-mesh mesh-indigo-light absolute -right-24 top-1/4 h-96 w-96" />
        <div className="exec-mesh mesh-teal-light absolute -left-24 bottom-1/4 h-96 w-96 opacity-70" />
        <div className="exec-dots-light absolute inset-x-0 top-0 h-px" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl space-y-3.5 text-center">
            <div className="exec-eyebrow exec-eyebrow-light justify-center">
              <Cpu className="h-4 w-4 text-indigo-600" />
              <span>Business-First Tech Selection</span>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {heading}
            </h2>
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              {subheading}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techChoices.map((tech, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-executive-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-executive-lg">
                  {/* Top accent gradient bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, ${accent}, ${accent}70)` }}
                  />

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="font-serif text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-950">
                        {tech.name}
                      </span>
                      <span
                        className="shrink-0 rounded-lg border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${accent}10`,
                          borderColor: `${accent}28`,
                          color: accent,
                        }}
                      >
                        {tech.category}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${accent}12`, color: accent }}
                      >
                        <Layers className="h-4 w-4" />
                      </div>
                      <p className="text-xs font-normal leading-relaxed text-slate-600">{tech.whySelected}</p>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-100 pt-3 text-xs">
                      <span
                        className="block font-mono text-[11px] font-bold uppercase tracking-wide"
                        style={{ color: accent }}
                      >
                        Business &amp; ROI Outcome
                      </span>
                      <p className="font-medium leading-relaxed text-slate-900">{tech.businessOutcome}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}