
import InfoPageTemplate from '@/components/content/info/InfoPageTemplate';
import { getPageData } from '@/content/contentLoader';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  return [
    { slug: ['caregiver-tips'] },
    { slug: ['dictionary'] },
    { slug: ['newly-diagnosed'] },
    { slug: ['patient-stories'] },
    { slug: ['patient-stories', 'matt'] },
    { slug: ['resources'] },
    { slug: ['specialists'] },
    { slug: ['supplements'] },
    { slug: ['support-group'] },
  ];
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const awaitedParams = await params;
  const slugPath = Array.isArray(awaitedParams.slug) ? awaitedParams.slug.join('/') : awaitedParams.slug;
  const pageData = getPageData(`/resources/${slugPath}`);

  if (!pageData) {
    return { title: 'Page Not Found' };
  }

  return {
    title: pageData.hero.title,
    description: pageData.sections[0]?.content[0]?.type === 'paragraph'
      ? pageData.sections[0].content[0].text.slice(0, 160) + '...'
      : `Learn about ${pageData.hero.title.toLowerCase()} and small fiber neuropathy.`,
    keywords: pageData.tags?.join(', ')
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const awaitedParams = await params;
  const slugPath = Array.isArray(awaitedParams.slug) ? awaitedParams.slug.join('/') : awaitedParams.slug;
  const pageData = getPageData(`/resources/${slugPath}`);

  if (!pageData) {
    notFound();
  }

  return <InfoPageTemplate content={pageData} />;
}
