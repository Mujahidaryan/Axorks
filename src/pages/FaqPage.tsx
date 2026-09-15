import React from 'react';
import { HelpCircle, ArrowRight, MessageSquare, ShieldCheck, Mail } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FAQAccordion } from '../components/FAQAccordion';
import { useCal } from '../context/CalContext';

export const FaqPage: React.FC = () => {
  const { openCal } = useCal();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="Frequently Asked Questions (FAQ) | Fixed-Price Software & AI Studio | Axorks"
        description="Comprehensive answers about Axorks fixed-price milestone software engineering, 100% IP ownership, project costs starting from $1,000, and AI automation architecture."
        canonicalPath="/faq"
      />

      {/* Hero */}
      <section className="pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>AEO Knowledge Base &amp; Entity Answers</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Direct answers to your technical and commercial questions.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-300">
            Everything you need to know about our milestone delivery framework, 100% IP transfer, and engineering standards. Projects start from $1,000.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={openCal}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-7 py-3.5 text-sm font-bold text-[#1A1000] shadow-lg shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
            >
              <span>Schedule 20-Min Discovery Session</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:contact@axorks.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white border border-white/10 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email contact@axorks.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Accordion */}
      <FAQAccordion />

      {/* Direct WhatsApp CTA Strip */}
      <section className="py-16 bg-[#070D1B] border-t border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a custom requirement not covered here?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Our principal architects are available for direct review. We answer inquiries within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923141030223?text=Hi%20Axorks,%20I%20have%20a%20specific%20technical%20question%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 px-6 py-3.5 text-sm font-semibold text-emerald-400 border border-emerald-500/25 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
