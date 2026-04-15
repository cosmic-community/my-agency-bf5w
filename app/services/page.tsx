import type { Metadata } from 'next';
import { getServices } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Our Services — My Agency',
  description:
    'Explore our full range of creative services designed to elevate your brand.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="py-24 bg-white">
      <div className="container-max section-padding">
        {/* Page Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-6">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            What We Do
          </div>
        </div>
        <SectionHeading
          title="Our Services"
          description="We offer a comprehensive suite of creative services designed to elevate your brand and drive measurable results."
        />

        {services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-400 text-lg">
              No services available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}