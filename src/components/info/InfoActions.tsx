// src/components/info/InfoActions.tsx
"use client";
import { Button } from "@/components/ui/Button";
import { Printer, Share2, Check } from "lucide-react";
import { useState } from "react";

interface InfoActionsProps {
  title?: string;
  url?: string;
}

export default function InfoActions({ title = "SFN Foundation Article", url }: InfoActionsProps) {
  const [copied, setCopied] = useState(false);

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
      } catch (err) {
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
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <section className="mt-8 pt-8">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:items-start sm:justify-start print:hidden">
       
        <div className="flex gap-4">
          <Button
            variant="outlinePrimary"
            size="md"
            onClick={handlePrint}
          >
            <Printer size={18} />
            Print
          </Button>
         
          <Button
            variant="outlinePrimary"
            size="md"
            onClick={handleShare}
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied!
              </>
            ) : (
              <>
                <Share2 size={18} />
                Share
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}