import React from 'react';
import { PROJECTS } from '../data/mockData';
import { useRouter } from '../router/Router';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ArrowRight, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export const DeliveredWorkPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-28 pb-20 lg:pb-28 bg-[var(--bg-primary)]">
      {/* Page Header */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-b border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Verified Work</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block mb-3">
                Production Case Studies
              </span>
              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Verified Production Systems.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Real software running in production for international clients. Every system delivered under fixed milestone pricing with 100% intellectual property transfer.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Custom%20Architecture%20Inquiry%20-%20Axorks"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn px-6 py-3.5 bg-[var(--gold)] text-[#0A0F1D] rounded-xl font-headline font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
              >
                <span>Request Similar Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Stream */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-28 lg:space-y-36">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[var(--glass-border)] spatial-card shadow-sm"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--glass-border)]">
                  <div className="flex items-center gap-3">
                    {project.clientLogo && (
                      <div className="h-8 w-24 flex items-center shrink-0">
                        <img src={project.clientLogo} alt={project.title} className="h-full object-contain grayscale opacity-80" />
                      </div>
                    )}
                    <div>
                      <span className="font-mono-code text-[11px] font-bold uppercase text-[var(--gold)]">
                        {project.categoryBadge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--emerald)]/10 text-[var(--emerald)] text-[10px] font-mono-code font-bold uppercase tracking-wider border border-[var(--emerald)]/20">
                      {project.statusBadge}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Carousel Showcase */}
                  <div className="lg:col-span-7">
                    <ProjectCarousel
                      images={project.images}
                      projectTitle={project.title}
                      badgeText={project.tags?.[0]}
                      accentColor={isEven ? 'var(--gold)' : 'var(--emerald)'}
                    />
                  </div>

                  {/* Right Column: Architectural Outcome */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
                        {project.title}
                      </h2>
                      <p className="text-xs font-mono-code text-[var(--text-muted)] font-bold uppercase tracking-wide mb-6">
                        {project.tagline}
                      </p>

                      {/* Highlight Metrics Grid */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                          {project.metrics.map((m, mIdx) => (
                            <div key={mIdx}>
                              <span className="block font-display-hero text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                                {m.value}
                              </span>
                              <span className="block font-mono-code text-[10px] text-[var(--text-muted)] uppercase tracking-tight">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Problem & Solution */}
                      <div className="space-y-4 text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                        {project.problem && (
                          <div className="pl-3 border-l-2 border-[var(--glass-border)]">
                            <strong className="text-[var(--text-primary)] font-headline tracking-wide uppercase text-[10px] block mb-1">
                              The Technical Challenge:
                            </strong>
                            <p>{project.problem}</p>
                          </div>
                        )}
                        {project.solution && (
                          <div className="pl-3 border-l-2 border-[var(--emerald)]/40 bg-[var(--emerald)]/[0.03] py-2">
                            <strong className="text-[var(--text-primary)] font-headline tracking-wide uppercase text-[10px] block mb-1">
                              Delivered Solution:
                            </strong>
                            <p>{project.solution}</p>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mb-6">
                        <span className="text-[10px] font-mono-code uppercase text-[var(--text-muted)] font-bold tracking-wider block mb-2">
                          Deployed Architecture:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[10px] font-mono-code text-[var(--text-secondary)] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--glass-border)]">
                      <a
                        href={`mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Case%20Study%20Architecture%20Inquiry%20(${encodeURIComponent(project.title)})%20-%20Axorks`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[var(--gold)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-wider"
                      >
                        <span>Discuss this tech stack</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="dark-surface">
        <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-t border-[var(--glass-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--gold)] font-bold mb-4 block">
              Architectural Consulting
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Have a complex system requirement?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We provide fixed-price proposals, itemized milestone contracts, and senior technical architects ready to deploy production software.
            </p>
            <a
              href="mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Discovery%20Call%20Request%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-block px-8 py-4 bg-[var(--gold)] text-[#0A0F1D] rounded-xl font-headline font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              Book Discovery Call
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};