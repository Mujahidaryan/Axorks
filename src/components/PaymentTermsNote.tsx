import { ShieldCheck } from 'lucide-react';

export default function PaymentTermsNote() {
  return (
    <div className="my-8 schematic-bracket border border-gold/40 bg-obsidian-raised p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
        <div className="text-xs font-mono">
          <span className="text-gold font-bold block uppercase tracking-wider mb-0.5">
            Risk-Reversal Payment Terms:
          </span>
          <span className="text-paper/90 leading-relaxed">
            Milestone-based payment: <strong>40% to begin, 40% at the midpoint review, 20% on final delivery</strong>. You're never paying for work you haven't seen.
          </span>
        </div>
      </div>
    </div>
  );
}
