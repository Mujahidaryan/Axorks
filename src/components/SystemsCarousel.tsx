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
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-obsidian-raised/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 font-mono text-[11px] font-bold text-gold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INTERACTIVE_SYSTEMS_SHOWCASE</span>
          </div>
          <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-paper">
            Flagship Engineering & Systems Architecture
          </h3>
        </div>

        {/* Slide Counter & Navigation Controls */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-steel">
            [ <strong className="text-gold">0{currentIndex + 1}</strong> / 0{slides.length} ]
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-obsidian text-steel transition-all hover:border-gold hover:text-paper hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-obsidian text-steel transition-all hover:border-gold hover:text-paper hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Active Slide Display */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Media Box (Video or Artwork Image) */}
        <div className="relative lg:col-span-6 h-64 sm:h-80 lg:h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-obsidian shadow-xl group">
          {activeSlide.isVideo && activeSlide.videoSrc ? (
            <video
              key={activeSlide.id}
              autoPlay
              loop
              muted
              playsInline
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

          {/* Axorks Studio Brand Bug — flush top-left corner, fully covers watermark */}
          <div className="absolute top-0 left-0 flex items-center gap-1.5 rounded-br-lg border-b border-r border-gold/30 bg-obsidian/90 px-3 py-2 backdrop-blur-md z-10">
            <img
              src="/logo.png"
              alt="Axorks"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-widest">
              AXORKS
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-paper">
            <span className="rounded bg-obsidian/90 px-3 py-1 text-[10px] font-bold text-gold uppercase tracking-wider border border-gold/30 backdrop-blur-md">
              {activeSlide.sysId}
            </span>
            <span className="text-[11px] text-steel/90 bg-obsidian/80 px-2.5 py-1 rounded backdrop-blur-md">
              {activeSlide.category}
            </span>
          </div>
        </div>

        {/* Text Details & Metrics Column */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <h4 className="font-serif text-2xl font-bold text-paper leading-tight">
              {activeSlide.title}
            </h4>
            <p className="mt-2 text-xs font-mono text-gold italic">
              "{activeSlide.tagline}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-steel leading-relaxed">
            {activeSlide.description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-xs">
            {activeSlide.metrics.map((m, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-obsidian p-3 text-center">
                <span className="block text-[10px] text-steel uppercase">{m.label}</span>
                <span className="block font-bold text-paper text-xs mt-1 text-gold">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
            {activeSlide.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-obsidian px-2.5 py-1 text-steel"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href={activeSlide.link}
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-all hover:bg-white hover:scale-[1.02]"
            >
              Explore Architecture Details
              <ArrowUpRight className="h-4 w-4 text-obsidian" />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
