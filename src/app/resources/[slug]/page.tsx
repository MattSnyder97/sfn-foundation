import InfoPageTemplate from '@/components/info/InfoPageTemplate'
import { getPageData } from '@/content/contentLoader'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return [
    { slug: 'caregiver-tips' },
    { slug: 'dictionary' },
    { slug: 'newly-diagnosed' },
    { slug: 'resources' },
    { slug: 'specialists' },
    { slug: 'supplements' },
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
  const pageData = getPageData(slug)
 
  if (!pageData) {
    notFound()
  }
 
  return <InfoPageTemplate content={pageData} />
}