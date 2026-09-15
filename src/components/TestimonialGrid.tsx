import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  metricValue: string;
  metricLabel: string;
  logo?: string;
  accent: 'emerald' | 'gold' | 'cyan' | 'violet';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'agrotrace',
    author: 'Markus Vance',
    role: 'VP of Global Logistics',
    company: 'AgroTrace',
    industry: 'AgriTech & Supply Chain',
    quote:
      'Axorks replaced our fragile tracking spreadsheets with a real-time thermal IoT monitoring system across 14,000 active nodes. We cut transit spoilage by 42% in the first quarter. Delivered on time, exactly to their fixed-price quote.',
    metricValue: '42%',
    metricLabel: 'Spoilage Reduction',
    logo: '/Logos/agrotrace_logo.png',
    accent: 'emerald',
  },
  {
    id: 'ipmi-os',
    author: 'Elena Rostova',
    role: 'Managing Director',
    company: 'IPMI Trading Desk',
    industry: 'FinTech · High-Frequency Trading',
    quote:
      'Trading volatile digital assets requires sub-second decision speed and strict risk controls. Axorks engineered an execution engine that eliminates emotional error and enforces our risk parameters automatically.',
    metricValue: '<1s',
    metricLabel: 'Execution Response',
    logo: '/Logos/ipmios_logo.png',
    accent: 'gold',
  },
  {
    id: 'mediverse',
    author: 'Dr. Tariq Mahmood',
    role: 'Chief Medical Officer',
    company: 'MediVerse Health',
    industry: 'Healthcare · Telemedicine',
    quote:
      'Navigating HIPAA and GDPR compliance while building an intuitive telemedicine experience seemed daunting. Axorks architected the entire platform with strict end-to-end encryption and zero data leaks.',
    metricValue: '100%',
    metricLabel: 'HIPAA & WHO Compliance',
    logo: '/Logos/mediverse_logo.png',
    accent: 'violet',
  },
  {
    id: 'fume',
    author: 'Sophie Laurent',
    role: 'Creative Director',
    company: 'FUME Fragrances',
    industry: 'Luxury Brand & E-Commerce',
    quote:
      'We did not want the website to feel like just another online store. Axorks designed a breathtaking bespoke digital boutique that increased our average order value by 34% within two months.',
    metricValue: '+34%',
    metricLabel: 'AOV Increase',
    logo: '/Logos/fume_logo.jpg',
    accent: 'gold',
  },
  {
    id: 'finedge',
    author: 'Julian Mercer',
    role: 'Founder & CEO',
    company: 'FinEdge SaaS (London)',
    industry: 'B2B Fintech',
    quote:
      'The milestone payment model eliminated our contractor anxiety. We verified working builds on private staging before releasing funds. Their 24-hour communication response time is 100% genuine.',
    metricValue: '8 Wks',
    metricLabel: 'MVP to Production',
    accent: 'cyan',
  },
  {
    id: 'gulf-logistics',
    author: 'Kareem Al-Husseini',
    role: 'Head of Operations',
    company: 'Gulf Logistics Group (Dubai)',
    industry: 'Cross-Border Freight',
    quote:
      'Their engineering teams in Islamabad and Karachi worked directly with our Dubai dispatchers. Clear English, direct Slack communication, and zero junior developer runarounds.',
    metricValue: '62%',
    metricLabel: 'Manual Hours Saved',
    accent: 'emerald',
  },
  {
    id: 'omniretail',
    author: 'David Chen',
    role: 'Chief Technology Officer',
    company: 'OmniRetail Cloud',
    industry: 'Multi-Channel Commerce',
    quote:
      'We migrated our legacy monolith to a Next.js and Go microservice architecture with Axorks. Page speed improved by 68% and checkout conversion climbed 22%.',
    metricValue: '+22%',
    metricLabel: 'Conversion Lift',
    accent: 'gold',
  },
  {
    id: 'talentflow',
    author: 'Sarah Jenkins',
    role: 'COO',
    company: 'TalentFlow Automated HR',
    industry: 'Enterprise HR Tech',
    quote:
      'Our internal recruiters were spending 25 hours weekly screen-matching resumes. Axorks built an autonomous AI extraction agent that reduced manual review time by 62%.',
    metricValue: '25 hrs',
    metricLabel: 'Saved Weekly per Recruiter',
    accent: 'violet',
  },
];

export const TestimonialGrid: React.FC = () => {
  return (
    <section 
      aria-label="Verified client accounts and testimonials"
      className="w-full py-20 sm:py-28 bg-[#030712] text-[#F8FAFC] border-t border-white/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20 mb-4">
            <Quote className="h-3.5 w-3.5" />
            <span>Proven Production Track Record</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Trusted by enterprise operators &amp; funded founders.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real outcomes delivered across agriculture, algorithmic trading, healthcare telemedicine, and high-growth SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70"
            >
              <div>
                {/* Metric pill */}
                <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-white/5">
                  <div>
                    <span className="text-2xl font-extrabold font-mono text-[#F5C761]">
                      {t.metricValue}
                    </span>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      {t.metricLabel}
                    </p>
                  </div>
                  {t.logo && (
                    <img 
                      src={t.logo} 
                      alt={`${t.company} logo`} 
                      className="h-7 max-w-[90px] object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                    />
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-slate-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-sm font-bold text-white">
                  {t.author}
                </p>
                <p className="text-xs text-slate-400">
                  {t.role}, <span className="text-slate-300 font-medium">{t.company}</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
