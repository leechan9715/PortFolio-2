import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Email from "../assets/img/email.png";
import Card from "./Card";

const buttonClasses = {
  button:
    "text-gray-500 cursor-pointer [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border) max-md:px-8 max-md:py-1",
  buttonText: "font-bold text-2xl max-xl:text-xl max-md:text-lg",
};

export const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setIsSending(true);
      setMessage("");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );
      setMessage("메일이 성공적으로 전송되었습니다.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("메일 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="h-screen flex items-center justify-center ">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-2xl w-full"
      >
        <div className="flex items-center gap-5">
          <img
            className="p-5 bg-(--border) rounded-full"
            src={Email}
            alt="email"
          />
          <div className="flex flex-col gap-y-1">
            <h2 className="text-2xl font-bold text-white">문의하기</h2>

            <h3 className="text-sm font-light leading-relaxed text-gray-400">
              <span className="block text-lg font-bold text-white">
                채용 제안, 프로젝트 제안, 협업 문의
              </span>
              함께할 기회나 궁금한 점이 있다면 편하게 남겨주세요.
              <br />
              빠른 연락이 필요하신 경우{" "}
              <span className="font-bold text-white">전화</span>로 문의해
              주세요.
            </h3>
          </div>
        </div>
        <input
          type="text"
          name="user_email"
          placeholder="example@email.com"
          required
          className="rounded-xl border border-(--border) hover:border-(--hover-border) bg-transparent px-4 py-3 text-white focus:border-(--hover-border) focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="문의 내용을 입력해주세요"
          required
          className="min-h-40 rounded-xl border border-(--border) hover:border-(--hover-border)
          focus:outline-none
          focus:border-(--hover-border) bg-transparent px-4 py-3 text-white"
        />
        <button
          type="submit"
          className={`${buttonClasses.button}  flex self-center`}
        >
          <p className={`${buttonClasses.buttonText} w-full `}>
            {isSending ? "전송 중..." : "문의하기"}
          </p>
        </button>
        {message && <p className="text-sm text-white">{message}</p>}
      </form>
    </Card>
  );
};
