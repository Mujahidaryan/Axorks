'use client';

import { Cpu, CheckCircle2, Sparkles } from 'lucide-react';
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

export default function WhyThisTech({
  heading = 'Why We Select This Technology Stack',
  subheading = 'We never list technologies as marketing jargon. Every framework, database, and API pipeline is selected to deliver speed, security, and quantifiable business ROI.',
  techChoices,
}: WhyThisTechProps) {
  return (
    <section className="w-full bg-sys-white py-16 sm:py-20 border-y border-sys-ink/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sys-blue/30 bg-sys-blue/10 px-4 py-1.5 font-mono text-xs font-bold text-sys-blue uppercase tracking-widest">
              <Cpu className="h-4 w-4 text-sys-blue" />
              <span>BUSINESS_FIRST_TECH_SELECTION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sys-ink leading-tight">
              {heading}
            </h2>
            <p className="text-sm text-sys-ink-muted leading-relaxed">
              {subheading}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techChoices.map((tech, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
              <div className="h-full rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-sys-blue/40 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-sys-ink/10 pb-3">
                    <span className="font-serif text-xl font-bold text-sys-ink group-hover:text-sys-blue transition-colors">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[10px] text-sys-blue font-bold uppercase px-2.5 py-1 rounded border border-sys-blue/20 bg-sys-blue/10">
                      {tech.category}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <strong className="text-sys-ink block font-mono text-[11px] mb-1 uppercase font-bold">
                        Technical Rationale:
                      </strong>
                      <p className="text-sys-ink-muted leading-relaxed">{tech.whySelected}</p>
                    </div>

                    <div className="pt-2 border-t border-sys-ink/10">
                      <strong className="text-sys-blue block font-mono text-[11px] mb-1 uppercase font-bold">
                        Business &amp; ROI Outcome:
                      </strong>
                      <p className="text-sys-ink-muted leading-relaxed">{tech.businessOutcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
