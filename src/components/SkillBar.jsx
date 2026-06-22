import { useEffect, useRef, useState } from "react";

export function SkillBar({ icon, title, percent, play }) {
  const target = Math.min(100, Math.max(0, Number(percent) || 0));
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!play) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [play, target]);

  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>{title}</span>
          <span className="text-[var(--text-muted)]">{value}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] transition-[width] duration-100"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
