"use client";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InfoActions from "@/components/content/info/InfoActions";
import RelatedPages from "@/components/content/info/RelatedPages";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import InfoHero from "@/components/content/info/InfoHero";
import { allContent } from "@/content";

interface InfoLayoutProps {
  children: ReactNode;
  tableOfContents?: { id: string; title: string }[];
  title?: string;
  showActions?: boolean;
  showRelated?: boolean;
  customSlug?: string;
  customTags?: string[];
}

function getPageDataFromContent(pathname: string) {
  const currentPage = allContent.find((page) => page.slug === pathname);

  return {
    slug: pathname,
    tags: currentPage?.tags || [],
    title: currentPage?.hero?.title || "",
  };
}

export default function InfoLayout({
  children,
  tableOfContents,
  title,
  showActions = true,
  showRelated = true,
  customSlug,
  customTags,
}: InfoLayoutProps) {
  const pathname = usePathname();
  const pageData = pathname ? getPageDataFromContent(pathname) : { slug: '', tags: [], title: '' };

  const currentSlug = customSlug || pageData.slug;
  const currentTags = customTags || pageData.tags;
  const pageTitle = title || pageData.title;

  const [activeId, setActiveId] = useState<string | null>(
    tableOfContents && tableOfContents.length > 0 ? tableOfContents[0].id : null
  );

  // Track scroll position with IntersectionObserver
  useEffect(() => {
    if (!tableOfContents) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -32% 0px", // triggers earlier/later depending on section height
        threshold: 0.1,
      }
    );

    tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  return (
    <>
      <Header />
      <InfoHero title={pageTitle} />
      <main className="bg-offWhite">
        <div className="container-padding mx-auto py-16">
          <div className="flex gap-4">
            {/* Sidebar */}
            {tableOfContents && (
              <aside className="hidden lg:block w-56 flex-shrink-0">
                <div
                  className="sticky"
                  style={{ top: "calc(var(--header-height) - 32px)" }}
                >
                  <h3 className="text-lg font-semibold text-dark mb-4">
                    On this page
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm py-1 transition-all duration-200 pl-4 ${
                          activeId === item.id
                            ? "border-l-4 border-primary pl-6 text-primary bg-transparent"
                            : "text-gray hover:text-primary hover:underline"
                        }`}
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
              <article className="bg-white rounded-[16px] px-8 md:px-12 py-12 default-shadow print-content">
                {children}

                {showActions && <InfoActions title={pageTitle} />}
              </article>

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
      <Footer />
    </>
  );
}
