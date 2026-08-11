import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Award, Code2, Users, ShieldCheck, Layers, Bot, Smartphone, GraduationCap, CheckCircle2, Lock, Briefcase, Building2 } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, FOUNDER_ROLE, LINKEDIN_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Studio Engineering & Leadership | Axorks',
  description:
    'Axorks Pvt Limited is an international software engineering company founded by Muhammad Mujahid and Farhana Bakht. Backed by a core team of 7+ senior engineers and designers delivering web, AI, and mobile systems worldwide.',
  keywords: [
    'Axorks',
    'Axorks Pvt Limited',
    'international software engineering company',
    'remote custom software development',
    'bespoke web development studio',
    'Muhammad Mujahid Axorks',
    'Farhana Bakht Axorks',
    'full stack software engineering',
  ],
  openGraph: {
    title: 'About Studio Engineering & Leadership | Axorks',
    description:
      'Axorks Pvt Limited is an independent international software engineering company serving clients worldwide with custom web applications, AI automations, and mobile software.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'profile',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Studio Engineering & Leadership | Axorks',
    description: 'Axorks is an international software engineering company led by Founder Muhammad Mujahid & Co-Founder Farhana Bakht.',
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
          'Axorks (registered as Axorks Pvt Limited) is an international software engineering company serving businesses worldwide. Backed by a core team of 7+ senior team members across Web, AI, Mobile, and UI/UX design.',
        url: `${SITE_URL}/about`,
        mainEntity: [
          { '@id': `${SITE_URL}/about#founder` },
          { '@id': `${SITE_URL}/about#cofounder` },
        ],
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#founder`,
        name: FOUNDER_NAME,
        jobTitle: 'Founder & Chief Systems Architect',
        worksFor: {
          '@type': 'Organization',
          name: 'Axorks Pvt Limited',
          url: SITE_URL,
        },
        url: `${SITE_URL}/about`,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Bahria University',
        },
        description:
          'Muhammad Mujahid is the Founder & Chief Systems Architect of Axorks Pvt Limited. Personally architected and shipped 6+ production systems including AgroTrace (cold-chain telemetry), Sindh Food Security Dashboard (FAO/WFP-grade), FUME brand platform, and IPMI-OS probabilistic engine. BS Software Engineering (Bahria University).',
        award: 'Microsoft Innovative Educator Expert (MIEE 2025)',
        sameAs: [LINKEDIN_URL, 'https://wa.me/923141030223'],
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#cofounder`,
        name: 'Farhana Bakht',
        jobTitle: 'Co-Founder',
        worksFor: {
          '@type': 'Organization',
          name: 'Axorks Pvt Limited',
          url: SITE_URL,
        },
        url: `${SITE_URL}/about`,
        description:
          'Farhana Bakht is Co-Founder of Axorks Pvt Limited, holding strategic business and financial oversight with a Bachelor degree in Business and Finance.',
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
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-paper leading-tight">
            About Axorks Engineering Studio
            <span className="block font-sans text-xl sm:text-2xl font-normal text-gold mt-1">
              Leadership, Governance &amp; Engineering Culture
            </span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Axorks (registered as <strong className="text-paper">Axorks Pvt Limited</strong>) is an independent international software engineering company serving decision-makers across the UK, Europe, GCC, North America, and worldwide. Operating with a senior team of 7+ engineers and designers, we architect custom web applications, AI automations, mobile apps, and enterprise platforms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Story Col */}
          <div className="lg:col-span-2 space-y-10">

            {/* Executive Leadership Grid (Founder & Co-Founder Cards) */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <h2 className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                  EXECUTIVE_LEADERSHIP_&_FOUNDERS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Founder Card */}
                <div className="schematic-bracket group relative border border-gold/50 bg-gradient-to-br from-obsidian-raised via-obsidian-card to-obsidian p-6 sm:p-7 space-y-6 flex flex-col justify-between rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-gold hover:shadow-[0_20px_50px_rgba(201,162,75,0.15)] hover:-translate-y-1">
                  <div className="space-y-4">
                    {/* Headshot & Title */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold p-0.5 bg-obsidian shadow-lg shadow-gold/30">
                        <Image
                          src="/assets/founder_mujahid.jpg"
                          alt="Muhammad Mujahid - Founder & Chief Systems Architect"
                          width={64}
                          height={64}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-paper leading-tight group-hover:text-gold transition-colors">
                          Muhammad Mujahid
                        </h3>
                        <span className="inline-block mt-1 font-mono text-[11px] font-bold text-gold bg-gold/15 px-2.5 py-0.5 rounded border border-gold/40 shadow-sm">
                          Founder &amp; Chief Systems Architect
                        </span>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-steel">
                      Senior software engineer and Chief Systems Architect who personally architects and ships high-performance production platforms. Led engineering on <strong className="text-paper font-semibold">6+ major production systems for international and enterprise clients</strong> with direct client collaboration and zero account-manager handoff.
                    </p>

                    <p className="text-xs leading-relaxed text-steel">
                      Flagship production deployments include <strong className="text-gold font-semibold">AgroTrace</strong> (cold-chain &amp; FWO grid telemetry platform), <strong className="text-gold font-semibold">Sindh Food Security Dashboard</strong> (FAO/WFP-grade public-sector monitoring system), <strong className="text-gold font-semibold">FUME</strong> brand digital platform, and the <strong className="text-gold font-semibold">IPMI-OS</strong> probabilistic inference engine.
                    </p>
                  </div>

                  {/* Academic Foundation & Credential Badges */}
                  <div className="rounded-xl border border-white/10 bg-obsidian/90 p-4 space-y-2.5 font-mono text-xs backdrop-blur-md">
                    <div className="flex items-center gap-2 text-gold font-bold text-[11px]">
                      <GraduationCap className="h-4 w-4 shrink-0 text-gold" />
                      <span>Engineering Credentials &amp; Track Record</span>
                    </div>
                    <ul className="space-y-1.5 text-steel text-[11px]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="text-paper">BS Software Engineering (Bahria University)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="text-paper font-semibold">6+ Production Systems Shipped Worldwide</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="text-steel/80">Computer Science Educator (4+ Yrs CAIE / MIEE 2025)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Co-Founder Card */}
                <div className="schematic-bracket group relative border border-gold/50 bg-gradient-to-br from-obsidian-raised via-obsidian-card to-obsidian p-6 sm:p-7 space-y-6 flex flex-col justify-between rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-gold hover:shadow-[0_20px_50px_rgba(201,162,75,0.15)] hover:-translate-y-1">
                  <div className="space-y-4">
                    {/* Initial Avatar & Title */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 flex items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-gold/30 via-obsidian to-obsidian-border text-gold font-serif text-xl font-bold shadow-lg shadow-gold/30">
                        FB
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-paper leading-tight group-hover:text-gold transition-colors">
                          Farhana Bakht
                        </h3>
                        <span className="inline-block mt-1 font-mono text-[11px] font-bold text-gold bg-gold/15 px-2.5 py-0.5 rounded border border-gold/40 shadow-sm">
                          Co-Founder
                        </span>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-steel">
                      Farhana Bakht is Co-Founder of Axorks, bringing strategic business and financial oversight. With a Bachelor's degree in Business and Finance, she holds full co-founder authority over operations, client relationships, commercial strategy, and long-term studio growth.
                    </p>

                    <p className="text-xs leading-relaxed text-steel">
                      Ensures studio commercial governance, milestone billing integrity, international client contract compliance, and resource allocation across all engineering engagements.
                    </p>
                  </div>

                  {/* Governance & Business Credentials */}
                  <div className="rounded-xl border border-white/10 bg-obsidian/90 p-4 space-y-2.5 font-mono text-xs backdrop-blur-md">
                    <div className="flex items-center gap-2 text-gold font-bold text-[11px]">
                      <GraduationCap className="h-4 w-4 shrink-0 text-gold" />
                      <span>Qualifications &amp; Executive Authority</span>
                    </div>
                    <ul className="space-y-1.5 text-steel text-[11px]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="text-paper">Bachelor's in Business &amp; Finance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="text-paper">Commercial &amp; Financial Operations Lead</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span className="text-paper">Client Relations &amp; Studio Growth Lead</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Team Structure (7+ Team Members) */}
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 space-y-4 rounded-2xl">
              <div className="flex items-center gap-2 text-gold">
                <Users className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  7+_PERSON_STUDIO_TEAM
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-paper">
                A Team of 7+ Skilled Engineers &amp; Designers
              </h3>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Axorks operates with a core engineering team of 7+ skilled senior developers and designers. We combine full-stack development, AI engineering, mobile app expertise, and UI/UX design into a focused unit:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Code2 className="h-4 w-4" />
                    Web Engineering
                  </div>
                  <p className="text-xs text-steel">
                    Full-stack web development using Next.js App Router, TypeScript, Node.js REST APIs, and PostgreSQL database optimization.
                  </p>
                </div>

                <div className="rounded-xl border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Bot className="h-4 w-4" />
                    AI &amp; Machine Learning
                  </div>
                  <p className="text-xs text-steel">
                    OpenAI API pipelines, automated document parsing (PDF/invoice), and vector search integrations.
                  </p>
                </div>

                <div className="rounded-xl border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Smartphone className="h-4 w-4" />
                    Mobile Engineering
                  </div>
                  <p className="text-xs text-steel">
                    Cross-platform mobile applications for iOS and Android with offline caching and backend synchronization.
                  </p>
                </div>

                <div className="rounded-xl border border-obsidian-border bg-obsidian p-4 space-y-2">
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
            <div className="schematic-bracket border border-gold/30 bg-obsidian-raised p-6 sm:p-8 space-y-3 rounded-2xl">
              <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase">
                <Lock className="h-4 w-4 text-gold" />
                <span>Security, Confidentiality &amp; NDA Protocol</span>
              </div>
              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                We enforce strict NDA confidentiality across all client projects. Code repositories are isolated per engagement with total source code ownership and IP assigned directly to the client upon project delivery. Data privacy protocols ensure client credentials and database access remain strictly protected.
              </p>
            </div>
          </div>

          {/* Right Sidebar Authority Badges */}
          <div className="space-y-6">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 rounded-2xl">
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
                  <span>Studio Entity:</span>
                  <span className="font-mono text-paper text-right">Axorks Pvt Limited</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Studio Hubs:</span>
                  <span className="font-mono text-paper text-right">Karachi &amp; Islamabad</span>
                </li>
              </ul>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 text-center rounded-2xl">
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
