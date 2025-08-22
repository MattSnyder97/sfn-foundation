import Image from "next/image";

interface InfoImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function InfoImage({ src, alt, caption }: InfoImageProps) {
  return (
    <figure className="my-8  w-full lg:w-2/3">
      <div className="relative rounded-[8px] overflow-hidden shadow-md/5">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="object-contain w-full h-auto filter hue-rotate-[8deg]"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-left text-sm text-gray/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
