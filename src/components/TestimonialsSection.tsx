import { ShieldCheck, Quote, Building2 } from 'lucide-react';

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
      <div className="rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 border border-slate-200 p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>CLIENT_VERIFICATION_&amp;_NDA_POLICY</span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-600">
            5 Clients Served · 2+ International Clients
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          Axorks enforces strict client confidentiality across all engagements. References and redacted case-study walkthroughs are provided directly to qualified decision-makers during technical discovery calls.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100/90 border border-slate-200 p-6 sm:p-10 space-y-6 shadow-sm">
      <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-wider">
          <Quote className="h-4 w-4" />
          <span>VERIFIED_CLIENT_TESTIMONIALS</span>
        </div>
        <span className="font-mono text-xs text-slate-600">Client Feedback</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <Quote className="h-5 w-5 text-indigo-600/60" />
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic font-medium">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-slate-900 font-bold block">{t.author}</span>
                <span className="text-slate-600 text-[11px]">{t.role}</span>
              </div>
              <div className="text-right">
                {t.isConfidentialNDA ? (
                  <span className="inline-flex items-center gap-1 text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded font-semibold">
                    <ShieldCheck className="h-3 w-3 text-indigo-600" />
                    NDA Protected
                  </span>
                ) : (
                  <span className="text-slate-700 font-semibold flex items-center gap-1">
                    <Building2 className="h-3 w-3 text-indigo-600" />
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
