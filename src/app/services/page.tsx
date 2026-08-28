import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Services | Axorks',
  description:
    'Custom web applications, AI automation, mobile apps, and ongoing software support. Projects start from $600 with fixed-price proposals.',
  openGraph: {
    title: 'Services | Axorks',
    description:
      'We build tailored web applications, AI automation, mobile apps, and ongoing software support. Projects start from $600.',
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Axorks',
    description:
      'Custom web applications, AI automation, mobile apps, and ongoing software support.',
  },
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    title: 'Custom Web Applications',
    description:
      'We build tailored web applications around how your business actually works.',
    href: '/contact?service=web-applications',
  },
  {
    title: 'AI Automation',
    description:
      'We use AI to automate repetitive work, improve decisions, and reduce manual effort.',
    href: '/contact?service=ai-automation',
  },
  {
    title: 'Mobile Apps',
    description:
      'We create mobile applications that make your products and services easier to access.',
    href: '/contact?service=mobile-apps',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'We keep your software secure, reliable, and improving after launch.',
    href: '/contact?service=support',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ============================================================
          HEADER
      ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              What we build
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We focus on building software that solves real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES & PRICING BANNER
      ============================================================ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          {/* 4 Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-700"
                  >
                    Discuss your project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-base leading-relaxed text-slate-700">
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
      ============================================================ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Ready to build your next project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Let&apos;s talk through what you need and provide a clear, fixed-price proposal.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Book a free discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
