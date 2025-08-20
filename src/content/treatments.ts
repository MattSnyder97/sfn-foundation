// src/content/treatments.ts - Option 2: Array-based content blocks

export const treatmentsContent = {
  slug: "/about/treatments",
  tags: ["neuropathy", "nerve", "pain", "management", "therapy"],
  hero: {
    title: "Treatments",
  },
  
  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "medications", title: "Medications" },
    { id: "supplements", title: "Supplements" },
    { id: "lifestyle", title: "Lifestyle Changes" },
    { id: "emerging", title: "New and Future Treatments" },
  ],
  
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: 'paragraph',
          text: `Living with Small Fiber Neuropathy can feel overwhelming, but you have 
          options. While there's no cure yet, there are many ways to manage your 
          pain and help you feel better. The goal is to reduce your symptoms, 
          improve your daily life, and treat any health problems that might be 
          causing your neuropathy.`
        },
    {
      id: "supplements",
      title: "Supplements",
      content: [
        {
          type: 'paragraph',
          text: `Some supplements may help reduce nerve pain and support nerve health. 
          While supplements aren't a cure, research shows that certain vitamins 
          and nutrients can be helpful when used along with other treatments. 
          Always talk to your doctor before starting any supplements, especially 
          if you take other medicines.`
        },
        {
          type: 'paragraph',
          text: `The most studied supplements for nerve pain are alpha-lipoic acid and 
          B vitamins. These work as antioxidants, which means they help protect 
          your nerves from damage. Some people notice less pain and tingling 
          after taking these for several weeks.`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "Alpha-Lipoic Acid (300-600mg daily) - Helps reduce burning pain and may protect nerves from more damage.",
            "Vitamin B12 - Important for nerve health. Many people with neuropathy have low B12 levels.",
            "Vitamin B1 (Thiamine) - Helps nerves work better. Some people benefit from a special form called benfotiamine.",
            "Vitamin B6 - Supports nerve function, but don't take too much as it can actually cause nerve problems.",
            "Acetyl-L-Carnitine - May help reduce pain and support nerve repair.",
            "Vitamin D3 - Many people with neuropathy have low vitamin D levels.",
          ]
        },
        {
          type: 'paragraph',
          text: `Quality matters when choosing supplements. Look for brands that have 
          been tested by third parties for purity and strength. Some supplements 
          can interact with medicines, so it's important to tell your doctor 
          about everything you're taking.`
        },
        {
          type: 'paragraph',
          text: `Remember that supplements work slowly. It may take 6-12 weeks to notice 
          any benefits. Don't expect them to work as quickly as prescription 
          medicines. Think of supplements as one part of your overall treatment 
          plan, not a replacement for medical care.`
        }
      ]
    },
        {
          type: 'paragraph',
          text: `Every person with SFN is different. What works well for one person might 
          not work as well for another. That's why doctors often use several 
          treatments together. This team approach gives you the best chance of 
          finding relief. The sooner you start treatment, the better you're likely 
          to feel.`
        },
        {
          type: 'paragraph',
          text: `Your treatment plan might include medicine, lifestyle changes, and other 
          therapies. Working closely with your healthcare team is the best way to 
          find what works for you. Remember, managing SFN is a journey, and it's 
          okay to try different things until you find the right combination.`
        }
      ]
    },
    {
      id: "medications",
      title: "Medications",
      content: [
        {
          type: 'paragraph',
          text: `Several types of medicine can help reduce nerve pain. Your doctor will 
          usually start with medicines that have been proven to work well for nerve 
          pain. These medicines work differently than regular pain relievers like 
          ibuprofen or acetaminophen.`
        },
        {
          type: 'paragraph',
          text: `The most common first-choice medicines are called anticonvulsants. Don't 
          worry - even though they were first made to treat seizures, they're very 
          good at treating nerve pain too. The two main ones are gabapentin and 
          pregabalin (Lyrica).`
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Gabapentin - Often the first medicine doctors try. It's been around longer and costs less.",
            "Pregabalin (Lyrica) - Newer than gabapentin and may work better for some people.",
            "Duloxetine (Cymbalta) - An antidepressant that also helps nerve pain.",
            "Nortriptyline - An older antidepressant that can reduce pain and help with sleep.",
            "Topical treatments - Creams and patches you put on your skin where it hurts.",
          ]
        },
        {
          type: 'image',
          src: "/images/drugs.png",
          alt: "Healthcare professional discussing treatment options with a patient",
          caption: "Working with your doctor helps you find the right medicines for your pain."
        },
        {
          type: 'paragraph',
          text: `Topical treatments can be helpful because they work right where you put 
          them. Lidocaine patches can numb the area, while capsaicin cream (made 
          from hot peppers) can reduce pain signals over time. These might cause 
          less side effects than pills.`
        },
        {
          type: 'paragraph',
          text: `Remember, finding the right medicine takes time. You might need to try 
          different ones or different amounts. Some people do better with a 
          combination of medicines. Always talk to your doctor before making changes 
          to your medicines.`
        }
      ]
    },
    {
      id: "lifestyle",
      title: "Lifestyle Changes",
      content: [
        {
          type: 'paragraph',
          text: `The choices you make every day can have a big impact on how you feel. 
          While lifestyle changes won't cure your neuropathy, they can help reduce 
          your pain and keep your nerves as healthy as possible. Small changes can 
          add up to make a real difference.`
        },
        {
          type: 'paragraph',
          text: `If you have diabetes, keeping your blood sugar levels steady is one of 
          the most important things you can do. High blood sugar can damage your 
          nerves even more. Work with your healthcare team to find the best ways 
          to manage your blood sugar.`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            "Exercise regularly - Even gentle activities like walking or swimming can help reduce pain and improve your mood.",
            "Eat a healthy diet - Focus on whole foods like fruits, vegetables, lean proteins, and whole grains.",
            "Get enough sleep - Good sleep helps your body heal and can reduce pain.",
            "Manage stress - Try relaxation techniques, meditation, or activities you enjoy.",
            "Quit smoking - Smoking can make nerve damage worse by reducing blood flow.",
            "Limit alcohol - Too much alcohol can damage your nerves even more.",
            "Take care of your feet - Check them daily for cuts or sores that you might not feel.",
          ]
        },
        {
          type: 'paragraph',
          text: `Physical therapy can teach you exercises and techniques to manage pain 
          and stay active. Some people find that alternative treatments like 
          acupuncture, massage, or transcutaneous electrical nerve stimulation 
          (TENS) units help with their pain.`
        },
        {
          type: 'paragraph',
          text: `Support groups, either in person or online, can connect you with others 
          who understand what you're going through. Sometimes talking with people 
          who have similar experiences can be as helpful as any medicine.`
        }
      ]
    },
    {
      id: "emerging",
      title: "New and Future Treatments",
      content: [
        {
          type: 'paragraph',
          text: `Scientists are working hard to find better treatments for Small Fiber 
          Neuropathy. While these new treatments are still being studied, they give 
          us hope for better options in the future.`
        },
        {
          type: 'paragraph',
          text: `Researchers are looking at ways to help nerves grow back and heal 
          themselves. They're also studying how the immune system might play a role 
          in SFN and whether medicines that affect immunity could help.`
        },
        {
          type: 'paragraph',
          text: `Some promising areas of research include nerve growth factors, stem cell 
          therapy, and new ways to deliver medicines directly to damaged nerves. 
          Clinical trials are testing these treatments to see if they're safe and 
          effective.`
        },
        {
          type: 'paragraph',
          text: `If you're interested in trying new treatments, talk to your doctor about 
          clinical trials. These studies help develop new medicines and give some 
          patients access to treatments before they're widely available. Your 
          doctor can help you decide if a clinical trial might be right for you.`
        }
      ]
    }
  ],
  
  meta: {
    author: "Matt Snyder",
    lastUpdated: "August 20, 2025",
    references: [
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title:
          "Peripheral neuropathy - Treatment - NHS",
        link: "https://www.nhs.uk/conditions/peripheral-neuropathy/treatment/",
      },
      {
        title:
          "Anti-seizure medications: Relief from nerve pain - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/in-depth/pain-medications/art-20045004",
      },
      {
        title:
          "Diabetic neuropathy: Can dietary supplements help? - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/diabetic-neuropathy/in-depth/diabetic-neuropathy-and-dietary-supplements/art-20095406",
      },
      {
        title:
          "Diabetic neuropathy - Diagnosis & treatment - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/diabetic-neuropathy/diagnosis-treatment/drc-20371587",
      },
    ],
  },
};

// TypeScript types for this structure:
export interface ContentBlock {
  type: 'paragraph' | 'list' | 'image';
}

export interface ParagraphBlock extends ContentBlock {
  type: 'paragraph';
  text: string;
}

export interface ListBlock extends ContentBlock {
  type: 'list';
  ordered: boolean;
  items: string[];
}

export interface ImageBlock extends ContentBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export type ContentBlockType = ParagraphBlock | ListBlock | ImageBlock;