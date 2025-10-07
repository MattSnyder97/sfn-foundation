export const causesContent = {
  slug: "/about-sfn/causes",
  tags: ["causes", "about"],
  hero: {
    title: "Causes",
  },

  tableOfContents: [
    { id: "overview", title: "Overview" },
    { id: "diabetes", title: "Diabetes and Blood Sugar" },
    { id: "autoimmune", title: "Autoimmune Conditions" },
    { id: "infections", title: "Infections" },
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
          text: `In about 53% of cases, doctors can't find a specific cause even after thorough testing. This is called "idiopathic" small fiber neuropathy. Even when the cause isn't clear, treatments can still help manage your symptoms. Finding the cause is important because treating it can sometimes slow or stop more nerve damage. If your small fiber neuropathy has been labeled "idiopathic", keep asking your doctor for tests. Diabetes is the most common identifiable cause, but there are other possibilities your doctor will check for.`,
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
          means even pre-diabetes or insulin resistance can start damaging your nerves. Diabetes comes in several forms that can damage nerves, including type 1 and type 2 diabetes, pre-diabetes and insulin resistance, metabolic syndrome, and slower-developing autoimmune diabetes (LADA). Managing blood sugar can help protect nerves.`,
        },
        {
          type: "paragraph",
          text: `Diabetes comes in several forms that can damage nerves, including type 1 and type 2 diabetes, pre-diabetes and insulin resistance, metabolic syndrome, and slower-developing autoimmune diabetes (LADA). Managing blood sugar can help protect nerves.`,
        },
        {
          type: "image",
          src: "/images/common/diabetes.png",
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
          healthy parts of your body, including your nerves. These conditions can cause inflammation that damages the small nerve 
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
      id: "infections",
      title: "Infections",
      content: [
        {
          type: "paragraph",
          text: `Some infections can lead to small fiber neuropathy, either during the active infection or as a long-term effect after recovery. The infection may directly damage nerve fibers or trigger immune responses that affect the nerves.`,
        },
        {
          type: "paragraph",
          text: `COVID-19 (SARS-CoV-2) has emerged as a cause of small fiber neuropathy, particularly in people with long COVID. Studies show that some people develop neuropathy symptoms like burning pain, numbness, and tingling weeks to months after their initial COVID infection. Research suggests COVID can damage small nerve fibers and trigger immune responses that affect the nervous system. Since COVID is a recent disease, more research is needed to fully understand how common this complication is and what the long-term effects might be.`,
        },
        {
          type: "paragraph",
          text: `There have been rare reports of small fiber neuropathy after COVID-19 vaccination. These cases appear to be very uncommon and may involve immune responses to the vaccine. Because vaccines are newer than the disease itself, ongoing research continues to study any potential connections. If you developed nerve symptoms after vaccination, your doctor can help determine the cause and appropriate treatment. The benefits of vaccination in preventing severe COVID-19 remain clear for most people.`,
        },
        {
          type: "paragraph",
          text: `Other infections that can cause small fiber neuropathy include HIV/AIDS, hepatitis C, Lyme disease, and shingles. If you developed neuropathy symptoms during or after an infection, tell your doctor so they can look for possible connections.`,
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
          text: `Some medications and toxic substances can damage small nerve fibers. The good news is that stopping the harmful substance often prevents more damage and sometimes allows nerves to heal. Don't stop taking any prescribed medications without talking to your doctor first. They can help you weigh the benefits and risks and may be able to switch you to a different medicine if needed.`,
        },
        {
          type: "paragraph",
          text: `Certain medicines and toxins can harm small nerves, such as some chemotherapy drugs, older HIV medications, certain antibiotics, some heart or seizure drugs, heavy alcohol use, heavy metals, and industrial chemicals. Stopping or switching the offending agent often helps.`,
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
          but they're important to recognize because they can affect family members. Genetic neuropathies often start earlier in life and may progress differently than other types. If you have family members with similar symptoms, tell your doctor as this information can help with diagnosis. [Learn more about getting a SFN diagnosis](/about-sfn/diagnosis).`,
        },
        {
          type: "paragraph",
          text: `Rare genetic causes include Fabry disease, hereditary sensory and autonomic neuropathies (HSAN), mutations in ion channel genes like SCN9A, familial amyloidosis, and other inherited metabolic conditions. Genetic testing may be recommended when family history suggests a hereditary cause.`,
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
    author: "the SFN Foundation",
    lastUpdated: "October 7, 2025",
    references: [
      {
        title: "Small fiber neuropathy: A burning problem - Cleveland Clinic Journal of Medicine",
        link: "https://www.ccjm.org/content/76/5/297",
      },
      {
        title: "Small Fiber Neuropathy: What It Is, Symptoms & Treatment - Cleveland Clinic",
        link: "https://my.clevelandclinic.org/health/diseases/17479-small-fiber-neuropathy",
      },
      {
        title: "Case-Control Study of Individuals With Small Fiber Neuropathy After COVID-19 - Neurology",
        link: "https://www.neurology.org/doi/10.1212/NXI.0000000000200244",
      },
      {
        title: "Small fiber neuropathy associated with SARS-CoV-2 infection - PMC",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8661991/",
      },
      {
        title: "Post-COVID-19 vaccine small-fiber neuropathy and tinnitus treated with plasma exchange - PMC",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9537871/",
      },
    ],
  },
};