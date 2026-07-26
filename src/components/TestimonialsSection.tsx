import { ShieldCheck, Quote, Building2, UserCheck } from 'lucide-react';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  isConfidentialNDA?: boolean;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  // If zero real testimonials exist yet, render a clean authority proof banner
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="schematic-bracket border border-gold/30 bg-obsidian-raised p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-obsidian-border pb-4">
          <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>CLIENT_VERIFICATION_&_NDA_POLICY</span>
          </div>
          <span className="font-mono text-[11px] text-steel">
            5 Clients Served · 2+ International Clients
          </span>
        </div>

        <p className="mt-4 text-xs text-steel leading-relaxed sm:text-sm">
          Axorks enforces strict client confidentiality across all engagements. References and redacted case-study walkthroughs are provided directly to qualified decision-makers during technical discovery calls.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-obsidian-border pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-wider">
          <Quote className="h-4 w-4" />
          <span>VERIFIED_CLIENT_TESTIMONIALS</span>
        </div>
        <span className="font-mono text-xs text-steel">Client Feedback</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Quote className="h-5 w-5 text-gold/60" />
              <p className="text-xs text-paper/90 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-obsidian-border/60 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-paper font-bold block">{t.author}</span>
                <span className="text-steel text-[11px]">{t.role}</span>
              </div>
              <div className="text-right">
                {t.isConfidentialNDA ? (
                  <span className="inline-flex items-center gap-1 text-[10px] text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded">
                    <ShieldCheck className="h-3 w-3" />
                    NDA Protected
                  </span>
                ) : (
                  <span className="text-steel font-semibold flex items-center gap-1">
                    <Building2 className="h-3 w-3 text-gold" />
                    {t.company}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
