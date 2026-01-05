/**
 * Services Configuration
 * Add your services here with their respective information.
 */
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

/** Supported languages */
export const languages = ['en', 'ko'] as const;

export type ServiceId = keyof typeof services;
export type Lang = (typeof languages)[number];
export type ServiceConfig = (typeof services)[ServiceId];

/** Get service config by ID */
export function getServiceConfig(serviceId: string): ServiceConfig | undefined {
  return services[serviceId as ServiceId];
}

/** Get all service IDs */
export function getServiceIds(): ServiceId[] {
  return Object.keys(services) as ServiceId[];
}

/** Replace placeholders in content with service config values */
export function replacePlaceholders(content: string, config: ServiceConfig): string {
  return content
    .replace(/%siteName%/g, config.siteName)
    .replace(/%siteUrl%/g, config.siteUrl)
    .replace(/%contactEmail%/g, config.contactEmail)
    .replace(/%lastUpdated%/g, config.lastUpdated);
}
