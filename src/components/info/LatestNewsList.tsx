"use client";

import React, { useState, useEffect } from "react";
import { researchArticles } from "../../content/info-pages/research/research-articles";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function sortByDateDesc(a: { date: string }, b: { date: string }) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
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
        <div key={idx} className="border-dark rounded-lg p-4 shadow-sm bg-white">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg text-dark mb-2 block hover:text-primary hover:underline transition-colors duration-160"
          >
            {article.title}
          </a>
          <p className="mb-2 text-sm text-dark">{article.summary}</p>
          <div className="mb-2 text-xs text-gray/60">Published: {new Date(article.date).toLocaleDateString()}</div>
        </div>
      ))}
      <div className="flex gap-4 justify-center mt-4 items-center">
        {getPageButtons().map((btn, idx) =>
          btn === '...'
            ? <span key={"ellipsis-" + idx} className="px-2">...</span>
            : (
              <button
                key={btn}
                onClick={() => handlePageChange(Number(btn))}
                className={`px-2 py-1 rounded-full text-md font-semibold ${page === btn ? "text-primary" : "text-gray/60 hover:text-gray hover:underline cursor-pointer transition-all duration-160"}`}
                aria-current={page === btn ? "page" : undefined}
              >
                {Number(btn) + 1}
              </button>
            )
        )}
        {page < totalPages - 1 && (
          <Button
            variant="primary"
            className="rounded-full p-2 flex items-center justify-center"
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
