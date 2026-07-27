import {
  MessageSquare,
  ShieldCheck,
  Cpu,
  Zap,
  FileCode2,
  LifeBuoy,
  Layers,
  UserCheck,
  TrendingUp,
  Code2,
  Gauge,
  Sparkles,
} from 'lucide-react';

export default function WhyChooseAxorks() {
  const trustCards = [
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description:
        'Direct daily updates via Slack, Zoom, and email with a guaranteed 24-hour response SLA on business days.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Development Practices',
      description:
        'Enterprise data encryption, OWASP security standards, secure environment variable handling, and RBAC authentication.',
    },
    {
      icon: Cpu,
      title: 'Modern Technology Stack',
      description:
        'Next.js App Router, TypeScript, Tailwind CSS, Python, and serverless PostgreSQL engineered for speed and stability.',
    },
    {
      icon: Zap,
      title: 'Agile Delivery & Staging',
      description:
        'Iterative milestone sprints with live staging preview URLs so you test features as they are built.',
    },
    {
      icon: FileCode2,
      title: 'Technical Documentation Included',
      description:
        'Comprehensive architectural specs, API documentation, environment runbooks, and GitHub repository handoff.',
    },
    {
      icon: LifeBuoy,
      title: 'Long-Term Maintenance & Support',
      description:
        'Post-launch SLA support, monthly security updates, continuous performance tuning, and retainer availability.',
    },
    {
      icon: Layers,
      title: 'Scalable Cloud Architecture',
      description:
        'Serverless database infrastructure engineered to handle user volume spikes without performance degradation.',
    },
    {
      icon: UserCheck,
      title: 'Direct Collaboration with Engineers',
      description:
        'Work directly with Founder & Chief Architect Muhammad Mujahid and senior developers — no junior account reps.',
    },
    {
      icon: TrendingUp,
      title: 'Business-Focused Solutions',
      description:
        'Every line of code is tied directly to your business outcomes: revenue growth, cost reduction, or workflow automation.',
    },
    {
      icon: Code2,
      title: 'Enterprise-Grade Code Quality',
      description:
        'Strict TypeScript typing, clean modular architecture, automated CI/CD checks, and zero technical debt.',
    },
    {
      icon: Gauge,
      title: 'Performance & Core Web Vitals',
      description:
        'Sub-second FCP page load times, Core Web Vitals green scores, and modern AVIF/WebP image optimization.',
    },
    {
      icon: Sparkles,
      title: 'Future-Proof Tech Choices',
      description:
        'Standardized open-source tech stack preventing vendor lock-in or fragile page-builder dependency.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          <span>GLOBAL_TRUST_FOUNDATION</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          Why International Clients Choose Axorks
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-3xl">
          Engineered for business leaders in the UK, US, EU, UAE, and worldwide who require enterprise-grade reliability, transparent communication, and technical accountability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3 flex flex-col justify-between hover:border-gold/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="rounded border border-gold/30 bg-gold/10 p-2">
                    <Icon className="h-4 w-4 text-gold shrink-0" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-paper">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs text-steel leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
