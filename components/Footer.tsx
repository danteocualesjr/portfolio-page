export default function Footer() {
  return (
    <footer className="py-16 md:py-24 px-8 md:px-12 lg:px-16 xl:px-24 border-t border-black">
      <div className="max-w-6xl">
        <p className="text-xl md:text-2xl text-black mb-8">
          Looking forward to it,
        </p>
        <p className="text-lg md:text-xl text-black mb-12">
          © Your Name👋
        </p>
        <div className="flex flex-wrap gap-6 md:gap-8">
          <a 
            href="mailto:your.email@example.com" 
            className="text-lg md:text-xl text-black underline hover:no-underline"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-black underline hover:no-underline"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-black underline hover:no-underline"
          >
            Instagram
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-black underline hover:no-underline"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
