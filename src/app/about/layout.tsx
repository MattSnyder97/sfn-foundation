// src/app/about/layout.tsx
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

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