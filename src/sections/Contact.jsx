import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ContactData } from "../data/SubPage";

export function Contact() {
  const root = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useGSAP(
    () => {
      gsap.from(".contact-el", {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root },
  );

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`메시지 전송: ${form.name} (${form.email})`);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-5 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-glow)] focus:border-[var(--accent-glow)] focus:shadow-[0_0_20px_rgba(96,165,250,0.2)] outline-none transition-all";

  return (
    <section id="contact" ref={root} className="relative py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="contact-el text-center text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
          Get In Touch
        </h2>
        <h3 className="contact-el text-center text-4xl font-bold mb-16">Contact</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            {ContactData.map((c) => (
              <div key={c.title} className="contact-el glass rounded-2xl p-5 flex items-center gap-4">
                <img src={c.src} alt={c.title} className="w-10 h-10 object-contain" />
                <div>
                  <p className="text-sm text-[var(--text-muted)]">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="font-medium hover:text-[var(--accent-glow)]">{c.url}</a>
                  ) : (
                    <p className="font-medium">{c.url}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="contact-el flex flex-col gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="이름" required className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="이메일" required className={inputClass} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="메시지" rows={5} required className={inputClass} />
            <button
              type="submit"
              className="relative overflow-hidden px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-shadow"
            >
              메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
