export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg md:text-xl text-gray-600 mb-6 font-light">
          Looking forward to it,
        </p>
        <p className="text-base md:text-lg text-gray-500 mb-8">
          © Your Name 👋
        </p>
        <div className="flex flex-wrap gap-6 md:gap-8">
          <a 
            href="mailto:your.email@example.com" 
            className="text-base md:text-lg font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            Instagram
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg font-medium text-black hover:underline transition-opacity hover:opacity-70"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

