export const researchContent = {
  slug: "/research",
  tags: ["research"],
  hero: {
    title: "Research",
  },
  tableOfContents: [
    { id: "overview", title: "Overview" }
  ],
  sections: [
    {
      id: "overview",
      title: "Latest Research Coming Soon",
      content: [
        {
          type: "paragraph",
          text: `This page will be the home for the latest research, studies, and scientific updates about Small Fiber Neuropathy. The functionality to post and display new research is currently being developed. Please check back soon for updates!`,
        },
      ],
    },
  ],
  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 24, 2025",
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