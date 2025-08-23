import Image from "next/image";
import Link from "next/link";
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/30"/>
      </div>
     
      {/* Content */}
      <div className="container-padding mx-auto relative z-10 flex items-center min-h-[520px] md:min-h-[525px]">
        <div className="text-center md:text-left text-offWhite max-w-[900px] mx-auto md:mx-0">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                Giving Hope
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6">
                Through Community and Research
            </h2>
          <p className="text-base md:text-lg leading-relaxed text-offWhite/80 max-w-prose mb-8 mx-auto md:mx-0">
            Our foundation exists to speed up finding the cure for <span className="font-semibold">small fiber neuropathy</span> and provide you the support you need along the way.
          </p>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:flex-wrap md:gap-8 md:justify-start">
            <Button
              variant="outline"
              size="md"
            >
                <a
                    href="/resources/support-group"
                >
                    Support Group
                </a>
            </Button>
            <Button variant="outline" size="md">
                <Link href="/#news">
                    Latest Research
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}