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
          text: `Caring for someone with Small Fiber Neuropathy can be hard, but 
          your help makes a real difference. Learning about the condition and 
          good caregiving tips can help both of you.`,
        },
        {
          type: "paragraph",
          text: `Focus on helping with pain, daily tasks during flares, medicine 
          schedules, and knowing when to get professional help. Take care of 
          yourself too to avoid burnout. [Read our complete caregiver guide](/resources/caregiver-tips)`,
        },
      ],
    },

    {
      id: "faqs",
      title: "Frequently Asked Questions",
      content: [
        {
          type: "paragraph",
          text: `We answer the most common questions about Small Fiber Neuropathy. 
          Find information about diagnosis, treatments, daily life tips, and 
          what to expect.`,
        },
        {
          type: "paragraph",
          text: `Topics include how doctors diagnose SFN, which treatments work, 
          lifestyle changes that help, and when to seek emergency care. [Browse all FAQs](/#faqs)`,
        },
      ],
    },

    {
      id: "find-specialist",
      title: "Find a Specialist",
      content: [
        {
          type: "paragraph",
          text: `Finding the right doctor is key for good SFN care. Neurologists 
          who work with nerve problems usually have the most experience. Some 
          pain doctors and hormone specialists also help with SFN.`,
        },
        {
          type: "paragraph",
          text: `Look for doctors with SFN experience, good location, insurance 
          coverage, and treatment styles that fit you. Ask about their experience 
          during your visit. [Find a SFN specialist](/resources/specialists)`,
        },
      ],
    },

    {
      id: "mutual-aid",
      title: "Mutual Aid",
      content: [
        {
          type: "paragraph",
          text: `Mutual aid is about supporting each other in our community, 
          especially when someone faces added challenges to an already difficult 
          situation. This page helps people in our SFN community who need 
          assistance with financial, accessibility, or other urgent needs.`,
        },
        {
          type: "paragraph",
          text: `Find current opportunities to help community members, or connect 
          if you need support. If you know someone who could use help or want 
          to request assistance, contact us. Every act of kindness makes a difference. 
          [Visit our mutual aid page](/resources/mutual-aid)`,
        },
      ],
    },

    {
      id: "newly-diagnosed",
      title: "Newly Diagnosed",
      content: [
        {
          type: "paragraph",
          text: `Getting an SFN diagnosis can feel scary, but now you can focus 
          on treatments that work. Many people with SFN live full, active lives 
          with good care.`,
        },
        {
          type: "paragraph",
          text: `Next steps include finding what causes your SFN, trying different 
          treatments, and learning lifestyle changes that help. Treatment takes 
          time to work, so be patient. [Information for newly diagnosed patients](/resources/newly-diagnosed)`,
        },
      ],
    },

    {
      id: "patient-stories",
      title: "Patient Stories",
      content: [
        {
          type: "paragraph",
          text: `Read real stories from people living with Small Fiber Neuropathy. 
          These personal accounts share the ups and downs of diagnosis, treatment, 
          and daily life with SFN.`,
        },
        {
          type: "paragraph",
          text: `Each story offers hope, practical tips, and honest looks at what 
          it's really like to live with this condition. Learn from others who 
          understand your journey. [Read patient stories](/resources/patient-stories)`,
        },
      ],
    },

    {
      id: "sfn-dictionary",
      title: "SFN Dictionary",
      content: [
        {
          type: "paragraph",
          text: `Our dictionary explains medical terms related to Small Fiber 
          Neuropathy that you'll encounter in appointments, research, and 
          online discussions.`,
        },
        {
          type: "paragraph",
          text: `Find definitions for anatomy terms, medication names, and 
          diagnostic procedures. Having this reference helps you communicate 
          more effectively with your healthcare team. [Read the SFN dictionary](/resources/dictionary)`,
        },
      ],
    },

    {
      id: "support-group",
      title: "Support Group",
      content: [
        {
          type: "paragraph",
          text: `Connect with others who understand what you're going through. 
          Our support group brings together people with SFN, families, and 
          caregivers in a safe space.`,
        },
        {
          type: "paragraph",
          text: `Members share treatment experiences, coping tips, and daily life 
          advice. Get emotional support and know you're not alone in your SFN journey. 
          [Join our support group](/resources/support-group)`,
        },
      ],
    },

    {
      id: "supplements",
      title: "Supplements",
      content: [
        {
          type: "paragraph",
          text: `Many people with SFN try supplements as part of their treatment. 
          Some may help nerve health or fix vitamin problems that make symptoms 
          worse. Common ones include alpha-lipoic acid, B vitamins, and magnesium.`,
        },
        {
          type: "paragraph",
          text: `Talk to your doctor before starting supplements. They can interact 
          with medicines and aren't right for everyone. Choose quality brands. 
          [Learn about supplements for SFN](/resources/supplements)`,
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