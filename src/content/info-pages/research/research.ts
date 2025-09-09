export const researchContent = {
  slug: "/research",
  tags: ["research"],
  hero: {
    title: "Research",
  },
  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "latest-research", title: "Latest Research" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Stay current with the latest Small Fiber Neuropathy research. We collect new studies, clinical trials, and expert findings in one place. This page updates regularly with discoveries and breakthroughs.`,
        },
      ],
    },
    {
      id: "latest-research",
      title: "Latest Research",
      content: [
        {
          type: "component",
          name: "LatestNewsList",
        },
      ],
    },
  ],
  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 26, 2025",
    references: [],
  },
};

// ---- Types ----
export interface ContentBlock {
  type: "paragraph" | "list" | "image";
}

export interface ParagraphBlock extends ContentBlock {
  type: "paragraph";
  text: string;
}

export interface ListBlock extends ContentBlock {
  type: "list";
  ordered: boolean;
  items: string[];
}

export interface ImageBlock extends ContentBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock;