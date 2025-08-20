// src/components/info/InfoPage.tsx
import InfoLayout from "@/components/layouts/InfoLayout";
import InfoHero from "@/components/info/InfoHero";
import InfoParagraph from "@/components/info/InfoParagraph";
import InfoParagraphTitle from "@/components/info/InfoParagraphTitle";
import InfoImage from "@/components/info/InfoImage";
import InfoMeta from "@/components/info/InfoMeta";
import InfoList from "@/components/info/InfoList";

interface Content {
  hero: {
    title: string;
    subtitle?: string;
  };
  tableOfContents: any;
  sections: Array<{
    id: string;
    title: string;
    paragraphs?: string[];
    paragraphsAfterImage?: string[];
    list?: { ordered?: boolean; items: string[] };
    image?: { src: string; alt: string; caption?: string };
  }>;
  meta: {
    author?: string;
    lastUpdated?: string;
    references?: string[];
  };
}

interface InfoPageProps {
  content: Content;
}

export default function InfoPage({ content }: InfoPageProps) {
  return (
    <>
      <InfoHero title={content.hero.title}/>
      <InfoLayout tableOfContents={content.tableOfContents}>
        {content.sections.map((section) => (
          <div key={section.id} className="mb-8">
            <InfoParagraphTitle id={section.id}>{section.title}</InfoParagraphTitle>

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
          author={content.meta.author}
          lastUpdated={content.meta.lastUpdated}
        />
      </InfoLayout>
    </>
  );
}