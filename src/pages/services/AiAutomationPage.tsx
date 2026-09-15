import React from 'react';
import { Brain, ShieldCheck, ArrowRight, CheckCircle2, Cpu, Database, Workflow, Sparkles, Clock, Lock } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { FAQAccordion } from '../../components/FAQAccordion';
import { useRouter } from '../../router/Router';

export const AiAutomationPage: React.FC = () => {
  const { openCal } = useCal();
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="Custom AI Automation Agency for SMBs | Autonomous Multi-Agent Systems | Axorks"
        description="Eliminate manual clerical bottlenecks with custom autonomous AI agents, RAG vector retrieval pipelines, and private LLM workflows. Projects from $1,000 with guaranteed fixed pricing."
        canonicalPath="/services/ai-automation"
      />

      {/* Hero */}
      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-white/[0.08] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20 mb-6">
              <Brain className="h-4 w-4" />
              <span>Pillar 1: Autonomous AI &amp; Intelligent Workflows</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Bespoke AI automation &amp; multi-agent systems that run 24/7.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We architect self-hosted, private intelligence pipelines that eliminate repetitive clerical bottlenecks, automate complex document verification, and execute high-speed data extraction. Projects start from $1,000 with guaranteed fixed-price milestones.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={openCal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Schedule an AI Discovery Session</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-6 py-4 text-base font-semibold text-white border border-white/10 transition-colors cursor-pointer"
              >
                <span>View Production AI Case Studies</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium border-t border-white/5 pt-6">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Zero monthly token markups
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="h-4 w-4" />
                24-Hour itemized technical spec
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <CheckCircle2 className="h-4 w-4" />
                100% self-hosted &amp; private
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Definition Block */}
      <section className="py-12 bg-[#060B19] border-b border-white/[0.08]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-400" />
              <span>What is Custom AI Automation? (AEO Definition)</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Custom AI automation is the engineering of proprietary software pipelines that combine large language models (LLMs), vector retrieval databases (RAG), and deterministic API integrations to execute complex business workflows without continuous human supervision. Unlike generic no-code tools like Zapier, custom AI pipelines handle non-linear edge cases, protect proprietary data behind dedicated VPCs, and integrate directly with existing SQL/NoSQL databases with sub-second execution latency.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Engineered for real operational yield.
            </h2>
            <p className="mt-4 text-slate-300">
              Four specialized AI capabilities designed to permanently remove manual labor bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8 backdrop-blur-md">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Workflow className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Autonomous Multi-Agent Workflows</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Orchestrated agent pipelines where specialized AI instances handle distinct stages: research, document parsing, validation, and action execution with human-in-the-loop oversight.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Multi-turn LangGraph orchestration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Automatic retry &amp; error recovery</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Full operational audit logging</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8 backdrop-blur-md">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#F5C761] mb-6">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">High-Precision RAG Vector Systems</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Retrieval-Augmented Generation across internal PDF archives, ERP databases, technical manuals, and CRM data with mathematically verified citation links and zero-hallucination guardrails.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Semantic chunking &amp; re-ranking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Pinecone, Weaviate &amp; pgvector setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Real-time incremental synchronization</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8 backdrop-blur-md">
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Intelligent Document Processing (IDP)</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Automated ingestion of complex invoices, maritime bills of lading, medical consultation notes, and legal contracts with sub-second OCR extraction and automatic ledger reconciliation.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" /> 99.4% structured extraction accuracy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" /> Automatic cross-checking against SQL records</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" /> Export compliance validation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8 backdrop-blur-md">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Private VPC &amp; Fine-Tuned Models</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Self-hosted open-source models (Llama 3, Mistral, DeepSeek) deployed inside your own AWS/GCP virtual private cloud. Your training data and business queries never leave your private perimeter.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400" /> Complete HIPAA &amp; GDPR compliance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400" /> RLHF domain-specific fine-tuning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400" /> Zero third-party telemetry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <GuaranteeSection />

      {/* FAQ */}
      <FAQAccordion
        title="AI Automation FAQ"
        subtitle="Common technical and commercial questions about integrating custom AI into your operations."
      />
    </div>
  );
};
