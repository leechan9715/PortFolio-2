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
        onAnimationEnd={(event) => {
          if (event.animationName === "sectionProfileLeave") {
            dispatch(showMain());
          }
        }}
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
