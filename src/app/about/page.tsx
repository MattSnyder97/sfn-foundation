// src/app/about/page.tsx
import InfoPageTemplate from "@/components/info/InfoPageTemplate";
import { getAboutPageData } from "@/content/contentLoader";
import { notFound } from 'next/navigation';

export default function AboutPage() {
  const aboutContent = getAboutPageData('about'); // This needs to match a slug in your content
 
  if (!aboutContent) {
    notFound();
  }
 
  return <InfoPageTemplate content={aboutContent} />;
}