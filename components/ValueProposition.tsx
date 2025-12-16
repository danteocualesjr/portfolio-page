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

  const words = ["Concept.", "Brand.", "Build.", "Launch.", "Exit."];

  return (
    <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="opacity-0">
          <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.95] text-black tracking-[-0.02em]">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              Concept.
            </span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              Brand.
            </span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              Build.
            </span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              Launch.
            </span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default gradient-text">
              Exit.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
