// src/components/info/InfoMeta.tsx
import React from "react";

export interface Reference {
  title: string;
  link?: string;
}

interface InfoMetaProps {
  lastUpdated?: string;
  author?: string;
  references?: Reference[];
}

export default function InfoMeta({ lastUpdated, author, references }: InfoMetaProps) {
  return (
    <section className="mt-16 pt-8 border-t border-offWhite">
      {/* Author + Date */}
      <div className="text-sm text-gray mb-8">
        {author && <div>Written by {author}</div>}
        {lastUpdated && <div className="mt-2">{lastUpdated}</div>}
      </div>

      {/* References (optional) */}
      {references && references.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-dark mb-4">Page References</h2>
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
        </div>
      )}
    </section>
  );
}
