import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center h-12 md:h-16 px-10 text-lg transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 border group relative",
  {
    variants: {
      variant: {
        "primary-dark":
          "border-white bg-white hover:text-white hover:bg-transparent",
        "secondary-dark":
          "border-white/30 text-white bg-transparent hover:border-white",
        "tertiary-dark": "text-white h-auto md:h-auto border-none px-2 md:px-5",
        "primary-light":
          "border-black bg-black text-white hover:text-black hover:bg-transparent",
        "secondary-light": "border-black/30 bg-transparent hover:border-black",
        "tertiary-light":
          "text-black h-auto md:h-auto border-none px-2 md:px-5",
      },
    },
    defaultVariants: {
      variant: "primary-dark",
    },
  },
);

export interface ButtonProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
  download?: boolean;
  ariaLabel?: string;
}

const Button = ({
  id,
  className,
  children,
  variant,
  disabled = false,
  onClick,
  type = "button",
  href,
  target,
  rel,
  download,
  ariaLabel,
}: ButtonProps) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      id={id}
      className={cn(buttonVariants({ variant, className }))}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...(href && { href, target, rel, download })}
      {...(!href && { type })}
    >
      {children}
      {variant === "tertiary-dark" && (
        <span className="absolute bottom-0 left-2 h-0.5 w-0 bg-white transition-all group-hover:w-[calc(100%-16px)] md:left-5 md:group-hover:w-[calc(100%-40px)]" />
      )}
      {variant === "tertiary-light" && (
        <span className="absolute bottom-0 left-2 h-0.5 w-0 bg-black transition-all group-hover:w-[calc(100%-16px)] md:left-5 md:group-hover:w-[calc(100%-40px)]" />
      )}
    </Component>
  );
};

export default Button;
