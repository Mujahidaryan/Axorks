import { Globe, Clock, MessageSquare, ShieldCheck, CreditCard, Award } from 'lucide-react';

export default function InternationalFAQSection() {
  const faqs = [
    {
      q: 'Why choose Axorks over a local development agency?',
      icon: Award,
      a: 'Senior engineering talent and high-quality software delivery at competitive international rates without sacrificing code standards or security. Our technical capabilities are proven by enterprise-grade telemetry systems (FWO Grid sync & FAO-aligned monitoring dashboards) built to strict reliability standards.',
      accent: '#4F46E5', // Deep Indigo
      badge: 'TOP TIER TALENT',
    },
    {
      q: 'How do you handle time zones & global collaboration?',
      icon: Clock,
      a: 'We offer flexible collaboration across time zones with core engineering schedules structured to guarantee direct overlap hours with North America (US East Coast/West Coast), UK, Europe, and GCC business shifts. Call schedules and communication are arranged around your convenient local time.',
      accent: '#0D9488', // Soft Teal
      badge: 'DIRECT OVERLAP',
    },
    {
      q: 'How do we communicate during the project?',
      icon: MessageSquare,
      a: 'We use Slack, Zoom, WhatsApp, and email depending on your preference. We provide asynchronous daily updates and commit to a guaranteed 24-hour response SLA on business days (within 4 hours for urgent production items).',
      accent: '#2563EB', // Slate Blue
      badge: '24HR RESPONSE SLA',
    },
    {
      q: 'Do you sign NDAs?',
      icon: ShieldCheck,
      a: 'Yes. Standing mutual NDA confidentiality is our standard policy for all client engagements — protecting your intellectual property, source code, data logic, and business credentials from day one.',
      accent: '#7C3AED', // Muted Violet
      badge: 'FULL IP PROTECTION',
    },
    {
      q: 'How do international payments work?',
      icon: CreditCard,
      a: 'We accept international Bank Wire Transfer, Wise, and Payoneer. All work follows a transparent milestone structure (40% to begin, 40% at midpoint review, 20% on final delivery) so you only pay for verified work.',
      accent: '#D97706', // Warm Amber
      badge: '40 / 40 / 20 BILLING',
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200 p-8 sm:p-12 space-y-10 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden">
      {/* Rich Background Ambient Meshes & Grid */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 executive-grid-pattern-light opacity-50 pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 border-b border-slate-200/80 pb-6 relative z-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-700 font-bold uppercase tracking-widest bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-xs">
          <Globe className="h-4 w-4 text-indigo-600" />
          <span>INTERNATIONAL_BUYER_FAQ</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
          International Client Objections Answered
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-medium">
          Direct operational details answering time zone overlap, communication SLAs, NDAs, and payment mechanisms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {faqs.map((faq, idx) => {
          const Icon = faq.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 space-y-4 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.09)] hover:-translate-y-1 hover:border-slate-300/90 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity opacity-80 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${faq.accent}, ${faq.accent}80)` }}
              />

              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="p-2.5 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${faq.accent}12`, color: faq.accent, boxShadow: `0 4px 12px ${faq.accent}20` }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className="font-mono text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border"
                    style={{ backgroundColor: `${faq.accent}08`, borderColor: `${faq.accent}25`, color: faq.accent }}
                  >
                    {faq.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-950 transition-colors">
                  {faq.q}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
