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
            a: ({ children, href }) => {
              const isInternal = href && href.startsWith('/');
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
          {children}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <p className="text-md leading-relaxed text-dark mb-4">
      {children}
    </p>
  );
}