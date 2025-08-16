import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Testimonial() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Slanted bottom edge - hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-offWhite transform origin-bottom-right -skew-y-2"></div>
     
      <div className="container-padding mx-auto relative">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-start gap-16 py-6 pb-12">
          {/* Profile Image - bigger and positioned to hang way off bottom */}
          <div className="flex-shrink-0 relative">
            <div className="w-88 h-88 rounded-full overflow-hidden bg-primary p-2 shadow-2xl relative z-10">
              <Image
                src="/images/testimonial.png"
                alt="Matt testimonial"
                width={500}
                height={500}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Content - positioned much higher */}
          <div className="flex-1 text-white pt-8">
            <blockquote className="text-3xl font-normal leading-relaxed mb-6">
              &quot;Small fiber neuropathy is a battle, but I have learned ways to cope with it from others.&quot;
            </blockquote>
           
            <p className="text-lg opacity-80 mb-6">
              — Matt, 28 years old, diagnosed in 2024
            </p>
            
            <Button
              variant="secondary"
              size="md"
              className="bg-white/90 text-primary hover:bg-white transition-colors duration-200"
            >
              Read More
            </Button>
          </div>
        </div>

        {/* Mobile Layout - Simple rectangular background */}
        <div className="lg:hidden flex flex-col items-center gap-6 py-12 text-center">
          {/* Profile Image - smaller on mobile */}
          <div className="flex-shrink-0">
            <div className="w-88 h-88 rounded-xl overflow-hidden bg-primary shadow-2xl">
              <Image
                src="/images/testimonial.png"
                alt="Matt testimonial"
                width={500}
                height={500}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-white">
            <blockquote className="text-xl font-normal leading-relaxed mb-6">
              &quot;Small fiber neuropathy is a battle, but I have learned ways to cope with it from others.&quot;
            </blockquote>
           
            <p className="text-base opacity-80 mb-8">
              Matt, 28 years old, diagnosed in 2024
            </p>
            
            <Button
              variant="secondary"
              size="md"
              className="bg-white/90 text-primary hover:bg-white transition-colors duration-200"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}