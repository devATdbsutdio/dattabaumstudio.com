import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded h-12 md:h-16 px-10 text-lg transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 border group relative",
  {
    variants: {
      variant: {
        "primary-dark":
          "border-white bg-white focus-visible:ring-white hover:text-white hover:bg-black",
        "secondary-dark":
          "border-white/30 text-white focus-visible:ring-white bg-black hover:border-white",
        "tertiary-dark":
          "text-white focus-visible:ring-white h-auto md:h-auto border-none px-5",
        "primary-light":
          "border-black bg-black text-white focus-visible:ring-black hover:text-black hover:bg-white",
        "secondary-light":
          "border-black/30 focus-visible:ring-black bg-white hover:border-black",
        "tertiary-light":
          "text-black focus-visible:ring-black h-auto md:h-auto border-none px-5",
      },
    },
    defaultVariants: {
      variant: "primary-dark",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, href, ...props }, ref) => {
    const Comp = href ? "a" : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
        {variant === "tertiary-dark" && (
          <span className="absolute bottom-0 left-5 h-px w-0 bg-white transition-all group-hover:w-[calc(100%_-_40px)] group-focus:w-[calc(100%_-_40px)]" />
        )}
        {variant === "tertiary-light" && (
          <span className="absolute bottom-0 left-5 h-px w-0 bg-black transition-all group-hover:w-[calc(100%_-_40px)] group-focus:w-[calc(100%_-_40px)]" />
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
