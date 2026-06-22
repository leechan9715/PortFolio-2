# 포트폴리오 리뉴얼 2 - 프로젝트 전체 소스 코드

이 문서는 프로젝트의 전체 소스 코드 파일을 하나의 Markdown 파일로 병합한 문서입니다.

---

## 📄 .gitignore

```
# Logs
.env
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

.vercel

```

---

## 📄 eslint.config.js

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])

```

---

## 📄 index.html

```html
<!doctype html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>이승찬 포트폴리오</title>

  <!-- SEO -->
  <meta name="description" content="사용자 흐름을 이해하고 직관적인 UI로 구현하는 프론트엔드 개발자 이승찬의 포트폴리오입니다." />
  <meta name="keywords" content="프론트엔드 개발자, 이승찬, React, Next.js, Vue, TypeScript, 포트폴리오" />
  <meta name="author" content="이승찬" />

  <!-- Open Graph (카카오톡, 슬랙 등 링크 공유) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://portfolio-seung.vercel.app/" />
  <meta property="og:title" content="이승찬 포트폴리오" />
  <meta property="og:description" content="사용자 흐름을 이해하고 직관적인 UI로 구현하는 프론트엔드 개발자 이승찬의 포트폴리오입니다." />
  <meta property="og:image" content="https://portfolio-seung.vercel.app/og-image.png" />
  <meta property="og:locale" content="ko_KR" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="이승찬 포트폴리오" />
  <meta name="twitter:description" content="사용자 흐름을 이해하고 직관적인 UI로 구현하는 프론트엔드 개발자 이승찬의 포트폴리오입니다." />
  <meta name="twitter:image" content="https://portfolio-seung.vercel.app/og-image.png" />

  <!-- 모바일 브라우저 상단바 색상 -->
  <meta name="theme-color" content="#0a0a0a" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

---

## 📄 package.json

```json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@reduxjs/toolkit": "^2.11.2",
    "@tailwindcss/vite": "^4.3.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-pdf": "^10.4.1",
    "react-redux": "^9.2.0",
    "swiper": "^12.1.4",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.29.0",
    "@eslint/js": "^10.0.1",
    "@rolldown/plugin-babel": "^0.2.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "babel-plugin-react-compiler": "^1.0.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}

```

---

## 📄 src/App.css

```css

```

---

## 📄 src/App.jsx

```jsx
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Main } from "./comopents/Main";
import { SubPage } from "./comopents/SubPage";

function App() {
  const { isMainHidden, isTransitioning } = useSelector((state) => state.ui);

  const absoluteBg = useRef(null);

  useEffect(() => {
    const element = absoluteBg.current;
    if (!element) return;

    element.style.transition = "opacity 0.5s ease";

    document.body.classList.toggle("bg-2-active", isTransitioning);

    if (isTransitioning) {
      element.style.opacity = "0";

      const timer = setTimeout(() => {
        element.style.display = "none";
      }, 500);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("bg-2-active");
      };
    }

    element.style.display = "";
    void element.offsetWidth;
    element.style.opacity = "1";

    return () => {
      document.body.classList.remove("bg-2-active");
    };
  }, [isTransitioning]);

  return (
    <div
      className={`relative min-h-screen flex px-6.25 max-md:px-2.25 ${isMainHidden ? "py-0" : "py-2.5"}`}
    >
      <div
        className="absolute inset-0 z-0 [background:var(--full-absolute-bg)]"
        ref={absoluteBg}
        style={{ opacity: 1 }}
      />
      {!isMainHidden && <Main />}
      {isMainHidden && <SubPage />}
    </div>
  );
}

export default App;

```

---

## 📄 src/comopents/Card.jsx

```jsx
import { forwardRef } from "react";

export const Card = forwardRef(function Card(
  { children, className, style, onClick },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`border border-(--border) bg-(--dark-gradient) px-7.5 py-4 rounded-[10px] hover:border-(--hover-border) duration-300 cursor-pointer ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

export const Circle = ({ className }) => {
  return <div className={`h-1 w-1 rounded-full bg-[#008cff] ${className}`} />;
};

export const CardTitleBlue = ({ children = "프로필", style }) => {
  return (
    <div className="flex items-center gap-2 mb-4.25" style={style}>
      <div className="h-2 w-2 rounded-full bg-[#78D6FF]" />
      <h3 className="text-lg font-semibold ">{children}</h3>
    </div>
  );
};
export const CardTitleGreen = ({ children = "프로필", style }) => {
  return (
    <div className="flex items-center gap-2 mb-4.25" style={style}>
      <div className="h-2 w-2 rounded-full bg-[#18c688]" />
      <h3 className="text-lg font-semibold ">{children}</h3>
    </div>
  );
};

export default Card;

```

---

## 📄 src/comopents/Contact.jsx

```jsx
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

```

---

## 📄 src/comopents/ContactMe.jsx

```jsx
import Card from "./Card";

export const ContactMe = ({ src, title, url, href }) => {
  return (
    <Card style={{ padding: "11px 7px" }} className="bg-(--deepdark-gradient)">
      <div className="flex flx-col items-center gap-4">
        <img
          className="max-w-1/6 w-full max-md:max-w-1/8"
          src={src}
          alt="Github"
        />
        <a href={href} target="_blank" rel="noreferrer">
          <p className="text-sm font-semibold ">{title}</p>
          <p className="text-xs text-[#a4a4a4]">{url}</p>
        </a>
      </div>
    </Card>
  );
};

export const ContactMe2 = ({ onClick, title, src, url }) => {
  return (
    <a
      href={url}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick(event);
        }
      }}
    >
      <Card
        style={{ padding: "11px 7px" }}
        className="bg-(--deepdark-gradient)"
      >
        <div className="flex items-center gap-4">
          <img
            className="max-w-1/6 w-full max-md:max-w-1/8"
            src={src}
            alt={title}
          />
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-[#a4a4a4]">Download PDF</p>
          </div>
        </div>
      </Card>
    </a>
  );
};

```

---

## 📄 src/comopents/Main.jsx

```jsx
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMain, startMainTransition } from "../store/uiSlice";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
/* 컴포넌트 */
import Card, { CardTitleBlue, CardTitleGreen, Circle } from "./Card";
import { ContactMe } from "./ContactMe";
import { ProjectList } from "./ProjectList";
/* 이미지 , 아이콘 */
import Porfile from "../assets/img/profile.png";
import Call from "../assets/img/call.png";
import Email from "../assets/img/email.png";

/* 데이터 목록 */
import {
  certClasses,
  contactClasses,
  heroClasses,
  layoutClasses,
  profileClasses,
  projectClasses,
  skillClasses,
} from "../data/MainClass";
import { certifications, darkIcons, projects } from "../data/Main";

