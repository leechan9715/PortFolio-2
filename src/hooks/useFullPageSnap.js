import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisInstance } from "./useLenis";

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export function useFullPageSnap() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      let isAnimating = false;
      let animTimer = null;

      const getSectionTops = () =>
        SECTION_IDS
          .map((id) => ({ id, el: document.getElementById(id) }))
          .filter((s) => s.el)
          .map((s) => ({
            id: s.id,
            top: Math.round(s.el.getBoundingClientRect().top + window.scrollY),
          }));

      const getProjectsBounds = () => {
        const st = ScrollTrigger.getById("projects-st");
        if (!st) return null;
        // 핀 스크럽 구간(st.start~st.end)뿐 아니라, 핀 해제 후 projects 섹션
        // (h-screen)이 화면 밖으로 빠져나가는 구간까지 하나의 통과 영역으로 둔다.
        // end를 st.end(핀 끝)로 두면 그 사이(예: 7804~8704)가 스냅 관리 구간이 되어
        // 위로 스크롤 시 projects를 건너뛰고 skills로 튀는 버그가 발생한다.
        // 다음 섹션(contact) top을 end로 사용해 projects 전체를 통과 영역으로 만든다.
        const pIdx = SECTION_IDS.indexOf("projects");
        const nextId = SECTION_IDS[pIdx + 1];
        const nextEl = nextId ? document.getElementById(nextId) : null;
        const end = nextEl
          ? Math.round(nextEl.getBoundingClientRect().top + window.scrollY)
          : Math.round(st.end);
        return { start: Math.round(st.start), end };
      };

      const getCurrentIdx = (tops) => {
        const scrollY = window.scrollY;
        let idx = 0;
        tops.forEach((s, i) => { if (scrollY + 2 >= s.top) idx = i; });
        return idx;
      };

      const goTo = (tops, idx) => {
        const lenis = lenisInstance;
        if (!lenis || idx < 0 || idx >= tops.length) return;
        isAnimating = true;
        // 안전장치: scrollTo가 도중에 중단돼 onComplete가 호출되지 않더라도
        // isAnimating이 영구히 true로 남아 스냅이 죽는 것을 막는다.
        clearTimeout(animTimer);
        animTimer = setTimeout(() => { isAnimating = false; }, 1100);
        lenis.scrollTo(tops[idx].top, {
          duration: 0.9,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          onComplete: () => { clearTimeout(animTimer); isAnimating = false; },
        });
      };

      const onWheel = (e) => {
        // 스냅 애니메이션 중에는 모든 wheel을 삼킨다. 통과(pass-through)로 흘리면
        // Lenis가 그 wheel로 programmatic scrollTo를 중단시켜 onComplete가 안 불리고
        // isAnimating이 stuck true가 돼 이후 모든 스냅이 죽는다.
        if (isAnimating) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return;
        }

        const scrollY = window.scrollY;
        const dir = e.deltaY > 0 ? 1 : -1;
        const bounds = getProjectsBounds();

        if (bounds) {
          if (scrollY >= bounds.start && scrollY < bounds.end) {
            // Projects 통과(가로 스크럽) 구간 → Lenis가 처리.
            // 예외: 맨 위 경계에서 위로 → 직접 이전 섹션(skills)으로 스냅.
            if (scrollY <= bounds.start + 2 && dir < 0) {
              e.preventDefault();
              e.stopImmediatePropagation();
              if (Math.abs(e.deltaY) < 3) return;
              const tops = getSectionTops();
              const pIdx = tops.findIndex((s) => s.id === "projects");
              if (pIdx > 0) goTo(tops, pIdx - 1);
            }
            return;
          }

          // Lenis 스크럽이 bounds.start 아래로 오버슈트한 채 위로 굴리면
          // getCurrentIdx 가 skills 를 반환해 dir-1 = about 으로 건너뛴다.
          // skills.top ~ bounds.start 사이(갭)에서 위로 굴릴 때는
          // getCurrentIdx 를 쓰지 않고 projects 앞 섹션(skills)으로 직접 스냅.
          if (dir < 0 && scrollY < bounds.start) {
            const tops = getSectionTops();
            const pIdx = tops.findIndex((s) => s.id === "projects");
            if (pIdx > 0 && scrollY > tops[pIdx - 1].top) {
              e.preventDefault();
              e.stopImmediatePropagation();
              if (Math.abs(e.deltaY) < 3) return;
              goTo(tops, pIdx - 1);
              return;
            }
          }
        }

        // 스냅 구간: capture + stopImmediatePropagation 으로 Lenis 중복 처리 차단.
        e.preventDefault();
        e.stopImmediatePropagation();
        if (Math.abs(e.deltaY) < 3) return;

        const tops = getSectionTops();
        goTo(tops, getCurrentIdx(tops) + dir);
      };

      window.addEventListener("wheel", onWheel, { passive: false, capture: true });
      return () => {
        clearTimeout(animTimer);
        window.removeEventListener("wheel", onWheel, { capture: true });
      };
    });

    return () => mm.revert();
  }, []);
}
