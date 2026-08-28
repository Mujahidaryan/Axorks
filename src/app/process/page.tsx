import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'How We Work | Axorks',
  description:
    'A simple, clear process from first conversation to finished product. Learn how Axorks delivers custom software solutions for your business.',
  openGraph: {
    title: 'How We Work | Axorks',
    description:
      'A simple, clear process from first conversation to finished product. Learn how Axorks delivers custom software solutions for your business.',
    url: `${SITE_URL}/process`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | Axorks',
    description:
      'A simple, clear process from first conversation to finished product.',
  },
  alternates: {
    canonical: '/process',
  },
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, your goals, and the problem you need to solve.',
      accent: 'text-amber-500',
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'We turn your requirements into a clear scope, timeline, and fixed-price proposal.',
      accent: 'text-teal-600',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description: 'Once approved, we build, test, deploy, and launch your solution.',
      accent: 'text-indigo-600',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'After launch we can continue maintaining, improving, and supporting your software.',
      accent: 'text-violet-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              How we work
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A simple, clear process from first conversation to finished product.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          4 STEPS GRID & PAYMENT NOTE
      ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-[12px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-[8px] bg-slate-100 px-3 py-1 font-mono text-sm font-bold text-slate-900">
                      {step.number}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Note */}
          <div className="rounded-[12px] border border-slate-200/90 bg-[#FBFBFA] p-6 sm:p-7 text-center sm:text-left shadow-sm">
            <p className="text-sm sm:text-base font-medium text-slate-800">
              Payment is structured around clear project milestones.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="border-t border-white/[0.08] bg-[#0B0C10] text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Get in touch with our team to discuss your project requirements and get a clear, fixed proposal.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[12px] bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"
            >
              <span>Book a free discovery call</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
