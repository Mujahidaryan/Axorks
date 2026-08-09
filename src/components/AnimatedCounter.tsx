'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 1.5,
  className = '',
}: AnimatedCounterProps) {
  // Always initialize count with target so SSR & initial render show real values (6+, 7+, 5+, 100%), NEVER 0
  const [count, setCount] = useState<number>(target);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    // Use standard IntersectionObserver safely
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setCount(target);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          // Start count from 0 once in view
          setCount(0);
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
