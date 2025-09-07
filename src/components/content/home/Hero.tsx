import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Layer 1: Solid color */}
      <div className="absolute inset-0" style={{ background: '#5159CF', zIndex: 0 }} />

      {/* Layer 2: Linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #5159CF 20%, #629FFB 100%)',
          opacity: 1,
          zIndex: 1,
        }}
      />

      {/* Layer 3: Background image with low opacity */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <Image
          src="/images/common/heroBackground.jpg"
          alt="small fiber neuropathy"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          style={{ opacity: 0.03 }}
        />
      </div>

      {/* Content */}
      <div className="container-padding mx-auto relative z-10 flex items-center min-h-[520px] md:min-h-[525px]">
        <div className="text-center md:text-left text-offWhite max-w-[550px] mx-auto md:mx-0">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Giving Hope
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Through Community and Research
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-offWhite/80 max-w-prose mb-8 mx-auto md:mx-0">
            Our foundation strives to cure small fiber neuropathy and give you the support you need until that day comes.
          </p>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:flex-wrap md:gap-8 md:justify-start">
            <Button variant="secondary" size="md">
              <Link href="/resources/support-group">Support Group</Link>
            </Button>
            <Button variant="outline" size="md">
              <Link href="/research">Latest Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}