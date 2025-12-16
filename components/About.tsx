"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
        <div ref={ref} className="opacity-0 space-y-8">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-neutral-900">
            I'm an independent creative and run a design studio called{" "}
            <span className="font-semibold">The Workshop</span>, based in London, Toronto and NYC. Whether working solo or leading a team, I help companies make strategic decisions and leverage their position in the market — bridging the gap between creative and commercial objectives.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-neutral-900">
            I've helped build multiple businesses, leading to{" "}
            <span className="font-semibold">over $55M</span> in capital investment across multiple sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
