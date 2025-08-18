import { ReactNode } from "react";

interface InfoLayoutProps {
  title: string;
  description?: string;
  toc?: { label: string; href: string }[];
  children: ReactNode;
}

export default function InfoLayout({ title, description, toc, children }: InfoLayoutProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-padding text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          {description && <p className="mt-4 text-lg max-w-2xl mx-auto">{description}</p>}
        </div>
      </section>

      {/* Table of Contents */}
      {toc && (
        <section className="bg-offWhite py-6 border-b border-gray/20">
          <div className="container-padding flex flex-wrap gap-6 justify-center text-primary font-medium">
            {toc.map((item) => (
              <a key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="container-padding py-12 space-y-12">{children}</main>
    </div>
  );
}
