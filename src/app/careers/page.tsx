import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowUpRight, Mail, Users, ShieldCheck, Briefcase, CheckCircle2, Star, Zap, Award, Sparkles, HeartHandshake } from 'lucide-react';
import { SITE_URL, SITE_NAME, CAREERS_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Careers & Engineering Talent | Axorks Software Studio',
  description:
    'Explore engineering, sales, AI, and design career opportunities at Axorks. Join an independent software engineering studio shipping production-grade platforms.',
  openGraph: {
    title: 'Careers & Engineering Talent | Axorks Software Studio',
    description:
      'Explore career opportunities in Sales, Full-Stack Web Development, UI/UX Design, and AI Engineering at Axorks.',
    url: `${SITE_URL}/careers`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers & Engineering Talent | Axorks',
    description: 'Explore engineering, sales, AI, and design career opportunities at Axorks.',
  },
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  const roles = [
    {
      id: 'sales-specialist',
      title: 'Sales Specialist — International Outbound',
      isFeatured: true,
      department: 'Growth & Business Development',
      location: 'Karachi & Islamabad, Pakistan',
      arrangement: 'Flexible work arrangement (Remote / Hybrid / On-site) evaluated per role.',
      employmentType: 'Full-time / Contract',
      experience: '3+ years B2B software or agency sales experience',
      education: "Bachelor's degree preferred or equivalent practical sales track record.",
      compensation: 'Competitive base salary plus performance-driven commission structure.',
      summary:
        'We are seeking an ambitious Sales Specialist to drive international outbound business development. Working directly with studio leadership, you will engage enterprise prospects, technical founders, and international clients.',
      requirements: [
        '3+ years of sales track record in B2B software services or digital agency outreach.',
        'Excellent spoken English fluency with clear, confident phone and video communication.',
        'Strong critical thinking, analytical objection-handling, and consultative sales capabilities.',
        'Ability to qualify leads, explain technical software capabilities, and articulate ROI to executive stakeholders.',
        'Self-driven work ethic with a disciplined approach to pipeline management and CRM tracking.',
      ],
      offers: [
        'Direct collaboration with studio founder & Chief Systems Architect.',
        'High-upside performance commission structure on international contracts.',
        'Exposure to enterprise and public-sector software engagements.',
        'Flexible working arrangement (Remote / Hybrid / On-site).',
      ],
    },
    {
      id: 'fullstack-engineer',
      title: 'Web / Full-Stack Engineer',
      isFeatured: false,
      department: 'Web Engineering',
      location: 'Karachi & Islamabad, Pakistan',
      arrangement: 'Flexible work arrangement (Remote / Hybrid / On-site) evaluated per role.',
      employmentType: 'Full-time / Contract',
      experience: '3+ years full-stack web engineering experience',
      education: "Bachelor's degree in CS/SE preferred or equivalent shipped production portfolio.",
      compensation: 'Competitive market rate based on engineering depth and portfolio experience.',
      summary:
        'Join our Web Engineering team building high-throughput web applications, relational serverless database architectures, and custom client portals using Next.js App Router, TypeScript, and Node.js.',
      requirements: [
        '3+ years of experience engineering production web applications.',
        'Deep proficiency in Next.js 14/15 App Router, React, TypeScript, and Tailwind CSS.',
        'Solid experience with Node.js REST APIs, serverless PostgreSQL (Neon), and Prisma ORM.',
        'Strong understanding of web security, performance optimization, and serverless edge deployment.',
        'Clean, modular code habits with disciplined Git repository practices.',
      ],
      offers: [
        'Engineering ownership across live production platforms.',
        'Direct technical collaboration with Chief Systems Architect.',
        'Modern tech stack without legacy codebase burden.',
        'Flexible working arrangement (Remote / Hybrid / On-site).',
      ],
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      isFeatured: false,
      department: 'UI/UX Design',
      location: 'Karachi & Islamabad, Pakistan',
      arrangement: 'Flexible work arrangement (Remote / Hybrid / On-site) evaluated per role.',
      employmentType: 'Full-time / Contract',
      experience: '3+ years digital product design experience',
      education: "Bachelor's degree preferred or equivalent portfolio of shipped digital products.",
      compensation: 'Competitive market rate based on design system expertise.',
      summary:
        'Craft dark-mode schematics, conversion-focused user interfaces, and modular design systems for web applications, mobile platforms, and executive dashboards.',
      requirements: [
        '3+ years of experience designing complex web and mobile user interfaces.',
        'Expertise in Figma design systems, component tokens, responsive layouts, and auto-layout.',
        'Strong grasp of dark-mode UI design, WCAG contrast standards, and responsive web principles.',
        'Ability to collaborate directly with frontend engineers to ensure design precision.',
      ],
      offers: [
        'Design leadership on international enterprise applications.',
        'Creative freedom with high-fidelity visual design standards.',
        'Flexible working arrangement (Remote / Hybrid / On-site).',
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={[{ label: 'Careers & Opportunities' }]} />

        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-gold mb-3">
            <Briefcase className="h-4 w-4" />
            <span>Join Axorks Engineering Studio</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Career Opportunities &amp; Talent Network
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Work on production systems across international clients. We value high engineering standards, clear communication, and direct execution over bureaucracy.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 space-y-6 rounded-2xl"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-obsidian-border pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold font-semibold">
                      {role.department}
                    </span>
                    {role.isFeatured && (
                      <span className="inline-flex items-center gap-1 rounded border border-gold/50 bg-gold/15 px-2 py-0.5 font-mono text-[9px] font-bold text-gold uppercase">
                        <Star className="h-2.5 w-2.5 text-gold fill-gold" />
                        FEATURED ROLE
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-paper">
                    {role.title}
                  </h2>
                </div>

                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=Application%20%E2%80%93%20${encodeURIComponent(
                    role.title
                  )}%20%E2%80%93%20`}
                  className="inline-flex items-center gap-1.5 rounded border border-gold/40 bg-gold/10 px-4 py-2 font-mono text-xs font-semibold text-gold hover:bg-gold/20 transition-colors shrink-0"
                >
                  Apply for this Role
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Role Meta Details */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 font-mono text-xs border-b border-obsidian-border/60 pb-5">
                <div>
                  <span className="text-steel block text-[10px] uppercase">Location:</span>
                  <span className="text-paper font-semibold">{role.location}</span>
                </div>
                <div>
                  <span className="text-steel block text-[10px] uppercase">Experience Required:</span>
                  <span className="text-gold font-semibold">{role.experience}</span>
                </div>
                <div>
                  <span className="text-steel block text-[10px] uppercase">Employment Type:</span>
                  <span className="text-paper font-semibold">{role.employmentType}</span>
                </div>
              </div>

              {/* Overview & Compensation */}
              <div className="space-y-3">
                <p className="text-xs leading-relaxed text-steel sm:text-sm">
                  {role.summary}
                </p>

                <div className="rounded border border-obsidian-border bg-obsidian p-3.5 text-xs">
                  <span className="font-mono text-gold font-bold uppercase">Compensation Structure: </span>
                  <span className="text-paper font-mono">{role.compensation}</span>
                </div>
              </div>

              {/* Requirements & Offers Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-2">
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">
                    Key Requirements &amp; Qualifications
                  </h3>
                  <ul className="space-y-2 text-xs text-steel">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">
                    What Axorks Offers
                  </h3>
                  <ul className="space-y-2 text-xs text-steel">
                    {role.offers.map((offer, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width Light Section: Studio Culture & Environment Perks (40%+ Light Background Ratio) */}
      <section className="w-full bg-sys-white py-16 sm:py-20 border-y border-sys-ink/10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-sys-blue">
                [ STUDIO_CULTURE_&amp;_PERKS ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sys-ink">
                Why Work at Axorks Software Studio
              </h2>
              <p className="text-sm text-sys-ink-muted leading-relaxed">
                An engineering-first environment designed for high autonomy, zero management bloat, and international software exposure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Direct Architect Access</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  Collaborate directly with Chief Systems Architect M. Mujahid and senior leadership on live architecture decisions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Modern Tech Stack</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  Engineered with Next.js 14/15 App Router, TypeScript, Python, serverless Postgres, and AI vector search APIs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Flexible Work Models</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  Remote, hybrid, and physical office opportunities across Karachi and Islamabad software house facilities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Competitive Growth</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  Market-leading base salaries, performance commission structures, and long-term studio trajectory.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
