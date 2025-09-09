export interface ResearchArticle {
  title: string;
  summary: string;
  link: string;
  date: string;
  image?: string;
}

export const researchArticles: ResearchArticle[] = [
      {
      title: "From Pain-Centric to Multi-Symptom Small Fiber Neuropathy",
      summary: "This study aimed to characterize the symptomatic variability of SFN and determine whether patients can be stratified into clinically meaningful subgroups.",
      link: "https://onlinelibrary.wiley.com/doi/10.1111/ene.70321",
      date: "2025-08-25",
      image: "/public/images/common/chestThroatPain.jpg"
    },  
    {
      title: "Low Dose Naltrexone Shows Promise for SFN",
      summary: "LDN may improve symptoms in cryptogenic SFN, especially sensory and autonomic domains.",
      link: "https://www.neurology.org/doi/10.1212/WNL.0000000000206418",
      date: "2025-08-20",
      image: "/public/images/common/researchWoman.png"
    },
    {
      title: "Peripheral Neuropathy in POTS: GI Symptom Links",
      summary: "Study finds small and large fiber neuropathy in Swedish POTS patients, with links to GI symptoms.",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0327549",
      date: "2025-07-03",
      image: "/public/images/common/sadFamilyDoctor.png"
    },
    {
      title: "FDA Clears ST-503 for Neuropathic Pain Trials",
      summary: "FDA clears Sangamo’s ST-503 for Phase I/II trial in idiopathic SFN and chronic neuropathic pain.",
      link: "https://www.insideprecisionmedicine.com/topics/precision-medicine/fda-clears-sangamos-st-503-for-chronic-neuropathic-pain-clinical-trials/",
      date: "2024-12-14",
      image: "/public/images/common/drugs.png"
    },
    {
      title: "Floxing: Primer On Fluoroquinolone Toxicity",
      summary: "Overview of fluoroquinolone toxicity (FQAD), its disabling and long-lasting adverse effects.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9709505/",
      date: "2024-12-01",
      image: "/public/images/common/sadMan.png"
    },
    {
      title: "Low Dose Naltrexone In Rheumatology",
      summary: "LDN is used for chronic pain and autoimmune conditions, including rheumatic diseases.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10201089/",
      date: "2023-05-31",
      image: "/public/images/common/doctorMan.png"
    },
];
