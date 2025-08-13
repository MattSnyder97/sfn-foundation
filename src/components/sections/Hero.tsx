import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-left text-left text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroBackground.jpg"
          alt="small fiber neuropathy"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Giving Hope
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Our foundation exists to speed up finding the cure for small fiber neuropathy and provide you the support you need along the way.
        </p>
      </div>
    </section>
  );
}
