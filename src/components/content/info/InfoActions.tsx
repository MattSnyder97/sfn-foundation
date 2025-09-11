// src/components/info/InfoActions.tsx
"use client";
import { Button } from "@/components/primitives/Button";
import { Printer, Share2, Check } from "lucide-react";
import { useState } from "react";

interface InfoActionsProps {
  title?: string;
  url?: string;
}

export default function InfoActions({ title = "SFN Foundation Article", url }: InfoActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleSurveyClick = () => {
    try {
      const label = "Google Form Survey";
      if (typeof window !== "undefined") {
        const w = window as Window & { gtag?: (...args: unknown[]) => void };
        if (w.gtag) {
          w.gtag('event', 'survey_click', { method: 'google_form', event_label: label });
        }
      }
    } catch {
      // swallow errors to avoid breaking navigation
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    const shareData = {
      title: title,
      url: shareUrl,
    };

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to copying URL
        copyToClipboard(shareUrl);
      }
    } else {
      // Fallback to copying URL
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy to clipboard');
    }
  };

  return (
    <section className="mt-4 pt-8">
      {/* Feedback Section */}
      <div className="mb-8 flex flex-col items-center justify-center bg-primary/5 rounded-xl py-8 px-8 border border-primary/20 default-shadow print:hidden">
        <div className="flex items-center gap-2 mb-2 justify-center text-center w-full">
          <span className="font-semibold text-2xl text-primary">Got Feedback or Ideas?</span>
        </div>
        <p className="text-center text-gray mb-4 max-w-xl">
          Share feedback, ideas, or information corrections in our quick anonymous survey to help improve the SFN Foundation website.
        </p>
        <Button
          href="https://forms.gle/p81P8LdPwcERfi4D8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leave feedback via Google Form"
          onClick={handleSurveyClick}
          variant="primary"
          size="md"
          className="font-semibold"
        >
          Google Form Survey
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:items-start sm:justify-start print:hidden">
        <div className="flex gap-4">
          <Button
            variant="outlinePrimary"
            size="sm"
            onClick={handlePrint}
          >
            <Printer size={16} />
            Print
          </Button>
          <Button
            variant="outlinePrimary"
            size="md"
            onClick={handleShare}
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Share2 size={16} />
                Share
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}