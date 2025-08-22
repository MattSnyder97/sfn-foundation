import { allContent } from './index'

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

export interface PageContent {
  slug: string;
  tags: string[];
  hero: {
    title: string;
  };
  tableOfContents: TableOfContentsItem[];
  sections: ContentSection[];
  meta: ContentMeta;
}

// Helper functions to get content by category and slug
export function getPageData(slug: string): PageContent | null {
  // Check for main section pages
  const mainSections = ['about', 'research', 'resources'];
  if (mainSections.includes(slug)) {
    return (allContent as PageContent[]).find((item) => item.slug === `/${slug}`) || null;
  }
  // Check for sub-pages in each section
  for (const section of mainSections) {
    const content = (allContent as PageContent[]).find((item) => item.slug === `/${section}/${slug}`);
    if (content) return content;
  }
  // Fallback: try to find by slug directly
  return (allContent as PageContent[]).find((item) => item.slug === slug) || null;
}

// Generic function to get any content by full slug path
export function getContentBySlug(slug: string): PageContent | null {
  return (allContent as PageContent[]).find((item) => item.slug === slug) || null
}

// Function to get main section pages (like /about, /research, /resources)
export function getMainPageData(section: string): PageContent | null {
  return (allContent as PageContent[]).find((item) => item.slug === `/${section}`) || null
}