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
import Profile from "../assets/img/profile.png";
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
  const [active, setActive] = useState(false);
  const [floatingIcon, setFloatingIcon] = useState(null);
  const dispatch = useDispatch();

  const floatingIconTarget = useRef({ x: 0, y: 0 });
  const floatingIconCurrent = useRef({ x: 0, y: 0 });
  const floatingIconRef = useRef(null);

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

  // Trigger entrance transition on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setActive(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Smooth floating icon following cursor
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

      if (floatingIconRef.current) {
        floatingIconRef.current.style.left = `${nextPosition.x}px`;
        floatingIconRef.current.style.top = `${nextPosition.y}px`;
      }
      animationFrameId = requestAnimationFrame(followPointer);
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrameId = requestAnimationFrame(followPointer);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [floatingIcon]);

  // Handle transition timeout to hide Main and load SubPage
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        dispatch(hideMain());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, dispatch]);

  const isTransitionActive = active && !isClicked;

  // Shared transition styles helper
  const getTransitionStyle = (transformValue) => ({
    transform: isTransitionActive ? "translate(0, 0)" : transformValue,
    opacity: isTransitionActive ? 1 : 0,
    transition: "transform 0.5s ease, opacity 0.5s ease",
    willChange: "transform, opacity",
    pointerEvents: isTransitionActive ? "auto" : "none",
  });

  return (
    <>
      <section
        className={layoutClasses.section}
        style={{
          borderColor: isClicked ? "transparent" : "var(--border)",
          transition: "border-color 1s ease",
        }}
      >
        {/* 프로필 , 프로젝트리스트 , Hero */}
        <div className={layoutClasses.topRow}>
          {/* 프로필 */}
          <Card
            className={profileClasses.card}
            style={getTransitionStyle("translateX(-120%)")}
          >
            <CardTitleGreen>프로필</CardTitleGreen>
            <div className={profileClasses.body}>
              <img
                src={Profile}
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
            style={getTransitionStyle("translateY(-120%)")}
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
            style={getTransitionStyle("translateX(120%)")}
          >
            <CardTitleGreen>프로젝트</CardTitleGreen>
            <FilterChips
              skills={availableSkills}
              activeSkill={activeSkill}
              onSelectSkill={setActiveSkill}
            />
            <div
              className={`${projectClasses.list} project-list-scroll max-h-[360px] overflow-y-auto overflow-x-hidden overscroll-contain pr-2 `}
            >
              {filteredProjects.map((item) => {
                return (
                  <div key={item.title} className="animate-project-item">
                    <ProjectList
                      onClick={(e) => popupMute(e, item.link, item.title)}
                      href={item.link}
                      src={item.src}
                      title={item.title}
                      desc={item.desc}
                      skills={item.skills}
                    />
                  </div>
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
            style={getTransitionStyle("translateX(-120%)")}
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
            style={getTransitionStyle("translateX(120%)")}
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
          style={getTransitionStyle("translateY(120%)")}
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
                        if (floatingIconRef.current) {
                          floatingIconRef.current.style.left = `${startPosition.x}px`;
                          floatingIconRef.current.style.top = `${startPosition.y}px`;
                        }
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
          ref={floatingIconRef}
          className={skillClasses.floatingIcon}
          src={floatingIcon}
          alt="selected skill icon"
          style={{
            position: "fixed",
            left: `${floatingIconCurrent.current.x}px`,
            top: `${floatingIconCurrent.current.y}px`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}
    </>
  );
};
