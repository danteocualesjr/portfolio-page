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
    <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 space-y-8 md:space-y-12 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black/90 font-light">
            I'm an independent creative and run a design studio called{" "}
            <span className="font-semibold text-black">The Workshop</span>, based in London, Toronto and NYC. Whether working solo or leading a team, I help companies make strategic decisions and leverage their position in the market — bridging the gap between creative and commercial objectives.
          </p>
          <div className="pt-8 border-t border-black/10">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black/90 font-light">
              I've helped build multiple businesses, leading to{" "}
              <span className="font-semibold text-black relative">
                <span className="relative z-10">over $55M</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-200/60 to-purple-200/60 -z-0" />
              </span>{" "}
              in capital investment across multiple sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
