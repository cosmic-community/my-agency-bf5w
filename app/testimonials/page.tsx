import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/cosmic';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Testimonials — My Agency',
  description:
    'See what our clients have to say about working with My Agency.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <section className="py-24 bg-dark-900 text-white min-h-screen">
      <div className="container-max section-padding">
        {/* Page Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-900/50 text-brand-300 rounded-full text-sm font-semibold mb-6 border border-brand-700/30">
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Client Love
          </div>
        </div>
        <SectionHeading
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the brands we've had the pleasure of working with."
          dark
        />

        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-400 text-lg">
              Testimonials coming soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}