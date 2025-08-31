import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
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
