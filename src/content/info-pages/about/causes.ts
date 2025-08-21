export const causesContent = {
  slug: "/about/causes",
  tags: ["neuropathy", "diabetes", "autoimmune", "causes", "genetics"],
  hero: {
    title: "Causes",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "diabetes", title: "Diabetes and Blood Sugar" },
    { id: "autoimmune", title: "Autoimmune Conditions" },
    { id: "other-medical", title: "Other Medical Conditions" },
    { id: "medications", title: "Medications and Toxins" },
    { id: "genetic", title: "Genetic Factors" },
  ],

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "paragraph",
          text: `Understanding what causes Small Fiber Neuropathy can help you and your doctor 
          create the best treatment plan. Many different things can damage the small 
          nerve fibers in your body. Sometimes it's one clear cause, and sometimes 
          it's a combination of factors.`,
        },
        {
          type: "paragraph",
          text: `In about 53% of cases, doctors can't find a specific cause 
          even after thorough testing. This is called "idiopathic" small fiber neuropathy. 
          Even when the cause isn't clear, treatments can still help 
          manage your symptoms.`,
        },
        {
          type: "paragraph",
          text: `Finding the cause is important because treating the underlying condition 
          can sometimes slow down or stop more nerve damage so keep pushing for more testing if your
          small fiber neuropathy has been labeled "idiopathic". Idiopathic ultimately means doctors have not
          found the cause...yet. Diabetes is the most common identifiable cause, but there are many other 
          possibilities your doctor will check for.`,
        },
      ],
    },

    {
      id: "diabetes",
      title: "Diabetes and Blood Sugar",
      content: [
        {
          type: "paragraph",
          text: `Diabetes is by far the most common cause of small fiber neuropathy. 
          High blood sugar levels over time can damage the small 
          nerve fibers, especially in your feet and hands. This happens 
          because excess sugar in your blood can harm the tiny blood vessels that 
          feed your nerves.`,
        },
        {
          type: "paragraph",
          text: `Impaired glucose tolerance and components of metabolic 
          syndrome are often associated with small fiber neuropathy. This 
          means even pre-diabetes or insulin resistance can start damaging your nerves.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Type 1 Diabetes - Usually develops in childhood or young adulthood when the body stops making insulin",
            "Type 2 Diabetes - More common form that usually develops in adults when the body doesn't use insulin properly",
            "Pre-diabetes - Blood sugar levels higher than normal but not yet diabetic (HbA1c 5.7-6.4%)",
            "Metabolic Syndrome - A group of conditions including high blood pressure, excess belly fat, and abnormal cholesterol levels",
            "Latent Autoimmune Diabetes in Adults (LADA) - A slow-developing form of autoimmune diabetes in adults",
          ],
        },
        {
          type: "image",
          src: "/images/diabetes.png",
          alt: "Image showing blood sugar",
          caption:
            "People with diabetes that keep their levels in check tend to see improvements in their neuropathic pain.",
        },
        {
          type: "paragraph",
          text: `The good news is that better blood sugar control can help prevent more 
          nerve damage and sometimes even improve symptoms. Work with your healthcare 
          team to keep your blood sugar in the target range they recommend for you.`,
        },
      ],
    },

    {
      id: "autoimmune",
      title: "Autoimmune Conditions",
      content: [
        {
          type: "paragraph",
          text: `Autoimmune diseases are associated with small fiber 
          neuropathy, though the exact way they cause nerve damage isn't 
          always clear. In autoimmune conditions, your immune system mistakenly attacks 
          healthy parts of your body, including your nerves.`,
        },
        {
          type: "paragraph",
          text: `These conditions can cause inflammation that damages the small nerve 
          fibers or affects the blood vessels that supply them. Some autoimmune 
          conditions are more likely to cause neuropathy than others.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Sarcoidosis - A condition causing inflammation in various organs. Up to 40% of sarcoidosis patients develop small fiber neuropathy",
            "Sjögren's Syndrome - Affects glands that make tears and saliva, but can also damage nerves",
            "Systemic Lupus Erythematosus (SLE) - Can affect many body systems including the nervous system",
            "Celiac Disease - Sensitivity to gluten that can cause nerve damage in some people",
            "Rheumatoid Arthritis - Joint inflammation that can sometimes affect nerves too",
            "Inflammatory Bowel Disease - Including Crohn's disease and ulcerative colitis",
            "Thyroid Disorders - Both overactive and underactive thyroid can affect nerves",
          ],
        },
        {
          type: "paragraph",
          text: `If you have an autoimmune condition, treating it properly may help 
          prevent more nerve damage. Some people with autoimmune-related neuropathy 
          benefit from treatments that calm down the immune system.`,
        },
      ],
    },

    {
      id: "other-medical",
      title: "Other Medical Conditions",
      content: [
        {
          type: "paragraph",
          text: `Several other medical conditions can lead to small fiber neuropathy. 
          These conditions affect your nerves in different ways, but they all can 
          result in similar symptoms of pain, burning, and numbness.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Kidney Disease - Waste products that build up when kidneys don't work well can damage nerves",
            "Liver Disease - Can cause toxic substances to build up and affect nerve function",
            "HIV/AIDS - The virus itself or some treatments can cause neuropathy",
            "Vitamin Deficiencies - Especially B12, B1, B6, and folate deficiencies",
            "Hypothyroidism - Low thyroid hormone levels can slow nerve function",
            "Fibromyalgia - Often overlaps with small fiber neuropathy",
            "Amyloidosis - Abnormal protein deposits that can affect nerves",
            "Vasculitis - Inflammation of blood vessels that can reduce blood flow to nerves",
          ],
        },
        {
          type: "paragraph",
          text: `Many of these conditions can be treated, which may help improve your 
          neuropathy symptoms. Your doctor will test for these conditions as part 
          of figuring out what's causing your nerve problems.`,
        },
      ],
    },

    {
      id: "medications",
      title: "Medications and Toxins",
      content: [
        {
          type: "paragraph",
          text: `Some medications and toxic substances can damage small nerve fibers. 
          The good news is that stopping the harmful substance often prevents more damage and sometimes allows nerves 
          to heal.`,
        },
        {
          type: "paragraph",
          text: `Don't stop taking any prescribed medications without talking to your 
          doctor first. They can help you weigh the benefits and risks and may be 
          able to switch you to a different medicine if needed.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Chemotherapy drugs - Especially platinum-based drugs, taxanes, and vincristine",
            "HIV medications - Some older HIV drugs are more likely to cause neuropathy",
            "Antibiotics - Especially fluoroquinolones ",
            "Heart medications - Some drugs used for irregular heartbeat",
            "Seizure medications - Phenytoin (Dilantin) with long-term use",
            "Alcohol - Heavy, long-term alcohol use can damage nerves",
            "Heavy metals - Lead, mercury, arsenic, and thallium exposure",
            "Industrial chemicals - Some solvents and chemicals used in manufacturing",
          ],
        },
        {
          type: "paragraph",
          text: `If your neuropathy is caused by a medication or toxin, stopping the 
          exposure is the most important step. Your doctor may also recommend 
          treatments to help your nerves recover and manage any remaining symptoms.`,
        },
      ],
    },

    {
      id: "genetic",
      title: "Genetic Factors",
      content: [
        {
          type: "paragraph",
          text: `Some people inherit genes that make them more likely to develop small 
          fiber neuropathy. These genetic forms are less common than other causes, 
          but they're important to recognize because they can affect family members.`,
        },
        {
          type: "paragraph",
          text: `Genetic neuropathies often start earlier in life and may progress 
          differently than other types. If you have family members with similar 
          symptoms, tell your doctor - this information can help with diagnosis.`,
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Fabry Disease - A rare genetic disorder affecting how the body processes certain fats",
            "Hereditary Sensory and Autonomic Neuropathies (HSAN) - A group of inherited conditions affecting sensory nerves",
            "SCN9A gene mutations - Changes in genes that control sodium channels in nerve cells",
            "Familial Amyloidosis - Inherited forms of amyloid protein deposits",
            "Tangier Disease - A rare condition affecting cholesterol metabolism",
            "Mutations in other ion channel genes - Affecting how nerve cells send signals",
          ],
        },
        {
          type: "paragraph",
          text: `If your doctor suspects a genetic cause, they may recommend genetic 
          testing. This information can help guide treatment and may be important 
          for family planning decisions. Genetic counseling can help you understand 
          what the results mean for you and your family.`,
        },
      ],
    },

  ],

  meta: {
    author: "Matt Snyder",
    lastUpdated: "August 20, 2025",
    references: [
      {
        title: "Small fiber neuropathy: A burning problem - Cleveland Clinic Journal of Medicine",
        link: "https://www.ccjm.org/content/76/5/297",
      },
      {
        title: "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
    ],
  },
};