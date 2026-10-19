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
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[var(--glass-border)] shadow-sm hover:shadow-md hover:border-[var(--gold)]/40 transition-all flex flex-col items-center text-center group"
              >
                <div className="h-10 sm:h-12 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} - ${client.role}`}
                    className="max-h-8 sm:max-h-9 max-w-[120px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="font-headline text-xs font-bold text-[var(--text-primary)]">
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
                Axorks is a specialized software engineering studio. We architect production-grade software and AI systems across four foundational pillars:
              </p>

              <dl className="space-y-4">
                {[
                  { title: 'AI Automation & Multi-Agents', icon: <Cpu className="w-5 h-5 text-[var(--emerald)]" />, stack: 'Python, LangChain, OpenAI, PyTorch, RAG Pipelines' },
                  { title: 'Custom Web Applications', icon: <Code className="w-5 h-5 text-[#0284C7]" />, stack: 'Next.js, React, Node.js, PostgreSQL, AWS Cloud' },
                  { title: 'Flutter Mobile Platforms', icon: <Smartphone className="w-5 h-5 text-[#7C3AED]" />, stack: 'Flutter, Dart, Firebase, REST/GraphQL, Offline Sync' },
                  { title: 'Web3 & Audited Contracts', icon: <Blocks className="w-5 h-5 text-[var(--gold)]" />, stack: 'Solidity, Ethereum, Hardhat, Web3.js, EVM Rails' }
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-3.5 bg-white rounded-2xl border border-[var(--glass-border)] hover:border-[var(--gold)]/30 transition-colors shadow-sm">
                    <div className="p-2.5 bg-[var(--bg-secondary)] rounded-xl shrink-0">
                      {cap.icon}
                    </div>
                    <div>
                      <dt className="font-headline text-sm font-bold text-[var(--text-primary)] mb-0.5">{cap.title}</dt>
                      <dd className="font-mono-code text-[11px] text-[var(--text-muted)] font-medium">{cap.stack}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Right: The Studio Decision Matrix (Citable Table Equivalent for AEO) */}
          <div className="xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="bg-white border border-[var(--glass-border)] rounded-3xl p-1 spatial-card shadow-[0_12px_40px_rgba(10,15,29,0.06)]"
            >
              <div className="bg-[var(--bg-primary)] rounded-[22px] p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)]">
                    Decision Framework
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[var(--emerald)]/10 text-[var(--emerald)] font-bold uppercase">
                    Risk-Free Delivery
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Axorks Studio Model vs. Traditional Agencies
                </h3>
                
                {/* Semantic Table Structure for AEO Extraction */}
                <div className="overflow-x-auto pb-2">
                  <table className="w-full text-left border-collapse min-w-[500px]" data-aeo-citation="studio-comparison">
                    <thead>
                      <tr className="border-b-2 border-[var(--text-primary)]/10">
                        <th className="pb-3.5 font-headline text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider w-1/3">Commercial Vector</th>
                        <th className="pb-3.5 font-headline text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider w-1/3">Axorks Studio Model</th>
                        <th className="pb-3.5 font-headline text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider w-1/3">Traditional Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--glass-border)] text-xs sm:text-sm">
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Pricing Structure</td>
                        <td className="py-4 text-[var(--text-primary)] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> Fixed-Price Milestones from $1,000</td>
                        <td className="py-4 text-[var(--text-muted)]">Open-ended hourly retainers</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Payment Security</td>
                        <td className="py-4 text-[var(--text-primary)] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> Released after staging verification</td>
                        <td className="py-4 text-[var(--text-muted)]">Paid upfront / billed blindly</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-[var(--text-secondary)]">IP Ownership</td>
                        <td className="py-4 text-[var(--text-primary)] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> 100% Full IP &amp; Git Repository Handover</td>
                        <td className="py-4 text-[var(--text-muted)]">Held hostage / license lock-in</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Engineering Access</td>
                        <td className="py-4 text-[var(--text-primary)] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0" /> Direct Senior Software Architects</td>
                        <td className="py-4 text-[var(--text-muted)]">Account managers &amp; junior handoffs</td>
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
