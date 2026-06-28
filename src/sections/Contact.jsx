import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";
import { ContactData } from "../data/SubPage";

export function Contact() {
  const root = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState({
    success: true,
    title: "",
    message: "",
  });

  useGSAP(
    () => {
      gsap.from(".contact-el", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root },
  );

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const currentTime = new Date().toLocaleString("ko-KR", {
      timeZone: "Asia/Seoul",
    });

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      message: form.message,
      time: currentTime,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setModalStatus({
          success: true,
          title: "전송 성공",
          message: "메시지가 성공적으로 전송되었습니다!\n빠른 시일 내에 입력하신 메일로 답변드리겠습니다.",
        });
        setShowModal(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Send Error:", error);
        setModalStatus({
          success: false,
          title: "전송 실패",
          message: "메시지 전송 중 에러가 발생했습니다.\n네트워크 상태를 확인하고 다시 시도해 주세요.",
        });
        setShowModal(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const inputClass =
    "w-full px-5 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-glow)] focus:border-[var(--accent-glow)] focus:shadow-[0_0_20px_rgba(96,165,250,0.2)] outline-none transition-all";

  return (
    <section
      id="contact"
      ref={root}
      className="relative py-24 px-6 md:px-20 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="contact-el text-center text-sm tracking-[0.3em] text-[var(--accent-glow)] uppercase mb-4">
          Get In Touch
        </h2>
        <h3 className="contact-el text-center text-4xl font-bold mb-16">
          Contact
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            {ContactData.map((c) => (
              <div
                key={c.title}
                className="contact-el glass rounded-2xl p-5 flex items-center gap-4"
              >
                <img
                  src={c.src}
                  alt={c.title}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <p className="text-sm text-[var(--text-muted)]">{c.title}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium hover:text-[var(--accent-glow)]"
                    >
                      {c.url}
                    </a>
                  ) : (
                    <p className="font-medium">{c.url}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="contact-el flex flex-col gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름"
              required
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="회신받을 이메일"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="문의내용"
              rows={5}
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={isSending}
              className={`relative overflow-hidden px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all ${
                isSending ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isSending ? "보내는 중..." : "메시지 보내기"}
            </button>
          </form>
        </div>
      </div>

      {/* 커스텀 알림 모달 */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          style={{
            animation: "fadeIn 0.25s ease-out forwards",
          }}
          onClick={() => setShowModal(false)}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleUp {
              from { opacity: 0; transform: scale(0.95) translateY(10px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
          <div
            className="w-full max-w-sm glass rounded-2xl p-6 flex flex-col items-center text-center"
            style={{
              background: "rgba(13, 23, 48, 0.96)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.25)",
              animation: "scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{
                background: modalStatus.success
                  ? "linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(52, 211, 153, 0.05))"
                  : "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05))",
                border: modalStatus.success
                  ? "1px solid rgba(52, 211, 153, 0.4)"
                  : "1px solid rgba(239, 68, 68, 0.4)",
              }}
            >
              {modalStatus.success ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
            </div>

            <h4 className="text-xl font-bold mb-2 text-white">{modalStatus.title}</h4>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 whitespace-pre-line">
              {modalStatus.message}
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer"
              style={{
                background: "linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(120deg, #8b5cf6, #34d399) border-box",
                border: "1px solid transparent",
                color: "#f1f5f9",
                boxShadow: "0 0 16px rgba(139, 92, 246, 0.25)",
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
