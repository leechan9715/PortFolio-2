import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis, lenisInstance } from "./hooks/useLenis";
import { useFullPageSnap } from "./hooks/useFullPageSnap";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Intro } from "./components/Intro";

function App() {
  useLenis();
  useFullPageSnap();

  // 최초 1회 방문 여부 체크 (sessionStorage)
  const [isIntroActive, setIsIntroActive] = useState(() => {
    const visited = sessionStorage.getItem("portfolio_visited");
    return visited !== "true";
  });

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 인트로가 활성화되어 있는 동안 스크롤락
  useEffect(() => {
    if (isIntroActive) {
      if (lenisInstance) lenisInstance.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenisInstance) lenisInstance.start();
      document.body.style.overflow = "";
      // 본문 마운트 후 ScrollTrigger 위치값 일괄 재연산
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isIntroActive]);

  return (
    <main className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {isIntroActive && <Intro onComplete={() => setIsIntroActive(false)} />}
      <Navbar />
      <Hero active={!isIntroActive} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