export const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [floatingIcon, setFloatingIcon] = useState(null);
  const [floatingIconPosition, setFloatingIconPosition] = useState({
    x: 0,
    y: 0,
  });
  const dispatch = useDispatch();

  const floatingIconTarget = useRef({ x: 0, y: 0 });
  const floatingIconCurrent = useRef({ x: 0, y: 0 });
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const content5 = useRef(null);
  const content6 = useRef(null);
  const wrap = useRef(null);

  // 프로젝트 둘러보기 버튼 눌럿을때 함수
  const handleClick = () => {
    dispatch(startMainTransition());
    setIsClicked(true);
  };
  // 브라우저 팝업 띄우기 함수

  const popupMute = (e, link, title) => {
    if (title !== "MUTE") return;
    e.preventDefault();

    const popup = window.open(
      link,
      "_blank",
      "width=500,height=1080,left=100,top=0",
    );

    if (popup) {
      popup.focus();
    } else {
      window.location.assign(link);
    }
  };

  useEffect(() => {
    if (!floatingIcon) return;

    const handlePointerMove = (event) => {
      floatingIconTarget.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    let animationFrameId;

    const followPointer = () => {
      const current = floatingIconCurrent.current;
      const target = floatingIconTarget.current;

      const nextPosition = {
        x: current.x + (target.x - current.x) * 0.16,
        y: current.y + (target.y - current.y) * 0.16,
      };

      floatingIconCurrent.current = nextPosition;
      setFloatingIconPosition(nextPosition);
      animationFrameId = requestAnimationFrame(followPointer);
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrameId = requestAnimationFrame(followPointer);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [floatingIcon]);

  useEffect(() => {
    const hideTimers = [];

    const animateContent = (element, transformValue) => {
      if (!element) return;

      element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      element.style.willChange = "transform, opacity";

      if (isClicked) {
        element.style.transform = transformValue;
        element.style.opacity = "0";
        element.style.pointerEvents = "none";

        const timer = setTimeout(() => {
          element.style.display = "none";
        }, 500);

        hideTimers.push(timer);
        return;
      }

      element.style.display = "";
      element.style.pointerEvents = "auto";
      void element.offsetWidth;
      element.style.transform = "translate(0, 0)";
      element.style.opacity = "1";
    };

    const animateWrapBorder = (element) => {
      if (!element) return;

      element.style.transition = "border-color 1s ease";
      element.style.borderColor = isClicked ? "transparent" : "var(--border)";

      if (isClicked) {
        const timer = setTimeout(() => {
          dispatch(hideMain());
        }, 1000);

        hideTimers.push(timer);
      }
    };

    animateContent(content1.current, "translateX(-120%)");
    animateContent(content2.current, "translateX(120%)");
    animateContent(content3.current, "translateX(-120%)");
    animateContent(content4.current, "translateX(120%)");
    animateContent(content5.current, "translateY(120%)");
    animateContent(content6.current, "translateY(-120%)");
    animateWrapBorder(wrap.current);

    return () => {
      hideTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClicked, dispatch]);
  return (
    <>
      <section
        className={layoutClasses.section}
        ref={wrap}
        style={{ borderColor: "var(--border)" }}
      >
        {/* 프로필 , 프로젝트리스트 , Hero */}
        <div className={layoutClasses.topRow}>
          {/* 프로필 */}
          <Card
            ref={content1}
            className={profileClasses.card}
            style={{ transform: "translateX(-120%)", opacity: 0 }}
          >
            <CardTitleGreen>프로필</CardTitleGreen>
            <div className={profileClasses.body}>
              <img
                src={Porfile}
                alt="profile"
                className={profileClasses.image}
              />
              <h3 className="text-2xl font-semibold">이승찬</h3>
              <p className={profileClasses.role}>Frontend Developer</p>
              <p className={profileClasses.desc}>
                사용자 흐름을 이해하고,
                <br />
                직관적인 UI로 구현하는프론트엔드
                <br />
                개발자입니다.
              </p>
              <div className={profileClasses.tags}>
                <p className={profileClasses.tag}>React</p>
                <p className={profileClasses.tag}>Next.js</p>
                <p className={profileClasses.tag}>Vue</p>
              </div>
            </div>
          </Card>
          {/* Hero Section */}
          <div
            className={heroClasses.wrap}
            ref={content6}
            style={{ transform: "translateY(-120%)", opacity: 0 }}
          >
            <div className={heroClasses.meta}>
              <div className={heroClasses.metaItem}>
                <span className={heroClasses.metaText}>Frontend Developer</span>
                <Circle className={heroClasses.circle} />
              </div>
              <div className={heroClasses.metaItem}>
                <span className={heroClasses.metaText}>React</span>
                <Circle className={heroClasses.circle} />
              </div>
              <div className={heroClasses.metaItem}>
                <span className={heroClasses.metaText}>Next.js</span>
                <Circle className={heroClasses.circle} />
              </div>
              <div className={heroClasses.metaItem}>
                <span className={heroClasses.metaText}>TypeScript</span>
              </div>
            </div>
            <h1 className={heroClasses.name}>이승찬</h1>
            <h2 className={heroClasses.line}>
              사용자의 시선에서 흐름을
              <span className={heroClasses.accent}>바라</span>
              보고
            </h2>
            <h2 className={`${heroClasses.line} mb-8`}>
              아이디어를 실제
              <span className={heroClasses.accent}>경험</span>
              으로 연결하는사람
            </h2>
            <div>
              <button className={heroClasses.button} onClick={handleClick}>
                <p className={heroClasses.buttonText}>프로젝트 둘러보기</p>
              </button>
            </div>
          </div>
          {/* 프로젝트 리스트 */}
          <Card
            className={`${projectClasses.card} shrink-0 `}
            ref={content2}
            style={{ transform: "translateX(120%)", opacity: 0 }}
          >
            <CardTitleGreen>프로젝트</CardTitleGreen>
            <div
              className={`${projectClasses.list} project-list-scroll max-h-100 overflow-y-auto overflow-x-hidden overscroll-contain pr-2 `}
            >
              {projects.map((item, index) => {
                return (
                  <ProjectList
                    onClick={(e) => popupMute(e, item.link, item.title)}
                    href={item.link}
                    key={index}
                    src={item.src}
                    title={item.title}
                    desc={item.desc}
                    skills={item.skills}
                  />
                );
              })}
            </div>
          </Card>
        </div>
        {/* Contact me , 운영 프로세스  */}
        <div className={layoutClasses.bottomRow}>
          {/* contact me card */}
          <Card
            className={contactClasses.card}
            ref={content3}
            style={{ transform: "translateX(-120%)", opacity: 0 }}
          >
            <CardTitleGreen>CONTACT ME</CardTitleGreen>
            <div className={contactClasses.list}>
              <ContactMe src={Call} title="Phone" url="010-8686-9869" />
              <ContactMe
                src={Email}
                title="Email"
                url="iseungchan809@gmail.com"
              />
            </div>
          </Card>
          {/* 자격증 card */}
          <Card
            className={certClasses.card}
            ref={content4}
            style={{ transform: "translateX(120%)", opacity: 0 }}
          >
            <CardTitleBlue>자격증</CardTitleBlue>
            <div className={certClasses.list}>
              {certifications.map((cert, index) => (
                <div key={index} className={certClasses.item}>
                  <span className={certClasses.badge}>{index + 1}</span>
                  <div>
                    <p className={certClasses.name}>{cert.title}</p>
                    <p className={certClasses.issuer}>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        {/* Skill Icons 목록 */}
        <div
          className={skillClasses.wrap}
          ref={content5}
          style={{ transform: "translateY(120%)", opacity: 0 }}
        >
          <Card className={skillClasses.panel}>
            <Swiper
              className="skill-icon-swiper"
              modules={[FreeMode]}
              freeMode
              grabCursor
              slidesPerView="auto"
              spaceBetween={39}
            >
              {darkIcons.map((icon, index) => (
                <SwiperSlide
                  className="skill-icon-slide"
                  key={index}
                  style={{ width: "80px" }}
                >
                  <Card
                    className={skillClasses.tile}
                    style={{
                      padding: "15px",
                    }}
                  >
                    <img
                      className={skillClasses.icon}
                      onClick={(event) => {
                        event.stopPropagation();
                        const startPosition = {
                          x: event.clientX,
                          y: event.clientY,
                        };
                        floatingIconTarget.current = startPosition;
                        floatingIconCurrent.current = startPosition;
                        setFloatingIconPosition(startPosition);
                        setFloatingIcon((currentIcon) =>
                          currentIcon === icon ? null : icon,
                        );
                      }}
                      src={icon}
                      alt="skill icon"
                    />
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </div>
      </section>
      {floatingIcon && (
        <img
          className={skillClasses.floatingIcon}
          src={floatingIcon}
          alt="selected skill icon"
          style={{
            left: floatingIconPosition.x,
            top: floatingIconPosition.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </>
  );
};

```

---

## 📄 src/comopents/OperationProcessIcon.jsx

```jsx
import Card from "./Card";

export const OperationProcessIcon = ({ src, title, desc }) => {
  return (
    <div className="flex gap-3 ">
      <Card style={{ padding: "8px" }}>
        <img className="max-w-6 h-6 w-full" src={src} alt="Icon1" />
      </Card>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

```

---

## 📄 src/comopents/Pdf.jsx

```jsx
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const DEFAULT_PDF_FILE = "/files/이승찬_이력서.pdf";

const getFileName = (file) => {
  if (!file || typeof file !== "string") return "PDF 파일";

  return decodeURIComponent(file.split("/").pop());
};

export const Pdf = ({
  isOpen,
  setIsOpen,
  title = "PDF 미리보기",
  file = DEFAULT_PDF_FILE,
  fileName = getFileName(file),
  pageWidth = 1024,
}) => {
  const [pdfInfo, setPdfInfo] = useState({ file: null, numPages: 0 });
  const numPages = pdfInfo.file === file ? pdfInfo.numPages : 0;

  const closePdf = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 cursor-pointer "
          onClick={closePdf}
        >
          <div
            className="relative w-full max-w-full h-[85vh] rounded-2xl border border-[#1F4360] bg-[#071A2A] overflow-hidden shadow-2xl "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#1F4360] px-5 py-4">
              <div>
                <h2 className="text-white font-bold">{title}</h2>
                <p className="mt-1 text-xs text-gray-400">{fileName}</p>
              </div>

              <button
                onClick={closePdf}
                className="text-gray-400 hover:text-white text-xl transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div
              className="
                    h-[calc(100%-57px)] overflow-y-auto overflow-x-hidden pb-20
                    project-list-scroll
                  "
            >
              <Document
                file={file}
                onLoadSuccess={({ numPages }) => setPdfInfo({ file, numPages })}
                loading={
                  <p className="text-center text-gray-400">
                    PDF를 불러오는 중입니다...
                  </p>
                }
                error={
                  <p className="text-center text-red-400">
                    PDF를 불러오지 못했습니다.
                  </p>
                }
              >
                <div className="flex flex-col items-center gap-6">
                  {Array.from({ length: numPages || 0 }, (_, index) => (
                    <div
                      key={`page_${index + 1}`}
                      className="overflow-hidden rounded-xl bg-white shadow-xl"
                    >
                      <Page
                        pageNumber={index + 1}
                        width={pageWidth}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </div>
                  ))}
                </div>
              </Document>
            </div>
            <a
              href={file}
              download={fileName}
              className="absolute right-5 bottom-5 rounded-full border border-[#4EA8FF] bg-[#071A2A]/95 px-5 py-2 text-sm font-semibold text-[#D8EEFF] shadow-xl shadow-black/30 transition-colors hover:border-[#8DD3FF] hover:bg-[#0B263D] hover:text-white"
            >
              PDF 다운로드
            </a>
          </div>
        </div>
      )}
    </>
  );
};

```

---

## 📄 src/comopents/ProjectDetail.jsx

```jsx
import Card from "./Card";
import { ProjectLink } from "./ProjectLink";
const TextWithBreak = ({ text, className }) => {
  if (!text) return null;

  const lines = text.split("<br/>");

  return (
    <p className={className}>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index !== lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
};
export const ProjectDetail = ({
  className,
  itemsClassName,
  thumbnail,
  title,
  desc,
  items,
  links,
  onClick,
  textArea,
}) => {
  return (
    <Card
      className={`flex min-w-0 items-stretch gap-6 overflow-hidden ${className}`}
      style={{ padding: 0, border: "none" }}
    >
      <div className={`max-w-1/3 overflow-y-auto ${itemsClassName}`}>
        <img
          className="w-full h-full rounded-2xl border-2 border-(--border) bg-white/95 "
          src={thumbnail}
          alt={thumbnail}
        />
      </div>
      <div
        className={`project-list-scroll flex max-h-screen max-w-2/3 w-full flex-1 flex-col overflow-y-auto p-8 gap-4 ${itemsClassName} `}
      >
        <div className="flex justify-between items-center-safe">
          <h2 className=" text-4xl font-bold tracking-wide text-white">
            {title}
          </h2>
          <div className="grid grid-cols-6 gap-2 text-center">
            {links?.map((item, index) => (
              <ProjectLink
                key={index}
                onClick={(event) => onClick?.(item, event)}
                label={item.label}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <p className=" text-lg leading-8 text-gray-200">{desc}</p>

        <ul className=" grid gap-2 text-sm text-gray-300">
          {items.map((item, index) => (
            <li key={index}>
              <p className="flex gap-2">
                <span className="min-w-20 text-[#4EA8FF]">{item.label}</span>
                <span>{item.value}</span>
              </p>
            </li>
          ))}
        </ul>
        <TextWithBreak
          text={textArea}
          className="text-base leading-7 text-gray-300"
        />
      </div>
    </Card>
  );
};

```

---

## 📄 src/comopents/ProjectLink.jsx

```jsx
export const ProjectLink = ({ link, label, onClick }) => {
  return (
    <a
      onClick={onClick}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="border border-[#1F4360] px-3 py-1 text-xs text-[#a4a4a4] hover:border-(--hover-border)"
    >
      <p>{label}</p>
    </a>
  );
};

```

---

## 📄 src/comopents/ProjectList.jsx

```jsx
import Card from "./Card";
import { ProjectLink } from "./ProjectLink";

export const ProjectList = ({
  onClick,
  title,
  desc,
  href,
  src,
  skills = [],
}) => {
  return (
    <Card
      className="flex  gap-2 flex-col max-md:flex-col"
      style={{ padding: 15 }}
    >
      <a target="_blank" rel="noreferrer" href={href} onClick={onClick}>
        <img className=" w-full" src={src} alt="ProjectImg" />
      </a>
      <div className="flex flex-col items-start gap-1.5 max-md:items-center">
        <h3 className="font-bold text-xs">{title}</h3>
        <h4 className="text-xs text-[#a4a4a4]">{desc}</h4>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((item, index) => (
            <ProjectLink key={index} label={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};

```

---

## 📄 src/comopents/SkillStat.jsx

```jsx
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

```

---

## 📄 src/comopents/SubPage.jsx

```jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// 데이터
import { ContactData, LightIcons } from "../data/SubPage";
// redux 상태
import { showMain, startMainReturn } from "../store/uiSlice";
// 프로필 전신 이미지
import ProfileImg from "../assets/img/profile-2.png";
// 프로젝트 썸네일 이미지
import Mute from "../assets/img/mute.png";
import Goreon from "../assets/img/goreon.png";
import BnbNetworks from "../assets/img/bnbnetworks.png";
import BnbNetworksReact from "../assets/img/bnbnetworks-react.png";
import Shop from "../assets/img/shop.png";
import Netflix from "../assets/img/netflix.png";
import PortFolio from "../assets/img/portfolio-2.png";
import LoopNote from "../assets/img/LoopNote.png";
import WorkLog from "../assets/img/WorkLog.png";

import Kakao from "../assets/img/kakao.png";
// 아이콘
import PDF from "../assets/img/pdf.png";
// 컴포넌트
import Card from "./Card";
import { SkillStat } from "./SkillStat";
import { ProjectDetail } from "./ProjectDetail";
import { Contact } from "./Contact";
import { ContactMe, ContactMe2 } from "./ContactMe";
// 스와이퍼 모듈 cSS
import "swiper/css";
import "swiper/css/pagination";
import { Pdf } from "./Pdf";
import { personalProjectInfo, teamProjectInfo } from "../data/ProjectData";
import { Pagination } from "swiper/modules";

const contactClasses = {
  card: " w-full",
  list: "grid grid-cols-2 gap-5.5 ",
};
// PDF
const resumePdf = {
  title: "이력서 미리보기",
  fileName: "이승찬_이력서.pdf",
  file: "/files/이승찬_이력서.pdf",
};
const goreonPdf = {
  title: "GOREON 기획안",
  fileName: "Goreon_기획안.pdf",
  file: "/files/Goreon_기획안.pdf",
};

const mutePdf = {
  title: "MUTE 기획안",
  fileName: "MUTE_기획안.pdf",
  file: "/files/MUTE_기획안.pdf",
};

export const SubPage = () => {
  const dispatch = useDispatch();
  const { isMainHidden } = useSelector((state) => state.ui);
  const [shouldFillSkills, setShouldFillSkills] = useState(false);
  const [isActive, setIsActive] = useState("projects");
  const [isSelectProject, setIsSelectProject] = useState("all");
  const [isLeaving, setIsLeaving] = useState(false);
  // PDF
  const [isOepn, setIsOpen] = useState(false);
  const [goreonOpen, setGoreonOpen] = useState(false);
  const [muteOpen, setMuteOpen] = useState(false);

  function tabButton(tabName) {
    setIsActive(tabName);
  }

  function handleBackClick() {
    setIsLeaving(true);
    setShouldFillSkills(false);
    dispatch(startMainReturn());
  }

  function openMuteLiveDemo(item, event) {
    if (item.label !== "LiveDemo" || !item.link) return;

    event.preventDefault();

    const popup = window.open(
      item.link,
      "_blank",
      "width=500,height=868,left=100,top=0",
    );

    if (popup) {
      popup.focus();
      return;
    }

    window.location.assign(item.link);
  }

  return (
    <section className="relative z-10 w-full text-white flex gap-5">
      <Pdf isOpen={isOepn} setIsOpen={setIsOpen} {...resumePdf} />
      <Pdf isOpen={goreonOpen} setIsOpen={setGoreonOpen} {...goreonPdf} />
      <Pdf isOpen={muteOpen} setIsOpen={setMuteOpen} {...mutePdf} />
      {/* 프로필  */}
      <div
        className={`${isLeaving ? "section-profile-leave" : "section-profile-enter"} max-w-1/3 w-full flex items-center justify-center `}
      >
        <div className="flex justify-center flex-col items-center  ">
          <img
            src={ProfileImg}
            className="text-center max-w-44.5 max-h-153.25 "
            alt="profile"
          />
          <Card className={`${contactClasses.card} relative -bottom-10`}>
            <div className={contactClasses.list}>
              {ContactData.map((item, index) => (
                <ContactMe
                  src={item.src}
                  key={index}
                  title={item.title}
                  url={item.url}
                  href={item.href}
                />
              ))}
              <ContactMe2
                src={PDF}
                title="이력서"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </Card>
        </div>
      </div>
      {/* SKILLS,PROJECT,CONTACT  */}
      <div
        className={`${isLeaving ? "section-content-leave" : "section-content-enter"} max-w-2/3 w-full flex justify-center overflow-hidden`}
        onAnimationEnd={(event) => {
          if (event.animationName === "sectionContentEnter") {
            setShouldFillSkills(true);
          }

          if (event.animationName === "sectionContentLeave") {
            setTimeout(() => {
              dispatch(showMain());
            }, 700);
          }
        }}
      >
        <div className="w-full max-h-12">
          <Card
            style={{ border: "none", padding: 0 }}
            className="flex gap-3 flex-col rounded-t-none"
          >
            {/* 탭버튼 */}
            <div className="flex justify-between">
              <div className="flex h-full w-full ">
                <Card
                  className="flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none rounded-br-none"
                  onClick={() => tabButton("projects")}
                >
                  <h2
                    className={
                      isActive === "projects" ? "text-white" : "text-gray-400"
                    }
                  >
                    PROJECTS
                  </h2>
                </Card>
                <Card
                  className="
                  flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none border-l-0 rounded-b-none hover:border-l
                  "
                  onClick={() => tabButton("skills")}
                >
                  <h2
                    className={
                      isActive === "skills" ? "text-white" : "text-gray-400"
                    }
                  >
                    SKILLS
                  </h2>
                </Card>
                <Card
                  className="flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none border-l-0 rounded-bl-none hover:border-l"
                  onClick={() => tabButton("contact")}
                >
                  <h2
                    className={
                      isActive === "contact" ? "text-white" : "text-gray-400"
                    }
                  >
                    CONTACT
                  </h2>
                </Card>
              </div>
              <Card
                className="group/btn flex items-center gap-2.5 mcursor-pointer rounded-t-none"
                onClick={handleBackClick}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group/btn text-gray-400 group-hover/btn:text-[#ffffff]"
                >
                  <path
                    d="M11 7H3M3 7L7 3M3 7L7 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-400 group-hover/btn:text-[#ffffff]">
                  BACK
                </span>
              </Card>
            </div>
            {/* 스킬목록 */}
            {isActive === "skills" && (
              <Card
                className="grid grid-cols-2 gap-12 h-screen"
                style={{ padding: 40 }}
              >
                <div className=" flex flex-col gap-5">
                  {LightIcons.slice(0, 10).map((icon, index) => (
                    <SkillStat
                      key={`${isMainHidden}-${index}`}
                      percent={icon.percent}
                      title={icon.title}
                      icon={icon.icon}
                      shouldFill={shouldFillSkills}
                    />
                  ))}
                </div>
                <div className=" flex flex-col gap-5">
                  {LightIcons.slice(10, 19).map((icon, index) => (
                    <SkillStat
                      key={`${isMainHidden}-${index + 8}`}
                      percent={icon.percent}
                      title={icon.title}
                      icon={icon.icon}
                      shouldFill={shouldFillSkills}
                    />
                  ))}
                </div>
              </Card>
            )}
            {/* 프로젝트 목록 */}
            {isActive === "projects" && (
              <Card
                style={{ padding: 40 }}
                className={`flex flex-col gap-5 h-screen `}
              >
                {/* 프로젝트 탭 버튼 */}
                <ul className="flex gap-5">
                  <li className="group/tab-all">
                    <Card
                      style={{ padding: "8px 60px", borderRadius: "20px" }}
                      onClick={() => setIsSelectProject("all")}
                      className={`text-gray-400 group-hover/tab-all:text-white ${isSelectProject === "all" ? "text-white border-(--hover-border)" : ""}`}
                    >
                      <p>전체</p>
                    </Card>
                  </li>
                  <li className={"group/tab-gain"}>
                    <Card
                      style={{ padding: "8px 60px", borderRadius: "20px" }}
                      onClick={() => setIsSelectProject("personal")}
                      className={`text-gray-400 group-hover/tab-gain:text-white ${isSelectProject === "personal" ? "text-white border-(--hover-border)" : ""}`}
                    >
                      <p>개인프로젝트</p>
                    </Card>
                  </li>
                  <li className={"group/tab-team"}>
                    <Card
                      style={{ padding: "8px 60px", borderRadius: "20px" }}
                      onClick={() => setIsSelectProject("team")}
                      className={`text-gray-400 group-hover/tab-team:text-white ${isSelectProject === "team" ? "text-white border-(--hover-border)" : ""} `}
                    >
                      <p>팀 프로젝트</p>
                    </Card>
                  </li>
                </ul>
                {/* 프로젝트 목록 슬라이드 */}
                <div className="w-full min-w-0 overflow-hidden ">
                  <Swiper
                    className="project-swiper w-full"
                    slidesPerView={1}
                    spaceBetween={24}
                    grabCursor
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                  >
                    {(isSelectProject === "all" ||
                      isSelectProject === "team") && (
                      <React.Fragment key="team-projects">
                        <SwiperSlide key="team-mute">
                          <ProjectDetail
                            thumbnail={Mute}
                            title="MUTE"
                            items={teamProjectInfo[0].info}
                            links={teamProjectInfo[0].links}
                            textArea={teamProjectInfo[0].textArea}
                            onClick={(item, event) => {
                              openMuteLiveDemo(item, event);
                              if (item.label !== "기획안") return;
                              event.preventDefault();
                              setMuteOpen(true);
                            }}
                          />
                        </SwiperSlide>
                        <SwiperSlide key="team-goreon">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Goreon}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="GOREON"
                              items={teamProjectInfo[1].info}
                              links={teamProjectInfo[1].links}
                              textArea={teamProjectInfo[1].textArea}
                              onClick={(item, event) => {
                                if (item.label !== "기획안") return;
                                event.preventDefault();
                                setGoreonOpen(true);
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      </React.Fragment>
                    )}
                    {(isSelectProject === "all" ||
                      isSelectProject === "personal") && (
                      <React.Fragment key="personal">
                        <SwiperSlide key="personal-loopnote">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={LoopNote}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="LoopNote"
                              desc="초등학생의 오답과 막힘을 '10분 회복 미션'으로 전환하는 AI 학습 플랫폼"
                              items={personalProjectInfo[6].info}
                              links={personalProjectInfo[6].links}
                              textArea={personalProjectInfo[6].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-portfolio">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={PortFolio}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="PORTFOLIO"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={personalProjectInfo[5].info}
                              links={personalProjectInfo[5].links}
                              textArea={personalProjectInfo[5].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-kakao">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Kakao}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="Kakao Renewal"
                              items={personalProjectInfo[4].info}
                              links={personalProjectInfo[4].links}
                              textArea={personalProjectInfo[4].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-netflix">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Netflix}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="Netflix"
                              items={personalProjectInfo[3].info}
                              links={personalProjectInfo[3].links}
                              textArea={personalProjectInfo[3].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-shop">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Shop}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="SHOP"
                              items={personalProjectInfo[2].info}
                              links={personalProjectInfo[2].links}
                              textArea={personalProjectInfo[2].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-bnb-html">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={BnbNetworks}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="BnbNetWork"
                              items={personalProjectInfo[0].info}
                              links={personalProjectInfo[0].links}
                              textArea={personalProjectInfo[0].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-bnb-react">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={BnbNetworksReact}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="BnbNetworksReact"
                              items={personalProjectInfo[1].info}
                              links={personalProjectInfo[1].links}
                              textArea={personalProjectInfo[1].textArea}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-worklog">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={WorkLog}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="WorkLog"
                              desc="반응형 기업 사내 인트라넷 포털 시스템"
                              items={personalProjectInfo[7].info}
                              links={personalProjectInfo[7].links}
                              textArea={personalProjectInfo[7].textArea}
                            />
                          </div>
                        </SwiperSlide>
                      </React.Fragment>
                    )}
                  </Swiper>
                </div>
              </Card>
            )}
            {/* CONTACT 이메일 전송 폼 */}
            {isActive === "contact" && <Contact />}
          </Card>
        </div>
      </div>
    </section>
  );
};

```

---

## 📄 src/data/Main.js

```javascript
import GithubDark from "../assets/img/Github-dark.png";
import HtmlDark from "../assets/img/html-dark.png";
import CssDark from "../assets/img/css-dark.png";
import FigmaDark from "../assets/img/Figma-Dark.png";
import JavascriptDark from "../assets/img/javascript-dark.png";
import JqueryDark from "../assets/img/jquery-dark.png";
import BootstrapDark from "../assets/img/Bootstrap-dark.png";
import MongodbDark from "../assets/img/mongodb-dark.png";
import NextJsDark from "../assets/img/NextJS-Dark.png";
import NodeJsDark from "../assets/img/NodeJS-Dark.png";
import PhpDark from "../assets/img/PHP-Dark.png";
import ReactDark from "../assets/img/React-Dark.png";
import SassDark from "../assets/img/sass-dark.png";
import TailwindCssDark from "../assets/img/TailwindCSS-Dark.png";
import VueDark from "../assets/img/Vue-Dark.png";
import ChatGpt from "../assets/img/openai.png";
import Codex from "../assets/img/codex.png";
import Antigravity from "../assets/img/antigravity.png";
import Gemini from "../assets/img/gemini.png";
import Mute from "../assets/img/main-mute.png";
import Goreon from "../assets/img/goreon.png";
import BnbNetWorks from "../assets/img/bnbnetworks.png";
import BnbNetworksReact from "../assets/img/bnbnetworks-react.png";
import Shop from "../assets/img/shop.png";
import Netflix from "../assets/img/netflix.png";
import Kakao from "../assets/img/kakao.png";
import PortFolio2 from "../assets/img/portfolio-2.png";
import LoopNote from "../assets/img/LoopNote.png";
import WorkLog from "../assets/img/WorkLog.png";

import Icon1 from "../assets/img/icon_1.png";
import Icon2 from "../assets/img/icon_2.png";
import Icon3 from "../assets/img/icon_3.png";
import Icon4 from "../assets/img/icon_4.png";
export const projects = [
  {
    src: Mute,
    title: "MUTE",
    desc: "AI기반 뮤직 웹앱",
    link: "https://muteapp.dothome.co.kr/splash",
    skills: ["vue", "Pinia", "PHP"],
  },
  {
    src: Goreon,
    title: "GOREON",
    desc: "AI기반 전자기기 쇼핑몰 반응형 제작",
    link: "https://goreon-0x90.onrender.com/",
    skills: ["React", "Express", "MongoDB"],
  },
  {
    src: BnbNetWorks,
    title: "BnbNetWorks",
    desc: "자사 웹사이트 반응형 제작",
    link: "https://bnbnetworks.cafe24.com/",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    src: BnbNetworksReact,
    title: "BnbNetworksReact",
    desc: "자사 웹사이트 React 리뉴얼",
    link: "https://inpos12.github.io/bnbnetworkreact/",
    skills: ["React", "Style-Components"],
  },
  {
    src: Shop,
    title: "Shop",
    desc: "쇼핑몰 반응형 웹사이트",
    link: "https://inpos12.github.io/shop/",
    skills: ["React", "Firebase", "Firestore"],
  },
  {
    src: Netflix,
    title: "Netflix",
    desc: "TMDB 활용한 넷플릭스",
    link: "https://inpos12.github.io/netflix-project/",
    skills: ["React", "TypeScript", "TMDB"],
  },
  {
    src: Kakao,
    title: "Kakao Renewal",
    desc: "카카오 웹사이트 반응형 리뉴얼",
    link: "https://young8686.dothome.co.kr/kakao/",
    skills: ["HTML", "SCSS", "PHP"],
  },
  {
    src: PortFolio2,
    title: "포트폴리오",
    desc: "개인 포트폴리오 웹사이트",
    link: "https://portfolio-nine-murex-vtgmelanap.vercel.app/",
    skills: ["React", "Tailwind CSS"],
  },
  {
    src: LoopNote,
    title: "LoopNote",
    desc: "AI 기반 에듀테크 학습 플랫폼",
    link: "https://loopnote-alpha.vercel.app/",
    skills: ["Next.js", "Tailwind CSS", "Gemini"],
  },
  {
    src: WorkLog,
    title: "WorkLog",
    desc: "반응형 기업 사내 인트라넷 포털",
    link: "https://tmdcks8686.dothome.co.kr/",
    skills: ["PHP", "그누보드5"],
  },
];

export const darkIcons = [
  GithubDark,
  HtmlDark,
  CssDark,
  FigmaDark,
  JavascriptDark,
  JqueryDark,
  BootstrapDark,
  MongodbDark,
  NextJsDark,
  NodeJsDark,
  PhpDark,
  ReactDark,
  SassDark,
  TailwindCssDark,
  VueDark,
  ChatGpt,
  Codex,
  Antigravity,
  Gemini,
];

export const ProcessList = [
  {
    icon: Icon1,
    title: "기획분석",
    desc: "요구사항 분석 및 사용자 흐름 정의",
  },
  {
    icon: Icon2,
    title: "UI/UX 설계",
    desc: "와이어프레임 및 UI 설계",
  },
  {
    icon: Icon3,
    title: "개발 구현",
    desc: "재사용 검증한 컴포넌트 개발",
  },
  {
    icon: Icon4,
    title: "배포 & 운영",
    desc: "안정적인 운영 및 지속적 모니터링",
  },
];

export const certifications = [
  {
    title: "운전면허 1종 보통 (2016)",
    issuer: "도로교통공단",
  },
  {
    title: "웹디자인개발기능사 필기(2026)",
    issuer: "한국산업인력공단",
  },
];

```

---

## 📄 src/data/MainClass.js

```javascript
export const layoutClasses = {
  section:
    "flex flex-wrap items-center justify-between relative z-10 w-full rounded-2xl border-none border-(--border) px-10 py-5.25 gap-3.5 max-sm:py-3.25 max-sm:px-5",
  topRow: "flex w-full max-lg:flex-col max-lg:gap-2.5 max-md:gap-2.5",
  bottomRow:
    "w-full flex justify-between max-md:flex-col max-md:gap-2.5 max-lg:gap-2.5",
};

export const profileClasses = {
  card: "max-w-83 w-full max-lg:order-2 max-lg:max-w-none",
  body: "flex flex-col items-center text-center",
  image: "max-w-1/2 mb-6.5",
  role: "text-sm bg-clip-text text-transparent bg-(image:--text-color) bac mb-6.5",
  desc: "text-sm font-light mb-6.5",
  tags: "flex gap-1.5 items-center",
  tag: "text-sm bg-clip-text text-transparent bg-(image:--text-color) px-2 py-1 rounded-lg border border-(--border)",
};

export const heroClasses = {
  wrap: "flex items-center justify-center flex-col gap-3 flex-1 text-center tracking-widest max-lg:order-1 max-lg:w-full",
  meta: "flex items-center gap-5 mb-8  max-xl:grid max-xl:grid-cols-2 max-md:mb-2 max-xl:justify-items-center max-lg:flex max-md:grid max-md:grid-cols-2 ",
  metaItem: "flex items-center max-lg:gap-2.5 min-xl:gap-5",
  circle: "max-md:hidden min-lg:hidden min-xl:block",
  metaText: "font-extralight text-gray-300 text-sm ",
  name: "text-center text-7xl bg-clip-text text-transparent bg-(image:--main-title-color) font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl",
  line: "text-4xl font-semibold max-xl:text-3xl max-md:text-2xl",
  accent:
    "text-5xl bg-clip-text text-transparent bg-(image:--text-color) max-xl:text-4xl max-md:text-3xl",
  button:
    "text-gray-500 cursor-pointer [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border) max-md:px-8 max-md:py-1",
  buttonText: "font-bold text-2xl max-xl:text-xl max-md:text-lg",
};

export const projectClasses = {
  card: "max-w-83 w-full flex flex-col max-lg:order-3 max-lg:max-w-none",
  list: "flex flex-col gap-3",
};

export const contactClasses = {
  card: "max-w-83 w-full max-md:max-w-full",
  list: "flex flex-col gap-5.5",
};

export const processClasses = {
  card: "max-w-83 w-full flex flex-col max-md:max-w-full max-sm:hidden ",
  layout: "flex gap-3.5 ",
  rail: "flex flex-col items-center justify-center",
  step: "w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before",
  line: "h-5 w-0.5 bg-(--border)",
  content: "flex flex-col justify-between items-start",
};

export const certClasses = {
  card: "max-w-83 w-full flex flex-col max-md:max-w-full max-sm:hidden",
  list: "flex flex-col gap-3 max-h-[140px] overflow-y-auto overscroll-contain project-list-scroll pr-1",
  item: "flex items-center gap-3.5 p-3 rounded-xl border border-(--border)",
  badge: "w-8 h-8 shrink-0 rounded-full border border-(--border) flex items-center justify-center text-sm font-bold bg-clip-text text-transparent bg-(image:--text-color)",
  name: "text-sm font-semibold",
  issuer: "text-xs text-gray-400 mt-0.5",
};

export const skillClasses = {
  wrap: "w-full min-w-0",
  panel: "w-full min-w-0 overflow-hidden bg-(--dark-gradient)",
  tile: "bg-(--deepdark-gradient) flex flex-col gap-1.5",
  icon: "skill-icon-image cursor-pointer",
  floatingIcon: "pointer-events-none fixed z-50 w-12",
};

```

---

## 📄 src/data/ProjectData.js

```javascript
import Mute from "../assets/img/main-mute.png";
import Goreon from "../assets/img/goreon.png";
import BnbNetWorks from "../assets/img/bnbnetworks.png";
import BnbNetworksReact from "../assets/img/bnbnetworks-react.png";
import Shop from "../assets/img/shop.png";
import Netflix from "../assets/img/netflix.png";
import PortFolio2 from "../assets/img/portfolio-2.png";
import Kakao from "../assets/img/kakao.png";

export const teamProjectInfo = [
  {
    title: "MUTE",
    src: Mute,
    info: [
      { label: "구분", value: "팀 프로젝트" },
      { label: "인원", value: "3명" },
      { label: "기간", value: "기획 : 15일 / 디자인 : 19일 / 개발 : 33일" },
      { label: "역할", value: "개발" },
      {
        label: "담당",
        value: "UI 퍼블리싱 · API 연동 · 플레이어 기능 · PHP API 개발",
      },
      {
        label: "기술",
        value: "Vue 3 · Pinia · CSS3  · Axios · PHP · MySQL",
      },
      { label: "배포", value: "Dothome" },
    ],
    links: [
      { label: "SPLASH", link: "https://muteapp.dothome.co.kr/splash" },
      { label: "메인", link: "https://muteapp.dothome.co.kr/main" },
      { label: "AI페이지", link: "https://muteapp.dothome.co.kr/main/ai" },
      {
        label: "마이페이지",
        link: "https://muteapp.dothome.co.kr/main/mypage",
      },
      { label: "차트", link: "https://muteapp.dothome.co.kr/main/chart" },
      { label: "검색", link: "https://muteapp.dothome.co.kr/main/search" },
      {
        label: "라이브러리",
        link: "https://muteapp.dothome.co.kr/main/library",
      },
      {
        label: "간트차트",
        link: "https://docs.google.com/spreadsheets/d/13GazU9eCavfxvy6y3nxorqrsIXHQIMl7fW89MIOw1IM/edit?gid=0#gid=0",
      },
      { label: "기획안" },
      {
        label: "GitHub",
        link: "https://github.com/leechan9715/mutehtml/tree/vue/main",
      },
    ],

    textArea:
      "Vue와 PHP를 학습한 후, Vue · PHP · MySQL을 활용한 AI 기반 음악 웹 애플리케이션 MUTE를 첫 팀 프로젝트로 진행했습니다.<br/>팀원들과 함께 기획, 디자인, 개발 전 과정에 참여하며 각 단계의 중요성을 직접 체감했습니다. 1인 개발과 달리 팀원들과 적극적으로 소통하고 의견을 조율하는 과정에서 더 완성도 높은 결과물을 만들 수 있었고, 협업의 힘을 실감한 프로젝트입니다.<br/>UI 퍼블리싱 · API 연동 · 플레이어 기능 · PHP API 개발을 담당하며 프론트엔드와 백엔드를 아우르는 다양한 경험을 쌓았습니다.<br/>개발 중 Vue와 PHP 간 API 통신에서 CORS 문제를 마주쳤고, 이를 해결하는 과정에서 클라이언트-서버 구조에 대한 이해를 한층 높일 수 있었습니다.<br/>또한 GitHub를 활용한 협업을 통해 브랜치 관리와 코드 리뷰 등 체계적인 개발 프로세스를 경험하며 팀 개발 역량을 키울 수 있었습니다.<br/>이 프로젝트를 통해 단순히 기능을 구현하는 것을 넘어, 팀 안에서 개발자로서 소통하고 책임감 있게 역할을 수행하는 것의 중요성을 배웠습니다",
  },
  {
    title: "GOREON",
    src: Goreon,
    info: [
      { label: "구분", value: "팀 프로젝트" },
      { label: "인원", value: "5명" },
      { label: "기간", value: "기획 : 6일 / 디자인 : 10일 / 개발 11일 " },
      { label: "역할", value: "프론트엔드 개발" },
      { label: "담당", value: "기획 · 디자인 보조 / UI 개발" },
      {
        label: "기술",
        value: "React · Express · Redux · SCSS · AxiosMongoDB",
      },
      { label: "배포", value: "Render" },
    ],
    links: [
      {
        label: "회원가입",
        link: "https://vercel-frontend-goreon.vercel.app/register",
      },

      {
        label: "로그인",
        link: "https://vercel-frontend-goreon.vercel.app/login",
      },
      {
        label: "메인페이지",
        link: "https://vercel-frontend-goreon.vercel.app/",
      },
      {
        label: "장바구니",
        link: "https://vercel-frontend-goreon.vercel.app/cart",
      },
      {
        label: "찜한상품",
        link: "https://vercel-frontend-goreon.vercel.app/wishlist",
      },
      {
        label: "마이페이지",
        link: "https://vercel-frontend-goreon.vercel.app/mypage",
      },
      {
        label: "상품리스트",
        link: "https://vercel-frontend-goreon.vercel.app/list?type=notebook",
      },
      {
        label: "PC조립",
        link: "https://vercel-frontend-goreon.vercel.app/pc-assembly",
      },
      { label: "반응형" },
      { label: "기획안" },
      {
        label: "GitHub",
        link: "https://github.com/muteLJS/GOREON",
      },
    ],

    textArea:
      "두 번째 팀 프로젝트로, React · Express · MongoDB를 활용한 AI 기반 전자기기 쇼핑몰 웹 서비스 GOREON을 진행했습니다.<br/>단순 상품 나열형 쇼핑몰이 아닌, 사용자가 직접 탐색하거나 AI 추천을 통해 상품을 비교하고 선택할 수 있는 흐름을 구현하는 것을 목표로 했습니다.<br/>첫 번째 프로젝트 MUTE를 통해 팀원과의 소통 방식과 협업 흐름을 익혔고, 이번 프로젝트에서는 그 경험을 바탕으로 초반부터 팀원들과 데이터 구조, 공통 컴포넌트, 스타일 기준을 먼저 맞추며 보다 체계적으로 협업을 이끌어 나갈 수 있었습니다.<br/>상품 리스트 · 상세 페이지 UI, Axios를 활용한 API 연동, Redux Toolkit 기반 전역 상태 관리, 찜 · 장바구니 기능, 반응형 레이아웃 구현을 담당했습니다.<br/>개발 과정에서 상품 데이터 필드 불일치 문제를 normalize 로직으로 해결하고, 찜 상태를 Redux로 전역 관리하여 화면 간 상태 일관성을 확보했습니다. 또한 SCSS 믹스인을 활용해 모바일 · 태블릿 · 데스크톱 환경에 맞는 반응형 그리드를 구현했습니다.<br/>첫 번째 프로젝트에서 협업의 흐름을 익혔다면, 이번 프로젝트에서는 데이터 구조 설계와 상태 관리 등 기술적인 깊이를 더하며 개발자로서 한 단계 더 성장할 수 있었습니다.",
  },
];

export const personalProjectInfo = [
  {
    title: "BnbNetWork (HTML , 반응형)",
    src: BnbNetWorks,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "2.5주" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "HTML · Css · Javascript · Bootstrap",
      },
      { label: "배포", value: "Cafe24" },
    ],
    links: [
      { label: "반응형" },
      {
        label: "GitHub",
        link: "https://github.com/inpos12/bnbnetwork",
      },
      { label: "LiveDemo", link: "https://bnbnetworks.cafe24.com/" },
    ],
    textArea:
      "HTML · CSS · JavaScript를 독학으로 학습하던 중 Bootstrap을 접하게 되었고, 반응형 웹을 직접 구현해보고자 BnbNetWork 자사 회사 사이트를 제작했습니다.<br/>지인으로부터 처음으로 외주 의뢰를 받아 진행한 개인 프로젝트로, 메인 페이지와 서브 페이지로 구성된 회사 소개 사이트를 구현했습니다.<br/>Bootstrap을 활용해 모바일 · 태블릿 · 데스크톱 환경에서 최적화된 반응형 레이아웃을 구성했으며, 학습한 HTML · CSS · JavaScript를 실제 프로젝트에 적용하며 기초를 탄탄히 다질 수 있었습니다.<br/>단순 학습용 프로젝트가 아닌 실제 클라이언트의 요구사항을 반영해야 했기에, 요구사항을 파악하고 이를 화면으로 구현하는 실무적인 경험을 쌓을 수 있었던 첫 번째 외주 프로젝트입니다. ",
  },
  {
    title: "BnbNetWork (React)",
    src: BnbNetworksReact,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "2.5주" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "React · React Router · Styled-Components · Kakao Maps API",
      },
      { label: "배포", value: "GitHub Pages" },
    ],
    links: [
      { label: "반응형" },
      {
        label: "GitHub",
        link: "https://github.com/inpos12/bnbnetworkreact",
      },
      { label: "LiveDemo", link: "https://inpos12.github.io/bnbnetworkreact/" },
    ],
    textArea:
      "HTML · CSS · JavaScript로 제작했던 BnbNetWork 사이트를 React를 학습한 후 새롭게 재구현한 개인 프로젝트입니다.<br/>기존 HTML 버전과 동일한 사이트를 React로 다시 만들며, 컴포넌트 기반 구조로 코드 재사용성을 높이고 유지보수성을 개선하는 것을 목표로 했습니다.<br/>Styled Components를 활용해 스타일을 컴포넌트화하여 코드 중복을 줄였고, React Router로 페이지 전환 시 새로고침 없는 부드러운 이동을 구현했습니다. 미디어 쿼리와 Flexbox를 활용해 모바일 · 태블릿 · 데스크톱 환경에 맞는 반응형 레이아웃을 구성했으며, 모바일 환경에서는 햄버거 메뉴를 적용해 사용자 접근성을 높였습니다.<br/>또한 Kakao Maps API를 연동해 회사 위치를 지도에 직관적으로 표시했습니다.<br/>같은 사이트를 HTML에서 React로 직접 전환하며, 단순히 React 문법을 익히는 것을 넘어 컴포넌트 설계 방식과 구조적인 사고의 차이를 몸소 체감할 수 있었던 프로젝트입니다.",
  },
  {
    title: "SHOP",
    src: Shop,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "1달" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value:
          "React · JavaScript · Styled-Components · Bootstrap · Firebase · Firestore",
      },
      { label: "배포", value: "GitHub Pages" },
    ],
    links: [
      { label: "반응형" },
      {
        label: "GitHub",
        link: "https://github.com/inpos12/shop",
      },
      { label: "LiveDemo", link: "https://inpos12.github.io/shop/" },
    ],
    textArea:
      "HTML · CSS · JavaScript로 기초를 다진 후, BNB NetWorks 사이트를 React로 재구현하며 컴포넌트 기반 개발 방식에 익숙해진 뒤 도전한 개인 프로젝트입니다.<br/>React와 Firebase를 독학으로 학습하며 배운 내용을 직접 구현해보고자 PHARMACY SHOP을 기획했으며, React의 컴포넌트 기반 구조를 활용해 UI를 효율적으로 재사용하고 Firebase를 통해 별도의 서버 없이 클라우드 기반으로 데이터를 관리하는 쇼핑몰을 구현했습니다.<br/>Styled Components로 스타일을 컴포넌트화하여 유지보수성을 높였고, React Router로 페이지 전환 시 새로고침 없는 부드러운 이동을 구현했습니다. Bootstrap을 활용해 모바일 · 태블릿 · 데스크톱 환경에 맞는 반응형 레이아웃도 적용했습니다.<br/>관리자 기능으로는 로그인한 사용자의 UID를 비교해 어드민 여부를 판별하고, 관리자만 상품 데이터를 추가 · 수정할 수 있도록 접근을 제한했습니다. 또한 Kakao Maps API를 연동해 회사 위치를 지도에 표시하는 기능도 구현했습니다.<br/>단순 회사 사이트 구현을 넘어 Firebase 인증 · 데이터 관리 · 외부 API 연동까지 직접 구현하며, 스스로 문제를 정의하고 해결하는 능력을 한층 키울 수 있었던 프로젝트입니다.",
  },
  {
    title: "Netflix",
    src: Netflix,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "1주" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "React · TypeScript · Styled-Components · TMDB API",
      },
      { label: "배포", value: "GitHub Pages" },
    ],
    links: [
      {
        label: "GitHub",
        link: "https://github.com/inpos12/netflix-project",
      },
      { label: "LiveDemo", link: "https://inpos12.github.io/netflix-project/" },
    ],
    textArea:
      "PHARMACY SHOP 프로젝트를 통해 React와 Firebase를 활용한 개발에 익숙해진 후, 새롭게 TypeScript를 접하게 되어 처음으로 도전한 개인 프로젝트입니다.<br/>완성도보다는 TypeScript의 타입 시스템과 외부 API 연동 방식을 직접 익히는 것을 목표로, TMDB API를 활용해 넷플릭스와 유사한 영화 스트리밍 사이트를 구현했습니다.<br/>TMDB API를 연동해 영화 목록 · 포스터 · 예고편 · 제목 · 상영 시간 · 장르 정보를 출력했으며, Styled Components를 활용해 컴포넌트 단위로 스타일을 관리했습니다.<br/>기존 JavaScript로 작업하던 방식에서 벗어나 TypeScript의 타입 정의와 인터페이스를 적용하며, 코드의 안정성과 가독성을 높이는 개발 방식을 체감할 수 있었던 프로젝트입니다.",
  },
  {
    title: "Kakao Renewal",
    src: Kakao,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "3주" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "HTML5 · SCSS · JavaScript · jQuery · PHP · MySQL",
      },
      { label: "배포", value: "Dothome" },
    ],
    links: [
      { label: "반응형" },
      {
        label: "GitHub",
        link: "https://github.com/leechan9715/Kakao-Renewal/tree/main",
      },
      { label: "LiveDemo", link: "https://young8686.dothome.co.kr/kakao/" },
    ],
    textArea:
      "TypeScript와 TMDB API를 활용한 프로젝트를 마친 후, 그동안 배운 기술들을 복습하고 새로운 기술을 함께 익히고자 진행한 개인 프로젝트입니다.<br/>Kakao 메인 사이트를 리뉴얼하는 방식으로 Kakao Renewal을 기획했으며, HTML · SCSS · JavaScript · jQuery · PHP · MySQL을 활용해 풀스택 흐름을 직접 경험했습니다.<br/>로그인 · 회원가입 · 이메일 변경 · 비밀번호 변경 기능을 PHP와 MySQL로 구현하며 서버와 데이터베이스 간 데이터 흐름을 직접 다뤄볼 수 있었습니다.<br/>원스크롤 페이지 특성상 반응형 레이아웃을 구현하는 데 어려움이 있었습니다. 섹션마다 콘텐츠 구조와 배치가 달라 화면 크기에 따라 레이아웃이 무너지는 문제가 반복됐고, 며칠간 고민하며 각 섹션별 미디어 쿼리를 세밀하게 조정한 끝에 모바일 · 태블릿 · 데스크톱 환경에서 자연스럽게 동작하는 반응형 원스크롤 사이트를 완성할 수 있었습니다.<br/>React 중심의 개발에서 벗어나 HTML · SCSS · jQuery 기반으로 돌아와 기초를 다시 다지면서, 프레임워크 없이도 구조적으로 코드를 작성하는 능력을 키울 수 있었던 프로젝트입니다.",
  },
  {
    title: "Portfolio",
    src: PortFolio2,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "3주" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "React · JavaScript · Tailwind CSS",
      },
      { label: "배포", value: "Vercel" },
    ],
    links: [
      {
        label: "GitHub",
        link: "https://github.com/leechan9715/PortFolio",
      },
      {
        label: "LiveDemo",
        link: "https://portfolio-nine-murex-vtgmelanap.vercel.app/",
      },
    ],
    textArea:
      "그동안 진행해온 모든 프로젝트와 기술 역량을 한눈에 볼 수 있도록 React · Tailwind CSS · JavaScript를 활용해 제작한 개인 포트폴리오 웹사이트입니다.<br/>메인 페이지에서는 보유 기술 스택을 아이콘으로 한눈에 확인할 수 있으며, 버튼 클릭 시 화면 전환 애니메이션과 함께 각 스킬의 숙련도를 퍼센트 게이지로 시각적으로 표현했습니다.<br/>프로젝트는 개인 프로젝트 · 팀 프로젝트로 탭을 나눠 분류했으며, 전체 탭에서 모든 프로젝트를 한번에 확인할 수 있도록 구성했습니다. 메인 페이지에서도 프로젝트 리스트를 간략하게 미리 볼 수 있어 빠른 탐색이 가능합니다.<br/>문의하기 탭을 통해 이메일을 직접 전송할 수 있는 기능을 구현해 방문자가 바로 연락할 수 있도록 했습니다.<br/>단순히 프로젝트를 나열하는 것을 넘어, 그동안의 성장 과정과 기술 역량을 직관적으로 전달할 수 있도록 구조와 사용자 경험을 고민하며 제작한 사이트입니다.",
  },
  {
    title: "LoopNote",
    src: PortFolio2,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "1일" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "Next.js , Tailwind CSS , Codex , Gemini , Antigravity ",
      },
      { label: "배포", value: "Vercel" },
    ],
    links: [
      {
        label: "GitHub",
        link: "https://github.com/leechan9715/LoopNote",
      },
      {
        label: "LiveDemo",
        link: "https://loopnote-alpha.vercel.app/",
      },
      {
        label: "Vercel",
      },
    ],
    textArea:
      "OCR 기반 오답 판독 및 단계별 AI 힌트(Socratic Tutoring), 그리고 학부모·교사용 대시보드와 같은 고난도 에듀테크 비즈니스 로직을 구축하기 위해 WSL2 및 Tmux 가상 터미널 환경을 설계했습니다. <br/>이 격리된 인프라 위에서 Gemini CLI가 구조 기획 및 정밀 사양서(Surgical Plan)를 발행하면, Codex CLI가 이를 준수하여 자율 코드 구현을 수행하고, 다시 Gemini가 4대 파괴 테스트(심층 감사)를 수행하여 백그라운드에서 오류를 스스로 수정하는 견고한 피드백 루프를 운용했습니다. <br/>이 에이전트 협업 프로세스를 통해 기획 의도와 소스 코드 간의 싱크율을 극대화하고, Next.js App Router 아키텍처 상의 복잡한 데이터 흐름과 예외 상황들을 결함 없이 안전하게 빌드하여 최종 배포했습니다.",
  },
  {
    title: "WorkLog",
    src: PortFolio2,
    info: [
      { label: "구분", value: "개인 프로젝트" },
      { label: "인원", value: "1명" },
      { label: "기간", value: "1일" },
      { label: "기여도", value: "100%" },
      {
        label: "기술",
        value: "PHP , 그누보드5 , Codex , Gemini , Antigravity ",
      },
      { label: "배포", value: "Dothome" },
    ],
    links: [
      {
        label: "GitHub",
        link: "https://github.com/leechan9715/CompanyWorkLog",
      },
      {
        label: "LiveDemo",
        link: "https://tmdcks8686.dothome.co.kr/",
      },
      {
        label: "Dothome",
      },
    ],
    textArea:
      "노후화된 그누보드5의 테이블 레이아웃을 프리미엄 반응형 인프라로 전면 개편하기 위해, WSL2 및 Tmux 멀티 세션 기반의 '듀얼 에이전트 상호 역할 헌법(AI Operational Constitution)'을 수립하고 개발을 주도했습니다.<br/>기획과 설계를 전담하는 Gemini CLI는 PC/Mobile 디렉토리 이원화 구조를 단일 뷰포트 반응형 아키텍처로 전향하는 마이그레이션 전략을 기획하고, UI 컴포넌트의 HSL 색상 규격과 아크릴 슬라이드 드로어의 터치 이벤트 명세를 담은 초정밀 설계 사양서(Surgical Plan)를 물리 장부(Ledger)로 발행했습니다. <br/>구현을 전담하는 Codex CLI는 이 장부 프로토콜을 100% 신뢰하여 레거시 코드를 걷어내고 컴포넌트를 자율 구현했습니다. 특히 연차관리 캘린더의 날짜 밀림 현상 및 회원가입 Glitch와 같은 복잡한 비즈니스 로직 수정 시, Codex는 컴파일 및 린트 오류 발생 즉시 스스로 에러를 격리 및 수정하는 '자가 에러 디버깅 루프'를 작동시켜 빌드 안정성을 확보했습니다.<br/>코딩 완료 후에는 Gemini가 극단적인 모바일 뷰포트 해상도 주입 및 비정상적 가입 폼 데이터 검증 등 4대 파괴 테스트(심층 감사)를 수행하여, 단 하나의 결함도 존재하지 않을 때까지 에이전트 간 백그라운드 피드백 루프(Silent Auto-Loop)를 가동시켰습니다. <br/>설계 일관성(DoD)을 완벽히 만족하며 단 1일 만에 결함률 0%에 수렴하는 프리미엄 사내 포털 시스템을 배포하는 데 성공했습니다.",
  },
];

```

---

## 📄 src/data/SubPage.js

```javascript
// Skils
import IconBootstrap from "../assets/img/light/Bootstrap-Light.png";
import IconCss from "../assets/img/light/CSS-Light.png";
import IconFigma from "../assets/img/light/Figma-Light.png";
import IconGithub from "../assets/img/light/Github-Light.png";
import IconHtml from "../assets/img/light/HTML-Light.png";
import IconJavaScript from "../assets/img/light/JavaScript-Light.png";
import IconJQuery from "../assets/img/light/JQuery-Light.png";
import IconMongoDB from "../assets/img/light/mongodb-light.png";
import IconNextJS from "../assets/img/light/NextJS-Light.png";
import IconNodeJS from "../assets/img/light/NodeJS-Light.png";
import IconPhp from "../assets/img/light/PHP-Light.png";
import IconReact from "../assets/img/light/React-Light.png";
import IconSass from "../assets/img/light/Sass-Light.png";
import IconTailwindCSS from "../assets/img/light/TailwindCSS-Light.png";
import IconVueJS from "../assets/img/light/VueJS-Light.png";
import IconChatGpt from "../assets/img/light/openai.png";
import IconCodex from "../assets/img/light/codex-color.svg";
import IconGemini from "../assets/img/light/gemini-color.svg";
import IconAntigravity from "../assets/img/light/antigravity-color.svg";

// profile
import Email from "../assets/img/email.png";
import Call from "../assets/img/call.png";

export const LightIcons = [
  { icon: IconGithub, title: "Github", percent: "90" },
  { icon: IconHtml, title: "HTML", percent: "95" },
  { icon: IconCss, title: "CSS", percent: "95" },
  { icon: IconJavaScript, title: "JavaScript", percent: "85" },
  { icon: IconJQuery, title: "JQuery", percent: "90" },
  { icon: IconSass, title: "Sass", percent: "85" },
  { icon: IconTailwindCSS, title: "TailwindCSS", percent: "90" },
  { icon: IconReact, title: "React", percent: "90" },
  { icon: IconCodex, title: "Codex Cli", percent: "97" },
  { icon: IconAntigravity, title: "Antigravity Cli", percent: "96" },
  { icon: IconNextJS, title: "NextJS", percent: "83" },
  { icon: IconVueJS, title: "VueJS", percent: "80" },
  { icon: IconNodeJS, title: "NodeJS", percent: "80" },
  { icon: IconMongoDB, title: "MongoDB", percent: "83" },
  { icon: IconPhp, title: "PHP", percent: "75" },
  { icon: IconFigma, title: "Figma", percent: "83" },
  { icon: IconBootstrap, title: "Bootstrap", percent: "85" },
  { icon: IconChatGpt, title: "ChatGpt", percent: "97" },
  { icon: IconGemini, title: "Gemini Cli", percent: "96" },
];

export const ContactData = [
  {
    src: Call,
    title: "Phone",
    url: "010-8686-9869",
  },
  {
    src: Email,
    title: "Email",
    url: "iseungchan809@gmail.com",
  },
  {
    src: IconGithub,
    title: "Github",
    url: "github.com/leechan9715",
    href: "https://github.com/leechan9715",
  },
];

```

---

## 📄 src/index.css

```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
@import "tailwindcss";

:root {
  --dark-gradient: rgba(7, 26, 42, 0.7);
  --deepdark-gradient: rgba(6, 21, 34, 0.5);
  --full-absolute-bg: radial-gradient(
    closest-side,
    rgba(10, 34, 73, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );

  --main-title-color: linear-gradient(
    0deg,
    rgba(0, 140, 255, 1) 0%,
    rgb(255, 255, 255) 70%
  );
  --text-color: linear-gradient(
    185.57deg,
    rgba(0, 140, 255, 1) 0%,
    rgba(0, 200, 255, 1) 100%
  );
  --button-hover: linear-gradient(
    185.57deg,
    rgba(0, 140, 255, 0.8) 0%,
    rgba(0, 200, 255, 0.8) 100%
  );
  --button-bg: linear-gradient(
    90deg,
    rgba(7, 17, 31, 0.6) 0%,
    rgba(12, 24, 40, 0.6) 50%,
    rgba(5, 10, 18, 0.6) 100%
  );
  --border: #0d4f73;
  --hover-border: #2bb3fd;
}

img {
  object-fit: cover;
}

.skill-icon-swiper {
  width: 100%;
  min-width: 0;
}

.skill-icon-swiper .swiper-wrapper {
  align-items: center;
}

.skill-icon-swiper .skill-icon-slide {
  width: 80px !important;
  flex-shrink: 0;
}

.skill-icon-slide > div {
  width: 80px;
}

.project-swiper {
  padding-bottom: 2.5rem;
}

.project-swiper .swiper-pagination {
  bottom: 0;
  z-index: 10;
}

.project-swiper .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.65);
  opacity: 1;
}

.project-swiper .swiper-pagination-bullet-active {
  background: #2bb3fd;
}

.skill-icon-image {
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  display: block;
}

.project-list-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(43, 179, 253, 0.7) rgba(13, 79, 115, 0.25);
}

.project-list-scroll::-webkit-scrollbar {
  width: 6px;
}

.project-list-scroll::-webkit-scrollbar-track {
  background: rgba(13, 79, 115, 0.25);
  border-radius: 999px;
}

.project-list-scroll::-webkit-scrollbar-thumb {
  background: rgba(43, 179, 253, 0.7);
  border-radius: 999px;
}

.section-profile-enter {
  animation: sectionProfileEnter 1s ease forwards;
  opacity: 0;
  transform: translateX(-32px);
}

.section-content-enter {
  animation: sectionContentEnter 0.75s ease-in-out 0.75s forwards;
  max-height: 0;
}

.section-profile-leave {
  animation: sectionProfileLeave 0.75s ease 0.75s forwards;
  opacity: 1;
  transform: translateX(0);
}

.section-content-leave {
  animation: sectionContentLeave 0.75s ease-in-out forwards;
  max-height: 100%;
}

@keyframes sectionProfileEnter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes sectionProfileLeave {
  to {
    opacity: 0;
    transform: translateX(-32px);
  }
}

@keyframes sectionContentEnter {
  to {
    max-height: 100%;
  }
}

@keyframes sectionContentLeave {
  to {
    max-height: 0;
  }
}

@layer base {
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    color: white;
    overflow: hidden;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: "Pretendard", sans-serif;
    background: url("./assets/img/bg-1.png") no-repeat center center;
    background-size: cover;
    position: relative;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    background: url("./assets/img/bg-2.png") no-repeat center center;
    background-size: cover;
    opacity: 0;
    transition: opacity 1.2s ease;
    pointer-events: none;
  }

  body.bg-2-active::after {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  html {
    overflow: scroll;
  }
}

```

---

## 📄 src/main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

```

---

## 📄 src/store/store.js

```javascript
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

```

---

## 📄 src/store/uiSlice.js

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMainHidden: false,
  isTransitioning: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showMain: (state) => {
      state.isMainHidden = false;
      state.isTransitioning = false;
    },
    startMainTransition: (state) => {
      state.isTransitioning = true;
    },
    startMainReturn: (state) => {
      state.isTransitioning = false;
    },
    hideMain: (state) => {
      state.isMainHidden = true;
      state.isTransitioning = true;
    },
    toggleMain: (state) => {
      state.isMainHidden = !state.isMainHidden;
      state.isTransitioning = state.isMainHidden;
    },
  },
});

export const {
  showMain,
  startMainTransition,
  startMainReturn,
  hideMain,
  toggleMain,
} = uiSlice.actions;
export default uiSlice.reducer;

```

---

## 📄 vite.config.js

```javascript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});

```

---

