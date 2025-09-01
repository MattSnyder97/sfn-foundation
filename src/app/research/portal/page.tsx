export const dynamic = "force-dynamic";
import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import PortalClient from './PortalClient';

export default function ResearchPortalPage() {
  return (
    <>
      <Header />
      <div className="bg-offWhite min-h-screen flex flex-col">
        <PortalClient />
        <Footer />
      </div>
    </>
  );
}
