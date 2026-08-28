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
  problem: string;
  solution: string;
  result: string;
  heroImage: string;
  heroAlt: string;
  additionalImages: {
    src: string;
    alt: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'agrotrace',
    name: 'AgroTrace',
    category: 'Agriculture',
    problem:
      'Agricultural exporters lacked real-time visibility into temperature problems and logistics delays during international transit, creating risks of cargo spoilage and compliance failures.',
    solution:
      'Supply-chain tracking platform with live thermal monitoring, automated alerts, geospatial tracking, and export-compliance validation.',
    result:
      'Gave logistics teams real-time visibility into temperature problems, shipment delays, and export compliance.',
    heroImage: '/projects/Agrotrace.jpeg',
    heroAlt: 'AgroTrace supply chain tracking and telemetry platform',
    additionalImages: [
      {
        src: '/projects/agrotrace2.jpeg',
        alt: 'AgroTrace thermal monitoring and sensor alert interface',
      },
      {
        src: '/projects/Agrotrace3.jpeg',
        alt: 'AgroTrace route tracking and export compliance validation',
      },
    ],
  },
  {
    id: 'ai-decision-system',
    name: 'AI Decision System',
    category: 'AI & Data Systems',
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
      },
      {
        src: '/projects/IPMI-OS3.jpeg',
        alt: 'AI decision system analytics and performance tracking',
      },
    ],
  },
  {
    id: 'mediverse',
    name: 'MediVerse',
    category: 'Healthcare',
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
      },
      {
        src: '/projects/Mediverse4.jpeg',
        alt: 'MediVerse clinical records and administrative dashboard',
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* ============================================================
          PAGE HEADER
      ============================================================ */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Our work
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Real projects we&apos;ve built for real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES LIST
      ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-20 sm:space-y-28">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm"
            >
              {/* Header: Category, Title & Action */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {study.category}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {study.name}
                  </h2>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 self-start sm:self-auto"
                >
                  Start a similar project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Large Hero Screenshot */}
              <div className="mt-8 overflow-hidden rounded-[12px] border border-slate-200 bg-slate-100">
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src={study.heroImage}
                    alt={study.heroAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Problem → Solution → Result */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-[12px] border border-slate-100 bg-slate-50 p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Problem
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-[12px] border border-slate-100 bg-slate-50 p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Solution
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {study.solution}
                  </p>
                </div>

                <div className="rounded-[12px] border border-slate-100 bg-slate-50 p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Result
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-900 font-medium">
                    {study.result}
                  </p>
                </div>
              </div>

              {/* Additional Screenshots Grid */}
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Additional Screenshots
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {study.additionalImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-[12px] border border-slate-200 bg-slate-100"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-500">
                  Ready to build something similar for your business?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-slate-700"
                >
                  Start a similar project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
      ============================================================ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            Tell us what you need. We&apos;ll get back to you within 24 hours with an honest assessment and a clear fixed-price plan.
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
