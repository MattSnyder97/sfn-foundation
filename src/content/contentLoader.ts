// src/content/contentLoader.ts
import { allContent } from './index'

export type PageContent = any

// Helper functions to get content by category and slug
export function getAboutPageData(slug: string): PageContent | null {
  // Handle main about page
  if (slug === 'about') {
    return allContent.find((item: any) => item.slug === '/about') || null
  }
  // Handle sub-pages like causes, treatments, etc.
  const content = allContent.find((item: any) => item.slug === `/about/${slug}`)
  return content || null
}

export function getResearchPageData(slug: string): PageContent | null {
  if (slug === 'research') {
    return allContent.find((item: any) => item.slug === '/research') || null
  }
  const content = allContent.find((item: any) => item.slug === `/research/${slug}`)
  return content || null
}

export function getResourcesPageData(slug: string): PageContent | null {
  if (slug === 'resources') {
    return allContent.find((item: any) => item.slug === '/resources') || null
  }
  const content = allContent.find((item: any) => item.slug === `/resources/${slug}`)
  return content || null
}

// Generic function to get any content by full slug path
export function getContentBySlug(slug: string): PageContent | null {
  return allContent.find((item: any) => item.slug === slug) || null
}

// Function to get main section pages (like /about, /research, /resources)
export function getMainPageData(section: string): PageContent | null {
  return allContent.find((item: any) => item.slug === `/${section}`) || null
}