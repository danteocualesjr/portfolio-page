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
    <section className="min-h-screen flex items-center justify-start px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      <div ref={ref} className="w-full max-w-6xl relative z-10 opacity-0">
        <p className="text-xl md:text-2xl mb-8 md:mb-12 text-black/80 font-medium">
          Hey, I'm <span className="font-semibold text-black">Your Name</span>
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.95] text-black tracking-[-0.02em] mb-4">
          a{" "}
          <span className="relative inline-block">
            <span className="relative z-10">design partner</span>
            <span className="absolute bottom-2 left-0 right-0 h-4 md:h-6 lg:h-8 bg-gradient-to-r from-indigo-200/50 via-purple-200/50 to-pink-200/50 -z-0 transform -skew-x-12" />
          </span>{" "}
          and creative director
        </h1>
        <div className="mt-12 md:mt-16 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="text-lg md:text-xl text-black/60">
            Crafting experiences that resonate
          </p>
        </div>
      </div>
    </section>
  );
}
