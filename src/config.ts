/**
 * Site Configuration
 * Modify these values to match your site's information.
 */
export const config = {
  /** Your site/company name */
  siteName: 'Your Site Name',

  /** Your site URL (without trailing slash) */
  siteUrl: 'https://example.com',

  /** Contact email for legal inquiries */
  contactEmail: 'contact@example.com',

  /** Last updated date (YYYY-MM-DD format) */
  lastUpdated: '2024-01-01',

  /** Language: 'en' for English, 'ko' for Korean */
  locale: 'en' as const,
};

export type Locale = typeof config.locale;
