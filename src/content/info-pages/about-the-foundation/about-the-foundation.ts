export const aboutTheFoundationContent = {
  slug: "/about-the-foundation",
  tags: ["foundation", "resources"],
  hero: {
    title: "About the SFN Foundation",
  },

  tableOfContents: [
    { id: "our-mission", title: "Our Mission" },
    { id: "how-we-started", title: "How We Started" },
    { id: "research-portal", title: "Research Portal" },
    { id: "our-goals", title: "Our Goals" },
    { id: "roadmap", title: "Roadmap" },
  ],

  sections: [
    {
      id: "our-mission",
      title: "Our Mission",
      content: [
        {
          type: "paragraph",
          text: `The SFN Foundation exists for those affected by Small Fiber Neuropathy. We are committed to improving the lives of people living with SFN through research, education, and awareness. Our goal is simple: find a cure for SFN by bringing together the brightest minds and most promising research.`,
        },
        {
          type: "paragraph",
          text: `We believe that by connecting researchers worldwide and using new technology like AI, we can speed up discoveries that lead to better treatments and eventually a cure. Every person with SFN deserves hope and access to the latest research.`,
        },
      ],
    },

    {
      id: "how-we-started",
      title: "How We Started",
      content: [
        {
          type: "paragraph",
          text: `The SFN Foundation launched in August 2025 when [Matt Snyder](resources/patient-stories/matt) began developing this website under the guidance of SFN medical experts and researchers. Seeing the need for better coordination in SFN research and more support for patients, we set out to create something that could make a real difference.`,
        },
        {
          type: "paragraph",
          text: `We are currently building our foundation and working toward rapid expansion so we can have the biggest impact on SFN research. While we are not yet officially registered as a non-profit organization, we plan to complete that process once our Research Portal is finished and we have a solid foundation to build on.`,
        },
      ],
    },

    {
      id: "research-portal",
      title: "Research Portal",
      content: [
        {
          type: "paragraph",
          text: `Our Research Portal will be a game-changer for SFN research. This platform will allow researchers from around the world to upload their latest findings and build a shared database of SFN knowledge. Think of it as a central hub where all SFN research comes together in one place.`,
        },
        {
          type: "paragraph",
          text: `The portal will help researchers discuss their work, share ideas, and avoid repeating studies that others have already done. But the real power comes next: we plan to use this database to train an AI model that can find patterns in the research much faster than humans alone. If you are a researcher interested in getting access to the Research Portal, please [contact us](/contact?subject=Research%20Portal%20Access).`,
        },
        {
          type: "paragraph",
          text: `This AI will help identify promising treatment paths, spot connections between different studies, and guide researchers toward the most likely breakthroughs. By combining human knowledge with AI speed, we can accelerate the discovery of SFN treatments.`,
        },
      ],
    },

    {
      id: "our-goals",
      title: "Our Goals",
      content: [
        {
          type: "paragraph",
          text: `Once we become an official non-profit organization, our focus will be on maximizing every dollar to fund the most promising SFN research. We will pursue grants and donations to support research that has the best chance of helping patients.`,
        },
        {
          type: "paragraph",
          text: `Our primary goals include accelerating research that leads to new treatments and cures, bringing awareness to SFN so more people get diagnosed and treated, educating patients and healthcare providers about the latest SFN information, and advocating for more research funding dedicated to SFN.`,
        },
        {
          type: "paragraph",
          text: `We want to be the foundation that finally brings effective treatments and a cure to the SFN community. Every decision we make will be guided by one question: will this help people with SFN get better faster?`,
        },
      ],
    },

    {
      id: "roadmap",
      title: "Roadmap",
      content: [
        {
          type: "paragraph",
          text: `Here is our plan for making the SFN Foundation a powerful force for change:`,
        },
        {
          type: "component",
          component: "Roadmap",
          props: {
            items: [
              "August 2025: Launch foundation website and begin building community",
              "September 2025: Reach out to SFN support groups and social networks to promote the foundation and connect patients",
              "November 2025: Complete and launch the Research Portal for worldwide researcher collaboration",
              "January 2026: File paperwork to become an official non-profit organization",
              "March 2026 and beyond: Partner with our network to direct grants and donations to the most promising SFN research projects",
            ],
          },
        },
        {
          type: "paragraph",
          text: `This timeline keeps us moving fast while making sure we build something that lasts. Each step gets us closer to our ultimate goal: finding better treatments and a cure for SFN.`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 19, 2025",
  },
};