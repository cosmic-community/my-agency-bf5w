export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface ServiceObject extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    description?: string;
    icon_emoji?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface TeamMemberObject extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
  };
}

export interface PortfolioWorkObject extends CosmicObject {
  type: 'portfolio-work';
  metadata: {
    tagline?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    service?: ServiceObject;
  };
}

export interface TestimonialObject extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    company?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}