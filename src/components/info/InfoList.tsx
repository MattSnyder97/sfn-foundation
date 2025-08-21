// src/components/info/InfoList.tsx
import React from "react";

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
        <li key={idx}>{item}</li>
      ))}
    </ListTag>
  );
}
