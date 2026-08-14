'use client';

import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export default function ServiceFAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Direct technical and commercial answers regarding project delivery, code ownership, security, and ongoing support.',
  faqs,
}: ServiceFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-8">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian-raised p-6 sm:p-8">
        {/* Gold hairline top */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div aria-hidden="true" className="exec-dots-dark absolute inset-x-0 bottom-0 h-px" />

        <div className="space-y-2 border-b border-white/10 pb-4">
          <div className="exec-eyebrow exec-eyebrow-gold">
            <HelpCircle className="h-4 w-4 text-gold" />
            <span>OBJECTION_HANDLING_QA</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
            {title}
          </h2>
          <p className="text-xs text-steel leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-5 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="group overflow-hidden rounded-xl border border-white/10 bg-obsidian/80 transition-colors duration-300 hover:border-gold/25"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-base font-bold text-paper hover:text-gold transition-colors gap-4"
                >
                  <span className="flex items-start gap-3">
                    <span className="font-mono text-xs text-gold mt-1 shrink-0">
                      Q{idx + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-steel shrink-0 transition-colors group-hover:text-gold" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/10 text-xs text-steel leading-relaxed pl-11">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
