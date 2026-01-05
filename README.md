# Astro Legal Pages

A minimal Astro template for generating legal pages (Terms of Service, Privacy Policy) with multi-service and i18n support using MDX.

[한국어](./README.ko.md)

## Features

- Multi-service support (`/service-a/en/terms`, `/service-b/ko/privacy`, etc.)
- Multi-language support (English, Korean)
- MDX-based content for easy editing
- Per-service configuration
- Minimal dependencies

## Quick Start

### 1. Use this template

Click the **"Use this template"** button on GitHub to create a new repository.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your services

Edit `src/config.ts`:

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

### 4. Run development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── config.ts              # Services configuration (edit this)
│   ├── content.config.ts      # Content Collection schema
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

## URLs

- `/service-a/en/terms` - Service A English Terms
- `/service-a/ko/terms` - Service A Korean Terms
- `/service-a/en/privacy` - Service A English Privacy
- `/service-a/ko/privacy` - Service A Korean Privacy
- `/service-b/en/terms` - Service B English Terms
- ...

## Customization

### Add New Service

1. Add service config to `src/config.ts`:
   ```typescript
   export const services = {
     // ...existing services
     'new-service': {
       siteName: 'New Service',
       siteUrl: 'https://new-service.example.com',
       contactEmail: 'contact@new-service.example.com',
       lastUpdated: '2024-01-01',
     },
   };
   ```

2. Create content folder:
   ```bash
   cp -r src/content/service-a src/content/new-service
   ```

3. Edit MDX files in `src/content/new-service/`

### Edit Content

Edit MDX files in `src/content/[service]/[lang]/`:

- `terms.mdx` - Terms of Service
- `privacy.mdx` - Privacy Policy

### Placeholders

Use these placeholders in MDX content (automatically replaced per service):

- `%siteName%` - Service name
- `%siteUrl%` - Service URL
- `%contactEmail%` - Contact email

### Add New Language

1. Add language code to `languages` array in `src/config.ts`
2. Create language folder in each service: `src/content/[service]/[new-lang]/`
3. Copy and translate MDX files

## License

MIT
