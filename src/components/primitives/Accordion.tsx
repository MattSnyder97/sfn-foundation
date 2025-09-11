"use client";

import React from 'react';
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = RadixAccordion.Root;

export const AccordionItem = ({
  children,
  ...props
}: RadixAccordion.AccordionItemProps) => (
  <RadixAccordion.Item
    {...props}
    className="overflow-hidden rounded-2xl bg-white default-shadow transition-all"
  >
    {children}
  </RadixAccordion.Item>
);

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  // track recent pointer interactions so we can avoid treating pointer-focus as keyboard focus
  const pointerRef = React.useRef(false);

  // clear pointer flag shortly after pointerup to avoid stale state
  const clearPointer = () => {
    window.setTimeout(() => {
      pointerRef.current = false;
    }, 0);
  };

  return (
    <RadixAccordion.Header>
      <RadixAccordion.Trigger
        // When focused via Tab (keyboard), open the accordion so the next Tab moves into the panel content.
        // But ignore focus that comes from a pointer (mouse/touch) to avoid double-toggle on click.
        onFocus={(e: React.FocusEvent<HTMLButtonElement>) => {
          try {
            if (pointerRef.current) return; // skip if recent pointer interaction
            const btn = e.currentTarget as HTMLButtonElement;
            const expanded = btn.getAttribute('aria-expanded');
            if (expanded === 'false') {
              // programmatically open by clicking — Radix will update state
              btn.click();
            }
          } catch {
            // no-op on error
          }
        }}
        onMouseDown={() => { pointerRef.current = true; }}
        onTouchStart={() => { pointerRef.current = true; }}
        onMouseUp={clearPointer}
        onTouchEnd={clearPointer}
        className={cn(
          "group flex w-full items-center justify-between px-6 py-4",
          "font-medium text-lg text-gray transition-colors cursor-pointer",
          "hover:text-primary focus:outline-none"
        )}
      >
        {children}
        <ChevronDown
          strokeWidth={2.5}
          className={cn(
            "h-5 w-5 text-gray-500 transition-transform duration-300",
            // Flip + color on open
            "group-data-[state=open]:scale-y-[-1] group-data-[state=open]:text-primary",
            // Also color on hover
            "group-hover:text-primary"
          )}
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
};

export const AccordionContent = ({ children }: { children: React.ReactNode }) => (
  <RadixAccordion.Content
    className={cn(
      "px-6 pb-4 text-sm text-gray-600 leading-relaxed overflow-hidden",
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
    )}
  >
    <div className="pt-1">{children}</div>
  </RadixAccordion.Content>
);

