// src/content/treatments.ts

export const treatmentsContent = {
  slug: "/about/treatments",
  tags: ["neuropathy", "nerve", "pain", "management", "therapy"],
  
    hero: {
    title: "Treatments",
    subtitle: "Exploring current approaches to managing small fiber neuropathy",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "medications", title: "Medications" },
    { id: "lifestyle", title: "Lifestyle Interventions" },
    { id: "emerging", title: "Emerging Therapies" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        `Treatments for Small Fiber Neuropathy primarily focus on symptom relief,
        improving quality of life, and addressing underlying causes where
        possible. Because nerve regeneration is limited, treatment often
        emphasizes long-term management strategies.`,

        `The approach to treating SFN is typically multimodal, combining
        pharmacological interventions with lifestyle modifications and
        supportive therapies. Early intervention and proper management
        can significantly improve patient outcomes and quality of life.`,
      ],
    },
    {
      id: "medications",
      title: "Medications",
      paragraphs: [
        `Common pharmacological treatments include anticonvulsants such as
        gabapentin and pregabalin, which are often first-line therapies for
        neuropathic pain. Tricyclic antidepressants and certain newer
        antidepressants may also provide relief.`,
      ],
      list: {
        ordered: true,
        items: [
          "Anticonvulsants (gabapentin, pregabalin)",
          "Tricyclic antidepressants",
          "SNRIs (duloxetine, venlafaxine)",
          "Topical treatments (capsaicin, lidocaine)",
        ],
      },
      image: {
        src: "/images/doctorMan.png",
        alt: "Healthcare professional discussing treatment options",
        caption:
          "Medications are often prescribed to help reduce pain associated with SFN.",
      },
      paragraphsAfterImage: [
        `Topical treatments, including capsaicin cream and lidocaine patches,
        can provide localized relief for some patients. The choice of medication
        depends on the severity of symptoms, patient tolerance, and underlying
        health conditions.`,
      ],
    },
    {
      id: "lifestyle",
      title: "Lifestyle Interventions",
      paragraphs: [
        `Regular exercise, physical therapy, and nutritional support play
        crucial roles in managing SFN. Maintaining proper blood glucose
        levels is essential for diabetic patients, as good glycemic control
        can slow disease progression.`,
      ],
      list: {
        ordered: false,
        items: [
          "Regular low-impact exercise (e.g., swimming, walking)",
          "Physical therapy for mobility and pain management",
          "Nutritional support and balanced diet",
          "Blood sugar management for diabetic patients",
        ],
      },
    },
    {
      id: "emerging",
      title: "Emerging Therapies",
      paragraphs: [
        `Research into novel treatments continues to advance, with studies
        exploring nerve growth factors, immunomodulatory therapies, and
        regenerative medicine approaches. These emerging treatments offer
        hope for more effective interventions in the future.`,
      ],
    },
  ],

  meta: {
    author: "Matt Snyder",
    lastUpdated: "August 18, 2025",
    references: [
      {
        title:
          "Oaklander AL, et al. Treatment approaches for small fiber neuropathy.",
        link: "https://example.com/research1",
      },
      {
        title:
          "Smith J, Neuropathic Pain Management Strategies, Journal of Pain 2023",
        link: "https://example.com/research2",
      },
    ],
  },
};
