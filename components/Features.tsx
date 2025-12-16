export default function Features() {
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

  return (
    <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-6xl">
        <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-[0.95] text-black tracking-[-0.02em] mb-20 md:mb-32">
          Here's what you can expect from me...
        </h2>
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div key={index} className="space-y-8 md:space-y-12">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                {feature.title}
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-relaxed">
                {feature.description}
              </h4>
              {feature.author && (
                <p className="text-xl md:text-2xl text-black">
                  {feature.author}
                </p>
              )}
              {feature.testimonial && (
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-relaxed mt-8">
                  "{feature.testimonial}"
                </h4>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
