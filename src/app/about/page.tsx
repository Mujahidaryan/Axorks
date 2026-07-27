import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Award, Code2, Users, ShieldCheck, Layers, Bot, Smartphone, GraduationCap, CheckCircle2, Lock } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, FOUNDER_ROLE, LINKEDIN_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Studio Engineering & Leadership | Axorks',
  description:
    'Axorks is an international software engineering company founded by Muhammad Mujahid. Backed by a core team of 7+ senior engineers and designers delivering scalable web applications, AI automations, and mobile systems worldwide.',
  keywords: [
    'Axorks',
    'international software engineering company',
    'remote custom software development',
    'bespoke web development studio',
    'Muhammad Mujahid Axorks',
    'full stack software engineering',
  ],
  openGraph: {
    title: 'About Studio Engineering & Leadership | Axorks',
    description:
      'Axorks is a founder-led international software engineering company serving clients worldwide with custom web applications, AI automations, and mobile software.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'profile',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Studio Engineering & Leadership | Axorks',
    description: 'Axorks is an international software engineering company engineered by Founder & Chief Architect Muhammad Mujahid.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const aboutPageGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'About Studio Engineering & Leadership | Axorks',
        description:
          'Axorks is an international software engineering company serving businesses worldwide. Backed by a core team of 7+ senior team members across Web, AI, Mobile, and UI/UX design.',
        url: `${SITE_URL}/about`,
        mainEntity: {
          '@id': `${SITE_URL}/about#founder`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#founder`,
        name: FOUNDER_NAME,
        jobTitle: FOUNDER_ROLE,
        worksFor: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        url: `${SITE_URL}/about`,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Bahria University',
        },
        description:
          'Muhammad Mujahid is the founder of Axorks software company and Chief Systems Architect. BS Software Engineering (Bahria University) and Microsoft Innovative Educator Expert (MIEE 2025).',
        award: 'Microsoft Innovative Educator Expert (MIEE 2025)',
        sameAs: [
          LINKEDIN_URL,
          'https://wa.me/923141030223',
        ],
      },
    ],
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageGraph) }}
        />
      </head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Studio & Leadership' }]} />

        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            INTERNATIONAL_ENGINEERING_LEADERSHIP
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            About Axorks Engineering Studio
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Axorks is a founder-led international software engineering company serving decision-makers across the UK, US, EU, UAE, and worldwide. Operating with a senior team of 7+ engineers and designers, we architect custom web applications, AI automations, mobile apps, and enterprise platforms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Story Col */}
          <div className="lg:col-span-2 space-y-8">
            {/* Founder Profile */}
            <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 text-gold">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  STUDIO_FOUNDER_&_CHIEF_ARCHITECT
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
                Muhammad Mujahid
              </h2>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Muhammad Mujahid serves as the founder of Axorks software company and Chief Systems Architect. Specializing in full-stack web applications, serverless database architectures, and AI API integrations, our technical team has shipped <strong className="text-paper">6+ major production systems for 5 clients (including 2+ international clients)</strong>.
              </p>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Our engineering background includes public sector telemetry systems — such as <strong className="text-gold">AgroTrace</strong> (cold-chain tracking connected to FWO grid telemetry), the <strong className="text-gold">Sindh Food Security Dashboard</strong> (monitoring district population metrics under FAO/WFP standards), and <strong className="text-gold">IPMI-OS</strong> (a quantitative probabilistic engine).
              </p>

              {/* Academic Foundation & Credential Badges */}
              <div className="mt-4 rounded border border-obsidian-border bg-obsidian p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-gold font-bold">
                  <GraduationCap className="h-4 w-4" />
                  <span>Academic Background & Recognition</span>
                </div>
                <ul className="space-y-1.5 text-steel text-[11px]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>Bachelor of Software Engineering (BS SE) — Bahria University</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>Computer Science Educator (4+ Years CAIE Instruction)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>Microsoft Innovative Educator Expert (MIEE 2025 Awardee)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Team Structure (7+ Team Members) */}
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Users className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  7+_PERSON_STUDIO_TEAM
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-paper">
                A Team of 7+ Skilled Engineers & Designers
              </h3>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Axorks operates as a founder-led team of 7+ skilled team members across Karachi & Islamabad. We combine full-stack development, AI engineering, mobile app expertise, and UI/UX design into a focused unit:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Code2 className="h-4 w-4" />
                    Web Engineering
                  </div>
                  <p className="text-xs text-steel">
                    Full-stack web development using Next.js App Router, TypeScript, Node.js REST APIs, and PostgreSQL database optimization.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Bot className="h-4 w-4" />
                    AI & Machine Learning
                  </div>
                  <p className="text-xs text-steel">
                    OpenAI API pipelines, automated document parsing (PDF/invoice), and vector search integrations.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Smartphone className="h-4 w-4" />
                    Mobile Engineering
                  </div>
                  <p className="text-xs text-steel">
                    Cross-platform mobile applications for iOS and Android with offline caching and backend synchronization.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Layers className="h-4 w-4" />
                    UI/UX Design
                  </div>
                  <p className="text-xs text-steel">
                    Interface design systems, dark-mode schematics, and conversion-focused responsive layouts.
                  </p>
                </div>
              </div>
            </div>

            {/* Security, Data Handling & NDA Statement Block */}
            <div className="schematic-bracket border border-gold/30 bg-obsidian-raised p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase">
                <Lock className="h-4 w-4 text-gold" />
                <span>Security, Confidentiality & NDA Protocol</span>
              </div>
              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                We enforce strict NDA confidentiality across all client projects. Code repositories are isolated per engagement with total source code ownership and IP assigned directly to the client upon project delivery. Data privacy protocols ensure client credentials and database access remain strictly protected.
              </p>
            </div>
          </div>

          {/* Right Sidebar Authority Badges */}
          <div className="space-y-6">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 font-mono text-xs text-gold">
                <Award className="h-4 w-4" />
                <span>PROVABLE_METRICS</span>
              </div>
              <ul className="mt-4 space-y-3.5 text-xs text-steel">
                <li className="flex items-start justify-between gap-2">
                  <span>Projects Shipped:</span>
                  <span className="font-mono font-bold text-gold text-right">6+ Live Systems</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Core Team Size:</span>
                  <span className="font-mono font-bold text-paper text-right">7+ Team Members</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Clients Served:</span>
                  <span className="font-mono text-paper text-right">5 Clients</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>International Reach:</span>
                  <span className="font-mono text-gold text-right">2+ Overseas Clients</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Studio Hubs:</span>
                  <span className="font-mono text-paper text-right">Karachi & Islamabad</span>
                </li>
              </ul>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 text-center">
              <h3 className="font-serif text-base font-bold text-paper">
                Initiate Consultation
              </h3>
              <p className="mt-2 text-xs text-steel">
                Discuss your software scope directly with our team leads.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded bg-signal-blue px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
              >
                Book Technical Call
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
