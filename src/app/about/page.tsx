import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, LINKEDIN_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About | Axorks',
  description:
    'Axorks is a registered software company helping growing businesses build custom web applications and automate manual work with AI. Meet our team.',
  openGraph: {
    title: 'About | Axorks',
    description:
      'Axorks is a registered software company helping growing businesses build custom web applications and automate manual work with AI.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'profile',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Axorks',
    description: 'Meet the team behind Axorks. Real office. Real engineers. Real results.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ============================================================
          HEADER
      ============================================================ */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              About Axorks
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Axorks helps growing businesses build custom web applications and automate manual work with AI. We&apos;re a registered private software company with real offices, a real team, and real projects delivered.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPANY
      ============================================================ */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Real office. Real team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We operate from our offices in Karachi and Islamabad with an in-house team of 7+ senior engineers and designers. When you work with Axorks, you work directly with the people building your product — no middlemen, no outsourcing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Axorks is registered as Axorks Pvt Limited. We serve clients across the UK, US, EU, and worldwide with transparent communication and overlapping time zones.
              </p>
            </div>
            <div className="overflow-hidden rounded-[12px] border border-slate-200">
              <img
                src="/AxorkOffice.png"
                alt="Axorks office"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP
      ============================================================ */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Leadership
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Founder */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">{FOUNDER_NAME}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Founder</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Muhammad Mujahid founded Axorks to help businesses solve real problems with custom software. He works directly with every client to understand their needs and ensure the right solution is built. BS Software Engineering, Bahria University.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-700"
              >
                LinkedIn <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Co-Founder */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">Farhana Bakht</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Co-Founder &amp; Lead QA</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Farhana oversees quality assurance across all projects, ensuring every delivery meets the standards our clients expect. She brings attention to detail and a user-first perspective to everything we ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT WE DO
      ============================================================ */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What we build
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            We focus on four areas where we can deliver the most value.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">Custom Web Applications</h3>
              <p className="mt-1 text-sm text-slate-600">We build tailored web applications around how your business actually works.</p>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">AI Automation</h3>
              <p className="mt-1 text-sm text-slate-600">We use AI to automate repetitive work, improve decisions, and reduce manual effort.</p>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">Mobile Apps</h3>
              <p className="mt-1 text-sm text-slate-600">We create mobile applications that make your products and services easier to access.</p>
            </div>
            <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">Ongoing Support &amp; Maintenance</h3>
              <p className="mt-1 text-sm text-slate-600">We keep your software secure, reliable, and improving after launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Book a free discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
