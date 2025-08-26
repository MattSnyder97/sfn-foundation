import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { researchArticles } from "@/content/info-pages/research/research-articles";


// Helper to format date as 'Month Day, Year' with ordinal
function formatDate(dateStr: string) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const parts = dateStr.trim().split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return dateStr; // fallback to raw string
  const [year, month, day] = parts;
  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  return `${months[month - 1]} ${day}${getOrdinal(day)}, ${year}`;
}

export function LatestNews() {
  // Sort and get the 3 most recent articles
  const sortedArticles = [...researchArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const newsArticles = sortedArticles.slice(0, 3).map(article => ({
    date: formatDate(article.date),
    title: article.title,
    href: article.link
  }));

  const featuredArticle = {
    variant: "style3",
    title: newsArticles[0]?.title || "Placeholder Highlighted Research Article",
    description: researchArticles[0]?.summary || "This section is currently in development. Please check back soon for updates!",
    imageSrc: "/images/common/researchGuy.png",
    href: newsArticles[0]?.href || "/research/latest"
  };

  return (
    <section id="news" className="bg-offWhite py-8">
      <div className="container-padding mx-auto">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-12">
          {/* Mobile Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Latest Research (in Development)
            </h2>
          </div>

          {/* Mobile News Articles */}
          <div className="space-y-6 text-center">
            {newsArticles.map((article, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray/70 mb-2">{article.date}</p>
                <h3 className="text-lg font-medium text-gray hover:text-primary hover:underline transition-colors">
                  <a href={article.href} target="_blank" rel="noopener">{article.title}</a>
                </h3>
              </div>
            ))}
          </div>

          {/* Mobile See More Button */}
          <div className="text-center mb-24">
            <Link href="/research">
              <Button variant="outlinePrimary" size="md">See More</Button>
            </Link>
          </div>
         
          {/* Mobile Card */}
          <div className="flex justify-center">
            <div className="w-full">
              <div className="rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl cursor-pointer bg-primary text-white">
                <img 
                  src="/images/common/researchGuy.png" 
                  alt="The Cure for SFN Has Never Been Closer"
                  className="w-full object-cover h-64"
                />
                <div className="px-8 py-6">
                  <h3 className="font-semibold text-lg text-white">{featuredArticle.title}</h3>
                  <p className="mt-2 text-sm opacity-70 text-white">{featuredArticle.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-white">
                    Learn more
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="w-3 h-3">
                      <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-start justify-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Latest Research
            </h2>

            {/* News Articles List */}
            <div className="space-y-6 mb-10">
              {newsArticles.map((article, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray/70 mb-2">{formatDate(article.date)}</p>
                  <h3 className="text-lg font-medium text-gray hover:text-primary hover:underline transition-colors">
                    <a href={article.href} target="_blank" rel="noopener">{article.title}</a>
                  </h3>
                </div>
              ))}
            </div>

            <Link href="/research">
              <Button variant="outlinePrimary" size="md">See More</Button>
            </Link>
          </div>
         
          {/* Right Card - Force style3 with inline styles as fallback */}
          <div className="flex-shrink-0 w-full max-w-sm">
            <div className="rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl cursor-pointer bg-primary text-white">
              <img 
                src="/images/common/researchGuy.png" 
                alt="The Cure for SFN Has Never Been Closer"
                className="w-full object-cover h-64"
              />
              <div className="px-8 py-6">
                <h3 className="font-semibold text-lg text-white">{featuredArticle.title}</h3>
                <p className="mt-2 text-sm opacity-70 text-white">{featuredArticle.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-white">
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="w-3 h-3">
                    <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}