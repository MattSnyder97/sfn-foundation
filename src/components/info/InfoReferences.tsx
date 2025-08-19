// src/components/info/InfoReferences.tsx
import React from "react";

export interface Reference {
  title: string;
  link?: string;
}

interface InfoReferencesProps {
  references: Reference[];
}

export default function InfoReferences({ references }: InfoReferencesProps) {
  return (
      <section className="mt-16 pt-8 border-t border-offWhite">
      <h2 className="text-md font-semibold text-dark/80 mb-6">Page References</h2>
      <ol className="space-y-3 pl-8">
      {references.map((ref, index) => (
        <li key={index} className="text-sm text-gray leading-relaxed">
          <span className="text-primary font-medium">{index + 1}. </span>
          {ref.link ? (
            <a
              href={ref.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {ref.title}
            </a>
          ) : (
            ref.title
          )}
        </li>
      ))}
    </ol>
  </section>
  );
}