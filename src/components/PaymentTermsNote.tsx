import { ShieldCheck, LockKeyhole, CircleDollarSign } from 'lucide-react';

export default function PaymentTermsNote() {
  return (
    <div className="relative my-8 overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-6 shadow-obsidian-md sm:p-7">
      {/* Gold hairline top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,162,75,0.7), transparent 70%)' }}
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 shadow-[0_4px_16px_rgba(201,162,75,0.2)]">
            <ShieldCheck className="h-6 w-6 text-gold" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Risk-Reversal Payment Terms
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-paper/90">
            Milestone-based payment: <strong className="text-paper">40% to begin, 40% at the midpoint review, 20% on final delivery</strong>.
            You're never paying for work you haven't seen.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-obsidian/60 px-3 py-1.5">
            <LockKeyhole className="h-3.5 w-3.5 text-teal-400" />
            <span className="font-mono text-[11px] font-medium text-steel">NDA STANDARD</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-obsidian/60 px-3 py-1.5">
            <CircleDollarSign className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px] font-medium text-steel">WIRE · WISE · PAYONEER</span>
          </div>
        </div>
      </div>
    </div>
  );
}