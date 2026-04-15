interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {label && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
            dark ? 'text-brand-400' : 'text-brand-600'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl font-bold mb-6 ${
          dark ? 'text-white' : 'text-dark-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            dark ? 'text-dark-300' : 'text-dark-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}