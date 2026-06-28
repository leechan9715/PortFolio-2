export function ProjectCard({ src, title, desc, skills, onClick, swipeCard }) {
  return (
    <button
      onClick={onClick}
      className={`project-card group relative glass rounded-2xl overflow-hidden flex flex-col text-left cursor-pointer ${
        swipeCard ? "w-full" : "w-[80vw] md:w-[42vw] max-md:w-full shrink-0"
      }`}
    >
      <div className={`relative overflow-hidden w-full ${swipeCard ? "aspect-[16/10]" : "h-[50vh] min-h-[300px]"}`}>
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* 호버 시 "자세히 보기" 힌트 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: "rgba(6,13,31,0.45)", backdropFilter: "blur(2px)" }}
        >
          <span
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide"
            style={{
              background: "linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(120deg, #8b5cf6, #34d399) border-box",
              border: "1px solid transparent",
              color: "#f1f5f9",
              boxShadow: "0 0 28px rgba(139,92,246,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="url(#dg)" strokeWidth="1.2"/>
              <path d="M5.5 7h3M7 5.5l1.5 1.5L7 8.5" stroke="url(#dg)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="dg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8b5cf6"/><stop offset="1" stopColor="#34d399"/>
                </linearGradient>
              </defs>
            </svg>
            자세히 보기
          </span>
        </div>
      </div>
      <div className={swipeCard ? "p-4 md:p-5" : "p-7"}>
        <h4 className={`font-bold mb-1 ${swipeCard ? "text-base md:text-lg mb-1.5" : "text-2xl mb-2"}`}>{title}</h4>
        <p className={`text-[var(--text-muted)] ${swipeCard ? "text-xs mb-3 line-clamp-2" : "mb-4"}`}>{desc}</p>
        <div className="flex flex-wrap gap-1">
          {skills?.slice(0, swipeCard ? 4 : undefined).map((s) => (
            <span key={s} className={`rounded-full glass ${swipeCard ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
