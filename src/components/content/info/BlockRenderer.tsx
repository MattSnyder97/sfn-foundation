"use client";
import trackEvent from "@/lib/analytics";
import InfoParagraph from "@/components/content/info/InfoParagraph";
import InfoImage from "@/components/content/info/InfoImage";
import InfoList from "@/components/content/info/InfoList";
import LatestNewsList from "@/components/content/info/ResearchList";
import PatientStoriesList from "@/components/content/info/PatientStoriesList";
import PatientShortStory from "@/components/content/info/PatientShortStory";
import SpecialistCard from '@/components/content/info/SpecialistCard';
import Roadmap from "@/components/content/info/Roadmap";

interface ContentBlock {
  type: "paragraph" | "list" | "image" | "component" | "button" | "specialist";
  name?: string;
  component?: string;
  props?: Record<string, unknown>;
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
  alt?: string;
  caption?: string;
}

interface SpecialistBlock extends ContentBlock {
  type: "specialist";
  nameTitle: string;
  location: string;
  imageSrc: string;
  alt?: string;
  link?: string;
}

// Derive a readable alt text from an image filename, e.g. "chestThroatPain.jpg" -> "Image of chest throat pain"
function deriveAltFromSrc(src: string) {
  try {
    const parts = src.split('/');
    const filename = parts[parts.length - 1] || src;
    const name = filename.replace(/\.[^.]+$/, ''); // remove extension
    // split on non-word chars and camelCase boundaries
    const spaced = name
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[_-]+/g, ' ')
      .replace(/\W+/g, ' ')
      .trim();
    if (!spaced) return 'Image';
    return `Image of ${spaced.toLowerCase()}`;
  } catch {
    return 'Image';
  }
}

interface ComponentBlock extends ContentBlock {
  type: "component";
  name?: string;
  component?: string;
  props?: Record<string, unknown>;
}

interface ButtonBlock extends ContentBlock {
  type: "button";
  label: string;
  href: string;
  icon?: string;
  variant?: "primary" | "secondary" | "outline" | "outlinePrimary";
}

type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock | ComponentBlock | ButtonBlock | SpecialistBlock;

interface BlockRendererProps {
  block: ContentBlockType;
}

export default function BlockRenderer({ block }: BlockRendererProps) {
  // Use discriminated union narrowing by checking block.type directly.
  switch (block.type) {
    case "paragraph":
      return <InfoParagraph>{block.text}</InfoParagraph>;

    case "list":
      return <InfoList ordered={block.ordered} items={block.items} />;

    case "image": {
      const img = block;
      const explicitAlt = img.alt && img.alt.trim();
      const altText = explicitAlt || img.caption || deriveAltFromSrc(img.src);
      return <InfoImage src={img.src} alt={altText} caption={img.caption} />;
    }

    case "button": {
      const { label, href, variant } = block;
      const variantClasses = {
        primary: "border-2 border-primary bg-primary text-white hover:bg-offWhite hover:border-primary hover:text-primary",
        secondary: "bg-offWhite border-2 border-offWhite text-primary hover:bg-primary hover:text-offWhite",
        outline: "bg-primary border-2 border-offWhite text-offWhite hover:bg-offWhite hover:text-primary",
        outlinePrimary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      };
      const buttonClass = `inline-flex items-center gap-2 justify-center font-semibold rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 default-shadow cursor-pointer px-5 py-3 text-base ${variantClasses[variant || "primary"]}`;
      const wrapperClass = "w-full flex justify-center md:justify-start my-8";
      const handleClick = () => {
        if (label.toLowerCase().includes("support group")) {
          trackEvent("support_group_click", {
            label,
            href,
            page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
          });
        }
      };
      return (
        <div className={wrapperClass}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
            onClick={handleClick}
          >
            {label}
          </a>
        </div>
      );
    }

    case "component": {
      const compName = block.name || block.component;
      const compProps = block.props || {};

      if (compName === "LatestNewsList") {
        // LatestNewsList expects its own props — if none are required we can render without spreading unknowns
        return <LatestNewsList />;
      }
      if (compName === "PatientStoriesList") {
        return <PatientStoriesList />;
      }
      if (compName === "PatientShortStory") {
        const author = typeof compProps["author"] === "string" ? (compProps["author"] as string) : undefined;
        const children = compProps["children"] as React.ReactNode | undefined;
        return (
          <PatientShortStory author={author}>
            {children}
          </PatientShortStory>
        );
      }
      if (compName === "Roadmap") {
        const items = Array.isArray(compProps["items"]) ? (compProps["items"] as unknown[]).filter(i => typeof i === "string").map(String) : [];
        return <Roadmap items={items} />;
      }
      return null;
    }

    case "specialist": {
      const s = block;
      const card = (
        <div className="my-6">
          <SpecialistCard nameTitle={s.nameTitle} location={s.location} imageSrc={s.imageSrc} alt={s.alt} />
        </div>
      );
      if (s.link) {
        return (
          <a href={s.link} target="_blank" rel="noopener noreferrer">
            {card}
          </a>
        );
      }
      return card;
    }

    default:
      return null;
  }
}