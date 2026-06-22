import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const skills = ["React", "Next.js", "Vue", "JavaScript", "Tailwind CSS"];

export function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-bar", { scaleY: 0, transformOrigin: "top", duration: 0.6 })
        .from(".hero-label", { x: -20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-char", { yPercent: 120, opacity: 0, stagger: 0.08, duration: 0.8 }, "-=0.2")
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-divider", { scaleX: 0, transformOrigin: "left", duration: 0.6 }, "-=0.3")
        .from(".hero-chip", { y: 16, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.2")
        .from(".hero-orbit", { opacity: 0, scale: 0.85, duration: 1, ease: "power2.out" }, "-=1");

      gsap.to(".orbit-dash-1", { rotate: 360, duration: 40, repeat: -1, ease: "none", transformOrigin: "center" });
      gsap.to(".orbit-dash-2", { rotate: -360, duration: 55, repeat: -1, ease: "none", transformOrigin: "center" });
    },
    { scope: root },
  );

  const name = "이승찬";

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-20"
    >
      {/* 우측 동심원 오빗 그래픽 */}
      <div className="hero-orbit pointer-events-none absolute right-[-18%] top-1/2 -translate-y-1/2 w-[820px] h-[820px] max-xl:w-[620px] max-xl:h-[620px] max-md:right-[-40%] max-md:opacity-40">
        <svg viewBox="0 0 820 820" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e2a4a" stopOpacity="0.55" />
              <stop offset="70%" stopColor="#0d1730" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#060d1f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="410" cy="410" r="400" fill="url(#orbitGlow)" />
          <circle cx="410" cy="410" r="300" stroke="#1e2a4a" strokeWidth="1" />
          <circle cx="410" cy="410" r="210" stroke="#1e2a4a" strokeWidth="1" />
          <circle cx="410" cy="410" r="120" stroke="#26324f" strokeWidth="1.5" />
          <circle
            className="orbit-dash-1"
            cx="410"
            cy="410"
            r="370"
            stroke="url(#orbitGrad)"
            strokeWidth="2"
            strokeDasharray="3 14"
            strokeLinecap="round"
          />
          <circle
            className="orbit-dash-2"
            cx="410"
            cy="410"
            r="260"
            stroke="url(#orbitGrad)"
            strokeWidth="1.5"
            strokeDasharray="2 18"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* 좌측 컨텐츠 */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* 세로 바 + 라벨 + 이름 */}
        <div className="flex items-stretch gap-5">
          <span
            className="hero-bar w-[3px] rounded-full shrink-0"
            style={{ background: "linear-gradient(to bottom, #8b5cf6, #34d399)" }}
          />
          <div className="flex flex-col justify-center">
            <div className="hero-label flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]" />
              <span className="text-[var(--text-muted)] text-sm tracking-[0.35em] uppercase">
                Frontend Developer
              </span>
            </div>
            <h1 className="flex overflow-hidden text-[clamp(3.5rem,9vw,7rem)] font-black leading-[1.05]">
              {name.split("").map((ch, i) => (
                <span
                  key={i}
                  className="hero-char inline-block mr-2 md:mr-5"
                  style={{
                    background:
                      "linear-gradient(100deg, #a78bfa 0%, #818cf8 40%, #34d399 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {ch}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* 서브텍스트 */}
        <p className="hero-sub text-lg md:text-xl text-[var(--text-muted)] mt-5 ml-8">
          사용자 흐름을 이해하고, 직관적인 UI로 구현하는 개발자
        </p>

        {/* 구분선 */}
        <div className="hero-divider h-px w-full max-w-xl ml-8 mt-7 origin-left bg-gradient-to-r from-[#26324f] via-[#26324f] to-transparent" />

        {/* 스킬 칩 */}
        <div className="flex flex-wrap gap-3 mt-6 ml-8">
          {skills.map((s) => (
            <span
              key={s}
              className="hero-chip px-4 py-2 rounded-full text-sm border border-[#26324f] bg-[var(--bg-glass)] backdrop-blur-md hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs tracking-widest">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-[var(--accent-purple)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
