import Link from 'next/link';
import { allContent } from '@/content/index';
import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import InfoHero from '@/components/content/info/InfoHero';

export default function PatientStoriesPage() {
  // Filter for patient stories
  const stories = allContent.filter(
    (item) => item.slug.startsWith('/patient-stories/')
  );

  return (
    <>
      <Header />
      <section>
      <InfoHero title="Patient Stories" />
        <div className="container-padding mx-auto py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.length === 0 ? (
            <p>No stories have been added yet.</p>
          ) : (
            stories.map((story) => (
              <Link key={story.slug} href={story.slug} className="block p-6 bg-white rounded-lg default-shadow hover:default-shadow transition">
                <h2 className="text-2xl font-semibold text-primary mb-2">{story.hero.title}</h2>
                <p className="text-gray-500 text-sm">Last updated: {story.meta?.lastUpdated}</p>
              </Link>
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
