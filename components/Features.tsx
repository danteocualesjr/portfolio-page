"use client";

import { useEffect, useRef } from "react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: "Value",
      description: "Experience, big energy and fresh thinking.",
      author: "Jordan Nott, Founder",
      testimonial: "It's very rare in life when you meet someone that is so decisively exceptional at what they do."
    },
    {
      title: "Insights",
      description: "Bridge the gap between creative and commercial objectives — speaking both languages.",
      author: "Peter Hwang, Founder",
      testimonial: "From a creative perspective, I've never worked with a more talented individual."
    },
    {
      title: "Growth",
      description: "The foundations to scale — from world-class design and advisory to building your future team."
    },
    {
      title: "Fun",
      description: "Teach teams to move at velocity and have a hell of a lot of fun doing it."
    }
  ];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    featuresRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={sectionRef}
          className="opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] text-black tracking-tight mb-20 md:mb-24"
        >
          Here's what you can expect from me...
        </h2>
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) featuresRef.current[index] = el;
              }}
              className="opacity-0 space-y-6"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {feature.title}
              </h3>
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-700 leading-relaxed max-w-4xl">
                {feature.description}
              </p>
              {feature.author && (
                <p className="text-lg md:text-xl text-neutral-600">
                  — {feature.author}
                </p>
              )}
              {feature.testimonial && (
                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 leading-relaxed italic max-w-4xl">
                    "{feature.testimonial}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
