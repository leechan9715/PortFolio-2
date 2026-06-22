export function ProjectCard({ src, title, desc, link, skills, index, total }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="project-card group relative w-[80vw] md:w-[42vw] max-md:w-full shrink-0 glass rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <span className="absolute top-5 right-6 text-sm font-mono text-[var(--text-muted)]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="p-7">
        <h4 className="text-2xl font-bold mb-2">{title}</h4>
        <p className="text-[var(--text-muted)] mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full text-xs glass">{s}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
