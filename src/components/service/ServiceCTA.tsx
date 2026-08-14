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
    <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-8 shadow-obsidian-lg sm:p-12">
      {/* Gold hairline top */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,162,75,0.7), transparent 70%)' }}
      />
      <div aria-hidden="true" className="exec-dots-dark absolute inset-x-0 bottom-0 h-px" />

      <div className="relative z-10 space-y-8">
        <div className="space-y-3 max-w-3xl">
          <div className="exec-eyebrow exec-eyebrow-gold">
            <ShieldCheck className="h-4 w-4 text-gold" />
            <span>TECHNICAL_CONSULTATION_&_DISCOVERY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-paper leading-tight">
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

        <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
          <Link
            href={`/contact?service=${encodeURIComponent(serviceName)}&cta=discovery`}
            className="btn btn-gold group inline-flex items-center gap-2"
          >
            <PhoneCall className="h-4 w-4" />
            {primaryCtaText}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={`/contact?service=${encodeURIComponent(serviceName)}&cta=quote`}
            className="btn btn-outline-dark inline-flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
