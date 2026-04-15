import type { Metadata } from 'next';
import { getPortfolioWorks } from '@/lib/cosmic';
import PortfolioCard from '@/components/PortfolioCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Portfolio — My Agency',
  description:
    'Explore our portfolio of creative projects and see how we bring ideas to life.',
};

export default async function PortfolioPage() {
  const portfolioWorks = await getPortfolioWorks();

  return (
    <section className="py-24 bg-dark-50">
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Our Work
          </div>
        </div>
        <SectionHeading
          title="Portfolio"
          description="A showcase of our creative projects, from branding and design to digital experiences and beyond."
        />

        {portfolioWorks.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-400 text-lg">
              No projects available yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {portfolioWorks.map((work) => (
              <PortfolioCard key={work.id} work={work} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}