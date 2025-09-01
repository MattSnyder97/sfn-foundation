import InfoLayout from "@/components/layouts/InfoLayout";
import InfoParagraphTitle from "@/components/content/info/InfoParagraphTitle";
import InfoMeta from "@/components/content/info/InfoMeta";
import BlockRenderer from "@/components/content/info/BlockRenderer";

interface ContentBlock {
  type: "paragraph" | "list" | "image";
}

interface ParagraphBlock extends ContentBlock {
  type: "paragraph";
  text: string;
}

interface ListBlock extends ContentBlock {
  type: "list";
  ordered: boolean;
  items: string[];
}

interface ImageBlock extends ContentBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock;

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface ContentSection {
  id: string;
  title: string;
  content: ContentBlockType[];
}

interface ContentMeta {
  author: string;
  lastUpdated: string;
  references: {
    title: string;
    link: string;
  }[];
}

interface ContentData {
  hero: {
    title: string;
  };
  tableOfContents: TableOfContentsItem[];
  sections: ContentSection[];
  meta: ContentMeta;
}

interface InfoPageTemplateProps {
  content: ContentData;
}

export default function InfoPageTemplate({ content }: InfoPageTemplateProps) {
  return (
    <>

      <InfoLayout 
        tableOfContents={content.tableOfContents}
        title={content.hero.title}
      >
        {content.sections.map((section: ContentSection, index: number) => (
          <div key={section.id} className={index === 0 ? "" : "mt-12"}>
            <InfoParagraphTitle id={section.id}>
              {section.title}
            </InfoParagraphTitle>
            {section.content?.map((block: ContentBlockType, i: number) => (
              <div key={i} className={i === section.content.length - 1 ? "" : "mb-4"}>
                <BlockRenderer block={block} />
              </div>
            ))}
          </div>
        ))}

        <InfoMeta {...content.meta} />
      </InfoLayout>
    </>
  );
}