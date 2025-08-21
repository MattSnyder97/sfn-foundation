import InfoParagraph from "@/components/info/InfoParagraph";
import InfoImage from "@/components/info/InfoImage";
import InfoList from "@/components/info/InfoList";

interface Block {
  type: string;
  [key: string]: any;
}

export default function BlockRenderer({ block }: { block: Block }) {
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
