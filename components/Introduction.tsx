"use client";

import { useEffect, useRef } from "react";

export default function Introduction() {
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
    <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black/90 font-light">
            I've spent more than 20 years building, designing and advising companies. I specialise in{" "}
            <span className="font-medium text-black">brand</span>,{" "}
            <span className="font-medium text-black">web</span> and{" "}
            <span className="font-medium text-black">digital product design</span> for international clients across health, lifestyle and social impact spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
