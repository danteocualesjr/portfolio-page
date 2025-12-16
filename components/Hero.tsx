"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-24 md:py-32">
      <div ref={ref} className="w-full max-w-5xl mx-auto opacity-0">
        <p className="text-base md:text-lg text-neutral-600 mb-6 md:mb-8 font-medium">
          Hey, I'm <span className="text-black font-semibold">Your Name</span>
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] text-black tracking-tight mb-6">
          a design partner and creative director
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
          Crafting experiences that resonate and drive meaningful results.
        </p>
      </div>
    </section>
  );
}
