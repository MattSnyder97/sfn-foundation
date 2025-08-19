import Image from "next/image";

interface InfoImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function InfoImage({ src, alt, caption }: InfoImageProps) {
  return (
    <figure className="my-10">
      <div className="relative w-full h-80 rounded-[4px] overflow-hidden shadow-md/5">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
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
