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
  data-accordion-item
  className="overflow-hidden rounded-2xl bg-white default-shadow transition-all"
  >
    {children}
  </RadixAccordion.Item>
);

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  // track recent pointer interactions to distinguish pointer vs keyboard focus
  const pointerRef = React.useRef(false);
  const clearPointer = () => window.setTimeout(() => (pointerRef.current = false), 0);

  return (
    <RadixAccordion.Header>
      <RadixAccordion.Trigger
        // Keyboard focus: open the item so Tab moves into its panel. Ignore pointer-originated focus.
        onFocus={(e: React.FocusEvent<HTMLButtonElement>) => {
          const item = (e.currentTarget as HTMLElement).closest('[data-accordion-item]') as HTMLElement | null;
          if (item?.getAttribute('data-pointer-activated') === 'true' || pointerRef.current) return;
          const btn = e.currentTarget as HTMLButtonElement;
          if (btn.getAttribute('aria-expanded') === 'false') btn.click();
        }}
        onPointerDown={(e) => {
          pointerRef.current = true;
          const item = (e.currentTarget as HTMLElement).closest('[data-accordion-item]') as HTMLElement | null;
          if (!item) return;
          const prev = item.getAttribute('data-pointer-timeout');
          if (prev) window.clearTimeout(Number(prev));
          item.setAttribute('data-pointer-activated', 'true');
          const tid = window.setTimeout(() => {
            try {
              item.removeAttribute('data-pointer-activated');
              item.removeAttribute('data-pointer-timeout');
            } catch {}
          }, 600);
          item.setAttribute('data-pointer-timeout', String(tid));
        }}
        onPointerUp={(e) => {
          clearPointer();
          const item = (e.currentTarget as HTMLElement).closest('[data-accordion-item]') as HTMLElement | null;
          if (item) {
            const panel = item.querySelector('[data-state="open"][data-radix-accordion-content], [data-radix-accordion-content]') as HTMLElement | null;
            const focusable = panel?.querySelector<HTMLElement>('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
            try { (focusable || panel)?.focus(); } catch {}
          }
          pointerRef.current = false;
          try {
            const active = document.activeElement as HTMLElement | null;
            if (active === (e.currentTarget as HTMLElement)) active.blur();
          } catch {}
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
            "h-5 w-5 text-gray transition-transform duration-300",
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
      "px-6 pb-4 text-sm text-gray leading-relaxed overflow-hidden",
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
    )}
  >
    <div className="pt-1">{children}</div>
  </RadixAccordion.Content>
);

