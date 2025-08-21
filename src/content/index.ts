import { aboutContent } from "./info-pages/about/about";
import { causesContent } from "./info-pages/about/causes";
import { diagnosisContent } from "./info-pages/about/diagnosis";
import { symptomsContent } from "./info-pages/about/symptoms";
import { treatmentsContent } from "./info-pages/about/treatments";

export const allContent = [
  aboutContent,
  causesContent,
  diagnosisContent,
  symptomsContent,
  treatmentsContent,
];

export const getContentBySlug = (slug: string) => {
  return allContent.find(content => content.slug === slug);
};