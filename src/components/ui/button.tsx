import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#4A90E2] text-white shadow-md hover:bg-[#2EC4B6] hover:shadow-lg transform hover:scale-105",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg",
        outline:
          "border-2 border-[#4A90E2] bg-white text-[#4A90E2] shadow-sm hover:bg-[#4A90E2] hover:text-white hover:shadow-md",
        secondary:
          "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 hover:shadow-md",
        ghost: "bg-transparent text-gray-700 hover:bg-[#4A90E2]/10 hover:text-[#4A90E2]",
        link: "text-[#4A90E2] underline-offset-4 hover:underline hover:text-[#2EC4B6]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const paragraphVariants = cva("text-foreground", {
  variants: {
    size: {
      default: "text-[20px] font-normal leading-[32px]",
      sm: "text-[16px] font-normal leading-[26px]",
      lg: "text-[24px] font-normal leading-[38px]",
      xl: "text-[28px] font-normal leading-[44px]",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(paragraphVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Paragraph.displayName = "Paragraph";

export { Button, buttonVariants, Paragraph, paragraphVariants };
