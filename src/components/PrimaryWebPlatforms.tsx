import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Layers, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Lock,
  Globe,
  Sparkles,
  Cpu
} from 'lucide-react';
import { useRouter } from '../router/Router';

export const PrimaryWebPlatforms: React.FC = () => {
  const { navigate } = useRouter();

  const platformTiers = [
    {
      title: 'Professional Web Presence',
      price: '$199',
      period: 'one-time',
      badge: 'Launch Architecture',
      badgeColor: 'text-[#E85A3C] bg-[#E85A3C]/10 border-[#E85A3C]/30',
      icon: <Globe className="w-5 h-5 text-[#E85A3C]" />,
      description: 'High-conversion, lightning-fast digital storefronts and marketing platforms engineered with surgical typography and zero template bloat.',
      specs: [
        'Next.js 15 & React 19 static generation',
        'Sub-1.2s Core Web Vitals speed target',
        '100% intellectual property & Git handover',
        'Turnaround delivered within 3-5 business days'
      ],
      metric: '<1.2s',
      metricLabel: 'LCP Load Time',
      accentBorder: 'hover:border-[#E85A3C]/50',
      topLine: 'from-[#E85A3C]/40 via-[#E85A3C]/10 to-transparent'
    },
    {
      title: 'Custom Web Platform & Strategic MVP',
      price: '$499',
      period: 'fixed milestone',
      badge: 'Core Production Platform',
      badgeColor: 'text-[#E8B923] bg-[#E8B923]/10 border-[#E8B923]/30',
      icon: <Layers className="w-5 h-5 text-[#E8B923]" />,
      description: 'Custom multi-user web applications, client portals, and functional MVPs built from clean database foundations without brittle plugins.',
      specs: [
        'Distributed PostgreSQL database with connection pooling',
        'Secure multi-tenant authentication & role scopes',
        'Custom REST & GraphQL endpoints with rate limiting',
        'Automated CI/CD with staging preview environments'
      ],
      metric: '100% IP',
      metricLabel: 'Full Repository Transfer',
      accentBorder: 'hover:border-[#E8B923]/50',
      topLine: 'from-[#E8B923]/40 via-[#E8B923]/10 to-transparent'
    },
    {
      title: 'Flagship Digital Product System',
      price: 'From $1,499',
      period: 'phased delivery',
      badge: 'High-Concurrency SaaS',
      badgeColor: 'text-[#5EEAD4] bg-[#1B3836] border-[#2A5452]',
      icon: <Database className="w-5 h-5 text-[#5EEAD4]" />,
      description: 'Institutional-grade SaaS platforms and operational cockpits built to scale to hundreds of thousands of active users with sub-100ms response targets.',
      specs: [
        'Microservices or modular monolithic topology',
        'Redis caching layers & real-time WebSocket telemetry',
        'Audit-logged event streaming & immutable transactions',
        'Complete AWS cloud orchestration & zero-downtime deploys'
      ],
      metric: '99.99%',
      metricLabel: 'Target SLA Uptime',
      accentBorder: 'hover:border-[#5EEAD4]/50',
      topLine: 'from-[#5EEAD4]/40 via-[#5EEAD4]/10 to-transparent'
    },
    {
      title: 'Enterprise ERPs & Regulated Systems',
      price: 'From $1,999',
      period: 'institutional scope',
      badge: 'Regulated Enterprise Rails',
      badgeColor: 'text-[#F4F4F5] bg-[#161618] border-[rgba(146,157,167,0.3)]',
      icon: <Server className="w-5 h-5 text-[#E8B923]" />,
      description: 'Mission-critical enterprise software systems: College/School LMS, Hospital HMS/EHR, and Core Banking ledgers with strict compliance controls.',
      specs: [
        'Multi-Campus Student Information Systems (SIS)',
        'HIPAA & WHO compliant Electronic Health Records (EHR)',
        'Double-entry transaction ledgers with balance verification',
        'Hardened ISO 27001 & SOC 2 architectural controls'
      ],
      metric: '<100ms',
      metricLabel: 'API Response Target',
      accentBorder: 'hover:border-[#E8B923]/60',
      topLine: 'from-[#E8B923]/50 via-[#E85A3C]/20 to-transparent'
    }
  ];

  return (
    <section className="w-full bg-[#08080A] py-20 lg:py-28 relative overflow-hidden border-b border-[rgba(146,157,167,0.14)]" id="primary-platforms">
      {/* Background ambient depth lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#E85A3C]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#E8B923]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Dominant Verbal Weight */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-[rgba(146,157,167,0.14)] text-xs uppercase text-[#E85A3C] tracking-widest font-bold font-mono-code mb-4 shadow-sm"
            >
              <Code className="w-3.5 h-3.5 text-[#E85A3C]" />
              <span>Primary Strategic Offer · Architectural Benchmark</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display-hero text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F4F5] tracking-tight leading-[1.05]"
            >
              Custom Web Platforms &amp;<br />
              <span className="bg-gradient-to-r from-[#F4F4F5] via-[#A1A1AA] to-[#71717A] bg-clip-text text-transparent">
                Mission-Critical Business Systems.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl"
            >
              We do not assemble fragile drag-and-drop templates or offshore work to junior pools. Axorks architects custom, high-concurrency web platforms and automated business operational systems with fixed milestone deliverables and 100% intellectual property handover.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Custom%20Web%20Platform%20Inquiry%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(232,185,35,0.3)] hover:brightness-105 transition-all"
            >
              <span>Scope Your Custom Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => navigate('/services')}
              className="px-5 py-3.5 rounded-xl bg-[#121214] hover:bg-[#161618] text-[#F4F4F5] border border-[rgba(146,157,167,0.14)] font-headline font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              View Full Architecture Spec
            </button>
          </motion.div>
        </div>

        {/* 4 Locked Commercial Tier Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {platformTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#121214] rounded-3xl p-6 sm:p-7 border border-[rgba(146,157,167,0.14)] shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-1.5 ${tier.accentBorder}`}
            >
              {/* Highlight line at top */}
              <div className={`absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r ${tier.topLine}`} />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[#08080A] border border-[rgba(146,157,167,0.14)] shadow-inner">
                    {tier.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider border ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-[#F4F4F5] mb-2 leading-snug">
                  {tier.title}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#F4F4F5]">
                    {tier.price}
                  </span>
                  <span className="text-xs text-[#71717A] font-mono-code">
                    {tier.period}
                  </span>
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {tier.description}
                </p>

                {/* Specifications Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[rgba(146,157,167,0.1)] mb-6">
                  <span className="text-[10px] font-mono-code uppercase text-[#71717A] font-bold tracking-widest block">
                    Architectural Guarantees:
                  </span>
                  {tier.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#A1A1AA] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5EEAD4] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-4 border-t border-[rgba(146,157,167,0.1)] flex items-center justify-between">
                <div>
                  <span className="block font-display-hero text-xl font-extrabold text-[#F4F4F5]">
                    {tier.metric}
                  </span>
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#71717A]">
                    {tier.metricLabel}
                  </span>
                </div>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=${encodeURIComponent(`Platform Architecture Inquiry (${tier.title} - ${tier.price}) - Axorks`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-headline font-bold text-[#E8B923] hover:text-[#F4F4F5] uppercase tracking-wider transition-colors"
                >
                  <span>Scope Tier</span>
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
          className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-[rgba(146,157,167,0.14)] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#E8B923]/10 border border-[#E8B923]/20 text-[#E8B923] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline text-base sm:text-lg font-bold text-[#F4F4F5]">
                100% Intellectual Property &amp; Git Code Transfer
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 max-w-xl">
                Every line of TypeScript, Go, Python, and SQL is delivered directly to your organization's private GitHub or GitLab repository upon each milestone approval. Zero licensing fees, zero proprietary lock-in.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="block font-mono-code text-xs text-[#5EEAD4] font-bold">24-Hour SLA</span>
              <span className="block font-mono-code text-[11px] text-[#71717A]">Itemized Scope Guarantee</span>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Technical%20Scope%20Consultation%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#161618] hover:bg-[#1E1E22] text-[#F4F4F5] border border-[rgba(146,157,167,0.18)] text-xs font-headline font-bold uppercase tracking-wider transition-colors"
            >
              Direct Architect Access
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
