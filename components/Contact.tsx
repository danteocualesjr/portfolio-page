export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
          Culturally, I fit high-energy teams. If this sounds like you, I'd love to connect. Find me on LinkedIn, Instagram, X or shoot me an email.
        </p>
        <div className="flex flex-wrap gap-6 mt-8">
          <a 
            href="mailto:your.email@example.com" 
            className="text-lg font-medium text-black hover:underline"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium text-black hover:underline"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium text-black hover:underline"
          >
            Instagram
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium text-black hover:underline"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}

