import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Testimonial() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Slanted bottom edge - angled up to the right */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-offWhite transform origin-bottom-right -skew-y-2"></div>
      
      <div className="container-padding mx-auto py-14 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Profile Image - overlapping the background */}
          <div className="flex-shrink-0 relative -mb-120 lg:-mb-16">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-primary p-2 shadow-3xl">
              <Image
                src="/images/testimonial.png"
                alt="Matt testimonial"
                width={320}
                height={320}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-white lg:pt-8">
            <blockquote className="text-2xl lg:text-3xl font-serif leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
              "Small fiber neuropathy is a battle, but I have learned ways to cope with it from others."
            </blockquote>
            
            <p className="text-lg opacity-70 mb-8">
              — Matt, 28 years old, diagnosed in 2024
            </p>

            <Button 
              variant="secondary" 
              size="md"
              className="bg-white/90 text-primary hover:bg-white"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}