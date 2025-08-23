export const supportGroupContent = {
  slug: "/resources/support-group",
  tags: ["neuropathy", "nerve", "support", "group"],
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
          text: `Living with Small Fiber Neuropathy can feel isolating, especially when 
          friends and family don't fully understand what you're going through. Our 
          support group connects people with SFN from around the world, creating a 
          community where you can share experiences, ask questions, and find encouragement 
          from others who truly understand your journey.`,
        },
        {
          type: "paragraph",
          text: `[Join the SFN support group](https://discord.gg/UGNhBMkBS7)`,
        },
        {
          type: "paragraph",
          text: `Our community is built on Discord, a modern communication platform that 
          makes it easy to chat with other members, participate in group activities, 
          and stay connected throughout the day. Whether you want to ask about a new 
          symptom, share a treatment success, or just talk with people who get it, 
          our Discord server provides a welcoming space for all aspects of living with SFN.`,
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
          Feel free to read more about Discord and how it works in their [Beginner's Guide](https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord)`,
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
          text: `Our support group thrives because we maintain a respectful, supportive 
          environment where everyone feels safe to share their experiences. We ask all 
          members to be kind, patient, and understanding with each other, recognizing 
          that chronic pain can affect mood and energy levels in different ways.`,
        },
        {
          type: "paragraph",
          text: `While we encourage sharing treatment experiences and what has worked 
          for you, please remember that we're not medical professionals. Always consult 
          with your healthcare provider before making changes to your treatment plan. 
          We're here to support each other, share experiences, and provide emotional 
          encouragement, not to replace medical advice.`,
        },
        {
          type: "paragraph",
          text: `We maintain a positive focus in our community while acknowledging that 
          living with SFN includes difficult days. It's okay to share struggles and 
          frustrations, and we're here to listen and support you through tough times. 
          We also love celebrating victories, both big and small, from successful treatments 
          to simply having a better day than expected.`,
        },
        {
          type: "paragraph",
          text: `Privacy and confidentiality are important to us. What's shared in our 
          Discord stays in our Discord. We ask members to respect each other's privacy 
          and not share personal information or conversations outside our community 
          without permission. This helps maintain the trust that makes meaningful support 
          possible.`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 22, 2025",
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