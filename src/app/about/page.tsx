import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, LINKEDIN_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About | Axorks',
  description:
    'Axorks is a registered software engineering company helping growing businesses build custom web applications and automate manual work with AI. Meet our leadership.',
  openGraph: {
    title: 'About | Axorks',
    description:
      'Axorks is a registered software engineering company helping growing businesses build custom web applications and automate manual work with AI.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'profile',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Axorks',
    description: 'Meet the leadership behind Axorks. Real office. Real team. Real results.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          PAGE HERO — 100% FULL-BLEED CINEMATIC STAGE (ZERO EMPTY SPACE)
      ============================================================ */}
      <section className="relative min-h-[520px] lg:min-h-[580px] w-full overflow-hidden bg-[#07080C] text-white flex items-center border-b border-white/[0.08]">
        {/* Full-Bleed 100% Background Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0">
          <Image
            src="/assets/illustrations/about_hero.png"
            alt=""
            fill
            priority
            className="object-cover object-[75%_center] lg:object-[right_center] scale-[1.04] opacity-80"
          />

          {/* Optical Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080C] via-[#07080C]/85 to-transparent lg:via-[#07080C]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-[#07080C]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080C]/80 via-transparent to-[#07080C]" />

          {/* Ambient atmospheric lighting */}
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl" />
          <div className="exec-grid absolute inset-0 opacity-[0.15]" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
          <div className="max-w-2xl lg:max-w-[620px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#DFBD6C] ring-1 ring-white/15 mb-4">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C9A24B]" />
              <span>Registered Software Engineering Studio</span>
            </span>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Axorks
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              Axorks helps growing businesses build custom web applications and automate manual work with AI. We&apos;re a registered private software company with real offices, a dedicated in-house team, and real projects delivered.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPANY — REAL OFFICE & REGISTRATION
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Real office. Real team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We operate from our offices in Karachi and Islamabad with an in-house team of 7+ senior engineers and designers. When you work with Axorks, you work directly with the people building your product — no middlemen, no outsourcing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Axorks is registered as Axorks Pvt Limited. We serve clients across the UK, US, EU, and worldwide with transparent communication, direct access to leadership, and overlapping working hours.
              </p>
            </div>
            <div className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-slate-100 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)]">
              <img
                src="/AxorkOffice.png"
                alt="Axorks corporate office"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP — FOUNDER & CO-FOUNDER PROFILES
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Leadership
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Direct access to our founders on every project from discovery to deployment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Muhammad Mujahid */}
            <div className="flex flex-col justify-between rounded-[12px] border border-indigo-200/60 bg-gradient-to-b from-[#F4F6FF] to-[#EBF0FE] p-8 sm:p-9 shadow-[0_4px_16px_-4px_rgba(79,70,229,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.15),0_8px_16px_-4px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-indigo-300">
              <div>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[12px] border border-indigo-200 bg-white shadow-sm">
                    <img
                      src="/assets/founder_mujahid.jpg"
                      alt="Muhammad Mujahid"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{FOUNDER_NAME}</h3>
                    <p className="text-sm font-semibold text-indigo-700">
                      Founder &amp; Chief Systems Architect
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    Muhammad Mujahid founded Axorks to help growing businesses solve real operational challenges through custom software and AI automations. He works directly with clients to translate requirements into clear, reliable systems.
                  </p>
                  <p>
                    He oversees software architecture, system delivery, and engineering quality across all engagements. BS in Software Engineering from Bahria University.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-indigo-200/60 flex items-center justify-between">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-950"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Farhana Bakht */}
            <div className="flex flex-col justify-between rounded-[12px] border border-teal-200/60 bg-gradient-to-b from-[#F0FDF9] to-[#E6F7F3] p-8 sm:p-9 shadow-[0_4px_16px_-4px_rgba(13,148,136,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.15),0_8px_16px_-4px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-teal-300">
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[12px] border border-teal-200 bg-white text-xl font-bold text-teal-800 shadow-sm">
                    FB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Farhana Bakht</h3>
                    <p className="text-sm font-semibold text-teal-700">
                      Co-Founder
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    Farhana Bakht is the Co-Founder of Axorks. She oversees quality assurance, client workflow validation, and delivery standards across all projects.
                  </p>
                  <p>
                    Her focus ensures that every web platform, AI integration, and mobile application meets strict usability, reliability, and business requirements before launch.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-teal-200/60 flex items-center">
                <span className="text-xs text-teal-800 font-medium">
                  Quality Assurance &amp; Delivery Standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT WE DO — CRISP WHITE
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What we build
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            We focus on four areas where we can deliver the most value for growing businesses.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-indigo-200/60 bg-gradient-to-b from-[#F4F6FF] to-[#EBF0FE] p-6 shadow-xs">
              <h3 className="text-base font-semibold text-slate-900">Custom Web Applications</h3>
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">We build tailored web applications around how your business actually works.</p>
            </div>
            <div className="rounded-[12px] border border-teal-200/60 bg-gradient-to-b from-[#F0FDF9] to-[#E6F7F3] p-6 shadow-xs">
              <h3 className="text-base font-semibold text-slate-900">AI Automation</h3>
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">We use AI to automate repetitive work, improve decisions, and reduce manual effort.</p>
            </div>
            <div className="rounded-[12px] border border-amber-200/60 bg-gradient-to-b from-[#FEFBF2] to-[#FDF4E1] p-6 shadow-xs">
              <h3 className="text-base font-semibold text-slate-900">Mobile Apps</h3>
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">We create mobile applications that make your products and services easier to access.</p>
            </div>
            <div className="rounded-[12px] border border-emerald-200/60 bg-gradient-to-b from-[#F0FDF6] to-[#E5F9EE] p-6 shadow-xs">
              <h3 className="text-base font-semibold text-slate-900">Ongoing Support &amp; Maintenance</h3>
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">We keep your software secure, reliable, and improving after launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Tell us about your project. We&apos;ll get back to you within 24 hours with an honest assessment.
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
