export const dynamic = "force-dynamic";
import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import PortalClient from './PortalClient';

export default function ResearchPortalPage() {
  return (
    <>
      <Header />
      <div className="bg-offWhite flex-1 flex flex-col">
        {/* PortalClient decides which view to render based on access (query param or localStorage) */}
        <PortalClient />
        <Footer />
      </div>
    </>
  );
}
