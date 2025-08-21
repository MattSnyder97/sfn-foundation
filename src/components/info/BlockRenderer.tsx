import InfoParagraph from "@/components/info/InfoParagraph";
import InfoImage from "@/components/info/InfoImage";
import InfoList from "@/components/info/InfoList";

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

interface BlockRendererProps {
  block: ContentBlockType;
}

export default function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "paragraph":
      return <InfoParagraph>{block.text}</InfoParagraph>;
    case "list":
      return <InfoList ordered={block.ordered} items={block.items} />;
    case "image":
      return <InfoImage src={block.src} alt={block.alt} caption={block.caption} />;
    default:
      return null;
  }
}