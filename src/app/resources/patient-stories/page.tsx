export const dynamic = 'force-static';
import InfoPageTemplate from '@/components/content/info/InfoPageTemplate';
import { getMainPageData } from '@/content/contentLoader';
import { notFound } from 'next/navigation';

export default function Page() {
  const pageContent = getMainPageData('resources/patient-stories');

  if (!pageContent) {
    notFound();
    return null;
  }

  return <InfoPageTemplate content={pageContent} />;
}
