import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-char", { yPercent: 120, opacity: 0, stagger: 0.05, duration: 0.8 })
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.1");

      gsap.to(".orb-blue", { x: 60, y: -40, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-purple", { x: -50, y: 50, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    { scope: root },
  );

  const name = "이승찬";

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="glow-orb orb-blue w-[500px] h-[500px] bg-[var(--accent-blue)] -top-20 -left-20" />
      <div className="glow-orb orb-purple w-[450px] h-[450px] bg-[var(--accent-purple)] bottom-0 right-0" />

      <div className="relative z-10 text-center px-6">
        <p className="hero-sub text-[var(--text-muted)] tracking-[0.3em] uppercase mb-6">
          Frontend Developer
        </p>
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-black flex justify-center overflow-hidden">
          {name.split("").map((ch, i) => (
            <span key={i} className="hero-char inline-block text-gradient">
              {ch}
            </span>
          ))}
        </h1>
        <p className="hero-sub mt-6 text-lg md:text-xl text-[var(--text-muted)] max-w-xl mx-auto">
          사용자의 시선에서 흐름을 바라보고, 아이디어를 실제 경험으로 연결하는 사람
        </p>
        <a
          href="#projects"
          className="hero-cta inline-block mt-10 px-8 py-3 rounded-full glass hover:border-[var(--accent-glow)] transition-colors"
        >
          프로젝트 둘러보기
        </a>
      </div>

      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs tracking-widest">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-[var(--accent-blue)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
