import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Target, Clock, Cpu, Code, Blocks, Smartphone, Sparkles } from 'lucide-react';
import { useRouter } from '../router/Router';

export const ParadigmMatrix: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[var(--bg-secondary)] py-20 lg:py-28 border-b border-[var(--glass-border)] relative overflow-hidden" id="paradigm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verified Logos Strip (Immediate Enterprise Trust) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          <div className="text-center mb-8">
            <span className="font-mono-code text-[11px] text-[var(--gold)] font-bold tracking-[0.2em] uppercase">
              Proven Production Systems &amp; Live Client Deployments
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'AgroTrace', role: 'IoT AgriTech & Logistics', logo: '/Logos/agrotrace_logo.png', metric: '42% Spoilage Cut' },
              { name: 'IPMI-OS 2.0', role: 'AI FinTech & Order Flow', logo: '/Logos/ipmios_logo.png', metric: '<1s Execution' },
              { name: 'MediVerse', role: 'Healthcare Telemedicine', logo: '/Logos/mediverse_logo.png', metric: 'WHO & HIPAA Compliant' },
              { name: 'FUME Fragrances', role: 'Luxury E-Commerce', logo: '/Logos/fume_logo.jpg', metric: 'Bespoke Experience' },
            ].map((client, idx) => (
              <div
                key={idx}
                className="bg-[#0D1424]/90 rounded-2xl p-4 sm:p-5 border border-white/[0.08] shadow-lg hover:shadow-2xl hover:border-[var(--gold)]/50 transition-all flex flex-col items-center text-center group backdrop-blur-xl"
              >
                <div className="h-10 sm:h-12 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} - ${client.role}`}
                    className="max-h-8 sm:max-h-9 max-w-[120px] object-contain brightness-90 contrast-125 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="font-headline text-xs font-bold text-white">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono-code text-[var(--emerald)] font-semibold mt-0.5">
                  {client.metric}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Citable Engineering Matrix (AEO & LLM Target) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Engineering Stack */}
          <div className="xl:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono-code text-[11px] font-bold tracking-widest uppercase text-[var(--emerald)] mb-3 block">
                Engineering Specialization
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4 leading-tight">
                Architectural depth over generalist promises.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                Axorks is a specialized software engineering studio. We architect production-grade web platforms and high-intent discovery engines across three core strategic layers:
              </p>

              <dl className="space-y-4">
                {[
                  { title: 'Custom Web Platforms & SaaS Architecture', icon: <Code className="w-5 h-5 text-[#38BDF8]" />, stack: 'Next.js, React, Node.js, PostgreSQL, Redis, AWS Cloud' },
                  { title: 'Intelligent Visibility (SEO • AEO • GEO)', icon: <Sparkles className="w-5 h-5 text-[var(--gold)]" />, stack: 'SearchGPT, Perplexity Citations, Schema Graphs, Google Top 3' },
                  { title: 'Enterprise Industry Systems (LMS, Banking, HMS)', icon: <Target className="w-5 h-5 text-[var(--emerald)]" />, stack: 'Multi-Tenant SIS, Core Banking Rails, EHR & Hospital Systems' },
                  { title: 'Intelligent Automations & Cloud DevOps', icon: <Cpu className="w-5 h-5 text-[#8B5CF6]" />, stack: 'Python, Multi-Agent Orchestration, Docker, Zero-Downtime CI/CD' }
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 bg-[#0D1424]/90 rounded-2xl border border-white/[0.08] hover:border-[var(--gold)]/40 transition-colors shadow-lg backdrop-blur-xl">
                    <div className="p-2.5 bg-[#050814] rounded-xl shrink-0 border border-white/5">
                      {cap.icon}
                    </div>
                    <div>
                      <dt className="font-headline text-sm font-bold text-white mb-0.5">{cap.title}</dt>
                      <dd className="font-mono-code text-[11px] text-slate-400 font-medium">{cap.stack}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              
              <p className="mt-4 text-[11px] font-mono-code text-slate-500 italic">
                * Dedicated Flutter mobile applications and audited Web3 smart contracts engineered upon specialized client specification.
              </p>
            </motion.div>
          </div>

          {/* Right: The Studio Decision Matrix (Citable Table Equivalent for AEO) */}
          <div className="xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="bg-gradient-to-b from-white/10 via-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl p-1 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
            >
              <div className="bg-[#0A0F1F] rounded-[22px] p-6 sm:p-8 border border-white/[0.05]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)]">
                    Decision Framework
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[var(--emerald)]/10 text-[var(--emerald)] font-bold uppercase border border-[var(--emerald)]/20">
                    Risk-Free Delivery
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl font-bold text-white mb-6">
                  Axorks Studio Model vs. Traditional Agencies
                </h3>
                
                {/* Semantic Table Structure for AEO Extraction */}
                <div className="overflow-x-auto pb-2">
                  <table className="w-full text-left border-collapse min-w-[500px]" data-aeo-citation="studio-comparison">
                    <thead>
                      <tr className="border-b-2 border-white/10">
                        <th className="pb-3.5 font-headline text-xs font-bold text-slate-400 uppercase tracking-wider w-1/3">Commercial Vector</th>
                        <th className="pb-3.5 font-headline text-xs font-bold text-white uppercase tracking-wider w-1/3">Axorks Studio Model</th>
                        <th className="pb-3.5 font-headline text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">Traditional Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.07] text-xs sm:text-sm">
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-slate-300">Pricing Structure</td>
                        <td className="py-4 text-white font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> Fixed-Price Milestones from $1,000</td>
                        <td className="py-4 text-slate-400">Open-ended hourly retainers</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-slate-300">Payment Security</td>
                        <td className="py-4 text-white font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> Released after staging verification</td>
                        <td className="py-4 text-slate-400">Paid upfront / billed blindly</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-slate-300">IP Ownership</td>
                        <td className="py-4 text-white font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> 100% Full IP &amp; Git Repository Handover</td>
                        <td className="py-4 text-slate-400">Held hostage / license lock-in</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-slate-300">Engineering Access</td>
                        <td className="py-4 text-white font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> Direct Senior Software Architects</td>
                        <td className="py-4 text-slate-400">Account managers &amp; junior handoffs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
