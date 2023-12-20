"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full gap-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-black hover:bg-black/20",
        danger: "bg-red-500 text-white hover:bg-red-600",
        outline: "bg-transparent text-white hover:bg-white/10",
        purple:
          "bg-violet-800 hover:bg-violet-600 focus-visible:outline-violet-600 text-white",
        green:
          "bg-green-800 hover:bg-green-600 focus-visible:outline-green-600 text-white",
        blue: "bg-blue-800 hover:bg-blue-600 focus-visible:outline-blue-600 text-white",
        red: "bg-red-800 hover:bg-red-600 focus-visible:outline-red-600 text-white",
        teal: "bg-teal-800 hover:bg-teal-600 focus-visible:outline-teal-600 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        card: "h-[5rem] w-full rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
