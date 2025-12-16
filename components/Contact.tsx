"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
          className="opacity-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black/90 mb-12 font-light">
            Culturally, I fit high-energy teams. If this sounds like you, I'd love to connect. Find me on{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline decoration-2 underline-offset-4 hover:decoration-indigo-500 hover:text-indigo-600 transition-all duration-300"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline decoration-2 underline-offset-4 hover:decoration-purple-500 hover:text-purple-600 transition-all duration-300"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline decoration-2 underline-offset-4 hover:decoration-pink-500 hover:text-pink-600 transition-all duration-300"
            >
              X
            </a>{" "}
            or shoot me an{" "}
            <a
              href="mailto:your.email@example.com"
              className="font-medium text-black underline decoration-2 underline-offset-4 hover:decoration-indigo-500 hover:text-indigo-600 transition-all duration-300"
            >
              email
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
