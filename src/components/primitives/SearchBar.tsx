"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Search } from "lucide-react";

import { allContent } from "@/content";
import trackEvent from '@/lib/analytics';

/** Types that match your content blocks */
type Block =
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

type Section = { id: string; title: string; content: Block[] };
type Page = { slug: string; hero?: { title?: string; subtitle?: string }; sections: Section[] };

type IndexedItem = {
  pageSlug: string;
  pageTitle: string;
  pageSubtitle: string;
  sectionId: string;
  sectionTitle: string;
  sectionText: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IndexedItem[]>([]);

  // Collect all searchable text from a section (paragraphs + list items + captions)
  const collectSectionText = (section: Section) =>
    (section.content || [])
      .map((block) => {
        if (block.type === "paragraph") return block.text || "";
        if (block.type === "list") return (block.items || []).join(" ");
        if (block.type === "image") return block.caption || "";
        return "";
      })
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

  // Build the index once
  const indexedData: IndexedItem[] = useMemo(() => {
    return (allContent as Page[]).flatMap((page) =>
      (page.sections || []).map((section) => ({
        pageSlug: page.slug,
        pageTitle: page.hero?.title || "",
        pageSubtitle: page.hero?.subtitle || "",
        sectionId: section.id,
        sectionTitle: section.title,
        sectionText: collectSectionText(section),
      }))
    );
    // allContent is static; no deps needed
  }, []);

  // Fuse config: weigh body text highest, keep matches forgiving
  const fuse = useMemo(() => {
    return new Fuse(indexedData, {
      keys: [
        { name: "sectionText", weight: 0.6 },
        { name: "sectionTitle", weight: 0.25 },
        { name: "pageTitle", weight: 0.15 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
      shouldSort: true,
      includeScore: true,
      useExtendedSearch: false,
    });
  }, [indexedData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const q = value.trim();
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const hits = fuse.search(q);

    // If only 1 result → show just that.
    // If >1 → take top 3 only.
    let limited: IndexedItem[] = [];
    if (hits.length === 1) {
      limited = [hits[0].item];
    } else if (hits.length > 1) {
      limited = hits.slice(0, 3).map((r) => r.item);
    }

    setResults(limited);

    try {
      trackEvent('search', {
        query: q,
        results_count: hits.length,
        page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    } catch (err) {
      // noop
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Input (2x wide vs md) */}
      <div className="flex items-center gap-3 rounded-xl border border-dark/20 bg-white px-4 py-2 default-shadow focus-within:ring-2 focus-within:ring-primary">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search…"
          className="w-full border-none bg-transparent text-sm focus:outline-none"
          aria-label="Site search"
        />
      </div>

      {/* Results dropdown — styled like your header dropdown */}
      {query && (results.length > 0 || query.length >= 2) && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full">
          <div className="bg-white default-shadow rounded-md overflow-hidden border border-gray-200">
            {/* top primary cap to match header dropdown */}
            <div className="h-2 bg-primary rounded-t-md" />

            {results.length > 0 ? (
              <ul className="max-h-80 overflow-y-auto">
                {results.map((res, idx) => (
                  <li key={`${res.pageSlug}-${res.sectionId}-${idx}`} className="border-b border-gray-100 last:border-none">
                    <Link
                      href={`${res.pageSlug}#${res.sectionId}`}
                      className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="font-medium text-dark">{res.sectionTitle}</div>
                      <div className="text-xs text-gray-500">{res.pageTitle}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-3 text-sm text-gray-600">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}