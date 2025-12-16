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
    <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={sectionRef}
          className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.95] text-black tracking-[-0.02em] mb-20 md:mb-32 opacity-0"
        >
          Here's what you can expect from me...
        </h2>
        <div className="space-y-12 md:space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) featuresRef.current[index] = el;
              }}
              className="group opacity-0 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-black/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="space-y-6 md:space-y-10">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300" />
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                </div>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black/90 leading-relaxed pl-16">
                  {feature.description}
                </h4>
                {feature.author && (
                  <p className="text-xl md:text-2xl text-black/70 font-medium pl-16">
                    — {feature.author}
                  </p>
                )}
                {feature.testimonial && (
                  <div className="mt-8 pl-16 border-l-4 border-gradient-to-b from-indigo-500 to-purple-500 border-l-indigo-500">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black/80 leading-relaxed italic">
                      "{feature.testimonial}"
                    </h4>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
