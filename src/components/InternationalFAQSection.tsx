import { Globe, Clock, MessageSquare, ShieldCheck, CreditCard, Award } from 'lucide-react';

export default function InternationalFAQSection() {
  const faqs = [
    {
      q: 'Why choose Axorks over a local development agency?',
      icon: Award,
      a: 'Senior engineering talent and high-quality software delivery at competitive international rates without sacrificing code standards or security. Our technical capabilities are proven by enterprise-grade telemetry systems (FWO Grid sync & FAO-aligned monitoring dashboards) built to strict reliability standards.',
      accent: '#4F46E5', // Deep Indigo
    },
    {
      q: 'How do you handle time zones & global collaboration?',
      icon: Clock,
      a: 'We offer flexible collaboration across time zones with core engineering schedules structured to guarantee direct overlap hours with North America (US East Coast/West Coast), UK, Europe, and GCC business shifts. Call schedules and communication are arranged around your convenient local time.',
      accent: '#0D9488', // Soft Teal
    },
    {
      q: 'How do we communicate during the project?',
      icon: MessageSquare,
      a: 'We use Slack, Zoom, WhatsApp, and email depending on your preference. We provide asynchronous daily updates and commit to a guaranteed 24-hour response SLA on business days (within 4 hours for urgent production items).',
      accent: '#2563EB', // Slate Blue
    },
    {
      q: 'Do you sign NDAs?',
      icon: ShieldCheck,
      a: 'Yes. Standing mutual NDA confidentiality is our standard policy for all client engagements — protecting your intellectual property, source code, data logic, and business credentials from day one.',
      accent: '#7C3AED', // Muted Violet
    },
    {
      q: 'How do international payments work?',
      icon: CreditCard,
      a: 'We accept international Bank Wire Transfer, Wise, and Payoneer. All work follows a transparent milestone structure (40% to begin, 40% at midpoint review, 20% on final delivery) so you only pay for verified work.',
      accent: '#D97706', // Warm Amber
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100/80 border border-slate-200/90 p-6 sm:p-10 space-y-8 shadow-sm relative overflow-hidden">
      {/* Background Soft Executive Accent Mesh */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-2 border-b border-slate-200 pb-4 relative z-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-700 font-bold uppercase tracking-wider">
          <Globe className="h-4 w-4" />
          <span>INTERNATIONAL_BUYER_FAQ</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          International Client Objections Answered
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          Direct operational details answering time zone overlap, communication SLAs, NDAs, and payment mechanisms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {faqs.map((faq, idx) => {
          const Icon = faq.icon;
          return (
            <div
              key={idx}
              className="relative group bg-white rounded-2xl border border-slate-200/80 p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300"
            >
              {/* Left Accent Bar */}
              <div
                className="absolute left-0 top-5 bottom-5 w-1 rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: faq.accent }}
              />

              <div className="space-y-3 pl-2">
                <div className="flex items-start gap-2.5">
                  <div
                    className="p-1.5 rounded-lg shrink-0 mt-0.5"
                    style={{ backgroundColor: `${faq.accent}12`, color: faq.accent }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
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
