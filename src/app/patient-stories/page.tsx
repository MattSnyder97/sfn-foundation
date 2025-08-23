import Link from 'next/link';
import { allContent } from '@/content/index';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function PatientStoriesPage() {
  // Filter for patient stories
  const stories = allContent.filter(
    (item) => item.slug.startsWith('/patient-stories/')
  );

  return (
    <>
      <Header />
      <section className="container-padding mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">Patient Stories</h1>
        <p className="mb-8 text-lg text-gray-700 max-w-2xl">
          Read real experiences from people living with Small Fiber Neuropathy. Each story is unique and offers insight, hope, and support for others on a similar journey.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.length === 0 ? (
            <p>No stories have been added yet.</p>
          ) : (
            stories.map((story) => (
              <Link key={story.slug} href={story.slug} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold text-primary mb-2">{story.hero.title}</h2>
                <p className="text-gray-600 mb-2">{story.meta?.author}</p>
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
