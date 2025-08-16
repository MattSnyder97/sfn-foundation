import Image from "next/image";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import { FeaturedCards } from "@/components/sections/FeaturedCards";
import { Testimonial } from "@/components/sections/Testimonial";
import { FAQs } from "@/components/sections/FAQs";
import { LatestNews } from "@/components/sections/LatestNews";
import Footer from "@/components/sections/Footer";

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