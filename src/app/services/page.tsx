import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Code, Layout, Smartphone, Bot, Landmark, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Axorks Software House',
  description:
    'Custom web development, full-stack systems, mobile apps, AI automation pipelines, and government digital solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'website-development',
      icon: Layout,
      title: 'Website Development',
      paragraph:
        'High-performance marketing websites built with Next.js App Router, TypeScript, and serverless infrastructure. Designed specifically for technical founders, agency owners, and high-ticket B2B businesses that need to convert cold referral, Upwork, or WhatsApp traffic into scheduled consultation calls without relying on heavy WordPress themes or slow page builders.',
    },
    {
      id: 'web-applications',
      icon: Code,
      title: 'Web Applications & Custom Systems',
      paragraph:
        'Complex full-stack web applications featuring serverless relational databases, role-based access control (RBAC), custom REST API endpoints, and clean data architectures. Designed for businesses replacing messy spreadsheets or legacy software with custom dashboards, client portals, or operational management software.',
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      paragraph:
        'Cross-platform mobile applications engineered for fast performance, offline data synchronization, and clean mobile interfaces. Tailored for startups and growing enterprises needing companion apps for field teams, customer self-service portals, or real-time notification triggers on iOS and Android.',
    },
    {
      id: 'ai-integration',
      icon: Bot,
      title: 'AI Integration & Automation',
      paragraph:
        'Practical AI implementation integrating OpenAI APIs, automated document parsing pipelines, and predictive analytics into existing web software. Built for businesses seeking to reduce manual data entry workload, automate client communications, or implement intelligent search without over-engineering.',
    },
    {
      id: 'government-solutions',
      icon: Landmark,
      title: 'Government & Enterprise Digital Solutions',
      paragraph:
        'Public-sector digital systems and large-scale enterprise platforms compliant with strict data integrity standards (e.g. FAO/WFP international humanitarian benchmarks). Built for public institutions, NGOs, and enterprise organizations requiring high reliability under heavy concurrent usage.',
    },
    {
      id: 'support-retainer',
      icon: Wrench,
      title: 'Maintenance & Support Retainer',
      paragraph:
        'Ongoing technical maintenance, security patch management, database optimization, and feature enhancements on a predictable retainer basis. Designed for teams who have launched their core application and require dedicated engineering availability for uptime monitoring and fast bug fixes.',
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            CAPABILITIES_OVERVIEW
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Software Engineering Services
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Every service is scoped around clear operational outcomes. Specific beats clever — no generic feature dumps or agency fluff.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="schematic-bracket group flex flex-col justify-between border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 transition-colors hover:border-gold/40"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-obsidian-border pb-4">
                    <span className="font-mono text-xs text-gold">
                      SERVICE_0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-steel group-hover:text-gold transition-colors" />
                  </div>

                  <h2 className="mt-4 font-serif text-xl font-bold text-paper">
                    {svc.title}
                  </h2>

                  <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm">
                    {svc.paragraph}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-obsidian-border/50">
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-signal-blue hover:text-signal-blue-hover transition-colors"
                  >
                    Inquire for {svc.title}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Note */}
        <div className="mt-16 schematic-bracket border border-gold/30 bg-obsidian-raised p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                TRANSPARENT_DELIVERY
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-paper">
                Need a custom project scope or retainers?
              </h3>
              <p className="mt-2 text-xs text-steel">
                We provide upfront fixed-price quotes after initial discovery. No surprise billing or scope creep.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
            >
              Request a Custom Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
