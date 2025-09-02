export const patientStoriesContent = {
  slug: "/patient-stories",
  tags: ["patient-stories"],
  hero: {
    title: "Patient Stories",
  },
  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "stories", title: "Stories" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Read first-hand experiences from people living with Small Fiber Neuropathy. These stories highlight diagnosis journeys, treatment approaches, and everyday adjustments that may resonate with your own experience.`,
        },
      ],
    },
    {
      id: "stories",
      title: "Stories",
      content: [
        {
          type: "component",
          name: "PatientStoriesList",
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
  type: "paragraph" | "list" | "image" | "component";
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

export interface ComponentBlock extends ContentBlock {
  type: "component";
  name: string;
}

export type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock | ComponentBlock;