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
  // Function to render individual content blocks
  const renderContentBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <div key={index} className="mb-6">
            <InfoParagraph>{block.text}</InfoParagraph>
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className="mb-6">
            <InfoList 
              ordered={block.ordered} 
              items={block.items} 
            />
          </div>
        );
      
      case 'image':
        return (
          <div key={index} className="mb-6">
            <InfoImage
              src={block.src}
              alt={block.alt}
              caption={block.caption}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

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

            {/* Render all content blocks in order */}
            {section.content?.map((block, index) => 
              renderContentBlock(block, index)
            )}
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