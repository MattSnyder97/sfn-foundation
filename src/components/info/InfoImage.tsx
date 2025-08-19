import Image from "next/image";

interface InfoImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function InfoImage({ src, alt, caption }: InfoImageProps) {
  return (
    <figure className="my-10">
      <div className="relative w-full h-80 rounded-[24px] overflow-hidden shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-gray">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
