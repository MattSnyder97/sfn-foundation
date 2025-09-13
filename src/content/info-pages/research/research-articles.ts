export interface ResearchArticle {
  title: string;
  summary: string;
  link: string;
  date: string;
  image?: string;
  imageAlt?: string;
}

export const researchArticles: ResearchArticle[] = [
    {
      title: "Gene Therapy Clinical Trial to Start in October for SFN Pain",
      summary: "A clinical trial using gene therapy to reduce severe pain from SFN is set to begin in October. If you are in the Boston area, you may be eligible to participate.",
      link: "https://clinicaltrials.gov/study/NCT06980948",
      date: "2025-09-05",
      image: "/images/common/injection.png",
      imageAlt: "Image showing injection into a patient's arm"
    },
    {
      title: "From Pain-Centric to Multi-Symptom Small Fiber Neuropathy",
      summary: "This study aimed to characterize the symptomatic variability of SFN and determine whether patients can be stratified into meaningful subgroups.",
      link: "https://onlinelibrary.wiley.com/doi/10.1111/ene.70321",
      date: "2025-08-25",
    image: "/images/common/chestThroatPain.jpg",
    imageAlt: "Image of Chest Throat Pain"
    },  
    {
      title: "Low Dose Naltrexone Shows Promise for SFN",
      summary: "LDN may improve symptoms in cryptogenic SFN, especially sensory and autonomic domains.",
      link: "https://www.neurology.org/doi/10.1212/WNL.0000000000206418",
      date: "2025-08-20",
    image: "/images/common/researchWoman.png",
    imageAlt: "Illustration of a woman researcher"
    },
    {
      title: "Peripheral Neuropathy in POTS: GI Symptom Links",
      summary: "Study finds small and large fiber neuropathy in Swedish POTS patients, with links to GI symptoms.",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0327549",
      date: "2025-07-03",
    image: "/images/common/sadFamilyDoctor.png",
    imageAlt: "Illustration of a concerned family doctor"
    },
    {
      title: "FDA Clears ST-503 for Neuropathic Pain Trials",
      summary: "FDA clears Sangamo’s ST-503 for Phase I/II trial in idiopathic SFN and chronic neuropathic pain.",
      link: "https://www.insideprecisionmedicine.com/topics/precision-medicine/fda-clears-sangamos-st-503-for-chronic-neuropathic-pain-clinical-trials/",
      date: "2024-12-14",
    image: "/images/common/drugs.png",
    imageAlt: "Illustration of medications"
    },
    {
      title: "Floxing: Primer On Fluoroquinolone Toxicity",
      summary: "Overview of fluoroquinolone toxicity (FQAD), its disabling and long-lasting adverse effects.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9709505/",
      date: "2024-12-01",
    image: "/images/common/sadMan.png",
    imageAlt: "Portrait of a man looking sad"
    },
    {
      title: "Low Dose Naltrexone In Rheumatology",
      summary: "LDN is used for chronic pain and autoimmune conditions, including rheumatic diseases.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10201089/",
      date: "2023-05-31",
    image: "/images/common/doctorMan.png",
    imageAlt: "Portrait of a male doctor"
    },
];
