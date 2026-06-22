import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Profile from "../assets/img/profile.png";

export function About() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.to(".about-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".about-line", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="about"
      ref={root}
      className="relative min-h-screen flex items-center py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden rounded-2xl glass">
          <img src={Profile} alt="profile" className="about-img w-full h-[480px] object-cover" />
        </div>
        <div>
          <h2 className="about-line text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
            About Me
          </h2>
          <h3 className="about-line text-4xl md:text-5xl font-bold mb-6">
            이승찬
            <span className="block text-[var(--text-muted)] text-2xl mt-2">Frontend Developer</span>
          </h3>
          <p className="about-line text-lg text-[var(--text-muted)] leading-relaxed">
            사용자 흐름을 이해하고, 직관적인 UI로 구현하는 프론트엔드 개발자입니다.
          </p>
          <div className="about-line flex gap-3 mt-8">
            {["React", "Next.js", "Vue"].map((t) => (
              <span key={t} className="px-4 py-2 rounded-full glass text-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
