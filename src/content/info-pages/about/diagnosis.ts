export const diagnosisContent = {
  slug: "/about-sfn/diagnosis",
  tags: ["diagnosis", "about"],
  hero: {
    title: "Diagnosis",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "medical-history", title: "Medical History and Physical Exam" },
    { id: "diagnostic-tests", title: "Diagnostic Tests" },
    { id: "specialists", title: "Working with Specialists" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Your doctor will use several steps to find out if you have SFN. This usually includes talking about your symptoms, a physical exam, and a skin punch biopsy. The process can feel slow, but each step helps build a clearer picture of your nerves.`,
        },
        {
          type: "paragraph",
          text: `Doctors are getting better at recognizing and diagnosing SFN. New tests make it easier to confirm the diagnosis. Getting the right diagnosis is worth the wait because it lets you access treatments that may help.`,
        },
      ],
    },

    {
      id: "medical-history",
      title: "Medical History and Physical Exam",
      content: [
        {
          type: "paragraph",
          text: `Your diagnosis starts with telling your doctor about your symptoms. This conversation is important because SFN symptoms vary from person to person. Your doctor needs to know exactly what you feel and when it started.`,
        },
        {
          type: "paragraph",
          text: `During your visit, your doctor will ask detailed questions about your pain and other symptoms. They will want to know where you feel pain, what it feels like, when it happens, and what helps or makes it worse. Be as specific as you can.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "When did your symptoms start? - Try to remember if they began gradually or suddenly.",
            "Where do you feel symptoms? - Usually starting in feet and hands, sometimes spreading upward.",
            "What does the pain feel like? - Burning, stabbing, tingling, numbness, or sensitivity to touch.",
            "What makes it worse? - Heat, cold, stress, activity, or time of day.",
            "What helps? - Rest, medication, temperature changes, or other treatments you've tried.",
            "Family history - Whether anyone in your family has had similar problems.",
            "Medical conditions - Diabetes, autoimmune diseases, vitamin deficiencies, or other health problems.",
            "Medications - All prescription drugs, over-the-counter medicines, and supplements you take.",
          ],
        },
        {
          type: "paragraph",
          text: `The physical exam helps your doctor look for signs of nerve damage. 
          They'll test your reflexes, check how well you can feel light touch and 
          vibration, and look at your skin for any changes. They might also check 
          your blood pressure and heart rate.`,
        },
        {
          type: "image",
          src: "/images/common/painWoman.png",
          alt: "Doctor performing a physical exam on a patient",
          caption:
            "A thorough physical exam helps doctors assess nerve function and identify areas affected by SFN.",
        },
        {
          type: "paragraph",
          text: `Your doctor will also want to know about other health conditions that 
          can cause neuropathy. Diabetes is the most common cause, 
          but autoimmune diseases, vitamin deficiencies, and certain medications 
          can also damage small nerve fibers.`,
        },
      ],
    },

    {
      id: "diagnostic-tests",
      title: "Diagnostic Tests",
      content: [
        {
          type: "paragraph",
          text: `The most definitive test for SFN is a skin biopsy. This takes tiny skin samples to count small nerve fibers. It may sound scary, but it is a simple procedure done in the doctor's office with local numbing medicine.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Skin biopsy - Small skin samples are taken from your leg and sometimes your arm. The samples are examined under a microscope to count nerve fibers.",
            "Quantitative sensory testing (QST) - Tests how well you can feel different temperatures, vibrations, and pressure.",
            "Sudomotor testing - Checks how well your sweat glands work by measuring your body's response to mild electrical stimulation.",
            "Blood tests - Look for diabetes, vitamin deficiencies, autoimmune diseases, and other conditions that can cause neuropathy.",
            "Nerve conduction studies - While these don't detect small fiber damage, they can rule out problems with larger nerves.",
            "Autonomic function tests - Check if your automatic body functions like heart rate and blood pressure are affected.",
          ],
        },
        {
          type: "paragraph",
          text: `The skin biopsy is the gold standard for diagnosing SFN. Your doctor takes a very small piece of skin, usually from the lower leg. A lab counts the small nerve fibers and compares them to normal levels. Blood tests help find possible causes of your neuropathy. Your doctor will usually check for diabetes or prediabetes, vitamin B12, thyroid function, and signs of autoimmune disease. Treating the underlying cause can sometimes slow or improve symptoms.`,
        },
        {
          type: "image",
          src: "/images/common/blood.png",
          alt: "Blood test tubes",
          caption:
            "Getting blood tests helps identify potential underlying causes of SFN, guiding treatment options.",
        },
        {
          type: "paragraph",
          text: `Some tests might need to be repeated over time to see how your condition 
          is changing. This helps your doctor understand whether your neuropathy 
          is getting worse, staying the same, or improving with treatment.`,
        },
      ],
    },

    {
      id: "specialists",
      title: "Working with Specialists",
      content: [
        {
          type: "paragraph",
          text: `Many people with SFN work with neurologists, doctors who focus on the nervous system. Neurologists train to diagnose and treat types of neuropathy, including SFN.`,
        },
        {
          type: "paragraph",
          text: `Your family doctor may refer you to a neurologist if they suspect SFN. Some neurologists focus specifically on peripheral neuropathy. [Find a SFN specialist](/resources/specialists)`,
        },
        {
          type: "paragraph",
          text: `Depending on what might be causing your neuropathy, you might also 
          work with other specialists. If you have diabetes, an endocrinologist 
          can help manage your blood sugar. If autoimmune disease is suspected, 
          a rheumatologist might get involved.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Neurologist - Specializes in diagnosing and treating nerve disorders. They can perform nerve tests and manage neuropathy medications.",
            "Endocrinologist - Helps manage diabetes and other hormone-related conditions that can cause neuropathy.",
            "Rheumatologist - Treats autoimmune diseases that might be causing nerve damage.",
            "Pain management specialist - Focuses on different ways to control chronic pain from neuropathy.",
            "Physical therapist - Helps you stay active and teaches exercises that can reduce pain and improve function.",
          ],
        },
        {
          type: "paragraph",
          text: `When you see a specialist, bring a list of all your symptoms, medications, 
          and any test results you already have. Don't be afraid to ask questions 
          about your condition and treatment options. Good specialists want to work 
          with you as a team to manage your neuropathy.`,
        },
        {
          type: "paragraph",
          text: `Sometimes you might need to see more than one specialist to get the 
          best care. This team approach can help address all aspects of your condition, 
          from finding the cause to managing symptoms and staying as active as possible.`,
        },
      ],
    },

  ],

  meta: {
    author: "the SFN Foundation",
    lastUpdated: "August 20, 2025",
    references: [
      {
        title:
          "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "Peripheral neuropathy - Diagnosis and treatment - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/diagnosis-treatment/drc-20352061",
      },
      {
        title: "Diabetic neuropathy - Symptoms and causes - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/diabetic-neuropathy/symptoms-causes/syc-20371580",
      },
      {
        title:
          "Skin biopsy for the diagnosis of small fiber neuropathy - NIH",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9262281/",
      },
      {
        title:
          "Understanding Peripheral Neuropathy - Foundation for Peripheral Neuropathy",
        link: "https://www.foundationforpn.org/wp-content/uploads/2024/10/Patient-Brochure-Final.pdf",
      },
      {
        title: "Prediabetes - Symptoms and causes - Mayo Clinic",
        link: "https://www.mayoclinic.org/diseases-conditions/prediabetes/symptoms-causes/syc-20355278",
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