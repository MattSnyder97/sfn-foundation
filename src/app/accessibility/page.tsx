
import InfoPageTemplate from "@/components/info/InfoPageTemplate";
import { getMainPageData } from "@/content/contentLoader";
import { notFound } from 'next/navigation';

export default function Page() {

  const pageContent = getMainPageData('accessibility');

  if (!pageContent) {
    notFound();
    return null;
  }

  return <InfoPageTemplate content={pageContent} />;
}