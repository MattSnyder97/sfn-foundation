// src/components/layouts/InfoLayout.tsx
"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import InfoActions from "@/components/info/InfoActions";
import RelatedPages from "@/components/info/RelatedPages";
import { allContent } from "@/content";

interface InfoLayoutProps {
  children: ReactNode;
  tableOfContents?: { id: string; title: string }[];
  title?: string; // For sharing
  showActions?: boolean; // Option to hide actions if needed
  showRelated?: boolean; // Option to show/hide related pages
  // Optional overrides - if not provided, will auto-extract from pathname
  customSlug?: string;
  customTags?: string[];
}

function getPageDataFromContent(pathname: string) {
  // Find the current page in your allContent array
  const currentPage = allContent.find(page => page.slug === pathname);
  
  return {
    slug: pathname,
    tags: currentPage?.tags || [],
    title: currentPage?.hero?.title || ''
  };
}

export default function InfoLayout({
  children,
  tableOfContents,
  title,
  showActions = true,
  showRelated = true,
  customSlug,
  customTags
}: InfoLayoutProps) {
  const pathname = usePathname();
  const pageData = getPageDataFromContent(pathname);
  
  // Use custom values if provided, otherwise use auto-extracted values
  const currentSlug = customSlug || pageData.slug;
  const currentTags = customTags || pageData.tags;
  const pageTitle = title || pageData.title;

  return (
    <main className="bg-offWhite">
      <div className="container-padding mx-auto py-16">
        <div className="flex gap-4">
          {/* Sidebar - On this page */}
          {tableOfContents && (
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky" style={{ top: "calc(var(--header-height) - 30px)" }}>
                <h3 className="text-lg font-semibold text-dark mb-4">On this page</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray hover:text-primary hover:underline transition-all duration-200 py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
         
          {/* Main Content */}
          <div className="flex-1 max-w-auto">
            <article className="bg-white rounded-[16px] px-8 md:px-12 py-12 shadow-sm/4 print-content">
              {children}
             
              {/* Print and Share Actions */}
              {showActions && <InfoActions title={pageTitle} />}
            </article>

            {/* Related Pages */}
            {showRelated && currentTags.length > 0 && (
              <RelatedPages 
                currentSlug={currentSlug} 
                currentTags={currentTags} 
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}