import { useEffect, useState } from "react";

export const SkillStat = ({ icon, title, percent, shouldFill = false }) => {
  const targetPercent = Math.min(100, Math.max(0, Number(percent) || 0));
  const [displayPercent, setDisplayPercent] = useState(1);

  useEffect(() => {
    if (!shouldFill) {
      return;
    }

    let animationFrameId = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextPercent = Math.round(1 + (targetPercent - 1) * easedProgress);

      setDisplayPercent(nextPercent);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldFill, targetPercent]);

  return (
    <>
      <div className="flex items-center gap-5">
        <img className="" src={icon} alt="skills" width={50} height={50} />
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex justify-between">
            <p>{title}</p>
            <p className="text-right">{displayPercent}/100</p>
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#1F4360] overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-[#3FFFD8] to-[#4EA8FF]"
              style={{ width: `${displayPercent}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
