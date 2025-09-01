import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center font-semibold rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 default-shadow cursor-pointer",
  {
    variants: {
      variant: {
        primary: "border-2 border-primary bg-primary text-white hover:bg-offWhite hover:border-primary hover:text-primary",
        secondary: "bg-offWhite border-2 border-offWhite text-primary hover:bg-primary hover:text-offWhite",
        outline: "bg-primary border-2 border-offWhite text-offWhite hover:bg-offWhite hover:text-primary",
        outlinePrimary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={clsx(buttonVariants({ variant, size }), className)} {...props} />
  );
}
