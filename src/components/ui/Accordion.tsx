"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = RadixAccordion.Root;
export const AccordionItem = RadixAccordion.Item;

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => (
  <RadixAccordion.Header>
    <RadixAccordion.Trigger
      className={cn(
        "flex w-full items-center justify-between rounded-t-xl bg-white shadow-md px-6 py-4",
        "font-semibold text-lg text-gray-900 transition-colors",
        "hover:text-primary focus:outline-none",
        "radix-state-closed:rounded-xl" // fully rounded when closed
      )}
    >
      {children}
      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 radix-state-open:rotate-180" />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
);

export const AccordionContent = ({ children }: { children: React.ReactNode }) => (
  <RadixAccordion.Content
    className={cn(
      "px-6 pb-4 text-sm text-gray-600 leading-relaxed bg-white shadow-md rounded-b-xl",
      "radix-state-open:animate-slideDown radix-state-closed:animate-slideUp"
    )}
  >
    {children}
  </RadixAccordion.Content>
);
