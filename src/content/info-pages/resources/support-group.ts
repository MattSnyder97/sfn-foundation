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
          text: `Living with Small Fiber Neuropathy can feel isolating, but our support group on Discord connects people worldwide for real-time chat, advice, and encouragement. Whether you want to ask questions, share experiences, or just talk with others who understand, our community is here for you.`,
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
          text: `We chose Discord for our support group because it offers the best way 
          to build real connections and community among people with SFN. Unlike traditional 
          forums or social media groups, Discord allows for real-time conversations that 
          flow naturally, making it easier to get quick answers to urgent questions or 
          simply chat when you need support.`,
        },
        {
          type: "paragraph",
          text: `Discord's channel system lets us organize conversations by topic, so you 
          can easily find discussions about treatments, symptoms, doctor recommendations, 
          or daily life with SFN. We also have channels for sharing victories, venting 
          frustrations, and connecting over interests beyond neuropathy. This organization 
          helps keep conversations focused while allowing the community to support each 
          other in multiple ways.`,
        },
        {
          type: "paragraph",
          text: `The platform makes it simple to participate in group activities like 
          virtual movie nights, book clubs, meditation sessions, or game nights. These 
          activities help build friendships and provide enjoyable distractions from chronic 
          pain. Discord's voice and video features also allow for more personal connections 
          when members want to hear each other's voices or see each other's faces.`,
        },
      ],
    },

    {
      id: "getting-started",
      title: "Getting Started with Discord",
      content: [
        {
          type: "paragraph",
          text: `If you're new to Discord, it's easier to use than it might 
          first appear. Discord works on computers, phones, and tablets, so you can stay 
          connected however you prefer to communicate. You can use Discord in your web 
          browser or [download the app](https://discord.com/download) for the best experience.
          Feel free to read more about Discord and how it works in their [Beginner's Guide](https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord).`,
        },
        {
          type: "paragraph",
          text: `After joining our server, take some time to read the welcome messages 
          and community guidelines. You'll see different channels listed on the left 
          side of your screen, each dedicated to specific topics. Start by introducing 
          yourself in our introduce-yourself channel.`,
        },
        {
          type: "paragraph",
          text: `Discord conversations happen in real-time, similar to text messaging. 
          You can respond to specific messages, react with emojis, or start new conversation 
          topics. Don't feel pressured to jump into conversations right away.
          Our community is patient and welcoming to all communication styles.`,
        },
        {
          type: "paragraph",
          text: `For the best mobile experience, download the Discord app from your phone's 
          app store. This allows you to receive notifications when someone responds to 
          your messages and makes it easy to check in with the community throughout your 
          day. You can customize notification settings to avoid being overwhelmed while 
          still staying connected.`,
        },
      ],
    },

    {
      id: "community-guidelines",
      title: "Community Guidelines",
      content: [
          {
            type: "paragraph",
            text: `Our Discord server is moderated to keep the community safe, supportive, and focused. Please follow these key guidelines, which mods enforce to protect everyone:`,
          },
          {
            type: "list",
            ordered: false,
            items: [
              "No minors allowed. The server is for adults only.",
              "No hate, bigotry, or discrimination. Respect all members.",
              "No unsolicited medical advice. Respect requests for no advice.",
              "No recommending basic remedies (e.g., yoga, fad diets) as cures for severe conditions.",
              "No politics, except in the healthcare-politics channel.",
              "No minimizing or shaming anyone's experience or treatment choices.",
              "No sourcing prescription or illicit drugs. Discuss only legal, medically prescribed treatments.",
              "Respect pronouns and neurodiverse language preferences.",
              "No pseudoscience or unsupported medical claims.",
              "Inactive members may lose access to sensitive channels.",
            ],
          },
          {
            type: "paragraph",
            text: `Remember: Nothing shared here is medical advice. Mods may take action if these rules are broken. For full details, see the guidelines in our Discord server.`,
          },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "September 7, 2025",
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