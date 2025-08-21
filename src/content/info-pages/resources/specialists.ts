export const specialistsContent = {
  slug: "/resources/specialists",
  tags: ["neuropathy", "nerve", "overview", "small fiber"],
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
          text: `SFN is more common than many people realize. It can affect anyone, but 
          it's often seen in people with diabetes, autoimmune conditions, or certain 
          genetic factors. The good news is that with proper diagnosis and treatment, 
          many people with SFN can find relief and maintain a good quality of life.`,
        },
        {
          type: "paragraph",
          text: `Understanding your condition is the first step toward feeling better. 
          The sections below will help you learn about the different aspects of SFN, 
          from what causes it to how it's treated. Remember, you're not alone in this 
          journey, and there are many resources and treatments available to help you.`,
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
          text: `In about half of all SFN cases, doctors can't find a specific cause. 
          This is called "idiopathic" SFN, which simply means the cause is unknown. 
          Even when the cause isn't clear, effective treatments are still available 
          to help manage symptoms and improve quality of life.`,
        },
        {
          type: "paragraph",
          text: `Understanding what might have caused your SFN can help guide treatment 
          decisions. Sometimes treating the underlying cause can slow down or even 
          improve neuropathy symptoms. [Learn more about SFN causes →](/about/causes)`,
        },
      ],
    },

    {
      id: "diagnosis",
      title: "Diagnosis",
      content: [
        {
          type: "paragraph",
          text: `Getting a diagnosis of Small Fiber Neuropathy can take time because 
          it affects very small nerve fibers that don't show up on regular nerve tests. 
          Your doctor will use your symptoms, physical exam, and special tests to 
          make the diagnosis.`,
        },
        {
          type: "paragraph",
          text: `The most definitive test for SFN is a skin biopsy, where tiny samples 
          of skin are examined under a microscope to count small nerve fibers. Blood 
          tests help identify possible causes like diabetes or vitamin deficiencies. 
          Other tests might include quantitative sensory testing and autonomic function tests.`,
        },
        {
          type: "paragraph",
          text: `While the diagnostic process can be frustrating, getting the right 
          diagnosis is important for finding effective treatments. Working with a 
          neurologist who understands SFN can make a big difference. 
          [Learn more about SFN diagnosis →](/about/diagnosis)`,
        },
      ],
    },

    {
      id: "symptoms",
      title: "Symptoms",
      content: [
        {
          type: "paragraph",
          text: `SFN symptoms are often described as burning, stabbing, or tingling 
          sensations. Many people say it feels like walking on hot coals or being 
          stuck with pins and needles. These symptoms usually start in the feet and 
          hands and can gradually spread up the legs and arms.`,
        },
        {
          type: "paragraph",
          text: `Common symptoms include burning pain, numbness, sensitivity to touch, 
          and difficulty sensing temperature changes. Some people also experience 
          problems with automatic body functions like sweating, digestion, or blood 
          pressure changes.`,
        },
        {
          type: "paragraph",
          text: `Symptoms can vary greatly from person to person and may change over time. 
          Some people have mild symptoms that come and go, while others have constant 
          pain that affects daily activities. Understanding your symptoms helps you 
          and your healthcare team develop the best treatment plan. 
          [Learn more about SFN symptoms →](/about/symptoms)`,
        },
      ],
    },

    {
      id: "treatments",
      title: "Treatments",
      content: [
        {
          type: "paragraph",
          text: `While there's no cure for SFN yet, many treatments can help manage 
          pain and improve quality of life. Treatment usually involves a combination 
          of medications, lifestyle changes, and other therapies. The goal is to 
          reduce symptoms and treat any underlying conditions that might be causing 
          the neuropathy.`,
        },
        {
          type: "paragraph",
          text: `Common medications include anticonvulsants like gabapentin and pregabalin, 
          antidepressants like duloxetine, and topical treatments like lidocaine patches. 
          Supplements such as alpha-lipoic acid and B vitamins may also help. Lifestyle 
          changes like regular exercise, good blood sugar control, and stress management 
          play important roles too.`,
        },
        {
          type: "paragraph",
          text: `Finding the right treatment takes time and patience. What works for one 
          person might not work for another, so doctors often try different combinations 
          until they find what works best. The sooner treatment begins, the better 
          the chances of managing symptoms effectively. 
          [Learn more about SFN treatments →](/about/treatments)`,
        },
      ],
    },
  ],

  meta: {
    author: "Matt Snyder",
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
        link: "https://www.foundationforpn.org/understanding-peripheral-neuropathy/",
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