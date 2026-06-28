import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { lenisInstance } from "../hooks/useLenis";

export function ProjectModal({ project, onClose }) {
  const [pdfUrl, setPdfUrl] = useState(null);
  useEffect(() => {
    // 배경 페이지 스크롤 막기 (lenis 정지 + body 잠금 — 모바일 네이티브 터치 스크롤까지 차단)
    if (lenisInstance) lenisInstance.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 팝업 진입 애니메이션
    gsap.fromTo(
      ".modal-panel",
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
    );
    gsap.fromTo(
      ".modal-backdrop",
      { opacity: 0 },
      { opacity: 1, duration: 0.25 }
    );

    return () => {
      if (lenisInstance) lenisInstance.start();
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleClose = () => {
    gsap.to(".modal-panel", {
      opacity: 0, y: 30, scale: 0.97, duration: 0.25, ease: "power2.in",
      onComplete: onClose,
    });
    gsap.to(".modal-backdrop", { opacity: 0, duration: 0.25 });
  };

  // 백드롭 클릭 시 닫기
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const { title, src, info = [], links = [], textArea } = project;

  // info에서 기술 스택 추출
  const techInfo = info.find((i) => i.label === "기술");
  const techs = techInfo ? techInfo.value.split(/[·,]/).map((t) => t.trim()).filter(Boolean) : [];

  return (
    <>
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(6, 13, 31, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={handleBackdrop}
    >
      <div
        className="modal-panel modal-scroll relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
        data-lenis-prevent
        style={{
          background: "rgba(13, 23, 48, 0.95)",
          border: "1px solid rgba(139, 92, 246, 0.25)",
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.15)",
        }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          aria-label="닫기"
          className="modal-close-btn sticky top-4 left-full float-right mr-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-muted)]"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>

        {/* 썸네일 이미지 */}
        <div className="relative w-full h-56 md:h-72 overflow-hidden rounded-t-2xl">
          <img src={src} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1730] via-transparent to-transparent" />
          <h2 className="absolute bottom-5 left-7 text-3xl md:text-4xl font-black text-white">{title}</h2>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-6">
          {/* 프로젝트 정보 테이블 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex gap-3 items-start py-2 border-b border-white/5"
              >
                <span className="shrink-0 text-xs tracking-widest text-[var(--accent-purple)] uppercase w-14">
                  {item.label}
                </span>
                <span className="text-sm text-[var(--text-primary)] leading-relaxed">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* 기술 스택 뱃지 */}
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs border border-[var(--accent-purple)]/40 text-[var(--accent-purple)] bg-[var(--accent-purple)]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* 프로젝트 설명 */}
          {textArea && (
            <div
              className="text-sm text-[var(--text-muted)] leading-[1.9] p-5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              dangerouslySetInnerHTML={{ __html: textArea }}
            />
          )}

          {/* 링크 버튼 */}
          {links.length > 0 && (
            <div>
              <p className="text-xs tracking-widest text-[var(--text-muted)] uppercase mb-3">Links</p>
              <div className="flex flex-wrap gap-2">
                {links.map((l, i) =>
                  l.pdf ? (
                    <button
                      key={i}
                      onClick={() => setPdfUrl(encodeURI(import.meta.env.BASE_URL + l.pdf))}
                      className="px-4 py-2 rounded-full text-xs font-medium border border-[var(--accent-purple)]/40 text-[var(--accent-purple)] bg-[var(--accent-purple)]/10 hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] transition-all cursor-pointer"
                    >
                      {l.label}
                    </button>
                  ) : l.link ? (
                    <a
                      key={i}
                      href={l.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-medium border border-[#26324f] text-[var(--text-muted)] hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] transition-all"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-xs font-medium border border-white/10 text-white/30 cursor-not-allowed"
                    >
                      {l.label}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

      {pdfUrl && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(6, 13, 31, 0.92)", backdropFilter: "blur(10px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setPdfUrl(null);
          }}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "rgba(13, 23, 48, 0.97)",
              border: "1px solid rgba(139, 92, 246, 0.25)",
              boxShadow: "0 0 60px rgba(139, 92, 246, 0.2)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0">
              <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">기획안</span>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#26324f] text-[var(--text-muted)] hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] transition-all"
                >
                  새 탭으로 열기
                </a>
                <button
                  onClick={() => setPdfUrl(null)}
                  aria-label="닫기"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={pdfUrl}
              title="기획안 미리보기"
              className="w-full flex-1 bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
