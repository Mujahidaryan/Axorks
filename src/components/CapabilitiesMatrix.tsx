import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ArrowRight, Cpu, Code, Smartphone, Blocks, CheckCircle2, GraduationCap, Landmark, Activity, Building2 } from 'lucide-react';
import { useRouter } from '../router/Router';

export const CapabilitiesMatrix: React.FC = () => {
  const { navigate } = useRouter();

  const technicalPillars = [
    {
      id: 'web-apps',
      title: 'Custom Web Platforms & SaaS',
      icon: <Code className="w-5 h-5 text-[#38BDF8]" />,
      stack: 'Next.js 15, React 19, Node.js, PostgreSQL, Redis, AWS',
      useCase: 'High-concurrency enterprise dashboards, SaaS platforms, and secure multi-tenant portals.'
    },
    {
      id: 'ai-sys',
      title: 'Intelligent Automations & Multi-Agents',
      icon: <Cpu className="w-5 h-5 text-[var(--emerald)]" />,
      stack: 'Python, LangChain, OpenAI, PyTorch, RAG Retrieval',
      useCase: 'Eliminate manual bottlenecks and orchestrate autonomous decision pipelines with human-in-the-loop triggers.'
    },
    {
      id: 'mobile',
      title: 'Flutter Mobile Platforms',
      icon: <Smartphone className="w-5 h-5 text-[#8B5CF6]" />,
      stack: 'Flutter, Dart, Firebase, REST/GraphQL, Offline Sync',
      useCase: 'Native 60fps iOS and Android applications built from a unified high-performance codebase.'
    },
    {
      id: 'web3',
      title: 'Web3 & Audited Smart Contracts',
      icon: <Blocks className="w-5 h-5 text-[var(--gold)]" />,
      stack: 'Solidity, Ethereum, Web3.js, Hardhat, EVM Rails',
      useCase: 'Secure decentralized applications, immutable audit trails, and audited tokenomics.'
    }
  ];

  const enterpriseDomainSystems = [
    {
      id: 'lms-systems',
      title: 'School & College Learning Management Systems (LMS)',
      badge: 'Education & Academia',
      icon: <GraduationCap className="w-6 h-6 text-[var(--gold)]" />,
      tagline: 'Multi-Campus Administration & Academic Operations',
      description: 'Comprehensive institutional platforms for schools, colleges, and university networks. Student Information Systems (SIS), parent-teacher telemetry, automated attendance, gradebook analytics, interactive lecture courseware, and unified online fee collection.',
      deliverables: ['Multi-Campus SIS & Enrollment', 'Automated Gradebooks & Exams', 'Parent & Student Mobile Portals', 'Automated Fee Gateways & Invoicing'],
      stack: 'React, Node.js, PostgreSQL, Docker, Redis, Stripe, AWS'
    },
    {
      id: 'banking-systems',
      title: 'Core Banking & Financial Management Systems',
      badge: 'Banking & FinTech',
      icon: <Landmark className="w-6 h-6 text-[#0284C7]" />,
      tagline: 'High-Throughput Ledger & Financial Transaction Rails',
      description: 'Institutional-grade core banking architectures, multi-currency transaction engines, double-entry accounting ledgers, automated payment reconciliations, and regulatory compliance pipelines (KYC/AML) with sub-second execution.',
      deliverables: ['Real-Time Transaction Routing Engine', 'Double-Entry Ledger Architecture', 'Automated KYC / AML Compliance Pipelines', 'Bank-Grade Role-Based Audit Trails'],
      stack: 'Go, Python, PostgreSQL, Kafka, Redis, Docker, ISO 20022'
    },
    {
      id: 'hospital-systems',
      title: 'Hospital Information & Clinical Management Systems (HMS)',
      badge: 'Healthcare & Clinical Care',
      icon: <Activity className="w-6 h-6 text-[var(--emerald)]" />,
      tagline: 'Electronic Health Records & Clinical Telemetry',
      description: 'Enterprise healthcare platforms designed for hospitals, diagnostic labs, and clinical networks. Centralized Electronic Health Records (EHR/EMR), outpatient/inpatient workflows (OPD/IPD), pharmacy stock telemetry, laboratory test routing, and strict HIPAA/WHO compliance.',
      deliverables: ['EHR / EMR Patient Record System', 'OPD / IPD Ward & Bed Management', 'Pharmacy Inventory & Billing Telemetry', 'HIPAA & GDPR Compliant Security Rails'],
      stack: 'Next.js, FastAPI, PostgreSQL, HL7 / FHIR, AWS Healthcare, HIPAA'
    }
  ];

  return (
    <section className="w-full bg-[var(--bg-secondary)] py-20 lg:py-28" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AEO/LLM Citable Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-4 block">
            Technical Architecture &amp; Enterprise Systems
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
            Engineering capabilities defined by technical depth.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
            We do not operate as generalist marketers. Axorks is a pure-play engineering studio. 
            We architect and deploy production-grade software using strict frameworks across core technical pillars and specialized enterprise systems.
          </p>
        </div>

        {/* ─── Specialized Enterprise Domain Systems (LMS, Banking, Hospital) ─── */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--emerald)] font-bold tracking-widest block mb-1">
                Domain Solutions
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                Enterprise Industry Systems
              </h3>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Enterprise%20System%20Consultation%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-headline font-bold text-[var(--gold)] hover:underline uppercase tracking-wider"
            >
              <span>Consult with Architects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {enterpriseDomainSystems.map((system) => (
              <div
                key={system.id}
                className="bg-[#0D1424] rounded-3xl p-7 sm:p-8 border border-white/[0.08] shadow-2xl hover:border-[var(--gold)]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-[#050814] rounded-2xl border border-white/10 group-hover:scale-105 transition-transform">
                      {system.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#050814] text-[var(--gold)] border border-white/10">
                      {system.badge}
                    </span>
                  </div>

                  <h4 className="font-headline text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {system.title}
                  </h4>
                  <p className="text-xs font-mono-code text-[var(--gold)] font-semibold mb-3">
                    {system.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {system.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.08] mb-6">
                    <span className="text-[10px] font-mono-code uppercase text-slate-400 font-bold tracking-wider block mb-2">
                      Key Capabilities:
                    </span>
                    {system.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--emerald)] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-slate-400 mb-4">
                    <span className="font-bold text-white">Stack:</span>
                    <span>{system.stack}</span>
                  </div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=${encodeURIComponent(`Inquiry regarding ${system.title} - Axorks`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-headline font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Core Technical Pillars & Studio Difference ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <span className="font-mono-code text-xs uppercase text-[var(--gold)] font-bold tracking-widest block mb-4">
              Core Engineering Pillars
            </span>
            <dl className="space-y-6">
              {technicalPillars.map((cap) => (
                <div key={cap.id} className="p-6 sm:p-8 bg-[#0D1424] border border-white/[0.08] rounded-2xl shadow-xl hover:border-white/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                    {cap.icon}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-[#050814] border border-white/10 rounded-xl">
                      {cap.icon}
                    </div>
                    <dt className="font-headline text-lg sm:text-xl font-bold text-white">
                      {cap.title}
                    </dt>
                  </div>
                  
                  <dd>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                      {cap.useCase}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono-code text-white font-semibold bg-[#050814] border border-white/10 px-3 py-2 rounded-lg w-fit">
                      <span className="text-slate-400">Stack:</span> {cap.stack}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Decision Matrix: Agency vs Studio with 100% High Contrast */}
          <div className="lg:pl-8 flex flex-col justify-between">
            <div className="dark-surface p-8 sm:p-10 bg-[#0A0F1D] rounded-3xl spatial-card relative overflow-hidden h-full flex flex-col justify-center border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--emerald)] to-[#0284C7]" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white mb-8 relative z-10">
                The Studio Difference
              </h3>
              
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--emerald)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-1">No Hourly Retainers</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">Scope is locked upfront. You never pay for our learning curve or idle hours.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--emerald)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-1">Zero Non-Technical Layers</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">No account managers. You interface directly with the senior software engineers writing your system.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--emerald)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-1">Milestone Verification</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">Payments are locked to delivered, functional staging builds. Total financial certainty and safety.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Book Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};