'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  sysId: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  isVideo?: boolean;
  videoSrc?: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  link: string;
}

export default function SystemsCarousel() {
  const slides: CarouselSlide[] = [
    {
      id: 'ai-regime-engine',
      sysId: 'SYS_01 — AI_AGENTIC_INTELLIGENCE',
      title: 'Agentic Document & Knowledge Pipeline',
      category: 'Enterprise AI & Vector Automation',
      tagline: 'Autonomous document parsing, LLM RAG vector search, and API workflow automation.',
      description:
        'Engineered an enterprise agentic pipeline integrating OpenAI API, ChromaDB vector indexing, and automated PDF extractors — reducing manual document review times by 85%.',
      image: '/assets/ai_art.png',
      isVideo: true,
      videoSrc: '/assets/ai_video.mp4',
      stack: ['Python', 'OpenAI API', 'Vector RAG', 'Next.js 14', 'PostgreSQL', 'FastAPI'],
      metrics: [
        { label: 'Review Time', value: '-85% Latency' },
        { label: 'Accuracy Rate', value: '99.4% Precision' },
        { label: 'Parsing Speed', value: '10k Docs / Hr' },
      ],
      link: '/services/ai-integration',
    },
    {
      id: 'agrotrace-telemetry',
      sysId: 'SYS_02 — AGROTRACE_TELEMETRY',
      title: 'FWO Grid Telemetry & Cold-Chain Logistics OS',
      category: 'AgriTech · Telemetry & IoT Infrastructure',
      tagline: 'Real-time thermal sensor logs and cold-chain compliance tracking across shipping routes.',
      description:
        'Connected supply chain portal to FWO grid telemetry — monitoring thermal sensor logs, export compliance validation, and automated breach alerts for international agricultural exporters.',
      image: '/assets/cloud_art.png',
      stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'FWO Telemetry', 'REST APIs'],
      metrics: [
        { label: 'System Domain', value: 'AgriTech IoT' },
        { label: 'Uptime SLA', value: '99.9% Reliable' },
        { label: 'Data Sync', value: 'Real-Time' },
      ],
      link: '/case-studies',
    },
    {
      id: 'government-food-security',
      sysId: 'SYS_03 — SINDH_FOOD_SECURITY',
      title: 'FAO / WFP Public Sector Dashboard',
      category: 'Government & Public Sector Systems',
      tagline: 'District food security monitoring platform adhering to international FAO/WFP standards.',
      description:
        'Humanitarian decision system built for public sector emergency response, featuring IPC phase classification analytics, crop yield telemetry, and automated district alerts.',
      image: '/assets/hero_art.png',
      stack: ['Next.js 14', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vercel'],
      metrics: [
        { label: 'Coverage Area', value: 'Multi-District' },
        { label: 'Standard', value: 'FAO / WFP' },
        { label: 'Compliance', value: 'Government Grade' },
      ],
      link: '/case-studies',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIndex];

  return (
    <div className="exec-hero-stage relative overflow-hidden rounded-3xl p-6 sm:p-10">
      {/* Ambient meshes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="exec-mesh mesh-indigo-dark absolute -right-32 -top-32 h-96 w-96 opacity-70" />
        <div className="exec-mesh mesh-teal-dark absolute -bottom-32 -left-32 h-96 w-96 opacity-60" />
        <div className="exec-grid absolute inset-0 opacity-30" />
      </div>

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <div className="exec-eyebrow exec-eyebrow-gold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Systems Showcase
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            Flagship Engineering &amp; Systems Architecture
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-steel">
            [ <strong className="text-gold">0{currentIndex + 1}</strong> / 0{slides.length} ]
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-obsidian/70 text-steel backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:text-paper hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-obsidian/70 text-steel backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:text-paper hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Active Slide */}
      <div className="relative z-10 mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Media */}
        <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-obsidian shadow-obsidian-md sm:h-80 lg:col-span-6 lg:h-[360px]">
          {activeSlide.isVideo && activeSlide.videoSrc ? (
            <video
              key={activeSlide.id}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={activeSlide.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

          {/* Brand bug */}
          <div className="absolute left-0 top-0 flex items-center gap-1.5 rounded-br-lg border-b border-r border-gold/30 bg-obsidian/90 px-3 py-2 backdrop-blur-md">
            <img
              src="/logo.png"
              alt="Axorks"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              AXORKS
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-mono text-xs text-paper">
            <span className="rounded border border-gold/30 bg-obsidian/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md">
              {activeSlide.sysId}
            </span>
            <span className="rounded bg-obsidian/80 px-2.5 py-1 text-[11px] text-steel/90 backdrop-blur-md">
              {activeSlide.category}
            </span>
          </div>
        </div>

        {/* Text details */}
        <div className="lg:col-span-6">
          <div>
            <h4 className="font-serif text-2xl font-bold leading-tight text-paper sm:text-[1.7rem]">
              {activeSlide.title}
            </h4>
            <p className="mt-2 font-mono text-xs text-gold italic">
              &ldquo;{activeSlide.tagline}&rdquo;
            </p>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-steel">
            {activeSlide.description}
          </p>

          {/* Metrics */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            {activeSlide.metrics.map((m, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.08] bg-obsidian/70 p-3 text-center backdrop-blur-md transition-colors duration-300 hover:border-gold/30 sm:p-3.5">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-steel">{m.label}</span>
                <span className="mt-1.5 block font-mono text-xs font-bold text-gold">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {activeSlide.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-obsidian/70 px-2.5 py-1 font-mono text-[11px] text-steel"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7">
            <Link
              href={activeSlide.link}
              className="btn btn-white group"
            >
              Explore Architecture Details
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-8 bg-gradient-to-r from-gold to-gold/70 shadow-[0_0_12px_rgba(201,162,75,0.4)]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}