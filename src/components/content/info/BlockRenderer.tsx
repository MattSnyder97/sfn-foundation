import InfoParagraph from "@/components/content/info/InfoParagraph";
import InfoImage from "@/components/content/info/InfoImage";
import InfoList from "@/components/content/info/InfoList";
import LatestNewsList from "@/components/content/info/LatestNewsList";
import PatientStoriesList from "@/components/content/info/PatientStoriesList";

interface ContentBlock {
  type: "paragraph" | "list" | "image" | "component";
  name?: string;
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

interface ComponentBlock extends ContentBlock {
  type: "component";
  name: string;
}

type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock | ComponentBlock;

interface BlockRendererProps {
  block: ContentBlockType;
}

export default function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "paragraph":
      return <InfoParagraph>{(block as ParagraphBlock).text}</InfoParagraph>;
    case "list":
      return <InfoList ordered={(block as ListBlock).ordered} items={(block as ListBlock).items} />;
    case "image":
      return <InfoImage src={(block as ImageBlock).src} alt={(block as ImageBlock).alt} caption={(block as ImageBlock).caption} />;
    case "component":
      if ((block as ComponentBlock).name === "LatestNewsList") {
        return <LatestNewsList />;
      }
      if ((block as ComponentBlock).name === "PatientStoriesList") {
        return <PatientStoriesList />;
      }
      return null;
    default:
      return null;
  }
}