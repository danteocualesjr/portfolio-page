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
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <p
          ref={ref}
          className="opacity-0 text-xl md:text-2xl lg:text-3xl leading-relaxed text-neutral-900"
        >
          I've spent more than 20 years building, designing and advising companies. I specialise in brand, web and digital product design for international clients across health, lifestyle and social impact spaces.
        </p>
      </div>
    </section>
  );
}
