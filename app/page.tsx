import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ValueProposition from "@/components/ValueProposition";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-black relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#fafafa] opacity-100" />
      <Hero />
      <Introduction />
      <ValueProposition />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
