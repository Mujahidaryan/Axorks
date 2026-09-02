import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Layers, Cpu, Smartphone, ShieldCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Axorks | Custom Web Applications & AI Automation for Growing Businesses',
  description:
    'Axorks helps growing businesses build custom web applications and automate manual work with AI. Projects start from $600. Book a free discovery call.',
  keywords: [
    'custom web application development',
    'AI automation for business',
    'custom software development UK',
    'web app development US',
    'business automation software',
    'custom software company',
    'software engineering company',
  ],
  openGraph: {
    title: 'Axorks | Custom Web Applications & AI Automation',
    description:
      'We help growing businesses build custom web applications and automate manual work with AI. Projects start from $600.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axorks | Custom Software & AI Automation',
    description: 'Custom web applications and AI automation for growing businesses. Projects from $600.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div>
      {/* ============================================================
          HERO — 100% FULL-BLEED CINEMATIC STAGE (ZERO SEAMS)
          Reference standard: Systems Limited (systemsltd.com)
      ============================================================ */}
      <section className="relative min-h-[760px] lg:min-h-[840px] w-full overflow-hidden bg-[#07080C] text-white flex items-center">
        {/* Full-Bleed 100% Background Canvas (Spans edge-to-edge across entire hero) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0">
          <Image
            src="/assets/illustrations/hero_flagship.png"
            alt=""
            fill
            priority
            className="object-cover object-[70%_center] lg:object-[right_center] scale-[1.03] opacity-80"
          />

          {/* Optical Gradient Scrim — Guarantees 100% text contrast on left while luminescent core breathes on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080C] via-[#07080C]/85 to-transparent lg:via-[#07080C]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-[#07080C]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080C]/80 via-transparent to-[#07080C]" />

          {/* Ambient atmospheric lighting accents */}
          <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#4F46E5]/15 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 right-1/3 h-[450px] w-[450px] rounded-full bg-[#0D9488]/15 blur-3xl opacity-50" />
          <div className="exec-grid absolute inset-0 opacity-[0.14]" />
        </div>

        {/* Hero Foreground Content — High contrast & authoritative */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-28 sm:px-8 sm:py-36 lg:py-40">
          <div className="max-w-2xl lg:max-w-[620px]">
            {/* Value Proposition Header */}
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              We build custom software that helps your business grow
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              Axorks helps growing businesses build custom web applications and automate manual work with AI. Projects start from $600.
            </p>

            {/* Primary Action Button */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_24px_rgba(201,162,75,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,162,75,0.48)] hover:brightness-105"
              >
                <span>Book a free discovery call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Factual Proof Subtext */}
            <p className="mt-7 text-sm text-slate-400 font-medium">
              We&apos;ve delivered real solutions in agriculture, healthcare, and AI decision systems.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT WE DO — CONTINUOUS CINEMATIC DARK STAGE
          Eliminates zebra-striping friction by extending the dark stage
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-[#07080C] text-white py-20 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              We focus on building software that solves real business problems. Every project gets a clear fixed-price proposal before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Service 1: Custom Web Applications */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-indigo-500/30 bg-gradient-to-br from-[#0E111A] via-[#131724] to-[#0A0C14] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.7)] text-white">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-35 transition-opacity duration-500 group-hover:opacity-45">
                <Image
                  src="/assets/illustrations/service_web.png"
                  alt=""
                  fill
                  className="object-cover object-right scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E111A] via-[#0E111A]/85 to-[#0E111A]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/15 text-indigo-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors">
                  Custom Web Applications
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  We build tailored web applications around how your business actually works.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-indigo-500/40 bg-indigo-500/20 text-indigo-300 backdrop-blur-xs">
                    Client Portals
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-indigo-500/40 bg-indigo-500/20 text-indigo-300 backdrop-blur-xs">
                    Internal Dashboards
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-indigo-500/40 bg-indigo-500/20 text-indigo-300 backdrop-blur-xs">
                    SaaS Platforms
                  </span>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                <Link
                  href="/contact?service=web-applications"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 2: AI Automation */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-teal-500/30 bg-gradient-to-br from-[#0E111A] via-[#131724] to-[#0A0C14] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.7)] text-white">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-35 transition-opacity duration-500 group-hover:opacity-45">
                <Image
                  src="/assets/illustrations/service_ai.png"
                  alt=""
                  fill
                  className="object-cover object-right scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E111A] via-[#0E111A]/85 to-[#0E111A]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/15 text-teal-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors">
                  AI Automation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  We use AI to automate repetitive work, improve decisions, and reduce manual effort.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-teal-500/40 bg-teal-500/20 text-teal-300 backdrop-blur-xs">
                    Document AI Pipelines
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-teal-500/40 bg-teal-500/20 text-teal-300 backdrop-blur-xs">
                    Automated Workflows
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-teal-500/40 bg-teal-500/20 text-teal-300 backdrop-blur-xs">
                    Decision Engines
                  </span>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                <Link
                  href="/contact?service=ai-automation"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition-colors hover:text-white"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 3: Mobile Apps */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-amber-500/30 bg-gradient-to-br from-[#0E111A] via-[#131724] to-[#0A0C14] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.7)] text-white">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-35 transition-opacity duration-500 group-hover:opacity-45">
                <Image
                  src="/assets/illustrations/service_mobile.png"
                  alt=""
                  fill
                  className="object-cover object-right scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E111A] via-[#0E111A]/85 to-[#0E111A]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/15 text-[#DFBD6C] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors">
                  Mobile Apps
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  We create mobile applications that make your products and services easier to access.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-amber-500/40 bg-amber-500/20 text-[#DFBD6C] backdrop-blur-xs">
                    iOS &amp; Android Apps
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-amber-500/40 bg-amber-500/20 text-[#DFBD6C] backdrop-blur-xs">
                    Offline Data Sync
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-amber-500/40 bg-amber-500/20 text-[#DFBD6C] backdrop-blur-xs">
                    Customer Portals
                  </span>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                <Link
                  href="/contact?service=mobile-apps"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#DFBD6C] transition-colors hover:text-white"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 4: Ongoing Support & Maintenance */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-emerald-500/30 bg-gradient-to-br from-[#0E111A] via-[#131724] to-[#0A0C14] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.7)] text-white">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-35 transition-opacity duration-500 group-hover:opacity-45">
                <Image
                  src="/assets/illustrations/process_flow.png"
                  alt=""
                  fill
                  className="object-cover object-right scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E111A] via-[#0E111A]/85 to-[#0E111A]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/15 text-emerald-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors">
                  Ongoing Support &amp; Maintenance
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  We keep your software secure, reliable, and improving after launch.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 backdrop-blur-xs">
                    Security Patches
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 backdrop-blur-xs">
                    Performance Tuning
                  </span>
                  <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 backdrop-blur-xs">
                    Continuous Releases
                  </span>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                <Link
                  href="/contact?service=support"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 transition-colors hover:text-white"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Banner */}
          <div className="mt-12 rounded-[14px] border border-amber-400/30 bg-gradient-to-r from-[#1A1811] via-[#241F14] to-[#1A1811] p-8 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
            <p className="text-base leading-relaxed text-slate-200">
              <strong className="font-semibold text-[#DFBD6C]">Simple pricing.</strong>{' '}
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#DFBD6C] hover:text-white shrink-0 transition-colors"
            >
              <span>Request proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES — WARM EDITORIAL CANVAS WITH BROWSER MOCKUPS
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] via-[#F4F2EB] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Our work
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Real projects we&apos;ve built for real businesses. Here&apos;s what we delivered and why it mattered.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-[#C9A24B]"
            >
              <span>View all projects</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* AgroTrace */}
            <article className="overflow-hidden rounded-[14px] border border-emerald-200/80 bg-gradient-to-b from-white to-[#F0FDF6] shadow-[0_4px_18px_-4px_rgba(16,185,129,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.16),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                {/* Browser Window Header Mockup */}
                <div className="border-b border-emerald-100/80 bg-slate-950/5 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">agrotrace.live</span>
                  <div className="w-10" />
                </div>
                <div className="overflow-hidden border-b border-emerald-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/Agrotrace.jpeg"
                    alt="AgroTrace supply chain platform"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/60">
                    Agriculture &amp; Telemetry
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">AgroTrace</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Supply-chain tracking platform with live thermal monitoring, automated alerts, and export-compliance validation.
                  </p>
                  <div className="mt-5 rounded-[8px] bg-white border border-emerald-100 p-3.5 shadow-2xs">
                    <p className="text-xs font-medium text-slate-900 leading-relaxed">
                      <strong className="font-semibold text-slate-950">Result:</strong> Gave logistics teams real-time visibility into temperature problems, shipment delays, and export compliance.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* IPMI-OS */}
            <article className="overflow-hidden rounded-[14px] border border-indigo-200/80 bg-gradient-to-b from-white to-[#EEF2FF] shadow-[0_4px_18px_-4px_rgba(79,70,229,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.16),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                {/* Browser Window Header Mockup */}
                <div className="border-b border-indigo-100/80 bg-slate-950/5 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">decision-engine.internal</span>
                  <div className="w-10" />
                </div>
                <div className="overflow-hidden border-b border-indigo-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/IPMI-OS.jpeg"
                    alt="AI decision system"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200/60">
                    AI Decision Systems
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">AI Decision System</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Adaptive AI-powered decision system that analyses changing conditions in real time and selects strategies according to current confidence levels.
                  </p>
                  <div className="mt-5 rounded-[8px] bg-white border border-indigo-100 p-3.5 shadow-2xs">
                    <p className="text-xs font-medium text-slate-900 leading-relaxed">
                      <strong className="font-semibold text-slate-950">Result:</strong> Helped teams identify changing conditions in real time and choose strategies based on the current situation.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* MediVerse */}
            <article className="overflow-hidden rounded-[14px] border border-teal-200/80 bg-gradient-to-b from-white to-[#E6FAF4] shadow-[0_4px_18px_-4px_rgba(13,148,136,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.16),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                {/* Browser Window Header Mockup */}
                <div className="border-b border-teal-100/80 bg-slate-950/5 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">mediverse.clinic</span>
                  <div className="w-10" />
                </div>
                <div className="overflow-hidden border-b border-teal-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/mediverse2.jpeg"
                    alt="MediVerse healthcare platform"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200/60">
                    Healthcare &amp; Clinical Portals
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">MediVerse</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Centralized platform for patients, doctors, and assistants with appointment scheduling, bilingual interface, and virtual consultation management.
                  </p>
                  <div className="mt-5 rounded-[8px] bg-white border border-teal-100 p-3.5 shadow-2xs">
                    <p className="text-xs font-medium text-slate-900 leading-relaxed">
                      <strong className="font-semibold text-slate-950">Result:</strong> Brought patient, doctor, and assistant workflows into one system, making appointments and administration easier to manage.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW WE WORK — MILESTONE WORKFLOW STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#0B0D14] via-[#0E111A] to-[#0A0C12] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#C9A24B]/5 blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How we work
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              A simple, clear process from first conversation to finished product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">01</span>
                  <span className="text-[11px] font-medium text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">1–2 Days</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">Discovery Call</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  We learn about your business, your goals, and the problem you need to solve.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                Deliverable: Requirements Alignment
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">02</span>
                  <span className="text-[11px] font-medium text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">48 Hours</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">Proposal</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  We turn your requirements into a clear scope, timeline, and fixed-price proposal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                Deliverable: Fixed-Price Quote
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">03</span>
                  <span className="text-[11px] font-medium text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">2–6 Weeks</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">Build &amp; Launch</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  Once approved, we build, test, deploy, and launch your solution.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                Deliverable: Production Deployment
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">04</span>
                  <span className="text-[11px] font-medium text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">Continuous</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">Ongoing Support</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  After launch we can continue maintaining, improving, and supporting your software.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                Deliverable: SLA Maintenance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY AXORKS — TINTED CARDS WITH ACCENTS
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] via-[#F4F2EB] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Fixed-price proposals', desc: 'You know the cost before we start. No surprises.', border: 'border-amber-200/80 hover:border-amber-400', bg: 'from-white to-[#FEF3C7]/40' },
              { title: 'Direct access to engineers', desc: 'You work directly with the people building your software. No middlemen.', border: 'border-indigo-200/80 hover:border-indigo-400', bg: 'from-white to-[#EEF2FF]/60' },
              { title: 'Real office, real team', desc: 'We operate from real offices in Karachi and Islamabad with a dedicated in-house team.', border: 'border-teal-200/80 hover:border-teal-400', bg: 'from-white to-[#E6FAF4]/60' },
              { title: 'Payment on milestones', desc: 'Payment is structured around clear project milestones. You pay for progress you can see.', border: 'border-amber-200/80 hover:border-amber-400', bg: 'from-white to-[#FEF3C7]/40' },
              { title: 'UK, US & EU time zones', desc: 'We overlap with your working hours for meetings and updates.', border: 'border-indigo-200/80 hover:border-indigo-400', bg: 'from-white to-[#EEF2FF]/60' },
              { title: '24-hour response guarantee', desc: 'Every message gets a response within 24 hours.', border: 'border-emerald-200/80 hover:border-emerald-400', bg: 'from-white to-[#E1F9EB]/60' },
            ].map((item) => (
              <div
                key={item.title}
                className={`group flex items-start gap-4 rounded-[12px] border ${item.border} bg-gradient-to-b ${item.bg} p-7 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08)]`}
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-white text-[#0D9488] shadow-sm ring-1 ring-teal-200/70 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          OFFICE — CRISP WHITE (REAL TEAM PROOF)
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="overflow-hidden rounded-[14px] border border-slate-200/85 bg-white shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[360px] bg-slate-100">
                <img
                  src="/AxorkOffice.png"
                  alt="Axorks office"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Real office. Real team.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  We work from our offices in Karachi and Islamabad with an in-house team of senior engineers and designers. When you work with Axorks, you work directly with the people building your product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT — DEEP OBSIDIAN CONVERSION STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
                Tell us what you need. We&apos;ll get back to you within 24 hours with an honest assessment of how we can help.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 ring-1 ring-teal-400/40">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  Free discovery call — no obligation
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 ring-1 ring-teal-400/40">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  Clear fixed-price proposal
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 ring-1 ring-teal-400/40">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  Response within 24 hours
                </li>
              </ul>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}