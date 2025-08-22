// About Category Pages
import { aboutContent } from "./info-pages/about/about";
import { causesContent } from "./info-pages/about/causes";
import { diagnosisContent } from "./info-pages/about/diagnosis";
import { symptomsContent } from "./info-pages/about/symptoms";
import { treatmentsContent } from "./info-pages/about/treatments";

// Research Category Pages
import { researchContent } from "./info-pages/research/research";

// Resources Category Pages
import { careGiverTipsContent } from "./info-pages/resources/caregiver-tips";
import { dictionaryContent } from "./info-pages/resources/dictionary";
import { newlyDiagnosedContent } from "./info-pages/resources/newly-diagnosed";
import { resourcesContent } from "./info-pages/resources/resources";
import { specialistsContent } from "./info-pages/resources/specialists";
import { supplementsContent } from "./info-pages/resources/supplements";

export const allContent = [
  // About Category Pages
  ...[aboutContent],
  ...[causesContent],
  ...[diagnosisContent],
  ...[symptomsContent],
  ...[treatmentsContent],

  // Research Category Pages
    ...[researchContent],

  // Resources Category Pages
  ...[careGiverTipsContent],
  ...[dictionaryContent],
  ...[newlyDiagnosedContent],
  ...[resourcesContent],
  ...[specialistsContent],
  ...[supplementsContent],
];
