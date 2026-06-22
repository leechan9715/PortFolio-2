import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { certifications } from "../data/Main";

export function Certifications() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cert-card", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root },
  );

  return (
    <section id="certifications" ref={root} className="relative py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
          Credentials
        </h2>
        <h3 className="text-center text-4xl font-bold mb-16">자격증</h3>
        <div className="flex flex-col gap-5">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card glass rounded-2xl p-6 flex items-center gap-5">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] font-bold shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="text-lg font-semibold">{cert.title}</p>
                <p className="text-[var(--text-muted)] text-sm">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
