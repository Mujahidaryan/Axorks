import React from 'react';
import { ArrowRight, Cpu, Code, Smartphone, Blocks, CheckCircle2, GraduationCap, Landmark, Activity } from 'lucide-react';
import { useRouter } from '../router/Router';

export const CapabilitiesMatrix: React.FC = () => {
  const { navigate } = useRouter();

  const technicalPillars = [
    {
      id: 'web-apps',
      title: 'Custom Web Platforms & SaaS',
      icon: <Code className="w-5 h-5 text-[#E85A3C]" />,
      stack: 'Next.js 15, React 19, Node.js, PostgreSQL, Redis, AWS',
      useCase: 'High-concurrency enterprise dashboards, SaaS platforms, and secure multi-tenant client portals.'
    },
    {
      id: 'ai-sys',
      title: 'Intelligent Automations & Multi-Agents',
      icon: <Cpu className="w-5 h-5 text-[#5EEAD4]" />,
      stack: 'Python, LangChain, OpenAI, PyTorch, RAG Retrieval',
      useCase: 'Eliminate manual operational bottlenecks and orchestrate autonomous decision pipelines with human-in-the-loop triggers.'
    },
    {
      id: 'mobile',
      title: 'Flutter Mobile Platforms',
      icon: <Smartphone className="w-5 h-5 text-[#A1A1AA]" />,
      stack: 'Flutter, Dart, Firebase, REST/GraphQL, Offline Sync',
      useCase: 'Native 60fps iOS and Android applications built from a unified high-performance codebase.'
    },
    {
      id: 'web3',
      title: 'Web3 & Audited Smart Contracts',
      icon: <Blocks className="w-5 h-5 text-[#E8B923]" />,
      stack: 'Solidity, Ethereum, Web3.js, Hardhat, EVM Rails',
      useCase: 'Secure decentralized applications, immutable audit trails, and audited tokenomics.'
    }
  ];

  const enterpriseDomainSystems = [
    {
      id: 'lms-systems',
      title: 'School & College Learning Management Systems (LMS)',
      badge: 'Enterprise · Education',
      icon: <GraduationCap className="w-6 h-6 text-[#E8B923]" />,
      tagline: 'Multi-Campus Administration & Academic Operations',
      description: 'Comprehensive institutional platforms for schools, colleges, and university networks. Student Information Systems (SIS), parent-teacher telemetry, automated attendance, gradebook analytics, interactive lecture courseware, and unified online fee collection.',
      deliverables: ['Multi-Campus SIS & Enrollment', 'Automated Gradebooks & Exams', 'Parent & Student Mobile Portals', 'Automated Fee Gateways & Invoicing'],
      stack: 'React, Node.js, PostgreSQL, Docker, Redis, Stripe, AWS'
    },
    {
      id: 'banking-systems',
      title: 'Core Banking & Financial Transaction Rails',
      badge: 'Enterprise · FinTech',
      icon: <Landmark className="w-6 h-6 text-[#5EEAD4]" />,
      tagline: 'High-Throughput Ledger & Financial Transaction Rails',
      description: 'Institutional-grade core banking architectures, multi-currency transaction engines, double-entry accounting ledgers, automated payment reconciliations, and regulatory compliance pipelines (KYC/AML) with sub-second execution.',
      deliverables: ['Real-Time Transaction Routing Engine', 'Double-Entry Ledger Architecture', 'Automated KYC / AML Compliance Pipelines', 'Bank-Grade Role-Based Audit Trails'],
      stack: 'Go, Python, PostgreSQL, Kafka, Redis, Docker, ISO 20022'
    },
    {
      id: 'hospital-systems',
      title: 'Hospital Information & Clinical Management Systems (HMS)',
      badge: 'Enterprise · Healthcare',
      icon: <Activity className="w-6 h-6 text-[#E85A3C]" />,
      tagline: 'Electronic Health Records & Clinical Telemetry',
      description: 'Enterprise healthcare platforms designed for hospitals, diagnostic labs, and clinical networks. Centralized Electronic Health Records (EHR/EMR), outpatient/inpatient workflows (OPD/IPD), pharmacy stock telemetry, laboratory test routing, and strict HIPAA/WHO compliance.',
      deliverables: ['EHR / EMR Patient Record System', 'OPD / IPD Ward & Bed Management', 'Pharmacy Inventory & Billing Telemetry', 'HIPAA & GDPR Compliant Security Rails'],
      stack: 'Next.js, FastAPI, PostgreSQL, HL7 / FHIR, AWS Healthcare, HIPAA'
    }
  ];

  return (
    <section className="w-full bg-[#08080A] py-20 lg:py-28" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AEO/LLM Citable Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[#E8B923] mb-4 block">
            Technical Architecture &amp; Enterprise Systems
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F4F5] tracking-tight mb-6 leading-tight">
            Engineering capabilities defined by technical depth.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
            We do not operate as generalist marketers or middleman agencies. Axorks is an engineering studio. We architect and deploy production-grade software using strict frameworks across core technical pillars and specialized enterprise systems.
          </p>
        </div>

        {/* ─── Specialized Enterprise Domain Systems (LMS, Banking, Hospital) ─── */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#5EEAD4] font-bold tracking-widest block mb-1">
                Domain Solutions
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#F4F4F5]">
                Enterprise Industry Systems
              </h3>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Enterprise%20System%20Consultation%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-headline font-bold text-[#E8B923] hover:underline uppercase tracking-wider"
            >
              <span>Consult with Architects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {enterpriseDomainSystems.map((system) => (
              <div
                key={system.id}
                className="bg-[#121214] rounded-3xl p-7 sm:p-8 border border-[rgba(146,157,167,0.14)] shadow-2xl hover:border-[rgba(146,157,167,0.32)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-[#08080A] rounded-2xl border border-[rgba(146,157,167,0.14)] group-hover:scale-105 transition-transform">
                      {system.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#161618] text-[#E8B923] border border-[rgba(146,157,167,0.14)]">
                      {system.badge}
                    </span>
                  </div>

                  <h4 className="font-headline text-lg sm:text-xl font-bold text-[#F4F4F5] mb-2 leading-snug">
                    {system.title}
                  </h4>
                  <p className="text-xs font-mono-code text-[#E8B923] font-semibold mb-3">
                    {system.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                    {system.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[rgba(146,157,167,0.1)] mb-6">
                    <span className="text-[10px] font-mono-code uppercase text-[#71717A] font-bold tracking-wider block mb-2">
                      Key Capabilities:
                    </span>
                    {system.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5EEAD4] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(146,157,167,0.1)]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#71717A] mb-4">
                    <span className="font-bold text-[#F4F4F5]">Stack:</span>
                    <span>{system.stack}</span>
                  </div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=${encodeURIComponent(`Inquiry regarding ${system.title} - Axorks`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#161618] hover:bg-[#1E1E22] text-[#F4F4F5] border border-[rgba(146,157,167,0.14)] font-headline font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
            <span className="font-mono-code text-xs uppercase text-[#E8B923] font-bold tracking-widest block mb-4">
              Core Engineering Pillars
            </span>
            <dl className="space-y-5">
              {technicalPillars.map((cap) => (
                <div key={cap.id} className="p-6 sm:p-7 bg-[#121214] border border-[rgba(146,157,167,0.14)] rounded-2xl shadow-xl hover:border-[rgba(146,157,167,0.3)] transition-all group relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-[#08080A] border border-[rgba(146,157,167,0.14)] rounded-xl">
                      {cap.icon}
                    </div>
                    <dt className="font-headline text-lg sm:text-xl font-bold text-[#F4F4F5]">
                      {cap.title}
                    </dt>
                  </div>
                  
                  <dd>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 font-normal">
                      {cap.useCase}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#F4F4F5] font-semibold bg-[#08080A] border border-[rgba(146,157,167,0.14)] px-3 py-2 rounded-lg w-fit">
                      <span className="text-[#71717A]">Stack:</span> {cap.stack}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Decision Matrix: Agency vs Studio */}
          <div className="lg:pl-6 flex flex-col justify-between">
            <div className="p-8 sm:p-10 bg-[#121214] rounded-3xl spatial-card relative overflow-hidden h-full flex flex-col justify-center border border-[rgba(146,157,167,0.14)] shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8B923] via-[#E85A3C] to-[#5EEAD4]" />
              
              <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#F4F4F5] mb-8 relative z-10">
                The Studio Difference
              </h3>
              
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#5EEAD4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#F4F4F5] uppercase tracking-wider mb-1">Direct Senior Architectural Access</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">Zero junior delegate handoffs or non-technical account managers. You collaborate directly with the engineers writing your production code.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#5EEAD4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#F4F4F5] uppercase tracking-wider mb-1">Staging Verification Escrow</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">Invoices are released only after you test working code on private staging URLs. Absolute quality certainty before any financial commitment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#5EEAD4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#F4F4F5] uppercase tracking-wider mb-1">Guaranteed Fixed Milestone Scoping</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-normal">Every scope is locked with guaranteed milestones. No open-ended hourly retainers, no billable hour ambiguity.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-6 border-t border-[rgba(146,157,167,0.14)] relative z-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] text-xs font-headline font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(232,185,35,0.35)] cursor-pointer flex items-center justify-center gap-2"
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
