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
          HERO — RESTORED ANIMATED BACKGROUND TREATMENT
      ============================================================ */}
      <section className="relative overflow-hidden bg-white">
        {/* Ambient meshes + animated video background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Ambient glowing drift meshes */}
          <div className="exec-mesh mesh-indigo-light animate-drift-slow absolute -left-32 -top-32 h-[520px] w-[520px] opacity-40" />
          <div className="exec-mesh mesh-teal-light animate-drift-slower absolute -bottom-32 -right-32 h-[520px] w-[520px] opacity-35" />
          <div className="exec-mesh mesh-amber-light absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-25" />

          {/* Background video — quiet ambient motion */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full scale-105 object-cover"
              style={{ objectPosition: '60% center' }}
            >
              <source src="/assets/hero_motion.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
          </div>

          {/* Fine subtle grid overlay */}
          <div className="exec-grid-light absolute inset-0 opacity-40" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We build custom software that helps your business grow
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Axorks helps growing businesses build custom web applications and automate manual work with AI. Projects start from $600.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Book a free discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              We&apos;ve delivered real solutions in agriculture, healthcare, and AI decision systems.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              We focus on building software that solves real business problems. Every project gets a clear fixed-price proposal before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Service 1 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">Custom Web Applications</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We build tailored web applications around how your business actually works.
              </p>
              <Link
                href="/contact?service=web-applications"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-700"
              >
                Discuss your project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">AI Automation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We use AI to automate repetitive work, improve decisions, and reduce manual effort.
              </p>
              <Link
                href="/contact?service=ai-automation"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-700"
              >
                Discuss your project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">Mobile Apps</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We create mobile applications that make your products and services easier to access.
              </p>
              <Link
                href="/contact?service=mobile-apps"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-700"
              >
                Discuss your project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">Ongoing Support &amp; Maintenance</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We keep your software secure, reliable, and improving after launch.
              </p>
              <Link
                href="/contact?service=support"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-700"
              >
                Discuss your project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-[12px] border border-slate-200 bg-white px-6 py-4">
            <p className="text-sm text-slate-600">
              <strong className="font-semibold text-slate-900">Simple pricing.</strong>{' '}
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES — CLEAN PROPERLY FRAMED SCREENSHOTS
      ============================================================ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
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
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-700"
            >
              View all projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* AgroTrace */}
            <div className="overflow-hidden rounded-[12px] border border-slate-200 flex flex-col justify-between bg-white shadow-sm">
              <div>
                <div className="overflow-hidden border-b border-slate-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/Agrotrace.jpeg"
                    alt="AgroTrace supply chain platform"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Agriculture</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">AgroTrace</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Supply-chain tracking platform with live thermal monitoring, automated alerts, and export-compliance validation.
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-900">
                    Result: Gave logistics teams real-time visibility into temperature problems, shipment delays, and export compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* IPMI-OS */}
            <div className="overflow-hidden rounded-[12px] border border-slate-200 flex flex-col justify-between bg-white shadow-sm">
              <div>
                <div className="overflow-hidden border-b border-slate-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/IPMI-OS.jpeg"
                    alt="AI decision system"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">AI Decision Systems</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">AI Decision System</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Adaptive AI-powered decision system that analyses changing conditions in real time and selects strategies according to current confidence levels.
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-900">
                    Result: Helped teams identify changing conditions in real time and choose strategies based on the current situation.
                  </p>
                </div>
              </div>
            </div>

            {/* MediVerse */}
            <div className="overflow-hidden rounded-[12px] border border-slate-200 flex flex-col justify-between bg-white shadow-sm">
              <div>
                <div className="overflow-hidden border-b border-slate-100 bg-slate-900/[0.02]">
                  <img
                    src="/projects/mediverse2.jpeg"
                    alt="MediVerse healthcare platform"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Healthcare</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">MediVerse</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Centralized platform for patients, doctors, and assistants with appointment scheduling, bilingual interface, and virtual consultation management.
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-900">
                    Result: Brought patient, doctor, and assistant workflows into one system, making appointments and administration easier to manage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW WE WORK
      ============================================================ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              How we work
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              A simple, clear process from first conversation to finished product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <span className="text-2xl font-semibold text-slate-300">01</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">Discovery Call</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We learn about your business, your goals, and the problem you need to solve.
              </p>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <span className="text-2xl font-semibold text-slate-300">02</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">Proposal</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We turn your requirements into a clear scope, timeline, and fixed-price proposal.
              </p>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <span className="text-2xl font-semibold text-slate-300">03</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">Build &amp; Launch</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Once approved, we build, test, deploy, and launch your solution.
              </p>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-white p-6">
              <span className="text-2xl font-semibold text-slate-300">04</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">Ongoing Support</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                After launch we can continue maintaining, improving, and supporting your software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY AXORKS
      ============================================================ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {[
              { title: 'Fixed-price proposals', desc: 'You know the cost before we start. No surprises.' },
              { title: 'Direct access to engineers', desc: 'You work directly with the people building your software. No middlemen.' },
              { title: 'Real office, real team', desc: 'We operate from real offices in Karachi and Islamabad with a dedicated in-house team.' },
              { title: 'Payment on milestones', desc: 'Payment is structured around clear project milestones. You pay for progress you can see.' },
              { title: 'UK, US & EU time zones', desc: 'We overlap with your working hours for meetings and updates.' },
              { title: '24-hour response guarantee', desc: 'Every message gets a response within 24 hours.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-[12px] border border-slate-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          OFFICE
      ============================================================ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[320px]">
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
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  We work from our offices in Karachi and Islamabad with an in-house team of senior engineers and designers. When you work with Axorks, you work directly with the people building your product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT
      ============================================================ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                Tell us what you need. We&apos;ll get back to you within 24 hours with an honest assessment of how we can help.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" />
                  Free discovery call — no obligation
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" />
                  Clear fixed-price proposal
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" />
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