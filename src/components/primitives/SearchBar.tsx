"use client";
// Fix for window.__searchAutoFocus type
declare global {
  interface Window {
    __searchAutoFocus?: boolean;
  }
}

import { useState, useMemo, useRef, useEffect } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Search, X } from "lucide-react";

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
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus support (parent can pass autoFocus prop)
  useEffect(() => {
    if (typeof window !== "undefined" && (window.__searchAutoFocus || false)) {
      inputRef.current?.focus();
      window.__searchAutoFocus = false;
    }
  }, []);

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

    // Deprioritize certain pages/folders.
    // Exact-page deprioritizations (parents only): '/resources' and '/about'
    const deprioritizedExact = ['/resources', '/about'];
    // Prefix matches (entire folder and its children)
    const deprioritizedPrefix = ['/patient-stories', '/disclaimer', '/accessibility', '/terms-of-use', '/privacy-policy'];

    const isDeprioritized = (slug: string) =>
      deprioritizedExact.includes(slug) || deprioritizedPrefix.some((p) => slug.startsWith(p));

    const preferred = hits.filter((r) => !isDeprioritized(r.item.pageSlug));
    const deprioritized = hits.filter((r) => isDeprioritized(r.item.pageSlug));

    let limited: IndexedItem[] = [];
    if (preferred.length === 1) {
      limited = [preferred[0].item];
    } else if (preferred.length > 1) {
      limited = preferred.slice(0, 3).map((r) => r.item);
    } else if (deprioritized.length > 0) {
      // Only show deprioritized if no preferred results
      limited = deprioritized.slice(0, 3).map((r) => r.item);
    }

    setResults(limited);

    try {
      trackEvent('search', {
        query: q,
        results_count: hits.length,
        page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    } catch {
      // noop
    }
  };

  return (
    <div className="relative w-full max-w-2xl h-full">
      {/* Input (fills vertical space on desktop, 30% taller on mobile) */}
      <div
        className="flex items-center gap-3 rounded-xl border border-dark/20 bg-white px-4 py-2 default-shadow h-full"
        style={{ minHeight: '3.5rem' }}
      >
        <Search className="h-4 w-4 text-gray" />
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search…"
            className="w-full h-full border-none bg-transparent text-sm focus:outline-none pr-12 md:pr-4"
            aria-label="Site search"
            style={{ fontSize: '1.1rem' }}
          />

          {/* absolutely positioned mobile-only clear button inside input; only visible when query has text */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setResults([]);
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
              title="Clear search"
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray" />
            </button>
          )}
        </div>
      </div>

      {/* Results dropdown — improved appearance and distinctive hover */}
      {query && (results.length > 0 || query.length >= 2) && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full">
          {/* allow focus rings to be visible outside rounded container */}
          <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-visible">
            {/* top primary cap to match header dropdown */}
            <div className="h-2 bg-primary rounded-t-xl" />

            {results.length > 0 ? (
              <ul className="max-h-80 overflow-y-auto divide-y divide-primary/12">
                {results.map((res, idx) => (
                  <li key={`${res.pageSlug}-${res.sectionId}-${idx}`} className="last:border-none">
                    <Link
                      href={`${res.pageSlug}#${res.sectionId}`}
                      // keep link focusable but move visible ring to inner content wrapper
                      className="group relative block px-5 py-4 text-lg transition-colors duration-150 border-primary rounded-none focus:outline-none z-20"
                      style={{ fontSize: '1.15rem' }}
                    >
                      {/* inner wrapper receives the visible focus ring; add padding and use a less-rounded corner */}
                      <div className="relative z-10 inline-block w-full rounded-sm px-1 py-1 group-focus:ring-4 group-focus:ring-primary group-focus:ring-offset-4 group-focus:ring-offset-white">
                        <div className="text-sm text-gray mb-1">
                          <span className="font-medium text-primary">&quot;{query}&quot;</span> on <span className="text-dark">{res.pageTitle} Page</span>
                        </div>

                        {/* Title with inline underline sized to the title width */}
                        <div className="mb-1">
                          <span className="relative inline-block">
                            <span className="font-semibold text-dark">{res.sectionTitle}</span>
                            <span
                              aria-hidden="true"
                              className="absolute left-0 right-0 -bottom-2 h-1 bg-primary rounded-sm z-0 opacity-0 transform scale-x-95 transition-all duration-56 group-hover:opacity-100 group-hover:scale-x-100"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-5 py-4 text-sm text-gray">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}