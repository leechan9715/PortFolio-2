import { useEffect, useRef } from "react";

export const FilterChips = ({ skills, activeSkill, onSelectSkill }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // If scrollable horizontally, scroll and prevent default page scroll
      if (el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="relative w-full mb-4">
      {/* Subtle fade effect on the left and right sides to indicate horizontal scrolling */}
      <div className="pointer-events-none absolute -left-1 top-0 bottom-0 z-10 w-6 bg-gradient-to-r from-[#071a2a]/90 to-transparent" />
      <div className="pointer-events-none absolute -right-1 top-0 bottom-0 z-10 w-6 bg-gradient-to-l from-[#071a2a]/90 to-transparent" />

      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-1.5 overflow-x-auto scroll-smooth py-1 px-1 select-none"
      >
        {skills.map((skill) => {
          const isActive = activeSkill === skill;
          return (
            <button
              key={skill}
              onClick={() => onSelectSkill(skill)}
              className={`
                relative shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-wide
                transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
                ${
                  isActive
                    ? "bg-(image:--text-color) text-white border border-(--hover-border) shadow-[0_0_12px_rgba(0,140,255,0.35)]"
                    : "bg-white/5 border border-(--border) text-[#a4a4a4] hover:text-white hover:bg-white/10 hover:border-(--hover-border)"
                }
              `}
            >
              {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
};
