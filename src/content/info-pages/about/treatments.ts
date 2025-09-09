export const treatmentsContent = {
  slug: "/about/treatments",
  tags: ["treatments", "about"],
  hero: {
    title: "Treatments",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "medications", title: "Medications" },
    { id: "supplements", title: "Supplements" },
    { id: "lifestyle", title: "Lifestyle Changes" },
    { id: "alternative", title: "Alternative Treatments" },
    { id: "emerging", title: "New and Future Treatments" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Living with Small Fiber Neuropathy can feel scary, but there are options. While there is no cure yet, many treatments can help control pain and improve daily life. The goal is to reduce symptoms and treat any health problems that may be causing your neuropathy.`,
        },
        {
          type: "paragraph",
          text: `Every person with SFN is different. What helps one person may not help another. Doctors often use several treatments together. This gives you a better chance of finding relief. The sooner you start treatment, the better you may feel.`,
        },
        {
          type: "paragraph",
          text: `Your treatment plan might include medicine, lifestyle changes, and other 
          therapies. Working closely with your healthcare team is the best way to 
          find what works for you. Remember, managing SFN takes time, and it's okay 
          to try different things until you find the right mix.`,
        },
      ],
    },

    {
      id: "medications",
      title: "Medications",
      content: [
        {
          type: "paragraph",
          text: `Several types of medicine can help nerve pain. Your doctor will usually start with medicines that work for nerve pain. These work differently than regular pain relievers like ibuprofen or acetaminophen.`,
        },
        {
          type: "paragraph",
          text: `The most common first medicines are anticonvulsants. They were made to treat seizures but can also help nerve pain. The two main ones are gabapentin and pregabalin (Lyrica).`,
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Gabapentin - Often the first medicine doctors try. Typical dose: 300-3600mg daily, divided into 3 doses. It's been around longer and costs less.",
            "Pregabalin (Lyrica) - Newer than gabapentin and may work better for some people. Typical dose: 150-600mg daily, divided into 2-3 doses.",
            "Duloxetine (Cymbalta) - An antidepressant that also helps nerve pain. Typical dose: 60mg once daily.",
            "Nortriptyline - An older antidepressant that can reduce pain and help with sleep. Typical dose: 25-100mg at bedtime.",
            "Topical treatments - Creams and patches you put on your skin where it hurts. Lidocaine patches (5%) or capsaicin cream (0.075%) applied 1-3 times daily.",
          ],
        },
        {
          type: "image",
          src: "/images/common/drugs.png",
          alt: "Healthcare professional discussing treatment options with a patient",
          caption:
            "Working with your doctor helps you find the right medicines for your pain.",
        },
        {
          type: "paragraph",
          text: `Topical treatments work where you put them. Lidocaine patches can numb the area. Capsaicin cream can reduce pain signals over time. These may cause fewer side effects than pills.`,
        },
        {
          type: "paragraph",
          text: `Finding the right medicine takes time. You may need to try different drugs or doses. Some people do better with a mix of medicines. Always talk to your doctor before changing your medicines.`,
        },
      ],
    },

    {
      id: "supplements",
      title: "Supplements",
      content: [
        {
          type: "paragraph",
          text: `Some supplements may help reduce nerve pain and support nerve health. They are not a cure, but some vitamins and nutrients can help when used with other treatments. Talk to your doctor before starting supplements, especially if you take other medicines.`,
        },
        {
          type: "paragraph",
          text: `The most studied supplements for nerve pain are alpha-lipoic acid and B vitamins. These act as antioxidants and may help protect nerves. Some people notice less pain and tingling after taking them for several weeks.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Alpha-Lipoic Acid - Helps reduce burning pain and may protect nerves from more damage. Typical dose: 300-600mg daily.",
            "Vitamin B12 - Important for nerve health. Many people with neuropathy have low B12 levels. Typical dose: 1000-2000mcg daily.",
            "Vitamin B1 (Thiamine) - Helps nerves work better. Some people benefit from a special form called benfotiamine. Typical dose: 300-600mg daily.",
            "Acetyl-L-Carnitine - May help reduce pain and support nerve repair. Typical dose: 1000-3000mg daily.",
            "Vitamin D3 - Many people with neuropathy have low vitamin D levels. Typical dose: 1000-4000 IU daily.",
          ],
        },
        {
          type: "paragraph",
          text: `Quality matters when choosing supplements. Look for brands tested by third parties for purity and strength. Some supplements can interact with medicines, so tell your doctor about everything you take.`,
        },
        {
          type: "paragraph",
          text: `Remember that supplements work slowly. It may take 6-12 weeks to notice 
          any benefits. Don't expect them to work as quickly as prescription medicines. 
          Think of supplements as one part of your overall treatment plan, not a 
          replacement for medical care. [Learn more about supplements for SFN](/resources/supplements)`,
        },
      ],
    },

    {
      id: "lifestyle",
      title: "Lifestyle Changes",
      content: [
        {
          type: "paragraph",
          text: `Daily choices can affect how you feel. Lifestyle changes won't cure neuropathy, but they can reduce pain and help keep nerves healthy. Small changes can add up.`,
        },
        {
          type: "paragraph",
          text: `If you have diabetes, keeping blood sugar steady is one of the most important things you can do. High blood sugar can damage nerves. Work with your healthcare team to find the best ways to manage it.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Exercise regularly - Even gentle activities like walking or swimming can help reduce pain and improve your mood. Aim for 30 minutes most days of the week.",
            "Eat a healthy diet - Focus on whole foods like fruits, vegetables, lean proteins, and whole grains. Limit processed foods and sugar.",
            "Get enough sleep - Good sleep helps your body heal and can reduce pain. Aim for 7-9 hours per night.",
            "Manage stress - Try relaxation techniques, meditation, or activities you enjoy. Chronic stress can make pain worse.",
            "Quit smoking - Smoking can make nerve damage worse by reducing blood flow to your nerves.",
            "Limit alcohol - Too much alcohol can damage your nerves even more. Stick to recommended limits or avoid it completely.",
            "Take care of your feet - Check them daily for cuts or sores that you might not feel due to numbness.",
          ],
        },
        {
          type: "image",
          src: "/images/common/exercisingWoman.png",
          alt: "Woman doing gentle exercise outdoors",
          caption:
            "Regular gentle exercise like walking can help reduce nerve pain and improve your overall health.",
        },
        {
          type: "paragraph",
          text: `Physical therapy can teach exercises and techniques to manage pain and stay active. Some people find relief with acupuncture, massage, or TENS units.`,
        },
        {
          type: "paragraph",
          text: `Support groups, 
          either in person or online, can connect you with others who understand what 
          you're going through. Sometimes talking with people who have similar experiences 
          can be as helpful as any medicine.`,
        },
      ],
    },

    {
      id: "alternative",
      title: "Alternative Treatments",
      content: [
        {
          type: "paragraph",
          text: `Some people find help from treatments that are not yet standard care. These may be worth discussing with your doctor if other treatments do not help enough. Always work with your healthcare provider before trying new treatments.`,
        },
        {
          type: "paragraph",
          text: `Two alternative options some people try are Low Dose Naltrexone and medical cannabis. Research continues, but some studies show possible benefit for nerve pain.`,
        },
        {
          type: "paragraph",
          text: `**Low Dose Naltrexone (LDN)** is a medication that was originally used at higher doses to treat addiction. At very low doses (1-5mg daily), it may help reduce inflammation and pain. Recent research specifically in patients with biopsy-confirmed cryptogenic Small Fiber Neuropathy (SFN) found that LDN may improve symptoms, especially in sensory and autonomic domains. However, the evidence is limited by small sample size and variable dosing, and more research is needed to confirm its benefits.`,
        },
        {
          type: "paragraph",
          text: `Low Dose Naltrexone (LDN) may reduce inflammation and help the body's pain control systems. Typical doses are small (often 1.5–4.5 mg at bedtime) and it usually requires a compounding pharmacy. Side effects are often mild, like vivid dreams or sleep changes. LDN is not usually covered by insurance and costs can vary. Current studies are small, so more research is needed to confirm benefits for SFN.`,
        },
        {
          type: "paragraph",
          text: `Recent studies suggest it may help some people with cryptogenic SFN, with improvements in pain and autonomic symptoms. More research is needed to confirm its benefits.`,
        },
        {
          type: "paragraph",
          text: `Medical cannabis is legal in many states for chronic pain. Some people with neuropathy find it helps with pain and sleep, though the evidence is mixed.`,
        },
        {
          type: "paragraph",
          text: `Medical cannabis comes in many forms (oils, capsules, edibles, topicals, inhaled). CBD may reduce pain and inflammation without causing a high, while THC can help pain but causes mental effects. Laws and access vary by state; dosing starts low and increases slowly, especially with edibles where effects can take 1–2 hours.`,
        },
        {
          type: "paragraph",
          text: `Research suggests medical cannabis can help nerve pain for some people. Side effects such as impaired thinking and breathing problems can occur, especially at higher doses.`,
        },
        {
          type: "paragraph",
          text: `Alternative treatments are not right for everyone. They can interact with medicines or have side effects that make them unsafe for some people. Work with a healthcare provider who knows your condition and these treatments.`,
        },
      ],
    },

    {
      id: "emerging",
      title: "New and Future Treatments",
      content: [
        {
          type: "paragraph",
          text: `Scientists are working hard to find better treatments for Small Fiber 
          Neuropathy. While these new treatments are still being studied, they give 
          us hope for better options in the future.`,
        },
        {
          type: "paragraph",
          text: `Researchers are looking at ways to help nerves grow back and heal themselves. 
          They're also studying how the immune system 
          might play a role in SFN and whether medicines that affect immunity could help.`,
        },
        {
          type: "paragraph",
          text: `Some promising areas of research include nerve growth factors, 
          stem cell therapy, and new ways to deliver medicines directly to damaged 
          nerves. Clinical trials are testing these treatments to see if they're safe 
          and effective. [Check out the latest research for SFN](/research)`,
        },
        {
          type: "paragraph",
          text: `If you are interested in new treatments, talk to your doctor about clinical trials. These studies help develop new medicines and can give some patients access to treatments before they are widely available. Your doctor can help decide if a trial might be right for you. [View clinical trials for SFN](https://clinicaltrials.gov/search?cond=small%20fiber%20neuropathy)`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 25, 2025",
    references: [
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "Peripheral neuropathy - Treatment - NHS",
        link: "https://www.nhs.uk/conditions/peripheral-neuropathy/treatment/",
      },
      {
        title:
          "Anti-seizure medications: Relief from nerve pain - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/in-depth/pain-medications/art-20045004",
      },
      {
        title:
          "Diabetic neuropathy - Diagnosis & treatment - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/diabetic-neuropathy/diagnosis-treatment/drc-20371587",
      },
      {
        title:
          "Medical Marijuana - National Center for Biotechnology Information",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10716240/",
      },
      {
        title:
          "Use of Low Dose Naltrexone in a Cohort of Patients with Cryptogenic Small Fiber Neuropathy - Neurology Journals",
        link: "https://www.neurology.org/doi/10.1212/WNL.0000000000206418",
      },
      {
        title:
          "Low-Dose Naltrexone for Treatment of Pain - National Center for Biotechnology Information",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6313374/",
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