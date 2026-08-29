import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <div className="bg-[#F8F9FA]">
      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              About Axorks
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
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
            <div className="overflow-hidden rounded-[12px] border border-slate-200/85 bg-slate-100 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)]">
              <img
                src="/AxorkOffice.png"
                alt="Axorks corporate office"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP — FOUNDER & CO-FOUNDER PROFILES
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FBFBFA]">
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
            {/* Muhammad Mujahid — Founder & Chief Systems Architect */}
            <div className="flex flex-col justify-between rounded-[12px] border border-slate-200/85 bg-[#F7F6F3] p-8 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-slate-300">
              <div>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[12px] border border-slate-200 bg-slate-100 shadow-sm">
                    <img
                      src="/assets/founder_mujahid.jpg"
                      alt="Muhammad Mujahid"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{FOUNDER_NAME}</h3>
                    <p className="text-sm font-semibold text-slate-600">
                      Founder &amp; Chief Systems Architect
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                  <p>
                    Muhammad Mujahid founded Axorks to help growing businesses solve real operational challenges through custom software and AI automations. He works directly with clients to translate requirements into clear, reliable systems.
                  </p>
                  <p>
                    He oversees software architecture, system delivery, and engineering quality across all engagements. BS in Software Engineering from Bahria University.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-[#C9A24B]"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Farhana Bakht — Co-Founder */}
            <div className="flex flex-col justify-between rounded-[12px] border border-slate-200/85 bg-[#F7F6F3] p-8 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-slate-300">
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[12px] border border-slate-200 bg-slate-50 text-xl font-bold text-slate-700 shadow-sm">
                    FB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Farhana Bakht</h3>
                    <p className="text-sm font-semibold text-slate-600">
                      Co-Founder
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
                  <p>
                    Farhana Bakht is the Co-Founder of Axorks. She oversees quality assurance, client workflow validation, and delivery standards across all projects.
                  </p>
                  <p>
                    Her focus ensures that every web platform, AI integration, and mobile application meets strict usability, reliability, and business requirements before launch.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/70 flex items-center">
                <span className="text-xs text-slate-500 font-medium">
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
            <div className="rounded-[12px] border border-slate-200/85 bg-[#F7F6F3] p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <h3 className="text-sm font-semibold text-slate-900">Custom Web Applications</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">We build tailored web applications around how your business actually works.</p>
            </div>
            <div className="rounded-[12px] border border-slate-200/85 bg-[#F7F6F3] p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <h3 className="text-sm font-semibold text-slate-900">AI Automation</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">We use AI to automate repetitive work, improve decisions, and reduce manual effort.</p>
            </div>
            <div className="rounded-[12px] border border-slate-200/85 bg-[#F7F6F3] p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <h3 className="text-sm font-semibold text-slate-900">Mobile Apps</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">We create mobile applications that make your products and services easier to access.</p>
            </div>
            <div className="rounded-[12px] border border-slate-200/85 bg-[#F7F6F3] p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08),0_8px_16px_-4px_rgba(15,23,42,0.04)]">
              <h3 className="text-sm font-semibold text-slate-900">Ongoing Support &amp; Maintenance</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">We keep your software secure, reliable, and improving after launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="border-t border-white/[0.08] bg-[#0D0F14] text-white">
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
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-[#C9A24B] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_20px_rgba(201,162,75,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:shadow-[0_8px_30px_rgba(201,162,75,0.35)]"
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
