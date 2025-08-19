// src/components/info/InfoHero.tsx
interface InfoHeroProps {
  title: string;
  subtitle?: string;
}

export default function InfoHero({ title, subtitle }: InfoHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Primary background */}
      <div className="absolute inset-0 bg-primary" />
     
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/30"/>
     
      {/* Content */}
      <div className="container-padding mx-auto relative z-10 flex items-center min-h-[400px] py-24">
        <div className="text-left text-offWhite max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}