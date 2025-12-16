"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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
    <footer className="py-16 md:py-24 px-8 md:px-12 lg:px-16 xl:px-24 border-t border-black/10 relative bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="opacity-0">
          <p className="text-xl md:text-2xl text-black/80 mb-8 font-light">
            Looking forward to it,
          </p>
          <p className="text-lg md:text-xl text-black mb-12 font-medium">
            © Your Name 👋
          </p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a
              href="mailto:your.email@example.com"
              className="text-lg md:text-xl text-black/70 hover:text-black underline decoration-2 underline-offset-4 hover:decoration-indigo-500 hover:text-indigo-600 transition-all duration-300 font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-black/70 hover:text-black underline decoration-2 underline-offset-4 hover:decoration-indigo-500 hover:text-indigo-600 transition-all duration-300 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-black/70 hover:text-black underline decoration-2 underline-offset-4 hover:decoration-purple-500 hover:text-purple-600 transition-all duration-300 font-medium"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-black/70 hover:text-black underline decoration-2 underline-offset-4 hover:decoration-pink-500 hover:text-pink-600 transition-all duration-300 font-medium"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
