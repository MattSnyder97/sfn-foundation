import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 shadow-lg cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-brand-primary/90",
        secondary: "bg-offWhite text-dark hover:bg-gray-100",
        outline: "border-2 border-offWhite text-offWhite hover:bg-offWhite-50",
        outlinePrimary: "border-2 border-primary text-primary hover:bg-primary-50",
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
