import Image from "next/image";

interface InfoImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function InfoImage({ src, alt, caption }: InfoImageProps) {
  return (
    <figure className="my-8 inline-block">
      <div
        className="relative rounded-[8px] overflow-hidden default-shadow"
        style={{ maxHeight: 400, display: 'inline-block' }}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="object-contain max-h-[400px] h-auto w-auto"
          style={{ maxHeight: 400, height: 'auto', width: 'auto', display: 'block' }}
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
