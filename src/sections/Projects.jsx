import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/Main";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      if (window.innerWidth < 768) return; // 모바일은 세로 스크롤 유지
      const trackEl = track.current;
      const scrollLen = trackEl.scrollWidth - window.innerWidth;

      gsap.to(trackEl, {
        x: -scrollLen,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${scrollLen}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="projects" ref={root} className="relative md:overflow-hidden">
      <div className="md:h-screen flex flex-col justify-center max-md:py-24">
        <div className="px-6 md:px-20 mb-8">
          <h2 className="text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-2">
            Selected Work
          </h2>
          <h3 className="text-4xl font-bold">Projects</h3>
        </div>
        <div ref={track} className="flex gap-8 px-6 md:px-20 w-max max-md:flex-col max-md:w-full max-md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
