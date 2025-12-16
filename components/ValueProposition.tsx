"use client";

import { useEffect, useRef } from "react";

export default function ValueProposition() {
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
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={ref}
          className="opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] text-black tracking-tight"
        >
          Concept. Brand. Build. Launch. Exit.
        </h2>
      </div>
    </section>
  );
}
