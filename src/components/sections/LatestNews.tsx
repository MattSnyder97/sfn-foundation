import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function LatestNews() {
  const featuredArticle = {
    variant: "style3" as const,
    title: "The Cure for SFN Has Never Been Closer",
    description: "We partner the most brilliant minds in the SFN space with AI to speed up the process to find a cure.",
    imageSrc: "/images/researchGuy.png",
    href: "/research/latest"
  };

  return (
    <section className="bg-offWhite">
      <div className="container-padding mx-auto">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Latest News and Research
            </h2>
            <p className="text-base text-gray mb-8 max-w-prose mx-auto">
              Stay updated with the latest breakthroughs and research in small fiber neuropathy treatment and management.
            </p>
            <Button variant="primary" size="md">
              See More
            </Button>
          </div>
          
          {/* Mobile Card */}
          <div className="flex justify-center">
            <div className="max-w-sm">
              <Card {...featuredArticle} />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Latest News and Research
            </h2>
            <p className="text-lg text-gray mb-10 leading-relaxed">
              Stay updated with the latest breakthroughs and research in small fiber neuropathy treatment and management.
            </p>
            <Button variant="outlinePrimary" size="md">
              See More
            </Button>
          </div>
          
          {/* Right Card */}
          <div className="flex-shrink-0">
            <Card {...featuredArticle} />
          </div>
        </div>
      </div>
    </section>
  );
}