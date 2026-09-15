import React, { useEffect, useState, useRef } from 'react';

interface MetricItem {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  accent: 'gold' | 'emerald' | 'cyan' | 'violet';
  customDisplay?: string; // For things like "<1s"
}

const METRICS: MetricItem[] = [
  {
    numericValue: 1000,
    prefix: '$',
    label: 'Starting Investment',
    sublabel: 'Fixed-price milestone specification',
    accent: 'gold',
  },
  {
    numericValue: 42,
    suffix: '%',
    label: 'Perishable Spoilage Cut',
    sublabel: 'AgroTrace 14,000-node IoT deployment',
    accent: 'emerald',
  },
  {
    numericValue: 1,
    customDisplay: '<1s',
    label: 'Execution Latency',
    sublabel: 'IPMI-OS 2.0 algorithmic engine',
    accent: 'cyan',
  },
  {
    numericValue: 100,
    suffix: '%',
    label: 'Fixed-Price Guarantee',
    sublabel: 'Zero hourly surprises or overruns',
    accent: 'gold',
  },
];

const ACCENT_CLASSES = {
  gold: 'text-[#F5C761] border-amber-500/20 bg-amber-500/5',
  emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  cyan: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
  violet: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
};

export const MetricBar: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(METRICS.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts(METRICS.map(m => m.numericValue));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // 1.8 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              METRICS.map(m => Math.floor(easeOutProgress * m.numericValue))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(METRICS.map(m => m.numericValue));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={containerRef}
      aria-label="Verified performance metrics"
      className="w-full py-10 sm:py-14 border-y border-white/[0.08] bg-gradient-to-b from-[#070D1B] via-[#050813] to-[#070D1B]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, idx) => {
            const displayValue = metric.customDisplay 
              ? (hasAnimated ? metric.customDisplay : '—')
              : `${metric.prefix || ''}${counts[idx].toLocaleString()}${metric.suffix || ''}`;

            return (
              <div
                key={metric.label}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1020]/70 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-mono text-[#F8FAFC]">
                      {displayValue}
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                      {metric.label}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 font-medium">
                    {metric.sublabel}
                  </p>
                </div>
                {/* Accent glow corner */}
                <div 
                  className={`absolute -top-10 -right-10 h-24 w-24 rounded-full blur-2xl pointer-events-none opacity-20 ${ACCENT_CLASSES[metric.accent]}`} 
                  aria-hidden="true" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
