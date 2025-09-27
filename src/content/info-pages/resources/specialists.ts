export const specialistsContent = {
  slug: "/resources/specialists",
  tags: ["resources"],
  hero: {
    title: "Find a Specialist",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "what-to-look-for", title: "What to Look For" },
    { id: "approved-specialists", title: "Approved Specialists" },
    { id: "preparation-tips", title: "Preparing for Your Visit" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Finding a specialist for small fiber neuropathy (SFN) can be hard. Many doctors do not know much about SFN. It is often missed or misdiagnosed. Try to see a doctor who has experience with SFN and knows the common tests. Neurologists who treat peripheral neuropathy or autonomic disorders are often the best choice. Pain specialists and rheumatologists can help too, especially if an autoimmune problem might be involved. Accurate diagnosis and care may mean seeing a specialist with access to skin biopsy or autonomic testing. You may need to travel or wait for an appointment, but getting the right care can help you in the long run.`,
        },
      ],
    },
    {
      id: "what-to-look-for",
      title: "What to Look For",
      content: [
        {
          type: "paragraph",
          text: `When looking for a specialist, choose doctors who have worked with SFN or peripheral nerve problems. They should know the common tests and treatment options. Look for a board-certified neurologist with experience in peripheral neuropathy or autonomic disorders, access to skin biopsy and autonomic testing (like QSART or tilt table), familiarity with current SFN research and treatments, and a willingness to coordinate with other specialists when needed. Doctors at major medical centers or universities often see more rare conditions. They usually have the testing equipment needed and may take part in research that could help patients. Ask doctors about their experience with SFN during your first visit. A good specialist should explain how they diagnose SFN, what tests they use, and which treatments they recommend.`,
        },
      ],
    },

    {
      id: "approved-specialists",
      title: "Approved Specialists",
      content: [
        {
          type: "paragraph",
          text: `The specialists listed below have experience with small fiber neuropathy and related conditions. They work in centers that often use current tests and treatments.`,
        },
        // Specialist entries rendered as cards by the page renderer
        {
          type: "specialist",
          nameTitle: "Dr. Khosro Farhad, MD",
          location: "Massachusetts General Hospital, Boston, MA",
          imageSrc: "/images/specialists/khosroFarhad.png",
          alt: "Dr. Khosro Farhad",
          link: "https://www.massgeneral.org/doctors/20122/khosro-farhad",
        },
        {
          type: "specialist",
          nameTitle: "Dr. Brent Goodman, MD",
          location: "HonorHealth, Scottsdale, AZ",
          imageSrc: "/images/specialists/brentGoodman.png",
          alt: "Dr. Brent Goodman",
          link: "https://www.honorhealth.com/physicians/brent-goodman",
        },
        {
          type: "specialist",
          nameTitle: "Dr. Anne Louise Oaklander, MD, PhD",
          location: "Massachusetts General Hospital, Boston, MA",
          imageSrc: "/images/specialists/anneOaklander.png",
          alt: "Dr. Anne Louise Oaklander",
          link: "https://www.massgeneral.org/doctors/17253/anne-louise-oaklander",
        },
        {
          type: "specialist",
          nameTitle: "Dr. Lawrence Zeidman, MD",
          location: "Northwest Community Health Services, Glenview, IL",
          imageSrc: "/images/specialists/lawrenceZeidman.png",
          alt: "Dr. Lawrence Zeidman",
          link: "https://www.endeavorhealth.org/providers/lawrence-zeidman",
        },
      ],
    },

    {
      id: "preparation-tips",
      title: "Preparing for Your Visit",
      content: [
        {
          type: "paragraph",
          text: `Prepare well for your specialist visit so you can use the time wisely. Appointments with experts may be limited and can have long wait times.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bring previous test results like blood work, nerve studies, or skin biopsies",
            "Keep a simple symptom diary with start dates, changes, and triggers",
            "List medications and supplements you have tried with doses and dates",
            "Note family history of neuropathy, diabetes, or autoimmune conditions",
            "Write down the questions you want to ask the doctor",
            "Bring a list of current medications, including over-the-counter items",
            "Consider bringing a friend or family member for support",
            "Be ready to explain how symptoms affect your daily life",
          ],
        },
        {
          type: "paragraph",
          text: `Ask questions during your visit. Good specialists welcome patients who want to understand their condition. Ask about the doctor's SFN experience, recommended tests, and treatment choices.`,
        },
        {
          type: "paragraph",
          text: `Finding the right diagnosis and treatment can take time. You may need extra tests and follow-up visits. Seeing an experienced specialist can help you avoid long delays in care.`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 27, 2025",
    references: [
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "How to Find the Right Specialists to Treat Your Neuropathic Pain - US Pain Foundation",
        link: "https://uspainfoundation.org/neuropathic-pain-edition/neuropathic-pain-edition-articles/how-to-find-the-right-specialists-to-treat-your-neuropathic-pain/",
      },
    ],
  },
};

// ---- Types ----
export interface ContentBlock {
  type: "paragraph" | "list" | "image" | "specialist";
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

export interface SpecialistBlock extends ContentBlock {
  type: "specialist";
  nameTitle: string;
  location: string;
  imageSrc: string;
  alt?: string;
  link?: string;
}

export type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock | SpecialistBlock;