// src/app/about/[slug]/page.tsx
import InfoPageTemplate from '@/components/info/InfoPageTemplate'
import { getAboutPageData } from '@/content/contentLoader'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return [
    { slug: 'caregiver-tips' },
    { slug: 'specialists' },
    { slug: 'newly-diagnosed' },
    { slug: 'dictionary' },
    { slug: 'supplements' }
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const pageData = getAboutPageData(slug)
 
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

export default async function AboutPage({ params }: PageProps) {
  const { slug } = await params
  const pageData = getAboutPageData(slug)
 
  if (!pageData) {
    notFound()
  }
 
  return <InfoPageTemplate content={pageData} />
}