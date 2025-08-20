// src/app/about/layout.tsx
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-offWhite">
      <Header />
      {children}
      <Footer />
    </div>
  );
}