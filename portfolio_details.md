# 프론트엔드 개발자 이승찬 - 포트폴리오 리뉴얼 상세 명세서

본 문서는 기존 포트폴리오 프로젝트의 **메타 태그(SEO), 탭 메뉴 구조, 화면별 슬로건, 프로젝트 정보, 레이아웃 규격, 이미지 리소스** 등 세부 사항을 정리한 명세서입니다. (색상 사양, 그라디언트, 배경색, 배경 이미지 등 모든 스타일 테마 색상 요소는 전면 개편 예정으로 제외되었습니다.)

---

## 1. 메타 태그 및 SEO 설정 (Meta Tags & SEO)
`index.html` 파일에 정의된 메타 태그 및 공유 설정(Open Graph, Twitter Cards) 정보입니다. (※ 테마 색상 태그의 색상값은 리뉴얼 대상입니다.)

| 구분 | 속성명 (Attribute) | 값 (Value) / 내용 |
| :--- | :--- | :--- |
| **언어 설정** | `<html lang="ko">` | 한국어 기본 설정 |
| **아이콘 (Favicon)** | `href="/favicon.svg"` | SVG 포맷 파비콘 |
| **문서 제목** | `<title>` | `이승찬 포트폴리오` |
| **설명 (Description)** | `description` | `사용자 흐름을 이해하고 직관적인 UI로 구현하는 프론트엔드 개발자 이승찬의 포트폴리오입니다.` |
| **키워드 (Keywords)** | `keywords` | `프론트엔드 개발자, 이승찬, React, Next.js, Vue, TypeScript, 포트폴리오` |
| **저자 (Author)** | `author` | `이승찬` |
| **테마 색상 (상단바)** | `theme-color` | *리뉴얼 시 재설정 예정* |
| **Open Graph (공유)** | `og:type` | `website` |
| | `og:url` | `https://portfolio-seung.vercel.app/` |
| | `og:title` | `이승찬 포트폴리오` |
| | `og:description` | `사용자 흐름을 이해하고 직관적인 UI로 구현하는 프론트엔드 개발자 이승찬의 포트폴리오입니다.` |
| | `og:image` | `https://portfolio-seung.vercel.app/og-image.png` |
| | `og:locale` | `ko_KR` |
| **Twitter Card** | `twitter:card` | `summary_large_image` |
| | `twitter:title` | `이승찬 포트폴리오` |
| | `twitter:description` | `사용자 흐름을 이해하고 직관적인 UI로 구현하는 프론트엔드 개발자 이승찬의 포트폴리오입니다.` |
| | `twitter:image` | `https://portfolio-seung.vercel.app/og-image.png` |

---

## 2. 화면별 슬로건 및 주요 카피 (Slogans & Key Text)
각 컴포넌트에 하드코딩되거나 배치된 슬로건과 텍스트 문구입니다.

### 2.1. 메인 화면 - 히어로 섹션 (Main Hero Slogans)
* **상단 분류 태그**: `Frontend Developer` · `React` · `Next.js` · `TypeScript`
* **메인 이름**: `이승찬`
* **핵심 슬로건**:
  * > "사용자의 시선에서 흐름을 **바라**보고"
  * > "아이디어를 실제 **경험**으로 연결하는 사람"
* **동작 버튼**: `프로젝트 둘러보기` (클릭 시 서브 페이지로 전환 애니메이션 시작)

### 2.2. 메인 화면 - 프로필 카드 (Profile Card)
* **역할 기술**: `Frontend Developer`
* **소개글**:
  * > "사용자 흐름을 이해하고,<br />직관적인 UI로 구현하는 프론트엔드<br />개발자입니다."
* **키워드 태그**: `React`, `Next.js`, `Vue`

### 2.3. 서브 페이지 - 문의하기 섹션 (Contact Me Copy)
* **헤더 문구**: `문의하기`
* **주요 요약**: `채용 제안, 프로젝트 제안, 협업 문의`
* **안내 설명**:
  * > "함께할 기회나 궁금한 점이 있다면 편하게 남겨주세요.<br />빠른 연락이 필요하신 경우 **전화**로 문의해 주세요."

---

## 3. Navigation 및 탭 메뉴 구조 (Navigation & Tab Menus)
포트폴리오의 흐름을 제어하는 레이아웃 및 탭 메뉴 구성입니다.

