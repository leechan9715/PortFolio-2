import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Intro({ onComplete }) {
  const logoRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const handleSkip = () => {
    sessionStorage.setItem("portfolio_visited", "true");
    onComplete();
  };

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("portfolio_visited", "true");
        onComplete();
      },
    });

    // 전체 재생 시간 2.5초 밸런스 연출 (마지막에 totalDuration으로 정확히 맞춤)
    // 1. 로고 등장: 0s ~ 0.6s 동안 scale 0.65에서 1.15로 묵직하게 확장되며 drop-shadow 네온 빛을 뿜으며 등장
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.65,
        filter: "drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
      },
      {
        opacity: 1,
        scale: 1.15,
        filter: "drop-shadow(0 0 40px rgba(139, 92, 246, 0.7))",
        duration: 0.6,
        ease: "power3.out",
      },
    );

    // 2. 대기: 0.6s ~ 1.2s 동안 로고가 우아하게 숨 쉬며 빛을 유지 (0.6초)

    // 3. 문 열림: 1.2s ~ 2.0s 동안 로고가 흩어지고, 좌우 패널이 웅장하고 묵직하게 양옆으로 슬라이드 아웃 (0.8초간)
    tl.to(
      logoRef.current,
      {
        opacity: 0,
        scale: 1.35,
        filter: "drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
        duration: 0.4,
        ease: "power2.in",
      },
      "+=0.6",
    )
      .to(
        leftPanelRef.current,
        { xPercent: -100, duration: 0.8, ease: "power4.inOut" },
        "-=0.25",
      )
      .to(
        rightPanelRef.current,
        { xPercent: 100, duration: 0.8, ease: "power4.inOut" },
        "-=0.8",
      );

    // 연출 비율은 유지한 채 전체 길이를 정확히 2.5초로 스케일
    tl.totalDuration(2.5);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-auto">
      {/* 왼쪽 문 패널 */}
      <div
        ref={leftPanelRef}
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(to right, #050b1a, #0f1832)",
          borderRight: "2px solid #8b5cf6",
          boxShadow:
            "8px 0 25px rgba(139, 92, 246, 0.45), 4px 0 12px rgba(52, 211, 153, 0.25)",
        }}
      />
      {/* 오른쪽 문 패널 */}
      <div
        ref={rightPanelRef}
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(to left, #050b1a, #0f1832)",
          borderLeft: "2px solid #8b5cf6",
          boxShadow:
            "-8px 0 25px rgba(139, 92, 246, 0.45), -4px 0 12px rgba(52, 211, 153, 0.25)",
        }}
      />

      {/* 중앙 로고 */}
      <div className="relative z-10 flex flex-col items-center select-none pointer-events-none">
        <h1
          ref={logoRef}
          className="text-gradient font-black text-center whitespace-nowrap tracking-[0.12em] text-[clamp(2rem,11vw,7rem)]"
        >
          SEUNGCHAN
        </h1>
      </div>

      {/* 우측 상단 SKIP 버튼 */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-8 z-20 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[var(--text-muted)] hover:text-white bg-white/5 border border-white/10 hover:border-[var(--accent-glow)] transition-all cursor-pointer"
        style={{ backdropFilter: "blur(4px)" }}
      >
        SKIP
      </button>
    </div>
  );
}
