# Astro Legal Pages

다국어를 지원하는 법률 페이지(이용약관, 개인정보처리방침) 생성을 위한 미니멀 Astro 템플릿입니다.

[English](./README.md)

## 기능

- 이용약관 페이지 (`/terms`)
- 개인정보처리방침 페이지 (`/privacy`)
- 다국어 지원 (영어, 한국어)
- 단일 설정 파일로 간편한 커스터마이징
- 최소 의존성 (Astro만 사용)

## 빠른 시작

### 1. 템플릿 사용

GitHub에서 **"Use this template"** 버튼을 클릭하여 새 저장소를 생성하세요.

### 2. 의존성 설치

```bash
npm install
```

### 3. 사이트 설정

`src/config.ts` 파일을 수정하세요:

```typescript
export const config = {
  siteName: '사이트 이름',
  siteUrl: 'https://example.com',
  contactEmail: 'contact@example.com',
  lastUpdated: '2024-01-01',
  locale: 'ko', // 'en' | 'ko'
};
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
│   ├── config.ts           # 사이트 설정 (이 파일을 수정)
│   ├── i18n/
│   │   ├── en.ts           # 영어 번역
│   │   └── ko.ts           # 한국어 번역
│   └── pages/
│       ├── terms.astro     # 이용약관 페이지
│       └── privacy.astro   # 개인정보처리방침 페이지
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 커스터마이징

### 언어 변경

`src/config.ts`에서 `locale`을 설정하세요:

```typescript
locale: 'ko', // 한국어
```

### 내용 수정

`src/i18n/` 폴더의 번역 파일을 수정하세요:

- `en.ts` - 영어 콘텐츠
- `ko.ts` - 한국어 콘텐츠

### 새 언어 추가

1. `src/i18n/`에 새 파일 생성 (예: `ja.ts`)
2. `en.ts`의 구조를 복사
3. 모든 내용 번역
4. `src/config.ts`에서 새 locale 지원 추가
5. 페이지 파일에서 새 번역 import

### 스타일 커스터마이징

각 `.astro` 페이지 파일의 `<style>` 섹션을 수정하세요.

## 라이선스

MIT
