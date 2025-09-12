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
        onPointerDown={(e) => {
          // unify pointer types (mouse/touch/pen)
          pointerRef.current = true;
          // mark parent item as pointer-activated to suppress keyboard-only outline
          try {
            const item = (e.currentTarget as HTMLElement).closest('[data-accordion-item]') as HTMLElement | null;
            if (item) {
              // clear any previous timeout
              const prev = item.getAttribute('data-pointer-timeout');
              if (prev) window.clearTimeout(Number(prev));
              item.setAttribute('data-pointer-activated', 'true');
              const tid = window.setTimeout(() => { try { item.removeAttribute('data-pointer-activated'); item.removeAttribute('data-pointer-timeout'); } catch(e){} }, 600);
              item.setAttribute('data-pointer-timeout', String(tid));
            }
          } catch (e) {}
        }}
        onPointerUp={(e) => {
          // clear the transient pointer flag shortly after pointer up
          clearPointer();
          try {
            // After a pointer activation, if the accordion item was opened, move focus
            // into the panel for screen reader users: focus the first focusable element
            // inside the content, or the content itself.
            const item = (e.currentTarget as HTMLElement).closest('[data-accordion-item]') as HTMLElement | null;
            if (item) {
              // find the next element with Radix content inside this item
              const content = item.querySelector('[data-state="open"][data-radix-accordion-content], [data-radix-accordion-content]') as HTMLElement | null;
              // Radix doesn't always set a stable selector, so fallback to the next sibling content region
              const fallbackContent = item.querySelector('[data-radix-accordion-content]') as HTMLElement | null;
              const panel = content || fallbackContent;
              if (panel) {
                // try to focus the first focusable element inside the panel
                const focusable = panel.querySelector<HTMLElement>(
                  'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
                );
                try {
                  (focusable || panel).focus();
                } catch (e) {}
              }
            }
          } catch (e) {}
          // clear pointer flag to allow keyboard interactions afterwards
          pointerRef.current = false;
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

