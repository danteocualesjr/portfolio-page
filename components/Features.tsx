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
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Here's what you can expect from me...
        </h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                {feature.description}
              </p>
              {feature.testimonial && (
                <div className="mt-6 pl-6 border-l-2 border-gray-300">
                  <p className="text-lg italic text-gray-600 mb-2">
                    "{feature.testimonial}"
                  </p>
                  <p className="text-sm text-gray-500">
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

