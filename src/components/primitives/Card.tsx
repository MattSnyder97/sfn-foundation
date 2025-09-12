import Image from "next/image";
import clsx from "clsx";

export type CardVariant = "style1" | "style2" | "style3" | "style4" | string;

export interface CardProps {
  variant?: CardVariant;
  title: string;
  description: string;
  imageSrc?: string;
  href?: string;
}

export function Card({ variant, title, description, imageSrc, href }: CardProps) {
  const variantClasses = (() => {
    switch (variant) {
      case "style1":
        return "bg-white";
      case "style2":
        return "bg-primary text-white";
      case "style3":
        return "bg-primary text-white";
      case "style4":
        return "bg-white";
      default:
        return "bg-white";
    }
  })();

  const linkClasses = (() => {
    switch (variant) {
      case "style2":
      case "style3":
        return "text-white";
      default:
        return "text-primary";
    }
  })();

  const isStyle4 = variant === "style4";

  const cardContent = (
    <>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full object-cover"
        />
      )}
      <div className="px-8 py-6">
        <h3 className="font-semibold text-lg text-shadow-subtle">{title}</h3>
        <p className="mt-2 text-sm text-shadow-nearInvisible">{description}</p>
        <span className={clsx("mt-4 inline-flex items-center gap-2", linkClasses)}>
          Learn more 
          <Image
            src="/icons/arrowRight.svg"
            alt="arrow pointing right"
            width={13}
            height={13}
            className="w-3 h-3"
          />
        </span>
      </div>
      {isStyle4 && (
        <div className="h-1 bg-primary"></div>
      )}
    </>
  );

  const cardClasses = clsx(
    "rounded-xl default-shadow overflow-hidden transition-all duration-300 ease-out",
    "hover:-translate-y-3 hover:shadow-xl",
    "cursor-pointer",
    variantClasses
  );

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {cardContent}
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
}