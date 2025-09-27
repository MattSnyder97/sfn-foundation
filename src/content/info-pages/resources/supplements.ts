export const supplementsContent = {
  slug: "/resources/supplements",
  tags: ["resources", "treatments"],
  hero: {
    title: "Supplements",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "evidence-based", title: "Evidence-Based Supplements" },
    { id: "vitamins", title: "Essential Vitamins" },
    { id: "antioxidants", title: "Antioxidants" },
    { id: "minerals", title: "Important Minerals" },
    { id: "safety", title: "Safety & Quality" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Supplements can help manage small fiber neuropathy when used with other treatments. They are not a cure, but some vitamins and nutrients may reduce nerve pain and support nerve health over time. Some people with SFN have nutrient deficiencies that can worsen symptoms.`,
        },
        {
          type: "paragraph",
          text: `Correcting vitamin and mineral deficiencies can help nerves work better and may slow damage. It is important to know which supplements have good research and are safe to use. Talk to your doctor before starting new supplements, especially if you take prescription medicines. Supplements can interact with drugs or cause side effects.`,
        }
      ],
    },

    {
      id: "evidence-based",
      title: "Evidence-Based Supplements",
      content: [
        {
          type: "paragraph",
          text: `Some supplements have scientific research showing benefits for nerve pain and nerve health. Doctors may recommend these when studies show they work and are generally safe.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Alpha-Lipoic Acid - may reduce burning pain and protect nerves. Typical dose: 300-600mg daily.",
            "Acetyl-L-Carnitine - may help nerve cells make energy and support repair. Typical dose: 1000-3000mg daily.",
            "Omega-3 Fatty Acids - EPA and DHA from fish oil can reduce inflammation, including in nerves. Typical dose: 1000-2000mg combined EPA and DHA daily.",
          ],
        },
        {
          type: "paragraph",
          text: `Supplements often work slowly. It can take 8 to 12 weeks of steady use to notice improvements. Do not expect quick results like some prescription medicines.`,
        },
        {
          type: "image",
          src: "/images/common/supplements.png",
          alt: "Various supplement bottles and capsules arranged on a table",
          caption: "Quality supplements can support nerve health when used as part of a comprehensive treatment plan.",
        },
      ],
    },

    {
      id: "vitamins",
      title: "Essential Vitamins",
      content: [
        {
          type: "paragraph",
          text: `Some vitamins are key for nerve health. Many people with neuropathy have low levels, which can worsen symptoms. Get vitamin levels checked with blood tests before starting high-dose supplements. Too much of some vitamins, especially B6, can harm nerves. Your doctor can order tests and help set safe doses.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Vitamin B12 - important for nerve function and myelin. Some people with neuropathy are low in B12. Typical dose: 1000-2000mcg daily when needed.",
            "Vitamin B1 (Thiamine) - helps nerves use glucose for energy. Benfotiamine may be more effective than regular thiamine. Typical dose: 300-600mg daily of benfotiamine.",
            "Folate - works with B12 to support nerves. Important for people on metformin. Typical dose: 400-800mcg daily of methylfolate.",
            "Vitamin D3 - many people have low vitamin D. It is important for nerves and immune health. Typical dose: 1000-4000 IU daily based on blood tests.",
          ],
        },
      ],
    },

    {
      id: "antioxidants",
      title: "Antioxidants",
      content: [
        {
          type: "paragraph",
          text: `Antioxidants protect nerves from damage by free radicals and oxidative stress. This damage may play a role in SFN. Getting enough antioxidants may slow nerve damage and reduce inflammation.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "N-Acetyl Cysteine (NAC) - helps the body make glutathione, a key antioxidant. Typical dose: 600-1200mg daily.",
            "Coenzyme Q10 - helps cells make energy and acts as an antioxidant. Typical dose: 100-300mg daily with food.",
            "Vitamin E - protects cell membranes from damage. Mixed tocopherols may be better. Typical dose: 400-800 IU daily.",
            "Vitamin C - works with other antioxidants to protect nerves and help regenerate vitamin E. Typical dose: 500-1000mg daily.",
          ],
        },
      ],
    },

    {
      id: "minerals",
      title: "Important Minerals",
      content: [
        {
          type: "paragraph",
          text: `Some minerals are important for nerve function and pain. Low levels can make neuropathy worse. Many people do not get enough minerals from diet alone.`,
        },
        {
          type: "paragraph",
          text: `Magnesium is one of the most important minerals for nerve health. It 
          helps regulate nerve signals and can reduce nerve pain. Many people with 
          chronic pain conditions are deficient in magnesium, and supplementation 
          often helps reduce symptoms.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Magnesium - may calm overactive nerves and reduce pain signals. Glycinate or citrate forms absorb better. Typical dose: 200-400mg daily at bedtime.",
            "Zinc - supports nerve healing and immune function. Too much zinc can affect copper absorption. Typical dose: 15-30mg daily with food.",
            "Chromium - helps blood sugar control, which can protect nerves. Typical dose: 200-400mcg daily.",
            "Selenium - an antioxidant that supports immune and thyroid health. Typical dose: 100-200mcg daily.",
          ],
        },
        {
          type: "paragraph",
          text: `Be careful with mineral supplements. Too much of some minerals can cause side effects or interfere with others. Often a balanced multimineral supplement is safer than high doses of single minerals.`,
        },
      ],
    },

    {
      id: "safety",
      title: "Safety & Quality",
      content: [
        {
          type: "paragraph",
          text: `Not all supplements are the same. The industry is less regulated than prescription drugs, so quality varies. Choosing high-quality supplements matters for safety and effectiveness. For safety, choose supplements tested by independent groups (USP, NSF), look for manufacturers that follow GMP, check expiration dates, avoid mega-doses, report all supplements to your doctor, and start with lower doses to see how you respond.`,
        },
        {
          type: "paragraph",
          text: `Some supplements can cause side effects or interact with medicines. Alpha-lipoic acid can lower blood sugar, which may be dangerous if you take diabetes drugs. High doses of vitamin B6 can cause neuropathy. This is why working with a healthcare provider is important.`,
        },
        {
          type: "paragraph",
          text: `Keep a journal of supplements you take and how you feel. This helps you and your doctor see what helps and what may cause problems. Remember supplements add to a healthy diet and medical care; they do not replace them. Be patient with supplements. Most need weeks or months of steady use before you notice effects. Try each supplement for at least 8 to 12 weeks before judging if it helps.`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 27, 2025",
    references: [
      {
        title: "Alpha-lipoic acid - National Center for Complementary and Integrative Health",
        link: "https://www.nccih.nih.gov/health/providers/digest/type-2-diabetes-and-dietary-supplements-science",
      },
      {
        title: "The Influence of Dietary Supplementations on Neuropathic Pain - National Center for Biotechnology Information",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9410423/",
      },
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "Alpha-Lipoic Acid - National Center for Biotechnology Information",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK564301/",
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