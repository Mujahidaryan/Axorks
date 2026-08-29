import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Our Work | Axorks',
  description:
    "Real projects we've built for real businesses across supply chain tracking, healthcare platforms, and AI decision systems.",
  openGraph: {
    title: 'Our Work | Axorks',
    description:
      "Real projects we've built for real businesses across supply chain tracking, healthcare platforms, and AI decision systems.",
    url: `${SITE_URL}/case-studies`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Axorks',
    description:
      "Real projects we've built for real businesses across supply chain tracking, healthcare platforms, and AI decision systems.",
  },
  alternates: {
    canonical: '/case-studies',
  },
};

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  badgeStyle: string;
  problem: string;
  solution: string;
  result: string;
  heroImage: string;
  heroAlt: string;
  additionalImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'agrotrace',
    name: 'AgroTrace',
    category: 'Agriculture',
    badgeStyle: 'bg-emerald-50 text-emerald-700 ring-emerald-200/70',
    problem:
      'Agricultural exporters lacked real-time visibility into temperature problems and logistics delays during international transit, creating risks of cargo spoilage and compliance failures.',
    solution:
      'Supply-chain tracking platform with live thermal monitoring, automated alerts, geospatial tracking, and export-compliance validation.',
    result:
      'Gave logistics teams real-time visibility into temperature problems, shipment delays, and export compliance.',
    heroImage: '/projects/Agrotrace.jpeg',
    heroAlt: 'AgroTrace supply chain tracking and logistics telemetry platform',
    additionalImages: [
      {
        src: '/projects/agrotrace2.jpeg',
        alt: 'AgroTrace thermal monitoring and sensor alert interface',
        caption: 'Live Supply Chain Dashboard & Monitoring',
      },
      {
        src: '/projects/Agrotrace3.jpeg',
        alt: 'AgroTrace route tracking and export compliance validation',
        caption: 'Logistics Route Tracking & Export Compliance',
      },
    ],
  },
  {
    id: 'ai-decision-system',
    name: 'AI Decision System',
    category: 'AI & Data Systems',
    badgeStyle: 'bg-indigo-50 text-indigo-700 ring-indigo-200/70',
    problem:
      'Traditional rule-based indicators became unreliable during rapid market changes and liquidity spikes.',
    solution:
      'Adaptive AI-powered decision system that analyses changing conditions in real time and selects strategies according to current confidence levels.',
    result:
      'Helped teams identify changing market conditions in real time and choose strategies based on the current situation.',
    heroImage: '/projects/IPMI-OS.jpeg',
    heroAlt: 'AI decision system for complex, rapidly changing data environments',
    additionalImages: [
      {
        src: '/projects/IPMI-OS2.jpeg',
        alt: 'AI decision system real-time monitoring and strategy confidence levels',
        caption: 'Real-Time Strategy Confidence & Execution Readiness',
      },
      {
        src: '/projects/IPMI-OS3.jpeg',
        alt: 'AI decision system analytics and performance tracking',
        caption: 'Performance Analytics & Signal History',
      },
    ],
  },
  {
    id: 'mediverse',
    name: 'MediVerse',
    category: 'Healthcare',
    badgeStyle: 'bg-teal-50 text-teal-700 ring-teal-200/70',
    problem:
      'Patients faced disconnected booking processes for specialist appointments and home visits, while staff spent significant time coordinating schedules manually.',
    solution:
      'Centralized platform for patients, doctors, and assistants with appointment scheduling, bilingual interface, role-based access, and virtual consultation management.',
    result:
      'Brought patient, doctor, and assistant workflows into one system, making appointments and administration easier to manage.',
    heroImage: '/projects/mediverse2.jpeg',
    heroAlt: 'MediVerse healthcare clinic management and appointment scheduling platform',
    additionalImages: [
      {
        src: '/projects/Mediverse3.jpeg',
        alt: 'MediVerse doctor consultation and patient booking management',
        caption: 'Clinical Service Management & Patient Booking',
      },
      {
        src: '/projects/Mediverse4.jpeg',
        alt: 'MediVerse clinical records and administrative dashboard',
        caption: 'Administrative Scheduling & Records Portal',
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          PAGE HEADER — SOFT IVORY
      ============================================================ */}
      <section className="relative border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Our work
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Real projects we&apos;ve built for real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES LIST — CLEAN CARDS & HIGH QUALITY PROOF
      ============================================================ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-20 sm:space-y-28">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-[12px] border border-slate-200/85 bg-white p-7 sm:p-9 lg:p-11 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.05),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.09),0_8px_16px_-4px_rgba(15,23,42,0.04)]"
            >
              {/* Header: Category, Title & Action */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${study.badgeStyle}`}>
                    {study.category}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {study.name}
                  </h2>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow self-start sm:self-auto"
                >
                  <span>Start a similar project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Large Hero Screenshot — Fully visible, uncropped framing */}
              <div className="mt-8 overflow-hidden rounded-[12px] border border-slate-200/85 bg-slate-900/[0.02] shadow-sm">
                <img
                  src={study.heroImage}
                  alt={study.heroAlt}
                  className="w-full h-auto block rounded-[12px] transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>

              {/* Problem → Solution → Result */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-[12px] border border-slate-200/70 bg-[#FAF9F6] p-6 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Problem
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-[12px] border border-slate-200/70 bg-[#FAF9F6] p-6 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Solution
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {study.solution}
                  </p>
                </div>

                <div className="rounded-[12px] border border-slate-200/70 bg-[#FAF9F6] p-6 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Result
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-900 font-medium">
                    {study.result}
                  </p>
                </div>
              </div>

              {/* Additional Screenshots Grid — Fully visible without clipping */}
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Additional Screenshots
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {study.additionalImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-[#FAF9F6] flex flex-col shadow-sm transition-all duration-300 hover:border-slate-300"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto block rounded-t-[12px] transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                      {img.caption && (
                        <div className="border-t border-slate-200/70 bg-[#FAF9F6] px-4 py-2.5 text-xs text-slate-600 font-medium">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-6">
                <p className="text-sm text-slate-500">
                  Ready to build something similar for your business?
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-[#C9A24B]"
                >
                  <span>Start a similar project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Tell us what you need. We&apos;ll get back to you within 24 hours with an honest assessment and a clear fixed-price plan.
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
