import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const barRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // 모바일 메뉴 열릴 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  const resumeUrl = encodeURI(import.meta.env.BASE_URL + "files/이승찬_이력서.pdf");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-[rgba(6,13,31,1)]"
          : scrolled
          ? "backdrop-blur-xl bg-[rgba(6,13,31,0.7)]"
          : "bg-transparent"
      }`}
    >
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 w-full h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
      />
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#hero" className="font-black text-2xl text-gradient tracking-tight" onClick={handleLinkClick}>SC.</a>

        {/* 데스크탑 링크 + 이력서 */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-10 text-base font-semibold text-slate-300">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-white transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(120deg, #8b5cf6, #34d399) border-box",
              border: "1px solid transparent",
              color: "#f1f5f9",
              boxShadow: "0 0 16px rgba(139,92,246,0.25)",
            }}
          >
            이력서
          </a>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="메뉴"
        >
          <span
            className={`block h-[2px] rounded-full bg-[var(--text-primary)] transition-all duration-300 origin-center ${
              mobileOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] rounded-full bg-[var(--text-primary)] transition-all duration-300 ${
              mobileOpen ? "opacity-0 w-0" : "w-5 opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] rounded-full bg-[var(--text-primary)] transition-all duration-300 origin-center ${
              mobileOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
            }`}
          />
        </button>
      </nav>

      {/* 모바일 드로어 */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(6, 13, 31, 0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={handleLinkClick}
              className={`text-3xl font-black text-slate-300 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 70}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
            className={`mt-2 px-7 py-3 rounded-full text-2xl font-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen ? `${links.length * 70}ms` : "0ms",
              background:
                "linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(120deg, #8b5cf6, #34d399) border-box",
              border: "1px solid transparent",
              color: "#f1f5f9",
              boxShadow: "0 0 20px rgba(139,92,246,0.3)",
            }}
          >
            이력서
          </a>
        </div>
      </div>
    </header>
  );
}
