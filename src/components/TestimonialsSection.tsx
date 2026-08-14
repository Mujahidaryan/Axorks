import { ShieldCheck, Quote, Building2, Sparkles, Star } from 'lucide-react';

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
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 p-7 shadow-executive-lg sm:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-light absolute -right-20 -top-20 h-72 w-72" />
          <div className="exec-mesh mesh-teal-light absolute -bottom-20 -left-20 h-72 w-72 opacity-60" />
          <div className="exec-dots-light absolute inset-0 opacity-30" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-center">
            <div className="exec-eyebrow exec-eyebrow-light">
              <ShieldCheck className="h-4 w-4 text-indigo-600" />
              Client Verification &amp; NDA Policy
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 font-mono text-xs font-semibold text-slate-700 shadow-executive-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              5 Clients Served · 2+ International Clients
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-executive-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
                <ShieldCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900">NDA-Protected References</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  References and redacted walkthroughs shared only with qualified decision-makers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-executive-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-100">
                <Quote className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900">Direct Founder Access</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Every engagement is led by Chief Systems Architect Muhammad Mujahid.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-executive-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 ring-1 ring-violet-100">
                <Star className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900">Executive Case Walkthroughs</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Live technical deep-dives during discovery calls for senior stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 p-8 shadow-executive-lg sm:p-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="exec-mesh mesh-indigo-light absolute -right-20 -top-20 h-96 w-96" />
        <div className="exec-mesh mesh-violet-light absolute -bottom-24 -left-24 h-96 w-96 opacity-60" />
        <div className="exec-dots-light absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-6">
          <div className="exec-eyebrow exec-eyebrow-light">
            <Quote className="h-4 w-4 text-indigo-600" />
            Verified Client Testimonials
          </div>
          <span className="hidden font-mono text-xs font-medium text-slate-600 sm:block">Executive Feedback</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-executive-sm transition-all duration-400 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-executive-lg"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-600 via-indigo-400 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
                    <Quote className="h-5 w-5 text-indigo-600" />
                  </div>
                  <Sparkles className="h-4 w-4 text-indigo-300 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-slate-800 italic font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <span className="block font-mono text-xs font-bold text-slate-900">{t.author}</span>
                  <span className="mt-0.5 block font-sans text-[11px] font-medium text-slate-600">{t.role}</span>
                </div>
                <div className="text-right">
                  {t.isConfidentialNDA ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[10px] font-bold text-indigo-800">
                      <ShieldCheck className="h-3 w-3 text-indigo-600" />
                      NDA Protected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      <Building2 className="h-3.5 w-3.5 text-indigo-600" />
                      {t.company}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}