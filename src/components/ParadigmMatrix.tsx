import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Cpu, Code, Sparkles, Server, Zap, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router/Router';

export const ParadigmMatrix: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[#08080A] py-20 lg:py-28 border-b border-[rgba(146,157,167,0.14)] relative overflow-hidden" id="paradigm">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E85A3C]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1B3836]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Verified Client Deployments Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <div className="text-center mb-8">
            <span className="font-mono-code text-[11px] text-[#E8B923] font-bold tracking-[0.2em] uppercase">
              Proven Production Deployments · Commercial Track Record
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
                className="bg-[#121214] rounded-2xl p-4 sm:p-5 border border-[rgba(146,157,167,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[rgba(146,157,167,0.32)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="h-10 sm:h-12 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} - ${client.role}`}
                    className="max-h-8 sm:max-h-9 max-w-[120px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="font-headline text-xs font-bold text-[#F4F4F5]">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono-code text-[#5EEAD4] font-bold mt-0.5">
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
              <span className="font-mono-code text-[11px] font-bold tracking-widest uppercase text-[#E85A3C] mb-3 block">
                Engineering Specialization
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#F4F4F5] tracking-tight mb-4 leading-tight">
                Architectural depth over corporate bureaucracy.
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Axorks is a specialized software engineering studio. We architect production-grade web platforms and high-intent discovery engines across three core strategic layers:
              </p>

              <dl className="space-y-4">
                {[
                  { title: 'Custom Web Platforms & SaaS Architecture', icon: <Code className="w-5 h-5 text-[#E85A3C]" />, stack: 'Next.js 15, React 19, Node.js, PostgreSQL, Redis, AWS Cloud' },
                  { title: 'Intelligent Visibility (SEO · AEO · GEO)', icon: <Sparkles className="w-5 h-5 text-[#E8B923]" />, stack: 'SearchGPT, Perplexity Citations, Schema Graphs, Google Top 3' },
                  { title: 'Enterprise Industry Systems (LMS, Banking, HMS)', icon: <Server className="w-5 h-5 text-[#5EEAD4]" />, stack: 'Multi-Tenant SIS, Core Banking Rails, EHR & Hospital Systems' },
                  { title: 'Intelligent Automations & Cloud DevOps', icon: <Cpu className="w-5 h-5 text-[#A1A1AA]" />, stack: 'Python, Multi-Agent Orchestration, Docker, Zero-Downtime CI/CD' }
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 bg-[#121214] rounded-2xl border border-[rgba(146,157,167,0.14)] shadow-md hover:border-[rgba(146,157,167,0.3)] transition-all">
                    <div className="p-2.5 bg-[#08080A] rounded-xl shrink-0 border border-[rgba(146,157,167,0.12)]">
                      {cap.icon}
                    </div>
                    <div>
                      <dt className="font-headline text-sm font-bold text-[#F4F4F5] mb-0.5">{cap.title}</dt>
                      <dd className="font-mono-code text-[11px] text-[#71717A] font-medium">{cap.stack}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              
              <p className="mt-5 text-[11px] font-mono-code text-[#71717A] italic">
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
              className="bg-[#121214] border border-[rgba(146,157,167,0.14)] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[#E8B923]">
                  Commercial Decision Framework
                </span>
                <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded bg-[#1B3836] text-[#5EEAD4] font-bold uppercase border border-[#2A5452]">
                  Risk-Free Delivery
                </span>
              </div>

              <h3 className="font-display-hero text-2xl font-bold text-[#F4F4F5] mb-6">
                Axorks Studio Model vs. Legacy Enterprise IT
              </h3>
              
              {/* Semantic Table Structure for AEO Extraction */}
              <div className="overflow-x-auto pb-2">
                <table className="w-full text-left border-collapse min-w-[500px]" data-aeo-citation="studio-comparison">
                  <thead>
                    <tr className="border-b border-[rgba(146,157,167,0.14)]">
                      <th className="pb-3.5 font-headline text-xs font-bold text-[#71717A] uppercase tracking-wider w-1/3">Commercial Vector</th>
                      <th className="pb-3.5 font-headline text-xs font-bold text-[#E8B923] uppercase tracking-wider w-1/3">Axorks Studio Model</th>
                      <th className="pb-3.5 font-headline text-xs font-bold text-[#71717A] uppercase tracking-wider w-1/3">Legacy IT Giants</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(146,157,167,0.1)] text-xs sm:text-sm">
                    <tr className="hover:bg-[#161618]/50 transition-colors">
                      <td className="py-4 font-mono-code text-xs font-bold text-[#F4F4F5]">Pricing Structure</td>
                      <td className="py-4 text-[#F4F4F5] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0" /> Fixed Milestones from $199 - $499</td>
                      <td className="py-4 text-[#71717A]">$100k+ retainers with open-ended hours</td>
                    </tr>
                    <tr className="hover:bg-[#161618]/50 transition-colors">
                      <td className="py-4 font-mono-code text-xs font-bold text-[#F4F4F5]">Engineering Access</td>
                      <td className="py-4 text-[#F4F4F5] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0" /> Direct Senior Software Architects</td>
                      <td className="py-4 text-[#71717A]">Sales reps, account managers &amp; junior delegates</td>
                    </tr>
                    <tr className="hover:bg-[#161618]/50 transition-colors">
                      <td className="py-4 font-mono-code text-xs font-bold text-[#F4F4F5]">Payment Security</td>
                      <td className="py-4 text-[#F4F4F5] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0" /> Released after live staging verification</td>
                      <td className="py-4 text-[#71717A]">Billed upfront or blind monthly invoicing</td>
                    </tr>
                    <tr className="hover:bg-[#161618]/50 transition-colors">
                      <td className="py-4 font-mono-code text-xs font-bold text-[#F4F4F5]">IP Ownership</td>
                      <td className="py-4 text-[#F4F4F5] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0" /> 100% Full IP &amp; Git Repository Handover</td>
                      <td className="py-4 text-[#71717A]">Held hostage or proprietary vendor lock-in</td>
                    </tr>
                    <tr className="hover:bg-[#161618]/50 transition-colors">
                      <td className="py-4 font-mono-code text-xs font-bold text-[#F4F4F5]">Delivery Velocity</td>
                      <td className="py-4 text-[#F4F4F5] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0" /> First working staging in 5-10 days</td>
                      <td className="py-4 text-[#71717A]">Months of discovery &amp; committee meetings</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