### 3.1. 메인 화면 카드 배치 (Main Dashboard Grid)
메인 화면은 카드형 대시보드 UI로 구성되어 있으며 다음과 같이 분할되어 배치됩니다.
* **상단 행 (Top Row)**: `프로필 카드` - `히어로 영역(센터)` - `프로젝트 요약 카드`
* **하단 행 (Bottom Row)**: `Contact Me 카드` - `자격증 카드`
* **최하단 슬라이더**: `SKILLS` 아이콘 목록 (Swiper Slide 형태)

### 3.2. 서브 페이지 상단 메인 탭 (Subpage Main Tabs)
서브 페이지의 네비게이션 역할을 하는 탭 버튼 목록입니다.
1. **`PROJECTS`** (기본 활성화 탭, 프로젝트 슬라이드 표시)
2. **`SKILLS`** (숙련도 퍼센트 게이지 애니메이션 스펙 표시)
3. **`CONTACT`** (EmailJS 기반의 이메일 전송 폼 카드 표시)
4. **`BACK`** (메인 대시보드 화면으로 돌아가는 버튼, 클릭 시 반대 방향 애니메이션 동작)

### 3.3. 프로젝트 탭 내 서브 필터 (Project Category Filters)
`PROJECTS` 탭 활성화 시 노출되는 리스트 필터링용 탭 메뉴입니다.
* **`전체`** (all): 모든 프로젝트 노출
* **`개인프로젝트`** (personal): 개인 프로젝트 8종 노출
* **`팀 프로젝트`** (team): 팀 공동 프로젝트 2종 노출

---

## 4. 프로젝트 상세 데이터 (10 Projects Database)
`src/data/ProjectData.js`와 `src/data/Main.js`에 정의된 10종의 프로젝트 스펙 및 링크 정보입니다.

### 4.1. 팀 프로젝트 (Team Projects)

