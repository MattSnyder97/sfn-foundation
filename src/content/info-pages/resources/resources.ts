export const resourcesContent = {
  slug: "/resources",
  tags: ["resources"],
  hero: {
    title: "Resources",
  },

  tableOfContents: [
    { id: "caregiver-tips", title: "Caregiver Tips" },
    { id: "faqs", title: "FAQs" },
    { id: "find-specialist", title: "Find a Specialist" },
    { id: "mutual-aid", title: "Mutual Aid" },
    { id: "newly-diagnosed", title: "Newly Diagnosed" },
    { id: "patient-stories", title: "Patient Stories" },
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
          text: `Caring for someone with small fiber neuropathy can be hard. Your support makes a real difference. Learning about the condition and useful caregiving tips can help both of you.`,
        },
        {
          type: "paragraph",
          text: `Help with pain, daily tasks during flares, and medicine schedules. Know when to get professional care. Take breaks and care for yourself to avoid burnout. [Read our complete caregiver guide](/resources/caregiver-tips)`,
        },
      ],
    },

    {
      id: "faqs",
      title: "Frequently Asked Questions",
      content: [
        {
          type: "paragraph",
          text: `We answer common questions about small fiber neuropathy. Find information on diagnosis, treatments, daily life tips, and what to expect.`,
        },
        {
          type: "paragraph",
          text: `Topics include how doctors diagnose SFN, which treatments can help, useful lifestyle changes, and when to seek urgent care. [Browse all FAQs](/#faqs)`,
        },
      ],
    },

    {
      id: "find-specialist",
      title: "Find a Specialist",
      content: [
        {
          type: "paragraph",
          text: `Finding the right doctor is important for SFN care. Neurologists who treat nerve problems often have the most experience. Some pain doctors and other specialists can help too.`,
        },
        {
          type: "paragraph",
          text: `Look for doctors with SFN experience, convenient location, and insurance that works for you. Ask about their experience during your visit. [Find a SFN specialist](/resources/specialists)`,
        },
      ],
    },

    {
      id: "mutual-aid",
      title: "Mutual Aid",
      content: [
        {
          type: "paragraph",
          text: `Mutual aid is about supporting each other. This page connects people who need help with those who can help. Help can include money, accessibility needs, or other urgent support.`,
        },
        {
          type: "paragraph",
          text: `Find current ways to help or get support. To request help or add someone, contact us. Small acts of kindness can matter. [Visit our mutual aid page](/resources/mutual-aid)`,
        },
      ],
    },

    {
      id: "newly-diagnosed",
      title: "Newly Diagnosed",
      content: [
        {
          type: "paragraph",
          text: `Getting an SFN diagnosis can feel scary. You can now focus on steps that may help. Many people with SFN live active lives with proper care.`,
        },
        {
          type: "paragraph",
          text: `Next steps include finding possible causes, trying treatments, and learning helpful lifestyle changes. Treatments can take time to work. [Information for newly diagnosed patients](/resources/newly-diagnosed)`,
        },
      ],
    },

    {
      id: "patient-stories",
      title: "Patient Stories",
      content: [
        {
          type: "paragraph",
          text: `Read real stories from people living with small fiber neuropathy. These accounts share their experiences with diagnosis, treatment, and daily life.`,
        },
        {
          type: "paragraph",
          text: `Stories can give hope, practical tips, and real views on living with SFN. [Read patient stories](/resources/patient-stories)`,
        },
      ],
    },

    {
      id: "sfn-dictionary",
      title: "SFN Dictionary",
      content: [
        {
          type: "paragraph",
          text: `Our dictionary explains medical terms related to small fiber neuropathy that you may hear in appointments, research, or online.`,
        },
        {
          type: "paragraph",
          text: `Find definitions for anatomy terms, medication names, and tests. This reference can help you talk with your healthcare team. [Read the SFN dictionary](/resources/dictionary)`,
        },
      ],
    },

    {
      id: "support-group",
      title: "Support Group",
      content: [
        {
          type: "paragraph",
          text: `Connect with others who understand what you're going through. Our support group brings together people with SFN, families, and caregivers in a safe space.`,
        },
        {
          type: "paragraph",
          text: `Members share treatment experiences, coping tips, and daily life advice. Get emotional support and know you are not alone. [Join our support group](/resources/support-group)`,
        },
      ],
    },

    {
      id: "supplements",
      title: "Supplements",
      content: [
        {
          type: "paragraph",
          text: `Many people with SFN try supplements as part of treatment. Some may help nerve health or fix vitamin problems. Common ones include alpha-lipoic acid, B vitamins, and magnesium.`,
        },
        {
          type: "paragraph",
          text: `Talk to your doctor before starting supplements. They can interact with medicines and may not be right for everyone. Choose quality brands when possible. [Learn about supplements for SFN](/resources/supplements)`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 21, 2025",
    references: [
      {
        title: "Caregiver Tips - Foundation for Peripheral Neuropathy",
        link: "https://www.foundationforpn.org/caregiver-tips/",
      },
      {
        title: "Finding the Right Doctor - Foundation for Peripheral Neuropathy",
        link: "https://www.foundationforpn.org/find-a-doctor/",
      },
      {
        title: "Peripheral Neuropathy Support Groups - Foundation for Peripheral Neuropathy",
        link: "https://www.foundationforpn.org/support-groups/",
      },
    ],
  },
};

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