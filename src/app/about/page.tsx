import InfoLayout from "@/components/layouts/InfoLayout";
import InfoHero from "@/components/info/InfoHero";
import InfoParagraph from "@/components/info/InfoParagraph";
import InfoParagraphTitle from "@/components/info/InfoParagraphTitle";
import InfoImage from "@/components/info/InfoImage";
import InfoMeta from "@/components/info/InfoMeta";
import InfoList from "@/components/info/InfoList";

// Enter the content that needs to be displayed on the page
import { treatmentsContent } from "@/content/treatments";

export default function InfoPage() {
  return (
    <>
      {/* Hero/Header */}
      <InfoHero
        title={treatmentsContent.hero.title}
      />

      <InfoLayout tableOfContents={treatmentsContent.tableOfContents}>
        {treatmentsContent.sections.map((section) => (
          <div key={section.id}>
            <InfoParagraphTitle id={section.id}>
              {section.title}
            </InfoParagraphTitle>

            {section.paragraphs?.map((p, i) => (
              <InfoParagraph key={i}>{p}</InfoParagraph>
            ))}

            {section.list && (
              <InfoList ordered={section.list.ordered} items={section.list.items} />
            )}

            {section.image && (
              <InfoImage
                src={section.image.src}
                alt={section.image.alt}
                caption={section.image.caption}
              />
            )}

            {section.paragraphsAfterImage?.map((p, i) => (
              <InfoParagraph key={i}>{p}</InfoParagraph>
            ))}
          </div>
        ))}

        <InfoMeta
          author={treatmentsContent.meta.author}
          lastUpdated={treatmentsContent.meta.lastUpdated}
          references={treatmentsContent.meta.references}
        />
      </InfoLayout>
    </>
  );
}
