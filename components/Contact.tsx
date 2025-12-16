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
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <p
          ref={ref}
          className="opacity-0 text-xl md:text-2xl lg:text-3xl leading-relaxed text-neutral-900"
        >
          Culturally, I fit high-energy teams. If this sounds like you, I'd love to connect. Find me on{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:no-underline"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:no-underline"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:no-underline"
          >
            X
          </a>{" "}
          or shoot me an{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-black underline hover:no-underline"
          >
            email
          </a>
          .
        </p>
      </div>
    </section>
  );
}
