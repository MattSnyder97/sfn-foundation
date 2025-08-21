import { ReactNode } from "react";
import ReactMarkdown from 'react-markdown';

interface InfoParagraphProps {
  children: ReactNode;
}

export default function InfoParagraph({ children }: InfoParagraphProps) {
  // If children is a string, use ReactMarkdown to parse it
  if (typeof children === 'string') {
    return (
      <div className="text-md leading-relaxed text-dark mb-4">
        <ReactMarkdown
          components={{
            // Style links to match your design system
            a: ({ children, href }) => (
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary underline font-medium transition-colors duration-200"
              >
                {children}
              </a>
            ),
            // Style bold text
            strong: ({ children }) => (
              <strong className="font-bold text-black">
                {children}
              </strong>
            ),
            // Remove default paragraph wrapper since we handle it in the parent
            p: ({ children }) => <>{children}</>
          }}
        >
          {children}
        </ReactMarkdown>
      </div>
    );
  }

  // Fallback for non-string children (maintains backward compatibility)
  return (
    <p className="text-md leading-relaxed text-dark mb-4">
      {children}
    </p>
  );
}