export default function Contact() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 font-light mb-8 md:mb-12">
          Culturally, I fit high-energy teams. If this sounds like you, I'd love to connect. Find me on LinkedIn, Instagram, X or shoot me an email.
        </p>
        <div className="flex flex-wrap gap-6 md:gap-8">
          <a 
            href="mailto:your.email@example.com" 
            className="text-lg md:text-xl font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            Instagram
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}

