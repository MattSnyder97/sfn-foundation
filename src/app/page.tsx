import Image from "next/image";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import { FeaturedCards } from "@/components/common/FeaturedCards";
import { Testimonial } from "@/components/common/Testimonial";
import { FAQs } from "@/components/common/FAQs";
import { LatestNews } from "@/components/common/LatestNews";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />

       <main className="space-y-18 pb-18"> 
        <Hero />
        <FeaturedCards />
        <FAQs />
        <Testimonial />
        <LatestNews />
      </main>

      <Footer />
    </>
  );
}