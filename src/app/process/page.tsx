import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Search, FileCode, Hammer, Rocket, LifeBuoy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Process | Axorks Software Studio',
  description:
    'Our 5-step honest software build walkthrough: Discovery, Scope & Quote, Build, Launch, and Retainer Support.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Architecture Audit',
      icon: Search,
      paragraph:
        'We start with a direct technical discussion to understand your product goals, target user flows, database needs, and integration constraints. No sales reps or account managers — you speak directly with engineering.',
    },
    {
      number: '02',
      title: 'Explicit Scope & Fixed Quote',
      icon: FileCode,
      paragraph:
        'We translate your requirements into a clear technical specification document detailing exact deliverables, database schemas, tech stack choices, milestone timeline, and a fixed transparent price quote.',
    },
    {
      number: '03',
      title: 'Full-Stack Build & AI Integration',
      icon: Hammer,
      paragraph:
        'We execute the build using Next.js App Router, TypeScript, Tailwind CSS, and serverless Postgres. Continuous progress updates with real staging preview links so you test features as they are built.',
    },
    {
      number: '04',
      title: 'Production Launch & Verification',
      icon: Rocket,
      paragraph:
        'We deploy your system directly to Vercel/Neon serverless infrastructure, configure DNS pointers, setup SSL, test API security routes, and verify mobile responsiveness down to real device viewports.',
    },
    {
      number: '05',
      title: 'Handoff & Support Retainer',
      icon: LifeBuoy,
      paragraph:
        'We provide complete clean source code handoff on GitHub, environment variable documentation, and optional monthly retainer availability for continuous performance tuning and new feature rollouts.',
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            NO_AGILE_THEATER
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Honest 5-Step Execution Process
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Real engineering steps only. No unnecessary daily standup theater, invented ceremonies, or middle-management bloat.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-gold">
                      {step.number}
                    </span>
                    <div className="rounded border border-obsidian-border bg-obsidian p-2.5">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-paper">
                      {step.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-steel sm:text-sm md:pl-16">
                  {step.paragraph}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Start Step 01 Discovery
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
