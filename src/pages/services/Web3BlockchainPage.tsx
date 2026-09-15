import React from 'react';
import { Blocks, ShieldCheck, ArrowRight, CheckCircle2, Lock, Cpu } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { FAQAccordion } from '../../components/FAQAccordion';

export const Web3BlockchainPage: React.FC = () => {
  const { openCal } = useCal();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="Audited Smart Contracts & Web3 Engineering | Ethereum, EVM & DeFi | Axorks"
        description="Enterprise-grade Web3 development, audited smart contracts in Solidity and Rust, non-custodial wallet integrations, and decentralized application architecture."
        canonicalPath="/services/web3-blockchain"
      />

      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-white/[0.08] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-6">
              <Blocks className="h-4 w-4" />
              <span>Pillar 4: Decentralized Infrastructure &amp; Smart Contracts</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Audited smart contracts &amp; decentralized systems.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We design, write, and rigorously audit decentralized systems in Solidity and Rust. From automated escrow rails and multi-signature treasuries to responsive dApp frontends integrated with Viem and Ethers.js. Fixed-price proposals from $1,000.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={openCal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Book a Web3 Technical Discovery</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Lock className="h-10 w-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Audited Smart Contracts</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Formal verification, fuzz testing, and mathematical boundary analysis in Solidity and Hardhat. Zero vulnerability tolerance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Blocks className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">dApp Frontends &amp; Wallets</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Modern responsive dApp frontends supporting MetaMask, WalletConnect, Coinbase Wallet, and hardware ledger devices.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Cpu className="h-10 w-10 text-[#F5C761] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Automated Settlement Rails</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Non-custodial payment settlement, programmatic milestone escrow release, and multi-token accounting systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />
      <FAQAccordion />
    </div>
  );
};
