import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ValueProposition from "@/components/ValueProposition";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
