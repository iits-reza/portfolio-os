"use client";

import { VariantProps, cva } from "class-variance-authority";
import cx from "classnames";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

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
      variant: "primary",
      size: "default",
    },
  }
);

const Button = forwardRef((props, ref) => {
  const { className, children, variant, size, ...rest } = props;

  <button
    ref={ref}
    key={item.label}
    className="flex flex-col items-center gap-1"
    className={twMerge(cx(variants({ variant, size, className })))}
    {...rest}
  >
    <div
      onClick={() =>
        isSelected === true ? setIsSelected(true) : setIsSelected(false)
      }
      className={` rounded-[16px] cursor-pointer group hover:bg-purple-200 w-[56px] h-[32px] flex items-center justify-center ${
        isSelected && "bg-purple-300"
      }`}
    >
      <span className="material-symbols-outlined text-[24px] group-hover:font-extrabold">
        {item.icon}
      </span>
    </div>
    <span className="text-sm">{item.label}</span>
    {children}
  </button>;
});
Button.displayName = "Button";

export { Button };
