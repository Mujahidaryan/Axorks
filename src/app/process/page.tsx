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
      cardBg: 'from-[#FEFBF2] to-[#FDF4E1] hover:from-[#FDF2D6] hover:to-[#FDE8B5]',
      borderStyle: 'border-amber-200/60 hover:border-amber-300',
      shadowStyle: 'shadow-[0_4px_16px_-4px_rgba(201,162,75,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(201,162,75,0.18)]',
      badgeBg: 'bg-white text-[#B88E2F] ring-amber-200/70',
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'We turn your requirements into a clear scope, timeline, and fixed-price proposal.',
      cardBg: 'from-[#F4F6FF] to-[#EBF0FE] hover:from-[#EEF2FF] hover:to-[#E0E7FF]',
      borderStyle: 'border-indigo-200/60 hover:border-indigo-300',
      shadowStyle: 'shadow-[0_4px_16px_-4px_rgba(79,70,229,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.15)]',
      badgeBg: 'bg-white text-indigo-600 ring-indigo-200/70',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description: 'Once approved, we build, test, deploy, and launch your solution.',
      cardBg: 'from-[#F0FDF9] to-[#E6F7F3] hover:from-[#E6FAF4] hover:to-[#CCFBF1]',
      borderStyle: 'border-teal-200/60 hover:border-teal-300',
      shadowStyle: 'shadow-[0_4px_16px_-4px_rgba(13,148,136,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.15)]',
      badgeBg: 'bg-white text-[#0D9488] ring-teal-200/70',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'After launch we can continue maintaining, improving, and supporting your software.',
      cardBg: 'from-[#F0FDF6] to-[#E5F9EE] hover:from-[#E1F9EB] hover:to-[#D1FAE5]',
      borderStyle: 'border-emerald-200/60 hover:border-emerald-300',
      shadowStyle: 'shadow-[0_4px_16px_-4px_rgba(16,185,129,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.15)]',
      badgeBg: 'bg-white text-emerald-600 ring-emerald-200/70',
    },
  ];

  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="relative border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
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
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`group relative flex flex-col justify-between rounded-[12px] border ${step.borderStyle} bg-gradient-to-b ${step.cardBg} p-8 sm:p-9 ${step.shadowStyle} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className={`inline-flex items-center justify-center rounded-[8px] ${step.badgeBg} px-3 py-1 font-mono text-sm font-bold shadow-2xs ring-1`}>
                      {step.number}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Note */}
          <div className="rounded-[12px] border border-amber-200/60 bg-gradient-to-r from-[#FEFBF2] via-white to-[#FEFBF2] p-7 text-center sm:text-left shadow-[0_4px_16px_-4px_rgba(201,162,75,0.06)]">
            <p className="text-sm sm:text-base font-medium text-slate-800">
              Payment is structured around clear project milestones.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Get in touch with our team to discuss your project requirements and get a clear, fixed proposal.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_24px_rgba(201,162,75,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,162,75,0.48)] hover:brightness-105"
            >
              <span>Book a free discovery call</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
