'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GoldSwooshLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative my-12 w-full overflow-hidden py-4 sm:my-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-[1px] w-full bg-obsidian-border">
          <motion.div
            style={{ scaleX, transformOrigin: '0%' }}
            className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_8px_rgba(201,162,75,0.6)]"
          />
        </div>
      </div>
    </div>
  );
}
