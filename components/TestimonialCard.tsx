import type { TestimonialObject } from '@/types';
import { getMetafieldValue } from '@/types';

interface TestimonialCardProps {
  testimonial: TestimonialObject;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const quote = getMetafieldValue(testimonial.metadata?.quote);
  const clientName = getMetafieldValue(testimonial.metadata?.client_name);
  const company = getMetafieldValue(testimonial.metadata?.company);
  const clientPhoto = testimonial.metadata?.client_photo;

  return (
    <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-brand-600/30 transition-colors">
      {/* Quote Icon */}
      <svg
        className="w-10 h-10 text-brand-500/30 mb-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote */}
      {quote && (
        <p className="text-dark-200 leading-relaxed mb-8 text-lg italic">
          &ldquo;{quote}&rdquo;
        </p>
      )}

      {/* Client Info */}
      <div className="flex items-center gap-4">
        {clientPhoto ? (
          <img
            src={`${clientPhoto.imgix_url}?w=96&h=96&fit=crop&auto=format,compress&facepad=3&faceindex=1`}
            alt={clientName || 'Client'}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/30"
            width={48}
            height={48}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-600/20 flex items-center justify-center ring-2 ring-brand-500/30">
            <span className="text-brand-400 font-bold text-lg">
              {clientName ? clientName.charAt(0) : '?'}
            </span>
          </div>
        )}
        <div>
          {clientName && (
            <p className="text-white font-semibold">{clientName}</p>
          )}
          {company && (
            <p className="text-dark-400 text-sm">{company}</p>
          )}
        </div>
      </div>
    </div>
  );
}