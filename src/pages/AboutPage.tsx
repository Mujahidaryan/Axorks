import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Mail, MessageSquare, ArrowRight, ShieldCheck, Tag, Building2, Key, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const mujahid = TEAM_MEMBERS.find((m) => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const farhana = TEAM_MEMBERS.find((m) => m.id === 'farhana');
  const yousaf = TEAM_MEMBERS.find((m) => m.id === 'yousaf-piryani');
  const alina = TEAM_MEMBERS.find((m) => m.id === 'alina');
  const faisal = TEAM_MEMBERS.find((m) => m.id === 'faisal');
  const shayan = TEAM_MEMBERS.find((m) => m.id === 'shayan');
  const aliHaider = TEAM_MEMBERS.find((m) => m.id === 'ali-haider');
  const qasim = TEAM_MEMBERS.find((m) => m.id === 'qasim');
  const farwa = TEAM_MEMBERS.find((m) => m.id === 'farwa');
  const furqan = TEAM_MEMBERS.find((m) => m.id === 'furqan');

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>About Axorks</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            An AI-First Engineering Studio Built on Certainty.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Axorks is an AI-first software engineering studio based in Karachi and Islamabad. We help growing businesses automate manual work and build reliable custom systems through intelligent automation, custom web applications, and mobile solutions. All work is delivered with fixed-price proposals and clear milestone-based payments.
          </p>
        </div>
      </section>

      {/* Commercial Commitments Strip */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm">
            <Tag className="w-5 h-5 text-[var(--gold)] mb-3" />
            <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">From $1,000</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Accessible entry pricing for growing companies, MVPs, and targeted automation workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[var(--emerald)] mb-3" />
            <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">Fixed-Price Milestones</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Scope and investment locked before code begins. You review staging builds before payment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm">
            <Building2 className="w-5 h-5 text-[#A78BFA] mb-3" />
            <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">Karachi &amp; Islamabad</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Registered software engineering offices in Pakistan serving global enterprise clients.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm">
            <Key className="w-5 h-5 text-[#38BDF8] mb-3" />
            <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">100% IP Ownership</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Full repository transfer, documentation, and zero proprietary lock-in upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Vision & Studio Philosophy (Wide Showcase Image) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-[#0A0F1D] border border-white/10 p-8 sm:p-12 spatial-card overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Full-body office photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="w-full aspect-[3/4] max-h-[440px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative bg-[#060A16] group">
                <img
                  src="/Images/Founder_Office.jpg"
                  alt="Muhammad Mujahid, Founder & Chief Systems Architect in the Axorks Engineering Studio"
                  className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-center">
                  <span className="block text-xs font-headline font-bold text-white uppercase tracking-wider">
                    Muhammad Mujahid
                  </span>
                  <span className="block text-[10px] font-mono-code text-[var(--gold)] font-medium">
                    Founder &amp; Chief Systems Architect · Axorks Studio
                  </span>
                </div>
              </div>
            </div>

            {/* Vision Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-mono-code font-bold uppercase tracking-widest">
                <span>Founder Vision</span>
              </div>

              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                "We founded Axorks to replace agency bloat with direct senior architectural access."
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Traditional software houses hide behind account managers, junior developer handoffs, and open-ended hourly retainers. At Axorks, we operate as a dedicated engineering studio.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Every project is scoped and supervised directly by senior architects. We work with fixed-price proposals, testable milestones on live staging servers, and 100% intellectual property ownership transferred on day one.
              </p>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="font-headline text-xs font-bold text-white uppercase tracking-wider block mb-1">
                    Zero Junior Delegation
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    You interface with the software engineers writing and architecting your production systems.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="font-headline text-xs font-bold text-white uppercase tracking-wider block mb-1">
                    Staging Verification
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    You test working code on staging servers before releasing any milestone payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
            Studio Leadership
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 rounded-3xl bg-white border border-[var(--glass-border)] p-7 sm:p-10 spatial-card shadow-lg hover:border-[var(--gold)]/40 transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--gold)]/40 bg-[#0A0F1D] shrink-0">
                    <img
                      src="/Images/Founder_Headshot.jpg"
                      alt="Muhammad Mujahid, Founder and CEO of Axorks Technologies"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="mt-3 text-[11px] font-mono-code text-[var(--gold)] font-bold uppercase tracking-wider">
                    Chief Systems Architect
                  </span>
                </div>

                <div className="sm:col-span-7 space-y-3 text-left">
                  <span className="text-[10px] font-mono-code text-[var(--gold)] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-[var(--gold)]/15 border border-[var(--gold)]/30">
                    FOUNDER &amp; CEO
                  </span>
                  <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                    {mujahid.name}
                  </h2>
                  <p className="text-xs font-mono-code text-[var(--text-muted)]">
                    BS Software Engineering · Bahria University Alumnus
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    Muhammad leads systems architecture, multi-AI workflow development, and commercial proposals. Every client engagement is scoped and supervised directly by senior leadership, guaranteeing direct accountability from specification to production launch.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-secondary)] font-medium">
                      System Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-secondary)] font-medium">
                      AI Automations
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-secondary)] font-medium">
                      Commercial Governance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Operations Partner */}
            {farhana && (
              <div className="lg:col-span-4 rounded-3xl bg-white border border-[var(--glass-border)] p-6 sm:p-8 spatial-card flex flex-col justify-between shadow-lg hover:border-[var(--emerald)]/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--emerald)]/10 border border-[var(--emerald)]/30 flex items-center justify-center font-mono-code text-sm font-bold text-[var(--emerald)]">
                      FH
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                      Co-Founder
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-1">
                    {farhana.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[var(--emerald)] mb-3">
                    {farhana.role}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    Oversees financial operations, milestone governance, human resources, and business administration. Ensures every engagement meets strict legal compliance and milestone delivery schedules.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-muted)]">
                  BBA · Operations Management
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Engineering Disciplines Directory (Intentional Placeholders) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Applied AI & Neural Systems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-xs uppercase text-[#A78BFA] tracking-widest font-bold">
                AI &amp; Neural Systems
              </span>
              <div className="h-[1px] flex-1 bg-white/[0.08]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yousaf && (
                <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[var(--gold)]/40 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    {yousaf.image ? (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-[var(--gold)]/40 shadow-md bg-[#111622] shrink-0">
                        <img
                          src={yousaf.image}
                          alt={`${yousaf.name}, ${yousaf.role} at Axorks`}
                          className="w-full h-full object-cover object-[26%_40%]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center font-mono-code text-xs font-bold text-[var(--gold)]">
                        Y
                      </div>
                    )}
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase bg-[var(--gold)]/15 text-[#916613] dark:text-[var(--gold)] border border-[var(--gold)]/30">
                      Deep Learning / AI
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">{yousaf.name}</h4>
                  <div className="text-xs font-mono-code text-[#B48310] dark:text-[var(--gold)] mb-3 font-semibold">{yousaf.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    {yousaf.description}
                  </p>
                </div>
              )}

              {alina && (
                <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[#F43F5E]/40 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center font-mono-code text-xs font-bold text-[#F43F5E]">
                      AL
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase bg-[#F43F5E]/15 text-[#F43F5E] border border-[#F43F5E]/30">
                      Applied AI
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">{alina.name}</h4>
                  <div className="text-xs font-mono-code text-[#F43F5E] mb-3 font-semibold">{alina.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    Specializes in autonomous multi-agent pipelines, vector search databases, semantic document intelligence, and enterprise API workflow automation.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Web, Mobile & Decentralized Systems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-xs uppercase text-[#0369A1] dark:text-[#38BDF8] tracking-widest font-bold">
                Web &amp; Mobile Engineering
              </span>
              <div className="h-[1px] flex-1 bg-[var(--glass-border)]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shayan && (
                <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[#0369A1]/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center font-mono-code text-xs font-bold text-[#0369A1] mb-4">
                    SH
                  </div>
                  <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">{shayan.name}</h4>
                  <div className="text-xs font-mono-code text-[#0369A1] mb-3 font-semibold">{shayan.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    Full-stack web developer building high-concurrency portals and interactive interfaces with modern React, TypeScript, Next.js, and Node.js.
                  </p>
                </div>
              )}

              {faisal && (
                <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[var(--gold)]/40 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    {faisal.image ? (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-[var(--gold)]/40 shadow-md shrink-0 bg-[#111622]">
                        <img
                          src={faisal.image}
                          alt={`${faisal.name}, ${faisal.role}`}
                          className="w-full h-full object-cover object-[center_20%]"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center font-mono-code text-xs font-bold text-[var(--gold)]">
                        FQ
                      </div>
                    )}
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase bg-[var(--gold)]/15 text-[#916613] dark:text-[var(--gold)] border border-[var(--gold)]/30">
                      Full-Stack
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">{faisal.name}</h4>
                  <div className="text-xs font-mono-code text-[#B48310] dark:text-[var(--gold)] mb-3 font-semibold">{faisal.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    Builds reliable, scalable web applications and digital products with PHP, Laravel, modern React, WordPress/WooCommerce, backend APIs, and cross-platform mobile delivery.
                  </p>
                </div>
              )}

              {aliHaider && (
                <div className="p-6 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[var(--emerald)]/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center font-mono-code text-xs font-bold text-[var(--emerald)] mb-4">
                    AH
                  </div>
                  <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">{aliHaider.name}</h4>
                  <div className="text-xs font-mono-code text-[var(--emerald)] mb-3 font-semibold">{aliHaider.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    Web3 and blockchain developer with extensive focus on EVM smart contract architecture, decentralized protocols, and custody integrations.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Client Growth & Partnerships */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold">
                Partnerships &amp; Client Success
              </span>
              <div className="h-[1px] flex-1 bg-[var(--glass-border)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {furqan && (
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[var(--gold)]/40 hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[var(--gold)]/40 shadow-md shrink-0 bg-[#111622]">
                    <img
                      src={furqan.image || '/Images/FURQAN Business Development Officer.jpeg'}
                      alt={`${furqan.name}, ${furqan.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-1">{furqan.name}</h4>
                    <div className="text-xs font-mono-code text-[#B48310] dark:text-[var(--gold)] font-semibold mb-2">{furqan.role}</div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                      {furqan.description}
                    </p>
                  </div>
                </div>
              )}

              {farwa && (
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[var(--glass-border)] shadow-sm hover:border-[#F43F5E]/40 hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#F43F5E]/40 shadow-md shrink-0 bg-[#111622]">
                    <img
                      src={farwa.image || '/Images/FARWA Marketing & Outreach.jpeg'}
                      alt={`${farwa.name}, ${farwa.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-1">{farwa.name}</h4>
                    <div className="text-xs font-mono-code text-[#F43F5E] font-semibold mb-2">{farwa.role}</div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                      {farwa.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center bg-[#0A0F1D] rounded-3xl p-8 sm:p-12 border border-[var(--gold)]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white mb-3 relative z-10">
            Collaborate Directly with Senior Engineers.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6 relative z-10">
            Get an itemized Technical Specification Document and fixed-price proposal for your custom system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Discovery%20Call%20Request%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-lg"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/50 border border-[#10B981]/50 text-white text-xs font-headline font-semibold uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
