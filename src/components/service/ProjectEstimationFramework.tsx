import { Calculator, ShieldCheck, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function ProjectEstimationFramework() {
  const estimationSteps = [
    {
      step: '01',
      name: 'Discovery & Vision Audit',
      description:
        'We begin with a direct technical consultation to understand your business objectives, target user flows, integration constraints, and performance targets.',
      accent: '#4F46E5', // Deep Indigo
    },
    {
      step: '02',
      name: 'Technical Scoping & Architecture',
      description:
        'We translate your requirements into an explicit technical document defining data models, API integrations, security roles, and tech stack choices.',
      accent: '#2563EB', // Slate Blue
    },
    {
      step: '03',
      name: 'Fixed Milestone Proposal',
      description:
        'You receive a transparent proposal detailing clear deliverable milestones, exact timeline estimates, and a fixed price quote — avoiding scope creep or hidden fees.',
      accent: '#0D9488', // Soft Teal
    },
    {
      step: '04',
      name: '40/40/20 Risk-Reversal Payment',
      description:
        'Payments are tied directly to verified progress: 40% to begin, 40% at midpoint review, and 20% on final production delivery and code handoff.',
      accent: '#7C3AED', // Muted Violet
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-executive-sm sm:p-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="exec-mesh mesh-indigo-light absolute -right-16 -top-16 h-64 w-64 opacity-70" />
        <div className="exec-dots-light absolute inset-x-0 top-0 h-px" />
      </div>
      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-4 space-y-2">
          <div className="exec-eyebrow exec-eyebrow-light">
            <Calculator className="h-4 w-4 text-indigo-600" />
            <span>TAILORED_ESTIMATION_&amp;_ENGAGEMENT</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            How We Scope &amp; Estimate Custom Projects
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            Complex software cannot be shoehorned into generic one-size-fits-all pricing templates. Every solution is custom-architected around your specific business goals, data volume, and security requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {estimationSteps.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.1)] hover:-translate-y-0.5"
            >
              {/* left accent bar */}
              <div
                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(180deg, ${item.accent}, ${item.accent}70)` }}
              />
              <div className="flex items-center gap-3 pl-3">
                <span
                  className="font-mono font-bold text-sm px-2 py-0.5 rounded-md border"
                  style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}10` }}
                >
                  {item.step}
                </span>
                <h3 className="font-serif text-base font-bold text-slate-900">
                  {item.name}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <ShieldCheck className="h-4 w-4 text-indigo-600 shrink-0" />
            <span>Need a tailored scope for your software project?</span>
          </div>
          <Link
            href="/contact?cta=discovery"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            Request Technical Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
