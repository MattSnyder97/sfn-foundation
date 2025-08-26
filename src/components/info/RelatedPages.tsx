// src/components/info/RelatedPages.tsx
import Link from "next/link";
import { allContent } from "@/content";
import { Button } from "@/components/ui/Button";

interface RelatedPagesProps {
  currentSlug: string;
  currentTags?: string[];
}

export default function RelatedPages({ currentSlug, currentTags = [] }: RelatedPagesProps) {
  // Simple tag overlap scoring
  const related = allContent
    .filter((page) => page.slug !== currentSlug)
    .map((page) => {
      const overlap = page.tags?.filter((t: string) => currentTags.includes(t)) || [];
      return { ...page, score: overlap.length };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-4 border-gray-200 pt-8 print:hidden">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
        <h3 className="text-sm text-gray/80 sm:mb-0">Related Pages</h3>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
          {related.map((page) => (
            <Link key={page.slug} href={page.slug}>
              <Button variant="outlinePrimary" size="sm" className="w-full text-center sm:w-auto">
                {page.hero?.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
