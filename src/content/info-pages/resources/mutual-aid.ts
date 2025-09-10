export const mutualAidContent = {
  slug: "/resources/mutual-aid",
  tags: ["resources"],
  hero: {
    title: "Mutual Aid",
  },
  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "beth-kris", title: "Beth Kris" },
    

    { id: "disclaimer", title: "Disclaimer" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Mutual aid means we help each other in our community. This page connects people who need help with those who can give it. Help can include money, accessibility needs, or urgent support.`,
        },
        {
          type: "paragraph",
          text: `Below are current ways to help people in our community. To add someone, please [contact us](/contact). Small acts of kindness can make a big difference.`,
        },
      ],
    },
    {
      id: "beth-kris",
      title: "Beth Kris",
      content: [
        {
          type: "paragraph",
          text: `Two years ago, Beth was active and independent. After taking four pills of a fluoroquinolone antibiotic, her life changed completely. She became disabled and now uses a wheelchair. Beth cannot work, drive, or leave home alone. She lives with severe chronic pain and other health problems that keep getting worse. She has seen lots of doctors and tried many treatments, but she is still mostly bedridden. She cannot qualify for disability benefits because she lacks enough work credits.`,
        },
        {
          type: "image",
          src: "/images/patient-stories/bethKris.jpeg",
          alt: "Beth Kris",
          caption: "Beth Kris"
        },
        {
          type: "paragraph",
          text: `Beth needs help paying for basic accessibility items like a house ramp, car equipment for her wheelchair, and other mobility aids. These things cost thousands of dollars. Her health is getting worse, and she also faces the heartbreak of having to put down her elderly cat due to an aggressive tumor. Beth is grateful for any support as she fights to regain some independence. Even small donations can help her get the tools she needs to improve her quality of life.`,
        },
        {
          type: "paragraph",
          text: `To support Beth, visit her GoFundMe page: [Support Beth's Battle for Accessibility and Independence](https://www.gofundme.com/f/support-beths-battle-for-accessibility-and-independence)`,
        },
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: [
        {
          type: "paragraph",
          text: `Links on this page go to individual fundraisers. The SFN Foundation does not handle or receive these funds. Please decide for yourself before donating.`,
        },
      ],
    },
  ],
  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 7, 2025",
  },
};