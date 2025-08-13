import Image from "next/image";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />

      /* IS THIS FORMAT CORRECT? */
      <main>
        <Hero />
      </main>
    </>
  );
}

