import Image from "next/image";
import { Button } from "@/components/primitives/Button";
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
  // Get research articles sorted newest-first
  const sorted = [...researchArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestTwo = sorted.slice(0, 2);

  // Highlighted mutual-aid entry (Beth Kris) — link to the mutual aid page anchor
  const highlighted = {
    title: "Support Beth Kris",
    description: "Beth became disabled after taking four antibiotic pills and now faces thousands in costs for basic accessibility equipment. Your support can help her regain independence during this difficult time.",
    href: "/resources/mutual-aid#beth-kris",
    image: "/images/patient-stories/bethKris2.png",
  };

  return (
    <section id="news" className="bg-offWhite">
      <div className="container-padding mx-auto">
        <div className="bg-white rounded-2xl default-shadow p-6 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-3xl text-center md:text-left font-bold text-primary">Latest News</h2>
          </div>

          {/* Highlighted item */}
          <div className="mb-8">
            <a href={highlighted.href} className="block rounded-xl p-8 border-gray/20 border-1 bg-white emphasis-shadow hover:bg-primary/8 transition-colors duration-120">
              <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div className="flex-1">
                  <span className="inline-block text-sm font-semibold text-dark bg-tertiary/24 px-3 py-1 rounded-full mb-3">Community Outreach</span>
                  <h3 className="font-semibold text-2xl text-dark mb-2">{highlighted.title}</h3>
                  <p className="text-md text-gray md:max-w-[90ch]">{highlighted.description}</p>
                    <div className="mt-2 md:hidden">
                      <span className="text-primary font-semibold text-sm inline-flex items-center">
                        Read More
                      </span>
                    </div>
                </div>
                <div className="hidden md:block w-64 h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 default-shadow">
                  <Image src={highlighted.image} alt={highlighted.title} width={320} height={200} className="object-cover w-full h-full" />
                </div>
              </div>
            </a>
          </div>

          {/* Latest two research articles as long clickable rows */}
          <div className="space-y-8">
            {latestTwo.map((a, idx) => {
              // normalize image paths like other lists in the repo
              const raw = a.image || '/images/common/researchGuy.png';
              const imgSrc = raw.startsWith('/public/') ? raw.replace(/^\/public/, '') : raw;
              return (
                <a key={idx} href={a.link} target="_blank" rel="noopener noreferrer" className="block rounded-xl p-8 border-gray/20 border-1 bg-white default-shadow hover:bg-primary/8 transition-colors duration-120">
                  <div className="flex flex-col md:flex-row items-stretch gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-dark mb-2">{a.title}</h4>
                      <p className="text-md text-gray md:max-w-[70ch]">
                        <span className="text-sm text-gray mr-2">{formatDate(a.date)}</span>
                        <span>{a.summary}</span>
                      </p>
                        <div className="mt-2 md:hidden">
                          <span className="text-primary font-semibold text-sm inline-flex items-center">
                            Read More
                          </span>
                        </div>
                    </div>
                    <div className="hidden md:block w-48 h-32 flex-shrink-0 rounded overflow-hidden bg-gray-100 default-shadow">
                      <Image src={imgSrc} alt={a.title} width={320} height={200} className="object-cover w-full h-full" />
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="mt-6 flex justify-center md:justify-start">
              <Button href="/research" variant="outlinePrimary" size="md">
                See All News
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}