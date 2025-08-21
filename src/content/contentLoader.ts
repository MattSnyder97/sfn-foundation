// src/content/contentLoader.ts
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
export function getAboutPageData(slug: string): PageContent | null {
  // Handle main about page
  if (slug === 'about') {
    return (allContent as PageContent[]).find((item) => item.slug === '/about') || null
  }
  // Handle sub-pages like causes, treatments, etc.
  const content = (allContent as PageContent[]).find((item) => item.slug === `/about/${slug}`)
  return content || null
}

export function getResearchPageData(slug: string): PageContent | null {
  if (slug === 'research') {
    return (allContent as PageContent[]).find((item) => item.slug === '/research') || null
  }
  const content = (allContent as PageContent[]).find((item) => item.slug === `/research/${slug}`)
  return content || null
}

export function getResourcesPageData(slug: string): PageContent | null {
  if (slug === 'resources') {
    return (allContent as PageContent[]).find((item) => item.slug === '/resources') || null
  }
  const content = (allContent as PageContent[]).find((item) => item.slug === `/resources/${slug}`)
  return content || null
}

// Generic function to get any content by full slug path
export function getContentBySlug(slug: string): PageContent | null {
  return (allContent as PageContent[]).find((item) => item.slug === slug) || null
}

// Function to get main section pages (like /about, /research, /resources)
export function getMainPageData(section: string): PageContent | null {
  return (allContent as PageContent[]).find((item) => item.slug === `/${section}`) || null
}