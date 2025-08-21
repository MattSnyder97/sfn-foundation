import { aboutContent } from "./info-pages/about/about";
import { causesContent } from "./info-pages/about/causes";
import { diagnosisContent } from "./info-pages/about/diagnosis";
import { symptomsContent } from "./info-pages/about/symptoms";
import { treatmentsContent } from "./info-pages/about/treatments";

import { specialistsContent } from "./info-pages/resources/specialists";

export const allContent = [
  ...[aboutContent],
  ...[causesContent],
  ...[diagnosisContent],
  ...[symptomsContent],
  ...[treatmentsContent],
  ...[specialistsContent],
];
