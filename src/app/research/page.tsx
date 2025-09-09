
import InfoPageTemplate from "@/components/content/info/InfoPageTemplate";
import { getMainPageData } from "@/content/contentLoader";
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const canonical = 'https://sfn-foundation.org/research';
  return {
    title: 'Research',
    description: 'Research news, studies, and resources related to small fiber neuropathy.',
    alternates: { canonical },
    openGraph: { url: canonical }
  }
}

export default function Page() {

  const pageContent = getMainPageData('research');

  if (!pageContent) {
    notFound();
    return null;
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sfn-foundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Research", "item": "https://sfn-foundation.org/research" }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <InfoPageTemplate content={pageContent} />
    </>
  )
}