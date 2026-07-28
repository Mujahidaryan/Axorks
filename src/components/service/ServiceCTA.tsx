import Link from 'next/link';
import { PhoneCall, FileText, UserCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ServiceCTAProps {
  heading?: string;
  subheading?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  serviceName?: string;
}

export default function ServiceCTA({
  heading = 'Ready to Scale Your Business Infrastructure?',
  subheading = 'Book a free technical discovery call directly with Chief Systems Architect Muhammad Mujahid. We analyze your business requirements, define an explicit technical scope, and outline a fixed milestone plan.',
  primaryCtaText = 'Talk to a Software Architect',
  secondaryCtaText = 'Request Scoped Proposal',
  serviceName = 'Custom Software Development',
}: ServiceCTAProps) {
  return (
    <div className="schematic-bracket border border-gold/60 bg-obsidian-raised p-8 sm:p-12 space-y-8 shadow-[0_0_40px_rgba(201,162,75,0.12)]">
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>TECHNICAL_CONSULTATION_&_DISCOVERY</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-paper">
          {heading}
        </h2>

        <p className="text-sm text-steel leading-relaxed">
          {subheading}
        </p>

        {/* Founder access guarantee note */}
        <div className="pt-2 flex items-center gap-2 text-xs font-mono text-paper/90">
          <UserCheck className="h-4 w-4 text-gold shrink-0" />
          <span>Zero account-manager handoff. 100% direct engineering collaboration.</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-obsidian-border pt-6">
        <Link
          href={`/contact?service=${encodeURIComponent(serviceName)}&cta=discovery`}
          className="group inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian hover:bg-gold-hover transition-colors"
        >
          <PhoneCall className="h-4 w-4" />
          {primaryCtaText}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <Link
          href={`/contact?service=${encodeURIComponent(serviceName)}&cta=quote`}
          className="inline-flex items-center justify-center gap-2 rounded border border-gold/40 bg-obsidian px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-gold hover:bg-gold/10 transition-colors"
        >
          <FileText className="h-4 w-4" />
          {secondaryCtaText}
        </Link>
      </div>
    </div>
  );
}
