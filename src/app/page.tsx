import Image from "next/image";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import { FeaturedCards } from "@/components/sections/FeaturedCards";
import { Testimonial } from "@/components/sections/Testimonial";
import { FAQs } from "@/components/sections/FAQs";

import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedCards />
        <Testimonial />
        <FAQs />

      </main>

      <Footer />
    </>
  );
}