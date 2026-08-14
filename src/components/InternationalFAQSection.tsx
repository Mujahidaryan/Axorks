import { Globe, Clock, MessageSquare, ShieldCheck, CreditCard, Award, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function InternationalFAQSection() {
  const faqs = [
    {
      q: 'Why choose Axorks over a local development agency?',
      icon: Award,
      a: 'Senior engineering talent and high-quality software delivery at competitive international rates without sacrificing code standards or security. Our technical capabilities are proven by enterprise-grade telemetry systems (FWO Grid sync & FAO-aligned monitoring dashboards) built to strict reliability standards.',
      accent: '#4F46E5', // Deep Indigo
      badge: 'TOP TIER TALENT',
      href: '/about',
    },
    {
      q: 'How do you handle time zones & global collaboration?',
      icon: Clock,
      a: 'We offer flexible collaboration across time zones with core engineering schedules structured to guarantee direct overlap hours with North America (US East Coast/West Coast), UK, Europe, and GCC business shifts. Call schedules and communication are arranged around your convenient local time.',
      accent: '#0D9488', // Soft Teal
      badge: 'DIRECT OVERLAP',
      href: '/process',
    },
    {
      q: 'How do we communicate during the project?',
      icon: MessageSquare,
      a: 'We use Slack, Zoom, WhatsApp, and email depending on your preference. We provide asynchronous daily updates and commit to a guaranteed 24-hour response SLA on business days (within 4 hours for urgent production items).',
      accent: '#2563EB', // Slate Blue
      badge: '24HR RESPONSE SLA',
      href: '/process',
    },
    {
      q: 'Do you sign NDAs?',
      icon: ShieldCheck,
      a: 'Yes. Standing mutual NDA confidentiality is our standard policy for all client engagements — protecting your intellectual property, source code, data logic, and business credentials from day one.',
      accent: '#7C3AED', // Muted Violet
      badge: 'FULL IP PROTECTION',
      href: '/contact',
    },
    {
      q: 'How do international payments work?',
      icon: CreditCard,
      a: 'We accept international Bank Wire Transfer, Wise, and Payoneer. All work follows a transparent milestone structure (40% to begin, 40% at midpoint review, 20% on final delivery) so you only pay for verified work.',
      accent: '#D97706', // Warm Amber
      badge: '40 / 40 / 20 BILLING',
      href: '/contact',
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 p-8 shadow-executive-lg sm:p-12">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="exec-mesh mesh-indigo-light absolute -right-20 -top-20 h-96 w-96" />
        <div className="exec-mesh mesh-teal-light absolute -bottom-24 -left-24 h-96 w-96 opacity-70" />
        <div className="exec-grid-light absolute inset-0 opacity-30" />
      </div>

      {/* Header */}
      <div className="relative z-10 space-y-4 border-b border-slate-200/80 pb-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="exec-eyebrow exec-eyebrow-light">
            <Globe className="h-4 w-4 text-indigo-600" />
            International Buyer FAQ
          </div>
          <p className="font-mono text-xs text-slate-500">Time zones · SLAs · NDAs · Payments</p>
        </div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          International client objections, answered.
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Direct operational details answering time zone overlap, communication SLAs, NDAs, and payment mechanisms.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="relative z-10 mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {faqs.map((faq, idx) => {
          const Icon = faq.icon;
          return (
            <article
              key={idx}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-executive-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-executive-lg"
            >
              {/* Accent top bar */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${faq.accent}, ${faq.accent}80)` }}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${faq.accent}12`, color: faq.accent, boxShadow: `0 4px 12px ${faq.accent}18` }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className="rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${faq.accent}08`, borderColor: `${faq.accent}25`, color: faq.accent }}
                  >
                    {faq.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-900">
                  {faq.q}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1.5 border-t border-slate-100 pt-4">
                <Link
                  href={faq.href}
                  className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:translate-x-0.5"
                  style={{ color: faq.accent }}
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}