export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          Looking forward to it,
        </p>
        <p className="text-sm text-gray-500 mb-6">
          © Your Name 👋
        </p>
        <div className="flex flex-wrap gap-6">
          <a 
            href="mailto:your.email@example.com" 
            className="text-sm font-medium text-black hover:underline"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-black hover:underline"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-black hover:underline"
          >
            Instagram
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-black hover:underline"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

