import InfoPageTemplate from '@/components/content/info/InfoPageTemplate'
import { getPageData } from '@/content/contentLoader'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return [
    { slug: 'matt' },
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const pageData = getPageData(slug)
 
  if (!pageData) {
    return {
      title: 'Page Not Found'
    }
  }
  const canonical = `https://sfn-foundation.org/resources/patient-stories/${slug}`;

  return {
    title: pageData.hero.title,
    description: pageData.sections[0]?.content[0]?.type === 'paragraph'
      ? pageData.sections[0].content[0].text.slice(0, 160) + '...'
      : `Learn about ${pageData.hero.title.toLowerCase()} and small fiber neuropathy.`,
    keywords: pageData.tags?.join(', '),
    alternates: { canonical },
    openGraph: {
      title: pageData.hero.title,
      description: pageData.sections[0]?.content[0]?.type === 'paragraph'
        ? pageData.sections[0].content[0].text.slice(0, 160) + '...'
        : undefined,
      url: canonical,
    }
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const pageData = getPageData(`/resources/patient-stories/${slug}`)
 
  if (!pageData) {
    notFound()
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageData.hero.title,
    "author": { "@type": "Person", "name": pageData.meta.author },
    "datePublished": pageData.meta.lastUpdated,
    "mainEntityOfPage": `https://sfn-foundation.org${pageData.slug}`
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sfn-foundation.org/" },
      { "@type": "ListItem", "position": 2, "name": "Patient Stories", "item": "https://sfn-foundation.org/resources/patient-stories" },
      { "@type": "ListItem", "position": 3, "name": pageData.hero.title, "item": `https://sfn-foundation.org/resources/patient-stories/${slug}` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <InfoPageTemplate content={pageData} />
    </>
  )
}