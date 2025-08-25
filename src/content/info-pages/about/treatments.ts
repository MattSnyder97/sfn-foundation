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
          text: `Living with Small Fiber Neuropathy can feel scary, but you have options. 
          While there's no cure yet, many treatments can help manage your pain and 
          help you feel better. The goal is to reduce symptoms, improve your daily 
          life, and treat any health problems that might be causing your neuropathy.`,
        },
        {
          type: "paragraph",
          text: `Every person with SFN is different. What works well for one person might 
          not work as well for another. That's why doctors often use several treatments 
          together. This team approach 
          gives you the best chance of finding relief. The sooner you start treatment, 
          the better you're likely to feel.`,
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
          text: `Several types of medicine can help reduce nerve pain. Your doctor will 
          usually start with medicines that work well for nerve pain. These medicines 
          work differently than regular pain relievers like ibuprofen or Tylenol.`,
        },
        {
          type: "paragraph",
          text: `The most common first medicines are called anticonvulsants. 
          Although they were made to treat seizures, they can be very
          effective at treating nerve pain too. The two main ones are gabapentin and 
          pregabalin (Lyrica).`,
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
          src: "/images/drugs.png",
          alt: "Healthcare professional discussing treatment options with a patient",
          caption:
            "Working with your doctor helps you find the right medicines for your pain.",
        },
        {
          type: "paragraph",
          text: `Topical treatments 
          can be helpful because they work right where you put them. Lidocaine patches 
          can numb the area, while capsaicin cream (made from hot peppers) can reduce 
          pain signals over time. These might cause fewer side effects than pills.`,
        },
        {
          type: "paragraph",
          text: `Remember, finding the right medicine takes time. You might need to try 
          different ones or different amounts. Some people do better with a mix of 
          medicines. Always talk to your doctor before making changes to your medicines.`,
        },
      ],
    },

    {
      id: "supplements",
      title: "Supplements",
      content: [
        {
          type: "paragraph",
          text: `Some supplements may help reduce nerve pain and support nerve health. 
          While supplements aren't a cure, research shows that certain vitamins and 
          nutrients can be helpful when used with other treatments. Always talk to 
          your doctor before starting any supplements, especially if you take other medicines.`,
        },
        {
          type: "paragraph",
          text: `The most studied supplements for nerve pain are alpha-lipoic acid 
          and B vitamins. These work as antioxidants, which means they help protect 
          your nerves from damage. Some people notice less pain and tingling after 
          taking these for several weeks.`,
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
          text: `Quality matters when choosing supplements. Look for brands that have been 
          tested by third parties
          for purity and strength. Some supplements can interact with medicines, so 
          it's important to tell your doctor about everything you're taking.`,
        },
        {
          type: "paragraph",
          text: `Remember that supplements work slowly. It may take 6-12 weeks to notice 
          any benefits. Don't expect them to work as quickly as prescription medicines. 
          Think of supplements as one part of your overall treatment plan, not a 
          replacement for medical care.`,
        },
      ],
    },

    {
      id: "lifestyle",
      title: "Lifestyle Changes",
      content: [
        {
          type: "paragraph",
          text: `The choices you make every day can have a big impact on how you feel. 
          While lifestyle changes won't cure your neuropathy, they can help reduce 
          your pain and keep your nerves as healthy as possible. Small changes can 
          add up to make a real difference.`,
        },
        {
          type: "paragraph",
          text: `If you have diabetes, keeping your blood sugar levels steady 
          is one of the most important things you can do. High blood sugar can damage 
          your nerves even more. Work with your healthcare team to find the best ways 
          to manage your blood sugar.`,
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
          src: "/images/exercisingWoman.png",
          alt: "Woman doing gentle exercise outdoors",
          caption:
            "Regular gentle exercise like walking can help reduce nerve pain and improve your overall health.",
        },
        {
          type: "paragraph",
          text: `Physical therapy 
          can teach you exercises and techniques to manage pain and stay active. Some 
          people find that alternative treatments like acupuncture, massage, or TENS 
          units help with their pain.`,
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
          text: `Some people with SFN find help from treatments that are "off-label" 
          or not yet widely accepted as standard care. These alternative treatments 
          might be worth discussing with your doctor, especially if standard treatments 
          haven't given you enough relief. Always work with your healthcare provider 
          before trying any new treatment.`,
        },
        {
          type: "paragraph",
          text: `Two alternative treatments that some people with neuropathy find helpful 
          are Low Dose Naltrexone and medical cannabis. While research is still ongoing, 
          some studies show promising results for nerve pain relief.`,
        },
        {
          type: "paragraph",
          text: `**Low Dose Naltrexone (LDN)** is a medication that was originally used at higher doses to treat addiction. At very low doses (1-5mg daily), it may help reduce inflammation and pain. Recent research specifically in patients with biopsy-confirmed cryptogenic Small Fiber Neuropathy (SFN) found that LDN may improve symptoms, especially in sensory and autonomic domains. However, the evidence is limited by small sample size and variable dosing, and more research is needed to confirm its benefits.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "How it works - LDN may reduce inflammation in the nervous system and help the body's natural pain-fighting systems work better. Some studies show improvement in sensory and autonomic symptoms for SFN.",
            "Dosing - Typical doses are 1.5-4.5mg taken at bedtime. It must be compounded by a special pharmacy. Dosing may vary and is still being studied.",
            "Side effects - Most people have few side effects. Some report vivid dreams or trouble sleeping at first.",
            "Cost - Usually not covered by insurance and must be made by compounding pharmacies, costing $30-60 per month.",
            "Evidence limitations - Research so far is limited by small sample sizes and variable dosing. More studies are needed to confirm benefits for SFN.",
          ],
        },
        {
          type: "paragraph",
          text: `Research on LDN for SFN is ongoing. The latest studies suggest it may be especially relevant for cryptogenic SFN, with improvements seen in pain and autonomic symptoms. LDN may also work by blocking inflammation pathways in the central nervous system, but its effectiveness for diabetic neuropathy and other neuropathic pain conditions is still being evaluated.`,
        },
        {
          type: "paragraph",
          text: `**Medical Cannabis** is legal in many states for treating chronic pain. 
          Some people with neuropathy find it helps with pain and sleep, though the 
          evidence is mixed.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Forms available - Oils, capsules, edibles, topicals, and inhaled forms. Different forms work differently.",
            "CBD vs THC - CBD (cannabidiol) may help with pain and inflammation without causing a \"high.\" THC can help with pain but causes mental effects.",
            "Legal considerations - Laws vary widely by state. You typically need a medical marijuana card and qualifying condition.",
            "Dosing - Start with very low doses and increase slowly. Effects can take 1-2 hours with edibles.",
          ],
        },
        {
          type: "paragraph",
          text: `Research suggests medical cannabis can be effective for nerve pain, 
          and some studies show it can help chronic neuropathic pain without severe side effects. 
          However, side effects like impaired thinking and breathing problems are common, especially at higher doses.`,
        },
        {
          type: "paragraph",
          text: `Remember that these alternative treatments are not right for everyone. 
          They may interact with other medications or have side effects that make 
          them unsuitable for some people. The best approach is to work with a 
          healthcare provider who understands both your condition and these treatments.`,
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
          and effective.`,
        },
        {
          type: "paragraph",
          text: `If you're interested in trying new treatments, talk to your doctor about 
          clinical trials. 
          These studies help develop new medicines and give some patients access to 
          treatments before they're widely available. Your doctor can help you decide 
          if a clinical trial might be right for you.`,
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