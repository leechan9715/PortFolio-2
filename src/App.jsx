import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./hooks/useLenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Process } from "./sections/Process";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";

function App() {
  useLenis();

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}

export default App;
