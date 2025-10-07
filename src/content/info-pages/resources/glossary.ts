export const glossaryContent = {
  slug: "/resources/glossary",
  tags: ["resources"],
  hero: {
    title: "SFN Glossary",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "acronyms", title: "Common Acronyms" },
    { id: "medical-terms", title: "Medical Terms" },
    { id: "tests-procedures", title: "Tests & Procedures" },
    { id: "treatments", title: "Treatments & Medications" },
    { id: "symptoms", title: "Symptoms & Sensations" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Understanding medical terms and acronyms can help you better communicate 
          with your healthcare team and understand your condition. This glossary 
          explains common words, abbreviations, and phrases you might encounter 
          when dealing with Small Fiber Neuropathy. Medical language can feel overwhelming at first, but learning these terms will help you become a more informed patient. Don't hesitate to ask your doctor or healthcare provider to explain any terms you don't understand during your appointments.`,
        },
      ],
    },

    {
      id: "acronyms",
      title: "Common Acronyms",
      content: [
        {
          type: "paragraph",
          text: `These are common acronyms used in small fiber neuropathy information, medical records, and research.`,
        },
        {
          type: "list",
          ordered: false,
            items: [
            "**ALA** - Alpha Lipoic Acid. An antioxidant supplement sometimes used to help nerve pain.",
            "**ALCAR** - Acetyl-L-Carnitine. A supplement that may help nerve cells make energy and support repair.",
            "**CBD** - Cannabidiol. A compound found in cannabis that may help with pain and inflammation.",
            "**CBG** - Cannabigerol. A non-psychoactive compound in cannabis that is being studied for potential health benefits.",
            "**COVID** - Coronavirus Disease. An infectious disease caused by the SARS-CoV-2 virus that can cause small fiber neuropathy.",
            "**EMG** - Electromyography. A test that records electrical activity in muscles to help find nerve or muscle problems.",
            "**IENFD** - Intraepidermal Nerve Fiber Density. A measure of small nerve fibers in a skin biopsy.",
            "**iSFN** - Idiopathic Small Fiber Neuropathy. SFN with no known cause.",
            "**IVIG** - Intravenous Immunoglobulin. A treatment using antibodies from donors to affect the immune system.",
            "**JAKI** - Janus Kinase Inhibitors. Drugs that block enzymes involved in immune signaling and inflammation.",
            "**LDN** - Low Dose Naltrexone. A low-dose medication that may lower inflammation and pain for some people.",
            "**MCAS** - Mast Cell Activation Syndrome. A condition where mast cells release too many chemicals, sometimes linked to SFN.",
            "**NCS** - Nerve Conduction Study. A test that checks how fast electrical signals move through nerves.",
            "**NLD** - Non-Length Dependent. A common pattern of small fiber neuropathy where symptoms can present in any area of the body, not just the hands and feet.",
            "**QSART** - Quantitative Sudomotor Axon Reflex Test. A test that checks how well small nerve fibers control sweating.",
            "**SFN** - Small Fiber Neuropathy. Damage to small nerve fibers that carry pain, temperature, and some automatic signals.",
            "**THC** - Tetrahydrocannabinol. The main psychoactive compound in cannabis, which may help with pain relief.",
            "**TST** - Thermoregulatory Sweat Test. A test that measures how the body sweats when exposed to heat.",
          ],
        },
      ],
    },

    {
      id: "medical-terms",
      title: "Medical Terms",
      content: [
        {
          type: "paragraph",
          text: `These medical terms are often used when talking about small fiber neuropathy, its causes, and related conditions.`,
        },
        {
          type: "list",
          ordered: false,
            items: [
            "**Allodynia** - Pain from something that usually does not cause pain, like light touch or clothes on the skin.",
            "**Autonomic Neuropathy** - Damage to nerves that control automatic functions like heart rate, blood pressure, and digestion.",
            "**Axon** - The long part of a nerve cell that sends electrical signals away from the cell body.",
            "**Distal** - Areas of the body farther from the center, like hands and feet.",
            "**Dysautonomia** - Problems with the autonomic nervous system, which controls automatic body functions.",
            "**Hyperalgesia** - Increased sensitivity to pain, where painful things hurt more than they should.",
            "**Hypesthesia** - Reduced sensitivity to touch, pressure, or other sensations.",
            "**Idiopathic** - No known cause. Many SFN cases are idiopathic.",
            "**Inflammation** - The immune system's response to injury or irritation, which can harm nerves.",
            "**Myelin** - A fatty layer that wraps some nerve fibers and helps signals travel faster.",
            "**Neuropathic Pain** - Pain from damage or problems in the nervous system, not from direct injury to tissue.",
            "**Paresthesia** - Abnormal sensations like tingling, pins and needles, or numbness.",
            "**Peripheral Nervous System** - All nerves outside the brain and spinal cord.",
            "**Polyneuropathy** - A condition that affects many nerves across the body.",
            "**Proximal** - Areas of the body closer to the center, like the torso.",
          ],
        },
      ],
    },

    {
      id: "tests-procedures",
      title: "Tests & Procedures",
      content: [
        {
          type: "paragraph",
          text: `Knowing the tests used to diagnose small fiber neuropathy can help you prepare and understand the results.`,
        },
        {
          type: "list",
          ordered: false,
            items: [
            "**Autonomic Function Testing** - Tests that measure how the autonomic nervous system controls heart rate, blood pressure, and other functions.",
            "**Corneal Confocal Microscopy** - A special eye test that can find small nerve fiber damage in the cornea.",
            "**Epidermal Nerve Fiber Density** - Counting small nerve fibers in a skin biopsy to help diagnose SFN.",
            "**Glucose Tolerance Test** - A blood test that checks how the body processes sugar and can find diabetes.",
            "**HbA1c** - A blood test that shows average blood sugar over the past two to three months.",
            "**Quantitative Sensory Testing** - Tests that measure how well you feel vibration, temperature, and pressure.",
            "**Skin Biopsy** - A small skin sample used to count nerve fibers and diagnose SFN.",
            "**Sudomotor Testing** - Tests that check how well you sweat, which can change with small fiber damage.",
            "**Tilt Table Test** - A test that checks how your blood pressure and heart rate change when you stand or lie down.",
            "**Vitamin Level Testing** - Blood tests to check for low levels of vitamins like B12 that can cause neuropathy.",
          ],
        },
        {
          type: "paragraph",
          text: `[Learn more about diagnosing SFN](/about-sfn/diagnosis)`,
        },
      ],
    },

    {
      id: "treatments",
      title: "Treatments & Medications",
      content: [
        {
          type: "paragraph",
          text: `These treatments and therapies are commonly used to manage SFN symptoms.`,
        },
        {
          type: "list",
          ordered: false,
            items: [
            "**Anticonvulsants** - Drugs first used for seizures that can also help nerve pain, such as gabapentin and pregabalin.",
            "**Antidepressants** - Some antidepressants like duloxetine and nortriptyline can reduce nerve pain.",
            "**Compounding Pharmacy** - A pharmacy that makes custom medicines, sometimes needed for treatments like low dose naltrexone.",
            "**Duloxetine (Cymbalta)** - An antidepressant also used to treat diabetic nerve pain.",
            "**Gabapentin** - An anticonvulsant often used as a first treatment for nerve pain.",
            "**IRAK Inhibitors** - Drugs that affect immune signaling and inflammation.",
            "**IVIG** - Intravenous Immunoglobulin. A treatment using antibodies from donors to affect the immune system.",
            "**JAK Inhibitors (JAKi)** - Drugs that block enzymes involved in immune system inflammation.",
            "**Lidocaine** - A numbing medicine used as a cream or patch for local nerve pain.",
            "**Low Dose Naltrexone (LDN)** - A low-dose medication that may lower inflammation and pain for some people.",
            "**Multimodal Therapy** - Using several treatments together to better control pain.",
            "**Opioids** - Strong pain medicines used sometimes for severe nerve pain but with risk of addiction.",
            "**Pregabalin (Lyrica)** - An anticonvulsant similar to gabapentin used for nerve pain.",
            "**TENS Unit** - A device that uses mild electrical pulses to help reduce pain.",
            "**Topical Treatments** - Creams, gels, or patches applied to the painful skin area.",
            "**Tricyclic Antidepressants** - Older antidepressants like nortriptyline that can help nerve pain.",
          ],
        },
        {
          type: "paragraph",
          text: `[Learn more about SFN treatments](/about-sfn/treatments)`,
        },
      ],
    },

    {
      id: "symptoms",
      title: "Symptoms & Sensations",
      content: [
        {
          type: "paragraph",
          text: `These terms describe the various symptoms and sensations that people 
          with Small Fiber Neuropathy commonly experience.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "**Burning Pain** - A hot, searing sensation that is one of the most common symptoms of small fiber neuropathy.",
            "**Dysesthesia** - Unpleasant abnormal sensations that can feel like burning, aching, or electric shocks.",
            "**Electric Shock Sensations** - Sharp, shooting pains that feel like electrical jolts through the affected area.",
            "**Hyperhidrosis** - Excessive sweating that can occur when autonomic nerves are affected.",
            "**Hypoesthesia** - Reduced ability to feel normal sensations like touch or temperature.",
            "**Numbness** - Loss of feeling or sensation in affected areas, though this is less common in pure small fiber neuropathy.",
            "**Phantom Pain** - Pain that feels like it's coming from an area that has reduced sensation.",
            "**Pins and Needles** - A prickling or tingling sensation, also called paresthesia.",
            "**Restless Legs** - An uncomfortable urge to move the legs, often worse at night, sometimes associated with neuropathy.",
            "**Stabbing Pain** - Sharp, knife-like pains that come and go suddenly.",
            "**Stocking-Glove Distribution** - A pattern where symptoms present in the feet and hands.",
            "**Temperature Sensitivity** - Difficulty sensing hot or cold temperatures, or pain triggered by temperature changes.",
            "**Tingling** - A light prickling sensation, often described as feeling like carbonation on the skin.",
            "**Warm/Cool Sensations** - Abnormal feelings of warmth or coolness in affected areas without actual temperature changes.",
          ],
        },
        {
          type: "paragraph",
          text: `[Learn more about SFN symptoms](/about-sfn/symptoms)`,
        },
      ],
    },
  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 22, 2025",
    references: [
      {
        title: "The Influence of Dietary Supplementations on Neuropathic Pain - National Center for Biotechnology Information",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9410423/",
      },
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "Alpha-Lipoic Acid - National Center for Biotechnology Information",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK564301/",
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