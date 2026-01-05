# Astro Legal Pages

A minimal Astro template for generating legal pages (Terms of Service, Privacy Policy) with i18n support.

[한국어](./README.ko.md)

## Features

- Terms of Service page (`/terms`)
- Privacy Policy page (`/privacy`)
- Multi-language support (English, Korean)
- Single config file for easy customization
- Minimal dependencies (Astro only)

## Quick Start

### 1. Use this template

Click the **"Use this template"** button on GitHub to create a new repository.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your site

Edit `src/config.ts`:

```typescript
export const config = {
  siteName: 'Your Site Name',
  siteUrl: 'https://example.com',
  contactEmail: 'contact@example.com',
  lastUpdated: '2024-01-01',
  locale: 'en', // 'en' | 'ko'
};
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
│   ├── config.ts           # Site configuration (edit this)
│   ├── i18n/
│   │   ├── en.ts           # English translations
│   │   └── ko.ts           # Korean translations
│   └── pages/
│       ├── terms.astro     # Terms of Service page
│       └── privacy.astro   # Privacy Policy page
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Customization

### Change Language

Set `locale` in `src/config.ts`:

```typescript
locale: 'ko', // Korean
```

### Modify Content

Edit the translation files in `src/i18n/`:

- `en.ts` - English content
- `ko.ts` - Korean content

### Add New Language

1. Create a new file in `src/i18n/` (e.g., `ja.ts`)
2. Copy the structure from `en.ts`
3. Translate all content
4. Update `src/config.ts` to support the new locale
5. Update page files to import the new translation

### Customize Styling

Edit the `<style>` section in each `.astro` page file.

## License

MIT
