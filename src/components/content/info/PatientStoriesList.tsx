import Link from 'next/link';
import Image from 'next/image';
import { allContent } from '@/content/index';
type ContentBlock = { type?: string; text?: string; src?: string };
type ContentSection = { content?: ContentBlock[] };
type Story = { slug: string; sections?: ContentSection[]; hero?: { title?: string }; meta?: { lastUpdated?: string } };

export default function PatientStoriesList() {
  const stories = allContent.filter(
    (item) => item.slug.startsWith('/resources/patient-stories/') && item.slug !== '/resources/patient-stories'
  );

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
    return '/images/common/testimonial.png';
  };

  if (stories.length === 0) {
    return <p>No stories have been added yet.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {stories.map((story) => {
  const imgSrc = findLastImage(story);
        const dateText = story.meta?.lastUpdated || '';
        return (
          <Link
            key={story.slug}
            href={story.slug}
            className="border-gray/20 border-1 rounded-xl p-6 default-shadow bg-white block hover:bg-primary/8 transition-colors duration-120 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              <div className="flex-1 p-2 md:p-4">
                <h3 className="font-semibold text-lg mb-4 text-dark">{story.hero?.title}</h3>
                <p className="text-md text-gray-700">
                  <span className="text-sm text-gray-500 mr-2">{dateText}</span>
                  <span className="text-md">{excerptFrom(story)}</span>
                </p>
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
