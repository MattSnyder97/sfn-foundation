import { ReactNode } from "react";

interface InfoParagraphProps {
  children: ReactNode;
}

export default function InfoParagraph({ children }: InfoParagraphProps) {
  return (
    <p className="text-lg leading-relaxed text-dark mb-8">
      {children}
    </p>
  );
}
