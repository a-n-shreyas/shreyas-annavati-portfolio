import Reveal from './Reveal';

interface SectionHeadingProps {
  codeLabel: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  codeLabel,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <span className="code-label">{codeLabel}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-text-dim ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
