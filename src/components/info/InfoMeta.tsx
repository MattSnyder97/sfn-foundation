// src/components/info/InfoMeta.tsx
interface InfoMetaProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  author?: string;
}

export default function InfoMeta({
  title,
  subtitle,
  lastUpdated,
  author,
}: InfoMetaProps) {
  return (
    <header className="mb-12 pb-8 border-b border-offWhite">
      <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-dark mb-6 leading-relaxed">{subtitle}</p>}
      <div className="flex flex-wrap gap-6 text-sm text-gray">
        {author && <span>Written by {author}</span>}
        {lastUpdated && <span>{lastUpdated}</span>}
      </div>
    </header>
  );
}