import Image from "next/image";

interface InfoImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function InfoImage({ src, alt, caption }: InfoImageProps) {
  return (
    <figure className="my-10 w-full lg:w-2/3">
      <div className="relative rounded-[4px] overflow-hidden shadow-md/5 aspect-[3/2]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
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