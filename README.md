# Portfolio

React와 Vite로 제작한 프론트엔드 개발자 이승찬의 포트폴리오 웹사이트입니다. 인트로 연출 이후 하나의 페이지를 스크롤하며 Hero, About, Skills, Projects, Contact 섹션을 차례로 탐색하는 풀스크롤(full-scroll) 구조로 구성되어 있습니다.

## 프로젝트 소개

단순한 목록형 포트폴리오가 아니라, 부드러운 스크롤과 스크롤 기반 애니메이션을 활용해 한 페이지 안에서 인터랙티브한 탐색 경험을 제공하는 것을 목표로 합니다.

주요 구성은 다음과 같습니다.

- 최초 방문 시 한 번 재생되는 인트로 스플래시 연출
- 스크롤 진행 표시줄과 모바일 드로어를 갖춘 상단 내비게이션
- Hero · About · Skills · Projects · Contact 5개 섹션
- 데스크탑에서 가로 스크롤로 펼쳐지는 프로젝트 섹션과 상세 모달
- EmailJS 기반 문의 폼

## 기술 스택

- React 19 (React Compiler)
- Vite 8
- Tailwind CSS v4
- GSAP + ScrollTrigger (`@gsap/react`)
- Lenis (부드러운 스크롤)
- Swiper (모바일·태블릿 프로젝트 슬라이드)
- EmailJS
- ESLint

## 주요 기능

### 인트로 & 내비게이션

- 좌우 문이 열리는 인트로 애니메이션을 최초 방문 시 1회 재생하고, `sessionStorage`로 재방문 시 생략
- 인트로 재생 중에는 스크롤을 잠그고, 완료 후 ScrollTrigger 위치값을 재계산
- 스크롤 진행도에 따라 상단에 그라데이션 진행 표시줄 표시
- 모바일에서는 햄버거 버튼과 전체화면 드로어 메뉴 제공

### Hero

- 글자 단위로 등장하는 이름 애니메이션
- 회전하는 SVG 오빗(orbit) 배경 그래픽
- 기술 스택 칩과 스크롤 인디케이터

### About

- 프로필 이미지 패럴랙스 효과(데스크탑)
- 기본 정보, 자격증, 보유 기술을 스크롤 진입 시 순차 노출

### Skills

- 기술 스택 숙련도를 게이지로 표현
- 섹션이 화면에 들어올 때 0%에서 목표값까지 애니메이션 재생

### Projects

- 전체 · 팀 프로젝트 · 개인 프로젝트 탭 필터
- 데스크탑(1025px 이상): 섹션을 고정(pin)하고 카드를 가로로 스크롤하는 ScrollTrigger 연출
- 모바일·태블릿: Swiper 기반 카드 슬라이드
- 카드 클릭 시 프로젝트 상세 모달(정보 테이블, 기술 뱃지, 설명, 링크) 표시

### Contact

- EmailJS를 사용한 문의 메일 전송
- 전송 중 상태 표시 및 성공·실패 결과 모달
- 연락처 카드(전화·이메일·GitHub) 제공

## 폴더 구조

```text
포트폴리오 리뉴얼 2
├─ public
│  ├─ files
│  │  ├─ 이승찬_이력서.pdf
│  │  ├─ MUTE_기획안.pdf
│  │  └─ Goreon_기획안.pdf
│  ├─ favicon.svg
│  ├─ icons.svg
│  └─ og-image.png
├─ src
│  ├─ assets
│  │  └─ img            # 프로젝트 썸네일, 스킬 아이콘, 연락처/프로필 이미지
│  ├─ components
│  │  ├─ Intro.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ ProjectModal.jsx
│  │  └─ SkillBar.jsx
│  ├─ sections
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Projects.jsx
│  │  └─ Contact.jsx
│  ├─ hooks
│  │  ├─ useLenis.js        # Lenis 인스턴스 + GSAP ticker 연동
│  │  └─ useFullPageSnap.js # 데스크탑 섹션 스냅 스크롤
│  ├─ data
│  │  ├─ ProjectData.js     # 팀·개인 프로젝트 데이터
│  │  └─ SubPage.js         # 기술 스택 숙련도, 연락처 데이터
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
```

## 실행 방법

의존성을 설치합니다.

```bash
npm install
```

개발 서버를 실행합니다.

```bash
npm run dev
```

프로덕션 빌드를 생성합니다.

```bash
npm run build
```

빌드 결과를 로컬에서 미리 확인합니다.

```bash
npm run preview
```

ESLint 검사를 실행합니다.

```bash
npm run lint
```

## 환경 변수

문의 폼 전송을 위해 프로젝트 루트에 `.env` 파일을 생성하고 EmailJS 정보를 설정해야 합니다.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env` 파일은 `.gitignore`에 포함되어 있으므로 저장소에 커밋하지 않습니다. EmailJS 환경 변수가 없으면 문의 기능은 정상적으로 동작하지 않습니다.

## 스크롤 & 애니메이션 구조

- `useLenis`: Lenis 인스턴스를 생성하고 GSAP ticker와 ScrollTrigger에 연결합니다. 인스턴스는 전역으로 공유되어 인트로·모달에서 스크롤을 잠그거나 재개할 때 사용합니다.
- `useFullPageSnap`: 데스크탑(1025px 이상)에서 휠 이벤트를 가로채 섹션 단위로 스냅 스크롤합니다. Projects 섹션의 가로 스크롤 핀 구간은 통과 영역으로 처리합니다.
- 각 섹션은 `@gsap/react`의 `useGSAP`와 ScrollTrigger를 사용해 진입 시 애니메이션을 재생합니다.

## 프로젝트 데이터 관리

프로젝트, 기술 스택, 연락처 데이터는 컴포넌트 내부에 직접 작성하는 대신 `src/data` 폴더에서 관리합니다.

- `src/data/ProjectData.js`: 팀·개인 프로젝트의 제목, 요약, 상세 정보, 링크, 설명
- `src/data/SubPage.js`: 기술 스택 숙련도(`LightIcons`)와 연락처(`ContactData`) 데이터

## 참고

- 이미지와 아이콘 리소스는 `src/assets/img`에 정리되어 있으며, 실제 코드에서 import하는 파일만 유지합니다.
- 이력서 및 기획안 PDF는 `public/files` 경로에 위치합니다.