#### 🤝 1. MUTE (AI 기반 뮤직 웹 앱)
* **메인 한줄 소개**: `AI기반 뮤직 웹앱`
* **구분**: 팀 프로젝트 (3명)
* **기간**: 기획 15일 / 디자인 19일 / 개발 33일
* **역할 / 담당**: 개발 / UI 퍼블리싱 · API 연동 · 플레이어 기능 · PHP API 개발
* **사용 기술**: Vue 3 · Pinia · CSS3 · Axios · PHP · MySQL
* **배포 환경**: Dothome
* **상세 링크**:
  * [SPLASH](https://muteapp.dothome.co.kr/splash)
  * [메인](https://muteapp.dothome.co.kr/main)
  * [AI페이지](https://muteapp.dothome.co.kr/main/ai)
  * [마이페이지](https://muteapp.dothome.co.kr/main/mypage)
  * [차트](https://muteapp.dothome.co.kr/main/chart)
  * [검색](https://muteapp.dothome.co.kr/main/search)
  * [라이브러리](https://muteapp.dothome.co.kr/main/library)
  * [GitHub](https://github.com/leechan9715/mutehtml/tree/vue/main)
  * [간트차트](https://docs.google.com/spreadsheets/d/13GazU9eCavfxvy6y3nxorqrsIXHQIMl7fW89MIOw1IM/edit?gid=0#gid=0)
  * [기획안 PDF 다운로드](기획안 파일 오픈 연동)
* **설명 (textArea)**:
  Vue와 PHP를 학습한 후, Vue · PHP · MySQL을 활용한 AI 기반 음악 웹 애플리케이션 MUTE를 첫 팀 프로젝트로 진행했습니다.<br/>팀원들과 함께 기획, 디자인, 개발 전 과정에 참여하며 각 단계의 중요성을 직접 체감했습니다. 1인 개발과 달리 팀원들과 적극적으로 소통하고 의견을 조율하는 과정에서 더 완성도 높은 결과물을 만들 수 있었고, 협업의 힘을 실감한 프로젝트입니다.<br/>UI 퍼블리싱 · API 연동 · 플레이어 기능 · PHP API 개발을 담당하며 프론트엔드와 백엔드를 아우르는 다양한 경험을 쌓았습니다.<br/>개발 중 Vue와 PHP 간 API 통신에서 CORS 문제를 마주쳤고, 이를 해결하는 과정에서 클라이언트-서버 구조에 대한 이해를 한층 높일 수 있었습니다.<br/>또한 GitHub를 활용한 협업을 통해 브랜치 관리와 코드 리뷰 등 체계적인 개발 프로세스를 경험하며 팀 개발 역량을 키울 수 있었습니다.<br/>이 프로젝트를 통해 단순히 기능을 구현하는 것을 넘어, 팀 안에서 개발자로서 소통하고 책임감 있게 역할을 수행하는 것의 중요성을 배웠습니다.

---

#### 🤝 2. GOREON (AI 기반 전자기기 쇼핑몰)
* **메인 한줄 소개**: `AI기반 전자기기 쇼핑몰 반응형 제작`
* **구분**: 팀 프로젝트 (5명)
* **기간**: 기획 6일 / 디자인 10일 / 개발 11일
* **역할 / 담당**: 프론트엔드 개발 / 기획 · 디자인 보조 / UI 개발
* **사용 기술**: React · Express · Redux · SCSS · Axios · MongoDB
* **배포 환경**: Render (LiveDemo: https://goreon-0x90.onrender.com/)
* **상세 링크**:
  * [메인페이지](https://vercel-frontend-goreon.vercel.app/)
  * [회원가입](https://vercel-frontend-goreon.vercel.app/register) / [로그인](https://vercel-frontend-goreon.vercel.app/login)
  * [장바구니](https://vercel-frontend-goreon.vercel.app/cart)
  * [찜한상품](https://vercel-frontend-goreon.vercel.app/wishlist)
  * [마이페이지](https://vercel-frontend-goreon.vercel.app/mypage)
  * [상품리스트](https://vercel-frontend-goreon.vercel.app/list?type=notebook)
  * [PC조립](https://vercel-frontend-goreon.vercel.app/pc-assembly)
  * [GitHub](https://github.com/muteLJS/GOREON)
  * [기획안 PDF 다운로드](기획안 파일 오픈 연동)
* **설명 (textArea)**:
  두 번째 팀 프로젝트로, React · Express · MongoDB를 활용한 AI 기반 전자기기 쇼핑몰 웹 서비스 GOREON을 진행했습니다.<br/>단순 상품 나열형 쇼핑몰이 아닌, 사용자가 직접 탐색하거나 AI 추천을 통해 상품을 비교하고 선택할 수 있는 흐름을 구현하는 것을 목표로 했습니다.<br/>첫 번째 프로젝트 MUTE를 통해 팀원과의 소통 방식과 협업 흐름을 익혔고, 이번 프로젝트에서는 그 경험을 바탕으로 초반부터 팀원들과 데이터 구조, 공통 컴포넌트, 스타일 기준을 먼저 맞추며 보다 체계적으로 협업을 이끌어 나갈 수 있었습니다.<br/>상품 리스트 · 상세 페이지 UI, Axios를 활용한 API 연동, Redux Toolkit 기반 전역 상태 관리, 찜 · 장바구니 기능, 반응형 레이아웃 구현을 담당했습니다.<br/>개발 과정에서 상품 데이터 필드 불일치 문제를 normalize 로직으로 해결하고, 찜 상태를 Redux로 전역 관리하여 화면 간 상태 일관성을 확보했습니다. 또한 SCSS 믹스인을 활용해 모바일 · 태블릿 · 데스크톱 환경에 맞는 반응형 그리드를 구현했습니다.<br/>첫 번째 프로젝트에서 협업의 흐름을 익혔다면, 이번 프로젝트에서는 데이터 구조 설계와 상태 관리 등 기술적인 깊이를 더하며 개발자로서 한 단계 더 성장할 수 있었습니다.

---

### 4.2. 개인 프로젝트 (Personal Projects)

#### 👤 3. BnbNetWork (HTML, 반응형)
* **메인 한줄 소개**: `자사 웹사이트 반응형 제작`
* **구분**: 개인 프로젝트 / 외주 작업 (1명)
* **기간**: 2.5주 (기여도 100%)
* **사용 기술**: HTML · Css · Javascript · Bootstrap
* **배포 환경**: Cafe24
* **상세 링크**:
  * [LiveDemo](https://bnbnetworks.cafe24.com/)
  * [GitHub](https://github.com/inpos12/bnbnetwork)
* **설명 (textArea)**:
  HTML · CSS · JavaScript를 독학으로 학습하던 중 Bootstrap을 접하게 되었고, 반응형 웹을 직접 구현해보고자 BnbNetWork 자사 회사 사이트를 제작했습니다.<br/>지인으로부터 처음으로 외주 의뢰를 받아 진행한 개인 프로젝트로, 메인 페이지와 서브 페이지로 구성된 회사 소개 사이트를 구현했습니다.<br/>Bootstrap을 활용해 모바일 · 태블릿 · 데스크톱 환경에서 최적화된 반응형 레이아웃을 구성했으며, 학습한 HTML · CSS · JavaScript를 실제 프로젝트에 적용하며 기초를 탄탄히 다질 수 있었습니다.<br/>단순 학습용 프로젝트가 아닌 실제 클라이언트의 요구사항을 반영해야 했기에, 요구사항을 파악하고 이를 화면으로 구현하는 실무적인 경험을 쌓을 수 있었던 첫 번째 외주 프로젝트입니다.

---

#### 👤 4. BnbNetworksReact (React 리뉴얼)
* **메인 한줄 소개**: `자사 웹사이트 React 리뉴얼`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 2.5주 (기여도 100%)
* **사용 기술**: React · React Router · Styled-Components · Kakao Maps API
* **배포 환경**: GitHub Pages
* **상세 링크**:
  * [LiveDemo](https://inpos12.github.io/bnbnetworkreact/)
  * [GitHub](https://github.com/inpos12/bnbnetworkreact)
* **설명 (textArea)**:
  HTML · CSS · JavaScript로 제작했던 BnbNetWork 사이트를 React를 학습한 후 새롭게 재구현한 개인 프로젝트입니다.<br/>기존 HTML 버전과 동일한 사이트를 React로 다시 만들며, 컴포넌트 기반 구조로 코드 재사용성을 높이고 유지보수성을 개선하는 것을 목표로 했습니다.<br/>Styled Components를 활용해 스타일을 컴포넌트화하여 코드 중복을 줄였고, React Router로 페이지 전환 시 새로고침 없는 부드러운 이동을 구현했습니다. 미디어 쿼리와 Flexbox를 활용해 모바일 · 태블릿 · 데스크톱 환경에 맞는 반응형 레이아웃을 구성했으며, 모바일 환경에서는 햄버거 메뉴를 적용해 사용자 접근성을 높였습니다.<br/>또한 Kakao Maps API를 연동해 회사 위치를 지도에 직관적으로 표시했습니다.<br/>같은 사이트를 HTML에서 React로 직접 전환하며, 단순히 React 문법을 익히는 것을 넘어 컴포넌트 설계 방식과 구조적인 사고의 차이를 몸소 체감할 수 있었던 프로젝트입니다.

---

#### 👤 5. SHOP (쇼핑몰 반응형 웹사이트)
* **메인 한줄 소개**: `쇼핑몰 반응형 웹사이트`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 1달 (기여도 100%)
* **사용 기술**: React · JavaScript · Styled-Components · Bootstrap · Firebase · Firestore
* **배포 환경**: GitHub Pages
* **상세 링크**:
  * [LiveDemo](https://inpos12.github.io/shop/)
  * [GitHub](https://github.com/inpos12/shop)
* **설명 (textArea)**:
  HTML · CSS · JavaScript로 기초를 다진 후, BNB NetWorks 사이트를 React로 재구현하며 컴포넌트 기반 개발 방식에 익숙해진 뒤 도전한 개인 프로젝트입니다.<br/>React와 Firebase를 독학으로 학습하며 배운 내용을 직접 구현해보고자 PHARMACY SHOP을 기획했으며, React의 컴포넌트 기반 구조를 활용해 UI를 효율적으로 재사용하고 Firebase를 통해 별도의 서버 없이 클라우드 기반으로 데이터를 관리하는 쇼핑몰을 구현했습니다.<br/>Styled Components로 스타일을 컴포넌트화하여 유지보수성을 높였고, React Router로 페이지 전환 시 새로고침 없는 부드러운 이동을 구현했습니다. Bootstrap을 활용해 모바일 · 태블릿 · 데스크톱 환경에 맞는 반응형 레이아웃도 적용했습니다.<br/>관리자 기능으로는 로그인한 사용자의 UID를 비교해 어드민 여부를 판별하고, 관리자만 상품 데이터를 추가 · 수정할 수 있도록 접근을 제한했습니다. 또한 Kakao Maps API를 연동해 회사 위치를 지도에 표시하는 기능도 구현했습니다.<br/>단순 회사 사이트 구현을 넘어 Firebase 인증 · 데이터 관리 · 외부 API 연동까지 직접 구현하며, 스스로 문제를 정의하고 해결하는 능력을 한층 키울 수 있었던 프로젝트입니다.

---

#### 👤 6. Netflix (영화 스트리밍 정보 웹)
* **메인 한줄 소개**: `TMDB 활용한 넷플릭스`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 1주 (기여도 100%)
* **사용 기술**: React · TypeScript · Styled-Components · TMDB API
* **배포 환경**: GitHub Pages
* **상세 링크**:
  * [LiveDemo](https://inpos12.github.io/netflix-project/)
  * [GitHub](https://github.com/inpos12/netflix-project)
* **설명 (textArea)**:
  PHARMACY SHOP 프로젝트를 통해 React와 Firebase를 활용한 개발에 익숙해진 후, 새롭게 TypeScript를 접하게 되어 처음으로 도전한 개인 프로젝트입니다.<br/>완성도보다는 TypeScript의 타입 시스템과 외부 API 연동 방식을 직접 익히는 것을 목표로, TMDB API를 활용해 넷플릭스와 유사한 영화 스트리밍 사이트를 구현했습니다.<br/>TMDB API를 연동해 영화 목록 · 포스터 · 예고편 · 제목 · 상영 시간 · 장르 정보를 출력했으며, Styled Components를 활용해 컴포넌트 단위로 스타일을 관리했습니다.<br/>기존 JavaScript로 작업하던 방식에서 벗어나 TypeScript의 타입 정의와 인터페이스를 적용하며, 코드의 안정성과 가독성을 높이는 개발 방식을 체감할 수 있었던 프로젝트입니다.

---

#### 👤 7. Kakao Renewal (카카오 메인 반응형 리뉴얼)
* **메인 한줄 소개**: `카카오 웹사이트 반응형 리뉴얼`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 3주 (기여도 100%)
* **사용 기술**: HTML5 · SCSS · JavaScript · jQuery · PHP · MySQL
* **배포 환경**: Dothome
* **상세 링크**:
  * [LiveDemo](https://young8686.dothome.co.kr/kakao/)
  * [GitHub](https://github.com/leechan9715/Kakao-Renewal/tree/main)
* **설명 (textArea)**:
  TypeScript와 TMDB API를 활용한 프로젝트를 마친 후, 그동안 배운 기술들을 복습하고 새로운 기술을 함께 익히고자 진행한 개인 프로젝트입니다.<br/>Kakao 메인 사이트를 리뉴얼하는 방식으로 Kakao Renewal을 기획했으며, HTML · SCSS · JavaScript · jQuery · PHP · MySQL을 활용해 풀스택 흐름을 직접 경험했습니다.<br/>로그인 · 회원가입 · 이메일 변경 · 비밀번호 변경 기능을 PHP와 MySQL로 구현하며 서버와 데이터베이스 간 데이터 흐름을 직접 다뤄볼 수 있었습니다.<br/>원스크롤 페이지 특성상 반응형 레이아웃을 구현하는 데 어려움이 있었습니다. 섹션마다 콘텐츠 구조와 배치가 달라 화면 크기에 따라 레이아웃이 무너지는 문제가 반복됐고, 며칠간 고민하며 각 섹션별 미디어 쿼리를 세밀하게 조정한 끝에 모바일 · 태블릿 · 데스크톱 환경에서 자연스럽게 동작하는 반응형 원스크롤 사이트를 완성할 수 있었습니다.<br/>React 중심의 개발에서 벗어나 HTML · SCSS · jQuery 기반으로 돌아와 기초를 다시 다지면서, 프레임워크 없이도 구조적으로 코드를 작성하는 능력을 키울 수 있었던 프로젝트입니다.

---

#### 👤 8. Portfolio (포트폴리오 대시보드 웹)
* **메인 한줄 소개**: `개인 포트폴리오 웹사이트`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 3주 (기여도 100%)
* **사용 기술**: React · JavaScript · Tailwind CSS
* **배포 환경**: Vercel (LiveDemo: https://portfolio-nine-murex-vtgmelanap.vercel.app/)
* **상세 설명**:
  * **SubPage 내 타이틀 소개**: `PORTFOLIO`
  * **SubPage 내 서브 설명**: `AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다.`
* **상세 링크**:
  * [GitHub](https://github.com/leechan9715/PortFolio)
  * [LiveDemo](https://portfolio-nine-murex-vtgmelanap.vercel.app/)
* **설명 (textArea)**:
  그동안 진행해온 모든 프로젝트와 기술 역량을 한눈에 볼 수 있도록 React · Tailwind CSS · JavaScript를 활용해 제작한 개인 포트폴리오 웹사이트입니다.<br/>메인 페이지에서는 보유 기술 스택을 아이콘으로 한눈에 확인할 수 있으며, 버튼 클릭 시 화면 전환 애니메이션과 함께 각 스킬의 숙련도를 퍼센트 게이지로 시각적으로 표현했습니다.<br/>프로젝트는 개인 프로젝트 · 팀 프로젝트로 탭을 나눠 분류했으며, 전체 탭에서 모든 프로젝트를 한번에 확인할 수 있도록 구성했습니다. 메인 페이지에서도 프로젝트 리스트를 간략하게 미리 볼 수 있어 빠른 탐색이 가능합니다.<br/>문의하기 탭을 통해 이메일을 직접 전송할 수 있는 기능을 구현해 방문자가 바로 연락할 수 있도록 했습니다.<br/>단순히 프로젝트를 나열하는 것을 넘어, 그동안의 성장 과정과 기술 역량을 직관적으로 전달할 수 있도록 구조와 사용자 경험을 고민하며 제작한 사이트입니다.

---

#### 👤 9. LoopNote (AI 기반 에듀테크 학습 플랫폼)
* **메인 한줄 소개**: `AI 기반 에듀테크 학습 플랫폼`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 1일 (기여도 100%)
* **사용 기술**: Next.js · Tailwind CSS · Codex · Gemini · Antigravity
* **배포 환경**: Vercel
* **상세 설명**:
  * **SubPage 내 타이틀 소개**: `LoopNote`
  * **SubPage 내 서브 설명**: `초등학생의 오답과 막힘을 '10분 회복 미션'으로 전환하는 AI 학습 플랫폼`
* **상세 링크**:
  * [GitHub](https://github.com/leechan9715/LoopNote)
  * [LiveDemo](https://loopnote-alpha.vercel.app/)
  * [Vercel](Vercel 대시보드 연동)
* **설명 (textArea)**:
  OCR 기반 오답 판독 및 단계별 AI 힌트(Socratic Tutoring), 그리고 학부모·교사용 대시보드와 같은 고난도 에듀테크 비즈니스 로직을 구축하기 위해 WSL2 및 Tmux 가상 터미널 환경을 설계했습니다. <br/>이 격리된 인프라 위에서 Gemini CLI가 구조 기획 및 정밀 사양서(Surgical Plan)를 발행하면, Codex CLI가 이를 준수하여 자율 코드 구현을 수행하고, 다시 Gemini가 4대 파괴 테스트(심층 감사)를 수행하여 백그라운드에서 오류를 스스로 수정하는 견고한 피드백 루프를 운용했습니다. <br/>이 에이전트 협업 프로세스를 통해 기획 의도와 소스 코드 간의 싱크율을 극대화하고, Next.js App Router 아키텍처 상의 복잡한 데이터 흐름과 예외 상황들을 결함 없이 안전하게 빌드하여 최종 배포했습니다.

---

#### 👤 10. WorkLog (반응형 기업 사내 인프라 포털)
* **메인 한줄 소개**: `반응형 기업 사내 인트라넷 포털`
* **구분**: 개인 프로젝트 (1명)
* **기간**: 1일 (기여도 100%)
* **사용 기술**: PHP · 그누보드5 · Codex · Gemini · Antigravity
* **배포 환경**: Dothome (LiveDemo: https://tmdcks8686.dothome.co.kr/)
* **상세 설명**:
  * **SubPage 내 타이틀 소개**: `WorkLog`
  * **SubPage 내 서브 설명**: `반응형 기업 사내 인트라넷 포털 시스템`
* **상세 링크**:
  * [GitHub](https://github.com/leechan9715/CompanyWorkLog)
  * [LiveDemo](https://tmdcks8686.dothome.co.kr/)
  * [Dothome](도트홈 인프라 연동)
* **설명 (textArea)**:
  노후화된 그누보드5의 테이블 레이아웃을 프리미엄 반응형 인프라로 전면 개편하기 위해, WSL2 및 Tmux 멀티 세션 기반의 '듀얼 에이전트 상호 역할 헌법(AI Operational Constitution)'을 수립하고 개발을 주도했습니다.<br/>기획과 설계를 전담하는 Gemini CLI는 PC/Mobile 디렉토리 이원화 구조를 단일 뷰포트 반응형 아키텍처로 전향하는 마이그레이션 전략을 기획하고, UI 컴포넌트의 HSL 색상 규격과 아크릴 슬라이드 드로어의 터치 이벤트 명세를 담은 초정밀 설계 사양서(Surgical Plan)를 물리 장부(Ledger)로 발행했습니다. <br/>구현을 전담하는 Codex CLI는 이 장부 프로토콜을 100% 신뢰하여 레거시 코드를 걷어내고 컴포넌트를 자율 구현했습니다. 특히 연차관리 캘린더의 날짜 밀림 현상 및 회원가입 Glitch와 같은 복잡한 비즈니스 로직 수정 시, Codex는 컴파일 및 린트 오류 발생 즉시 스스로 에러를 격리 및 수정하는 '자가 에러 디버깅 루프'를 작동시켜 빌드 안정성을 확보했습니다.<br/>코딩 완료 후에는 Gemini가 극단적인 모바일 뷰포트 해상도 주입 및 비정상적 가입 폼 데이터 검증 등 4대 파괴 테스트(심층 감사)를 수행하여, 단 하나의 결함도 존재하지 않을 때까지 에이전트 간 백그라운드 피드백 루프(Silent Auto-Loop)를 가동시켰습니다. <br/>설계 일관성(DoD)을 완벽히 만족하며 단 1일 만에 결함률 0%에 수렴하는 프리미엄 사내 포털 시스템을 배포하는 데 성공했습니다.

---

## 5. 디자인 시스템 및 CSS 설정 (Design System & CSS)

### 5.1. 폰트 및 레이아웃 설정
* **웹 폰트**: `Pretendard` (CDN 연동 적용)
* **배경 레이아웃 구성**:
  * 메인 대시보드와 서브 페이지 전환 시 배경 전환 처리 방식 (리뉴얼 시 배경 테마는 새로 작성 예정)

*※ 기존에 설정되어 있던 테마 색상(Gradients, Hex, RGBA 값)과 배경 이미지 파일들(`bg-1.png`, `bg-2.png` 등)은 리뉴얼 과정에서 전면 개편되거나 사용하지 않을 예정이므로 본 명세서에서 제외 처리되었습니다.*

---

## 6. 리덕스 상태 관리 및 트랜지션 (Redux State & Transitions)
`App.jsx`와 `Main.jsx`, `SubPage.jsx` 간의 부드러운 화면 교차 및 슬라이드 트랜지션 제어 명세입니다.

### 6.1. Redux UI Slice (`src/store/uiSlice.js`)
* **초기 상태 (initialState)**:
  * `isMainHidden: false` (메인 대시보드 노출 여부)
  * `isTransitioning: false` (배경 이미지 및 화면 전환 상태 여부)
* **액션(Actions) 및 동작 규칙**:
  1. `startMainTransition`: 메인 화면 슬라이드 닫기 트리거 (`isTransitioning = true`)
  2. `hideMain`: 메인 화면 완전 제거 및 서브 화면 진입 준비 (`isMainHidden = true`, `isTransitioning = true`)
  3. `startMainReturn`: 서브 화면 퇴장 트리거 (`isTransitioning = false`)
  4. `showMain`: 메인 화면 원복 (`isMainHidden = false`, `isTransitioning = false`)

### 6.2. CSS 트랜지션 애니메이션 (CSS Classes for Page transition)
* **진입(Enter) 시점 애니메이션**:
  * 서브 페이지 프로필: `.section-profile-enter` (1s ease, translateX(-32px) -> 0, opacity 0 -> 1)
  * 서브 페이지 우측 영역: `.section-content-enter` (0.75s ease-in-out, 딜레이 0.75s, max-height 0 -> 100%)
* **퇴장(Leave) 시점 애니메이션**:
  * 서브 페이지 프로필: `.section-profile-leave` (0.75s ease, 딜레이 0.75s, translateX(0) -> -32px, opacity 1 -> 0)
  * 서브 페이지 우측 영역: `.section-content-leave` (0.75s ease-in-out, max-height 100% -> 0)

---

## 7. 이미지 리소스 및 매핑 정보 (Image Resources & Mapping)
프로젝트 내부(`src/assets/img/`)에 저장되어 실제로 컴포넌트에서 활용 중인 이미지 리소스 파일의 명세입니다. (배경 이미지는 사용 제외 처리로 제외되었습니다.)

### 7.1. 인물 프로필 이미지 (Profile Images)
* **메인 대시보드 프로필 카드 이미지**:
  * **매핑 변수명**: `Porfile`
  * **실제 파일 경로**: `src/assets/img/profile.png`
* **서브 페이지 프로필 전신 이미지**:
  * **매핑 변수명**: `ProfileImg`
  * **실제 파일 경로**: `src/assets/img/profile-2.png`

### 7.2. 유틸리티 및 일반 아이콘 (Utility & Common Icons)
* **전화번호 아이콘**: `src/assets/img/call.png`
* **이메일 아이콘**: `src/assets/img/email.png`
* **PDF 문서 아이콘**: `src/assets/img/pdf.png`
* **개발/기획 프로세스 아이콘 4종**:
  * 기획분석 (`icon_1.png`) · UI/UX 설계 (`icon_2.png`) · 개발 구현 (`icon_3.png`) · 배포 & 운영 (`icon_4.png`)
* **방향 지시 화살표 아이콘**: `src/assets/img/arrow.png` / `src/assets/img/arrow-blue.png`

### 7.3. 프로젝트 썸네일 이미지 (Project Thumbnails)
* **MUTE**: `src/assets/img/main-mute.png` (메인용) / `src/assets/img/mute.png` (서브용)
* **GOREON**: `src/assets/img/goreon.png`
* **BnbNetWork (HTML)**: `src/assets/img/bnbnetworks.png`
* **BnbNetWork (React)**: `src/assets/img/bnbnetworks-react.png`
* **SHOP**: `src/assets/img/shop.png`
* **Netflix**: `src/assets/img/netflix.png`
* **Kakao Renewal**: `src/assets/img/kakao.png`
* **Portfolio**: `src/assets/img/portfolio-2.png` (여분용: `portfolio.png`)
* **LoopNote**: `src/assets/img/LoopNote.png`
* **WorkLog**: `src/assets/img/WorkLog.png`

### 7.4. 메인 화면 기술 스택 아이콘 (Main Page Skill Icons - `src/data/Main.js`)
메인 화면 하단 스위퍼(Swiper)에서 가로 스크롤 형태로 흐르는 아이콘 목록입니다.
* **Github**: `src/assets/img/Github-dark.png` (여분: `Github-dark-2.png`)
* **HTML / CSS / Sass / TailwindCSS**: `html-dark.png`, `css-dark.png`, `sass-dark.png`, `TailwindCSS-Dark.png`
* **JavaScript / JQuery / Bootstrap**: `javascript-dark.png`, `jquery-dark.png`, `Bootstrap-dark.png`
* **React / NextJS / Vue**: `React-Dark.png`, `NextJS-Dark.png`, `Vue-Dark.png`
* **NodeJS / PHP / MongoDB**: `NodeJS-Dark.png`, `PHP-Dark.png`, `mongodb-dark.png`
* **Figma**: `src/assets/img/Figma-Dark.png`
* **AI & 에이전트 툴 (OpenAI/Codex/Antigravity/Gemini)**: `openai.png`, `codex.png`, `antigravity.png`, `gemini.png`

### 7.5. 서브 페이지 기술 스택 아이콘 (Sub Page Skill Icons - `src/data/SubPage.js`)
서브 페이지 `SKILLS` 탭에서 퍼센트 게이지바와 함께 표시되는 아이콘 목록입니다.
* **Github / Figma**: `light/Github-Light.png`, `light/Figma-Light.png`
* **HTML / CSS / Sass / TailwindCSS**: `light/HTML-Light.png`, `light/CSS-Light.png`, `light/Sass-Light.png`, `light/TailwindCSS-Light.png`
* **JavaScript / JQuery / Bootstrap**: `light/JavaScript-Light.png`, `light/JQuery-Light.png`, `light/Bootstrap-Light.png`
* **React / NextJS / Vue**: `light/React-Light.png`, `light/NextJS-Light.png`, `light/VueJS-Light.png`
* **NodeJS / PHP / MongoDB**: `light/NodeJS-Light.png`, `light/PHP-Light.png`, `light/mongodb-light.png`
* **AI & 에이전트 툴 (OpenAI/Codex/Antigravity/Gemini)**: `light/openai.png`, `light/codex-color.svg`, `light/antigravity-color.svg`, `light/gemini-color.svg`
