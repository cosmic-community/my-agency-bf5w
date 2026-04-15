import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-dark-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />

      <div className="relative container-max section-padding">
        <div className="py-28 md:py-40 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600/20 text-brand-300 rounded-full text-sm font-semibold mb-8 border border-brand-500/30">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
            Creative Agency
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
            We craft{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              digital
            </span>{' '}
            experiences that{' '}
            <span className="bg-gradient-to-r from-brand-300 to-brand-200 bg-clip-text text-transparent">
              matter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-dark-300 max-w-2xl mb-12 leading-relaxed">
            We are a creative agency specializing in brand strategy, digital
            design, and innovative solutions that help businesses grow and
            connect with their audiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-xl shadow-brand-600/25 hover:shadow-brand-500/30"
            >
              View Our Work
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
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors border border-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}