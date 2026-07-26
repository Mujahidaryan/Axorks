import { Globe, HelpCircle, ShieldCheck, Clock, MessageSquare, CreditCard, Award } from 'lucide-react';

export default function InternationalFAQSection() {
  const faqs = [
    {
      q: 'Why a Karachi-based studio instead of someone local to me?',
      icon: Award,
      a: 'Senior engineering talent at a materially lower cost base without sacrificing quality. Our technical standards are proven by public-sector telemetry systems (FWO Grid sync & FAO-aligned monitoring dashboards) built to strict reliability standards, giving you enterprise-grade code at startup-accessible pricing.',
    },
    {
      q: 'What about time zones?',
      icon: Clock,
      a: 'We operate in PKT (UTC+5) with core engineering shifts scheduled from 1:00 PM to 10:00 PM PKT. This guarantees direct overlap hours with US East Coast mornings, UK afternoons, and European business shifts. Call schedules are arranged around your convenient local time.',
    },
    {
      q: 'How do we communicate during the project?',
      icon: MessageSquare,
      a: 'We use Slack, Zoom, WhatsApp, and email depending on your preference. We provide asynchronous daily updates and commit to a guaranteed 24-hour response SLA on business days (within 4 hours for urgent production items).',
    },
    {
      q: 'Do you sign NDAs?',
      icon: ShieldCheck,
      a: 'Yes. Standing mutual NDA confidentiality is our standard policy for all client engagements — protecting your intellectual property, source code, data logic, and business credentials from day one.',
    },
    {
      q: 'How do international payments work?',
      icon: CreditCard,
      a: 'We accept international Bank Wire Transfer, Wise, and Payoneer. All work follows a transparent milestone structure (40% to begin, 40% at midpoint review, 20% on final delivery) so you only pay for verified work.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <Globe className="h-4 w-4" />
          <span>INTERNATIONAL_BUYER_FAQ</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          International Client Objections Answered
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-2xl">
          Direct operational details answering time zone overlap, communication SLAs, NDAs, and payment mechanisms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => {
          const Icon = faq.icon;
          return (
            <div
              key={idx}
              className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Icon className="h-4 w-4 text-gold shrink-0 mt-1" />
                  <h3 className="font-serif text-base font-bold text-paper">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs text-steel leading-relaxed pl-6">
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
