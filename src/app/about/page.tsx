import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, Award, Code2, Users, ShieldCheck, Layers, Bot, Smartphone, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, FOUNDER_ROLE, LINKEDIN_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Studio Architecture & Leadership | Axorks',
  description:
    'Axorks is an elite software studio in Karachi & Islamabad founded by Muhammad Mujahid. Backed by dedicated Web, AI, Mobile App, and UI/UX design teams.',
  keywords: [
    'Axorks',
    'Software House Karachi',
    'Software House in Karachi',
    'Custom Software Studio',
    'Software Architecture Karachi',
    'Muhammad Mujahid Axorks',
  ],
  openGraph: {
    title: 'About Studio Architecture & Leadership | Axorks',
    description:
      'Axorks is a founder-led software studio in Karachi & Islamabad engineered by Muhammad Mujahid. Backed by specialized engineering and design teams.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'profile',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Studio Architecture & Leadership | Axorks',
    description: 'Axorks is a founder-led software studio engineered by Muhammad Mujahid.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
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
      'Muhammad Mujahid is the Founder & Chief Systems Architect of Axorks. BS Software Engineering (Bahria University) and Microsoft Innovative Educator Expert (MIEE 2025).',
    award: 'Microsoft Innovative Educator Expert (MIEE 2025)',
    sameAs: [
      LINKEDIN_URL,
      'https://wa.me/923141030223',
    ],
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Studio & Founder' }]} />

        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            STUDIO_ARCHITECTURE_&_LEADERSHIP
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            About Axorks Software Studio
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Axorks is a premier software studio in Karachi & Islamabad. Backed by dedicated development teams, AI automation specialists, mobile application engineers, and UI/UX designers, we architect high-throughput web applications and public-sector infrastructure solutions.
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
                Muhammad Mujahid serves as the Founder & Chief Systems Architect of Axorks. Specializing in high-stakes full-stack application development, serverless Postgres data architectures, and AI integration, our technical team has architected and delivered <strong className="text-paper">6 major production systems</strong>.
              </p>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Our engineering portfolio includes national-scale public sector systems — such as <strong className="text-gold">AgroTrace</strong> (connected to FWO grid telemetry monitoring cold-chain sensor status across export routes), the <strong className="text-gold">Sindh Food Security Dashboard</strong> (monitoring regional food metrics across 8 districts under international FAO/WFP standards), and <strong className="text-gold">IPMI-OS</strong> (an institutional probabilistic quant engine operating with sub-2.5ms inference speed).
              </p>

              {/* Academic Foundation & Credential Badges */}
              <div className="mt-4 rounded border border-obsidian-border bg-obsidian p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-gold font-bold">
                  <GraduationCap className="h-4 w-4" />
                  <span>Academic Foundation & Recognition</span>
                </div>
                <ul className="space-y-1.5 text-steel text-[11px]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>Bachelor of Software Engineering (BS SE) — Bahria University</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>CAIE O & A-Levels Computer Science Educator (4+ Years Instruction)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>Microsoft Innovative Educator Expert (MIEE 2025 Awardee)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dedicated Department Structure */}
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Users className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  SPECIALIZED_DEPARTMENT_STRUCTURE
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-paper">
                Dedicated Software, AI, Mobile & Design Teams
              </h3>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Axorks operates with specialized department leads working across 4 core divisions:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Code2 className="h-4 w-4" />
                    Web Engineering Division
                  </div>
                  <p className="text-xs text-steel">
                    Full-stack developers building with Next.js App Router, TypeScript, Node.js REST APIs, and PostgreSQL database optimization.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Bot className="h-4 w-4" />
                    AI & Machine Learning Team
                  </div>
                  <p className="text-xs text-steel">
                    AI engineers specializing in OpenAI API integrations, automated document parser pipelines, and statistical predictive models.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Smartphone className="h-4 w-4" />
                    Mobile App Department
                  </div>
                  <p className="text-xs text-steel">
                    Mobile application engineers building cross-platform iOS and Android solutions with offline sync and push notification infrastructure.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Layers className="h-4 w-4" />
                    UI/UX Design Department
                  </div>
                  <p className="text-xs text-steel">
                    Interface designers crafting dark-mode schematic systems, dynamic micro-animations, and high-conversion user flows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Authority Badges */}
          <div className="space-y-6">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 font-mono text-xs text-gold">
                <Award className="h-4 w-4" />
                <span>AUTHORITY_METRICS</span>
              </div>
              <ul className="mt-4 space-y-3.5 text-xs text-steel">
                <li className="flex items-start justify-between gap-2">
                  <span>Public Sector Authority:</span>
                  <span className="font-mono font-bold text-gold text-right">FWO Grid & FAO</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Shipped Production Apps:</span>
                  <span className="font-mono font-bold text-paper text-right">6 Live Systems</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Specialized Departments:</span>
                  <span className="font-mono text-paper text-right">Web, AI, Mobile, UI/UX</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Academic Credentials:</span>
                  <span className="font-mono text-paper text-right">BS SE (Bahria Univ)</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Industry Recognition:</span>
                  <span className="font-mono text-gold text-right">MIEE 2025</span>
                </li>
              </ul>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 text-center">
              <h3 className="font-serif text-base font-bold text-paper">
                Initiate Consultation
              </h3>
              <p className="mt-2 text-xs text-steel">
                Discuss your technical specifications directly with our engineering team leads.
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
