'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/assets/hero_slides/slide1.png',
    alt: 'Artificial intelligence universe neural network',
  },
  {
    src: '/assets/hero_slides/slide2.png',
    alt: 'Stacked transparent glass cloud architecture',
  },
  {
    src: '/assets/hero_slides/slide3.png',
    alt: 'Orbital rings AI core technology',
  },
  {
    src: '/assets/hero_slides/slide4.png',
    alt: 'High-end AI software engineering flagship architecture',
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per image

    return () => clearInterval(timer);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-80' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              className="object-cover object-[68%_center] sm:object-[75%_center] lg:object-[right_center] scale-[1.04]"
            />
          </div>
        );
      })}

      {/* Optical Gradient Scrim — Guarantees 100% text contrast on left while artwork breathes on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/85 to-transparent lg:via-[#0B0F19]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-transparent to-[#0B0F19]" />

      {/* Ambient atmospheric lighting accents */}
      <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#1E293B]/40 blur-3xl opacity-60" />
      <div className="absolute -bottom-24 right-1/3 h-[450px] w-[450px] rounded-full bg-[#334155]/30 blur-3xl opacity-50" />
      <div className="exec-grid absolute inset-0 opacity-[0.14]" />
    </div>
  );
}
