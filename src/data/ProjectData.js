import Mute from "../assets/img/main-mute.png";
import Goreon from "../assets/img/goreon.png";
import BnbNetWorks from "../assets/img/bnbnetworks.png";
import BnbNetworksReact from "../assets/img/bnbnetworks-react.png";
import Shop from "../assets/img/shop.png";
import Netflix from "../assets/img/netflix.png";
import PortFolio2 from "../assets/img/portfolio-2.png";
import Kakao from "../assets/img/kakao.png";
import LoopNote from "../assets/img/LoopNote.png";
import WorkLog from "../assets/img/WorkLog.png";

export const teamProjectInfo = [
  {
    title: "MUTE",
    summary: "Vue 3와 PHP를 사용해 구현한 AI 기반 음악 플레이어 웹 서비스",
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
    summary: "React와 Express, MongoDB 기반의 AI 가전제품 비교 쇼핑몰",
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
    summary: "Bootstrap을 활용해 기획부터 마이그레이션까지 진행한 자사 반응형 웹사이트",
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
    summary: "Styled-Components와 Kakao Maps API를 활용해 React로 리팩토링한 자사 사이트",
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
    summary: "Firebase 인증 및 어드민 관리 기능을 포함한 React 기반 의약품 쇼핑몰",
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
    summary: "TypeScript와 TMDB API를 연동하여 타입 안정성을 높인 영화 정보 검색 사이트",
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
    summary: "PHP와 MySQL, jQuery를 사용해 풀스택 흐름을 반영한 카카오 리뉴얼 사이트",
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
    summary: "숙련도 시각화 및 이메일 전송 기능을 갖춘 모던 반응형 포트폴리오 웹사이트",
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
    summary: "OCR 오답 판독 및 Socratic AI 피드백을 적용한 프리미엄 Next.js 에듀테크 플랫폼",
    src: LoopNote,
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
    summary: "레거시 그누보드5 프레임워크를 100% 반응형 사내 포털로 전면 개편한 프로젝트",
    src: WorkLog,
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
