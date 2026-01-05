# Astro Legal Pages

MDX를 사용한 멀티 서비스 및 다국어 지원 법률 페이지(이용약관, 개인정보처리방침) 생성을 위한 미니멀 Astro 템플릿입니다.

[English](./README.md)

## 기능

- 멀티 서비스 지원 (`/service-a/en/terms`, `/service-b/ko/privacy` 등)
- 다국어 지원 (영어, 한국어)
- MDX 기반 콘텐츠로 쉬운 편집
- 서비스별 설정
- 최소 의존성

## 빠른 시작

### 1. 템플릿 사용

GitHub에서 **"Use this template"** 버튼을 클릭하여 새 저장소를 생성하세요.

### 2. 의존성 설치

```bash
npm install
```

### 3. 서비스 설정

`src/config.ts` 파일을 수정하세요:

```typescript
export const services = {
  'service-a': {
    siteName: 'Service A',
    siteUrl: 'https://service-a.example.com',
    contactEmail: 'contact@service-a.example.com',
    lastUpdated: '2024-01-01',
  },
  'service-b': {
    siteName: 'Service B',
    siteUrl: 'https://service-b.example.com',
    contactEmail: 'contact@service-b.example.com',
    lastUpdated: '2024-01-01',
  },
} as const;
```

### 4. 개발 서버 실행

```bash
npm run dev
```

### 5. 프로덕션 빌드

```bash
npm run build
```

## 프로젝트 구조

```
├── src/
│   ├── config.ts              # 서비스 설정 (이 파일을 수정)
│   ├── content.config.ts      # Content Collection 스키마
│   ├── content/
│   │   ├── service-a/
│   │   │   ├── en/
│   │   │   │   ├── terms.mdx
│   │   │   │   └── privacy.mdx
│   │   │   └── ko/
│   │   │       ├── terms.mdx
│   │   │       └── privacy.mdx
│   │   └── service-b/
│   │       ├── en/
│   │       └── ko/
│   └── pages/
│       └── [service]/
│           └── [lang]/
│               ├── terms.astro
│               └── privacy.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## URL

- `/service-a/en/terms` - Service A 영어 이용약관
- `/service-a/ko/terms` - Service A 한국어 이용약관
- `/service-a/en/privacy` - Service A 영어 개인정보처리방침
- `/service-a/ko/privacy` - Service A 한국어 개인정보처리방침
- `/service-b/en/terms` - Service B 영어 이용약관
- ...

## 커스터마이징

### 새 서비스 추가

1. `src/config.ts`에 서비스 설정 추가:
   ```typescript
   export const services = {
     // ...기존 서비스
     'new-service': {
       siteName: 'New Service',
       siteUrl: 'https://new-service.example.com',
       contactEmail: 'contact@new-service.example.com',
       lastUpdated: '2024-01-01',
     },
   };
   ```

2. 콘텐츠 폴더 생성:
   ```bash
   cp -r src/content/service-a src/content/new-service
   ```

3. `src/content/new-service/`의 MDX 파일 수정

### 콘텐츠 편집

`src/content/[service]/[lang]/`의 MDX 파일을 수정하세요:

- `terms.mdx` - 이용약관
- `privacy.mdx` - 개인정보처리방침

### 플레이스홀더

MDX 콘텐츠에서 다음 플레이스홀더를 사용할 수 있습니다 (서비스별로 자동 치환됨):

- `%siteName%` - 서비스 이름
- `%siteUrl%` - 서비스 URL
- `%contactEmail%` - 연락처 이메일

### 새 언어 추가

1. `src/config.ts`의 `languages` 배열에 언어 코드 추가
2. 각 서비스에 언어 폴더 생성: `src/content/[service]/[new-lang]/`
3. MDX 파일 복사 및 번역

## 라이선스

MIT
