import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LightIcons } from "../data/SubPage";
import { SkillBar } from "../components/SkillBar";

export function Skills() {
  const root = useRef(null);
  const [play, setPlay] = useState(false);

  useGSAP(
    () => {
      gsap.from(".skills-head", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 60%",
        once: true,
        onEnter: () => setPlay(true),
      });
    },
    { scope: root },
  );

  const left = LightIcons.slice(0, 10);
  const right = LightIcons.slice(10);

  return (
    <section id="skills" ref={root} className="relative py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="skills-head text-center text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
          Tech Stack
        </h2>
        <h3 className="skills-head text-center text-4xl font-bold mb-16">Skills</h3>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          <div className="flex flex-col gap-6">
            {left.map((s) => <SkillBar key={s.title} {...s} play={play} />)}
          </div>
          <div className="flex flex-col gap-6">
            {right.map((s) => <SkillBar key={s.title} {...s} play={play} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
