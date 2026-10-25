import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Cpu, Code, Sparkles } from 'lucide-react';
import { useRouter } from '../router/Router';

export const ParadigmMatrix: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-y border-[#E2DED4] relative overflow-hidden surface-luxury-light" id="paradigm">
      {/* Soft warm champagne ambient depth */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C761]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Verified Logos Strip (Immediate Enterprise Trust) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          <div className="text-center mb-8">
            <span className="font-mono-code text-[11px] text-[#B45309] font-bold tracking-[0.2em] uppercase">
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
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2DED4] shadow-[0_10px_30px_-5px_rgba(10,15,29,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(10,15,29,0.12)] hover:border-[#D97706] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="h-10 sm:h-12 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} - ${client.role}`}
                    className="max-h-8 sm:max-h-9 max-w-[120px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="font-headline text-xs font-bold text-[#0A0F1D]">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono-code text-[#059669] font-bold mt-0.5">
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
              <span className="font-mono-code text-[11px] font-bold tracking-widest uppercase text-[#059669] mb-3 block">
                Engineering Specialization
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#0A0F1D] tracking-tight mb-4 leading-tight">
                Architectural depth over generalist promises.
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed mb-8">
                Axorks is a specialized software engineering studio. We architect production-grade web platforms and high-intent discovery engines across three core strategic layers:
              </p>

              <dl className="space-y-4">
                {[
                  { title: 'Custom Web Platforms & SaaS Architecture', icon: <Code className="w-5 h-5 text-[#0284C7]" />, stack: 'Next.js, React, Node.js, PostgreSQL, Redis, AWS Cloud' },
                  { title: 'Intelligent Visibility (SEO • AEO • GEO)', icon: <Sparkles className="w-5 h-5 text-[#D97706]" />, stack: 'SearchGPT, Perplexity Citations, Schema Graphs, Google Top 3' },
                  { title: 'Enterprise Industry Systems (LMS, Banking, HMS)', icon: <Target className="w-5 h-5 text-[#059669]" />, stack: 'Multi-Tenant SIS, Core Banking Rails, EHR & Hospital Systems' },
                  { title: 'Intelligent Automations & Cloud DevOps', icon: <Cpu className="w-5 h-5 text-[#7C3AED]" />, stack: 'Python, Multi-Agent Orchestration, Docker, Zero-Downtime CI/CD' }
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#E2DED4] shadow-[0_4px_20px_-4px_rgba(10,15,29,0.04)] hover:shadow-md hover:border-[#F5C761] transition-all">
                    <div className="p-2.5 bg-[#FAF9F6] rounded-xl shrink-0 border border-[#E2DED4]">
                      {cap.icon}
                    </div>
                    <div>
                      <dt className="font-headline text-sm font-bold text-[#0A0F1D] mb-0.5">{cap.title}</dt>
                      <dd className="font-mono-code text-[11px] text-[#64748B] font-medium">{cap.stack}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              
              <p className="mt-4 text-[11px] font-mono-code text-[#64748B] italic">
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
              className="bg-gradient-to-b from-[#EAE6DF] to-[#E2DED4] border border-[#D5D0C5] rounded-3xl p-1 shadow-[0_20px_50px_rgba(10,15,29,0.08)]"
            >
              <div className="bg-white rounded-[22px] p-6 sm:p-8 border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[#B45309]">
                    Decision Framework
                  </span>
                  <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded bg-[#ECFDF5] text-[#065F46] font-bold uppercase border border-[#A7F3D0]">
                    Risk-Free Delivery
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl font-bold text-[#0A0F1D] mb-6">
                  Axorks Studio Model vs. Traditional Agencies
                </h3>
                
                {/* Semantic Table Structure for AEO Extraction */}
                <div className="overflow-x-auto pb-2">
                  <table className="w-full text-left border-collapse min-w-[500px]" data-aeo-citation="studio-comparison">
                    <thead>
                      <tr className="border-b-2 border-[#E2DED4]">
                        <th className="pb-3.5 font-headline text-xs font-bold text-[#64748B] uppercase tracking-wider w-1/3">Commercial Vector</th>
                        <th className="pb-3.5 font-headline text-xs font-bold text-[#0A0F1D] uppercase tracking-wider w-1/3">Axorks Studio Model</th>
                        <th className="pb-3.5 font-headline text-xs font-bold text-[#94A3B8] uppercase tracking-wider w-1/3">Traditional Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2DED4] text-xs sm:text-sm">
                      <tr className="hover:bg-[#FAF9F6] transition-colors">
                        <td className="py-4 font-mono-code text-xs font-bold text-[#0A0F1D]">Pricing Structure</td>
                        <td className="py-4 text-[#0A0F1D] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" /> Fixed-Price Milestones from $1,000</td>
                        <td className="py-4 text-[#64748B]">Open-ended hourly retainers</td>
                      </tr>
                      <tr className="hover:bg-[#FAF9F6] transition-colors">
                        <td className="py-4 font-mono-code text-xs font-bold text-[#0A0F1D]">Payment Security</td>
                        <td className="py-4 text-[#0A0F1D] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" /> Released after staging verification</td>
                        <td className="py-4 text-[#64748B]">Paid upfront / billed blindly</td>
                      </tr>
                      <tr className="hover:bg-[#FAF9F6] transition-colors">
                        <td className="py-4 font-mono-code text-xs font-bold text-[#0A0F1D]">IP Ownership</td>
                        <td className="py-4 text-[#0A0F1D] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" /> 100% Full IP &amp; Git Repository Handover</td>
                        <td className="py-4 text-[#64748B]">Held hostage / license lock-in</td>
                      </tr>
                      <tr className="hover:bg-[#FAF9F6] transition-colors">
                        <td className="py-4 font-mono-code text-xs font-bold text-[#0A0F1D]">Engineering Access</td>
                        <td className="py-4 text-[#0A0F1D] font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" /> Direct Senior Software Architects</td>
                        <td className="py-4 text-[#64748B]">Account managers &amp; junior handoffs</td>
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
