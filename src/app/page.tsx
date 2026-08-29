import { Metadata } from 'next';
import Link from 'next/link';
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
          HERO — HIGH-END CINEMATIC MOTION HERO (DESKTOP + MOBILE)
      ============================================================ */}
      <section className="relative min-h-[660px] overflow-hidden bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0B0D14] border-b border-white/[0.08] text-white flex items-center">
        {/* Layered luxury ambient lighting & glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4F46E5]/18 via-[#0D9488]/14 to-transparent blur-3xl opacity-60" />
          <div className="absolute top-1/3 left-[-100px] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#C9A24B]/10 via-[#7C3AED]/10 to-transparent blur-3xl opacity-50" />
          <div className="absolute -bottom-32 right-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-t from-[#0D9488]/15 to-transparent blur-3xl opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-[0.2]" />
        </div>

        {/* Hero Motion Video — Beautiful on desktop (56-58% span) & mobile (ambient alive background) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[56%] overflow-hidden select-none z-0 opacity-55 lg:opacity-90"
        >
          <div className="hero-video-blend relative h-full w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover object-[center_35%] scale-[1.08] -translate-y-1"
            >
              <source src="/assets/hero_motion.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Precision multi-stop gradient overlays for seamless edge blending and text dominance */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080C] via-[#07080C]/45 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-[#07080C]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080C]/80 via-transparent to-[#0B0D14]" />
          <div className="absolute inset-0 bg-[#07080C]/55 lg:hidden" />
        </div>

        {/* Hero Foreground Content — Dominant text & high contrast */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <div className="max-w-2xl lg:max-w-[590px] xl:max-w-[640px]">
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              We build custom software that helps your business grow
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              Axorks helps growing businesses build custom web applications and automate manual work with AI. Projects start from $600.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_24px_rgba(201,162,75,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,162,75,0.48)] hover:brightness-105"
              >
                <span>Book a free discovery call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-7 text-sm text-slate-400 font-medium">
              We&apos;ve delivered real solutions in agriculture, healthcare, and AI decision systems.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — COMPLETE ELEGANT COLOR FILLS (RICH TINTS)
      ============================================================ */}
      <section className="relative border-t border-slate-200/80 bg-[#FAF9F6]">
        {/* Subtle ambient light glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              We focus on building software that solves real business problems. Every project gets a clear fixed-price proposal before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {/* Service 1: Custom Web Applications (Complete Rich Indigo Color Fill) */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-indigo-200/80 bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF] p-8 sm:p-9 shadow-[0_4px_16px_-4px_rgba(79,70,229,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:bg-gradient-to-b hover:from-[#E0E7FF] hover:to-[#C7D2FE] hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.18),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200/80 transition-transform duration-300 group-hover:scale-105">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-950 transition-colors">
                  Custom Web Applications
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-700">
                  We build tailored web applications around how your business actually works.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-indigo-200/80">
                <Link
                  href="/contact?service=web-applications"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 transition-colors group-hover:text-indigo-950"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 2: AI Automation (Complete Rich Teal Color Fill) */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-teal-200/80 bg-gradient-to-b from-[#E6FAF4] to-[#CCFBF1] p-8 sm:p-9 shadow-[0_4px_16px_-4px_rgba(13,148,136,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:bg-gradient-to-b hover:from-[#CCFBF1] hover:to-[#99F6E4] hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.18),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-[#0D9488] shadow-sm ring-1 ring-teal-200/80 transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-teal-950 transition-colors">
                  AI Automation
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-700">
                  We use AI to automate repetitive work, improve decisions, and reduce manual effort.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-teal-200/80">
                <Link
                  href="/contact?service=ai-automation"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-800 transition-colors group-hover:text-teal-950"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 3: Mobile Apps (Complete Rich Champagne Gold Color Fill) */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-amber-200/80 bg-gradient-to-b from-[#FDF2D6] to-[#FDE8B5] p-8 sm:p-9 shadow-[0_4px_16px_-4px_rgba(201,162,75,0.1),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:bg-gradient-to-b hover:from-[#FDE8B5] hover:to-[#FCD34D]/60 hover:shadow-[0_24px_48px_-12px_rgba(201,162,75,0.22),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-[#B88E2F] shadow-sm ring-1 ring-amber-200/80 transition-transform duration-300 group-hover:scale-105">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-amber-950 transition-colors">
                  Mobile Apps
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-700">
                  We create mobile applications that make your products and services easier to access.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-amber-200/80">
                <Link
                  href="/contact?service=mobile-apps"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E7E32] transition-colors group-hover:text-amber-950"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 4: Ongoing Support & Maintenance (Complete Rich Emerald Color Fill) */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-emerald-200/80 bg-gradient-to-b from-[#E1F9EB] to-[#D1FAE5] p-8 sm:p-9 shadow-[0_4px_16px_-4px_rgba(16,185,129,0.08),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:bg-gradient-to-b hover:from-[#D1FAE5] hover:to-[#A7F3D0] hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.18),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-200/80 transition-transform duration-300 group-hover:scale-105">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-950 transition-colors">
                  Ongoing Support &amp; Maintenance
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-700">
                  We keep your software secure, reliable, and improving after launch.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-emerald-200/80">
                <Link
                  href="/contact?service=support"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 transition-colors group-hover:text-emerald-950"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Banner */}
          <div className="mt-10 rounded-[12px] border border-amber-200/70 bg-gradient-to-r from-[#FDF2D6] via-white to-[#FDF2D6] p-8 shadow-[0_4px_16px_-4px_rgba(201,162,75,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-base leading-relaxed text-slate-800">
              <strong className="font-semibold text-slate-950">Simple pricing.</strong>{' '}
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E7E32] hover:text-amber-950 shrink-0 transition-colors"
            >
              <span>Request proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES — CRISP WHITE (REAL PROJECT PROOF)
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-white">
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
            <article className="overflow-hidden rounded-[12px] border border-emerald-200/70 bg-gradient-to-b from-white to-[#F0FDF6] shadow-[0_4px_16px_-4px_rgba(16,185,129,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border-b border-emerald-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/Agrotrace.jpeg"
                    alt="AgroTrace supply chain platform"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/60">
                    Agriculture
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
            <article className="overflow-hidden rounded-[12px] border border-indigo-200/70 bg-gradient-to-b from-white to-[#EEF2FF] shadow-[0_4px_16px_-4px_rgba(79,70,229,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
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
            <article className="overflow-hidden rounded-[12px] border border-teal-200/70 bg-gradient-to-b from-white to-[#E6FAF4] shadow-[0_4px_16px_-4px_rgba(13,148,136,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border-b border-teal-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/mediverse2.jpeg"
                    alt="MediVerse healthcare platform"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-200/60">
                    Healthcare
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
          HOW WE WORK — DEEP OBSIDIAN STAGE WITH GLOWING ACCENTS
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#0B0D14] via-[#0E111A] to-[#0A0C12] text-white">
        {/* Subtle background glow */}
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
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)]">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">01</span>
              <h3 className="mt-4 text-base font-semibold text-white">Discovery Call</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                We learn about your business, your goals, and the problem you need to solve.
              </p>
            </div>
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)]">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">02</span>
              <h3 className="mt-4 text-base font-semibold text-white">Proposal</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                We turn your requirements into a clear scope, timeline, and fixed-price proposal.
              </p>
            </div>
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)]">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">03</span>
              <h3 className="mt-4 text-base font-semibold text-white">Build &amp; Launch</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Once approved, we build, test, deploy, and launch your solution.
              </p>
            </div>
            <div className="group relative rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-[#141722] to-[#0F121A] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A24B]/40 hover:shadow-[0_12px_32px_rgba(201,162,75,0.12)]">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]">04</span>
              <h3 className="mt-4 text-base font-semibold text-white">Ongoing Support</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                After launch we can continue maintaining, improving, and supporting your software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY AXORKS — TINTED CARDS WITH ACCENTS
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Fixed-price proposals', desc: 'You know the cost before we start. No surprises.', border: 'border-amber-200/70 hover:border-amber-300', bg: 'from-white to-[#FDF2D6]' },
              { title: 'Direct access to engineers', desc: 'You work directly with the people building your software. No middlemen.', border: 'border-indigo-200/70 hover:border-indigo-300', bg: 'from-white to-[#EEF2FF]' },
              { title: 'Real office, real team', desc: 'We operate from real offices in Karachi and Islamabad with a dedicated in-house team.', border: 'border-teal-200/70 hover:border-teal-300', bg: 'from-white to-[#E6FAF4]' },
              { title: 'Payment on milestones', desc: 'Payment is structured around clear project milestones. You pay for progress you can see.', border: 'border-amber-200/70 hover:border-amber-300', bg: 'from-white to-[#FDF2D6]' },
              { title: 'UK, US & EU time zones', desc: 'We overlap with your working hours for meetings and updates.', border: 'border-indigo-200/70 hover:border-indigo-300', bg: 'from-white to-[#EEF2FF]' },
              { title: '24-hour response guarantee', desc: 'Every message gets a response within 24 hours.', border: 'border-emerald-200/70 hover:border-emerald-300', bg: 'from-white to-[#E1F9EB]' },
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
          <div className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-white shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)]">
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