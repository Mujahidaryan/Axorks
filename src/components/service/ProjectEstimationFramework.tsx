import { Calculator, ShieldCheck, FileText, CheckCircle2, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function ProjectEstimationFramework() {
  const estimationSteps = [
    {
      step: '01',
      name: 'Discovery & Vision Audit',
      description:
        'We begin with a direct technical consultation to understand your business objectives, target user flows, integration constraints, and performance targets.',
    },
    {
      step: '02',
      name: 'Technical Scoping & Architecture',
      description:
        'We translate your requirements into an explicit technical document defining data models, API integrations, security roles, and tech stack choices.',
    },
    {
      step: '03',
      name: 'Fixed Milestone Proposal',
      description:
        'You receive a transparent proposal detailing clear deliverable milestones, exact timeline estimates, and a fixed price quote — avoiding scope creep or hidden fees.',
    },
    {
      step: '04',
      name: '40/40/20 Risk-Reversal Payment',
      description:
        'Payments are tied directly to verified progress: 40% to begin, 40% at midpoint review, and 20% on final production delivery and code handoff.',
    },
  ];

  return (
    <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-6 sm:p-8 space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <Calculator className="h-4 w-4" />
          <span>TAILORED_ESTIMATION_&_ENGAGEMENT</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          How We Scope & Estimate Custom Projects
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-3xl">
          Complex software cannot be shoehorned into generic one-size-fits-all pricing templates. Every solution is custom-architected around your specific business goals, data volume, and security requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {estimationSteps.map((item, idx) => (
          <div
            key={idx}
            className="rounded border border-obsidian-border bg-obsidian p-5 space-y-3"
          >
            <div className="flex items-center gap-3 font-mono">
              <span className="text-gold font-bold text-sm bg-gold/10 border border-gold/30 px-2 py-0.5 rounded">
                {item.step}
              </span>
              <h3 className="font-serif text-base font-bold text-paper">
                {item.name}
              </h3>
            </div>
            <p className="text-xs text-steel leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Direct CTA Bar inside estimation framework */}
      <div className="pt-4 border-t border-obsidian-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-steel">
          <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
          <span>Need a tailored scope for your software project?</span>
        </div>
        <Link
          href="/contact?cta=discovery"
          className="inline-flex items-center gap-2 rounded bg-gold px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian hover:bg-gold-hover transition-colors shrink-0"
        >
          <PhoneCall className="h-3.5 w-3.5" />
          Request Technical Consultation
        </Link>
      </div>
    </div>
  );
}
