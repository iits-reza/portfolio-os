// Button.js (JavaScript version)
"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import cx from "classnames";
import { cva } from "class-variance-authority";

const variants = cva(
  [
    "relative",
    "disabled:cursor-not-allowed",
    "bg-transparent border-2 rounded-lg",
    "font-text font-medium",
    "ease-in-out transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        navButton: [
          "text-primary",
          "border-primary",
          "hover:font-bold group hover:bg-primary ",
        ],
      },
      size: {
        default: ["text-2xl", "p-4"],
      },
    },
    defaultVariants: {
      variant: "navButton",
      size: "default",
    },
  }
);

const Button = forwardRef(
  (
    { className, icon, label, isSelected, onClick, variant, size, ...rest },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={twMerge(
          cx(
            "flex flex-col items-center gap-1",
            variants({ variant, size, className })
          )
        )}
        {...rest}
      >
        <div
          className={twMerge(
            "rounded-[16px] cursor-pointer w-[56px] h-[32px] flex items-center justify-center transition-colors",
            isSelected ? "bg-purple-300" : "hover:bg-purple-200"
          )}
        >
          <span className="material-symbols-outlined text-[24px] group-hover:font-extrabold">
            {icon}
          </span>
        </div>
        <span className="text-sm">{label}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
