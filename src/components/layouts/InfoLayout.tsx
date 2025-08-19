// src/components/layouts/InfoLayout.tsx
import { ReactNode } from "react";

interface InfoLayoutProps {
  children: ReactNode;
  tableOfContents?: { id: string; title: string }[];
}

export default function InfoLayout({ children, tableOfContents }: InfoLayoutProps) {
  return (
    <main className="bg-offWhite">
      <div className="container-padding mx-auto py-16">
        <div className="flex gap-12 lg:gap-16">
          {/* Sidebar - On this page */}
          {tableOfContents && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-dark mb-4">On this page</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray hover:text-primary transition-colors duration-200 py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
          
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <article className="bg-white rounded-[24px] px-8 md:px-12 py-12 shadow-sm">
              {children}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}