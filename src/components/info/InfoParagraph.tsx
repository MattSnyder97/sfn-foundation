import { ReactNode } from "react";

interface InfoParagraphProps {
  children: ReactNode;
}

export default function InfoParagraph({ children }: InfoParagraphProps) {
  return (
    <p className="text-md leading-relaxed text-dark mb-4">
      {children}
    </p>
  );
}
