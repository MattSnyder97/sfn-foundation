export const patientStoriesContent = {
  slug: "/resources/patient-stories",
  tags: ["patient-stories", "community-support"],
  hero: {
    title: "Patient Stories",
  },
  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "stories", title: "Stories" },
    { id: "short-stories", title: "Short Stories" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Read stories from people living with Small Fiber Neuropathy. We have divided them into two categories: Stories and Short Stories. Stories are longer, more complete accounts of life with SFN, and Short Stories share a smaller piece of someone's experience.`,
        },
        {
          type: "paragraph",
          text: `If you would like to share your story about living with SFN, please [contact us](/contact).`,
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
    {
      id: "short-stories",
      title: "Short Stories",
      content: [
          {
            type: "component",
            name: "PatientShortStory",
            props: {
              author: "Ashley, age 33, Massachusetts",
              children: `"I had neuropathy for 25 years and thought daily burning pain was a normal human experience until my 20s. My pediatrician when I was 7 said it was just \"growing pains.\" In 2023, I finally got diagnosed with small fiber neuropathy, which was then idiopathic, so they couldn't find the cause. \n\nDoctors didn't seem determined to help and insisted that I'm young and can bounce back. I kept pushing for answers, and a year later, at my request, I got a biopsy of my lip and was diagnosed with Sjögren's. My lifelong fatigue and neuropathy finally made sense."`
            }
          },
      ],
    },
  ],
  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 7, 2025",
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