import InfoHero from "@/components/info/InfoHero";
import InfoLayout from "@/components/layouts/InfoLayout";
import InfoParagraphTitle from "@/components/info/InfoParagraphTitle";
import InfoMeta from "@/components/info/InfoMeta";
import BlockRenderer from "@/components/info/BlockRenderer";

export default function InfoPageTemplate({ content }: { content: any }) {
  return (
    <>
      <InfoHero title={content.hero.title} />

      <InfoLayout 
        tableOfContents={content.tableOfContents}
        title={content.hero.title}
      >
        {content.sections.map((section: any, index: number) => (
          <div key={section.id} className={index === 0 ? "" : "mt-12"}>
            <InfoParagraphTitle id={section.id}>
              {section.title}
            </InfoParagraphTitle>
            {section.content?.map((block: any, i: number) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>
        ))}

        <InfoMeta {...content.meta} />
      </InfoLayout>
    </>
  );
}
