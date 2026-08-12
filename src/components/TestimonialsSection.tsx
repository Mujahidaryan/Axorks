import { ShieldCheck, Quote, Building2, Sparkles } from 'lucide-react';

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
  // If zero real testimonials exist yet, render a clean executive authority proof banner
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200 p-7 sm:p-10 relative overflow-hidden shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)]">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 executive-grid-pattern-light opacity-40 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-indigo-600" />
              <span>CLIENT_VERIFICATION_&amp;_NDA_POLICY</span>
            </div>
            <span className="font-mono text-xs font-semibold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
              5 Clients Served · 2+ International Clients
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl font-medium">
            Axorks enforces strict client confidentiality across all engagements. References and redacted case-study walkthroughs are provided directly to qualified decision-makers during technical discovery calls.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200 p-8 sm:p-12 space-y-8 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 executive-grid-pattern-light opacity-40 pointer-events-none" />

      <div className="border-b border-slate-200/80 pb-5 flex items-center justify-between relative z-10">
        <div className="inline-flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-xs">
          <Quote className="h-4 w-4 text-indigo-600" />
          <span>VERIFIED_CLIENT_TESTIMONIALS</span>
        </div>
        <span className="font-mono text-xs text-slate-600 font-medium">Executive Feedback</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 space-y-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-indigo-600/80" />
                <Sparkles className="h-4 w-4 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic font-medium">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-slate-900 font-bold block">{t.author}</span>
                <span className="text-slate-600 text-[11px] font-sans font-medium">{t.role}</span>
              </div>
              <div className="text-right">
                {t.isConfidentialNDA ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-indigo-800 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full font-bold shadow-2xs">
                    <ShieldCheck className="h-3 w-3 text-indigo-600" />
                    NDA Protected
                  </span>
                ) : (
                  <span className="text-slate-700 font-semibold flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200 text-[11px]">
                    <Building2 className="h-3.5 w-3.5 text-indigo-600" />
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
