// app/portfolio/[slug]/page.tsx
import type { Metadata } from 'next';
import { getPortfolioWorkBySlug, getPortfolioWorks } from '@/lib/cosmic';
import { getMetafieldValue } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const works = await getPortfolioWorks();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioWorkBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found — My Agency' };
  }

  return {
    title: `${project.title} — My Agency Portfolio`,
    description:
      getMetafieldValue(project.metadata?.tagline) ||
      `View ${project.title} in our portfolio.`,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getPortfolioWorkBySlug(slug);

  if (!project) {
    notFound();
  }

  const tagline = getMetafieldValue(project.metadata?.tagline);
  const description = getMetafieldValue(project.metadata?.description);
  const featuredImage = project.metadata?.featured_image;
  const gallery = project.metadata?.gallery;
  const service = project.metadata?.service;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-900 text-white">
        {featuredImage && (
          <div className="absolute inset-0">
            <img
              src={`${featuredImage.imgix_url}?w=1920&h=800&fit=crop&auto=format,compress`}
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
              width={1920}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent" />
          </div>
        )}
        <div className="relative container-max section-padding py-32 md:py-40">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-medium mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Portfolio
          </Link>
          {service && (
            <span className="inline-block px-4 py-1.5 bg-brand-600/20 text-brand-300 rounded-full text-sm font-semibold mb-4 border border-brand-500/30">
              {getMetafieldValue(service.metadata?.name) || service.title}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          {tagline && (
            <p className="text-xl md:text-2xl text-dark-300 max-w-3xl">
              {tagline}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            {description && (
              <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed">
                {description.split('\n').map((paragraph, idx) => {
                  if (!paragraph.trim()) return null;
                  return (
                    <p key={idx} className="mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="py-20 bg-dark-50">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-dark-900 mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-auto object-cover"
                    width={600}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Like what you see?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-xl mx-auto">
            Let&apos;s create something amazing together. Reach out to discuss
            your next project.
          </p>
          <a
            href="mailto:hello@myagency.com"
            className="inline-flex items-center gap-3 bg-white text-brand-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-50 transition-colors shadow-lg"
          >
            Start a Project
          </a>
        </div>
      </section>
    </>
  );
}