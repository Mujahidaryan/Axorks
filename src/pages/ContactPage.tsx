import React, { useState } from 'react';
import { useNavigate } from '../router/Router';
import { FAQ_ITEMS } from '../data/mockData';
import { Send, CheckCircle2, MessageSquare, Mail, ChevronDown, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Custom Web Platforms & SaaS Architecture',
    budget: '$199 to $499 (Starter & MVP)',
    scope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, service, budget, scope } = formState;
    const body = `Full Name: ${fullName}%0AEmail: ${email}%0APhone/WhatsApp: ${phone}%0AService Category: ${service}%0ABudget Target: ${budget}%0A%0AProject Scope & Requirements:%0A${scope}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=New%20Architecture%20Inquiry:%20${encodeURIComponent(fullName)}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Contact &amp; Proposals</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Request a Fixed-Price Proposal.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Projects start from $199 - $499. Share your system requirements below to receive an itemized technical scope, milestone schedule, and transparent commercial proposal from senior engineering within 24 hours.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161618] border border-[rgba(146,157,167,0.18)] text-xs uppercase text-[#E8B923] tracking-widest font-semibold font-mono-code">
            <span>24-Hour Technical Proposal Turnaround</span>
          </div>
        </div>
      </section>

      {/* Main Intake Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ─── Proposal Intake Form on Executive Dark Luxury Glass Surface ─── */}
          <div className="lg:col-span-7 bg-[#121214] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 spatial-card shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85)] border border-[rgba(146,157,167,0.14)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(146,157,167,0.14)]">
              <div>
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#F4F4F5]">
                  Project Inquiry &amp; Scope Brief
                </h2>
                <p className="text-xs text-[#71717A] font-mono-code mt-0.5 font-medium">
                  Milestone-backed delivery · Zero hourly surprises
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-[#161618] text-[#E8B923] border border-[#E8B923]/30 text-[10px] font-mono-code font-bold uppercase tracking-wider">
                Fixed-Price Proposal
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[var(--emerald)]/15 border border-[var(--emerald)]/40 text-[var(--emerald)] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display-hero text-2xl font-bold text-white">
                  Proposal Request Dispatched
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your project requirements have been prepared. An architect from AXORKS Technologies will review your specifications and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer border border-white/15"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. Tariq Malik"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070B16] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[var(--gold)]/60 focus:ring-1 focus:ring-[var(--gold)]/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. tariq@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070B16] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[var(--gold)]/60 focus:ring-1 focus:ring-[var(--gold)]/60 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070B16] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[var(--gold)]/60 focus:ring-1 focus:ring-[var(--gold)]/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Primary Service Category
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070B16] text-white text-sm focus:outline-none focus:border-[var(--gold)]/60 focus:ring-1 focus:ring-[var(--gold)]/60 transition-all cursor-pointer"
                    >
                      <option value="Custom Web Platforms & SaaS Architecture" className="bg-[#0A0F1F] text-white">Custom Web Platforms &amp; SaaS Architecture (Primary)</option>
                      <option value="Intelligent Visibility (SEO + AEO + GEO)" className="bg-[#0A0F1F] text-white">Intelligent Visibility (SEO + AEO + GEO Packages)</option>
                      <option value="School & College Learning Management Systems (LMS)" className="bg-[#0A0F1F] text-white">School &amp; College Learning Management Systems (LMS)</option>
                      <option value="Banking & Financial Management Systems" className="bg-[#0A0F1F] text-white">Banking &amp; Financial Management Systems</option>
                      <option value="Hospital & Clinical Management Systems (HMS)" className="bg-[#0A0F1F] text-white">Hospital &amp; Clinical Management Systems (HMS)</option>
                      <option value="Enterprise ERP & Intelligent Automations" className="bg-[#0A0F1F] text-white">Enterprise ERP &amp; Intelligent Automations</option>
                      <option value="Mobile Applications (Flutter / Native)" className="bg-[#0A0F1F] text-white">Mobile Applications (Flutter / Native)</option>
                      <option value="Ongoing Architecture & Retainer Support" className="bg-[#0A0F1F] text-white">Ongoing Architecture &amp; Retainer Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                    Budget Target (Milestone-Based)
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(146,157,167,0.14)] bg-[#08080A] text-[#F4F4F5] text-sm focus:outline-none focus:border-[#E8B923]/60 focus:ring-1 focus:ring-[#E8B923]/60 transition-all cursor-pointer"
                  >
                    <option value="$199 (Professional Web Presence)" className="bg-[#121214] text-[#F4F4F5]">$199 (Professional Web Presence)</option>
                    <option value="$499 (Custom Web Platform & Strategic MVP)" className="bg-[#121214] text-[#F4F4F5]">$499 (Custom Web Platform &amp; Strategic MVP)</option>
                    <option value="$1,499 to $3,500 (Flagship Digital Product System)" className="bg-[#121214] text-[#F4F4F5]">$1,499 to $3,500 (Flagship Digital Product System)</option>
                    <option value="$1,999+ (Enterprise ERP / LMS / Banking / Hospital)" className="bg-[#121214] text-[#F4F4F5]">$1,999+ (Enterprise ERP / LMS / Banking / Hospital)</option>
                    <option value="$99 to $299/mo (Search & AI Visibility Packages)" className="bg-[#121214] text-[#F4F4F5]">$99 to $299/mo (Search &amp; AI Visibility Packages)</option>
                    <option value="Custom / Scoping Required" className="bg-[#121214] text-[#F4F4F5]">Custom / Scoping Required</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                    Project Scope &amp; Functional Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.scope}
                    onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                    placeholder="Briefly describe what you need built, key technical features, desired delivery timeline, or any reference systems..."
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(146,157,167,0.14)] bg-[#08080A] text-[#F4F4F5] placeholder-slate-500 text-sm focus:outline-none focus:border-[#E8B923]/60 focus:ring-1 focus:ring-[#E8B923]/60 transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="magnetic-btn w-full py-4 rounded-xl bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] text-xs font-headline font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_4px_20px_rgba(232,185,35,0.3)] hover:shadow-[0_4px_30px_rgba(232,185,35,0.45)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <div className="mt-3 text-center text-[11px] font-mono-code text-[#71717A]">
                    <span>Direct technical dispatch to contact@axorks.com · 24hr response</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* ─── Direct Channels & FAQ Accordion (5 Cols) ──────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[var(--emerald)]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/40 flex items-center justify-center text-[var(--emerald)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    Fast Direct WhatsApp
                  </h3>
                  <p className="text-xs text-[var(--emerald)] font-mono-code font-semibold">
                    Live Engineering Chat
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Skip the form and message our engineering leadership directly on WhatsApp for instant project scoping.
              </p>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[var(--emerald)] text-[#030712] font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#0D9668] transition-all shadow-md cursor-pointer"
              >
                <span>WhatsApp: +92 314 103 0223</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Project%20Inquiry%20-%20AXORKS%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[var(--gold)]/35 hover:border-[var(--gold)] shadow-xl transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-[var(--gold)]/15 border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                    Direct Email
                  </h3>
                  <p className="text-xs text-[var(--gold)] font-mono-code font-semibold">
                    contact@axorks.com
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Send RFPs, architectural diagrams, and project documents directly to our leadership.
              </p>
            </a>

            {/* FAQ Accordion */}
            <div className="space-y-2.5 pt-2">
              <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-3 px-1">
                Frequently Asked Questions
              </h3>

              {FAQ_ITEMS.map((faq) => {
                const isOpen = expandedFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="glass-2 rounded-2xl border border-[var(--glass-border)] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 text-xs font-headline font-bold text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--gold)] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--glass-border)]/50 pt-2.5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
