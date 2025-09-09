export const causesContent = {
  slug: "/about/causes",
  tags: ["causes", "about"],
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
          text: `Finding the cause is important. Treating it can sometimes slow or stop more nerve damage. If your small fiber neuropathy has been labeled "idiopathic", keep asking your doctor for tests. Idiopathic means doctors have not found the cause yet. Diabetes is the most common identifiable cause, but there are other possibilities your doctor will check for.`,
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
          healthy parts of your body, including your nerves.`,
        },
        {
          type: "paragraph",
          text: `These conditions can cause inflammation that damages the small nerve 
          fibers or affects the blood vessels that supply them. Some autoimmune 
          conditions are more likely to cause neuropathy than others.`,
        },
        {
          type: "paragraph",
          text: `Autoimmune conditions linked to SFN include sarcoidosis, Sjögren's syndrome, lupus, celiac disease, rheumatoid arthritis, inflammatory bowel disease, and some thyroid disorders. Treating the underlying immune condition can sometimes improve nerve health.`,
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
          type: "paragraph",
          text: `Other medical causes include kidney or liver disease, HIV or its treatments, vitamin deficiencies (especially B vitamins), hypothyroidism, fibromyalgia, amyloidosis, and vasculitis. Your doctor will test for these conditions when looking for causes.`,
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
          but they're important to recognize because they can affect family members.`,
        },
        {
          type: "paragraph",
          text: `Genetic neuropathies often start earlier in life and may progress 
          differently than other types. If you have family members with similar 
          symptoms, tell your doctor - this information can help with diagnosis.`,
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