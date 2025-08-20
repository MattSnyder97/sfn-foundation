import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 shadow-md/4 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-brand-primary/60",
        secondary: "bg-offWhite text-primary hover:bg-offWhite/80",
        outline: "bg-primary border-2 border-offWhite text-offWhite hover:bg-offWhite/10",
        outlinePrimary: "border-2 border-primary text-primary hover:bg-primary/12",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-4 text-base",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={clsx(buttonVariants({ variant, size }), className)} {...props} />
  );
}
