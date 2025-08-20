// src/components/info/RelatedPages.tsx
import Link from "next/link";
import { allContent } from "@/content";

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
    .slice(0, 3); // top 3

  if (related.length === 0) return null;

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
      <ul className="space-y-3">
        {related.map((page) => (
          <li key={page.slug}>
            <Link
              href={page.slug}
              className="block rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 hover:bg-gray-100 hover:text-brand-primary transition"
            >
              <div className="font-medium">{page.hero?.title}</div>
              <p className="text-xs text-gray-500">{page.hero?.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
