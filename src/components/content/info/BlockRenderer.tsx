"use client";
import trackEvent from "@/lib/analytics";
import InfoParagraph from "@/components/content/info/InfoParagraph";
import InfoImage from "@/components/content/info/InfoImage";
import InfoList from "@/components/content/info/InfoList";
import LatestNewsList from "@/components/content/info/LatestNewsList";
import PatientStoriesList from "@/components/content/info/PatientStoriesList";
import { Button } from "@/components/primitives/Button";

interface ContentBlock {
  type: "paragraph" | "list" | "image" | "component" | "button";
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

interface ButtonBlock extends ContentBlock {
  type: "button";
  label: string;
  href: string;
  icon?: string;
  variant?: "primary" | "secondary" | "outline" | "outlinePrimary";
}

type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock | ComponentBlock | ButtonBlock;

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
    case "button": {
      const { label, href, icon, variant } = block as ButtonBlock;
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
      if ((block as ComponentBlock).name === "LatestNewsList") {
        return <LatestNewsList />;
      }
      if ((block as ComponentBlock).name === "PatientStoriesList") {
        return <PatientStoriesList />;
      }
      if ((block as ComponentBlock).name === "PatientShortStory") {
        // Dynamically import PatientShortStory
        const PatientShortStory = require("@/components/content/info/PatientShortStory").default;
        const props = (block as any).props || {};
        return (
          <PatientShortStory author={props.author} date={props.date}>
            {props.children}
          </PatientShortStory>
        );
      }
      return null;
    }
    default:
      return null;
  }
}