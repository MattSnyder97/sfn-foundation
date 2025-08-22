export const resourcesContent = {
  slug: "/resources",
  tags: ["resources", "help", "support", "caregiver", "specialist"],
  hero: {
    title: "Resources",
  },

  tableOfContents: [
    { id: "caregiver-tips", title: "Caregiver Tips" },
    { id: "faqs", title: "FAQs" },
    { id: "find-specialist", title: "Find a Specialist" },
    { id: "newly-diagnosed", title: "Newly Diagnosed" },
    { id: "sfn-dictionary", title: "SFN Dictionary" },
    { id: "support-group", title: "Support Group" },
    { id: "supplements", title: "Supplements" },
  ],

  sections: [
    {
      id: "caregiver-tips",
      title: "Caregiver Tips",
      content: [
        {
          type: "paragraph",
          text: `Caring for someone with Small Fiber Neuropathy can be challenging, 
          but your support makes a real difference in their quality of life. 
          Understanding the condition and learning effective caregiving strategies 
          can help both you and your loved one navigate this journey together.`,
        },
        {
          type: "paragraph",
          text: `Key areas to focus on include pain management support, helping with 
          daily activities when symptoms flare, understanding medication schedules, 
          and recognizing when professional help is needed. Remember to take care 
          of yourself too – caregiver burnout is real and addressing it helps 
          everyone involved.`,
        },
        {
          type: "paragraph",
          text: `[Read our complete caregiver guide](/resources/caregiver-tips)`,
        },
      ],
    },

    {
      id: "faqs",
      title: "Frequently Asked Questions",
      content: [
        {
          type: "paragraph",
          text: `We've compiled answers to the most common questions about Small Fiber 
          Neuropathy. Whether you're newly diagnosed, exploring treatment options, 
          or looking for practical advice on living with SFN, these FAQs address 
          the concerns we hear most often from the community.`,
        },
        {
          type: "paragraph",
          text: `Topics covered include diagnosis processes, treatment effectiveness, 
          lifestyle modifications, prognosis, and when to seek emergency care. 
          If you don't find your question answered, consider joining our support 
          group or consulting with a healthcare provider.`,
        },
        {
          type: "paragraph",
          text: `[Browse all FAQs](/#faqs)`,
        },
      ],
    },

    {
      id: "find-specialist",
      title: "Find a Specialist",
      content: [
        {
          type: "paragraph",
          text: `Finding the right healthcare provider is crucial for effective SFN 
          management. Neurologists who specialize in peripheral neuropathy typically 
          have the most experience diagnosing and treating Small Fiber Neuropathy. 
          Some pain management specialists and endocrinologists also have relevant expertise.`,
        },
        {
          type: "paragraph",
          text: `When looking for a specialist, consider their experience with SFN, 
          location, insurance acceptance, and approach to treatment. Don't hesitate 
          to ask questions about their experience with your specific type of 
          neuropathy and treatment philosophy during your consultation.`,
        },
        {
          type: "paragraph",
          text: `[Find SFN specialists in your area](/resources/specialists)`,
        },
      ],
    },

    {
      id: "newly-diagnosed",
      title: "Newly Diagnosed",
      content: [
        {
          type: "paragraph",
          text: `Receiving an SFN diagnosis can feel overwhelming, but you're taking 
          an important step by seeking information. Having a name for your symptoms 
          means you can now focus on effective treatments and management strategies. 
          Many people with SFN go on to live full, active lives with proper care.`,
        },
        {
          type: "paragraph",
          text: `Your next steps typically include working with your healthcare team 
          to identify any underlying causes, exploring treatment options, and learning 
          about lifestyle modifications that can help. Remember that treatment often 
          takes time to optimize, so patience with the process is important.`,
        },
        {
          type: "paragraph",
          text: `[Complete guide for newly diagnosed patients](/resources/newly-diagnosed)`,
        },
      ],
    },

    {
      id: "sfn-dictionary",
      title: "SFN Dictionary",
      content: [
        {
          type: "paragraph",
          text: `Medical terminology can be confusing, especially when dealing with 
          a complex condition like Small Fiber Neuropathy. Our dictionary explains 
          common terms you'll encounter in medical appointments, research articles, 
          and online discussions about SFN.`,
        },
        {
          type: "paragraph",
          text: `From basic anatomy terms to medication names and diagnostic procedures, 
          understanding the vocabulary helps you communicate more effectively with 
          your healthcare team and make informed decisions about your care.`,
        },
        {
          type: "paragraph",
          text: `[Browse the SFN dictionary](/resources/dictionary)`,
        },
      ],
    },

    {
      id: "support-group",
      title: "Support Group",
      content: [
        {
          type: "paragraph",
          text: `Connecting with others who understand what you're going through can 
          provide emotional support, practical advice, and a sense of community. 
          Our support group brings together people with SFN, their families, and 
          caregivers in a safe, understanding environment.`,
        },
        {
          type: "paragraph",
          text: `Members share experiences with different treatments, coping strategies, 
          and daily life tips. Whether you're looking for emotional support, practical 
          advice, or just want to know you're not alone, the support group can be 
          a valuable resource in your SFN journey.`,
        },
        {
          type: "paragraph",
          text: `[Join our support group](https://discord.gg/UGNhBMkBS7)`,
        },
      ],
    },

    {
      id: "supplements",
      title: "Supplements",
      content: [
        {
          type: "paragraph",
          text: `Many people with SFN explore supplements as part of their treatment 
          plan. While supplements aren't a cure, some may help support nerve health 
          or address underlying deficiencies that contribute to neuropathy symptoms. 
          Common options include alpha-lipoic acid, B vitamins, and magnesium.`,
        },
        {
          type: "paragraph",
          text: `It's important to work with your healthcare provider before starting 
          any supplement regimen, as they can interact with medications and aren't 
          appropriate for everyone. Quality matters too – not all supplements are 
          created equal, and choosing reputable brands is essential.`,
        },
        {
          type: "paragraph",
          text: `[Learn about supplements for SFN](/resources/supplements)`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 21, 2025",
    references: [
      {
        title: "Caregiver Resources - Foundation for Peripheral Neuropathy",
        link: "https://www.foundationforpn.org/living-well/caregivers/",
      },
      {
        title: "Finding the Right Doctor - American Diabetes Association",
        link: "https://www.diabetes.org/diabetes/complications/neuropathy/finding-right-doctor",
      },
      {
        title: "Support Groups and Resources - The Neuropathy Association",
        link: "https://www.neuropathy.org/support-groups-resources/",
      },
    ],
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