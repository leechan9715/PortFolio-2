import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const skills = ["React", "Next.js", "Vue", "JavaScript", "Tailwind CSS"];

export function Hero({ active }) {
  const root = useRef(null);
  const tlRef = useRef(null);

  // 마운트 시 타임라인을 정지(paused: true) 상태로 미리 생성하여 초기 스타일(from)을 셋업합니다.
  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      tl.from(".hero-orbit", { opacity: 0, scale: 0.9, duration: 1.2, ease: "power2.out" })
        .from(".hero-label", { y: -16, opacity: 0, duration: 0.5 }, "-=0.6")
        .from(".hero-char", { yPercent: 110, opacity: 0, stagger: 0.1, duration: 0.75 }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, stagger: 0.12, duration: 0.55 }, "-=0.2")
        .from(".hero-divider", { scaleX: 0, transformOrigin: "center", duration: 0.5 }, "-=0.2")
        .from(".hero-chip", { y: 14, opacity: 0, stagger: 0.07, duration: 0.45 }, "-=0.15");

      gsap.to(".orbit-right", { rotate: 360, duration: 60, repeat: -1, ease: "none", transformOrigin: "center" });
      gsap.to(".orbit-left", { rotate: -360, duration: 75, repeat: -1, ease: "none", transformOrigin: "center" });

      tlRef.current = tl;
    },
    { scope: root }
  );

  // 인트로가 완료(active === true)되면 비로소 타임라인을 재생합니다.
  useEffect(() => {
    if (active && tlRef.current) {
      tlRef.current.play();
    }
  }, [active]);

  const name = "이 승 찬";

  return (
    <section
      id="hero"
      ref={root}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* 배경 오빗 그래픽 */}
      <div className="hero-orbit pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900" fill="none">
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a2540" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#0d1730" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#060d1f" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 중앙 은은한 글로우 */}
          <circle cx="720" cy="430" r="360" fill="url(#orbitGlow)" />

          {/* 우측 큰 점선 오빗 (총 7개의 동심원) */}
          <g className="orbit-right" style={{ transformOrigin: "1180px 360px" }}>
            {/* Ring 7 (최외곽 점선) */}
            <circle cx="1180" cy="360" r="300" stroke="url(#orbitGrad)" strokeWidth="1.5"
              strokeDasharray="4 20" strokeLinecap="round" opacity="0.6" />
            {/* Ring 6 */}
            <circle cx="1180" cy="360" r="255" stroke="url(#orbitGrad)" strokeWidth="1.5"
              strokeDasharray="2 14" strokeLinecap="round" opacity="0.45" />
            {/* Ring 5 */}
            <circle cx="1180" cy="360" r="210" stroke="url(#orbitGrad)" strokeWidth="1.2"
              strokeDasharray="1 10" strokeLinecap="round" opacity="0.35" />
            {/* Ring 4 (실선) */}
            <circle cx="1180" cy="360" r="165" stroke="#1e2a4a" strokeWidth="1" opacity="0.45" />
            {/* Ring 3 (실선) */}
            <circle cx="1180" cy="360" r="120" stroke="#1e2a4a" strokeWidth="1" opacity="0.4" />
            {/* Ring 2 (실선) */}
            <circle cx="1180" cy="360" r="75" stroke="#1e2a4a" strokeWidth="1" opacity="0.35" />
            {/* Ring 1 (최내곽 실선) */}
            <circle cx="1180" cy="360" r="30" stroke="#1e2a4a" strokeWidth="1" opacity="0.3" />
          </g>

          {/* 좌하단 큰 점선 오빗 (우측 오빗 디자인 그대로 복사) */}
          <g className="orbit-left" style={{ transformOrigin: "240px 840px" }}>
            {/* Ring 7 (최외곽 점선) */}
            <circle cx="240" cy="840" r="300" stroke="url(#orbitGrad)" strokeWidth="1.5"
              strokeDasharray="4 20" strokeLinecap="round" opacity="0.6" />
            {/* Ring 6 */}
            <circle cx="240" cy="840" r="255" stroke="url(#orbitGrad)" strokeWidth="1.5"
              strokeDasharray="2 14" strokeLinecap="round" opacity="0.45" />
            {/* Ring 5 */}
            <circle cx="240" cy="840" r="210" stroke="url(#orbitGrad)" strokeWidth="1.2"
              strokeDasharray="1 10" strokeLinecap="round" opacity="0.35" />
            {/* Ring 4 (실선) */}
            <circle cx="240" cy="840" r="165" stroke="#1e2a4a" strokeWidth="1" opacity="0.45" />
            {/* Ring 3 (실선) */}
            <circle cx="240" cy="840" r="120" stroke="#1e2a4a" strokeWidth="1" opacity="0.4" />
            {/* Ring 2 (실선) */}
            <circle cx="240" cy="840" r="75" stroke="#1e2a4a" strokeWidth="1" opacity="0.35" />
            {/* Ring 1 (최내곽 실선) */}
            <circle cx="240" cy="840" r="30" stroke="#1e2a4a" strokeWidth="1" opacity="0.3" />
          </g>
        </svg>
      </div>

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 라벨 */}
        <div className="hero-label flex items-center gap-3 mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--accent-purple)]" />
          <span className="text-[var(--text-muted)] text-xs tracking-[0.45em] uppercase">
            Frontend Developer
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--accent-green)]" />
        </div>

        {/* 이름 */}
        <h1 className="flex overflow-hidden text-[clamp(4rem,11vw,8rem)] font-black leading-[1] tracking-[0.15em]">
          {name.split("").map((ch, i) => (
            <span
              key={i}
              className="hero-char inline-block"
              style={{
                background: "linear-gradient(120deg, #a78bfa 0%, #818cf8 45%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {ch}
            </span>
          ))}
        </h1>

        {/* 구분선 */}
        <div className="hero-divider h-px w-48 mt-8 mb-6 bg-gradient-to-r from-transparent via-[#26324f] to-transparent" />

        {/* 서브텍스트 */}
        <p className="hero-sub text-base md:text-lg text-[var(--text-muted)] leading-relaxed [word-break:keep-all]">
          빛나는 디테일로 화면 속에서 직관적인 흐름을 그려냅니다.
        </p>
        <p className="hero-sub text-base md:text-lg text-[var(--text-muted)] leading-relaxed mt-1.5 [word-break:keep-all]">
          사용자 중심의 설계 위에 유연한 움직임과 견고한 기술을 더하는 개발자
        </p>

        {/* 스킬 칩 */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs tracking-widest">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-[var(--accent-purple)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
