"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Search } from "lucide-react";

import { allContent } from "@/content"; // central index

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  // --- Flatten content into searchable index ---
  const indexedData = allContent.flatMap((page: any) =>
    page.sections.map((section: any) => ({
      slug: page.slug, // fallback slug
      pageTitle: page.hero?.title,
      pageSubtitle: page.hero?.subtitle,
      sectionId: section.id,
      sectionTitle: section.title,
      text: [
        ...(section.paragraphs || []),
        ...(section.paragraphsAfterImage || []),
        ...(section.list?.items || []),
      ].join(" "),
    }))
  );

  // --- Fuse.js setup ---
  const fuse = useMemo(() => {
    return new Fuse(indexedData, {
      keys: ["pageTitle", "pageSubtitle", "sectionTitle", "text"],
      threshold: 0.35,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  }, [indexedData]);

  // --- Handle user input ---
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 1) {
      const searchResults = fuse.search(value);
      setResults(searchResults.map((r) => r.item));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-2xl"> {/* doubled width */}
      {/* Input box */}
      <div className="flex items-center gap-2 rounded-xl border border-dark/20 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-brand-primary">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full border-none bg-transparent text-sm focus:outline-none"
        />
      </div>

      {/* Results dropdown */}
      {results.length > 0 && (
        <ul className="absolute z-50 mt-4 w-full max-h-64 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          {results.map((res, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              <Link
                href={`${res.slug}#${res.sectionId}`}
                className="block px-4 py-2 text-sm hover:bg-gray-50"
              >
                <span className="font-medium">{res.sectionTitle}</span>
                <p className="text-gray-500 text-xs">{res.pageTitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* No results fallback */}
      {query.length > 1 && results.length === 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg p-3 text-sm text-gray-500">
          No results found
        </div>
      )}
    </div>
  );
}
