export default function Features() {
  const features = [
    {
      title: "Value",
      description: "Experience, big energy and fresh thinking.",
      testimonial: "It's very rare in life when you meet someone that is so decisively exceptional at what they do.",
      author: "Jordan Nott, Founder"
    },
    {
      title: "Insights",
      description: "Bridge the gap between creative and commercial objectives — speaking both languages.",
      testimonial: "From a creative perspective, I've never worked with a more talented individual.",
      author: "Peter Hwang, Founder"
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
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-16 md:mb-20">
          Here's what you can expect from me...
        </h2>
        <div className="space-y-20 md:space-y-24">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light mb-6">
                {feature.description}
              </p>
              {feature.testimonial && (
                <div className="mt-8 pl-6 md:pl-8 border-l-2 border-gray-300">
                  <p className="text-lg md:text-xl italic text-gray-600 mb-3 font-light">
                    "{feature.testimonial}"
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    {feature.author}
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

