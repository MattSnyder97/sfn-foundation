"use client";

import React, { useState, useEffect, useRef } from "react";
import { researchArticles } from "../../../content/info-pages/research/research-articles";
import { Button } from "@/components/primitives/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from 'next/image';

function sortByDateDesc(a: { date: string }, b: { date: string }) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

// Helper to format date as 'Month Day, Year' with ordinal
function formatDate(dateStr: string) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const [year, month, day] = dateStr.split("-").map(Number);
  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  return `${months[month - 1]} ${day}${getOrdinal(day)}, ${year}`;
}

// Display summaries with a controlled max-width so lines wrap predictably

export default function LatestNewsList() {
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const sortedArticles = [...researchArticles].sort(sortByDateDesc);
  const totalPages = Math.ceil(sortedArticles.length / pageSize);
  const startIdx = page * pageSize;
  const endIdx = startIdx + pageSize;
  const articlesToShow = sortedArticles.slice(startIdx, endIdx);

  // scroll the list container to top on page change instead of the whole window
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const id = window.setTimeout(() => {
      // Try to scroll the container itself first
      try {
        if (typeof el.scrollTo === "function") {
          el.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch (e) {
        // ignore and fallback to scrollIntoView
      }

      // If container scroll doesn't move it into view, ensure the page scrolls so the list top is visible
      // and account for the sticky header height (defined in CSS var --header-height).
      try {
        const headerHeight = typeof window !== 'undefined'
          ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
          : 0;

        const rect = el.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const EXTRA_PADDING = 18; // extra space above the list when scrolled into view
        const target = Math.max(0, absoluteTop - headerHeight - EXTRA_PADDING);
        window.scrollTo({ top: target, behavior: 'smooth' });
      } catch (e) {
        // fallback to scrollIntoView if something goes wrong
        try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { /* ignore */ }
      }
    }, 100);
    return () => window.clearTimeout(id);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Pagination logic
  const getPageButtons = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages).keys()];
    }
    const buttons = [];
    if (page > 1) {
      buttons.push(0);
      if (page > 2) buttons.push('...');
    }
    if (page > 0) buttons.push(page - 1);
    buttons.push(page);
    if (page < totalPages - 1) buttons.push(page + 1);
    if (page < totalPages - 2) {
      if (page < totalPages - 3) buttons.push('...');
      buttons.push(totalPages - 1);
    }
    return buttons;
  };

  if (!sortedArticles || sortedArticles.length === 0) {
    return <div className="text-gray">No research articles available yet.</div>;
  }

  return (
    <div ref={listRef} className="flex flex-col gap-8 overflow-auto">
      {articlesToShow.map((article, idx) => {
        // allow authors to accidentally include '/public' in the path; normalize to public root
        const raw = article.image || '/images/researchWoman.png';
        const imgSrc = raw.startsWith('/public/') ? raw.replace(/^\/public/, '') : raw;
        return (
          <a
            key={idx}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-gray/20 border-1 rounded-xl p-8 bg-white block default-shadow overflow-hidden transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="flex flex-col md:flex-row items-stretch gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-dark">{article.title}</h3>
                <p className="text-md text-gray">
                  <span className="text-sm text-gray mr-2">{formatDate(article.date)}</span>
                  <span className="text-md">
                    {/* Use static classes so Tailwind can generate these rules; responsive: tighter on small screens */}
                    <span className="inline-block max-w-[45ch] md:max-w-[60ch] break-words whitespace-normal">{article.summary}</span>
                  </span>
                </p>
                  <div className="mt-2 md:hidden">
                    <span className="text-primary font-semibold text-sm">Read More</span>
                  </div>
              </div>

              <div className="hidden md:block w-48 h-32 flex-shrink-0 rounded overflow-hidden bg-gray-100 default-shadow">
                <Image src={imgSrc} alt={article.imageAlt || article.title} width={320} height={200} className="object-cover w-full h-full" />
              </div>
            </div>
          </a>
        );
      })}
      <div className="flex gap-4 justify-center items-center print:hidden">
        {page > 0 && (
          <Button
            variant="primary"
            size="sm"
            className="rounded-full p-2 flex items-center justify-center"
            onClick={() => handlePageChange(page - 1)}
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </Button>
        )}
        {getPageButtons().map((btn, idx) =>
          btn === '...'
            ? <span key={"ellipsis-" + idx} className="px-2">...</span>
            : (
              <button
                key={btn}
                onClick={() => handlePageChange(Number(btn))}
                className={`print:hidden px-2 py-1 rounded-full text-md font-semibold ${page === btn ? "text-primary text-lg" : "text-gray hover:text-primary text-sm hover:underline cursor-pointer transition-all duration-160"}`}
                aria-current={page === btn ? "page" : undefined}
              >
                {Number(btn) + 1}
              </button>
            )
        )}
        {page < totalPages - 1 && (
          <Button
            variant="primary"
            size="sm"
            className="print:hidden rounded-full p-2 flex items-center justify-center"
            onClick={() => handlePageChange(page + 1)}
            aria-label="Next page"
          >
            <FaArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}
