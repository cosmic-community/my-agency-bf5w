import type { ServiceObject } from '@/types';
import { getMetafieldValue } from '@/types';

interface ServiceCardProps {
  service: ServiceObject;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const name = getMetafieldValue(service.metadata?.name) || service.title;
  const description = getMetafieldValue(service.metadata?.description);
  const iconEmoji = getMetafieldValue(service.metadata?.icon_emoji);
  const featuredImage = service.metadata?.featured_image;

  return (
    <div className="group relative bg-white rounded-2xl border border-dark-100 overflow-hidden hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      {featuredImage && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={250}
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Icon */}
        {iconEmoji && (
          <span className="text-4xl mb-4 block">{iconEmoji}</span>
        )}

        <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>

        {description && (
          <p className="text-dark-500 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}