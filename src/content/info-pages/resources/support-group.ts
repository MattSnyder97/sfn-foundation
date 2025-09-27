export const supportGroupContent = {
  slug: "/resources/support-group",
  tags: ["resources"],
  hero: {
    title: "Support Group",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "why-discord", title: "Why We Use Discord" },
    { id: "getting-started", title: "Getting Started with Discord" },
    { id: "community-guidelines", title: "Community Guidelines" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Living with small fiber neuropathy can feel isolating, but you do not have to go through it alone. Our support group brings people together from around the world to share experiences, ask questions, find advice, and encourage one another. Whether you want to connect, learn, or just chat with others who understand, you are welcome here.`,
        },
        {
          type: "button",
          label: "Join the Support Group",
          href: "https://discord.gg/UGNhBMkBS7",
          variant: "outlinePrimary",
        },
      ],
    },

    {
      id: "why-discord",
      title: "Why We Use Discord",
      content: [
        {
          type: "paragraph",
          text: `We use Discord because it helps create real connections. Unlike forums or social media, Discord allows people to talk in real time, making it easier to get quick answers or find support when you need it. Channels keep conversations organized by topic, so you can explore discussions on treatments, symptoms, doctor tips, or daily life. There are also spaces to celebrate wins, vent frustrations, or connect over hobbies. Together, the community can support one another in many meaningful ways.`,
        },
        {
          type: "image",
          src: "/images/misc/discordExample.jpg",
          alt: "Screenshot of a Discord server showing various channels and user interactions",
          caption: "Example of a Discord server",
        },
        {
          type: "paragraph",
          text: `Discord also makes it easy to host group activities such as movie nights, book clubs, or gaming sessions. These events bring people together, help build friendships, and provide a welcome break from chronic pain. With voice and video options, members can connect more personally whenever they choose.`,
        },
      ],
    },

    {
      id: "getting-started",
      title: "Getting Started with Discord",
      content: [
        {
          type: "paragraph",
          text: `If you are new to Discord, it is easier than it looks. Discord works on computers, phones, and tablets. You can use it in a web browser or [download the app](https://discord.com/download) for a smoother experience. For step by step help, check Discord's [Beginner's Guide](https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord).`,
        },
        {
          type: "paragraph",
          text: `Once you join, start by reading the welcome message which will guide you through the setup process. Channels are listed on the left and each one covers a specific topic. Feel free to introduce yourself in the introduce yourself channel!`,
        },
      ],
    },

    {
      id: "community-guidelines",
      title: "Community Guidelines",
      content: [
          {
            type: "paragraph",
            text: `Our Discord server is moderated to keep the community safe and supportive. Please follow these rules that mods enforce to protect everyone:`,
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Adults only. No minors.",
              "Be respectful: no hate, discrimination, shaming; honor pronouns and neurodiverse language.",
              "No medical or treatment advice, unproven cures, pseudoscience, or discussion of experimental/research/illegally sourced drugs; only legal, medically prescribed treatments may be discussed.",
              "No politics except in #healthcare-politics.",
              "Do not minimize or shame anyone's experience or treatment choices.",
              "Inactive members may lose access to sensitive channels."
            ],
          },
          {
            type: "paragraph",
            text: `Nothing shared in the support group is medical advice. Mods may take action if these rules are broken.`,
          },
          {
          type: "button",
          label: "Join the Support Group",
          href: "https://discord.gg/UGNhBMkBS7",
          variant: "outlinePrimary",
          },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 27, 2025",
    references: [
      {
        title: "Peer Support Groups - National Institute of Mental Health",
        link: "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health",
      },
      {
        title: "Beginner's Guide to Discord - Discord Support",
        link: "https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord",
      },
    ],
  },
};

// ---- Types ----
// Button margin note: The renderer should remove extra margin beneath a button if it is the last block in a section.
export interface ContentBlock {
  type: "paragraph" | "list" | "image" | "button";
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

export interface ButtonBlock extends ContentBlock {
  type: "button";
  label: string;
  href: string;
  icon?: string;
  variant?: "primary" | "secondary" | "outline" | "outlinePrimary";
}

export type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock | ButtonBlock;