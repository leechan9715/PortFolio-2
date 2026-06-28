import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Profile from "../assets/img/profile-2.png";

const INFO_ITEMS = [
  { label: "생년월일", value: "1997. 01. 05" }, // ← 원하는 날짜로 변경해주세요
  { label: "이메일", value: "iseungchan809@gmail.com" },
  { label: "병역", value: "육군 병장 만기 전역" },
];

const CERTIFICATIONS = [
  { title: "운전면허 1종 보통", year: "2016", issuer: "도로교통공단" },
  {
    title: "웹디자인개발기능사",
    year: "2026 06",
    issuer: "한국산업인력공단",
  },
];

export function About() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 데스크탑 패럴랙스 효과 (1025px 이상)
      mm.add("(min-width: 1025px)", () => {
        gsap.to(".about-img", {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.from(".about-line", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
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
      className="relative py-24 px-6 md:px-20 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* 왼쪽: 프로필 이미지 */}
        <div className="flex items-center justify-center">
          <img
            src={Profile}
            alt="profile"
            className="about-img w-[140px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* 오른쪽: 텍스트 정보 */}
        <div className="flex flex-col gap-10">
          {/* 이름 & 직함 */}
          <div>
            <h2 className="about-line text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
              About Me
            </h2>
            <h3 className="about-line text-4xl md:text-5xl font-bold mb-3">
              이승찬
              <span className="block text-[var(--text-muted)] text-2xl mt-2">
                Frontend Developer
              </span>
            </h3>
            <p className="about-line text-base text-[var(--text-muted)] leading-relaxed mt-4 [word-break:keep-all]">
              빛나는 디테일과 유연한 움직임으로 직관적인 흐름을 설계하고, 사용자
              중심의 견고한 기술을 화면으로 구현하는 프론트엔드 개발자
              이승찬입니다.
            </p>
          </div>

          {/* 기본 정보 */}
          <div className="about-line">
            <p className="text-xs tracking-[0.3em] text-[var(--accent-purple)] uppercase mb-4">
              Info
            </p>
            <div className="flex flex-col gap-3">
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 py-3 border-b border-white/5"
                >
                  <span className="text-xs tracking-widest text-[var(--text-muted)] uppercase w-20 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm text-[var(--text-primary)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 자격증 */}
          <div className="about-line">
            <p className="text-xs tracking-[0.3em] text-[var(--accent-purple)] uppercase mb-4">
              Certifications
            </p>
            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #34d399)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {cert.title}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 스킬 칩 */}
          <div className="about-line flex flex-wrap gap-3">
            {["React", "Next.js", "Vue", "Tailwind CSS"].map((t) => (
              <span key={t} className="px-4 py-2 rounded-full glass text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
