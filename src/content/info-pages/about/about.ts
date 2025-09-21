export const aboutContent = {
  slug: "/about-sfn",
  tags: ["about"],
  hero: {
    title: "About SFN",
  },

  tableOfContents: [
    { id: "what-is-sfn", title: "What is SFN?" },
    { id: "causes", title: "Causes" },
    { id: "diagnosis", title: "Diagnosis" },
    { id: "symptoms", title: "Symptoms" },
    { id: "treatments", title: "Treatments" },
  ],

  sections: [
    {
      id: "what-is-sfn",
      title: "What is Small Fiber Neuropathy?",
      content: [
        {
          type: "paragraph",
          text: `Small Fiber Neuropathy (SFN) is a condition that affects the smallest 
          nerves in your body. These tiny nerve fibers control how you feel pain, 
          temperature, and touch. When they don't work properly, you might experience 
          burning pain, tingling, numbness, or strange sensations in your hands and feet.`,
        },
        {
          type: "paragraph",
          text: `SFN is more common than many people think. About 200,000 people in the United States may have it. SFN is often seen in people with diabetes, autoimmune conditions, or certain genes. With the right diagnosis and treatment, many people find relief and keep a good quality of life. Learning about SFN is the first step toward feeling better. The sections below explain causes, diagnosis, symptoms, and treatments. You are not alone. There are resources and treatments to help you.`,
        },
      ],
    },

    {
      id: "causes",
      title: "Causes",
      content: [
        {
          type: "paragraph",
          text: `Small Fiber Neuropathy can have many different causes. The most common 
          cause is diabetes, which damages nerves over time through high blood sugar 
          levels. However, many other conditions can lead to SFN, including autoimmune 
          diseases, vitamin deficiencies, and genetic factors.`,
        },
        {
          type: "paragraph",
          text: `In about half of SFN cases, doctors cannot find a specific cause. This is called idiopathic SFN. Even when the cause is unknown, treatments can still help manage symptoms and improve quality of life.`,
        },
        {
          type: "paragraph",
          text: `Knowing what may have caused your SFN can guide treatment choices. Treating the underlying problem can sometimes slow or improve symptoms. [Learn more about SFN causes](/about/causes)`,
        },
      ],
    },

    {
      id: "diagnosis",
      title: "Diagnosis",
      content: [
        {
          type: "paragraph",
          text: `The most definitive test for SFN is a skin biopsy. Tiny skin samples are checked under a microscope to count small nerve fibers. Blood tests can find causes like diabetes or vitamin problems. Other possible tests include sensory testing and autonomic function tests.`,
        },
        {
          type: "paragraph",
          text: `The diagnostic process can be frustrating. Getting the right diagnosis helps find effective treatments. A neurologist who knows SFN can make a big difference. [Learn more about SFN diagnosis](/about/diagnosis)`,
        },
      ],
    },

    {
      id: "symptoms",
      title: "Symptoms",
      content: [
        {
          type: "paragraph",
          text: `SFN symptoms are often burning, stabbing, or tingling. Some people say it feels like walking on hot coals or like pins and needles. Symptoms usually start in the feet and hands and may spread to other parts of the body.`,
        },
        {
          type: "paragraph",
          text: `Common symptoms include burning pain, numbness, sensitivity to touch, and trouble sensing temperature. Some people also have problems with automatic body functions like sweating, digestion, or blood pressure.`,
        },
        {
          type: "paragraph",
          text: `Symptoms vary and can change over time. Some people have mild symptoms that come and go. Others have constant pain that affects daily life. Understanding your symptoms helps your healthcare team plan treatment. [Learn more about SFN symptoms](/about/symptoms)`,
        },
      ],
    },

    {
      id: "treatments",
      title: "Treatments",
      content: [
        {
          type: "paragraph",
          text: `There is no cure for SFN yet, but many treatments can help manage pain and improve quality of life. Treatment often uses medicines, lifestyle changes, and other therapies. The goal is to reduce symptoms and treat any underlying conditions that may be causing neuropathy.`,
        },
        {
          type: "paragraph",
          text: `Common medicines include anticonvulsants such as gabapentin and pregabalin, antidepressants such as duloxetine, and topical options like lidocaine patches. Supplements like alpha-lipoic acid and B vitamins may help. Lifestyle changes, such as regular exercise, blood sugar control, and stress management, also help.`,
        },
        {
          type: "paragraph",
          text: `Finding the right treatment takes time. What works for one person may not work for another. Doctors often try different combinations until they find what helps. Starting treatment sooner can improve the chances of managing symptoms. [Learn more about SFN treatments](/about/treatments)`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 20, 2025",
    references: [
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "Peripheral neuropathy - Overview - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/symptoms-causes/syc-20352061",
      },
      {
        title:
          "Understanding Peripheral Neuropathy - Foundation for Peripheral Neuropathy",
        link: "https://www.foundationforpn.org/wp-content/uploads/2024/10/Patient-Brochure-Final.pdf",
      },
      {
        title: "Small fiber neuropathy - National Institute of Neurological Disorders",
        link: "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
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