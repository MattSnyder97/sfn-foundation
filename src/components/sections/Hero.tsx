import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Primary background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Background image with opacity */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroBackground.jpg"
          alt="small fiber neuropathy"
          fill
          priority
          className="object-cover opacity-7"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/50"/>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 flex items-center min-h-[520px] md:min-h-[560px]">
        <div className="py-12 text-left text-white max-w-[900px]">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                Giving Hope
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6">
                Through Community and Research
            </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-prose mb-8">
            Our foundation exists to speed up finding the cure for <span className="font-semibold">small fiber neuropathy</span> and provide you the support you need along the way.
          </p>
          <div className="flex flex-wrap gap-8">
            <Button variant="secondary" size="md" className="rounded-full">
              Latest Research
            </Button>
            <Button
              variant="outline"
              size="md"
              className="rounded-full border-white text-white hover:bg-white/10"
            >
              Support Group
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}