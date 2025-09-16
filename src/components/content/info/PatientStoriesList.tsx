import Link from 'next/link';
import Image from 'next/image';
import { allContent } from '@/content/index';
type ContentBlock = { type?: string; text?: string; src?: string };
type ContentSection = { content?: ContentBlock[] };
type AuthorObj = { name?: string; fullName?: string; age?: number | string; location?: string; city?: string };
type Meta = { lastUpdated?: string; author?: string | AuthorObj; authorName?: string; by?: string };
type Story = { slug: string; sections?: ContentSection[]; hero?: { title?: string }; meta?: Meta };

export default function PatientStoriesList() {
  // Filter stories, then sort by lastUpdated (newest first)
  const stories = allContent
    .filter((item) => item.slug.startsWith('/resources/patient-stories/') && item.slug !== '/resources/patient-stories')
    .slice() // copy before sorting
    .sort((a, b) => {
      const ta = a.meta?.lastUpdated ? new Date(a.meta?.lastUpdated).getTime() : 0;
      const tb = b.meta?.lastUpdated ? new Date(b.meta?.lastUpdated).getTime() : 0;
      const na = Number.isFinite(ta) ? ta : 0;
      const nb = Number.isFinite(tb) ? tb : 0;
      return nb - na;
    });

  const findLastImage = (story: Story) => {
    try {
      const sections = story.sections || [];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const content = section?.content || [];
        for (let j = content.length - 1; j >= 0; j--) {
          const b = content[j];
          if (b?.type === 'image' && b.src) return b.src;
        }
      }
    } catch {
      // ignore
    }
    // use story.jpg from public/images/common when no image found
    return '/images/common/story.jpg';
  };

  // helper: format date with ordinal (e.g. "September 16th, 2025")
  const formatDateWithOrdinal = (iso?: string) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (!Number.isFinite(d.getTime())) return iso;
    const day = d.getDate();
    const nth = (n: number) => {
      if (n >= 11 && n <= 13) return 'th';
      switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    return d.toLocaleString('en-US', { month: 'long' }) + ' ' + day + nth(day) + ', ' + d.getFullYear();
  };

  // helper: build author line from meta.author (string or {name, age, location})
  const getAuthorLine = (meta?: Meta) => {
    const authorRaw = meta?.author || meta?.authorName || meta?.by;
    if (!authorRaw) return '';
    let name = '';
    let age: string | number | undefined;
    let location: string | undefined;
    if (typeof authorRaw === 'string') {
      name = authorRaw;
    } else if (typeof authorRaw === 'object' && authorRaw !== null) {
      name = authorRaw.name || authorRaw.fullName || '';
      age = authorRaw.age;
      location = authorRaw.location || authorRaw.city;
    }
    if (!name) return '';
    const parts: string[] = [];
    parts.push(`Written by ${name}`);
    if (age !== undefined) parts.push(`age ${age}`);
    if (location) parts.push(location);
    return parts.join(', ');
  };
 
  if (stories.length === 0) {
    return <p>No stories have been added yet.</p>;
  }
 
  return (
    <div className="flex flex-col gap-6">
      {stories.map((story) => {
        const imgSrc = findLastImage(story);
        const dateText = story.meta?.lastUpdated || '';
        const authorLine = getAuthorLine(story.meta);
        return (
          <Link
            key={story.slug}
            href={story.slug}
            className="border-gray/20 border-1 rounded-xl p-6 bg-white block default-shadow overflow-hidden transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              <div className="flex-1 p-2 md:p-4 flex flex-col justify-center">
                <h3 className="font-semibold text-lg mb-4 text-dark">{story.hero?.title}</h3>
                {/* author line (if any) */}
                {authorLine ? <p className="text-sm text-gray mb-2">{authorLine}</p> : null}
                {/* published date */}
                <p className="text-sm text-gray">{formatDateWithOrdinal(dateText)}</p>
              </div>
 
              <div className="hidden default-shadow md:block w-48 h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                <Image src={imgSrc} alt={story.hero?.title || 'Patient story image'} width={320} height={200} className="object-cover w-full h-full rounded" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
