import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ProcessList } from "../data/Main";

export function Process() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".process-card", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root },
  );

  return (
    <section id="process" ref={root} className="relative py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
          How I Work
        </h2>
        <h3 className="text-center text-4xl font-bold mb-16">운영 프로세스</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ProcessList.map((item, i) => (
            <div
              key={item.title}
              className="process-card glass rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-[var(--accent-glow)] transition-all duration-300"
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-5 object-contain" />
              <span className="text-[var(--accent-glow)] text-sm font-mono">0{i + 1}</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">{item.title}</h4>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
