"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
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
    <footer className="py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="opacity-0">
          <p className="text-lg md:text-xl text-neutral-600 mb-6">
            Looking forward to it,
          </p>
          <p className="text-base md:text-lg text-neutral-900 mb-8 font-medium">
            © Your Name 👋
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:your.email@example.com"
              className="text-base md:text-lg text-neutral-600 hover:text-black underline"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-neutral-600 hover:text-black underline"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-neutral-600 hover:text-black underline"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-neutral-600 hover:text-black underline"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
