import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, Users, ShieldCheck, Briefcase, CheckCircle2, Star } from 'lucide-react';
import { SITE_URL, SITE_NAME, CAREERS_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Careers & Engineering Talent | Axorks Software Studio',
  description:
    'Explore engineering, sales, AI, and design career opportunities at Axorks. Join an elite founder-led software studio shipping production-grade platforms.',
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
    canonical: `${SITE_URL}/careers`,
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
      arrangement: 'Work arrangement (remote / hybrid / on-site) is determined per role — Axorks reserves the right to set this based on business needs.',
      employmentType: '[Employment Type — confirm: Full-time / Contract]',
      experience: '3+ years proven B2B software / agency sales track record',
      education: "Bachelor's degree preferred in Business/Marketing or related field, but not a hard requirement — equivalent practical sales track record is accepted.",
      compensation: 'Competitive base salary plus a performance-driven commission structure — full details discussed at interview.',
      summary:
        'We are seeking an ambitious, high-bar Sales Specialist to drive international outbound business development. Working directly with Founder & Chief Architect Muhammad Mujahid, you will engage high-ticket enterprise prospects, technical founders, and international clients.',
      requirements: [
        '3+ years of proven sales track record in B2B software services or digital agency outreach.',
        'Excellent spoken English fluency with clear, confident phone and video communication — this is a client-facing role involving outbound calls to international prospects.',
        'Strong critical thinking, analytical objection-handling, and consultative sales capabilities.',
        'Ability to qualify leads, explain technical software capabilities, and articulate ROI to executive stakeholders.',
        'Self-driven work ethic with a disciplined approach to pipeline management and CRM tracking.',
      ],
      offers: [
        'Direct collaboration with Founder & Chief Systems Architect.',
        'High-upside performance commission structure on high-ticket international contracts.',
        'Exposure to mission-critical public-sector and enterprise software engagements.',
        'Flexible working arrangement (remote / hybrid / on-site).',
      ],
    },
    {
      id: 'fullstack-engineer',
      title: 'Web / Full-Stack Engineer',
      isFeatured: false,
      department: 'Web Engineering Division',
      location: 'Karachi & Islamabad, Pakistan',
      arrangement: 'Work arrangement (remote / hybrid / on-site) is determined per role — Axorks reserves the right to set this based on business needs.',
      employmentType: '[Employment Type — confirm: Full-time / Contract]',
      experience: '3+ years full-stack web engineering experience',
      education: "Bachelor's degree in CS/SE preferred, but not a hard requirement — equivalent shipped production portfolio is accepted.",
      compensation: 'Competitive market rate based on engineering depth and portfolio experience.',
      summary:
        'Join our core Web Engineering Division building high-throughput web applications, relational serverless database architectures, and custom client portals using Next.js App Router, TypeScript, and Node.js.',
      requirements: [
        '3+ years of experience engineering production web applications.',
        'Deep proficiency in Next.js 14/15 App Router, React, TypeScript, and Tailwind CSS.',
        'Solid experience with Node.js REST APIs, serverless PostgreSQL (Neon), and Prisma ORM.',
        'Strong understanding of web security, performance optimization, and serverless edge deployment.',
        'Clean, modular code habits with disciplined Git repository practices.',
      ],
      offers: [
        'Engineering ownership across live production platforms and government-grade systems.',
        'Direct mentorship and architectural review with Chief Software Architect.',
        'Modern tech stack without legacy codebase burden.',
        'Flexible working arrangement (remote / hybrid / on-site).',
      ],
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      isFeatured: false,
      department: 'UI/UX Department',
      location: 'Karachi & Islamabad, Pakistan',
      arrangement: 'Work arrangement (remote / hybrid / on-site) is determined per role — Axorks reserves the right to set this based on business needs.',
      employmentType: '[Employment Type — confirm: Full-time / Contract]',
      experience: '3+ years digital product design experience',
      education: "Bachelor's degree preferred, but not a hard requirement — equivalent portfolio of shipped digital products is accepted.",
      compensation: 'Competitive market rate based on design system expertise.',
      summary:
        'Craft dark-mode schematics, conversion-focused user interfaces, and modular design systems for complex web applications, mobile platforms, and executive dashboards.',
      requirements: [
        '3+ years of experience designing complex web and mobile user interfaces.',
        'Expertise in Figma design systems, component tokens, responsive layouts, and auto-layout.',
        'Ability to translate technical data structures into intuitive dark-mode schematics and dashboard views.',
        'Strong understanding of mobile-first UX patterns and interactive micro-animations.',
        'Comprehensive portfolio demonstrating shipped digital product interfaces.',
      ],
      offers: [
        'Opportunity to shape the visual brand identity and design language of Axorks platforms.',
        'Collaborative workflow directly with engineering department leads.',
        'Exposure to diverse product domains (AgriTech, Quant Systems, Healthcare, Public Sector).',
        'Flexible working arrangement (remote / hybrid / on-site).',
      ],
    },
    {
      id: 'ai-automation-engineer',
      title: 'AI & Automation Engineer',
      isFeatured: false,
      department: 'AI & ML Team',
      location: 'Karachi & Islamabad, Pakistan',
      arrangement: 'Work arrangement (remote / hybrid / on-site) is determined per role — Axorks reserves the right to set this based on business needs.',
      employmentType: '[Employment Type — confirm: Full-time / Contract]',
      experience: '3+ years AI/ML / backend engineering experience',
      education: "Bachelor's degree in CS/Data Science preferred, but not a hard requirement — equivalent practical AI implementation background is accepted.",
      compensation: 'Competitive market rate based on AI pipeline engineering experience.',
      summary:
        'Engineer practical AI automation pipelines integrating OpenAI APIs, automated document parsing (PDF/Image) workflows, vector search embeddings, and statistical machine learning models.',
      requirements: [
        '3+ years of experience in backend development, AI integration, or machine learning engineering.',
        'Hands-on experience with OpenAI GPT APIs, LangChain/LlamaIndex, and vector databases.',
        'Proficiency in Python (FastAPI), Node.js, and asynchronous background worker queues.',
        'Understanding of prompt tuning, token usage cost optimization, and rate limiting pipelines.',
        'Practical experience building document extraction workflows and predictive models.',
      ],
      offers: [
        'Lead practical AI integration across high-ROI client automation projects.',
        'R&D flexibility on cutting-edge LLM toolchains and statistical algorithms.',
        'Direct collaboration with Founder on quantitative engine development.',
        'Flexible working arrangement (remote / hybrid / on-site).',
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-gold mb-3">
            <Briefcase className="h-4 w-4" />
            <span>TALENT_ACQUISITION_PROTOCOL · STATUS_ACTIVE</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Join the Axorks Engineering Team
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            We are hiring selective, high-bar talent across Sales, Web Development, UI/UX Design, and AI Engineering. Build mission-critical software with direct founder access and zero bureaucracy.
          </p>
        </div>

        {/* Application Protocol Guidance Box */}
        <div className="mt-8 schematic-bracket border border-gold/40 bg-obsidian-raised p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider block">
                APPLICATION_SUBMISSION_INSTRUCTIONS
              </span>
              <p className="text-xs text-paper/90 leading-relaxed">
                To apply for any role below, send your resume and portfolio directly to{' '}
                <strong className="text-gold font-mono">{CAREERS_EMAIL}</strong> using the required subject line format:
              </p>
              <div className="mt-2 inline-block rounded bg-obsidian border border-obsidian-border px-3 py-1.5 font-mono text-xs text-gold">
                Subject: Application – [Role Title] – [Candidate Full Name]
              </div>
            </div>

            <a
              href={`mailto:${CAREERS_EMAIL}?subject=General%20Application%20%E2%80%93%20Axorks`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-signal-blue px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
            >
              <Mail className="h-4 w-4" />
              Direct Email Apply
            </a>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="mt-12 space-y-10">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`schematic-bracket border bg-obsidian-raised p-6 sm:p-8 space-y-6 transition-colors ${
                role.isFeatured
                  ? 'border-gold/60 shadow-[0_0_30px_rgba(201,162,75,0.12)]'
                  : 'border-obsidian-border hover:border-steel/40'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col gap-4 border-b border-obsidian-border pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold font-semibold">
                      {role.department}
                    </span>
                    {role.isFeatured && (
                      <span className="inline-flex items-center gap-1 rounded border border-gold/50 bg-gold/15 px-2 py-0.5 font-mono text-[9px] font-bold text-gold uppercase">
                        <Star className="h-2.5 w-2.5 text-gold fill-gold" />
                        FLAGSHIP HIRE
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

              {/* Work Arrangement Note */}
              <div className="rounded border border-obsidian-border bg-obsidian p-3 font-mono text-xs text-steel">
                <span className="text-gold font-bold">Work Arrangement: </span>
                <span>{role.arrangement}</span>
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

              {/* Requirements & What We Offer Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-2">
                {/* Requirements */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">
                    Key Requirements & Qualifications
                  </h3>
                  <ul className="space-y-2 text-xs text-steel">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2 pt-1 border-t border-obsidian-border/50">
                      <span className="font-mono text-[11px] text-paper">
                        <strong className="text-gold">Education: </strong>
                        {role.education}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What Axorks Offers */}
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

              {/* Bottom Apply CTA */}
              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                <span className="font-mono text-[11px] text-steel">
                  Submit resume to <strong className="text-gold">{CAREERS_EMAIL}</strong>
                </span>
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=Application%20%E2%80%93%20${encodeURIComponent(
                    role.title
                  )}%20%E2%80%93%20`}
                  className="font-mono text-xs text-signal-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Click to Apply via Email →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
