export const mutualAidContent = {
  slug: "/resources/mutual-aid",
  tags: ["resources"],
  hero: {
    title: "Mutual Aid",
  },
  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "beth-kris", title: "Beth Kris" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Mutual aid is about supporting each other in our community, especially when someone faces added challenges to an already difficult situation. 
          This page is here to help people in our SFN community who need assistance, whether that's financial, accessibility, or other urgent needs. 
          If you know someone who could use help, or if you want to contribute, this is the place to connect and make a difference.`,
        },
        {
          type: "paragraph",
          text: `Below you'll find current opportunities to help members of our community. If you would like to request to add someone to this page
          please [contact us](/contact). Every act of kindness makes a difference.`,
        },
      ],
    },
    {
      id: "beth-kris",
      title: "Beth Kris",
      content: [
        {
          type: "paragraph",
          text: `Beth Kris is a member of our SFN community who is currently facing significant barriers to accessibility and independence. 
          Her story is one of resilience, enduring many health complications as a result of taking a fluoroquinolone antibiotic. Beth is working 
          hard to overcome physical and financial challenges, but she needs our help to continue her fight.`,
        },
        {
          type: "image",
          src: "/images/patient-stories/bethKris.jpeg",
          alt: "Beth Kris",
          caption: "Beth Kris"
        },
        {
          type: "paragraph",
          text: `Beth's GoFundMe campaign is raising funds to help her secure accessible housing, mobility aids, and essential resources. 
          Your support can make a real difference in her life, helping her regain independence and improve her quality of life.`,
        },
        {
          type: "paragraph",
          text: `If you would like to support Beth, please visit her GoFundMe page: 
          [Support Beth's Battle for Accessibility and Independence](https://www.gofundme.com/f/support-beths-battle-for-accessibility-and-independence)`,
        },
      ],
    },
  ],
  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 25, 2025",
  },
};