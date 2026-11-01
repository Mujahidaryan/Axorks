import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from '../router/Router';

interface ProofItem {
  id: string;
  name: string;
  sector: string;
  logo: string;
  metric: string;
  result: string;
  accent: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    id: 'agrotrace',
    name: 'AgroTrace',
    sector: 'Agriculture · Supply Chain',
    logo: '/Logos/agrotrace_logo.png',
    metric: '42% Spoilage Drop',
    result: '14,000 active nodes tracked across cold-chain logistics in real time.',
    accent: '#10B981',
  },
  {
    id: 'ipmi-os',
    name: 'IPMI-OS 2.0',
    sector: 'FinTech · AI Trading',
    logo: '/Logos/ipmios_logo.png',
    metric: '<1s Latency',
    result: 'Multi-tier TQE analysis and autonomous risk governance execution engine.',
    accent: '#E8B923',
  },
  {
    id: 'mediverse',
    name: 'MediVerse',
    sector: 'Healthcare · Telemedicine',
    logo: '/Logos/mediverse_logo.png',
    metric: 'WHO & HIPAA',
    result: 'Compliant cross-border telemedicine connecting verified specialists.',
    accent: '#5EEAD4',
  },
  {
    id: 'fume',
    name: 'FUME Fragrances',
    sector: 'Luxury · E-Commerce',
    logo: '/Logos/fume_logo.jpg',
    metric: 'Bespoke UI',
    result: 'High-conversion sensory discovery boutique engineered end-to-end.',
    accent: '#E85A3C',
  },
];

export const SocialProofStrip: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#08080A] border-b border-[rgba(146,157,167,0.14)] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[rgba(146,157,167,0.12)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#A1A1AA] font-semibold">
              Live Production Platforms &amp; Client Deployments
            </span>
          </div>
          <span className="text-xs font-mono-code text-[#E8B923] font-bold">
            Verified Real-World Business Outcomes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROOF_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate('/work')}
              className="p-5 rounded-2xl bg-[#121214] border border-[rgba(146,157,167,0.14)] hover:border-[#E8B923]/40 transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="h-12 flex items-center justify-between mb-4 pb-3 border-b border-[rgba(146,157,167,0.1)]">
                  <div className="h-9 max-w-[140px] flex items-center">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="max-h-8 max-w-full object-contain filter brightness-110 group-hover:brightness-125 transition-all"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className="font-mono-code text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                    style={{
                      borderColor: item.accent,
                      color: item.accent,
                      backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>

                <div className="text-[11px] font-mono-code text-[#71717A] mb-1">
                  {item.sector}
                </div>
                <h4 className="font-headline text-base font-bold text-[#F4F4F5] mb-2 group-hover:text-[#E8B923] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.result}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(146,157,167,0.1)] flex items-center justify-between text-[11px] font-mono-code text-[#71717A] group-hover:text-[#F4F4F5] transition-colors">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#E8B923]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};