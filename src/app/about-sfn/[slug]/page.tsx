import InfoPageTemplate from '@/components/content/info/InfoPageTemplate'
import { getPageData } from '@/content/contentLoader'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// helper: try several slug formats so contentLoader finds pages whether
// content files use "causes", "/about/causes" or "/about-sfn/causes"
function resolvePageData(slug: string | undefined) {
  if (!slug) return undefined
  const candidates = [
    slug,
    `/${slug}`,
    `about/${slug}`,
    `/about/${slug}`,
    `about-sfn/${slug}`,
    `/about-sfn/${slug}`,
  ]

  for (const key of candidates) {
    const pd = getPageData(key)
    if (pd) return pd
  }
  return undefined
}

export async function generateStaticParams() {
  return [
    { slug: 'causes' },
    { slug: 'diagnosis' },
    { slug: 'symptoms' },
    { slug: 'treatments' }
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const pageData = resolvePageData(slug)
 
  if (!pageData) {
    return {
      title: 'Page Not Found'
    }
  }
 
  return {
    title: pageData.hero.title,
    description: pageData.sections[0]?.content[0]?.type === 'paragraph'
      ? pageData.sections[0].content[0].text.slice(0, 160) + '...'
      : `Learn about ${pageData.hero.title.toLowerCase()} and small fiber neuropathy.`,
    keywords: pageData.tags?.join(', ')
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const pageData = resolvePageData(slug)
 
  if (!pageData) {
    notFound()
  }
 
  return <InfoPageTemplate content={pageData} />
}