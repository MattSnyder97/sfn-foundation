import Header from "@/components/core/Header";
import Hero from "@/components/content/home/Hero";
import { FeaturedCards } from "@/components/content/home/FeaturedCards";
import { PatientStory } from "@/components/content/home/PatientStory";
import { FAQs } from "@/components/content/home/FAQs";
import { LatestNews } from "@/components/content/home/LatestNews";
import Footer from "@/components/core/Footer";

export default function Home() {
  return (
    <>
      <Header />

       <main className="space-y-18 pb-18"> 
        <Hero />
        <FeaturedCards />
        <FAQs />
        <PatientStory />
        <LatestNews />
      </main>

      <Footer />
    </>
  );
}