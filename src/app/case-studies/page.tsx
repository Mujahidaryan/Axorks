import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Cpu, HeartPulse } from 'lucide-react';
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
  domain: string;
  icon: any;
  badgeStyle: string;
  problem: string;
  solution: string;
  result: string;
  heroImage: string;
  heroAlt: string;
  accentGradient: string;
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
    category: 'Agriculture & IoT Telemetry',
    domain: 'agrotrace.live',
    icon: <Layers className="h-4 w-4" />,
    badgeStyle: 'bg-slate-100 text-slate-800 ring-slate-200',
    accentGradient: 'from-slate-500/10 via-slate-500/5 to-transparent',
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
    category: 'AI & Real-Time Data',
    domain: 'decision-engine.internal',
    icon: <Cpu className="h-4 w-4" />,
    badgeStyle: 'bg-slate-100 text-slate-800 ring-slate-200',
    accentGradient: 'from-slate-500/10 via-slate-500/5 to-transparent',
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
    category: 'Healthcare & Clinical Workflows',
    domain: 'mediverse.clinic',
    icon: <HeartPulse className="h-4 w-4" />,
    badgeStyle: 'bg-slate-100 text-slate-800 ring-slate-200',
    accentGradient: 'from-slate-500/10 via-slate-500/5 to-transparent',
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
    <div className="bg-[#F8F7F4]">
      {/* ============================================================
          PAGE HERO — 100% FULL-BLEED CINEMATIC HERO_MOTION (ZERO EMPTY SPACE)
      ============================================================ */}
      <section className="relative min-h-[520px] lg:min-h-[580px] w-full overflow-hidden bg-[#0B0F19] text-[#F8FAFC] flex items-center border-b border-white/[0.08]">
        {/* Full-Bleed 100% Background Canvas with Hero_motion Video */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/illustrations/work_hero_architecture.png"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:object-[right_center] scale-[1.04] opacity-80"
          >
            <source src="/assets/hero_motion.mp4" type="video/mp4" />
          </video>

          {/* Optical Gradient Scrim — Ensures 100% text dominance and zero visual seams */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/85 to-transparent lg:via-[#0B0F19]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-transparent to-[#0B0F19]" />

          {/* Ambient atmospheric lighting with subtle pulse */}
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1E293B]/40 blur-3xl opacity-60 animate-glow-pulse" />
          <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#334155]/30 blur-3xl opacity-50 animate-glow-pulse" />
          <div className="exec-grid absolute inset-0 opacity-[0.15]" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
          <div className="max-w-2xl lg:max-w-[620px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#DFBD6C] ring-1 ring-white/15 mb-5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Verified Client Systems Delivered</span>
            </span>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Our work
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              Real projects we&apos;ve built for real businesses. From global supply chain telemetry to automated healthcare scheduling and adaptive decision systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 border border-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#DFBD6C]" />
                100% In-House Architecture
              </span>
              <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 border border-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#DFBD6C]" />
                Live Production Systems
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES LIST — ELEVATED CARDS WITH BROWSER MOCKUPS
      ============================================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F8F7F4] via-[#F2F0EB] to-[#F8F7F4]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-20 sm:space-y-28">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="relative overflow-hidden rounded-[14px] border border-slate-200/90 bg-white p-7 sm:p-9 lg:p-11 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.1),0_8px_16px_-4px_rgba(15,23,42,0.04)]"
            >
              {/* Header: Category, Title & Action */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6">
                <div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${study.badgeStyle}`}>
                    {study.icon}
                    <span>{study.category}</span>
                  </span>
                  <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
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

              {/* Large Hero Screenshot with Browser Window Mockup Frame */}
              <div className="mt-8 overflow-hidden rounded-[12px] border border-slate-200/90 bg-slate-900/[0.02] shadow-sm">
                <div className="border-b border-slate-200/80 bg-slate-950/5 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{study.domain}</span>
                  <div className="w-10" />
                </div>
                <img
                  src={study.heroImage}
                  alt={study.heroAlt}
                  className="w-full h-auto block rounded-b-[12px] transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>

              {/* Problem → Solution → Result */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-[12px] border border-slate-200/70 bg-[#F8F7F4] p-6 shadow-2xs">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Problem
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-[12px] border border-slate-200/70 bg-[#F8F7F4] p-6 shadow-2xs">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Solution
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {study.solution}
                  </p>
                </div>

                <div className="rounded-[12px] border border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100 p-6 shadow-2xs">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                    Result
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#0F172A] font-medium">
                    {study.result}
                  </p>
                </div>
              </div>

              {/* Additional Screenshots Grid */}
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Additional System Screenshots
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {study.additionalImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-[#F8F7F4] flex flex-col shadow-sm transition-all duration-300 hover:border-slate-300"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto block rounded-t-[12px] transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                      {img.caption && (
                        <div className="border-t border-slate-200/70 bg-white px-4 py-2.5 text-xs text-slate-700 font-medium">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-6">
                <p className="text-sm text-slate-600 font-medium">
                  Ready to build something similar for your business?
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#C9A227]"
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
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19] text-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Tell us what you need. We&apos;ll get back to you within 24 hours with an honest assessment and a clear fixed-price plan.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A227] to-[#B88E2F] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_24px_rgba(201,162,39,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,162,39,0.48)] hover:brightness-105"
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
