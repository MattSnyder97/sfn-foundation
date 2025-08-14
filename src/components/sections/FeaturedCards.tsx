import { CardProps } from "@/components/ui/Card";
import { CardGrid } from "@/components/layouts/CardGrid";

export function FeaturedCards() {
  const featured = [
    {
      variant: "style3",
      title: "Research Backed Ways to Improve Your SFN Symptoms",
      description: "Neuropathy is a complex condition, but there are ways to manage your symptoms effectively.",
      imageSrc: "/images/doctorMan.png",
      href: "#"
    },
    {
      variant: "style3",
      title: "Common Symptoms Associated with SFN",
      description: "Unfortunately, small fiber neuropathy can cause a wide range of symptoms.",
      imageSrc: "/images/painWoman.png",
      href: "#"
    },
    {
      variant: "style3",
      title: "SFN, ALA, EMG, oh my! Check Out Our Acronym Dictionary",
      description: "Understanding all the terminology can be daunting, but our dictionary makes it easier.",
      imageSrc: "/images/confusedMan.png",
      href: "#"
    }
  ];

  return (
    <section className="py-18 bg-offWhite">
      <div className="container-padding mx-auto">
        <CardGrid cards={featured} />
      </div>
    </section>
  );
}