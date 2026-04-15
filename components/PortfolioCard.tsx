import Link from 'next/link';
import type { PortfolioWorkObject } from '@/types';
import { getMetafieldValue } from '@/types';

interface PortfolioCardProps {
  work: PortfolioWorkObject;
}

export default function PortfolioCard({ work }: PortfolioCardProps) {
  const tagline = getMetafieldValue(work.metadata?.tagline);
  const featuredImage = work.metadata?.featured_image;
  const service = work.metadata?.service;

  return (
    <Link
      href={`/portfolio/${work.slug}`}
      className="group block relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-dark-100">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={300}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-dark-300">
            <svg
              className="w-16 h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View button on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-2 bg-white/95 text-dark-900 px-5 py-2.5 rounded-full text-sm font-semibold">
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-6">
        {service && (
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-semibold mb-3 uppercase tracking-wider">
            {getMetafieldValue(service.metadata?.name) || service.title}
          </span>
        )}

        <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-brand-600 transition-colors">
          {work.title}
        </h3>

        {tagline && (
          <p className="text-dark-500 text-sm line-clamp-2">{tagline}</p>
        )}
      </div>
    </Link>
  );
}