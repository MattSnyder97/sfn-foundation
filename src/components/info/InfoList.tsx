// src/components/info/InfoList.tsx
import React from "react";
import ReactMarkdown from "react-markdown";

export interface InfoListProps {
  items: string[];
  ordered?: boolean; // false = bullets (default), true = numbers
}

export default function InfoList({ items, ordered = false }: InfoListProps) {
  if (!items || items.length === 0) return null;

  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag
      className={`pl-6 space-y-2 text-gray text-md leading-relaxed mb-4 ${
        ordered ? "list-decimal" : "list-disc"
      }`}
    >
      {items.map((item, idx) => (
        <li key={idx}>
          <ReactMarkdown
            components={{
              a: ({ children, href }) => {
                const isInternal = href && href.startsWith("/");
                return (
                  <a
                    href={href}
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noopener noreferrer"}
                    className="text-primary hover:text-secondary underline font-medium transition-colors duration-200 print:hidden"
                  >
                    {children}
                  </a>
                );
              },
              strong: ({ children }) => (
                <strong className="font-bold text-black">
                  {children}
                </strong>
              ),
              p: ({ children }) => <>{children}</>
            }}
          >
            {item}
          </ReactMarkdown>
        </li>
      ))}
    </ListTag>
  );
}
