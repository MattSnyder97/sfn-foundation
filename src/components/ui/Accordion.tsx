"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center px-8 py-6 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        {title}
        <ChevronDownIcon
          className={clsx(
            "h-5 w-5 text-gray-500 transition-transform duration-300",
            { "rotate-180": isOpen }
          )}
        />
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-80 p-4 border-t border-gray-200" : "max-h-0 p-0"
        )}
      >
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </div>
  );
}
