# Shop Agent Landing Page

Shop Agent의 공식 랜딩 페이지입니다. GSAP 애니메이션과 Next.js 14, Tailwind CSS를 활용하여 제작되었습니다.

## 🚀 프로젝트 개요

Shop Agent는 쇼핑몰에 AI 상담원을 쉽게 추가할 수 있는 SDK입니다. 이 랜딩 페이지는 Shop Agent의 기능과 가치를 효과적으로 전달하기 위해 제작되었습니다.

### 주요 특징

- **GSAP 애니메이션**: 부드럽고 매력적인 스크롤 애니메이션
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **다크 모드 지원**: 시스템 설정에 따른 자동 다크 모드
- **성능 최적화**: Next.js 14의 최신 기능 활용
- **접근성**: WCAG 가이드라인 준수

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4
- **Animation**: GSAP (GreenSock)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (권장)

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.17.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🎨 컴포넌트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/
│   ├── Header.tsx         # 헤더 컴포넌트
│   ├── Hero.tsx          # 히어로 섹션
│   ├── Features.tsx      # 기능 소개 섹션
│   ├── Demo.tsx          # 데모 섹션
│   └── Footer.tsx        # 푸터 컴포넌트
```

## 🎭 애니메이션 기능

### GSAP 애니메이션

- **스크롤 트리거**: 요소가 화면에 나타날 때 애니메이션 실행
- **타임라인**: 순차적인 애니메이션 시퀀스
- **패럴랙스**: 배경 요소의 깊이감 표현
- **호버 효과**: 인터랙티브한 사용자 경험

### 주요 애니메이션

1. **헤더**: 스크롤 시 배경 블러 효과
2. **히어로**: 타이틀과 CTA 버튼의 순차 등장
3. **기능 카드**: 스태거 애니메이션으로 카드 등장
4. **데모 채팅**: 자동 재생되는 대화 시뮬레이션
5. **푸터**: 부드러운 등장 애니메이션

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: Blue (#3b82f6, #2563eb)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### 타이포그래피

- **제목**: Bold, 3xl-7xl
- **부제목**: Medium, xl-2xl
- **본문**: Regular, base-lg
- **캡션**: Light, sm

### 컴포넌트

- **버튼**: Primary, Secondary, Ghost 스타일
- **카드**: Glassmorphism 효과
- **입력 필드**: 포커스 상태 애니메이션
- **네비게이션**: 반응형 햄버거 메뉴

## 📱 반응형 디자인

### 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### 최적화

- **이미지**: Next.js Image 컴포넌트 활용
- **폰트**: 시스템 폰트 스택 사용
- **성능**: 코드 스플리팅 및 지연 로딩

## 🌙 다크 모드

### 자동 감지

- 시스템 설정에 따른 자동 전환
- 사용자 수동 토글 가능
- 로컬 스토리지에 설정 저장

### 색상 매핑

- **Light**: 밝은 배경, 어두운 텍스트
- **Dark**: 어두운 배경, 밝은 텍스트
- **컴포넌트**: 모든 컴포넌트가 다크 모드 지원

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 환경 변수

```env
NEXT_PUBLIC_SITE_URL=https://shopagent.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📊 성능 최적화

### Core Web Vitals

- **LCP**: < 2.5초
- **FID**: < 100ms
- **CLS**: < 0.1

### 최적화 기법

- **이미지 최적화**: WebP 포맷, 적응형 크기
- **폰트 최적화**: 시스템 폰트 우선 사용
- **번들 최적화**: Tree shaking, 코드 스플리팅
- **캐싱**: 정적 자산 캐싱 전략

## 🔧 개발 가이드

### 코드 스타일

- **TypeScript**: 엄격한 타입 체크
- **ESLint**: 코드 품질 관리
- **Prettier**: 일관된 코드 포맷팅

### 커밋 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 업데이트
style: 코드 스타일 변경
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 프로세스 변경
```

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 문의

- **이메일**: contact@shopagent.com
- **GitHub**: [Shop Agent Repository](https://github.com/shopagent)
- **문서**: [Shop Agent Docs](https://docs.shopagent.com)

---

© 2025 Shop Agent. All rights reserved.
