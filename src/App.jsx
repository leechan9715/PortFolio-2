import { useLenis } from "./hooks/useLenis";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

function App() {
  useLenis();

  return (
    <main className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Hero />
      <About />
      <section id="process" className="min-h-screen flex items-center justify-center">Process</section>
      <section id="skills" className="min-h-screen flex items-center justify-center">Skills</section>
      <section id="projects" className="min-h-screen flex items-center justify-center">Projects</section>
      <section id="certifications" className="min-h-screen flex items-center justify-center">Certifications</section>
      <section id="contact" className="min-h-screen flex items-center justify-center">Contact</section>
    </main>
  );
}

export default App;
