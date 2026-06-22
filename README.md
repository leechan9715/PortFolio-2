# Portfolio

React와 Vite로 제작한 프론트엔드 개발자 이승찬의 포트폴리오 웹사이트입니다. 메인 화면에서는 프로필, 프로젝트 요약, 연락처, 운영 프로세스, 기술 스택을 한눈에 볼 수 있고, 프로젝트 둘러보기 버튼을 통해 상세 페이지로 자연스럽게 전환됩니다.

## 프로젝트 소개

이 프로젝트는 단순한 목록형 포트폴리오가 아니라, 카드형 대시보드 UI와 전환 애니메이션을 활용해 사용자에게 인터랙티브한 탐색 경험을 제공하는 것을 목표로 합니다.

주요 구성은 다음과 같습니다.

- 메인 포트폴리오 화면
- 프로젝트 상세 탭
- 기술 스택 통계 탭
- EmailJS 기반 문의 폼
- 이력서 PDF 미리보기 모달
- 연락처 및 GitHub 링크

## 기술 스택

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Redux
- Swiper
- EmailJS
- React PDF
- ESLint

## 주요 기능

### 메인 화면

- 프로필 카드와 소개 문구 표시
- 프로젝트 목록 카드 표시
- 연락처 카드 표시
- 기획, UI/UX 설계, 개발 구현, 배포 및 운영 프로세스 표시
- 기술 스택 아이콘 슬라이더 제공
- 기술 아이콘 클릭 시 마우스를 따라다니는 플로팅 아이콘 효과 제공

### 서브 페이지

- `PROJECTS`, `SKILLS`, `CONTACT` 탭 구성
- 전체, 개인 프로젝트, 팀 프로젝트 필터링
- Swiper 기반 프로젝트 상세 슬라이드
- 기술 스택 숙련도 게이지 애니메이션
- 메인 화면으로 돌아가는 전환 애니메이션

### 문의 기능

- EmailJS를 사용한 문의 메일 전송
- 전송 중 상태 표시
- 성공 및 실패 메시지 표시

### 이력서 미리보기

- `react-pdf`를 사용해 PDF 이력서를 모달 안에서 미리보기
- 여러 페이지 PDF 렌더링 지원
- 모달 외부 클릭 또는 닫기 버튼으로 종료

## 폴더 구조

```text
PortFolio
├─ public
│  ├─ files
│  │  └─ 이승찬_이력서.pdf
│  └─ favicon.svg
├─ src
│  ├─ assets
│  │  └─ img
│  ├─ comopents
│  │  ├─ Main.jsx
│  │  ├─ SubPage.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Pdf.jsx
│  │  └─ ...
│  ├─ data
│  │  ├─ Main.js
│  │  ├─ MainClass.js
│  │  └─ SubPage.js
│  ├─ store
│  │  ├─ store.js
│  │  └─ uiSlice.js
│  ├─ App.jsx
│  ├─ App.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
```

> 현재 컴포넌트 폴더명은 `src/comopents`로 되어 있습니다.

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

`.env` 파일은 `.gitignore`에 포함되어 있으므로 저장소에 커밋하지 않습니다.

## 최근 작업 내용

최근 Git 커밋 기준으로 다음 작업들이 반영되어 있습니다.

- 이력서 PDF 미리보기 모달 추가
- 이력서 미리보기 크기 조정
- 문의 화면 스타일 정리
- 컴포넌트 데이터 분리
- 서브 페이지에서 메인 페이지로 돌아가기 애니메이션 추가
- 메인 프로젝트 목록 이미지 연결
- 이력서 PDF 갱신
- 프로필 연락처와 이력서 링크 추가
- 문의 폼 탭 추가
- 프로젝트 필터와 추가 이미지 연결

## 프로젝트 데이터 관리

프로젝트, 기술 스택, 연락처 데이터는 컴포넌트 내부에 직접 작성하는 대신 `src/data` 폴더에서 관리합니다.

- `src/data/Main.js`: 메인 화면 프로젝트 목록, 다크 테마 기술 아이콘, 운영 프로세스 데이터
- `src/data/SubPage.js`: 서브 페이지 기술 스택 숙련도, 연락처 데이터
- `src/data/MainClass.js`: 메인 화면 Tailwind 클래스 그룹

## 상태 관리

Redux Toolkit의 `uiSlice`를 사용해 메인 화면과 서브 페이지의 표시 상태 및 전환 상태를 관리합니다.

- `isMainHidden`: 메인 화면 표시 여부
- `isTransitioning`: 배경 및 화면 전환 애니메이션 상태
- `showMain`, `hideMain`, `startMainTransition`, `startMainReturn`: 화면 전환 액션

## 참고

- 이력서 PDF 파일은 `public/files/이승찬_이력서.pdf` 경로를 사용합니다.
- 문의 기능은 EmailJS 환경 변수가 없으면 정상적으로 동작하지 않습니다.
- 이미지와 아이콘 리소스는 `src/assets/img`에 정리되어 있습니다.
