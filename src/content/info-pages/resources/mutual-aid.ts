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
          text: `Beth Kris is a member of our community who faces major accessibility and health challenges after taking a fluoroquinolone antibiotic. She is working to regain independence but needs support from others.`,
        },
        {
          type: "image",
          src: "/images/patient-stories/bethKris.jpeg",
          alt: "Beth Kris",
          caption: "Beth Kris"
        },
        {
          type: "paragraph",
          text: `Beth's GoFundMe is raising money for accessible housing, mobility aids, and essential needs. Your help can make a real difference.`,
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