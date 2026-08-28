import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
          HERO — SOFT PREMIUM EXECUTIVE DARK HERO (CALM, STRONG, LUXURIOUS)
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#0A0B0E] border-b border-white/[0.08] text-white">
        {/* Subtle, calm static depth atmosphere */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#0D9488]/12 via-[#C9A24B]/6 to-transparent blur-3xl opacity-50" />
          <div className="absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#3730A3]/10 to-transparent blur-3xl opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-[0.18]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              We build custom software that helps your business grow
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Axorks helps growing businesses build custom web applications and automate manual work with AI. Projects start from $600.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-[12px] bg-[#C9A24B] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_20px_rgba(201,162,75,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:shadow-[0_8px_30px_rgba(201,162,75,0.35)]"
              >
                <span>Book a free discovery call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="mt-7 text-sm text-slate-400">
              We&apos;ve delivered real solutions in agriculture, healthcare, and AI decision systems.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — SOFT OFF-WHITE (65% LIGHT DOMINANT)
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              We focus on building software that solves real business problems. Every project gets a clear fixed-price proposal before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {/* Service 1 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/80 bg-white p-8 sm:p-9 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24B]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
                  Custom Web Applications
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-600">
                  We build tailored web applications around how your business actually works.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/contact?service=web-applications"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-[#C9A24B]"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/80 bg-white p-8 sm:p-9 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0D9488]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
                  AI Automation
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-600">
                  We use AI to automate repetitive work, improve decisions, and reduce manual effort.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/contact?service=ai-automation"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-[#0D9488]"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/80 bg-white p-8 sm:p-9 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24B]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
                  Mobile Apps
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-600">
                  We create mobile applications that make your products and services easier to access.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/contact?service=mobile-apps"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-[#C9A24B]"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/80 bg-white p-8 sm:p-9 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0D9488]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
                  Ongoing Support &amp; Maintenance
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-slate-600">
                  We keep your software secure, reliable, and improving after launch.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href="/contact?service=support"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-[#0D9488]"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Banner */}
          <div className="mt-10 rounded-[12px] border border-slate-200/85 bg-white p-8 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]">
            <p className="text-base leading-relaxed text-slate-700">
              <strong className="font-semibold text-slate-950">Simple pricing.</strong>{' '}
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES — CRISP WHITE (65% LIGHT DOMINANT)
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
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* AgroTrace */}
            <article className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border-b border-slate-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/Agrotrace.jpeg"
                    alt="AgroTrace supply chain platform"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Agriculture</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">AgroTrace</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Supply-chain tracking platform with live thermal monitoring, automated alerts, and export-compliance validation.
                  </p>
                  <p className="mt-4 text-sm font-medium text-slate-900 pt-3 border-t border-slate-100">
                    Result: Gave logistics teams real-time visibility into temperature problems, shipment delays, and export compliance.
                  </p>
                </div>
              </div>
            </article>

            {/* IPMI-OS */}
            <article className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border-b border-slate-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/IPMI-OS.jpeg"
                    alt="AI decision system"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">AI Decision Systems</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">AI Decision System</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Adaptive AI-powered decision system that analyses changing conditions in real time and selects strategies according to current confidence levels.
                  </p>
                  <p className="mt-4 text-sm font-medium text-slate-900 pt-3 border-t border-slate-100">
                    Result: Helped teams identify changing conditions in real time and choose strategies based on the current situation.
                  </p>
                </div>
              </div>
            </article>

            {/* MediVerse */}
            <article className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <div>
                <div className="overflow-hidden border-b border-slate-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/mediverse2.jpeg"
                    alt="MediVerse healthcare platform"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Healthcare</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">MediVerse</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Centralized platform for patients, doctors, and assistants with appointment scheduling, bilingual interface, and virtual consultation management.
                  </p>
                  <p className="mt-4 text-sm font-medium text-slate-900 pt-3 border-t border-slate-100">
                    Result: Brought patient, doctor, and assistant workflows into one system, making appointments and administration easier to manage.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW WE WORK — DEEP OBSIDIAN STAGE (35% DARK ACCENT)
      ============================================================ */}
      <section className="border-t border-white/[0.08] bg-[#0D0F14] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How we work
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              A simple, clear process from first conversation to finished product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-[12px] border border-white/[0.08] bg-[#141720] p-8 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono">01</span>
              <h3 className="mt-4 text-base font-semibold text-white">Discovery Call</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                We learn about your business, your goals, and the problem you need to solve.
              </p>
            </div>
            <div className="group rounded-[12px] border border-white/[0.08] bg-[#141720] p-8 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono">02</span>
              <h3 className="mt-4 text-base font-semibold text-white">Proposal</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                We turn your requirements into a clear scope, timeline, and fixed-price proposal.
              </p>
            </div>
            <div className="group rounded-[12px] border border-white/[0.08] bg-[#141720] p-8 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono">03</span>
              <h3 className="mt-4 text-base font-semibold text-white">Build &amp; Launch</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Once approved, we build, test, deploy, and launch your solution.
              </p>
            </div>
            <div className="group rounded-[12px] border border-white/[0.08] bg-[#141720] p-8 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
              <span className="text-2xl font-bold text-[#C9A24B] font-mono">04</span>
              <h3 className="mt-4 text-base font-semibold text-white">Ongoing Support</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                After launch we can continue maintaining, improving, and supporting your software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY AXORKS — SOFT LIGHT (65% LIGHT DOMINANT)
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Fixed-price proposals', desc: 'You know the cost before we start. No surprises.' },
              { title: 'Direct access to engineers', desc: 'You work directly with the people building your software. No middlemen.' },
              { title: 'Real office, real team', desc: 'We operate from real offices in Karachi and Islamabad with a dedicated in-house team.' },
              { title: 'Payment on milestones', desc: 'Payment is structured around clear project milestones. You pay for progress you can see.' },
              { title: 'UK, US & EU time zones', desc: 'We overlap with your working hours for meetings and updates.' },
              { title: '24-hour response guarantee', desc: 'Every message gets a response within 24 hours.' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[12px] border border-slate-200/85 bg-white p-7 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_12px_24px_-6px_rgba(15,23,42,0.06)]"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-teal-50 text-[#0D9488] ring-1 ring-teal-200/60">
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
          OFFICE — CRISP WHITE (65% LIGHT DOMINANT)
      ============================================================ */}
      <section className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[360px] bg-slate-100">
                <img
                  src="/AxorkOffice.png"
                  alt="Axorks office"
                  className="h-full w-full object-cover"
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
          CONTACT — DEEP OBSIDIAN CONVERSION STAGE (35% DARK ACCENT)
      ============================================================ */}
      <section className="border-t border-white/[0.08] bg-[#0B0C10] text-white">
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
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 ring-1 ring-teal-400/40">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  Free discovery call — no obligation
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 ring-1 ring-teal-400/40">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  Clear fixed-price proposal
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 ring-1 ring-teal-400/40">
                    <CheckCircle2 className="h-3.5 w-3.5" />
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