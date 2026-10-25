import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Database, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Lock,
  Globe,
  Sparkles,
  BarChart3,
  Terminal
} from 'lucide-react';
import { useRouter } from '../router/Router';

export const PrimaryWebPlatforms: React.FC = () => {
  const { navigate } = useRouter();

  const platformCapabilities = [
    {
      title: 'High-Concurrency SaaS Platforms',
      badge: 'Core Architecture',
      badgeColor: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
      icon: <Layers className="w-6 h-6 text-[#38BDF8]" />,
      description: 'Distributed web platforms built to handle millions of monthly requests with sub-100ms response times. Zero bloat, modular microservices, and auto-scaling cloud foundations.',
      specs: [
        'Next.js 15 App Router & React 19 Server Components',
        'Distributed PostgreSQL with connection pooling & Redis clusters',
        'Multi-tenant database isolation with cryptographic tenancy keys',
        'Automated CI/CD pipelines on AWS with zero-downtime blue/green deploys'
      ],
      metric: '99.99%',
      metricLabel: 'Target SLA Uptime',
      accentColor: 'from-[#38BDF8]/20 via-[#38BDF8]/5 to-transparent',
      borderColor: 'hover:border-[#38BDF8]/50'
    },
    {
      title: 'Mission-Critical Business Systems & Portals',
      badge: 'Operational Backbone',
      badgeColor: 'text-[var(--gold)] bg-[var(--gold)]/10 border-[var(--gold)]/30',
      icon: <Database className="w-6 h-6 text-[var(--gold)]" />,
      description: 'Bespoke administrative cockpits, complex workflow automation engines, and secure client-facing portals engineered to replace fragmented legacy spreadsheets.',
      specs: [
        'Granular Role-Based Access Control (RBAC) with fine-grained scopes',
        'Real-time WebSocket telemetry & executive analytics dashboards',
        'Audit-logged event streaming with immutable state history',
        'Custom webhook dispatchers & third-party enterprise ERP integrations'
      ],
      metric: '100% IP',
      metricLabel: 'Full Code Ownership',
      accentColor: 'from-[var(--gold)]/20 via-[var(--gold)]/5 to-transparent',
      borderColor: 'hover:border-[var(--gold)]/50'
    },
    {
      title: 'Enterprise Industry Engines & Cloud Rails',
      badge: 'Domain Specialization',
      badgeColor: 'text-[var(--emerald)] bg-[var(--emerald)]/10 border-[var(--emerald)]/30',
      icon: <Server className="w-6 h-6 text-[var(--emerald)]" />,
      description: 'Institutional-grade system architectures specifically designed for regulated sectors: College/School LMS, Hospital Information Systems (HMS), and Core Banking transaction rails.',
      specs: [
        'Double-entry transaction ledgers with cryptographic balance verification',
        'HIPAA, GDPR & WHO compliant Electronic Health Records (EHR)',
        'Multi-campus Student Information Systems (SIS) & automated fee rails',
        'Hardened API endpoints with rate-limiting, DDoS mitigation & WAF'
      ],
      metric: '<100ms',
      metricLabel: 'API Response Target',
      accentColor: 'from-[var(--emerald)]/20 via-[var(--emerald)]/5 to-transparent',
      borderColor: 'hover:border-[var(--emerald)]/50'
    }
  ];

  return (
    <section className="w-full bg-[#050814] py-24 lg:py-32 relative overflow-hidden border-b border-white/[0.08]" id="primary-platforms">
      {/* Ambient background depth lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Dominant Verbal Weight */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs uppercase text-[#38BDF8] tracking-widest font-bold font-mono-code mb-4 shadow-sm"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Primary Strategic Offer · Architectural Benchmark</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display-hero text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
            >
              Custom Web Platforms &amp;<br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Mission-Critical Business Systems.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              We do not assemble fragile drag-and-drop templates. Axorks engineers custom, high-concurrency web platforms and automated business operational backbones from clean architectural foundations — with fixed milestone deliverables and full intellectual property handover.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Custom%20Web%20Platform%20Inquiry%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#EAB308] to-[#D97706] text-[#0A0F1D] font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,199,97,0.3)] hover:brightness-105 transition-all"
            >
              <span>Scope Your Custom Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => navigate('/services')}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-headline font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              View Full Architecture Spec
            </button>
          </motion.div>
        </div>

        {/* 3 Dominant Architectural Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {platformCapabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#0D1424] rounded-3xl p-7 sm:p-8 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-1.5 ${cap.borderColor}`}
            >
              {/* Subtle gradient highlight line at top */}
              <div className={`absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r ${cap.accentColor}`} />

              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#050814] border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider border ${cap.badgeColor}`}>
                    {cap.badge}
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {cap.description}
                </p>

                {/* Technical Specifications checklist */}
                <div className="space-y-3 pt-5 border-t border-white/[0.08] mb-8">
                  <span className="text-[10px] font-mono-code uppercase text-slate-400 font-bold tracking-widest block">
                    Architectural Guarantees:
                  </span>
                  {cap.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[var(--emerald)] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & CTA Strip */}
              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="block font-display-hero text-2xl font-extrabold text-white">
                    {cap.metric}
                  </span>
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400">
                    {cap.metricLabel}
                  </span>
                </div>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=${encodeURIComponent(`Platform Architecture Inquiry (${cap.title}) - Axorks`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-headline font-bold text-[var(--gold)] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Request Stack Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Proof Bar: Zero Vendor Lock-in & Production Reliability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#0A0F1F] border border-white/[0.08] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline text-base sm:text-lg font-bold text-white">
                100% Intellectual Property &amp; Source Code Handover
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Every line of TypeScript, Python, and SQL is delivered directly to your organization’s private GitHub or GitLab repository upon each milestone sign-off. Zero licensing fees, zero proprietary runtimes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="block font-mono-code text-xs text-[var(--emerald)] font-bold">24-Hour SLA</span>
              <span className="block font-mono-code text-[11px] text-slate-400">Itemized Proposal Guarantee</span>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Technical%20Scope%20Consultation%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-headline font-bold uppercase tracking-wider transition-colors"
            >
              Direct Architect Access
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
