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
          text: `This page is dedicated to sharing the latest research, studies, and scientific updates about Small Fiber Neuropathy. Our goal is to make it easy for you to find new discoveries, clinical trials, and expert insights in one place. We regularly update this page with new articles and breakthroughs, so check back often for the most current information.`,
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