import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Users, Zap, Briefcase, Mail } from 'lucide-react';
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Careers | Axorks',
  description:
    'Join Axorks. We are hiring AI Engineers, Full-Stack Developers, Mobile Developers, UI/UX Designers, QA Engineers, Sales Executives, and Marketing Specialists in Karachi, Islamabad, and Remote.',
  openGraph: {
    title: 'Careers | Axorks',
    description:
      'Explore open engineering, design, sales, and marketing roles at Axorks. Work on production-grade software platforms for global clients.',
    url: `${SITE_URL}/careers`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Axorks',
    description: 'Explore engineering, design, sales, and marketing career opportunities at Axorks.',
  },
  alternates: {
    canonical: '/careers',
  },
};

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

const openRoles: JobRole[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years practical ML / LLM experience',
    description:
      'Build and deploy intelligent automation pipelines, LLM-powered workflows, document extraction systems, and real-time decision microservices.',
    responsibilities: [
      'Architect and fine-tune LLM extraction and agentic pipeline workflows',
      'Integrate vector embeddings, search indexes, and retrieval systems',
      'Deploy scalable Python/FastAPI microservices into production environments',
    ],
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack / Web Application Developer',
    department: 'Web Engineering',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years full-stack development',
    description:
      'Engineer scalable, secure client portals, SaaS dashboards, and web applications using modern React, Next.js App Router, TypeScript, and serverless databases.',
    responsibilities: [
      'Build responsive, high-performance web applications with Next.js and TypeScript',
      'Design clean REST and serverless backend architectures with PostgreSQL / Prisma',
      'Implement robust authentication, role-based access control, and API integrations',
    ],
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Application Developer',
    department: 'Mobile Engineering',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years cross-platform mobile experience',
    description:
      'Develop intuitive, high-performance cross-platform iOS and Android applications with offline synchronization and polished native interactions.',
    responsibilities: [
      'Create performant cross-platform mobile apps using React Native / Flutter',
      'Implement offline-first data caching and seamless background synchronization',
      'Ensure smooth 60fps animations and native platform API integrations',
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Product Design',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years digital product design',
    description:
      'Design enterprise-grade design systems, conversion-driven user interfaces, and intuitive user experiences for web and mobile software platforms.',
    responsibilities: [
      'Produce comprehensive Figma design systems, component tokens, and responsive layouts',
      'Create high-fidelity wireframes, interactive prototypes, and executive dashboards',
      'Work closely with engineering teams to ensure pixel-perfect production implementation',
    ],
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    department: 'Quality Assurance',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years QA & test automation',
    description:
      'Maintain rigorous software quality, security validation, and performance benchmarks across all web, mobile, and AI client deliverables.',
    responsibilities: [
      'Design and execute comprehensive manual and automated test suites',
      'Validate cross-browser compatibility, responsive rendering, and edge cases',
      'Perform security verification, API regression testing, and load benchmarking',
    ],
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    department: 'Business Development',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years B2B software or tech sales',
    description:
      'Lead international outbound sales, engage technical founders and enterprise leaders, qualify prospects, and articulate software solutions and ROI.',
    responsibilities: [
      'Identify and engage prospective enterprise clients across the UK, US, EU, and Gulf',
      'Conduct consultative discovery meetings to understand client software requirements',
      'Manage end-to-end sales pipelines and coordinate with engineering for proposals',
    ],
  },
  {
    id: 'marketing-specialist',
    title: 'Marketing & Outreach Specialist',
    department: 'Growth & Marketing',
    location: 'Karachi / Islamabad / Hybrid',
    type: 'Full-time',
    experience: '2+ years digital marketing / content',
    description:
      'Drive organic brand presence, technical content strategy, social outreach, and case study promotion across global digital channels.',
    responsibilities: [
      'Develop compelling technical case study content, blog articles, and LinkedIn insights',
      'Manage digital outreach campaigns, founder branding, and company announcements',
      'Analyze organic traffic, search visibility, and conversion metrics to refine strategy',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#F8F7F4]">
      {/* ============================================================
          PAGE HERO — EXECUTIVE DARK CANVAS
      ============================================================ */}
      <section className="relative min-h-[460px] w-full overflow-hidden bg-[#0B0F19] text-[#F8FAFC] flex items-center border-b border-white/[0.08]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
          <div className="absolute top-0 right-1/4 h-[450px] w-[450px] rounded-full bg-slate-800/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-slate-800/20 blur-3xl" />
          <div className="exec-grid absolute inset-0 opacity-[0.14]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-24 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#DFBD6C] ring-1 ring-white/15 mb-4">
              <Briefcase className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>We&apos;re Growing</span>
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Join Axorks
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              We&apos;re building an engineering-first software company delivering custom applications and AI automations for global businesses. Work directly with senior systems architects on real production platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          OPEN ROLES LIST
      ============================================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F8F7F4] via-[#F2F0EB] to-[#F8F7F4]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
                Open Positions
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Explore our current openings across engineering, design, quality assurance, and growth.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              7 Active Openings
            </span>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="group relative overflow-hidden rounded-[14px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800">
                        {role.department}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {role.location} • {role.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                      {role.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Application%20for%20${encodeURIComponent(role.title)}`}
                    className="group inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 self-start sm:self-auto shrink-0"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-700">
                  {role.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Responsibilities:
                  </span>
                  {role.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Don't See the Right Role Banner */}
          <div className="mt-12 rounded-[14px] border border-slate-200/90 bg-white p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#0F172A]">
                Don&apos;t see the right role? Send us your CV anyway.
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                We are always interested in connecting with exceptional software engineers, designers, and growth specialists.
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=General%20Application%20%E2%80%93%20Axorks%20Talent%20Network`}
              className="inline-flex items-center gap-2 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A227] to-[#B88E2F] px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow shrink-0"
            >
              <Mail className="h-4 w-4" />
              <span>Send Your Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19] text-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Want to learn more about Axorks?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Explore what we build for our clients or get in touch with our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[12px] bg-white/10 px-6 py-3.5 text-sm font-semibold text-white border border-white/15 transition-all duration-200 hover:bg-white/15"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A227] to-[#B88E2F] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
