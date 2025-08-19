// src/components/info/InfoParagraphTitle.tsx
import { ReactNode } from "react";

interface InfoParagraphTitleProps {
  id?: string;
  children: ReactNode;
}

export default function InfoParagraphTitle({ id, children }: InfoParagraphTitleProps) {
  return (
    <h2 
      id={id}
      className="text-2xl font-bold text-primary mb-6 mt-12 first:mt-0 scroll-mt-8"
    >
      {children}
    </h2>
  );
}