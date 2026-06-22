import { useLenis } from "./hooks/useLenis";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Process } from "./sections/Process";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Certifications } from "./sections/Certifications";

function App() {
  useLenis();

  return (
    <main className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Hero />
      <About />
      <Process />
      <Skills />
      <Projects />
      <Certifications />
      <section id="contact" className="min-h-screen flex items-center justify-center">Contact</section>
    </main>
  );
}

export default App;
