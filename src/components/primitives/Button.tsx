import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center font-semibold rounded-3xl transition-colors duration-200 focus:outline-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-6 default-shadow cursor-pointer",
  {
    variants: {
      variant: {
        primary: "border-2 border-primary bg-primary text-white hover:bg-offWhite hover:border-primary hover:bg-transparent hover:text-primary focus-visible:ring-primary focus-visible:ring-opacity-60",
        secondary: "bg-offWhite border-2 border-offWhite text-primary hover:bg-transparent hover:text-offWhite focus-visible:ring-primary focus-visible:ring-opacity-60",
        outline: "bg-transparent border-2 border-offWhite text-offWhite hover:bg-offWhite hover:text-primary focus-visible:ring-primary focus-visible:ring-opacity-60",
        outlinePrimary: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary focus-visible:ring-opacity-60",
      },
      size: {
        sm: "px-4 py-1 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { href?: undefined };
type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = clsx(buttonVariants({ variant, size }), className);
  if (href) {
    // render as an anchor when href is provided (keeps visual styling)
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={href} {...anchorProps} />
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps} />
  );
}
