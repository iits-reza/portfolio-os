import { forwardRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { cva, cx } from "class-variance-authority";

const variants = cva(
  [
    "overflow-hidden",
    "relative",
    "w-full",
    "h-full",
    "transition-all",
    "ease-in-out",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        circle: "rounded-full",
        smallRoundness: "rounded-[20px]",
        medRoundness: "rounded-[50px]",
        bigRoundness: "rounded-[80px]",
      },
    },
    defaultVariants: {
      variant: "medRoundness",
    },
  }
);

const CardItem = forwardRef(
  ({ variant, className, imgSource, colSpan, rowSpan }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          `relative group ${colSpan} ${rowSpan}`,
          "w-full h-full"
        )}
      >
        <div className={twMerge(cx(variants({ variant }), className))}>
          <img src={imgSource} className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
          <div className="bg-red-300 hover:bg-red-400 p-2 place-items-center place-content-center cursor-pointer text-2xl  rounded-full w-[50px] h-[50px]">
            <MdOutlineArrowOutward />
          </div>
          <div className="bg-indigo-300 hover:bg-indigo-400 p-2 place-items-center place-content-center cursor-pointer text-2xl  rounded-2xl w-[50px] h-[50px]">
            <FaGithub />
          </div>
        </div>
      </div>
    );
  }
);

CardItem.displayName = "CardItem";
export { CardItem };
