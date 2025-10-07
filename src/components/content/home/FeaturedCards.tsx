import { CardGrid } from "@/components/layouts/CardGrid";

export function FeaturedCards() {
  const featured = [
    {
      variant: "style3",
      title: "Research Backed Treatments to Improve SFN",
      description: "Neuropathy is a complex condition, but there are ways to manage your symptoms effectively.",
      imageSrc: "/images/common/doctorMan.png",
      href: "/about-sfn/treatments"
    },
    {
      variant: "style3",
      title: "All of the Symptoms Associated with Small Fiber Neuropathy",
      description: "Small fiber neuropathy can cause a huge range of symptoms.",
      imageSrc: "/images/common/painWoman.png",
      href: "/about-sfn/symptoms"
    },
    {
      variant: "style3",
      title: "SFN, ALA, EMG—oh my! Check out our SFN Glossary",
      description: "All the acronyms and terminology can be daunting, so we created a glossary.",
      imageSrc: "/images/common/confusedMan.png",
      href: "/resources/glossary"
    }
  ];

  return (
    <section className="bg-offWhite">
      <div className="container-padding mx-auto">
        <CardGrid cards={featured} />
      </div>
    </section>
  );
}