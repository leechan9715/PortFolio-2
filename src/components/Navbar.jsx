import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const links = [
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const barRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true },
    });
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[rgba(6,13,31,0.7)]" : "bg-transparent"
      }`}
    >
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 w-full h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
      />
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#hero" className="font-black text-lg text-gradient">SC.</a>
        <ul className="hidden md:flex gap-8 text-sm text-[var(--text-muted)]">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-[var(--text-primary)] transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
