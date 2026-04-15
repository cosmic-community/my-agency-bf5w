import {
  getServices,
  getTeamMembers,
  getPortfolioWorks,
  getTestimonials,
} from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import TeamCard from '@/components/TeamCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

export default async function HomePage() {
  const [services, teamMembers, portfolioWorks, testimonials] =
    await Promise.all([
      getServices(),
      getTeamMembers(),
      getPortfolioWorks(),
      getTestimonials(),
    ]);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container-max section-padding">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="We offer a comprehensive suite of creative services designed to elevate your brand and drive results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {services.length > 6 && (
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-lg transition-colors"
              >
                View All Services
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-dark-50">
        <div className="container-max section-padding">
          <SectionHeading
            label="Our Work"
            title="Featured Portfolio"
            description="Explore our latest projects and see how we bring creative visions to life."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {portfolioWorks.slice(0, 6).map((work) => (
              <PortfolioCard key={work.id} work={work} />
            ))}
          </div>
          {portfolioWorks.length > 6 && (
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-lg transition-colors"
              >
                View All Projects
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container-max section-padding">
          <SectionHeading
            label="Our People"
            title="Meet the Team"
            description="The talented individuals behind our creative excellence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          {teamMembers.length > 4 && (
            <div className="text-center mt-12">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-lg transition-colors"
              >
                View Full Team
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-dark-900 text-white">
        <div className="container-max section-padding">
          <SectionHeading
            label="Client Love"
            title="What Our Clients Say"
            description="Hear from the brands we've had the pleasure of working with."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          {testimonials.length > 6 && (
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-semibold text-lg transition-colors"
              >
                View All Testimonials
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-10">
            Let&apos;s work together to bring your vision to life. Get in touch
            with our team today.
          </p>
          <a
            href="mailto:hello@myagency.com"
            className="inline-flex items-center gap-3 bg-white text-brand-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-50 transition-colors shadow-lg hover:shadow-xl"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}