import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useCal } from '../context/CalContext';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do fixed-price milestone contracts work at Axorks?',
    answer:
      'Before writing any code, we draft an itemized Technical Specification Document (TSD) detailing every API route, database schema, user flow, and acceptance criterion. We divide the total cost into distinct milestones. You inspect and test functioning builds on a private staging URL before approving payment for each milestone. Zero hourly billing, zero budget overruns.',
    category: 'Commercial Terms',
  },
  {
    id: 'faq-2',
    question: 'What is the typical cost of custom software with Axorks?',
    answer:
      'Projects at Axorks start from $1,000 for targeted automations or minimum viable products (MVPs). Production SaaS platforms and multi-agent AI pipelines typically range between $3,500 and $8,500. Every project receives an itemized fixed-price proposal within 24 hours of discovery.',
    category: 'Pricing',
  },
  {
    id: 'faq-3',
    question: 'Do I get 100% intellectual property (IP) and source code ownership?',
    answer:
      'Yes, unconditionally. Upon completion and final milestone approval, all source code, database architectures, Figma design files, and deployment configurations are transferred directly to your private GitHub or GitLab repositories. We retain zero proprietary vendor lock-in.',
    category: 'Ownership & Legal',
  },
  {
    id: 'faq-4',
    question: 'Who will actually work on my project?',
    answer:
      'Every project is architected and supervised directly by Muhammad Mujahid, Founder & Chief Systems Architect, working alongside senior in-house domain specialists. We operate physical offices in Karachi and Islamabad. We never outsource to unsupervised freelancers or third-party agencies.',
    category: 'Engineering Team',
  },
  {
    id: 'faq-5',
    question: 'When should a growing business build custom software vs. buy off-the-shelf SaaS?',
    answer:
      'Off-the-shelf SaaS is ideal for generic functions like basic accounting or general email. However, when your core operational workflow is proprietary—such as multi-node logistics, algorithmic risk evaluation, or specialized client portals—rigid SaaS forces expensive manual workarounds and perpetual seat fees. Custom software is a one-time capital asset with zero recurring user fees.',
    category: 'Strategy & AEO',
  },
  {
    id: 'faq-6',
    question: 'How quickly can our project begin?',
    answer:
      'Following our initial 20-minute discovery call, we deliver an itemized Technical Specification Document within 24 hours. Once the proposal and initial milestone are approved, development begins within 3 business days.',
    category: 'Timeline',
  },
  {
    id: 'faq-7',
    question: 'What happens after launch? Is post-launch warranty included?',
    answer:
      'Every project includes a 14-day post-launch warranty covering bug fixes, edge-case resolution, and server deployment validation at zero extra cost. For ongoing updates, security patches, and feature iteration, we offer transparent monthly SLA retainer tiers.',
    category: 'Post-Launch',
  },
];

export const FAQAccordion: React.FC<{ title?: string; subtitle?: string }> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Clear, direct answers about our commercial terms, engineering architecture, and delivery guarantees.',
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { openCal } = useCal();

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      aria-label="Frequently Asked Questions"
      className="w-full py-20 sm:py-28 bg-[#060913] text-[#F8FAFC] border-t border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Direct Answers &amp; Total Clarity</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020]/80 backdrop-blur-md transition-all duration-200 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base leading-relaxed text-slate-300 border-t border-white/5 pt-4">
                    <p>{faq.answer}</p>
                    {faq.category && (
                      <span className="inline-block mt-3 text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Category: {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0B132B] to-[#080E20] p-6 text-center">
          <h3 className="text-base font-bold text-white">
            Have a proprietary question about your software architecture?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Discuss your system requirements directly with senior engineers.
          </p>
          <button
            onClick={openCal}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white border border-white/15 transition-all cursor-pointer"
          >
            <span>Ask Us on a Discovery Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};
