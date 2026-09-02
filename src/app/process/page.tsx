import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, FileText, PhoneCall, Rocket, RefreshCw, ShieldCheck } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'How We Work | Axorks',
  description:
    'A simple, transparent 4-step software development process from discovery call to proposal, build, launch, and ongoing support.',
  openGraph: {
    title: 'How We Work | Axorks',
    description:
      'A simple, clear process from first conversation to finished product with fixed-price proposals and milestone payments.',
    url: `${SITE_URL}/process`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | Axorks',
    description: 'A simple, clear process from first conversation to finished product.',
  },
  alternates: {
    canonical: '/process',
  },
};

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    time: '1–2 Days',
    deliverable: 'Technical Scope Alignment',
    icon: <PhoneCall className="h-5 w-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    cardBorder: 'border-indigo-200/90 hover:border-indigo-400/80',
    cardBg: 'from-white via-[#EEF2FF]/60 to-[#E0E7FF]/40',
    numColor: 'text-indigo-700',
    desc: 'We learn about your business, your goals, and the problem you need to solve.',
    points: ['Understand current bottlenecks', 'Define core business outcomes', 'Align on timeline & budget'],
  },
  {
    num: '02',
    title: 'Proposal',
    time: '48 Hours',
    deliverable: 'Fixed-Price Proposal',
    icon: <FileText className="h-5 w-5 text-[#B88E2F]" />,
    iconBg: 'bg-amber-50 border-amber-200 text-[#B88E2F]',
    cardBorder: 'border-amber-200/90 hover:border-amber-400/80',
    cardBg: 'from-white via-[#FEF3C7]/60 to-[#FDE68A]/30',
    numColor: 'text-[#9E7E32]',
    desc: 'We turn your requirements into a clear scope, timeline, and fixed-price proposal.',
    points: ['Architecture breakdown', 'Transparent fixed pricing', 'Milestone delivery schedule'],
  },
  {
    num: '03',
    title: 'Build & Launch',
    time: '2–6 Weeks',
    deliverable: 'Production Deployment',
    icon: <Rocket className="h-5 w-5 text-teal-600" />,
    iconBg: 'bg-teal-50 border-teal-200 text-teal-700',
    cardBorder: 'border-teal-200/90 hover:border-teal-400/80',
    cardBg: 'from-white via-[#E6FAF4]/60 to-[#CCFBF1]/40',
    numColor: 'text-teal-700',
    desc: 'Once approved, we build, test, deploy, and launch your solution.',
    points: ['Interactive weekly previews', 'Automated QA & security testing', 'Zero-downtime deployment'],
  },
  {
    num: '04',
    title: 'Ongoing Support',
    time: 'Continuous',
    deliverable: 'SLA Retainer Support',
    icon: <RefreshCw className="h-5 w-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    cardBorder: 'border-emerald-200/90 hover:border-emerald-400/80',
    cardBg: 'from-white via-[#E1F9EB]/60 to-[#D1FAE5]/40',
    numColor: 'text-emerald-700',
    desc: 'After launch we can continue maintaining, improving, and supporting your software.',
    points: ['Proactive security monitoring', 'Performance optimization', 'Continuous feature iteration'],
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="relative border-b border-slate-200/80 bg-gradient-to-b from-[#FBFBFA] via-[#F6F4EE] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-200/70 mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Milestone-Based Engineering Workflow</span>
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              How we work
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              A simple, clear process from first conversation to finished product. You always know what is being built, when it will be delivered, and what it costs.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          HORIZONTAL PROCESS CONNECTIVITY ILLUSTRATION (ELIMINATES EMPTY GAP)
      ============================================================ */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#07080C] py-10 sm:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[700px] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-r from-[#0C0E17] via-[#121624] to-[#0C0E17] shadow-2xl">
            <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden">
              <Image
                src="/assets/illustrations/process_flow.png"
                alt="Systematic Software Engineering Workflow Architecture"
                fill
                priority
                className="object-cover object-center opacity-85 scale-[1.02]"
              />
              {/* Soft dark gradient edge overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07080C] via-transparent to-[#07080C]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-[#07080C]/60" />

              {/* Workflow Step Markers Overlay */}
              <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between text-xs text-white/90 bg-slate-950/70 backdrop-blur-md px-5 py-2.5 rounded-[10px] border border-white/10">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#C9A24B] animate-pulse" />
                  Step 01 Discovery
                </span>
                <span className="text-slate-400">→</span>
                <span className="font-semibold text-slate-200">Step 02 Scope &amp; Proposal</span>
                <span className="text-slate-400">→</span>
                <span className="font-semibold text-slate-200">Step 03 Build &amp; Milestone Launch</span>
                <span className="text-slate-400">→</span>
                <span className="font-semibold text-teal-300">Step 04 SLA Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS CARDS GRID — ELEVATED & STRUCTURED
      ============================================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF9F6] via-[#F4F2EB] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[14px] border ${step.cardBorder} bg-gradient-to-br ${step.cardBg} p-8 sm:p-9 shadow-[0_4px_18px_-4px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)]`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-[10px] border ${step.iconBg} shadow-2xs`}>
                        {step.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                          {step.title}
                        </h2>
                        <span className="text-xs text-slate-500 font-medium">Deliverable: {step.deliverable}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold font-mono ${step.numColor}`}>
                        {step.num}
                      </span>
                      <p className="text-[11px] font-semibold text-slate-500">{step.time}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-slate-700">
                    {step.desc}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {step.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/70">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-[#C9A24B]"
                  >
                    <span>Start with Step {step.num}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Milestone Note */}
          <div className="mt-12 rounded-[12px] border border-amber-200/80 bg-gradient-to-r from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] p-8 shadow-[0_4px_16px_-4px_rgba(201,162,75,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-base leading-relaxed text-slate-800">
              <strong className="font-semibold text-slate-950">Milestone-based payments.</strong>{' '}
              Payment is structured around clear project milestones. You only pay for deliverables you can inspect and approve.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E7E32] hover:text-amber-950 shrink-0 transition-colors"
            >
              <span>Book a discovery call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free discovery call. We&apos;ll walk through your requirements and deliver a clear fixed-price plan within 48 hours.
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
