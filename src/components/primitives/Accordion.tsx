"use client";

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

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => (
  <RadixAccordion.Header>
    <RadixAccordion.Trigger
      // When focused via Tab, open the accordion so the next Tab moves into the panel content
      onFocus={(e: React.FocusEvent<HTMLButtonElement>) => {
        try {
          const btn = e.currentTarget as HTMLButtonElement;
          const expanded = btn.getAttribute('aria-expanded');
          if (expanded === 'false') {
            // click to open (Radix will handle state)
            btn.click();
          }
        } catch {
          // no-op on any error
        }
      }}
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

