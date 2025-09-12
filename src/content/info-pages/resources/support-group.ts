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
          text: `Living with small fiber neuropathy can feel isolating. Our Discord support group connects people worldwide for making connections, getting advice, and encouragement. You can ask questions, share experiences, or just talk with others who understand.`,
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
          text: `We use Discord because it helps build real connections. Unlike forums or social media, Discord lets people talk in real time. This makes it easier to get quick answers or to chat when you need support.`,
        },
        {
          type: "paragraph",
          text: `Channels keep conversations organized by topic, so you can find talks about treatments, symptoms, doctor tips, or daily life. We also have spaces to share wins, vent, or connect over hobbies. This helps the community support each other in many ways.`,
        },
        {
          type: "image",
          src: "/images/misc/discordExample.jpg",
          alt: "Screenshot of a Discord server showing various channels and user interactions",
          caption: "Example of a Discord server",
        },
        {
          type: "paragraph",
          text: `Discord also supports group activities like movie nights, book clubs, or gaming sessions. These events help build friendships and offer breaks from chronic pain. Voice and video options let members connect more personally when they want to.`,
        },
      ],
    },

    {
      id: "getting-started",
      title: "Getting Started with Discord",
      content: [
        {
          type: "paragraph",
          text: `If you're new to Discord, it is easier than it seems. Discord works on computers, phones, and tablets. You can use it in a web browser or [download the app](https://discord.com/download) for a smoother experience. See Discord's [Beginner's Guide](https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord) for help.`,
        },
        {
          type: "paragraph",
          text: `After joining, read the welcome messages and guidelines. Channels are listed on the left and cover specific topics. Start by introducing yourself in the introduce-yourself channel.`,
        },
        {
          type: "paragraph",
          text: `Conversations happen in real time, like text messaging. You can reply to messages, react with emojis, or start new topics. Don't feel pressured to join right away. Our community is patient and welcoming.`,
        },
        {
          type: "paragraph",
          text: `For mobile use, download the Discord app from your phone's app store. This lets you get notifications when people reply and makes checking in easier. You can change notification settings to avoid being overwhelmed.`,
        },
      ],
    },

    {
      id: "community-guidelines",
      title: "Community Guidelines",
      content: [
          {
            type: "paragraph",
            text: `Our Discord server is moderated to keep the community safe and supportive. Please follow these key rules that mods enforce to protect everyone:`,
          },
          {
            type: "list",
            ordered: false,
            items: [
              "No minors allowed. The server is for adults only.",
              "No hate, bigotry, or discrimination. Respect all members.",
              "No unsolicited medical advice. Honor requests for no advice.",
              "Do not present basic remedies like yoga or fad diets as cures for severe conditions.",
              "No politics, except in the healthcare-politics channel.",
              "Do not minimize or shame anyone's experience or treatment choices.",
              "Do not source prescription or illegal drugs. Discuss only legal, medically prescribed treatments.",
              "Respect pronouns and neurodiverse language preferences.",
              "No pseudoscience or unsupported medical claims.",
              "Inactive members may lose access to sensitive channels.",
            ],
          },
          {
            type: "paragraph",
            text: `Nothing shared here is medical advice. Mods may take action if these rules are broken. For full details, see the guidelines in our Discord server.`,
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
    lastUpdated: "September 12, 2025",
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