
import InfoPageTemplate from "@/components/content/info/InfoPageTemplate";
import { getMainPageData } from "@/content/contentLoader";
import { notFound } from 'next/navigation';

export default function Page() {

  const pageContent = getMainPageData('privacy-policy');

  if (!pageContent) {
    notFound();
    return null;
  }

  return <InfoPageTemplate content={pageContent} />;
}