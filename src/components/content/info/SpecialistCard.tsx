import React from 'react';
import Image from 'next/image';

type Props = {
  nameTitle: string;
  location: string;
  imageSrc?: string;
  alt?: string;
};

export default function SpecialistCard({ nameTitle, location, imageSrc, alt }: Props) {
  return (
    <div className="w-full">
      <div className="rounded-xl overflow-hidden default-shadow transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl cursor-pointer bg-primary text-white">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text area */}
          <div className="w-full md:w-3/4 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{nameTitle}</h3>
            <p className="mt-2 text-sm md:text-base opacity-90">{location}</p>
          </div>

          {/* Image area: framed photo on the right for desktop, below on mobile */}
          <div className="w-full md:w-1/4 p-6 md:p-6 flex items-center justify-center md:justify-end">
            <div className="w-56 h-56 md:w-[212px] md:h-[212px] rounded-xl overflow-hidden bg-white p-2 default-shadow flex-shrink-0">
              {imageSrc ? (
                <Image src={imageSrc} alt={alt || nameTitle} width={212} height={212} className="w-full h-full object-cover rounded-md" />
              ) : (
                <div className="w-full h-full bg-white/10" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
