import React from 'react';
import { ShieldCheck, Clock, Key, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCal } from '../context/CalContext';

const GUARANTEES = [
  {
    icon: Clock,
    title: '24-Hour Spec & Quote SLA',
    description:
      'Following our initial discovery session, we deliver a detailed Technical Specification Document (TSD) with milestone breakdowns and guaranteed fixed pricing within 24 hours.',
    badge: 'Guaranteed Turnaround',
    accent: 'gold',
  },
  {
    icon: ShieldCheck,
    title: 'Pay Per Milestone on Staging',
    description:
      'Zero hourly billing anxiety. We divide your project into clear milestones. You test and verify functioning software on private staging before approving payment releases.',
    badge: 'Zero Financial Risk',
    accent: 'emerald',
  },
  {
    icon: Key,
    title: '100% IP & Code Ownership',
    description:
      'Upon milestone completion, all source code, database architectures, and assets transfer directly to your private repositories. Zero proprietary vendor lock-in.',
    badge: 'Complete Ownership',
    accent: 'cyan',
  },
  {
    icon: Award,
    title: '14-Day Post-Launch Warranty',
    description:
      'Every project includes a comprehensive 14-day warranty covering bug fixes, deployment validation, and infrastructure stability support at zero additional charge.',
    badge: 'Included Standard',
    accent: 'violet',
  },
];

export const GuaranteeSection: React.FC = () => {
  const { openCal } = useCal();

  return (
    <section 
      aria-label="Commercial guarantees and risk reversal"
      className="relative w-full py-20 sm:py-28 bg-[#040814] text-[#F8FAFC] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-[#F5C761] border border-amber-500/20 mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-[#F5C761]" />
            <span>The Axorks 4-Point Commercial Guarantee</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineering rigor without commercial ambiguity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Projects start from $1,000. Every project receives a fixed-price proposal before development begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GUARANTEES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-amber-500/30 hover:bg-[#0B142A]/90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#F5C761] transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Binding SLA included in every signed statement of work</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-14 text-center">
          <button
            onClick={openCal}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/30 hover:brightness-105 cursor-pointer"
          >
            <span>Book Your Discovery Session</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs text-slate-400">
            20-minute direct consultation with Muhammad Mujahid, Chief Systems Architect.
          </p>
        </div>
      </div>
    </section>
  );
};
