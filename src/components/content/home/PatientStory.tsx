import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";

export function PatientStory() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Slanted bottom edge - hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-offWhite transform origin-bottom-right -skew-y-2"></div>
     
      <div className="container-padding mx-auto relative">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-start gap-16 py-6 pb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-88 h-88 rounded-full overflow-hidden bg-primary p-2 default-shadow relative z-10">
              <Image
                src="/images/common/testimonial.png"
                alt="Matt's Journey with SFN"
                width={500}
                height={500}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-white pt-8">
            <blockquote className="font-serif text-3xl font-bold leading-relaxed mb-6">
              &quot;Small fiber neuropathy is a battle, but I have learned ways to cope with it from others.&quot;
            </blockquote>
           
            <p className="text-lg opacity mb-6">
              Matt, 28 years old, diagnosed in 2024
            </p>

            <Link
              href="/resources/patient-stories/"
              aria-label="Read Matt's full small fiber neuropathy story"
            >
              <Button variant="secondary" size="md">
                Read Patient Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-6 py-12 text-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-88 h-88 rounded-xl overflow-hidden bg-primary default-shadow">
              <Image
                src="/images/common/testimonial.png"
                alt="Matt's Journey with SFN"
                width={500}
                height={500}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-white">
            <blockquote className="font-serif text-xl font-extrabold leading-relaxed mb-6 text-shadow-subtle">
              &quot;Small fiber neuropathy is a battle, but I have learned ways to cope with it from others.&quot;
            </blockquote>
      
            <p className="text-base opacity mb-8 text-shadow-subtle">
              Matt, 28 years old, diagnosed in 2024
            </p>

            <Link href="/resources/patient-stories/">
              <Button
                variant="secondary"
                size="md"
                className="bg-white/90 text-primary hover:bg-white transition-colors duration-200"
                aria-label="Read Matt's full small fiber neuropathy story"
              >
                Read Patient Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
