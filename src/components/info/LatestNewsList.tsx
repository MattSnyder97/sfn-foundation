"use client";

import React, { useState, useEffect } from "react";
import { researchArticles } from "../../content/info-pages/research/research-articles";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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

export default function LatestNewsList() {
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const sortedArticles = [...researchArticles].sort(sortByDateDesc);
  const totalPages = Math.ceil(sortedArticles.length / pageSize);
  const startIdx = page * pageSize;
  const endIdx = startIdx + pageSize;
  const articlesToShow = sortedArticles.slice(startIdx, endIdx);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
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
    return <div className="text-gray-500">No research articles available yet.</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {articlesToShow.map((article, idx) => (
        <a
          key={idx}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-gray/20 border-1 rounded-xl p-8 default-shadow bg-white block hover:bg-primary/8 transition-colors duration-120 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <p className="mb-2 text-sm text-dark">
            <span className="font-semibold text-lg block mb-2">{article.title}</span>
            <span className="text-md text-dark">{formatDate(article.date)}</span>
            <span className="text-md mx-1 text-dark">∙</span>
            <span>{article.summary}</span>
          </p>
        </a>
      ))}
      <div className="flex gap-4 justify-center mt-4 items-center">
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
                className={`print:hidden px-2 py-1 rounded-full text-md font-semibold ${page === btn ? "text-primary" : "text-gray/60 hover:text-primary hover:underline cursor-pointer transition-all duration-160"}`}
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
