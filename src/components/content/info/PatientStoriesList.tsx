import Link from 'next/link';
import Image from 'next/image';
import { allContent } from '@/content/index';
type ContentBlock = { type?: string; text?: string; src?: string };
type ContentSection = { content?: ContentBlock[] };
type Story = { slug: string; sections?: ContentSection[]; hero?: { title?: string }; meta?: { lastUpdated?: string } };

export default function PatientStoriesList() {
  // Filter stories, then sort by lastUpdated (newest first)
  const stories = allContent
    .filter((item) => item.slug.startsWith('/resources/patient-stories/') && item.slug !== '/resources/patient-stories')
    .slice() // copy before sorting
    .sort((a, b) => {
      const ta = a.meta?.lastUpdated ? new Date(a.meta.lastUpdated).getTime() : 0;
      const tb = b.meta?.lastUpdated ? new Date(b.meta.lastUpdated).getTime() : 0;
      const na = Number.isFinite(ta) ? ta : 0;
      const nb = Number.isFinite(tb) ? tb : 0;
      return nb - na;
    });

  const excerptFrom = (story: Story) => {
    try {
      const firstSection = story.sections?.[0];
        const firstBlock = firstSection?.content?.find((b) => b.type === 'paragraph');
      if (firstBlock?.text) {
        const txt = firstBlock.text.replace(/\s+/g, ' ').trim();
        return txt.length > 240 ? txt.slice(0, 200).trim() + '…' : txt;
      }
    } catch {
      // ignore
    }
    return '';
  };

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
  const getAuthorLine = (story: Story) => {
    const metaAny = (story as any).meta || {};
    const authorRaw = metaAny.author || metaAny.authorName || metaAny.by;
    if (!authorRaw) return '';
    let name = '';
    let age: string | number | undefined;
    let location: string | undefined;
    if (typeof authorRaw === 'string') {
      name = authorRaw;
    } else if (typeof authorRaw === 'object') {
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
        const publishedText = dateText ? `Published ${formatDateWithOrdinal(dateText)}` : '';
        const authorLine = getAuthorLine(story);
        return (
          <Link
            key={story.slug}
            href={story.slug}
            className="group block rounded-xl default-shadow bg-white border border-gray-200 p-6 md:p-8 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {/* desktop: content | image */}
            <div className="flex flex-col md:grid md:grid-cols-[1fr_220px] md:items-center gap-6">
              {/* text column - vertically centered */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-semibold text-lg md:text-xl mb-2 text-dark group-hover:text-primary transition-colors">{story.hero?.title}</h3>
                {authorLine ? <p className="text-sm text-gray-600 mb-1">{authorLine}</p> : null}
                <p className="text-sm text-gray-500 mb-0"><time dateTime={dateText}>{formatDateWithOrdinal(dateText)}</time></p>
              </div>
 
              {/* image column */}
              <div className="hidden md:flex w-full md:w-56 h-36 md:h-44 rounded-lg overflow-hidden bg-gray-100 shadow-sm flex-shrink-0">
                <Image src={imgSrc} alt={story.hero?.title || 'Patient story image'} width={640} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </Link>
        );
      })}
     </div>
   );
 }
