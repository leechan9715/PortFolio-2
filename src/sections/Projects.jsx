import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { teamProjectInfo, personalProjectInfo } from "../data/ProjectData";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { lenisInstance } from "../hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { key: "all", label: "전체" },
  { key: "team", label: "팀 프로젝트" },
  { key: "personal", label: "개인 프로젝트" },
];

const allProjects = [
  ...teamProjectInfo.map((p) => ({ ...p, type: "team" })),
  ...personalProjectInfo.map((p) => ({ ...p, type: "personal" })),
];

function getSkills(info = []) {
  const tech = info.find((i) => i.label === "기술");
  if (!tech) return [];
  return tech.value.split(/[·,]/).map((t) => t.trim()).filter(Boolean);
}

// 1025px 미만 = 스와이퍼 모드 (태블릿 1024px 이하 포함)
const SWIPER_BREAKPOINT = 1025;

export function Projects() {
  const root = useRef(null);
  const track = useRef(null);
  const sectionTopRef = useRef(0);

  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < SWIPER_BREAKPOINT);

  const filtered =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab);

  // ─── 뷰포트 감지 ─────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < SWIPER_BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ─── 마운트 시 섹션 위치 캐시 ────────────────────────────────
  useEffect(() => {
    if (root.current) sectionTopRef.current = root.current.offsetTop;
  }, []);

  // ─── GSAP ScrollTrigger 설정 (데스크탑 1025px+) ───────────────
  useEffect(() => {
    if (isMobile) return;

    let ctx;
    const initST = () => {
      ctx = gsap.context(() => {
        const trackEl = track.current;
        const rootEl = root.current;
        if (!trackEl || !rootEl) return;

        const getScrollLen = () => trackEl.scrollWidth - window.innerWidth;

        gsap.to(trackEl, {
          x: () => -getScrollLen(),
          ease: "none",
          scrollTrigger: {
            id: "projects-st",
            trigger: rootEl,
            start: "top top",
            end: () => `+=${getScrollLen()}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, root);
    };

    // React의 렌더링 완료 이후 정확한 너비를 갖도록 지연 실행
    let rafId = requestAnimationFrame(() => {
      initST();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, [activeTab, isMobile]);

  // ─── 탭 전환 핸들러 ──────────────────────────────────────────
  const handleTabChange = (key) => {
    if (key === activeTab) return;

    // 모바일/태블릿: 스크롤 강제 이동 없이 탭만 전환
    if (window.innerWidth < SWIPER_BREAKPOINT) {
      setActiveTab(key);
      return;
    }

    // 데스크탑 모드: 탭 전환 시 강제 스크롤 및 재생성
    const st = ScrollTrigger.getById("projects-st");
    const targetTop = st ? st.start : sectionTopRef.current;
    
    if (lenisInstance) lenisInstance.stop();
    
    document.documentElement.scrollTop = targetTop;
    if (lenisInstance) lenisInstance.scrollTo(targetTop, { immediate: true });
    
    setActiveTab(key);
    
    requestAnimationFrame(() => {
      if (lenisInstance) lenisInstance.start();
      ScrollTrigger.refresh();
    });
  };

  // ─── 헤더 + 탭 공통 ─────────────────────────────────────────
  const Header = (
    <div className="px-6 md:px-16 lg:px-20 mb-8">
      <h2 className="text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-2">
        Selected Work
      </h2>
      <h3 className="text-4xl font-bold mb-6">Projects</h3>
      <div className="flex gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            id={`tab-${tab.key}`}
            onClick={() => handleTabChange(tab.key)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.key
                ? "text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
            style={
              activeTab === tab.key
                ? {
                    background: "linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(120deg, #8b5cf6, #34d399) border-box",
                    border: "1px solid transparent",
                    boxShadow: "0 0 16px rgba(139,92,246,0.25)",
                  }
                : {
                    background: "rgba(13,23,48,0.5)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    backdropFilter: "blur(8px)",
                  }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section id="projects" ref={root} className="relative overflow-hidden lg:overflow-hidden">

        {/* ── 모바일 / 태블릿: Swiper ── */}
        {isMobile && (
          <div className="py-20">
            {Header}
            <Swiper
              key={activeTab} // 탭 전환 시 Swiper 인스턴스를 완전히 리셋하여 크기 및 인덱스 계산 꼬임 방지
              modules={[Pagination]}
              slidesPerView={1.15}
              spaceBetween={16}
              slidesOffsetBefore={24}
              slidesOffsetAfter={24}
              pagination={{ clickable: true }}
              grabCursor={true}
              breakpoints={{
                480: { slidesPerView: 1.4, spaceBetween: 16, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
                640: { slidesPerView: 1.8, spaceBetween: 20, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
                768: { slidesPerView: 2.3, spaceBetween: 24, slidesOffsetBefore: 40, slidesOffsetAfter: 40 },
                960: { slidesPerView: 2.8, spaceBetween: 24, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
              }}
              style={{ paddingBottom: "48px" }}
              className="project-swiper !overflow-visible"
            >
              {filtered.map((p) => (
                <SwiperSlide key={`${activeTab}-${p.title}`}>
                  <ProjectCard
                    src={p.src}
                    title={p.title}
                    desc={p.summary}
                    skills={getSkills(p.info)}
                    onClick={() => setSelectedProject(p)}
                    swipeCard
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* ── 데스크탑: 기존 가로스크롤 핀 ── */}
        {!isMobile && (
          <div className="h-screen flex flex-col justify-center">
            {Header}
            <div
              ref={track}
              className="flex gap-8 px-20 w-max"
            >
              {filtered.map((p) => (
                <ProjectCard
                  key={`${activeTab}-${p.title}`}
                  src={p.src}
                  title={p.title}
                  desc={p.summary}
                  skills={getSkills(p.info)}
                  onClick={() => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
